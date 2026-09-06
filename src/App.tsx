import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/home/Hero";
import { Features } from "./components/home/Features";
import { Products } from "./components/home/Products";
import { OurStory } from "./components/home/OurStory";
import { Footer } from "./components/layout/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <OurStory />
      </main>
      <Footer />
    </div>
  );
}

export default App;
