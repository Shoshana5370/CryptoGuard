import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { Wrench } from "lucide-react";

const UnderConstruction=()=> {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const particles: { 
        y: number;
        x: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;
     }[] = [];
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        color: `rgba(${Math.floor(Math.random() * 85 + 170)}, ${Math.floor(Math.random() * 85 + 170)}, ${Math.floor(Math.random() * 85 + 170)}, ${Math.random() * 0.5 + 0.3})`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      ctx.strokeStyle = "rgba(160, 160, 160, 0.1)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative h-[500px] w-full rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-emerald-100 to-amber-50 border border-gray-100">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Floating UI Shapes */}
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-20 w-12 h-12 rounded-lg bg-amber-50/70 backdrop-blur-sm shadow-xl border border-amber-100/60" />
      <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-16 left-16 w-16 h-16 rounded-full bg-emerald-50/70 backdrop-blur-sm shadow-xl border border-emerald-100/60" />
      <motion.div animate={{ y: [0, 10, 0], x: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 left-1/4 w-10 h-10 rounded-md rotate-45 bg-rose-50/50 backdrop-blur-sm shadow-xl border border-rose-100/60" />

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 px-4">
        <Logo />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-40 h-40 bg-white/60 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 bg-white/80 rounded-full border-4 border-emerald-100 flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-emerald-700 w-20 h-20 flex items-center justify-center"
            >
              <Wrench className="w-12 h-12" />
            </motion.div>
          </motion.div>
        </motion.div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
          We're Building Something Great
        </h1>
        <p className="text-gray-600 max-w-md">
          This page is currently under construction. Stay tuned – new features are coming soon!
        </p>
      </div>
    </div>
  );
}
export default UnderConstruction;