uniform sampler2D uHeatMap;
uniform sampler2D uFiber;
uniform sampler2D uNormalMap;
uniform sampler2D uRoughMap;
uniform float uTime;
uniform vec3 uSunDir;
uniform vec2 uFocusUV;
uniform float uFocusIntensity;
uniform float uIgnited;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;
varying float vCurl;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.05;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = vUv;
  float heatRaw = texture2D(uHeatMap, uv).r;
  // Organic irregular burn front
  float nEdge = fbm(uv * 18.0 + heatRaw * 3.0);
  float nFine = fbm(uv * 48.0 - heatRaw * 2.0);
  float heat = heatRaw * (0.82 + nEdge * 0.28 + nFine * 0.08);
  heat = clamp(heat, 0.0, 1.0);

  vec3 fiber = texture2D(uFiber, uv * 1.15).rgb;
  vec3 nTex = texture2D(uNormalMap, uv * 1.15).xyz * 2.0 - 1.0;
  float rough = texture2D(uRoughMap, uv * 1.15).r;

  vec3 N = normalize(vNormal);
  N = normalize(N + vec3(nTex.xy * 0.35, 0.0));

  // Cream paper base with fiber
  vec3 paper = fiber * vec3(1.01, 0.99, 0.96);
  paper = mix(paper, vec3(0.94, 0.90, 0.82), 0.25);

  vec3 L = normalize(uSunDir);
  float ndl = max(dot(N, L), 0.0);
  float wrap = max(dot(N, L) * 0.5 + 0.5, 0.0);
  float hemi = 0.38 + wrap * 0.42 + ndl * 0.35;
  // Specular-ish sheen from roughness map
  vec3 H = normalize(L + normalize(cameraPosition - vWorldPos));
  float spec = pow(max(dot(N, H), 0.0), mix(28.0, 8.0, rough)) * (1.0 - rough) * 0.18;
  paper *= hemi;
  paper += vec3(1.0, 0.95, 0.85) * spec;

  // Soft stages with ash rim
  vec3 warm = mix(paper, vec3(0.96, 0.74, 0.48), smoothstep(0.04, 0.22, heat));
  vec3 brown = mix(warm, vec3(0.48, 0.26, 0.12), smoothstep(0.2, 0.48, heat));
  // Ash grey rim before deep char
  float ashMask = smoothstep(0.42, 0.62, heat) * (1.0 - smoothstep(0.62, 0.82, heat));
  vec3 ash = vec3(0.42, 0.40, 0.38);
  vec3 mid = mix(brown, ash, ashMask * 0.85);
  vec3 charred = mix(mid, vec3(0.035, 0.028, 0.022), smoothstep(0.55, 0.88, heat));

  // Ember veins (noise-driven, not uniform glow)
  float ember = smoothstep(0.72, 0.98, heat);
  float vein = fbm(uv * 55.0 + uTime * 0.8);
  float flicker = 0.55 + 0.45 * sin(uTime * 14.0 + heat * 50.0 + hash(uv * 90.0) * 6.28);
  float veinMask = smoothstep(0.45, 0.75, vein) * ember;
  vec3 emberCol = vec3(1.0, 0.28, 0.04) * veinMask * flicker * 2.2;
  emberCol += vec3(1.0, 0.55, 0.1) * ember * flicker * 0.55 * (0.4 + vein);
  vec3 col = charred + emberCol;

  // Progressive frayed hole — irregular alpha edge
  float holeNoise = fbm(uv * 32.0 + 4.0);
  float holeThresh = 0.90 - holeNoise * 0.08;
  float hole = smoothstep(holeThresh - 0.06, holeThresh + 0.02, heat) * uIgnited;
  // Frayed alpha: noisy edge rather than clean circle
  float fray = fbm(uv * 70.0);
  float alpha = 1.0 - hole * (0.92 + fray * 0.08);
  // Char lip around hole
  float lip = smoothstep(0.0, 0.25, hole) * (1.0 - hole);
  col = mix(col, vec3(0.02, 0.015, 0.01), hole);
  col += vec3(0.9, 0.25, 0.05) * lip * flicker * 0.8;

  // Soft focus highlight on paper
  float d = distance(uv, uFocusUV);
  float spot = exp(-d * d * 700.0) * uFocusIntensity;
  float ring = exp(-pow(d - 0.028, 2.0) * 5000.0) * uFocusIntensity * 0.35;
  col += vec3(1.0, 0.92, 0.62) * (spot * 0.45 + ring * 0.25);

  // Tiny AO from curl (edges slightly darker underneath feel)
  col *= 1.0 - vCurl * 4.0;

  gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
}
