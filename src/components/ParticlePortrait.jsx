import { useEffect, useRef } from "react";
import "./ParticlePortrait.css";

export default function ParticlePortrait({ image = "/assets/profile.jpg" }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    let particles = [];

    // Raw mouse position — instant
    const mouse = { x: -9999, y: -9999 };
    // Smoothly interpolated scanner lens position — glides elegantly
    const lens = { x: -9999, y: -9999 };
    let lensVisible = false;

    const CELL        = 3.5;
    const COLOR       = "255, 255, 255";
    const GRAVITY     = 0.35;
    const EASE        = 0.1;
    const LENS_RADIUS = 72;   // Scanner lens radius in px
    const LENS_LERP   = 0.14; // Smooth glide factor (0 = frozen, 1 = instant)

    const img = new Image();
    img.src = image;
    img.onload = () => setup();

    function setup() {
      const rect = container.getBoundingClientRect();
      width  = canvas.width  = rect.width;
      height = canvas.height = rect.height;

      const w = Math.min(width * 0.85, 450);
      const h = w * (img.height / img.width);
      const hidden = document.createElement("canvas");
      hidden.width = w;
      hidden.height = h;
      const hctx = hidden.getContext("2d");
      hctx.drawImage(img, 0, 0, w, h);
      const pixels = hctx.getImageData(0, 0, w, h).data;

      const offsetX = width  / 2 - w / 2;
      const offsetY = height / 2 - h / 2;

      particles = [];

      for (let y = 0; y < h; y += CELL) {
        for (let x = 0; x < w; x += CELL) {
          const i = (Math.floor(y) * w + Math.floor(x)) * 4;
          const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2], a = pixels[i + 3];

          if (a < 30) continue;

          const brightness = r * 0.299 + g * 0.587 + b * 0.114;
          if (brightness < 18) continue;

          const normLum     = Math.min(1, Math.max(0, (brightness - 18) / 237));
          const targetX     = offsetX + x;
          const targetY     = offsetY + y;
          const baseOpacity = Math.min(1, 0.4 + normLum * 0.6);
          const pixelSize   = Math.max(1.8, CELL * 0.85 * (0.6 + normLum * 0.4));

          particles.push({
            x: targetX + (Math.random() - 0.5) * 60,
            y: -Math.random() * height,
            targetX,
            targetY,
            vy: 0,
            size: pixelSize,
            baseOpacity,
            currentOpacity: baseOpacity,
          });
        }
      }
    }

    function drawScannerRing() {
      if (!lensVisible) return;

      ctx.save();

      // Outer soft glow halo
      const grad = ctx.createRadialGradient(
        lens.x, lens.y, LENS_RADIUS - 12,
        lens.x, lens.y, LENS_RADIUS + 16
      );
      grad.addColorStop(0,    "rgba(255,255,255,0.00)");
      grad.addColorStop(0.35, "rgba(255,255,255,0.22)");
      grad.addColorStop(0.65, "rgba(255,255,255,0.10)");
      grad.addColorStop(1,    "rgba(255,255,255,0.00)");

      ctx.beginPath();
      ctx.arc(lens.x, lens.y, LENS_RADIUS + 16, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Crisp white ring stroke
      ctx.beginPath();
      ctx.arc(lens.x, lens.y, LENS_RADIUS, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,255,255,0.5)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Smoothly glide the scanner lens toward the raw mouse
      if (lensVisible) {
        lens.x += (mouse.x - lens.x) * LENS_LERP;
        lens.y += (mouse.y - lens.y) * LENS_LERP;
      }

      for (const p of particles) {
        // Physics: fast settle — NO cursor position shifting ever
        const dx   = p.targetX - p.x;
        const dy   = p.targetY - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 2) {
          p.vy += GRAVITY;
          p.x  += dx * EASE * 0.4;
          p.y  += p.vy * 0.2 + dy * EASE * 0.4;
          p.vy *= 0.85;
        } else {
          p.x += dx * EASE;
          p.y += dy * EASE;
        }

        // Smooth cosine lens fade: center = transparent, edge = full brightness
        const mdist = Math.hypot(p.targetX - lens.x, p.targetY - lens.y);
        if (lensVisible && mdist < LENS_RADIUS) {
          const t    = mdist / LENS_RADIUS;
          const fade = (1 - Math.cos(t * Math.PI)) / 2;
          p.currentOpacity = p.baseOpacity * fade;
        } else {
          p.currentOpacity = p.baseOpacity;
        }

        ctx.fillStyle = `rgba(${COLOR}, ${p.currentOpacity})`;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      }

      // Draw scanner ring on top of pixels
      drawScannerRing();

      requestAnimationFrame(animate);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      if (!lensVisible) {
        // Snap to cursor on first enter so it doesn't slide in from off-screen
        lens.x = mouse.x;
        lens.y = mouse.y;
        lensVisible = true;
      }
    }
    function onMouseLeave() {
      lensVisible = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }

    window.addEventListener("resize", setup);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    animate();

    return () => {
      window.removeEventListener("resize", setup);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [image]);

  return (
    <div ref={containerRef} className="particle-portrait">
      <canvas ref={canvasRef} />
    </div>
  );
}