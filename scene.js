(() => {
  const TAU = Math.PI * 2;
  const FRAME_CORNERS = [[-.78, -.78], [.78, -.78], [.78, .78], [-.78, .78]];
  class PortfolioScene {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');
      this.width = innerWidth;
      this.height = innerHeight;
      this.mode = 'intro';
      this.running = true;
      this.dirty = true;
      this.phase = 0;
      this.orbitPhase = 0;
      this.story = { progress: 0 };
      this.introReveal = { frames: 1, lines: 1 };
      this.atmosphere = { intro: 1 };
      this.pointer = { x: -1000, y: -1000, sx: 0, sy: 0, inside: false };
      this.layout = { x: innerWidth * .5, y: innerHeight * .46, radius: 160, alpha: 1, stars: 1, links: 1 };
      this.field = document.querySelector('.signal-field');
      this.homeLinks = [...this.field.querySelectorAll('.signal-link')];
      this.introLabels = [...document.querySelectorAll('.intro-label')];
      this.orbitHovered = false;
      this.orbitFocused = false;
      this.stars = this.createStars();
      this.glow = this.createGlow();
      this.draw = this.draw.bind(this);
      this.resize = this.resize.bind(this);
      this.field.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') this.orbitHovered = true; });
      this.field.addEventListener('pointerleave', () => { this.orbitHovered = false; });
      this.field.addEventListener('focusin', () => { this.orbitFocused = true; });
      this.field.addEventListener('focusout', event => { this.orbitFocused = this.field.contains(event.relatedTarget); });
      this.resize();
      window.addEventListener('resize', this.resize);
      window.addEventListener('pointermove', event => {
        if (event.pointerType === 'touch') return;
        this.pointer.x = event.clientX;
        this.pointer.y = event.clientY;
        this.pointer.inside = true;
      }, { passive: true });
      document.documentElement.addEventListener('pointerleave', () => { this.pointer.inside = false; });
      window.addEventListener('scroll', () => { this.dirty = true; }, { passive: true });
      document.addEventListener('visibilitychange', () => { this.dirty = true; });
      gsap.ticker.add(this.draw);
    }

    createStars() {
      let seed = 32027;
      const random = () => {
        seed = seed * 16807 % 2147483647;
        return (seed - 1) / 2147483646;
      };
      return Array.from({ length: 1400 }, () => {
        const clustered = random() < .34;
        const angle = random() * TAU;
        const radius = Math.sqrt(random()) * .32;
        return { x: clustered ? .5 + Math.cos(angle) * radius : random(), y: clustered ? .46 + Math.sin(angle) * radius : random(), depth: random(), phase: random() * TAU };
      });
    }

    createGlow() {
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(239,245,244,.65)');
      gradient.addColorStop(.2, 'rgba(239,245,244,.2)');
      gradient.addColorStop(1, 'rgba(239,245,244,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return canvas;
    }

    resize() {
      this.width = innerWidth;
      this.height = innerHeight;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      this.canvas.width = Math.round(this.width * dpr);
      this.canvas.height = Math.round(this.height * dpr);
      this.ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.setMode(this.mode, 0);
      this.dirty = true;
    }

    measureLinks() {
      const rect = this.field.getBoundingClientRect();
      this.fieldBounds = { x: rect.left, y: rect.top + scrollY, width: rect.width, height: rect.height };
      this.linkSizes = this.homeLinks.map(link => ({ width: link.offsetWidth, height: link.offsetHeight }));
      this.introPoints = this.introLabels.map(label => {
        const bounds = label.getBoundingClientRect();
        const previous = this.introPoints?.find(point => point.element === label);
        const offsetX = previous?.offsetX || 0, offsetY = previous?.offsetY || 0;
        return { element: label, x: (bounds.left > this.width * .5 ? bounds.left - 12 : bounds.right + 12) - offsetX, y: bounds.top + bounds.height / 2 - offsetY, centerX: bounds.left + bounds.width / 2 - offsetX, hidden: !bounds.width, quiet: label.classList.contains('intro-whisper'), primary: label.classList.contains('intro-link'), layer: Number(label.dataset.frame), corner: Number(label.dataset.corner), offsetX, offsetY };
      });
    }

    setMode(mode, duration = .8) {
      this.mode = mode;
      this.canvas.dataset.mode = mode;
      const w = this.width, h = this.height;
      let target = { x: w * .5, y: h * .47, radius: Math.min(w * (w < 700 ? .16 : .085), h * .13), alpha: 1, stars: 1, links: 1 };
      this.measureLinks();
      if (mode === 'home') {
        const bounds = this.fieldBounds;
        target = { x: bounds.x + bounds.width * .5, y: bounds.y + bounds.height * .5, radius: Math.min(bounds.width * .24, bounds.height * .24), alpha: 1, stars: .4, links: 1 };
      } else if (mode === 'works' || mode === 'project') {
        target = { x: w * .5, y: h * .5, radius: 60, alpha: 0, stars: mode === 'works' ? .22 : .12, links: 0 };
      }
      gsap.to(this.layout, { ...target, duration, ease: 'power3.inOut', overwrite: true, onUpdate: () => { this.dirty = true; } });
      gsap.to(this.atmosphere, { intro: mode === 'intro' ? 1 : 0, duration, overwrite: true, onUpdate: () => { this.dirty = true; } });
      this.dirty = true;
    }

    setRunning(value) {
      this.running = value;
      this.dirty = true;
      if (!value) {
        gsap.getTweensOf(this.layout).forEach(tween => tween.progress(1));
        gsap.getTweensOf(this.atmosphere).forEach(tween => tween.progress(1));
      }
    }

    draw(time, deltaTime) {
      if (!this.ctx || document.hidden || (!this.running && !this.dirty)) return;
      this.dirty = false;
      const dt = Math.min(deltaTime / 1000, .05);
      if (this.running) {
        this.phase += dt;
        if (!this.orbitHovered && !this.orbitFocused) this.orbitPhase += dt * .055;
      }
      const pointer = this.pointer;
      const aimX = this.running && pointer.inside ? (pointer.x / this.width - .5) * 2 : 0;
      const aimY = this.running && pointer.inside ? (pointer.y / this.height - .5) * 2 : 0;
      const damping = 1 - Math.exp(-dt * 4);
      if (this.running) {
        pointer.sx += (aimX - pointer.sx) * damping;
        pointer.sy += (aimY - pointer.sy) * damping;
      }
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.drawStars();
      if (this.layout.alpha < .008) return;
      const progress = this.mode === 'home' ? this.story.progress : 0;
      const parallax = this.atmosphere.intro * (this.width < 700 ? .5 : 1);
      const cx = this.layout.x + pointer.sx * 20 * parallax;
      const cy = this.layout.y + pointer.sy * 12 * parallax - (this.mode === 'home' ? scrollY : 0);
      const radius = this.layout.radius * (1 - progress * .12);
      const opacity = this.layout.alpha * Math.max(0, 1 - progress * 1.2);
      if (cy + radius * 2 < 0 || cy - radius * 2 > this.height) return;
      const point = this.frameProjection(cx, cy, radius);
      const frames = [-1, 0, 1].map(layer => ({
        layer,
        center: point(0, 0, layer * .36, layer),
        corners: FRAME_CORNERS.map(([x, y]) => point(x, y, layer * .36, layer))
      }));
      this.drawStarTrails(cx, cy, radius, opacity, frames);
      this.moveIntroLabels(dt);
      this.drawNetwork(cx, cy, radius, opacity, frames);
      this.drawFrames(cx, cy, radius, opacity * (this.mode === 'intro' ? this.introReveal.frames : 1), frames, point);
    }

    drawStars() {
      const ctx = this.ctx;
      const radius = Math.min(this.width, this.height) * .42;
      const halo = ctx.createRadialGradient(this.width * .5, this.height * .46, 0, this.width * .5, this.height * .46, radius);
      halo.addColorStop(0, 'rgba(174,204,196,.018)');
      halo.addColorStop(1, 'rgba(174,204,196,0)');
      ctx.globalAlpha = this.layout.stars;
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, this.width, this.height);
      const count = Math.min(this.stars.length, Math.round(this.width * this.height / 820));
      for (let i = 0; i < count; i++) {
        const star = this.stars[i];
        const depth = star.depth;
        const drift = this.phase * .6 * (depth + .2);
        const angle = this.phase * .006 * (depth + .3);
        const dx = (star.x - .5) * this.width, dy = (star.y - .47) * this.height;
        const x = (this.width * .5 + dx * Math.cos(angle) - dy * Math.sin(angle) + Math.sin(drift * .025 + star.phase) * 12 + this.pointer.sx * depth * 10 + this.width) % this.width;
        const y = (this.height * .47 + dx * Math.sin(angle) + dy * Math.cos(angle) + Math.cos(drift * .018 + star.phase) * 10 + this.pointer.sy * depth * 8 + this.height) % this.height;
        ctx.globalAlpha = this.layout.stars * (.06 + depth * .22);
        if (depth > .985) {
          const size = 3;
          ctx.drawImage(this.glow, x - size / 2, y - size / 2, size, size);
          ctx.fillStyle = '#eaf0ed';
          ctx.fillRect(x - .5, y - .5, 1, 1);
        } else {
          ctx.fillStyle = '#eaf0ed';
          ctx.beginPath();
          ctx.arc(x, y, .25 + depth * .45, 0, TAU);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    }

    moveIntroLabels(dt) {
      if (this.mode !== 'intro' || !this.running) return;
      const focused = document.querySelector('.intro-screen').contains(document.activeElement);
      const damping = 1 - Math.exp(-dt * 3);
      this.introPoints.forEach((label, index) => {
        const near = this.pointer.inside && Math.hypot(this.pointer.x - label.centerX - label.offsetX, this.pointer.y - label.y - label.offsetY) < 100;
        if (focused || near) return;
        const scale = this.width < 700 ? .5 : 1;
        const targetX = (this.pointer.sx * 5 + Math.sin(this.phase * .3 + index * 1.4) * 3) * scale;
        const targetY = (this.pointer.sy * 3 + Math.cos(this.phase * .25 + index) * 2) * scale;
        label.offsetX += (targetX - label.offsetX) * damping;
        label.offsetY += (targetY - label.offsetY) * damping;
        label.element.style.translate = label.offsetX.toFixed(2) + 'px ' + label.offsetY.toFixed(2) + 'px';
      });
    }

    drawStarTrails(cx, cy, radius, opacity, frames) {
      const alpha = opacity * this.atmosphere.intro * this.introReveal.frames;
      if (alpha < .005) return;
      const ctx = this.ctx;
      const tilt = -.35;
      const arcs = this.width < 700 ? 4 : 6;
      for (let i = 0; i < arcs; i++) {
        const rx = radius * (2.9 + i * .78), ry = rx * .62;
        const head = this.phase * .06 * (1 + i * .12) + i * TAU / arcs;
        const length = .22 + i * .025;
        let previous;
        for (let step = 0; step <= 12; step++) {
          const t = step / 12, angle = head - length * (1 - t);
          const x = Math.cos(angle) * rx, y = Math.sin(angle) * ry;
          const point = { x: cx + x * Math.cos(tilt) - y * Math.sin(tilt), y: cy + x * Math.sin(tilt) + y * Math.cos(tilt) };
          if (previous) {
            ctx.beginPath();
            ctx.moveTo(previous.x, previous.y);
            ctx.lineTo(point.x, point.y);
            ctx.lineWidth = .75;
            ctx.strokeStyle = 'rgba(219,230,227,' + alpha * t * .18 + ')';
            ctx.stroke();
          }
          if (step === 12) {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 1.1, 0, TAU);
            ctx.fillStyle = 'rgba(219,230,227,' + alpha * .5 + ')';
            ctx.fill();
          }
          previous = point;
        }
      }
      for (const label of this.introPoints) {
        if (label.hidden || label.quiet) continue;
        let previous;
        for (let step = 0; step <= 8; step++) {
          const phase = Math.max(0, this.phase - .8 * (1 - step / 8));
          const [x, y] = FRAME_CORNERS[label.corner];
          const point = step === 8 ? frames.find(frame => frame.layer === label.layer).corners[label.corner] : this.frameProjection(cx, cy, radius, phase)(x, y, label.layer * .36, label.layer);
          if (previous) {
            ctx.beginPath();
            ctx.moveTo(previous.x, previous.y);
            ctx.lineTo(point.x, point.y);
            ctx.strokeStyle = 'rgba(219,230,227,' + alpha * (step / 8) * .3 + ')';
            ctx.lineWidth = .8;
            ctx.stroke();
          }
          previous = point;
        }
      }
    }

    drawNetwork(cx, cy, radius, opacity, frames) {
      const ctx = this.ctx;
      const home = this.mode === 'home';
      if (this.mode === 'intro') {
        this.introPoints.forEach((label, index) => {
          if (label.hidden || label.quiet) return;
          const progress = Math.max(0, Math.min(1, this.introReveal.lines * 1.65 - index * .055));
          const anchor = frames.find(frame => frame.layer === label.layer)?.corners[label.corner];
          if (!anchor) return;
          const startX = anchor.x;
          const startY = anchor.y;
          const endX = startX + (label.x + label.offsetX - startX) * progress;
          const endY = startY + (label.y + label.offsetY - startY) * progress;
          ctx.lineWidth = .65;
          ctx.strokeStyle = 'rgba(203,222,218,' + opacity * (label.primary ? .32 : .20) * progress + ')';
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();
        });
        return;
      }
      const phases = home ? [-2.12, 0, 1.16] : [-2.3, -.6, 1, 2.5];
      const bounds = this.fieldBounds;
      const rx = home ? bounds.width * (this.width < 700 ? .35 : .36) : radius * 1.7;
      const ry = home ? bounds.height * (this.width < 700 ? .35 : .35) : radius * 1.4;
      ctx.lineWidth = .8;
      for (let i = 0; i < phases.length; i++) {
        const angle = phases[i] + this.orbitPhase;
        const dx = Math.cos(angle) * rx;
        const dy = Math.sin(angle) * ry;
        const x = cx + dx;
        const y = cy + dy;
        const reach = Math.hypot(dx, dy);
        ctx.strokeStyle = 'rgba(203,222,218,' + opacity * .44 + ')';
        ctx.beginPath();
        ctx.moveTo(cx + dx / reach * radius * .65, cy + dy / reach * radius * .65);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.fillStyle = '#080a0c';
        ctx.beginPath();
        ctx.arc(x, y, 3.2, 0, TAU);
        ctx.fill();
        ctx.strokeStyle = 'rgba(230,240,236,' + opacity * .8 + ')';
        ctx.stroke();
        if (home) {
          const size = this.linkSizes[i];
          const left = Math.max(0, Math.min(bounds.width - size.width, bounds.width * .5 + dx + (dx >= 0 ? 12 : -size.width - 12)));
          const top = Math.max(0, Math.min(bounds.height - size.height, bounds.height * .5 + dy - size.height * .5));
          this.homeLinks[i].style.transform = 'translate3d(' + left.toFixed(2) + 'px,' + top.toFixed(2) + 'px,0)';
        } else {
          const label = this.introPoints[i];
          ctx.strokeStyle = 'rgba(203,222,218,' + opacity * .16 + ')';
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(label.x, label.y);
          ctx.stroke();
        }
      }
      if (home && this.width >= 700) {
        const x = bounds.x - 16;
        ctx.strokeStyle = 'rgba(219,230,227,' + opacity * .42 + ')';
        ctx.beginPath();
        ctx.moveTo(x, cy);
        ctx.lineTo(cx - radius * 1.15, cy);
        ctx.stroke();
        ctx.fillStyle = 'rgba(219,230,227,' + opacity * .9 + ')';
        ctx.fillRect(x - 3, cy - 3, 6, 6);
      }
    }

    projectPoint(x, y, z, cx, cy, radius, ax, ay, az) {
      const yy = y * Math.cos(ax) - z * Math.sin(ax);
      const zz = y * Math.sin(ax) + z * Math.cos(ax);
      const xx = x * Math.cos(ay) + zz * Math.sin(ay);
      const zzz = -x * Math.sin(ay) + zz * Math.cos(ay);
      const xr = xx * Math.cos(az) - yy * Math.sin(az);
      const yr = xx * Math.sin(az) + yy * Math.cos(az);
      const perspective = 3.8 / (3.8 - zzz);
      let px = cx + xr * radius * perspective;
      let py = cy + yr * radius * perspective;
      if (this.running && this.pointer.inside) {
        const dx = px - this.pointer.x, dy = py - this.pointer.y;
        const distance = Math.hypot(dx, dy);
        const influence = radius * 1.1;
        if (distance < influence && distance > 1) {
          const shift = (1 - distance / influence) ** 2 * radius * .13;
          px += dx / distance * shift;
          py += dy / distance * shift;
        }
      }
      return { x: px, y: py, z: zzz };
    }

    frameProjection(cx, cy, radius, phase = this.phase) {
      const ax = -.2 + Math.sin(phase * .24) * .3 + this.pointer.sy * .12;
      const ay = -.28 + phase * .35 + this.pointer.sx * .15;
      const az = -.1 + phase * .12;
      return (x, y, z, layer = 0) => this.projectPoint(x, y, z, cx, cy, radius, ax + layer * .12, ay - layer * .12, az + layer * .14);
    }

    drawFrames(cx, cy, radius, opacity, frames, point) {
      const ctx = this.ctx;
      const phase = this.phase;
      // Paint distant planes first so rotation preserves front/back occlusion.
      for (const frame of [...frames].sort((a, b) => a.center.z - b.center.z)) {
        const { layer, corners } = frame;
        const z = layer * .36;
        ctx.beginPath();
        corners.forEach((p, i) => i ? ctx.lineTo(p.x,p.y) : ctx.moveTo(p.x,p.y));
        ctx.closePath();
        const depth = Math.max(.2, Math.min(1, (frame.center.z + 1) / 2));
        ctx.fillStyle = 'rgba(8,10,12,' + opacity * (.3 + depth * .3) + ')';
        ctx.fill();
        ctx.lineWidth = layer === 0 ? 1.25 : .75;
        const contrast = this.mode === 'intro' ? (layer === 0 ? .88 : .28 + depth * .35) : (layer === 0 ? .65 : .18 + depth * .3);
        ctx.strokeStyle = 'rgba(211,233,225,' + opacity * contrast + ')';
        ctx.stroke();
        if (layer === 0) {
          for (let line = 0; line < 3; line++) {
            ctx.beginPath();
            for (let step = 0; step <= 48; step++) {
              const x = -.78 + step / 48 * 1.56;
              const y = (line - 1) * .24 + Math.sin(x * 2.6 + phase * .24) * .2;
              const p = point(x,y,z);
              step ? ctx.lineTo(p.x,p.y) : ctx.moveTo(p.x,p.y);
            }
            ctx.lineWidth = .75;
            ctx.strokeStyle = 'rgba(211,233,225,' + opacity * .48 + ')';
            ctx.stroke();
          }
        }
        if (this.mode !== 'intro') {
          const anchor = corners[(layer + 3) % 4];
          ctx.fillStyle = 'rgba(214,231,225,' + opacity * .65 + ')';
          ctx.font = '9px Consolas,monospace';
          ctx.fillText('0' + (layer + 2), anchor.x + 7, anchor.y - 6);
        }
        if (this.mode === 'intro') {
          ctx.fillStyle = 'rgba(219,230,227,' + opacity * .7 * this.introReveal.lines + ')';
          this.introPoints.filter(label => !label.hidden && !label.quiet && label.layer === layer).forEach(label => {
            const corner = corners[label.corner];
            ctx.beginPath();
            ctx.arc(corner.x, corner.y, label.quiet ? 1 : 1.6, 0, TAU);
            ctx.fill();
          });
        }
      }
      ctx.fillStyle = 'rgba(235,244,239,' + opacity + ')';
      ctx.fillRect(cx - 2.5, cy - 2.5, 5, 5);
    }
  }
  window.PortfolioScene = PortfolioScene;
})();

