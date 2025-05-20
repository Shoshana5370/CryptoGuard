import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const EncryptionVisualizer=()=> {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle setup
    const particles: {
      x: number;
      y: number;
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

      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
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
    <div className="relative h-[500px] w-full rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-emerald-100/30 to-amber-50 border border-gray-100">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
          className="w-40 h-40 bg-white/60 backdrop-blur-lg rounded-full flex items-center justify-center shadow-lg"
        >
          <motion.div 
            animate={{ 
              rotate: 360,
              transition: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="w-32 h-32 bg-white/80 rounded-full flex items-center justify-center border-4 border-emerald-100"
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.8, 1.1, 0.8] }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="text-emerald-700 w-20 h-20 flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-14 h-14 fill-current">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        animate={{ 
          y: [0, -15, 0],
          transition: { 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="absolute top-10 right-20 w-12 h-12 rounded-lg bg-amber-50/70 backdrop-blur-sm shadow-xl border border-amber-100/60"
      />
      
      <motion.div 
        animate={{ 
          y: [0, 15, 0],
          transition: { 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }
        }}
        className="absolute bottom-16 left-16 w-16 h-16 rounded-full bg-emerald-50/70 backdrop-blur-sm shadow-xl border border-emerald-100/60"
      />
      
      <motion.div 
        animate={{ 
          y: [0, 10, 0],
          x: [0, 5, 0],
          transition: { 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }
        }}
        className="absolute top-1/3 left-1/4 w-10 h-10 rounded-md transform rotate-45 bg-rose-50/50 backdrop-blur-sm shadow-xl border border-rose-100/60"
      />
    </div>
  );
}
export default EncryptionVisualizer;