import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Story", href: "#story" },
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/20 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/icon.png"
              alt="Organix n Fresh Logo"
              className="w-11 h-14 text-white"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Organix n Fresh
              </h1>
              <p className="text-xs text-muted-foreground">
                By Nyas Corporation
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-organic font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/8210684996?text=Hi,%20Interested%20in%20your%20products">
              <Button variant="organic" size="sm">
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="grid grid-cols-2 gap-3 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="bg-white/50 rounded-md px-3 py-2.5 text-foreground hover:text-primary transition-organic font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="col-span-2 rounded-md p-3 mt-2">
                <a href="https://wa.me/8210684996?text=Hi,%20Interested%20in%20your%20products">
                  <Button variant="organic" size="sm" className="w-full">
                    Contact Us
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
