import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Sprout, Heart, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
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
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
            {/* Logo Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <Leaf className="w-6 h-6 text-primary group-hover:animate-bounce" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                100% Natural & Organic
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="inline-block animate-in fade-in slide-in-from-bottom-5 duration-700">
                  Pure
                </span>
                <span
                  className="text-primary inline-block animate-in fade-in slide-in-from-bottom-5 duration-700"
                  style={{ animationDelay: "0.2s" }}
                >
                  {" "}
                  Natural
                </span>
                <br />
                <span
                  className="text-secondary inline-block animate-in fade-in slide-in-from-bottom-5 duration-700"
                  style={{ animationDelay: "0.4s" }}
                >
                  Goodness
                </span>
              </h1>

              <p
                className="text-xl text-muted-foreground max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700"
                style={{ animationDelay: "0.6s" }}
              >
                From farm to your kitchen, experience the authentic taste of
                India's finest spices, oils, and grains sourced directly from
                organic farms across the nation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-5 duration-700"
              style={{ animationDelay: "0.8s" }}
            >
              <Button
                variant="organic"
                size="lg"
                className="text-lg px-8 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/30 group"
                onClick={scrollToProducts}
              >
                <span className="group-hover:animate-pulse">
                  Explore Products
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 hover:bg-primary/10 hover:border-primary/50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                onClick={scrollToStory}
              >
                <span className="group-hover:text-primary transition-colors duration-300">
                  Our Story
                </span>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex items-center space-x-8 pt-8 animate-in fade-in slide-in-from-bottom-5 duration-700"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center space-x-2 group hover:scale-110 transition-transform duration-300">
                <Shield className="w-5 h-5 text-primary group-hover:animate-pulse" />
                <span className="text-sm font-medium">100% Quality</span>
              </div>
              <div className="flex items-center space-x-2 group hover:scale-110 transition-transform duration-300">
                <Sprout className="w-5 h-5 text-secondary group-hover:animate-pulse" />
                <span className="text-sm font-medium">Organic Certified</span>
              </div>
              <div className="flex items-center space-x-2 group hover:scale-110 transition-transform duration-300">
                <Heart className="w-5 h-5 text-teal group-hover:animate-pulse" />
                <span className="text-sm font-medium">Farm Fresh</span>
              </div>
            </div>
          </div>

          {/* Stats/Visual Element */}
          <div
            className="relative hidden lg:block animate-in fade-in slide-in-from-right-10 duration-1000"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-primary/20 hover:shadow-3xl hover:scale-105 transition-all duration-500 group">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    500+
                  </div>
                  <p className="text-muted-foreground">Premium Products</p>
                </div>
                <div
                  className="text-center group-hover:scale-110 transition-transform duration-300"
                  style={{ transitionDelay: "0.1s" }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent">
                    50+
                  </div>
                  <p className="text-muted-foreground">Partner Farms</p>
                </div>
                <div
                  className="text-center group-hover:scale-110 transition-transform duration-300"
                  style={{ transitionDelay: "0.2s" }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-teal to-teal/70 bg-clip-text text-transparent">
                    100%
                  </div>
                  <p className="text-muted-foreground">Organic Quality</p>
                </div>
                <div
                  className="text-center group-hover:scale-110 transition-transform duration-300"
                  style={{ transitionDelay: "0.3s" }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-sage to-sage/70 bg-clip-text text-transparent">
                    24/7
                  </div>
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
