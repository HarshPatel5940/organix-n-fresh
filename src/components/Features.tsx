import {
  Shield,
  Truck,
  Award,
  Users,
  Leaf,
  Package,
  Heart,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Quality Assurance",
      description:
        "Every product undergoes rigorous testing and quality checks to ensure premium standards.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Organic Sourcing Process",
      description:
        "Direct partnerships with certified organic farms ensuring purity from farm to table.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Packaging Innovation",
      description:
        "Eco-friendly, airtight packaging that preserves freshness and extends shelf life.",
      color: "text-teal",
      bgColor: "bg-teal/10",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Culinary Impact",
      description:
        "Enhancing flavors and nutrition in every dish with authentic, traditional spices.",
      color: "text-sage",
      bgColor: "bg-sage/10",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping ensuring your products reach you fresh and on time.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Excellence",
      description:
        "Multiple certifications and awards recognizing our commitment to quality.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description:
        "Supporting farming communities and promoting sustainable agricultural practices.",
      color: "text-teal",
      bgColor: "bg-teal/10",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Customer Satisfaction",
      description:
        "Dedicated customer service and satisfaction guarantee on all our products.",
      color: "text-sage",
      bgColor: "bg-sage/10",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Organix n Fresh
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to delivering excellence in every aspect of our
            business, from sourcing to packaging to customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 border-0 bg-white/90 backdrop-blur-sm hover:-translate-y-4 hover:rotate-1 cursor-pointer"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: `fadeInScale 0.8s ease-out ${index * 0.1}s both`,
              }}
            >
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                >
                  <div
                    className={`${feature.color} group-hover:animate-bounce`}
                  >
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-primary/20 hover:shadow-3xl hover:scale-105 transition-all duration-700 group">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group-hover:scale-110 transition-all duration-500">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2 animate-pulse">
                500+
              </div>
              <p className="text-muted-foreground font-semibold group-hover:text-primary transition-colors duration-300">
                Products
              </p>
            </div>
            <div
              className="text-center group-hover:scale-110 transition-all duration-500"
              style={{ transitionDelay: "0.1s" }}
            >
              <div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-secondary/70 bg-clip-text text-transparent mb-2 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              >
                50+
              </div>
              <p className="text-muted-foreground font-semibold group-hover:text-secondary transition-colors duration-300">
                Partner Farms
              </p>
            </div>
            <div
              className="text-center group-hover:scale-110 transition-all duration-500"
              style={{ transitionDelay: "0.2s" }}
            >
              <div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal to-teal/70 bg-clip-text text-transparent mb-2 animate-pulse"
                style={{ animationDelay: "1s" }}
              >
                10K+
              </div>
              <p className="text-muted-foreground font-semibold group-hover:text-teal transition-colors duration-300">
                Happy Customers
              </p>
            </div>
            <div
              className="text-center group-hover:scale-110 transition-all duration-500"
              style={{ transitionDelay: "0.3s" }}
            >
              <div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sage to-sage/70 bg-clip-text text-transparent mb-2 animate-pulse"
                style={{ animationDelay: "1.5s" }}
              >
                5
              </div>
              <p className="text-muted-foreground font-semibold group-hover:text-sage transition-colors duration-300">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
