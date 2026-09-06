import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { RotatingModel } from "./RotatingModel";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-black pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/Video-31083.mp4" type="video/mp4" />
        </video>
        {/* Lighter gradients so the video is visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Side Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-start text-left relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-400 mb-6 font-bold uppercase tracking-wide text-sm backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            Fuel Your Potential
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] uppercase italic tracking-tighter mb-6 drop-shadow-2xl">
            Unleash The <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              Beast
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-lg font-medium drop-shadow-md">
            Premium grade supplements designed for elite athletes and those who refuse to settle for average. Build muscle, recover faster, and dominate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-full font-black uppercase tracking-wider text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              Shop Supplements
              <ArrowRight className="w-6 h-6" />
            </button>
            <button 
              onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black/50 backdrop-blur-sm border-2 border-white hover:border-orange-500 text-white hover:text-orange-500 px-8 py-4 rounded-full font-black uppercase tracking-wider text-lg transition-all hover:bg-black/80"
            >
              View Benefits
            </button>
          </div>
        </motion.div>

        {/* Right Side 3D Object */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative z-10 flex items-center justify-center"
        >
          <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            <RotatingModel />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
}
