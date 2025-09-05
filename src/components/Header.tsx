import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Story", href: "#story" },
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/40 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-primary/20 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/icon.png"
                alt="Organix n Fresh Logo"
                className="w-11 h-14 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="transition-all duration-300 group-hover:translate-x-1">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Organix n Fresh
              </h1>
              <p className="text-xs text-muted-foreground font-medium">
                By Nyas Corporation
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/8210684996?text=Hi,%20Interested%20in%20your%20products"
              className="group"
            >
              <Button
                variant="organic"
                size="sm"
                className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25"
              >
                <span className="group-hover:animate-pulse">Contact Us</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border/50">
            <nav className="grid grid-cols-2 gap-3 mt-4">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2.5 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium text-center transform hover:scale-105"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen
                      ? "slideInFromRight 0.3s ease-out forwards"
                      : "none",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="col-span-2 rounded-lg p-3 mt-2">
                <a href="https://wa.me/8210684996?text=Hi,%20Interested%20in%20your%20products">
                  <Button
                    variant="organic"
                    size="sm"
                    className="w-full transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Contact Us
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
