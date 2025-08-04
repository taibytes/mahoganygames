import { Link } from "wouter";
import { Coffee, Github, Twitter, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mahogany-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-mahogany-500 to-mahogany-700 rounded-lg flex items-center justify-center shadow-md">
                <Coffee className="text-white" size={20} />
              </div>
              <div>
                <span className="font-playfair font-bold text-xl">Mahogany Games</span>
                <p className="text-mahogany-300 text-sm">Cozy • Inclusive • Meaningful</p>
              </div>
            </div>
            <p className="text-mahogany-300 leading-relaxed max-w-md">
              Creating cozy, inclusive, and meaningful gaming experiences that warm the heart and inspire the soul.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/">
                <a className="block text-mahogany-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </Link>
              <Link href="/games">
                <a className="block text-mahogany-300 hover:text-white transition-colors duration-200">
                  Games
                </a>
              </Link>
              <Link href="/blog">
                <a className="block text-mahogany-300 hover:text-white transition-colors duration-200">
                  Dev Blog
                </a>
              </Link>
              <Link href="/about">
                <a className="block text-mahogany-300 hover:text-white transition-colors duration-200">
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a className="block text-mahogany-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </Link>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/taibytes" 
                className="text-mahogany-300 hover:text-white text-xl transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-mahogany-300 hover:text-white text-xl transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-mahogany-300 hover:text-white text-xl transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-mahogany-300 hover:text-white text-xl transition-colors duration-200"
                aria-label="Discord"
              >
                <MessageCircle size={20} />
              </a>
            </div>
            <div className="space-y-2 pt-4">
              <a href="#" className="block text-mahogany-400 hover:text-mahogany-300 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="block text-mahogany-400 hover:text-mahogany-300 text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-mahogany-800 mt-8 pt-8 text-center">
          <p className="text-mahogany-400 text-sm">
            &copy; {currentYear} Mahogany Games. Made with <span className="text-mahogany-500">♥</span> by Tai.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
