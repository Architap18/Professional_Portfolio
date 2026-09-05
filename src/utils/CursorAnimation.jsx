import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const size = useRef(28);
  const targetSize = useRef(28);
  const rafId = useRef(null);

  useEffect(() => {
    const ringEl = ringRef.current;
    const dotEl = dotRef.current;

    function onMouseMove(e) {
      pos.current = { x: e.clientX, y: e.clientY };
    }

    function onMouseEnterInteractive() {
      targetSize.current = 56;
    }
    function onMouseLeaveInteractive() {
      targetSize.current = 28;
    }

    const interactives = document.querySelectorAll(
      "a, button, p, h1, h2, h3, h4, h5, h6, input, textarea, [role='button']"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    window.addEventListener("mousemove", onMouseMove);

    function tick() {
      // Tiny dot: perfectly instant
      dotEl.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;

      // Ring: silky smooth lerp follow
      ring.current.x += (pos.current.x - ring.current.x) * 0.18;
      ring.current.y += (pos.current.y - ring.current.y) * 0.18;
      size.current += (targetSize.current - size.current) * 0.14;

      const s = size.current;
      ringEl.style.transform = `translate(${ring.current.x - s / 2}px, ${ring.current.y - s / 2}px)`;
      ringEl.style.width = `${s}px`;
      ringEl.style.height = `${s}px`;
      ringEl.style.opacity = targetSize.current === 56 ? "0.6" : "0.85";

      rafId.current = requestAnimationFrame(tick);
    }

    rafId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Outer ring — smooth lag follow */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: "1.5px solid rgba(255,255,255,0.85)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          willChange: "transform, width, height",
          transition: "opacity 0.2s ease",
        }}
      />
      {/* Center dot — zero lag */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "white",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          willChange: "transform",
        }}
      />
    </>
  );
}
