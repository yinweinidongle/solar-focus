varying float vY;
varying vec2 vUv;
void main() {
  vUv = uv;
  vY = uv.y;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
