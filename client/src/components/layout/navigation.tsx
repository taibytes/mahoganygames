import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import mahoganyLogo from "@assets/mahogany-logo_1754327701398.png";

const Navigation = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/games", label: "Games" },
    { path: "/blog", label: "Dev Blog" },
    { path: "/about", label: "About" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <nav className="mahogany-card backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-mahogany-300 warm-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md p-1">
              <img src={mahoganyLogo} alt="Mahogany Games Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-xl text-brown-accessible">
                Mahogany Games
              </span>
              <span className="font-caveat text-sm text-forest-accessible">
                🌿 Nature • Technology • Gaming
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={`font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-forest-500 rounded px-2 py-1 ${
                  isActive(item.path)
                    ? "text-forest-accessible"
                    : "text-brown-accessible hover:text-forest-accessible"
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Button asChild className="bg-brown-600 hover:bg-brown-700 text-white shadow-md">
              <Link href="/contact">
                Contact
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="text-brown-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <a 
                      className={`block text-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-forest-500 rounded px-2 py-1 ${
                        isActive(item.path)
                          ? "text-forest-accessible"
                          : "text-brown-accessible hover:text-forest-accessible"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
                <Button 
                  asChild
                  className="w-full bg-brown-600 text-white hover:bg-brown-700"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">
                    Contact
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
