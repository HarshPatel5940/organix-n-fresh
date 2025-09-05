import { Leaf, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Organix n Fresh</h3>
                <p className="text-xs text-background/70">
                  By Nyas Corporation
                </p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Premium organic products sourced directly from certified farms
              across India. Quality, purity, and authenticity in every product.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-background/80">
                  Spices & Whole Spices
                </span>
              </li>
              <li>
                <span className="text-background/80">Cold-pressed Oils</span>
              </li>
              <li>
                <span className="text-background/80">Millets & Grains</span>
              </li>
              <li>
                <span className="text-background/80">Rice & Flour</span>
              </li>
              <li>
                <span className="text-background/80">Ready-to-Cook</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a
                  href="https://wa.me/8210684996?text=Hi,%20Interested%20in%20your%20products"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Chat with us!
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+918210684996"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  +91 8210684996
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:nyascorporation@gmail.com"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  nyascorporation@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-background/80">
                  Patamda, East Singhbhum
                  <br />
                  Jharkhand - 832105
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/60">
              <p>&copy; {currentYear} Nyas Corporation. All rights reserved.</p>
              <p className="mt-1">GSTIN: 20AAYFN2385D1Z7</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                Quality Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
