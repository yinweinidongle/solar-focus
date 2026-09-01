uniform float uIntensity;
uniform float uTime;
varying float vY;
varying vec2 vUv;

void main() {
  float radial = 1.0 - abs(vUv.x - 0.5) * 2.0;
  float shaft = pow(max(radial, 0.0), 1.8);
  float along = pow(1.0 - vY, 1.2);
  float dust = 0.85 + 0.15 * sin(uTime * 3.0 + vY * 20.0 + vUv.x * 30.0);
  float a = shaft * along * uIntensity * 0.42 * dust;
  // Soft god-ray falloff at edges
  a *= smoothstep(0.0, 0.15, radial);
  vec3 col = vec3(1.0, 0.9, 0.62) * a;
  gl_FragColor = vec4(col, a);
}
