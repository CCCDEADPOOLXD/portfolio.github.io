/* ============================================================
   DATA.JS & PSP.JS — The Persona OS Portfolio Database (MERGED)
   ============================================================ */

window.SK_CATEGORIES = [
  {
    name: "01 ABOUT ME",
    items: [
      {
        id: 'about_1', title: 'The Hook', sub: 'Technical Artist', meta: 'INTRO',
        isText: true,
        textLines: [
            "HI, I AM NITANT.",
            "I MAKE COOL STUFF",
            "THAT MAKES PEOPLE SAY:",
            "'HOW DID YOU DO THAT?'"
        ],
        instructions: [{ btn: 'X', text: 'OPEN RESUME' }, { btn: 'O', text: 'SCROLL TO ABOUT' }, { btn: '►', text: 'NEXT SLIDE' }],
        actionX: 'resume.pdf', actionO: 'scroll:#about', actionTriangle: null
      },
      {
        id: 'about_2', title: 'Education', sub: 'B.Design', meta: 'ACAD',
        isText: true,
        textLines: [
            "EDUCATION:",
            "B.DESIGN GAME DESIGN",
            "ACAD, INDORE",
            "AUG 2023 - PRESENT"
        ],
        instructions: [{ btn: 'X', text: 'OPEN RESUME' }, { btn: '◄', text: 'PREV SLIDE' }, { btn: '►', text: 'NEXT SLIDE' }],
        actionX: 'resume.pdf', actionO: null, actionTriangle: null
      },
      {
        id: 'about_3', title: 'Leadership', sub: 'GDAI', meta: 'COMMUNITY',
        isText: true,
        textLines: [
            "GDAI AMBASSADOR:",
            "ASSISTING IN LOCAL EVENTS",
            "& PROMOTING GAME DEV",
            "RESOURCES TO STUDENTS."
        ],
        instructions: [{ btn: 'X', text: 'OPEN RESUME' }, { btn: '◄', text: 'PREV SLIDE' }, { btn: '►', text: 'NEXT SLIDE' }],
        actionX: 'resume.pdf', actionO: null, actionTriangle: null
      },
      {
        id: 'about_4', title: 'Hobbies', sub: 'Beyond Code', meta: 'MUSIC & LANG',
        isText: true,
        textLines: [
            "BEYOND THE SCREEN:",
            "I LOVE MUSIC, AM LEARNING",
            "GUITAR, AND STUDYING",
            "LANGUAGES (EN/HI/DE)."
        ],
        instructions: [{ btn: 'X', text: 'OPEN RESUME' }, { btn: '◄', text: 'PREV SLIDE' }, { btn: '△', text: 'VIEW SKILLS' }],
        actionX: 'resume.pdf', actionO: null, actionTriangle: 'scroll:#skills'
      }
    ]
  },
  {
    name: "02 TECH ART",
    items: [
      {
        id: 'sobel', title: 'Shader Development', sub: 'Custom Edge-Detection', meta: 'SHADERS · HLSL',
        img: 'showcase_shader.jpg', vid: '', link: 'showcase-shaders.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }], actionX: 'showcase-shaders.html', actionO: null
      },
      {
        id: 'explosion', title: 'VFX & Particles', sub: 'Mobile-Ready Systems', meta: 'VFX · SHURIKEN',
        img: 'showcase_vfx.jpg', vid: '', link: 'showcase-vfx.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }], actionX: 'showcase-vfx.html', actionO: null
      },
      {
        id: 'tools', title: 'Editor Tools', sub: 'Node-Based Combat Graph', meta: 'TOOLS · C#',
        img: 'showcase_tools.jpg', vid: '', link: 'showcase-tools.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }], actionX: 'showcase-tools.html', actionO: null
      }
    ]
  },
  {
    name: "03 PROJECTS",
    items: [
      {
        id: 'knuckle', title: 'Knuckle', sub: 'Frame-perfect fighting engine & FSM', meta: 'PROJECT · UNITY · C#',
        img: 'knuckle_square.jpg', vid: '', link: 'project-knuckle.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }, { btn: 'O', text: 'PLAY ON ITCH.IO' }], actionX: 'project-knuckle.html', actionO: 'https://cccdeadpool-xd.itch.io/'
      },
      {
        id: 'lumen', title: 'Lumin', sub: 'IGDC 2025 Best Groups Selection', meta: 'PROJECT · GEMINI API',
        img: 'lumen_square.jpg', vid: '', link: 'project-lumen.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }, { btn: 'O', text: 'PLAY ON ITCH.IO' }], actionX: 'project-lumen.html', actionO: 'https://cccdeadpool-xd.itch.io/' 
      },
      {
        id: 'unreal', title: 'Unreal Environment', sub: 'Procedural Content Generation', meta: 'PROJECT · UNREAL',
        img: 'unreal_square.jpg', vid: '', link: 'project-unreal.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }], actionX: 'project-unreal.html', actionO: null
      },
      {
        id: 'film', title: 'Cinematic Film', sub: 'Lighting Supervision', meta: 'PROJECT · LIGHTING',
        img: 'film_square.jpg', vid: '', link: 'project-film.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }], actionX: 'project-film.html', actionO: null
      },
      {
        id: 'rotor', title: 'Rotor Warfare', sub: 'Asymmetric Multiplayer Netcode', meta: 'PROJECT · NETCODE',
        img: 'heli_square.jpg', vid: '', link: 'project-heli.html',
        instructions: [{ btn: 'X', text: 'VIEW DETAILS' }], actionX: 'project-heli.html', actionO: null
      }
    ]
  },
  {
    name: "04 VIDEOS",
    items: [
      {
        id: 'vfx_reel', title: 'VFX & Combat Juice', sub: 'Raw Gameplay Capture', meta: 'VIDEO · VFX GRAPH',
        img: 'showcase_vfx.jpg', vid: 'explosion_vfx_video.mp4', link: '#',
        instructions: [{ btn: 'X', text: 'FULLSCREEN VIDEO' }], actionX: 'explosion_vfx_video.mp4', actionO: null
      },
      {
        id: 'shader_reel', title: 'Myth-Tech Shaders', sub: 'Raw Gameplay Capture', meta: 'VIDEO · HLSL',
        img: 'showcase_shader.jpg', vid: 'sobel_outline_video.mp4', link: '#',
        instructions: [{ btn: 'X', text: 'FULLSCREEN VIDEO' }], actionX: 'sobel_outline_video.mp4', actionO: null
      }
    ]
  }
];

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const CATEGORIES = window.SK_CATEGORIES || [];
const SK = window.SK || { fireReady() {}, onReady(f) { f(); } };
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const sndTick = new Audio('tick.mp3'); sndTick.volume = 0.3;
const sndBoot = new Audio('boot.mp3'); sndBoot.volume = 0.6;

