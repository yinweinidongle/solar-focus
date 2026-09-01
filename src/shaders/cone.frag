uniform float uIntensity;
varying float vY;
varying vec2 vUv;
void main() {
  float radial = 1.0 - abs(vUv.x - 0.5) * 2.0;
  float a = pow(radial, 1.5) * (0.15 + 0.85 * (1.0 - vY)) * uIntensity * 0.35;
  vec3 col = vec3(1.0, 0.88, 0.55) * a;
  gl_FragColor = vec4(col, a);
}
