import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Massive Muscle Protein",
    category: "Mass Gainer",
    price: "$59.99",
    image: "/mass-gainer.png",
    flavors: ["Chocolate", "Vanilla", "Strawberry"]
  },
  {
    id: 2,
    name: "Legendary Creatine",
    category: "Strength & Recovery",
    price: "$29.99",
    image: "/creatine.png",
    flavors: ["Unflavored", "Fruit Punch"]
  },
  {
    id: 3,
    name: "Pre-Workout Igniter",
    category: "Energy & Focus",
    price: "$39.99",
    image: "/preworkout.png",
    flavors: ["Blue Raspberry", "Watermelon"]
  }
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">
              Featured <span className="text-orange-500">Products</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium max-w-xl">
              Equip yourself with the best tools for growth. Our top-selling formulas are engineered for maximum performance.
            </p>
          </div>
          <button 
            onClick={() => alert('Redirecting to full catalog...')}
            className="mt-6 md:mt-0 text-orange-500 font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2"
          >
            View All Products &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 rounded-3xl overflow-hidden group border border-zinc-800 hover:border-orange-500 transition-colors"
            >
              <div className="relative h-80 bg-zinc-800 p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="relative z-0 h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-orange-500 text-black text-xs font-black px-3 py-1 rounded-full uppercase">
                  Top Seller
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-2">
                  {product.category}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase">{product.name}</h3>
                
                <div className="flex gap-2 mb-6">
                  {product.flavors.map(flavor => (
                    <span key={flavor} className="text-xs font-medium text-gray-400 bg-black px-2 py-1 rounded">
                      {flavor}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-3xl font-black text-white">{product.price}</span>
                  <button 
                    onClick={() => alert(`Added ${product.name} to cart!`)}
                    className="bg-white hover:bg-orange-500 text-black w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
