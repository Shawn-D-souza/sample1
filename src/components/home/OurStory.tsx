import { motion } from "framer-motion";

export function OurStory() {
  return (
    <section id="about" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-orange-500 rounded-3xl translate-x-4 translate-y-4 opacity-50" />
              <img 
                src="/logo.jpg" 
                alt="BodyFuel Origins" 
                className="relative z-10 w-full h-full object-cover rounded-3xl border-4 border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
              Forged In The <span className="text-orange-500">Iron</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-medium">
              <p>
                BodyFuel wasn't created in a corporate boardroom. It was born in the squat racks, the deadlift platforms, and the grueling early morning sessions where true athletes are forged.
              </p>
              <p>
                We were tired of proprietary blends, under-dosed formulas, and "magic pills" that did nothing but empty our wallets. We wanted supplements that worked as hard as we did.
              </p>
              <p className="text-white border-l-4 border-orange-500 pl-4 py-2 italic font-bold">
                "Our mission is simple: Provide the highest quality, scientifically-backed ingredients at efficacious doses to those who demand the best from themselves."
              </p>
            </div>
            
            <div className="mt-10">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-4 rounded-full font-black uppercase tracking-wider transition-all"
              >
                Join The Movement
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
