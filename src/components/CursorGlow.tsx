import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9999] w-[120px] h-[120px] rounded-full"
      style={{
        background: "radial-gradient(circle, hsl(82 85% 55% / 0.35) 0%, hsl(82 85% 55% / 0.12) 35%, transparent 65%)",
        filter: "blur(12px)",
        transition: "left 0.08s linear, top 0.08s linear",
        transform: "translate3d(0, 0, 0) translate(-50%, -50%)",
        willChange: "transform",
      }}
    />
  );
};

export default CursorGlow;
