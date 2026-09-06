import { Shield, Target, Flame, Activity } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Lab-tested, third-party verified pure ingredients. No proprietary blends, no fillers."
  },
  {
    icon: Target,
    title: "Precision Dosed",
    description: "Scientifically backed dosages designed to optimize muscle growth and recovery."
  },
  {
    icon: Flame,
    title: "Maximum Potency",
    description: "Formulated for intense workouts and those demanding peak physical performance."
  },
  {
    icon: Activity,
    title: "Rapid Absorption",
    description: "Advanced micro-filtration technology for faster delivery to muscle tissues."
  }
];

export function Features() {
  return (
    <section id="benefits" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">
            Why Choose <span className="text-orange-500">BodyFuel</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
            We don't compromise on quality. Every product is engineered to deliver real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition-colors group"
            >
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <feature.icon className="w-8 h-8 text-orange-500 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
