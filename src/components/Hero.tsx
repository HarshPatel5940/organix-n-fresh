import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Sprout, Heart } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Logo Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/50 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
              <img
                src="/icon.png"
                alt="Organix n Fresh Logo"
                className="w-8 h-8"
              />
              <span className="text-sm font-medium text-foreground">
                100% Natural & Organic
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Pure
                <span className="text-primary"> Natural</span>
                <br />
                <span className="text-secondary">Goodness</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                From farm to your kitchen, experience the authentic taste of
                India's finest spices, oils, and grains sourced directly from
                organic farms across the nation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="organic" size="lg" className="text-lg px-8">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Our Story
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">100% Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sprout className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Organic Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-teal" />
                <span className="text-sm font-medium">Farm Fresh</span>
              </div>
            </div>
          </div>

          {/* Stats/Visual Element */}
          <div className="relative hidden lg:block">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-organic border border-primary/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <p className="text-muted-foreground">Premium Products</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <p className="text-muted-foreground">Partner Farms</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal">100%</div>
                  <p className="text-muted-foreground">Organic Quality</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sage">24/7</div>
                  <p className="text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