const canvas = document.getElementById('pspCanvas');
const stage = document.querySelector('.machine__stage');
const section = document.querySelector('.machine');

let scrollRotationY = 0;
let isHoveringConsole = false;
let activeHints = {}; // Tracks active glowing hint lights targeting specific buttons

if (canvas && CATEGORIES.length) init();

function init() {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 400);
  camera.position.set(0, 0, 30);

  const root = new THREE.Group(); const model = new THREE.Group(); root.add(model); scene.add(root);
  
  scene.add(new THREE.HemisphereLight(0x3a4a5d, 0x15171a, 1.0));
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.5); keyLight.position.set(-8, 9, 12); scene.add(keyLight);
  const rimIce = new THREE.DirectionalLight(0xe60012, 1.15); rimIce.position.set(11, 4, -9); scene.add(rimIce);
  const rimHot = new THREE.DirectionalLight(0xff2e7e, 0.75); rimHot.position.set(-12, -5, -7); scene.add(rimHot);

  const spillA = new THREE.PointLight(0xffffff, 0, 26, 2); const spillB = new THREE.PointLight(0xffffff, 0, 20, 2); const spillC = new THREE.PointLight(0xffffff, 0, 20, 2);
  scene.add(spillA, spillB, spillC);

  // Dual Hint Lights for D-Pad or Single Button guidance
  const hintLight1 = new THREE.PointLight(0xe60012, 0, 10, 2); scene.add(hintLight1);
  const hintLight2 = new THREE.PointLight(0xe60012, 0, 10, 2); scene.add(hintLight2);

  const pressLight = new THREE.PointLight(0xe60012, 0, 9, 2); scene.add(pressLight);
  let pressLightLife = 0;

  const SW = 960, SH = 544; const sc = document.createElement('canvas'); sc.width = SW; sc.height = SH;
  const sctx = sc.getContext('2d', { willReadFrequently: false }); sctx.fillStyle = '#05070a'; sctx.fillRect(0, 0, SW, SH);
  const screenTex = new THREE.CanvasTexture(sc); screenTex.colorSpace = THREE.SRGBColorSpace; screenTex.minFilter = THREE.LinearFilter; screenTex.magFilter = THREE.LinearFilter; screenTex.generateMipmaps = false;
  const av = document.createElement('canvas'); av.width = 8; av.height = 5; const avctx = av.getContext('2d', { willReadFrequently: true });

  const crtMat = new THREE.ShaderMaterial({
    uniforms: { uTex: { value: screenTex }, uTime: { value: 0 }, uPower: { value: 0.05 }, uWarp: { value: 0 }, uGrid: { value: new THREE.Vector2(240, 136) }, uBright: { value: 0.92 } },
    transparent: false, toneMapped: false,
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      precision highp float; uniform sampler2D uTex; uniform float uTime, uPower, uWarp, uBright; uniform vec2 uGrid; varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
      void main(){
        vec2 uv = vUv; vec2 c = uv - 0.5; float r2 = dot(c, c); uv = 0.5 + c * (1.0 + 0.032 * r2);
        float band = step(0.5, hash(vec2(floor(uv.y * 26.0), floor(uTime * 22.0)))); uv.x += uWarp * (band - 0.5) * 0.09;
        if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) { gl_FragColor = vec4(0.005, 0.008, 0.013, 1.0); return; }
        vec2 g = uGrid; vec2 quv = (floor(uv * g) + 0.5) / g; float ab = (0.0005 + 0.0020 * r2) * (1.0 + uWarp * 6.0);
        float rr = texture2D(uTex, vec2(quv.x + ab, quv.y)).r; float gg = texture2D(uTex, quv).g; float bb = texture2D(uTex, vec2(quv.x - ab, quv.y)).b; vec3 col = vec3(rr, gg, bb);
        float sub = mod(floor(uv.x * g.x * 3.0), 3.0); vec3 mask = vec3(sub < 1.0 ? 1.0 : 0.90, (sub >= 1.0 && sub < 2.0) ? 1.0 : 0.90, sub >= 2.0 ? 1.0 : 0.90); col *= mask;
        float scan = 0.93 + 0.07 * cos(uv.y * g.y * 6.28318); col *= scan; col += vec3(0.05, 0.075, 0.10) * pow(1.0 - uv.y, 3.0) * 0.45; col *= 1.0 - 0.30 * pow(r2 * 1.55, 1.6);
        col += (hash(quv * 620.0) - 0.5) * 0.012; float open = smoothstep(0.0, 1.0, uPower); float slit = smoothstep(open * 0.62 + 0.002, 0.0, abs(uv.y - 0.5));
        col = mix(vec3(0.8, 0.1, 0.1) * slit * 2.4, col, open); col *= max(0.1, open); gl_FragColor = vec4(col * uBright, 1.0);
      }`
  });

  let screenMesh = null; const buttons = {}; const pressable = []; let modelReady = false;
  const loadingEl = document.getElementById('pspLoading'); const loadPct = document.getElementById('loadPct');

  new GLTFLoader().load('psp.glb', (gltf) => { 
        setup(gltf.scene); 
        if (loadingEl) { loadingEl.style.opacity = '0'; setTimeout(() => loadingEl.style.display = 'none', 500); }
    },
    (xhr) => { if (loadPct && xhr.total > 0) loadPct.innerText = Math.round((xhr.loaded / xhr.total) * 100) + '%'; },
    (err) => { if (loadingEl) { loadingEl.style.animation = 'none'; loadingEl.innerHTML = '<div class="persona-content" style="background:#e60012;color:#fff;">ERROR: psp.glb NOT FOUND</div>'; } SK.fireReady(); }
  );

  function setup(src) {
    model.add(src); src.updateWorldMatrix(true, true); const parts = {}; const bin = [];
    src.traverse((o) => {
      if (!o.isMesh) return; o.frustumCulled = false; const n = o.name.toLowerCase();
      if (n.indexOf('ground') === 0) { bin.push(o); return; }
      if (n.indexOf('screen') === 0) screenMesh = o;
      const m = n.match(/^button(\d+)/); if (m) parts['b' + m[1]] = o;
      if (o.material) o.material = o.material.clone();
    });
    bin.forEach((o) => { o.parent && o.parent.remove(o); }); if (!screenMesh) { SK.fireReady(); return; }

    const nrm = largestFaceNormal(screenMesh), centre = new THREE.Box3().setFromObject(src).getCenter(new THREE.Vector3()), sCentre = new THREE.Box3().setFromObject(screenMesh).getCenter(new THREE.Vector3());
    if (nrm.dot(sCentre.clone().sub(centre)) < 0) nrm.negate();
    const rowKeys = ['b9', 'b10', 'b11', 'b12', 'b13', 'b14', 'b15']; const row = new THREE.Vector3(); let rowN = 0;
    rowKeys.forEach((k) => { if (parts[k]) { row.add(new THREE.Box3().setFromObject(parts[k]).getCenter(new THREE.Vector3())); rowN++; } });
    let up = rowN ? row.divideScalar(rowN).sub(sCentre).projectOnPlane(nrm).normalize().negate() : new THREE.Vector3(0, 1, 0).projectOnPlane(nrm).normalize();
    const right = new THREE.Vector3().crossVectors(up, nrm).normalize(); up.crossVectors(nrm, right).normalize();

    model.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(right, up, nrm)).invert(); model.updateWorldMatrix(true, true);
    const size = new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3()); model.scale.setScalar(10 / Math.max(size.x, size.y, size.z)); model.position.sub(new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3())); model.updateWorldMatrix(true, true);
    fitToView();

    const sNrm = largestFaceNormal(screenMesh); if (sNrm.z < 0) sNrm.negate();
    buildScreenUVs(screenMesh, sNrm, new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0));
    screenMesh.material = crtMat; screenMesh.renderOrder = 2;

    mapButton('up', parts.b1); mapButton('right', parts.b2); mapButton('down', parts.b3); mapButton('left', parts.b4); mapButton('triangle', parts.b5); mapButton('circle', parts.b6); mapButton('cross', parts.b7); mapButton('square', parts.b8); mapButton('start', parts.b15);
    function mapButton(role, mesh) {
      if (!mesh) return; const parent = mesh.parent || model; const pq = new THREE.Quaternion(); parent.getWorldQuaternion(pq); const ps = new THREE.Vector3(); parent.getWorldScale(ps);
      const axis = new THREE.Vector3(0, 0, 1).applyQuaternion(pq.invert()); axis.set(axis.x / (ps.x || 1), axis.y / (ps.y || 1), axis.z / (ps.z || 1));
      buttons[role] = { role, mesh, home: mesh.position.clone(), axis, t: 0 }; mesh.userData.role = role; pressable.push(mesh);
    }
    const sb = new THREE.Box3().setFromObject(screenMesh), sc2 = sb.getCenter(new THREE.Vector3()), halfW = (sb.max.x - sb.min.x) / 2;
    spillA.position.set(sc2.x, sc2.y, sc2.z + 2.2); spillB.position.set(sc2.x - halfW * 1.5, sc2.y, sc2.z + 1.5); spillC.position.set(sc2.x + halfW * 1.5, sc2.y, sc2.z + 1.5);
    screenMesh.userData.role = 'screen'; pressable.push(screenMesh); modelReady = true; SK.fireReady(); drawIdleScreen(); 
    
    // Auto-trigger boot hint on load
    setTimeout(() => { if (window.triggerBootHint) window.triggerBootHint(); }, 1500);
  }

  function largestFaceNormal(mesh) { 
    const geo = mesh.geometry, pos = geo.getAttribute('position'), idx = geo.getIndex(); const count = idx ? idx.count : pos.count;
    const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3(), ab = new THREE.Vector3(), ac = new THREE.Vector3(), cr = new THREE.Vector3(); let best = -1; const out = new THREE.Vector3(0, 0, 1);
    for (let i = 0; i < count; i += 3) { a.fromBufferAttribute(pos, idx ? idx.getX(i) : i); b.fromBufferAttribute(pos, idx ? idx.getX(i+1) : i+1); c.fromBufferAttribute(pos, idx ? idx.getX(i+2) : i+2); ab.subVectors(b, a); ac.subVectors(c, a); cr.crossVectors(ab, ac); const area = cr.lengthSq(); if (area > best) { best = area; out.copy(cr).normalize(); } } return out.applyMatrix3(new THREE.Matrix3().getNormalMatrix(mesh.matrixWorld)).normalize();
  }

  function buildScreenUVs(mesh, nrm, right, up) {
    const geo = mesh.geometry, p = geo.getAttribute('position'), mw = mesh.matrixWorld; const wp = []; const v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) wp.push(v.fromBufferAttribute(p, i).applyMatrix4(mw).clone());
    const e1 = right.clone().projectOnPlane(nrm).normalize(), e2 = new THREE.Vector3().crossVectors(nrm, e1).normalize(); const a = [], b = []; let ma = 0, mb = 0;
    for (let i = 0; i < wp.length; i++) { const x = wp[i].dot(e1), y = wp[i].dot(e2); a.push(x); b.push(y); ma += x; mb += y; } ma /= a.length; mb /= b.length;
    let Saa = 0, Sbb = 0, Sab = 0; for (let i = 0; i < a.length; i++) { const da = a[i] - ma, db = b[i] - mb; Saa += da * da; Sbb += db * db; Sab += da * db; }
    const th = 0.5 * Math.atan2(2 * Sab, Saa - Sbb), cs = Math.cos(th), sn = Math.sin(th);
    const U = e1.clone().multiplyScalar(cs).addScaledVector(e2, sn).normalize(), V = e1.clone().multiplyScalar(-sn).addScaledVector(e2, cs).normalize();
    if (U.dot(right) < 0) U.negate(); if (V.dot(up) < 0) V.negate(); let minU = Infinity, maxU = -Infinity, minV = Infinity, maxV = -Infinity; const us = [], vs = [];
    for (let i = 0; i < wp.length; i++) { const u = wp[i].dot(U), w = wp[i].dot(V); us.push(u); vs.push(w); if (u < minU) minU = u; if (u > maxU) maxU = u; if (w < minV) minV = w; if (w > maxV) maxV = w; }
    const du = (maxU - minU) || 1, dv = (maxV - minV) || 1, uv = new Float32Array(p.count * 2); for (let i = 0; i < p.count; i++) { uv[i * 2] = (us[i] - minU) / du; uv[i * 2 + 1] = (vs[i] - minV) / dv; } geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  }

  const cache = new Map(), vcache = new Map();
  function getImage(src) { if (cache.has(src)) return cache.get(src); const p = new Promise((res) => { const im = new Image(); im.onload = () => res(im); im.onerror = () => res(null); im.src = src; }); cache.set(src, p); return p; }
  function getVideo(src) {
    if (!src) return Promise.resolve(null); if (vcache.has(src)) return vcache.get(src);
    const p = new Promise((res) => { const v = document.createElement('video'); v.src = src; v.muted = true; v.loop = true; v.playsInline = true; let done = false; const ok = () => { if (done) return; done = true; res(v); }; v.addEventListener('canplaythrough', ok, { once: true }); v.addEventListener('canplay', ok, { once: true }); v.addEventListener('error', () => { if (!done) { done = true; res(null); } }, { once: true }); v.load(); });
    vcache.set(src, p); return p;
  }

  let isStarted = false, isBooting = false, currentCatIdx = 0, currentItemIdx = 0; let powerT = 0.05, powerTarget = 0.05, warpT = 0, live = null; 

  const bg = document.createElement('canvas'); bg.width = SW; bg.height = SH; const bgctx = bg.getContext('2d');
  function paintBackdrop(img) {
    bgctx.fillStyle = '#151515'; bgctx.fillRect(0, 0, SW, SH); if (!img) return;
    const ar = (img.videoWidth || img.width) / (img.videoHeight || img.height), sar = SW / SH;
    bgctx.save(); try { bgctx.filter = 'blur(16px) saturate(1.5) brightness(0.9)'; } catch (e) {}
    let cw, ch; if (ar > sar) { ch = SH * 1.28; cw = ch * ar; } else { cw = SW * 1.28; ch = cw / ar; }
    bgctx.drawImage(img, (SW - cw) / 2, (SH - ch) / 2, cw, ch); bgctx.restore();
  }

  function drawIdleScreen() {
    sctx.fillStyle = '#000000'; sctx.fillRect(0, 0, SW, SH);
    if (Math.floor(Date.now() / 600) % 2 === 0) {
        sctx.textBaseline = 'middle'; sctx.textAlign = 'center'; sctx.font = '40px "VT323", monospace'; sctx.fillStyle = '#e60012';
        sctx.fillText("> PRESS ANY BUTTON TO START", SW / 2, SH / 2);
    }
    screenTex.needsUpdate = true;
  }

  function drawFrame(work, img) {
    if (!isStarted || isBooting) return;
    if (work.isText) {
        sctx.fillStyle = '#e60012'; sctx.fillRect(0, 0, SW, SH);
        sctx.fillStyle = '#0a0a0a'; sctx.beginPath(); sctx.moveTo(0, 0); sctx.lineTo(SW * 0.7, 0); sctx.lineTo(SW * 0.4, SH); sctx.lineTo(0, SH); sctx.fill();
        sctx.textBaseline = 'middle'; sctx.textAlign = 'center'; sctx.font = '60px "VT323", monospace';
        if (work.textLines) { work.textLines.forEach((line, index) => { sctx.fillStyle = '#ffffff'; sctx.fillText(line, SW / 2 + 4, (SH / 2 - 60) + (index * 60) + 4); sctx.fillStyle = index === 0 ? '#e60012' : '#ffffff'; sctx.fillText(line, SW / 2, (SH / 2 - 60) + (index * 60)); }); }
    } else {
        sctx.drawImage(bg, 0, 0);
        if (img) {
          const ar = (img.videoWidth||img.width) / (img.videoHeight||img.height), sar = SW / SH; let fw, fh; const pad = 0.90;
          if (ar > sar) { fw = SW * pad; fh = fw / ar; } else { fh = SH * pad; fw = fh * ar; } const fx = (SW - fw) / 2, fy = (SH - fh) / 2;
          sctx.shadowColor = 'rgba(0,0,0,.75)'; sctx.shadowBlur = 26; sctx.drawImage(img, fx, fy, fw, fh); sctx.strokeStyle = 'rgba(230,0,18,.35)'; sctx.lineWidth = 2; sctx.strokeRect(fx + 1, fy + 1, fw - 2, fh - 2);
        }
    }
    sctx.textBaseline = 'middle'; sctx.font = '30px "VT323", monospace'; sctx.textAlign = 'left'; sctx.fillStyle = 'rgba(255,255,255,.92)'; sctx.fillText(String(currentItemIdx + 1).padStart(2, '0'), 26, 32); sctx.fillStyle = 'rgba(255,255,255,.55)'; sctx.fillText('/ ' + String(CATEGORIES[currentCatIdx].items.length).padStart(2, '0'), 62, 32);
    const px0 = SW - 26;
    for (let i = 0; i < CATEGORIES[currentCatIdx].items.length; i++) {
      const on = i === currentItemIdx, w = on ? 20 : 7, x = px0 - (CATEGORIES[currentCatIdx].items.length - i) * 24;
      sctx.fillStyle = on ? '#e60012' : 'rgba(255,255,255,.38)'; sctx.fillRect(x, SH - 30, w, 3);
    } screenTex.needsUpdate = true;
  }

  // --- DUAL-LIGHT HINT SYSTEM ---
  window.triggerBootHint = function() {
      if (!isStarted) activeHints['cross'] = { life: 2.5 };
  };

  window.triggerLeftHint = function() {
      if (!isStarted) return;
      activeHints['up'] = { life: 2.5 };
      activeHints['down'] = { life: 2.5 };
  };

  window.triggerRightHint = function(sourceId, role) {
      if (!isStarted) return;
      activeHints[role] = { life: 2.5 };
  };
  
  window.clearHints = function() {
      activeHints = {};
  };

  document.querySelectorAll('.left-ui-element').forEach(el => {
      el.addEventListener('click', () => window.triggerLeftHint());
  });
  
  function updateHTMLUI(catIdx, itemIdx) {
    for (let i = 0; i < CATEGORIES.length; i++) { const menuEl = document.getElementById('cat-' + i); if (menuEl) { if (i === catIdx) menuEl.classList.add('active'); else menuEl.classList.remove('active'); } }
    document.getElementById('uiCounterWrap').style.opacity = '1'; document.getElementById('uiCountIdx').innerText = String(itemIdx + 1).padStart(2, '0'); document.getElementById('uiCountTot').innerText = '/' + String(CATEGORIES[catIdx].items.length).padStart(2, '0');
    const instructions = CATEGORIES[catIdx].items[itemIdx].instructions || [], instContainer = document.getElementById('uiInstructions');
    if (instContainer) {
      instContainer.innerHTML = '';
      instructions.forEach((inst, index) => {
        const row = document.createElement('div'); row.className = 'persona-box hoverable';
        row.id = 'inst-row-' + index;

        let iconHtml = inst.btn;
        let roleMapping = 'cross';
        if (inst.btn === 'X') { iconHtml = '<i class="fa-solid fa-xmark"></i>'; roleMapping = 'cross'; }
        else if (inst.btn === 'O') { iconHtml = '<i class="fa-regular fa-circle"></i>'; roleMapping = 'circle'; }
        else if (inst.btn === '△') { iconHtml = '<i class="fa-solid fa-caret-up"></i>'; roleMapping = 'triangle'; }
        else if (inst.btn === '►') { iconHtml = '<i class="fa-solid fa-caret-right"></i>'; roleMapping = 'right'; }
        else if (inst.btn === '◄') { iconHtml = '<i class="fa-solid fa-caret-left"></i>'; roleMapping = 'left'; }

        row.innerHTML = `<div class="persona-content"><span class="btn-icon">${iconHtml}</span> ${inst.text}</div>`;
        instContainer.appendChild(row); setTimeout(() => row.classList.add('visible'), 100 * index);
        
        row.onclick = () => { window.triggerRightHint(row.id, roleMapping); };
      });
    }
  }

  let spillDue = 0;
  function updateSpillThrottled(t) {
    if (t < spillDue) return; spillDue = t + 0.16; avctx.drawImage(sc, 0, 0, av.width, av.height); let r = 0, g = 0, b = 0;
    try { const d = avctx.getImageData(0, 0, av.width, av.height).data; for (let i = 0; i < d.length; i += 4) { r += d[i]; g += d[i + 1]; b += d[i + 2]; } const n = d.length / 4; r /= n * 255; g /= n * 255; b /= n * 255; } catch (e) { r = g = b = 0.6; }
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b, mx = Math.max(r, g, b) || 1;
    spillTargetColor.copy(new THREE.Color(Math.min(1, 0.30 + (r/mx)*0.70), Math.min(1, 0.30 + (g/mx)*0.70), Math.min(1, 0.30 + (b/mx)*0.70))); spillTargetIntensity = 16 + lum * 46;
  }
  const spillTargetColor = new THREE.Color(0.8, 0.1, 0.1); let spillTargetIntensity = 0;

  async function select(catIndex, itemIndex) {
    currentCatIdx = catIndex; currentItemIdx = itemIndex; const w = CATEGORIES[currentCatIdx].items[currentItemIdx]; updateHTMLUI(currentCatIdx, currentItemIdx);
    if (!reduce) warpT = 1; if (live) { try { live.pause(); } catch (e) {} live = null; }
    const token = ++selectToken;
    if (w.isText) { if (token !== selectToken) return; drawFrame(w, null); return; }
    const img = await getImage(w.img); if (token !== selectToken) return; paintBackdrop(img); drawFrame(w, img);
    if (!w.vid || reduce) return; const v = await getVideo(w.vid); if (token !== selectToken || !v) return;
    try { v.currentTime = 0; } catch (e) {} const play = v.play(); if (play && play.catch) play.catch(() => {}); live = v;
  }
  let selectToken = 0;

  function executeAction(actionString) {
    if (!actionString) return;
    if (actionString.startsWith('scroll:')) { const el = document.querySelector(actionString.split(':')[1]); if (el) el.scrollIntoView({ behavior: 'smooth' }); }
    else { window.open(actionString, '_blank', 'noopener'); }
  }

  const PRESS_DEPTH = 0.17;
  function press(role) {
    const b = buttons[role];
    if (b) {
      b.t = 1; pressLightLife = 1;
      pressLight.position.copy(new THREE.Box3().setFromObject(b.mesh).getCenter(new THREE.Vector3())).add(new THREE.Vector3(0, 0, 1.4));
      pressLight.color.set(role === 'cross' ? 0xe60012 : 0x7fe3ff);
    }

    if (!isStarted) {
        try { sndBoot.play(); } catch(e){}
        isStarted = true; isBooting = true; powerTarget = 1; 
        window.clearHints();
        document.getElementById('uiInstructions').innerHTML = '';
        sctx.fillStyle = '#000000'; sctx.fillRect(0, 0, SW, SH); sctx.textBaseline = 'middle'; sctx.textAlign = 'center'; sctx.font = '40px "VT323", monospace'; sctx.fillStyle = '#e60012'; sctx.fillText("> BOOTING SHUTTERKIF OS...", SW / 2, SH / 2); screenTex.needsUpdate = true;
        setTimeout(() => { isBooting = false; select(0, 0); }, 2000);
        return;
    }
    if (isBooting) return;

    try { sndTick.currentTime=0; sndTick.play(); } catch(e){} 
    const items = CATEGORIES[currentCatIdx].items;
    if (role === 'left') select(currentCatIdx, ((currentItemIdx - 1) % items.length + items.length) % items.length);
    else if (role === 'right') select(currentCatIdx, (currentItemIdx + 1) % items.length);
    else if (role === 'up') select(((currentCatIdx - 1) % CATEGORIES.length + CATEGORIES.length) % CATEGORIES.length, 0);
    else if (role === 'down') select((currentCatIdx + 1) % CATEGORIES.length, 0);
    else if (role === 'cross' || role === 'start' || role === 'screen') executeAction(items[currentItemIdx].actionX);
    else if (role === 'circle') executeAction(items[currentItemIdx].actionO);
    else if (role === 'triangle') executeAction(items[currentItemIdx].actionTriangle);
  }

  const ray = new THREE.Raycaster(); const ptr = new THREE.Vector2(); let hovered = null, dragging = false, dragged = false, lastX = 0, lastY = 0, spinY = 0, spinX = 0, spinVY = 0, spinVX = 0;
  function toNDC(e) { const r = canvas.getBoundingClientRect(), t = e.touches ? e.touches[0] : e; ptr.x = ((t.clientX - r.left) / r.width) * 2 - 1; ptr.y = -((t.clientY - r.top) / r.height) * 2 + 1; }
  function pick() { if (!modelReady) return null; ray.setFromCamera(ptr, camera); const hit = ray.intersectObjects(pressable, false)[0]; return hit ? hit.object : null; }
  
  section.addEventListener('mouseenter', () => { isHoveringConsole = true; });
  section.addEventListener('mouseleave', () => { isHoveringConsole = false; });
  
  canvas.addEventListener('pointerdown', (e) => { toNDC(e); dragging = true; dragged = false; lastX = e.clientX; lastY = e.clientY; canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener('pointermove', (e) => {
    toNDC(e);
    if (dragging) { const dx = e.clientX - lastX, dy = e.clientY - lastY; if (Math.abs(dx) + Math.abs(dy) > 4) dragged = true; spinVY += dx * 0.00042; spinVX += dy * 0.00030; lastX = e.clientX; lastY = e.clientY; return; }
    const o = pick(); if (o !== hovered) { hovered = o; }
  });
  function endDrag() { dragging = false; }
  
  canvas.addEventListener('pointerup', (e) => { 
    if (!dragged) { 
        toNDC(e); 
        const o = pick(); 
        if (o) {
            window.clearHints(); 
            if (!isStarted) press('cross'); else if (o.userData.role) press(o.userData.role); 
        }
    } 
    endDrag(); 
  });
  canvas.addEventListener('pointercancel', endDrag); canvas.addEventListener('pointerleave', () => { endDrag(); hovered = null; });

  window.addEventListener('keydown', (e) => {
    if (!inView) return; const k = e.key;
    if (k === 'ArrowLeft') { press('left'); e.preventDefault(); } else if (k === 'ArrowRight') { press('right'); e.preventDefault(); } else if (k === 'ArrowUp') { press('up'); e.preventDefault(); } else if (k === 'ArrowDown') { press('down'); e.preventDefault(); } else if (k === 'Enter' || k === 'x' || k === 'X') { press('cross'); }
  });

  const composer = new EffectComposer(renderer); const renderPass = new RenderPass(scene, camera); renderPass.clearColor = new THREE.Color(0x000000); renderPass.clearAlpha = 0; composer.addPass(renderPass);
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 1.2, 0.45, 0.55);
  Object.keys(bloom).forEach((k) => { const m = bloom[k]; if (m && m.isMaterial && m.blending === THREE.AdditiveBlending) { m.blending = THREE.CustomBlending; m.blendEquation = THREE.AddEquation; m.blendSrc = THREE.OneFactor; m.blendDst = THREE.OneFactor; m.blendEquationAlpha = THREE.AddEquation; m.blendSrcAlpha = THREE.ZeroFactor; m.blendDstAlpha = THREE.OneFactor; } });
  composer.addPass(bloom); composer.addPass(new OutputPass());

  function fitToView() {
    if (!modelReady && !model.children.length) return;
    const b = new THREE.Box3().setFromObject(model), size = b.getSize(new THREE.Vector3());
    const fill = window.innerWidth < 720 ? 0.95 : 0.70; 
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const distH = (size.y / 2) / Math.tan(vFov / 2), distW = (size.x / 2) / (Math.tan(vFov / 2) * camera.aspect);
    camera.position.set(0, 0, Math.max(distH, distW) / fill + size.z); camera.lookAt(0, 0, 0); camera.updateProjectionMatrix();
  }
  
  function resize() {
    if (!stage) return; const w = stage.clientWidth, h = stage.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); composer.setSize(w, h); bloom.resolution.set(w, h);
    camera.aspect = w / h; camera.fov = w < 720 ? 42 : 32; camera.updateProjectionMatrix(); fitToView();
  }
  window.addEventListener('resize', resize, { passive: true }); resize();

  let inView = true;
  if ('IntersectionObserver' in window) { new IntersectionObserver((es) => { inView = es[0].isIntersecting; if (live) { if (inView) { const p = live.play(); if (p && p.catch) p.catch(() => {}); } else live.pause(); } }, { threshold: 0.01 }).observe(section || canvas); }
  
  const clock = new THREE.Clock();
  function tick() {
    requestAnimationFrame(tick); const dt = Math.min(0.05, clock.getDelta()), t = clock.elapsedTime; if (!inView) return;
    spinVY *= 0.90; spinVX *= 0.90; spinY += spinVY; spinX += spinVX; spinX = Math.max(-0.55, Math.min(0.55, spinX));
    
    if (!dragging) {
        if (!isHoveringConsole) {
            spinY += ((window.scrollTiltY || 0) - spinY) * Math.min(1, dt * 5.0);
        } else {
            spinY += (0 - spinY) * Math.min(1, dt * 8.0); 
        }
        spinX += (0 - spinX) * Math.min(1, dt * 3.2); 
    }
    
    root.rotation.y = spinY; root.rotation.x = spinX;

    powerT += (powerTarget - powerT) * Math.min(1, dt * 2.4); crtMat.uniforms.uPower.value = powerT;
    warpT *= Math.pow(0.0025, dt); if (warpT < 0.001) warpT = 0; crtMat.uniforms.uWarp.value = warpT; crtMat.uniforms.uTime.value = t;

    spillA.color.lerp(spillTargetColor, 0.12); spillB.color.copy(spillA.color); spillC.color.copy(spillA.color);
    spillA.intensity += ((spillTargetIntensity * powerT) - spillA.intensity) * 0.14; spillB.intensity = spillA.intensity * 0.42; spillC.intensity = spillA.intensity * 0.42;

    if (!isStarted) {
        if (!activeHints['cross']) {
            pressLight.position.copy(new THREE.Box3().setFromObject(buttons['cross'].mesh).getCenter(new THREE.Vector3())).add(new THREE.Vector3(0, 0, 1.4));
            pressLight.color.set(0xe60012); pressLight.intensity = (Math.sin(t * 3) + 1) * 10; 
        } else {
            pressLight.intensity = 0;
        }
    } else {
        if (pressLightLife > 0) { pressLightLife -= dt * 3.4; pressLight.intensity = Math.max(0, pressLightLife) * 26; } else pressLight.intensity = 0;
    }

    // --- HANDLE DUAL HINT LIGHTS & BUTTON GLOW ---
    const activeRoles = Object.keys(activeHints);
    
    // Light 1 update
    if (activeRoles[0] && buttons[activeRoles[0]]) {
        const b = buttons[activeRoles[0]];
        activeHints[activeRoles[0]].life -= dt;
        if (activeHints[activeRoles[0]].life > 0) {
            const center = new THREE.Box3().setFromObject(b.mesh).getCenter(new THREE.Vector3());
            hintLight1.position.copy(center).add(new THREE.Vector3(0, 0, 1.4));
            hintLight1.intensity = (Math.sin(t * 12) + 1) * 12;
            
            if (b.mesh.material) {
                b.mesh.material.emissive.setHex(0xe60012);
                b.mesh.material.emissiveIntensity = Math.abs(Math.sin(t * 12)) * 8.0;
            }
        } else {
            delete activeHints[activeRoles[0]];
        }
    } else {
        hintLight1.intensity = 0;
    }

    // Light 2 update (for dual D-Pad prompts)
    if (activeRoles[1] && buttons[activeRoles[1]]) {
        const b = buttons[activeRoles[1]];
        activeHints[activeRoles[1]].life -= dt;
        if (activeHints[activeRoles[1]].life > 0) {
            const center = new THREE.Box3().setFromObject(b.mesh).getCenter(new THREE.Vector3());
            hintLight2.position.copy(center).add(new THREE.Vector3(0, 0, 1.4));
            hintLight2.intensity = (Math.sin(t * 12) + 1) * 12;
            
            if (b.mesh.material) {
                b.mesh.material.emissive.setHex(0xe60012);
                b.mesh.material.emissiveIntensity = Math.abs(Math.sin(t * 12)) * 8.0;
            }
        } else {
            delete activeHints[activeRoles[1]];
        }
    } else {
        hintLight2.intensity = 0;
    }

    // Clear emissions for buttons not currently hinted
    for (const k in buttons) {
      const b = buttons[k];
      if (!activeHints[k] && b.mesh.material) {
          b.mesh.material.emissive.setHex(0x000000);
          b.mesh.material.emissiveIntensity = 0;
      }
      if (b.t > 0.0005) {
          b.t *= Math.pow(0.004, dt); if (b.t < 0.0005) b.t = 0; 
          b.mesh.position.copy(b.home).add(b.axis.clone().multiplyScalar(-PRESS_DEPTH * b.t));
      } else {
          b.mesh.position.copy(b.home);
      }
    }

    if (!isStarted) drawIdleScreen();
    else if (!isBooting && live && !live.paused && !live.ended && live.readyState >= 2) { drawFrame(CATEGORIES[currentCatIdx].items[currentItemIdx], live); updateSpillThrottled(t); }
    else if (!isBooting && CATEGORIES[currentCatIdx].items[currentItemIdx].isText) { drawFrame(CATEGORIES[currentCatIdx].items[currentItemIdx], null); }

    composer.render();
  }
  tick();
}
