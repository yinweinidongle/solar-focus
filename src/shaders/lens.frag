uniform float uTime;
uniform vec3 uSunDir;
uniform sampler2D uEnvMap;
uniform float uIOR;
uniform float uAberration;
uniform float uFresnelPower;

varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vViewDir;
varying vec2 vUv;

vec3 sampleFakeEnv(vec3 dir) {
  // Spherical fake environment: warm sky + wooden desk hint
  float y = dir.y * 0.5 + 0.5;
  vec3 sky = mix(vec3(0.85, 0.55, 0.28), vec3(0.55, 0.75, 0.95), smoothstep(0.35, 0.9, y));
  vec3 ground = vec3(0.25, 0.16, 0.08);
  vec3 col = mix(ground, sky, smoothstep(-0.2, 0.35, dir.y));
  float sun = pow(max(dot(normalize(dir), normalize(uSunDir)), 0.0), 48.0);
  col += vec3(1.0, 0.85, 0.55) * sun * 1.4;
  return col;
}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(vViewDir);
  float ndotv = clamp(dot(N, V), 0.0, 1.0);
  float fresnel = pow(1.0 - ndotv, uFresnelPower);

  // Fake refraction / SSR-like offset using normals
  vec3 refrR = refract(-V, N, 1.0 / (uIOR - uAberration));
  vec3 refrG = refract(-V, N, 1.0 / uIOR);
  vec3 refrB = refract(-V, N, 1.0 / (uIOR + uAberration));

  float r = sampleFakeEnv(normalize(mix(-V, refrR, 0.85))).r;
  float g = sampleFakeEnv(normalize(mix(-V, refrG, 0.85))).g;
  float b = sampleFakeEnv(normalize(mix(-V, refrB, 0.85))).b;
  vec3 refracted = vec3(r, g, b);

  vec3 reflected = sampleFakeEnv(reflect(-V, N));
  vec3 glass = mix(refracted, reflected, fresnel * 0.85);

  // Subtle lens edge + thickness tint
  float rim = smoothstep(0.55, 1.0, length(vUv - 0.5) * 2.0);
  glass = mix(glass, glass * vec3(0.85, 0.95, 1.05), rim * 0.25);
  glass += vec3(0.15, 0.18, 0.22) * fresnel;

  // Specular sun highlight on glass
  vec3 H = normalize(normalize(uSunDir) + V);
  float spec = pow(max(dot(N, H), 0.0), 90.0);
  glass += vec3(1.0, 0.95, 0.8) * spec * 0.9;

  float alpha = mix(0.22, 0.55, fresnel) + rim * 0.08;
  gl_FragColor = vec4(glass, clamp(alpha, 0.18, 0.72));
}
