import { Mail, Phone, MapPin, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.jpg" alt="BodyFuel Logo" className="h-10 w-10 rounded-full object-cover border-2 border-orange-500" />
              <span className="text-2xl font-black text-white tracking-tighter uppercase italic">
                Body<span className="text-orange-500">Fuel</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 font-medium">
              Elite sports nutrition for those who refuse to settle. Fuel your body, destroy your goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Share2 className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <MapPin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Protein Powders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Pre-Workouts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Recovery & BCAA</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Merchandise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-medium">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Join The Squad</h4>
            <p className="text-gray-400 mb-4 font-medium">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form 
              className="flex flex-col sm:flex-row gap-2 sm:gap-0"
              onSubmit={(e) => { e.preventDefault(); alert('Successfully joined the squad!'); }}
            >
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="bg-zinc-900 text-white px-4 py-3 rounded-lg sm:rounded-r-none sm:rounded-l-lg focus:outline-none focus:ring-1 focus:ring-orange-500 flex-grow font-medium border border-zinc-800 w-full"
              />
              <button 
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg font-black uppercase tracking-wider transition-colors w-full sm:w-auto"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-medium mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BodyFuel Supplements. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
