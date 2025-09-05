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
              className="group hover:shadow-organic transition-all duration-500 border-2 border-transparent hover:border-primary/20 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    <div
                      className={`absolute bottom-3 left-3 ${getColorClasses(category.color)}`}
                    >
                      {category.icon}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>

                  <div className="space-y-1">
                    {category.items.slice(0, 3).map((item) => (
                      <div
                        key={item}
                        className="text-xs text-muted-foreground flex items-center"
                      >
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {item}
                      </div>
                    ))}
                    {category.items.length > 3 && (
                      <div className="text-xs text-primary font-medium">
                        +{category.items.length - 3} more
                      </div>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-organic"
                    onClick={() => navigate(`/category/${category.slug}`)}
                  >
                    Explore {category.title}
                    <ArrowRight className="w-4 h-4" />
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
