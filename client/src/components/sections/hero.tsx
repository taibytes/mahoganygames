import { Button } from "@/components/ui/button";
import { Github, Twitter, Instagram } from "lucide-react";
import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="relative min-h-screen mahogany-gradient">
      <div className="absolute inset-0 wood-texture"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-brown-800 leading-tight">
                Welcome to <span className="text-forest-700">Mahogany Games</span>
              </h1>
              <p className="text-xl text-brown-700 font-light leading-relaxed">
                Creating cozy, inclusive, and meaningful gaming experiences that connect <span className="text-forest-600 font-medium">nature and technology</span> to warm the heart and inspire the soul.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/games">
                <Button size="lg" className="mahogany-button text-white transform hover:scale-105 transition-all duration-200 cozy-shadow warm-glow">
                  <span className="mr-2">🎮</span>
                  Explore Our Games
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white transition-all duration-200 nature-card"
                >
                  <span className="mr-2">🌿</span>
                  Learn About Us
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <span className="text-forest-600 font-medium">🌲 Follow the journey:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/taibytes" 
                  className="text-forest-600 hover:text-forest-800 text-xl transition-colors duration-200 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-forest-600 hover:text-forest-800 text-xl transition-colors duration-200 transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-forest-600 hover:text-forest-800 text-xl transition-colors duration-200 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:justify-self-end">
            <div className="relative mahogany-card rounded-2xl cozy-shadow p-8 max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-300 warm-glow">
              <div className="absolute -top-4 -left-4 w-8 h-8 mahogany-gradient-deep rounded-full shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent rounded-full shadow-lg"></div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-mahogany-400 to-mahogany-600 rounded-xl mx-auto flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl">☕</span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-mahogany-800 text-center">
                  Crafting with Care
                </h3>
                <p className="text-mahogany-600 text-center text-sm leading-relaxed">
                  Every pixel, every interaction, every moment designed to create joy and connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
