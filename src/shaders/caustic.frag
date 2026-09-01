uniform float uIntensity;
uniform float uTime;
uniform float uRadius;
varying vec2 vUv;

void main() {
  vec2 p = vUv - 0.5;
  float d = length(p) / max(uRadius, 0.001);
  float core = exp(-d * d * 14.0);
  float ring = exp(-pow(d - 0.35, 2.0) * 40.0) * 0.45;
  float flicker = 0.85 + 0.15 * sin(uTime * 9.0 + d * 20.0);
  float a = (core + ring) * uIntensity * flicker;
  vec3 col = vec3(1.0, 0.92, 0.65) * a;
  gl_FragColor = vec4(col, a * 0.95);
}
