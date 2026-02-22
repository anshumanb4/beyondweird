import { useEffect, useRef } from 'react';

export default function Cursor() {
  const trailCount = 6;
  const dots = useRef([]);
  const root = useRef(null);
  const positions = useRef(Array.from({ length: trailCount }, () => ({ x: -100, y: -100 })));
  const mouse = useRef({ x: -100, y: -100 });
  const frame = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      const target = e.target.closest('a, button');
      if (target) {
        root.current?.classList.add('cursor--hover');
      } else {
        root.current?.classList.remove('cursor--hover');
      }
    };

    window.addEventListener('mousemove', onMove);

    const animate = () => {
      positions.current[0].x += (mouse.current.x - positions.current[0].x) * 0.6;
      positions.current[0].y += (mouse.current.y - positions.current[0].y) * 0.6;

      for (let i = 1; i < trailCount; i++) {
        positions.current[i].x += (positions.current[i - 1].x - positions.current[i].x) * 0.6;
        positions.current[i].y += (positions.current[i - 1].y - positions.current[i].y) * 0.6;
      }

      dots.current.forEach((el, i) => {
        if (!el) return;
        const { x, y } = positions.current[i];
        el.style.transform = `translate(${x}px, ${y}px)`;
      });

      frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="cursor-root" ref={root} aria-hidden="true">
      {Array.from({ length: trailCount }).map((_, i) => {
        const progress = i / (trailCount - 1);
        const opacity = 1 - progress * 0.85;
        return (
          <div
            key={i}
            ref={(el) => (dots.current[i] = el)}
            className="cursor-dot"
            style={{ opacity }}
          />
        );
      })}
    </div>
  );
}
