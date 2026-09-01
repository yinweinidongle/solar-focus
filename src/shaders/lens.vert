varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vViewDir;
varying vec2 vUv;
varying vec4 vProjected;

void main() {
  vUv = uv;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  vViewDir = normalize(cameraPosition - worldPos.xyz);
  vec4 mv = viewMatrix * worldPos;
  vProjected = projectionMatrix * mv;
  gl_Position = vProjected;
}
