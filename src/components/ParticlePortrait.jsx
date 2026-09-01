import { useEffect, useRef } from "react";
import "./ParticlePortrait.css";

// darkest -> lightest. Dense chars = dark pixels, sparse chars = light pixels.
const RAMP = "@%#*+=-:. ";

export default function ParticlePortrait({ image = "/assets/profile.png" }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    let particles = [];
    const mouse = { x: -999, y: -999 };

    // ---- settings you can tweak ----
    const CELL = 8;              // spacing between characters (grid size)
    const COLOR = "197, 145, 74"; // amber, as "r, g, b"
    const GRAVITY = 0.3;
    const EASE = 0.08;
    const MOUSE_RADIUS = 70;
    const MOUSE_PUSH = 6;

    const img = new Image();
    img.src = image;
    img.onload = () => setup();

    function setup() {
      const rect = container.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;

      const w = Math.min(width * 0.8, 420);
      const h = w * (img.height / img.width);
      const hidden = document.createElement("canvas");
      hidden.width = w;
      hidden.height = h;
      const hctx = hidden.getContext("2d");
      hctx.drawImage(img, 0, 0, w, h);
      const pixels = hctx.getImageData(0, 0, w, h).data;

      const offsetX = width / 2 - w / 2;
      const offsetY = height / 2 - h / 2;

      particles = [];

      for (let y = 0; y < h; y += CELL) {
        for (let x = 0; x < w; x += CELL) {
          const i = (y * w + x) * 4;
          const alpha = pixels[i + 3];
          if (alpha < 128) continue; // transparent = removed background

          const brightness = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;

          // pick a character by brightness — darker pixel = denser char
          const charIndex = Math.floor((brightness / 255) * (RAMP.length - 1));
          const char = RAMP[charIndex];
          if (char === " ") continue; // skip near-white pixels entirely

          const targetX = offsetX + x;
          const targetY = offsetY + y;

          particles.push({
            x: targetX + (Math.random() - 0.5) * 100,
            y: -Math.random() * height,
            targetX,
            targetY,
            vy: 0,
            char,
          });
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${CELL}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgba(${COLOR}, 0.9)`;

      for (const p of particles) {
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 4) {
          p.vy += GRAVITY;
          p.x += dx * EASE * 0.3;
          p.y += p.vy * 0.2 + dy * EASE * 0.3;
          p.vy *= 0.9;
        } else {
          p.x += dx * EASE;
          p.y += dy * EASE;
        }

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - mdist) / MOUSE_RADIUS;
          p.x += (mdx / mdist) * force * MOUSE_PUSH;
          p.y += (mdy / mdist) * force * MOUSE_PUSH;
        }

        ctx.fillText(p.char, p.x, p.y);
      }

      requestAnimationFrame(animate);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onMouseLeave() {
      mouse.x = -999;
      mouse.y = -999;
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