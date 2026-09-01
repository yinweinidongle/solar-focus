uniform float uIntensity;
uniform float uTime;
uniform float uRadius;
varying vec2 vUv;

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
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

void main() {
  vec2 p = (vUv - 0.5) / max(uRadius, 0.001);
  float d = length(p);

  // Heat shimmer distortion
  float shim = noise(p * 6.0 + vec2(uTime * 1.3, -uTime * 0.9)) * 0.04;
  d += shim;

  float core = exp(-d * d * 18.0);
  float ring1 = exp(-pow(d - 0.28, 2.0) * 55.0) * 0.55;
  float ring2 = exp(-pow(d - 0.48, 2.0) * 70.0) * 0.28;
  float ring3 = exp(-pow(d - 0.62, 2.0) * 90.0) * 0.12;

  // Noisy caustic cells
  float cells = noise(p * 9.0 + uTime * 0.4) * noise(p * 14.0 - uTime * 0.25);
  float caust = core * (0.75 + cells * 0.55) + ring1 + ring2 + ring3;

  float flicker = 0.88 + 0.12 * sin(uTime * 11.0 + d * 25.0);
  float a = caust * uIntensity * flicker;
  vec3 col = vec3(1.0, 0.93, 0.68) * a;
  col += vec3(1.0, 0.75, 0.35) * core * uIntensity * 0.35;

  gl_FragColor = vec4(col, clamp(a * 0.95, 0.0, 1.0));
}
