const F=`
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `,M=`
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

      vec3 base = vec3(0.043, 0.043, 0.050);
      vec3 steel = vec3(0.20, 0.23, 0.30);
      vec3 ember = vec3(0.96, 0.26, 0.21);

      vec3 color = mix(base, steel, clamp(f * f * 2.4, 0.0, 1.0));

      // Red sits only on the crest edges. A wide ember wash reads as fire and
      // drags the contrast of anything laid over it.
      float crest = smoothstep(0.52, 0.78, r.x);
      color = mix(color, ember, crest * 0.38);

      // A thin bright rim where the crest turns over, which is what gives the
      // ribbons an edge instead of a glow.
      float rim = smoothstep(0.70, 0.80, r.x) - smoothstep(0.80, 0.92, r.x);
      color += ember * rim * 0.45;

      color += vec3(0.02, 0.022, 0.03) * clamp(q.y, 0.0, 1.0);

      // Vignette, plus a lift toward the top right where the hero has no text.
      float vignette = smoothstep(1.25, 0.25, length(uv - vec2(0.72, 0.42)));
      color *= 0.34 + 0.72 * vignette;

      gl_FragColor = vec4(color, 1.0);
    }
  `;const L=33.333333333333336,T=3e3;function b(r,s,u){const e=r.createShader(s);return e?(r.shaderSource(e,u),r.compileShader(e),r.getShaderParameter(e,r.COMPILE_STATUS)?e:(r.deleteShader(e),null)):null}function P(r){const s=r.querySelector("[data-fluid-canvas]"),u=r.querySelector(".fluid-field__dots");if(!s)return;const e=s.getContext("webgl",{antialias:!1,alpha:!1,depth:!1})||s.getContext("experimental-webgl");if(!e)return;const h=b(e,e.VERTEX_SHADER,F),v=b(e,e.FRAGMENT_SHADER,M);if(!h||!v)return;const c=e.createProgram();if(!c||(e.attachShader(c,h),e.attachShader(c,v),e.linkProgram(c),!e.getProgramParameter(c,e.LINK_STATUS)))return;e.useProgram(c);const S=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,S),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);const p=e.getAttribLocation(c,"a_position");e.enableVertexAttribArray(p),e.vertexAttribPointer(p,2,e.FLOAT,!1,0,0);const w=e.getUniformLocation(c,"u_resolution"),x=e.getUniformLocation(c,"u_pointer"),E=e.getUniformLocation(c,"u_time"),R=window.matchMedia("(prefers-reduced-motion: reduce)").matches,t={raf:0,visible:!0,frozen:!1},a={level:0,samples:0,sampleStart:0,lastDraw:0},n={x:.5,y:.5,targetX:.5,targetY:.5};function d(){const i=a.level>0?.5:Math.min(window.devicePixelRatio||1,1.6),o=Math.floor(r.clientWidth*i),l=Math.floor(r.clientHeight*i);s.width===o&&s.height===l||(s.width=o,s.height=l,e.viewport(0,0,o,l),e.uniform2f(w,o,l))}function m(i){if(n.x+=(n.targetX-n.x)*.05,n.y+=(n.targetY-n.y)*.05,e.uniform2f(x,n.x,n.y),e.uniform1f(E,i),e.drawArrays(e.TRIANGLES,0,6),s.setAttribute("data-ready",""),u){const o=(n.x-.5)*-18,l=(n.y-.5)*-18;u.style.transform=`translate3d(${o}px, ${l}px, 0)`}}function y(i){if(a.samples===0&&(a.sampleStart=i),a.samples+=1,a.samples<30)return;const o=(i-a.sampleStart)/29;a.samples=0,!(o<=40)&&(a.level===0?(a.level=1,d()):t.frozen=!0)}function f(i){if(!t.visible||t.frozen){t.raf=0;return}if(a.level>0&&i-a.lastDraw<L){t.raf=requestAnimationFrame(f);return}a.lastDraw=i,d(),m(i/1e3),y(i),t.raf=requestAnimationFrame(f)}function g(){t.raf&&cancelAnimationFrame(t.raf),t.raf=0}if(d(),R){m(12),window.addEventListener("resize",()=>{d(),m(12)});return}r.addEventListener("pointermove",i=>{const o=r.getBoundingClientRect();n.targetX=(i.clientX-o.left)/o.width,n.targetY=1-(i.clientY-o.top)/o.height}),new IntersectionObserver(i=>{for(const o of i)t.visible=o.isIntersecting&&!document.hidden,t.visible&&!t.raf&&!t.frozen&&(t.raf=requestAnimationFrame(f)),t.visible||g()}).observe(r),document.addEventListener("visibilitychange",()=>{t.visible=!document.hidden,t.visible&&!t.raf&&!t.frozen&&(t.raf=requestAnimationFrame(f)),t.visible||g()}),t.raf=requestAnimationFrame(f)}function A(){document.querySelectorAll("[data-fluid-field]").forEach(P)}function _(){const r=window;r.requestIdleCallback?r.requestIdleCallback(A,{timeout:T}):setTimeout(A,200)}document.readyState==="complete"?_():window.addEventListener("load",_,{once:!0});
