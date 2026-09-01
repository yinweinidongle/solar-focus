uniform float uTime;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;
varying float vCurl;

void main() {
  vUv = uv;
  vec3 pos = position;

  // Subtle corner curl / soft warp so paper isn't a dead plane
  float cx = abs(uv.x - 0.5) * 2.0;
  float cy = abs(uv.y - 0.5) * 2.0;
  float corner = pow(cx * cy, 1.35);
  float edge = pow(max(cx, cy), 2.2);
  float curl = corner * 0.028 + edge * 0.01;
  // Gentle breathing when hot areas exist (driven softly by time)
  curl += sin(uv.x * 6.0 + uTime * 0.4) * 0.0015 * edge;
  pos.z += curl;
  vCurl = curl;

  vec4 wp = modelMatrix * vec4(pos, 1.0);
  vWorldPos = wp.xyz;
  // Approximate normal from curl gradient
  vec3 n = normal;
  n.x += (uv.x - 0.5) * corner * 0.35;
  n.y += (uv.y - 0.5) * corner * 0.35;
  vNormal = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
