uniform float uTime;
uniform vec3 uSunDir;
uniform sampler2D uSceneTex;
uniform vec2 uResolution;
uniform float uIOR;
uniform float uAberration;
uniform float uFresnelPower;
uniform float uMagnify;

varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vViewDir;
varying vec2 vUv;
varying vec4 vProjected;

vec3 sampleFakeEnv(vec3 dir) {
  float y = dir.y * 0.5 + 0.5;
  vec3 sky = mix(vec3(0.92, 0.62, 0.35), vec3(0.45, 0.68, 0.95), smoothstep(0.3, 0.95, y));
  vec3 ground = vec3(0.28, 0.18, 0.10);
  vec3 col = mix(ground, sky, smoothstep(-0.25, 0.4, dir.y));
  float sun = pow(max(dot(normalize(dir), normalize(uSunDir)), 0.0), 64.0);
  col += vec3(1.0, 0.88, 0.55) * sun * 1.8;
  return col;
}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(vViewDir);
  float ndotv = clamp(dot(N, V), 0.0, 1.0);
  float fresnel = pow(1.0 - ndotv, uFresnelPower);

  // Screen UV of this fragment
  vec2 screenUv = (vProjected.xy / vProjected.w) * 0.5 + 0.5;

  // Magnification + refraction offset (pull toward lens center in screen space)
  vec2 center = vec2(0.5);
  // Use normal XY as refraction bend
  vec2 bend = N.xy * (0.12 + uMagnify * 0.08);
  // Barrel-style magnify toward center of lens UV
  vec2 fromC = vUv - 0.5;
  float r = length(fromC);
  float mag = 1.0 - uMagnify * 0.35 * (1.0 - smoothstep(0.0, 0.5, r));
  vec2 magUv = 0.5 + fromC * mag;

  vec2 baseOff = bend + (magUv - vUv) * 0.55;

  vec2 uvR = clamp(screenUv + baseOff * (1.0 + uAberration * 2.0), vec2(0.001), vec2(0.999));
  vec2 uvG = clamp(screenUv + baseOff, vec2(0.001), vec2(0.999));
  vec2 uvB = clamp(screenUv + baseOff * (1.0 - uAberration * 2.0), vec2(0.001), vec2(0.999));

  float sr = texture2D(uSceneTex, uvR).r;
  float sg = texture2D(uSceneTex, uvG).g;
  float sb = texture2D(uSceneTex, uvB).b;
  vec3 refractedScene = vec3(sr, sg, sb);

  // Fallback env mix for edges / missing sample richness
  vec3 refrR = refract(-V, N, 1.0 / (uIOR - uAberration));
  vec3 refrG = refract(-V, N, 1.0 / uIOR);
  vec3 refrB = refract(-V, N, 1.0 / (uIOR + uAberration));
  vec3 envRefr = vec3(
    sampleFakeEnv(normalize(mix(-V, refrR, 0.9))).r,
    sampleFakeEnv(normalize(mix(-V, refrG, 0.9))).g,
    sampleFakeEnv(normalize(mix(-V, refrB, 0.9))).b
  );

  vec3 refracted = mix(envRefr, refractedScene, 0.82);
  vec3 reflected = sampleFakeEnv(reflect(-V, N));

  // Internal reflection highlight from sun (thick glass feel)
  vec3 glass = mix(refracted, reflected, fresnel * 0.75);
  float rim = smoothstep(0.42, 0.92, length(vUv - 0.5) * 2.0);
  glass = mix(glass, glass * vec3(0.88, 0.96, 1.05), rim * 0.2);
  glass += vec3(0.12, 0.16, 0.22) * fresnel;

  // Primary sun specular + secondary internal bounce
  vec3 H = normalize(normalize(uSunDir) + V);
  float spec = pow(max(dot(N, H), 0.0), 120.0);
  float internal = pow(max(dot(N, normalize(uSunDir)), 0.0), 8.0) * fresnel;
  glass += vec3(1.0, 0.96, 0.85) * spec * 1.15;
  glass += vec3(1.0, 0.9, 0.7) * internal * 0.35;

  // Slight thickness parallax tint
  float thick = pow(1.0 - ndotv, 2.0);
  glass *= mix(vec3(1.0), vec3(0.92, 0.97, 1.02), thick * 0.35);

  float alpha = mix(0.28, 0.62, fresnel) + rim * 0.06;
  gl_FragColor = vec4(glass, clamp(alpha, 0.22, 0.78));
}
