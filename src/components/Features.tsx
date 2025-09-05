import { Shield, Truck, Award, Users, Leaf, Package, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Quality Assurance",
      description: "Every product undergoes rigorous testing and quality checks to ensure premium standards.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Organic Sourcing Process",
      description: "Direct partnerships with certified organic farms ensuring purity from farm to table.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Packaging Innovation",
      description: "Eco-friendly, airtight packaging that preserves freshness and extends shelf life.",
      color: "text-teal",
      bgColor: "bg-teal/10"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Culinary Impact",
      description: "Enhancing flavors and nutrition in every dish with authentic, traditional spices.",
      color: "text-sage",
      bgColor: "bg-sage/10"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping ensuring your products reach you fresh and on time.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Excellence",
      description: "Multiple certifications and awards recognizing our commitment to quality.",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Supporting farming communities and promoting sustainable agricultural practices.",
      color: "text-teal",
      bgColor: "bg-teal/10"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Customer Satisfaction",
      description: "Dedicated customer service and satisfaction guarantee on all our products.",
      color: "text-sage",
      bgColor: "bg-sage/10"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Organix n Fresh</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to delivering excellence in every aspect of our business, 
            from sourcing to packaging to customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-organic transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card rounded-3xl p-8 shadow-organic border border-primary/10">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground font-medium">Products</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">50+</div>
              <p className="text-muted-foreground font-medium">Partner Farms</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal mb-2">10K+</div>
              <p className="text-muted-foreground font-medium">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sage mb-2">5</div>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;