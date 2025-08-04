import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Coffee } from "lucide-react";

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
            <div className="w-10 h-10 mahogany-gradient-deep rounded-lg flex items-center justify-center shadow-md warm-glow">
              <Coffee className="text-white" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-playfair font-bold text-xl text-mahogany-800">
                Mahogany Games
              </span>
              <span className="font-caveat text-sm text-mahogany-600">
                Cozy • Inclusive • Meaningful
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-mahogany-600"
                    : "text-mahogany-700 hover:text-mahogany-500"
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="mahogany-button text-white cozy-shadow">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="text-mahogany-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <a 
                      className={`block text-lg font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? "text-mahogany-600"
                          : "text-mahogany-700 hover:text-mahogany-500"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
                <Link href="/contact">
                  <Button 
                    className="w-full bg-mahogany-600 text-white hover:bg-mahogany-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
