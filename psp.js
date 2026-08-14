/* ============================================================
   THE MACHINE — Modified 3D PSP for Tech Art Portfolio
   Assumes ALL files (psp.glb, videos, etc.) are in the root directory.
   ============================================================ */

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const CATEGORIES = window.SK_CATEGORIES || [];
const SK = window.SK || { fireReady() {}, onReady(f) { f(); } };
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const canvas = document.getElementById('pspCanvas');
const stage = document.querySelector('.machine__stage');
const section = document.querySelector('.machine');
const loadingEl = document.getElementById('pspLoading');

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

  const root = new THREE.Group();
  const model = new THREE.Group();
  root.add(model);
  scene.add(root);

  const hemi = new THREE.HemisphereLight(0x2a3a4d, 0x05070a, 0.55);
  scene.add(hemi);
  const keyLight = new THREE.DirectionalLight(0xbcd4e8, 0.85);
  keyLight.position.set(-8, 9, 12);
  scene.add(keyLight);
  const rimIce = new THREE.DirectionalLight(0x7fe3ff, 1.15);
  rimIce.position.set(11, 4, -9);
  scene.add(rimIce);
  const rimHot = new THREE.DirectionalLight(0xff2e7e, 0.75);
  rimHot.position.set(-12, -5, -7);
  scene.add(rimHot);

  const spillA = new THREE.PointLight(0xffffff, 0, 26, 2);
  const spillB = new THREE.PointLight(0xffffff, 0, 20, 2);
  const spillC = new THREE.PointLight(0xffffff, 0, 20, 2);
  scene.add(spillA, spillB, spillC);

  const pressLight = new THREE.PointLight(0x7fe3ff, 0, 9, 2);
  scene.add(pressLight);
  let pressLightLife = 0;

  const SW = 960, SH = 544;
  const sc = document.createElement('canvas');
  sc.width = SW; sc.height = SH;
  const sctx = sc.getContext('2d', { willReadFrequently: false });
  sctx.fillStyle = '#05070a';
  sctx.fillRect(0, 0, SW, SH);

  const screenTex = new THREE.CanvasTexture(sc);
  screenTex.colorSpace = THREE.SRGBColorSpace;
  screenTex.minFilter = THREE.LinearFilter;
  screenTex.magFilter = THREE.LinearFilter;
  screenTex.generateMipmaps = false;

  const av = document.createElement('canvas');
  av.width = 8; av.height = 5;
  const avctx = av.getContext('2d', { willReadFrequently: true });

  const crtMat = new THREE.ShaderMaterial({
    uniforms: {
      uTex:     { value: screenTex },
      uTime:    { value: 0 },
      uPower:   { value: 0.05 }, // Dim glow for Idle state
      uWarp:    { value: 0 },
      uGrid:    { value: new THREE.Vector2(240, 136) },
      uBright:  { value: 0.92 }
    },
    transparent: false,
    toneMapped: false,
    vertexShader: `
      varying vec2 vUv;
      void main(){
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }`,
    fragmentShader: `
      precision highp float;
      uniform sampler2D uTex;
      uniform float uTime, uPower, uWarp, uBright;
      uniform vec2 uGrid;
      varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
      void main(){
        vec2 uv = vUv;
        vec2 c = uv - 0.5;
        float r2 = dot(c, c);
        uv = 0.5 + c * (1.0 + 0.032 * r2);
        float band = step(0.5, hash(vec2(floor(uv.y * 26.0), floor(uTime * 22.0))));
        uv.x += uWarp * (band - 0.5) * 0.09;
        if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
          gl_FragColor = vec4(0.005, 0.008, 0.013, 1.0);
          return;
        }
        vec2 g = uGrid;
        vec2 quv = (floor(uv * g) + 0.5) / g;
        float ab = (0.0005 + 0.0035 * r2) * (1.0 + uWarp * 6.0);
        float rr = texture2D(uTex, vec2(quv.x + ab, quv.y)).r;
        float gg = texture2D(uTex, quv).g;
        float bb = texture2D(uTex, vec2(quv.x - ab, quv.y)).b;
        vec3 col = vec3(rr, gg, bb);
        float sub = mod(floor(uv.x * g.x * 3.0), 3.0);
        vec3 mask = vec3(sub < 1.0 ? 1.0 : 0.90, (sub >= 1.0 && sub < 2.0) ? 1.0 : 0.90, sub >= 2.0 ? 1.0 : 0.90);
        col *= mask;
        float scan = 0.93 + 0.07 * cos(uv.y * g.y * 6.28318);
        col *= scan;
        col += vec3(0.05, 0.075, 0.10) * pow(1.0 - uv.y, 3.0) * 0.45;
        col *= 1.0 - 0.30 * pow(r2 * 1.55, 1.6);
        col += (hash(quv * 620.0) - 0.5) * 0.012;
        float open = smoothstep(0.0, 1.0, uPower);
        float slit = smoothstep(open * 0.62 + 0.002, 0.0, abs(uv.y - 0.5));
        col = mix(vec3(0.55, 0.85, 1.0) * slit * 2.4, col, open);
        col *= max(0.1, open);
        gl_FragColor = vec4(col * uBright, 1.0);
      }`
  });

  let screenMesh = null;
  const buttons = {};
  const pressable = [];
  let modelReady = false;

  // DIRECT ROOT PATH LOAD
  new GLTFLoader().load(
    'psp.glb',
    (gltf) => { setup(gltf.scene); },
    undefined,
    (err) => {
      console.error('[psp] model failed', err);
      if (loadingEl) loadingEl.textContent = 'HARDWARE UNAVAILABLE — psp.glb missing from root folder';
      SK.fireReady();
    }
  );

  function setup(src) {
    model.add(src);
    src.updateWorldMatrix(true, true);
    const parts = {};
    const bin = [];
    src.traverse((o) => {
      if (!o.isMesh) return;
      o.frustumCulled = false;
      const n = o.name.toLowerCase();
      if (n.indexOf('ground') === 0) { bin.push(o); return; }
      if (n.indexOf('screen') === 0) screenMesh = o;
      const m = n.match(/^button(\d+)/);
      if (m) parts['b' + m[1]] = o;
      if (o.material) {
        o.material = o.material.clone();
        o.material.envMapIntensity = 1.25;
        if (o.material.metalness !== undefined) {
          o.material.metalness = Math.min(1, (o.material.metalness ?? 0.5) * 0.9 + 0.18);
          o.material.roughness = Math.max(0.12, (o.material.roughness ?? 0.5) * 0.82);
        }
      }
    });

    bin.forEach((o) => { o.parent && o.parent.remove(o); });
    if (!screenMesh) { SK.fireReady(); return; }

    const nrm = largestFaceNormal(screenMesh);
    const centreOf = (o) => new THREE.Box3().setFromObject(o).getCenter(new THREE.Vector3());
    const centre = centreOf(src);
    const sCentre = centreOf(screenMesh);
    if (nrm.dot(sCentre.clone().sub(centre)) < 0) nrm.negate();

    const rowKeys = ['b9', 'b10', 'b11', 'b12', 'b13', 'b14', 'b15'];
    const row = new THREE.Vector3();
    let rowN = 0;
    rowKeys.forEach((k) => { if (parts[k]) { row.add(centreOf(parts[k])); rowN++; } });

    let up;
    if (rowN) {
      row.divideScalar(rowN);
      const down = row.sub(sCentre).projectOnPlane(nrm).normalize();
      up = down.negate();
    } else {
      up = new THREE.Vector3(0, 1, 0).projectOnPlane(nrm).normalize();
    }
    const right = new THREE.Vector3().crossVectors(up, nrm).normalize();
    up.crossVectors(nrm, right).normalize();

    const basis = new THREE.Matrix4().makeBasis(right, up, nrm);
    model.quaternion.setFromRotationMatrix(basis).invert();
    model.updateWorldMatrix(true, true);

    const size = new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
    model.scale.setScalar(10 / Math.max(size.x, size.y, size.z));
    model.updateWorldMatrix(true, true);
    model.position.sub(new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3()));
    model.updateWorldMatrix(true, true);
    fitToView();

    const sNrm = largestFaceNormal(screenMesh);
    if (sNrm.z < 0) sNrm.negate();
    buildScreenUVs(screenMesh, sNrm, new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0));
    screenMesh.material = crtMat;
    screenMesh.renderOrder = 2;

    mapButton('up', parts.b1);
    mapButton('right', parts.b2);
    mapButton('down', parts.b3);
    mapButton('left', parts.b4);
    mapButton('triangle', parts.b5);
    mapButton('circle', parts.b6);
    mapButton('cross', parts.b7);
    mapButton('square', parts.b8);
    mapButton('home', parts.b9);
    mapButton('select', parts.b14);
    mapButton('start', parts.b15);
    ['b10', 'b11', 'b12', 'b13'].forEach((k2, i) => mapButton('aux' + i, parts[k2]));

    function mapButton(role, mesh) {
      if (!mesh) return;
      const parent = mesh.parent || model;
      const pq = new THREE.Quaternion(); parent.getWorldQuaternion(pq);
      const ps = new THREE.Vector3(); parent.getWorldScale(ps);
      const axis = new THREE.Vector3(0, 0, 1).applyQuaternion(pq.invert());
      axis.set(axis.x / (ps.x || 1), axis.y / (ps.y || 1), axis.z / (ps.z || 1));
      buttons[role] = { role, mesh, home: mesh.position.clone(), axis, t: 0 };
      if (['up', 'right', 'down', 'left', 'cross', 'circle', 'triangle', 'square', 'start', 'select', 'home'].indexOf(role) > -1) {
        mesh.userData.role = role;
        pressable.push(mesh);
      }
    }

    const sb = new THREE.Box3().setFromObject(screenMesh);
    const sc2 = sb.getCenter(new THREE.Vector3());
    const halfW = (sb.max.x - sb.min.x) / 2;
    spillA.position.set(sc2.x, sc2.y, sc2.z + 2.2);
    spillB.position.set(sc2.x - halfW * 1.5, sc2.y, sc2.z + 1.5);
    spillC.position.set(sc2.x + halfW * 1.5, sc2.y, sc2.z + 1.5);

    if (screenMesh) screenMesh.userData.role = 'screen';
    pressable.push(screenMesh);

    modelReady = true;
    if (loadingEl) loadingEl.classList.add('is-off');
    SK.fireReady();
    drawIdleScreen(); // Draw the initial "Press X to start" screen
  }

  function largestFaceNormal(mesh) {
    const geo = mesh.geometry;
    const pos = geo.getAttribute('position');
    const idx = geo.getIndex();
    const count = idx ? idx.count : pos.count;
    const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
    const ab = new THREE.Vector3(), ac = new THREE.Vector3(), cr = new THREE.Vector3();
    let best = -1;
    const out = new THREE.Vector3(0, 0, 1);
    for (let i = 0; i < count; i += 3) {
      const i0 = idx ? idx.getX(i) : i;
      const i1 = idx ? idx.getX(i + 1) : i + 1;
      const i2 = idx ? idx.getX(i + 2) : i + 2;
      a.fromBufferAttribute(pos, i0);
      b.fromBufferAttribute(pos, i1);
      c.fromBufferAttribute(pos, i2);
      ab.subVectors(b, a); ac.subVectors(c, a);
      cr.crossVectors(ab, ac);
      const area = cr.lengthSq();
      if (area > best) { best = area; out.copy(cr).normalize(); }
    }
    return out.applyMatrix3(new THREE.Matrix3().getNormalMatrix(mesh.matrixWorld)).normalize();
  }

  function buildScreenUVs(mesh, nrm, right, up) {
    const geo = mesh.geometry;
    const p = geo.getAttribute('position');
    const mw = mesh.matrixWorld;
    const wp = [];
    const v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i).applyMatrix4(mw);
      wp.push(v.clone());
    }
    const e1 = right.clone().projectOnPlane(nrm).normalize();
    const e2 = new THREE.Vector3().crossVectors(nrm, e1).normalize();
    const a = [], b = [];
    let ma = 0, mb = 0;
    for (let i = 0; i < wp.length; i++) {
      const x = wp[i].dot(e1), y = wp[i].dot(e2);
      a.push(x); b.push(y); ma += x; mb += y;
    }
    ma /= a.length; mb /= b.length;
    let Saa = 0, Sbb = 0, Sab = 0;
    for (let i = 0; i < a.length; i++) {
      const da = a[i] - ma, db = b[i] - mb;
      Saa += da * da; Sbb += db * db; Sab += da * db;
    }
    const th = 0.5 * Math.atan2(2 * Sab, Saa - Sbb);
    const cs = Math.cos(th), sn = Math.sin(th);
    const U = e1.clone().multiplyScalar(cs).addScaledVector(e2, sn).normalize();
    const V = e1.clone().multiplyScalar(-sn).addScaledVector(e2, cs).normalize();
    if (U.dot(right) < 0) U.negate();
    if (V.dot(up) < 0) V.negate();
    let minU = Infinity, maxU = -Infinity, minV = Infinity, maxV = -Infinity;
    const us = [], vs = [];
    for (let i = 0; i < wp.length; i++) {
      const u = wp[i].dot(U), w = wp[i].dot(V);
      us.push(u); vs.push(w);
      if (u < minU) minU = u; if (u > maxU) maxU = u;
      if (w < minV) minV = w; if (w > maxV) maxV = w;
    }
    const du = (maxU - minU) || 1, dv = (maxV - minV) || 1;
    const uv = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      uv[i * 2] = (us[i] - minU) / du;
      uv[i * 2 + 1] = (vs[i] - minV) / dv;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  }

  const cache = new Map();
  function getImage(src) {
    if (cache.has(src)) return cache.get(src);
    const p = new Promise((res) => {
      const im = new Image();
      im.onload = () => res(im);
      im.onerror = () => res(null);
      im.src = src;
    });
    cache.set(src, p);
    return p;
  }

  const vcache = new Map();
  function getVideo(src) {
    if (!src) return Promise.resolve(null);
    if (vcache.has(src)) return vcache.get(src);
    const p = new Promise((res) => {
      const v = document.createElement('video');
      v.src = src;
      v.muted = true; v.defaultMuted = true; v.volume = 0;
      v.loop = true; v.playsInline = true; v.autoplay = false;
      v.preload = 'auto';
      v.setAttribute('muted', ''); v.setAttribute('playsinline', '');
      let done = false;
      const ok = () => { if (done) return; done = true; res(v); };
      v.addEventListener('canplaythrough', ok, { once: true });
      v.addEventListener('canplay', ok, { once: true });
      v.addEventListener('error', () => { if (!done) { done = true; res(null); } }, { once: true });
      v.load();
    });
    vcache.set(src, p);
    return p;
  }

  // UPDATED NAVIGATION STATE
  let isStarted = false;
  let currentCatIdx = 0;
  let currentItemIdx = 0;
  
  let powerT = 0.05, powerTarget = 0.05, warpT = 0;
  let live = null; 

  const srcW = (s) => (s && (s.videoWidth || s.width)) || 0;
  const srcH = (s) => (s && (s.videoHeight || s.height)) || 0;

  const bg = document.createElement('canvas');
  bg.width = SW; bg.height = SH;
  const bgctx = bg.getContext('2d');

  function paintBackdrop(img) {
    bgctx.setTransform(1, 0, 0, 1, 0, 0);
    bgctx.fillStyle = '#04070b';
    bgctx.fillRect(0, 0, SW, SH);
    if (!img || !srcW(img)) return;
    const ar = srcW(img) / srcH(img), sar = SW / SH;
    bgctx.save();
    try { bgctx.filter = 'blur(34px) saturate(1.5) brightness(0.62)'; } catch (e) {}
    let cw, ch;
    if (ar > sar) { ch = SH * 1.28; cw = ch * ar; } else { cw = SW * 1.28; ch = cw / ar; }
    bgctx.drawImage(img, (SW - cw) / 2, (SH - ch) / 2, cw, ch);
    bgctx.restore();
    bgctx.filter = 'none';
  }

  // IDLE SCREEN LOGIC
  function drawIdleScreen() {
    sctx.save();
    sctx.fillStyle = '#000000';
    sctx.fillRect(0, 0, SW, SH);
    
    // Blinking Text
    if (Math.floor(Date.now() / 600) % 2 === 0) {
        sctx.textBaseline = 'middle';
        sctx.textAlign = 'center';
        sctx.font = '40px "VT323", monospace';
        sctx.fillStyle = 'rgba(127,227,255,1)';
        sctx.fillText("> PRESS X TO START", SW / 2, SH / 2);
    }
    sctx.restore();
    screenTex.needsUpdate = true;
  }

  // ACTIVE SCREEN LOGIC
  function drawFrame(work, img) {
    if (!isStarted) return;
    
    sctx.save();
    sctx.setTransform(1, 0, 0, 1, 0, 0);
    sctx.drawImage(bg, 0, 0);

    if (img && srcW(img)) {
      const ar = srcW(img) / srcH(img);
      const sar = SW / SH;
      let fw, fh;
      const pad = 0.90;
      if (ar > sar) { fw = SW * pad; fh = fw / ar; } else { fh = SH * pad; fw = fh * ar; }
      const fx = (SW - fw) / 2, fy = (SH - fh) / 2;
      sctx.save();
      sctx.shadowColor = 'rgba(0,0,0,.75)';
      sctx.shadowBlur = 26;
      sctx.drawImage(img, fx, fy, fw, fh);
      sctx.restore();
      sctx.strokeStyle = 'rgba(230,242,252,.35)';
      sctx.lineWidth = 2;
      sctx.strokeRect(fx + 1, fy + 1, fw - 2, fh - 2);
    }

    // DRAW UI
    sctx.textBaseline = 'middle';
    sctx.font = '30px "VT323", monospace';
    
    // Category Name (Top Center)
    sctx.textAlign = 'center';
    sctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    sctx.fillText(CATEGORIES[currentCatIdx].name, SW / 2, 32);

    // Numbering
    sctx.textAlign = 'left';
    sctx.fillStyle = 'rgba(127,227,255,.92)';
    sctx.fillText(String(currentItemIdx + 1).padStart(2, '0'), 26, 32);
    sctx.fillStyle = 'rgba(154,169,187,.55)';
    sctx.fillText('/ ' + String(CATEGORIES[currentCatIdx].items.length).padStart(2, '0'), 62, 32);

    // Progress Pips
    const px0 = SW - 26;
    for (let i = 0; i < CATEGORIES[currentCatIdx].items.length; i++) {
      const on = i === currentItemIdx;
      const w = on ? 20 : 7;
      const x = px0 - (CATEGORIES[currentCatIdx].items.length - i) * 24;
      sctx.fillStyle = on ? '#7fe3ff' : 'rgba(154,169,187,.38)';
      sctx.fillRect(x, SH - 30, w, 3);
    }

    sctx.restore();
    screenTex.needsUpdate = true;
  }

  let spillDue = 0;
  function updateSpillThrottled(t) {
    if (t < spillDue) return;
    spillDue = t + 0.16;
    updateSpill();
  }

  function updateSpill() {
    avctx.drawImage(sc, 0, 0, av.width, av.height);
    let r = 0, g = 0, b = 0;
    try {
      const d = avctx.getImageData(0, 0, av.width, av.height).data;
      for (let i = 0; i < d.length; i += 4) { r += d[i]; g += d[i + 1]; b += d[i + 2]; }
      const n = d.length / 4;
      r /= n * 255; g /= n * 255; b /= n * 255;
    } catch (e) { r = g = b = 0.6; }

    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const mx = Math.max(r, g, b) || 1;
    const col = new THREE.Color(
      Math.min(1, 0.30 + (r / mx) * 0.70),
      Math.min(1, 0.30 + (g / mx) * 0.70),
      Math.min(1, 0.30 + (b / mx) * 0.70)
    );
    spillTargetColor.copy(col);
    spillTargetIntensity = 16 + lum * 46;
  }

  const spillTargetColor = new THREE.Color(0.6, 0.8, 1);
  let spillTargetIntensity = 0;

  async function select(catIndex, itemIndex, instant) {
    currentCatIdx = catIndex;
    currentItemIdx = itemIndex;
    const category = CATEGORIES[currentCatIdx];
    const w = category.items[currentItemIdx];

    if (!instant && !reduce) warpT = 1;

    if (live) { try { live.pause(); } catch (e) {} live = null; }

    const token = ++selectToken;
    const img = await getImage(w.img);
    if (token !== selectToken) return;
    paintBackdrop(img);
    drawFrame(w, img);
    updateSpill();

    if (!w.vid || reduce) return;

    const v = await getVideo(w.vid);
    if (token !== selectToken || !v) return;
    try { v.currentTime = 0; } catch (e) {}
    const play = v.play();
    if (play && play.catch) play.catch(() => {});
    live = v;
  }

  let selectToken = 0;

  function powerOn() { 
      powerTarget = 1; 
      // Add a slight boot sound/interaction logic here if desired
  }

  function openLink() {
    const w = CATEGORIES[currentCatIdx].items[currentItemIdx];
    if (!w || w.link === '#') return;
    window.open(w.link, '_blank', 'noopener');
  }

  // BUTTON PRESS LOGIC (UPDATED FOR D-PAD GRID)
  const PRESS_DEPTH = 0.17;
  function press(role) {
    const b = buttons[role];
    if (b) {
      b.t = 1;
      const wp = new THREE.Box3().setFromObject(b.mesh).getCenter(new THREE.Vector3());
      pressLight.position.copy(wp).add(new THREE.Vector3(0, 0, 1.4));
      pressLight.color.set(role === 'cross' ? 0xc8ff3c : 0x7fe3ff);
      pressLightLife = 1;
    }

    // Start Sequence with Boot Delay
    if (!isStarted) {
        if (role === 'cross' || role === 'screen' || role === 'start') {
            isStarted = true;
            powerOn();
            
            // Draw a temporary booting screen directly on the canvas
            sctx.fillStyle = '#000000';
            sctx.fillRect(0, 0, 960, 544);
            sctx.textBaseline = 'middle';
            sctx.textAlign = 'center';
            sctx.font = '40px "VT323", monospace';
            sctx.fillStyle = '#7fe3ff';
            sctx.fillText("> BOOTING SHUTTERKIF OS...", 480, 272);
            screenTex.needsUpdate = true;

            // Wait 2 seconds, then load the actual first project
            setTimeout(() => {
                select(0, 0); // Start at Tech Art, First Item
            }, 2000);
        }
        return;
    }

    // Navigation Sequence
    const currentCategoryItems = CATEGORIES[currentCatIdx].items;
    let nextCat = currentCatIdx;
    let nextItem = currentItemIdx;

    if (role === 'left' || role === 'circle') {
        nextItem = ((currentItemIdx - 1) % currentCategoryItems.length + currentCategoryItems.length) % currentCategoryItems.length;
        select(currentCatIdx, nextItem);
    }
    else if (role === 'right' || role === 'triangle') {
        nextItem = (currentItemIdx + 1) % currentCategoryItems.length;
        select(currentCatIdx, nextItem);
    }
    else if (role === 'up') {
        nextCat = ((currentCatIdx - 1) % CATEGORIES.length + CATEGORIES.length) % CATEGORIES.length;
        select(nextCat, 0); // Reset to first item of new category
    }
    else if (role === 'down') {
        nextCat = (currentCatIdx + 1) % CATEGORIES.length;
        select(nextCat, 0);
    }
    else if (role === 'cross' || role === 'start' || role === 'screen') {
        openLink();
    }
  }

  const ray = new THREE.Raycaster();
  const ptr = new THREE.Vector2();
  let hovered = null;
  let dragging = false, dragged = false, lastX = 0, lastY = 0;
  let spinY = 0, spinX = 0, spinVY = 0, spinVX = 0;

  function toNDC(e) {
    const r = canvas.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    ptr.x = ((t.clientX - r.left) / r.width) * 2 - 1;
    ptr.y = -((t.clientY - r.top) / r.height) * 2 + 1;
  }

  function pick() {
    if (!modelReady) return null;
    ray.setFromCamera(ptr, camera);
    const hit = ray.intersectObjects(pressable, false)[0];
    return hit ? hit.object : null;
  }

  canvas.addEventListener('pointerdown', (e) => {
    toNDC(e);
    dragging = true; dragged = false;
    lastX = e.clientX; lastY = e.clientY;
    canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId);
  });

  canvas.addEventListener('pointermove', (e) => {
    toNDC(e);
    if (dragging) {
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      if (Math.abs(dx) + Math.abs(dy) > 4) dragged = true;
      spinVY += dx * 0.00042;
      spinVX += dy * 0.00030;
      lastX = e.clientX; lastY = e.clientY;
      return;
    }
    const o = pick();
    if (o !== hovered) {
      hovered = o;
      canvas.style.cursor = o ? 'pointer' : 'grab';
    }
  });

  function endDrag() { dragging = false; }
  canvas.addEventListener('pointerup', (e) => {
    if (!dragged) {
      toNDC(e);
      const o = pick();
      if (o && o.userData.role) press(o.userData.role);
    }
    endDrag();
  });
  canvas.addEventListener('pointercancel', endDrag);
  canvas.addEventListener('pointerleave', () => { endDrag(); hovered = null; canvas.style.cursor = 'grab'; });
  canvas.style.cursor = 'grab';

  window.addEventListener('keydown', (e) => {
    if (!inView) return;
    const k = e.key;
    if (k === 'ArrowLeft') { press('left'); e.preventDefault(); }
    else if (k === 'ArrowRight') { press('right'); e.preventDefault(); }
    else if (k === 'ArrowUp') { press('up'); e.preventDefault(); }
    else if (k === 'ArrowDown') { press('down'); e.preventDefault(); }
    else if (k === 'Enter' || k === 'x' || k === 'X') { press('cross'); }
  });

  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  renderPass.clearColor = new THREE.Color(0x000000);
  renderPass.clearAlpha = 0;
  composer.addPass(renderPass);
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.42, 0.45, 0.55);
  
  Object.keys(bloom).forEach((k) => {
    const m = bloom[k];
    if (!m || !m.isMaterial || m.blending !== THREE.AdditiveBlending) return;
    m.blending = THREE.CustomBlending;
    m.blendEquation = THREE.AddEquation;
    m.blendSrc = THREE.OneFactor;
    m.blendDst = THREE.OneFactor;
    m.blendEquationAlpha = THREE.AddEquation;
    m.blendSrcAlpha = THREE.ZeroFactor;    
    m.blendDstAlpha = THREE.OneFactor;
  });
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  function fitToView() {
    if (!modelBox()) return;
    const b = modelBox();
    const size = b.getSize(new THREE.Vector3());
    const fill = window.innerWidth < 720 ? 0.94 : 0.72;
    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const distH = (size.y / 2) / Math.tan(vFov / 2);
    const distW = (size.x / 2) / (Math.tan(vFov / 2) * camera.aspect);
    camera.position.set(0, 0, Math.max(distH, distW) / fill + size.z);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }
  function modelBox() {
    if (!modelReady && !model.children.length) return null;
    return new THREE.Box3().setFromObject(model);
  }

  function resize() {
    if (!stage) return;
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    bloom.resolution.set(w, h);
    camera.aspect = w / h;
    camera.fov = w < 720 ? 42 : 32;
    camera.updateProjectionMatrix();
    if (modelReady) fitToView();
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  let inView = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((es) => {
      inView = es[0].isIntersecting;
      if (live) { if (inView) { const p = live.play(); if (p && p.catch) p.catch(() => {}); } else live.pause(); }
    }, { threshold: 0.01 }).observe(section || canvas);
  }
  document.addEventListener('visibilitychange', () => {
    if (!live) return;
    if (document.hidden) live.pause();
    else if (inView) { const p = live.play(); if (p && p.catch) p.catch(() => {}); }
  });

  const clock = new THREE.Clock();

  function tick() {
    requestAnimationFrame(tick);
    const dt = Math.min(0.05, clock.getDelta());
    const t = clock.elapsedTime;

    if (!inView) return;

    spinVY *= 0.90; spinVX *= 0.90;
    spinY += spinVY; spinX += spinVX;
    spinX = Math.max(-0.55, Math.min(0.55, spinX));
    if (!dragging) {
      spinY += (0 - spinY) * Math.min(1, dt * 3.2);
      spinX += (0 - spinX) * Math.min(1, dt * 3.2);
      if (Math.abs(spinY) < 0.0008) spinY = 0;
      if (Math.abs(spinX) < 0.0008) spinX = 0;
    }

    root.rotation.y = spinY;
    root.rotation.x = spinX;

    powerT += (powerTarget - powerT) * Math.min(1, dt * 2.4);
    crtMat.uniforms.uPower.value = powerT;
    warpT *= Math.pow(0.0025, dt);
    if (warpT < 0.001) warpT = 0;
    crtMat.uniforms.uWarp.value = warpT;
    crtMat.uniforms.uTime.value = t;

    const on = powerT;
    spillA.color.lerp(spillTargetColor, 0.12);
    spillB.color.copy(spillA.color);
    spillC.color.copy(spillA.color);
    spillA.intensity += ((spillTargetIntensity * on) - spillA.intensity) * 0.14;
    spillB.intensity = spillA.intensity * 0.42;
    spillC.intensity = spillA.intensity * 0.42;

    for (const k in buttons) {
      const b = buttons[k];
      if (b.t <= 0.0005 && b.mesh.position.equals(b.home)) continue;
      b.t *= Math.pow(0.004, dt);
      if (b.t < 0.0005) b.t = 0;
      const d = b.axis.clone().multiplyScalar(-PRESS_DEPTH * b.t);
      b.mesh.position.copy(b.home).add(d);
    }

    if (pressLightLife > 0) {
      pressLightLife -= dt * 3.4;
      pressLight.intensity = Math.max(0, pressLightLife) * 26;
    } else pressLight.intensity = 0;

    if (!isStarted) {
        drawIdleScreen();
    } else if (live && !live.paused && !live.ended && live.readyState >= 2) {
      drawFrame(CATEGORIES[currentCatIdx].items[currentItemIdx], live);
      updateSpillThrottled(t);
    }

    composer.render();
  }
  tick();
}
