const y=`
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `,S=`
    precision highp float;

    uniform vec2 u_resolution;
    uniform vec2 u_pointer;
    uniform float u_time;

    // Value noise. Cheap, and the domain warp below hides the grid artefacts.
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      for (int i = 0; i < 5; i++) {
        value += amplitude * noise(p);
        p *= 2.03;
        amplitude *= 0.5;
      }
      return value;
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 p = uv;
      p.x *= u_resolution.x / u_resolution.y;

      float t = u_time * 0.035;
      vec2 drift = (u_pointer - 0.5) * 0.25;

      // Domain warping: noise fed through noise, twice, makes the ribbons.
      vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t * 0.6));
      vec2 r = vec2(
        fbm(p + 3.4 * q + vec2(1.7, 9.2) + drift + t * 0.7),
        fbm(p + 3.4 * q + vec2(8.3, 2.8) - drift - t * 0.4)
      );
      float f = fbm(p + 3.0 * r);

      vec3 base = vec3(0.055, 0.055, 0.063);
      vec3 steel = vec3(0.26, 0.30, 0.38);
      vec3 ember = vec3(0.96, 0.26, 0.21);

      vec3 color = mix(base, steel, clamp(f * f * 2.1, 0.0, 1.0));
      // Ember only in the crests, so the brand red reads as an accent.
      color = mix(color, ember, clamp(pow(max(r.x, 0.0), 2.4) * 1.5, 0.0, 0.85));
      color += vec3(0.05, 0.02, 0.02) * clamp(q.y, 0.0, 1.0);

      // Vignette, plus a lift toward the top right where the hero has no text.
      float vignette = smoothstep(1.25, 0.25, length(uv - vec2(0.72, 0.42)));
      color *= 0.45 + 0.75 * vignette;

      gl_FragColor = vec4(color, 1.0);
    }
  `;function g(i,a,f){const e=i.createShader(a);return e?(i.shaderSource(e,f),i.compileShader(e),i.getShaderParameter(e,i.COMPILE_STATUS)?e:(i.deleteShader(e),null)):null}function E(i){const a=i.querySelector("[data-fluid-canvas]"),f=i.querySelector(".fluid-field__dots");if(!a)return;const e=a.getContext("webgl",{antialias:!1,alpha:!1,depth:!1})||a.getContext("experimental-webgl");if(!e)return;const m=g(e,e.VERTEX_SHADER,y),v=g(e,e.FRAGMENT_SHADER,S);if(!m||!v)return;const c=e.createProgram();if(!c||(e.attachShader(c,m),e.attachShader(c,v),e.linkProgram(c),!e.getProgramParameter(c,e.LINK_STATUS)))return;e.useProgram(c);const b=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const h=e.getAttribLocation(c,"a_position");e.enableVertexAttribArray(h),e.vertexAttribPointer(h,2,e.FLOAT,!1,0,0);const A=e.getUniformLocation(c,"u_resolution"),x=e.getUniformLocation(c,"u_pointer"),_=e.getUniformLocation(c,"u_time"),w=window.matchMedia("(prefers-reduced-motion: reduce)").matches,t={raf:0,visible:!0},o={x:.5,y:.5,targetX:.5,targetY:.5};function u(){const n=Math.min(window.devicePixelRatio||1,1.6),r=Math.floor(i.clientWidth*n),s=Math.floor(i.clientHeight*n);a.width===r&&a.height===s||(a.width=r,a.height=s,e.viewport(0,0,r,s),e.uniform2f(A,r,s))}function d(n){if(o.x+=(o.targetX-o.x)*.05,o.y+=(o.targetY-o.y)*.05,e.uniform2f(x,o.x,o.y),e.uniform1f(_,n),e.drawArrays(e.TRIANGLES,0,6),a.setAttribute("data-ready",""),f){const r=(o.x-.5)*-18,s=(o.y-.5)*-18;f.style.transform=`translate3d(${r}px, ${s}px, 0)`}}function l(n){t.visible&&(u(),d(n/1e3),t.raf=requestAnimationFrame(l))}function p(){t.raf&&cancelAnimationFrame(t.raf),t.raf=0}if(u(),w){d(12),window.addEventListener("resize",()=>{u(),d(12)});return}i.addEventListener("pointermove",n=>{const r=i.getBoundingClientRect();o.targetX=(n.clientX-r.left)/r.width,o.targetY=1-(n.clientY-r.top)/r.height}),new IntersectionObserver(n=>{for(const r of n)t.visible=r.isIntersecting&&!document.hidden,t.visible&&!t.raf&&(t.raf=requestAnimationFrame(l)),t.visible||p()}).observe(i),document.addEventListener("visibilitychange",()=>{t.visible=!document.hidden,t.visible&&!t.raf&&(t.raf=requestAnimationFrame(l)),t.visible||p()}),t.raf=requestAnimationFrame(l)}document.querySelectorAll("[data-fluid-field]").forEach(E);
