function drawFrame(work, img) {
    if (!isStarted || isBooting) return;
    
    // 1. Text-Only Mode (For About Me)
    if (work.isText) {
        sctx.fillStyle = '#e60012'; // Persona Red Background
        sctx.fillRect(0, 0, SW, SH);
        
        sctx.fillStyle = '#0a0a0a'; // Black angular background accent
        sctx.beginPath();
        sctx.moveTo(0, 0);
        sctx.lineTo(SW * 0.7, 0);
        sctx.lineTo(SW * 0.4, SH);
        sctx.lineTo(0, SH);
        sctx.fill();

        sctx.textBaseline = 'middle';
        sctx.textAlign = 'center';
        sctx.font = '60px "VT323", monospace';
        
        // Draw multiple lines of text
        if (work.textLines) {
            work.textLines.forEach((line, index) => {
                sctx.fillStyle = '#ffffff';
                sctx.fillText(line, SW / 2 + 4, (SH / 2 - 60) + (index * 60) + 4); // Shadow
                sctx.fillStyle = index === 0 ? '#e60012' : '#ffffff'; // First line red, rest white
                sctx.fillText(line, SW / 2, (SH / 2 - 60) + (index * 60));
            });
        }
    } 
    // 2. Thumbnail / Video Mode
    else {
        sctx.drawImage(bg, 0, 0);
        if (img) {
          const ar = (img.videoWidth||img.width) / (img.videoHeight||img.height), sar = SW / SH;
          let fw, fh; const pad = 0.90;
          if (ar > sar) { fw = SW * pad; fh = fw / ar; } else { fh = SH * pad; fw = fh * ar; }
          const fx = (SW - fw) / 2, fy = (SH - fh) / 2;
          sctx.shadowColor = 'rgba(0,0,0,.75)'; sctx.shadowBlur = 26; sctx.drawImage(img, fx, fy, fw, fh);
          sctx.strokeStyle = 'rgba(230,0,18,.35)'; sctx.lineWidth = 2; sctx.strokeRect(fx + 1, fy + 1, fw - 2, fh - 2);
        }
    }

    // Always draw UI overlay
    sctx.textBaseline = 'middle';
    sctx.font = '30px "VT323", monospace';
    sctx.textAlign = 'left';
    sctx.fillStyle = 'rgba(255,255,255,.92)';
    sctx.fillText(String(currentItemIdx + 1).padStart(2, '0'), 26, 32);
    sctx.fillStyle = 'rgba(255,255,255,.55)';
    sctx.fillText('/ ' + String(CATEGORIES[currentCatIdx].items.length).padStart(2, '0'), 62, 32);

    const px0 = SW - 26;
    for (let i = 0; i < CATEGORIES[currentCatIdx].items.length; i++) {
      const on = i === currentItemIdx;
      const w = on ? 20 : 7;
      const x = px0 - (CATEGORIES[currentCatIdx].items.length - i) * 24;
      sctx.fillStyle = on ? '#e60012' : 'rgba(255,255,255,.38)';
      sctx.fillRect(x, SH - 30, w, 3);
    }
    screenTex.needsUpdate = true;
  }

  async function select(catIndex, itemIndex) {
    currentCatIdx = catIndex; currentItemIdx = itemIndex;
    const w = CATEGORIES[currentCatIdx].items[currentItemIdx];
    updateHTMLUI(currentCatIdx, currentItemIdx);

    if (!reduce) warpT = 1;
    if (live) { try { live.pause(); } catch (e) {} live = null; }

    const token = ++selectToken;
    
    // If it's text mode, skip image loading entirely
    if (w.isText) {
        if (token !== selectToken) return;
        drawFrame(w, null);
        return;
    }

    const img = await getImage(w.img);
    if (token !== selectToken) return;
    paintBackdrop(img); drawFrame(w, img);

    if (!w.vid || reduce) return;
    const v = await getVideo(w.vid);
    if (token !== selectToken || !v) return;
    try { v.currentTime = 0; } catch (e) {}
    const play = v.play(); if (play && play.catch) play.catch(() => {});
    live = v;
  }
