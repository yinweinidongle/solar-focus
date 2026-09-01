uniform sampler2D uHeatMap;
uniform sampler2D uFiber;
uniform float uTime;
uniform vec3 uSunDir;
uniform vec2 uFocusUV;
uniform float uFocusIntensity;
uniform float uIgnited;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  float heat = texture2D(uHeatMap, vUv).r;
  vec3 fiber = texture2D(uFiber, vUv * 4.0).rgb;

  // Cream paper base
  vec3 paper = vec3(0.93, 0.88, 0.78) * (0.92 + fiber.r * 0.14);

  // Soft lighting
  vec3 N = normalize(vNormal);
  float ndl = max(dot(N, normalize(uSunDir)), 0.0);
  paper *= 0.45 + ndl * 0.7;

  // Heat stages: warm -> brown -> black char -> ember
  vec3 warm = mix(paper, vec3(0.95, 0.78, 0.55), smoothstep(0.05, 0.25, heat));
  vec3 brown = mix(warm, vec3(0.42, 0.22, 0.10), smoothstep(0.25, 0.55, heat));
  vec3 charred = mix(brown, vec3(0.05, 0.04, 0.035), smoothstep(0.55, 0.85, heat));

  // Ember glow near ignition
  float ember = smoothstep(0.78, 1.0, heat);
  float flicker = 0.6 + 0.4 * sin(uTime * 18.0 + heat * 40.0 + hash(vUv * 80.0) * 6.28);
  vec3 emberCol = vec3(1.0, 0.35, 0.05) * ember * flicker * 1.6;
  vec3 col = charred + emberCol;

  // Burn hole after ignition
  float hole = smoothstep(0.92, 1.0, heat) * uIgnited;
  float alpha = 1.0 - hole * 0.95;
  col = mix(col, vec3(0.02), hole);

  // Focus caustic tint on paper surface
  float d = distance(vUv, uFocusUV);
  float spot = exp(-d * d * 900.0) * uFocusIntensity;
  col += vec3(1.0, 0.9, 0.55) * spot * 0.55;

  gl_FragColor = vec4(col, alpha);
}
