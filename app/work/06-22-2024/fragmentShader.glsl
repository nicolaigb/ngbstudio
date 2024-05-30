#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform float u_time;
varying vec2 vUv;

vec3 colorA = vec3(0.912,0.191,0.652);
vec3 colorB = vec3(0.000,0.777,0.052);

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

void main() {
  // "Normalizing" with an arbitrary value
  // We'll see a cleaner technique later :)   
  vec3 color = vec3(0.0);

  vec3 pct = vec3(vUv.x);

  pct.r = abs(sin(vUv.x*PI*16.0 + u_time));
  pct.g = abs(sin(vUv.x*PI*2.0 + u_time));
  pct.b = abs(sin(vUv.x*PI*4.0 + u_time));

  color = mix(colorA, colorB, pct);

  // Plot transition lines for each channel
  color = mix(color,vec3(1.0,0.0,0.0),plot(vUv,pct.r));
  color = mix(color,vec3(0.0,1.0,0.0),plot(vUv,pct.g));
  color = mix(color,vec3(0.0,0.0,1.0),plot(vUv,pct.b));

  gl_FragColor = vec4(color,1.0);
}
