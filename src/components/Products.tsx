import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Wheat,
  Droplets,
  Sparkles,
  Clock,
  Leaf,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import spicesImage from "@/assets/spices-display.jpg";

const Products = () => {
  const navigate = useNavigate();

  const productCategories = [
    {
      title: "Spices",
      description: "Premium whole and ground spices with authentic flavor",
      icon: <Sparkles className="w-8 h-8" />,
      image: spicesImage,
      items: ["Turmeric", "Red Chili", "Coriander", "Cumin"],
      color: "primary",
      slug: "spices",
    },
    {
      title: "Whole Spices",
      description: "Hand-picked whole spices for maximum potency",
      icon: <Leaf className="w-8 h-8" />,
      image: spicesImage,
      items: ["Cardamom", "Cinnamon", "Cloves", "Black Pepper"],
      color: "secondary",
      slug: "whole-spices",
    },
    {
      title: "Powdered Spices",
      description: "Finely ground spices for instant flavor",
      icon: <Sparkles className="w-8 h-8" />,
      image: spicesImage,
      items: ["Garam Masala", "Chat Masala", "Sambar Powder", "Rasam Powder"],
      color: "teal",
      slug: "powdered-spices",
    },
    {
      title: "5 Mins to Gravy",
      description: "Ready-to-cook spice mixes for quick meals",
      icon: <Clock className="w-8 h-8" />,
      image: spicesImage,
      items: ["Butter Chicken", "Dal Tadka", "Kadai Paneer", "Rajma Masala"],
      color: "sage",
      slug: "5-mins-to-gravy",
    },
    {
      title: "Cold-pressed Oils",
      description: "Pure, unrefined oils extracted traditionally",
      icon: <Droplets className="w-8 h-8" />,
      image: spicesImage,
      items: ["Coconut Oil", "Mustard Oil", "Sesame Oil", "Groundnut Oil"],
      color: "primary",
      slug: "cold-pressed-oils",
    },
    {
      title: "Millets",
      description: "Ancient grains packed with nutrition",
      icon: <Wheat className="w-8 h-8" />,
      image: spicesImage,
      items: [
        "Foxtail Millet",
        "Pearl Millet",
        "Finger Millet",
        "Little Millet",
      ],
      color: "secondary",
      slug: "millets",
    },
    {
      title: "Rice & Flour",
      description: "Premium grains and traditional flours",
      icon: <Wheat className="w-8 h-8" />,
      image: spicesImage,
      items: ["Basmati Rice", "Brown Rice", "Wheat Flour", "Sattu Flour"],
      color: "teal",
      slug: "rice-flour",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "text-primary hover:border-primary/50",
      secondary: "text-secondary hover:border-secondary/50",
      teal: "text-teal hover:border-teal/50",
      sage: "text-sage hover:border-sage/50",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="products" className="py-20 bg-gradient-subtle-to-b">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated range of organic products, each
            category crafted to bring you the finest quality and authentic
            taste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {productCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 border-2 border-transparent hover:border-primary/30 bg-white/80 backdrop-blur-sm hover:-translate-y-3 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-40 object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40">
                    <div
                      className={`absolute bottom-3 left-3 p-2 bg-white/90 rounded-lg backdrop-blur-sm shadow-lg ${getColorClasses(
                        category.color
                      )} transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}
                    >
                      {category.icon}
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-primary/90 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    New
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    {category.items.slice(0, 3).map((item, itemIndex) => (
                      <div
                        key={item}
                        className="text-xs text-muted-foreground flex items-center transform transition-all duration-300 group-hover:translate-x-1"
                        style={{ transitionDelay: `${itemIndex * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:animate-ping"></div>
                        <span className="group-hover:text-foreground transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                    {category.items.length > 3 && (
                      <div className="text-xs text-primary font-medium flex items-center animate-pulse">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                        +{category.items.length - 3} more varieties
                      </div>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg"
                    onClick={() => navigate(`/category/${category.slug}`)}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Explore {category.title}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
