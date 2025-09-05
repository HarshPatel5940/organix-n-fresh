import { Leaf, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-teal/5"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4 group">
            <div className="flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/icon.png"
                alt="Organix n Fresh Logo"
                className="w-11 h-14 text-white group-hover:animate-bounce"
              />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Organix n Fresh
                </h3>
                <p className="text-xs text-white/70 font-medium">
                  By Nyas Corporation
                </p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
              Premium organic products sourced directly from certified farms
              across India. Quality, purity, and authenticity in every product.
            </p>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h4 className="font-bold mb-6 text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "Our Story", href: "#story" },
                { label: "Products", href: "#products" },
                { label: "Features", href: "#features" },
                { label: "About Us", href: "#about" },
              ].map((link, index) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-all duration-300 flex items-center group-hover:translate-x-1 hover:scale-105"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="w-2 h-2 bg-primary/60 rounded-full mr-3 group-hover:animate-ping"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="group">
            <h4 className="font-bold mb-6 text-lg bg-gradient-to-r from-secondary to-teal bg-clip-text text-transparent">
              Products
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Spices & Whole Spices",
                "Cold-pressed Oils",
                "Millets & Grains",
                "Rice & Flour",
                "Ready-to-Cook",
              ].map((product, index) => (
                <li key={product}>
                  <span
                    className="text-white/80 hover:text-secondary transition-all duration-300 flex items-center group-hover:translate-x-1 cursor-pointer hover:scale-105"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="w-2 h-2 bg-secondary/60 rounded-full mr-3 group-hover:animate-ping"></span>
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="group">
            <h4 className="font-bold mb-6 text-lg bg-gradient-to-r from-teal to-sage bg-clip-text text-transparent">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 group/item">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-green-500/30 transition-colors duration-300">
                  <MessageCircle className="w-4 h-4 text-green-400 group-hover/item:animate-bounce" />
                </div>
                <a
                  href="https://wa.me/8210684996?text=Hi,%20Interested%20in%20your%20products"
                  className="text-white/80 hover:text-green-400 transition-colors duration-300"
                >
                  Chat with us!
                </a>
              </div>

              <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 group/item">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-blue-500/30 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-blue-400 group-hover/item:animate-bounce" />
                </div>
                <a
                  href="tel:+918210684996"
                  className="text-white/80 hover:text-blue-400 transition-colors duration-300"
                >
                  +91 8210684996
                </a>
              </div>

              <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 group/item">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-purple-500/30 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-purple-400 group-hover/item:animate-bounce" />
                </div>
                <a
                  href="mailto:nyascorporation@gmail.com"
                  className="text-white/80 hover:text-purple-400 transition-colors duration-300 break-all"
                >
                  nyascorporation@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-3 hover:scale-105 transition-transform duration-300 group/item">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-orange-500/30 transition-colors duration-300 mt-0.5">
                  <MapPin className="w-4 h-4 text-orange-400 group-hover/item:animate-bounce" />
                </div>
                <span className="text-white/80 group-hover/item:text-orange-400 transition-colors duration-300">
                  Patamda, East Singhbhum
                  <br />
                  Jharkhand - 832105
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60 text-center md:text-left">
              <p className="hover:text-primary transition-colors duration-300">
                &copy; {currentYear} Nyas Corporation. All rights reserved.
              </p>
              <p className="mt-1 font-mono text-xs hover:text-secondary transition-colors duration-300">
                GSTIN: 20AAYFN2385D1Z7
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Quality Policy", href: "#" },
              ].map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-teal transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
