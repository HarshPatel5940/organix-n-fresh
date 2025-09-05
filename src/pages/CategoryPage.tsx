import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import spicesImage from "@/assets/spices-display.jpg";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  weight: string;
}

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryData: Record<
    string,
    { title: string; description: string; products: Product[] }
  > = {
    spices: {
      title: "Premium Spices",
      description:
        "Premium whole and ground spices with authentic flavor sourced directly from farms",
      products: [
        {
          id: "1",
          name: "Organic Turmeric Powder",
          description: "Pure turmeric with curcumin content",
          price: "₹120",
          image: spicesImage,
          weight: "250g",
        },
        {
          id: "2",
          name: "Red Chili Powder",
          description: "Fresh ground red chilies for perfect heat",
          price: "₹150",
          image: spicesImage,
          weight: "200g",
        },
        {
          id: "3",
          name: "Coriander Powder",
          description: "Aromatic coriander seeds ground fresh",
          price: "₹80",
          image: spicesImage,
          weight: "200g",
        },
        {
          id: "4",
          name: "Cumin Powder",
          description: "Premium quality cumin with rich aroma",
          price: "₹200",
          image: spicesImage,
          weight: "100g",
        },
      ],
    },
    "whole-spices": {
      title: "Whole Spices",
      description: "Hand-picked whole spices for maximum potency and freshness",
      products: [
        {
          id: "5",
          name: "Green Cardamom",
          description: "Premium quality green cardamom pods",
          price: "₹800",
          image: spicesImage,
          weight: "50g",
        },
        {
          id: "6",
          name: "Ceylon Cinnamon",
          description: "Authentic Ceylon cinnamon sticks",
          price: "₹300",
          image: spicesImage,
          weight: "100g",
        },
        {
          id: "7",
          name: "Whole Cloves",
          description: "Aromatic whole cloves for rich flavor",
          price: "₹400",
          image: spicesImage,
          weight: "50g",
        },
        {
          id: "8",
          name: "Black Peppercorns",
          description: "Premium black pepper from Kerala",
          price: "₹600",
          image: spicesImage,
          weight: "100g",
        },
      ],
    },
    "powdered-spices": {
      title: "Powdered Spices",
      description: "Finely ground spice blends for instant flavor enhancement",
      products: [
        {
          id: "9",
          name: "Garam Masala",
          description: "Traditional blend of aromatic spices",
          price: "₹180",
          image: spicesImage,
          weight: "100g",
        },
        {
          id: "10",
          name: "Chat Masala",
          description: "Tangy spice mix for snacks and fruits",
          price: "₹120",
          image: spicesImage,
          weight: "100g",
        },
        {
          id: "11",
          name: "Sambar Powder",
          description: "South Indian sambar spice blend",
          price: "₹160",
          image: spicesImage,
          weight: "200g",
        },
        {
          id: "12",
          name: "Rasam Powder",
          description: "Traditional Tamil rasam spice mix",
          price: "₹140",
          image: spicesImage,
          weight: "150g",
        },
      ],
    },
    "5-mins-to-gravy": {
      title: "5 Mins to Gravy",
      description: "Ready-to-cook spice mixes for quick and delicious meals",
      products: [
        {
          id: "13",
          name: "Butter Chicken Masala",
          description: "Rich and creamy butter chicken spice mix",
          price: "₹250",
          image: spicesImage,
          weight: "100g",
        },
        {
          id: "14",
          name: "Dal Tadka Mix",
          description: "Complete spice blend for perfect dal tadka",
          price: "₹180",
          image: spicesImage,
          weight: "100g",
        },
        {
          id: "15",
          name: "Kadai Paneer Masala",
          description: "Restaurant-style kadai paneer spice mix",
          price: "₹220",
          image: spicesImage,
          weight: "100g",
        },
        {
          id: "16",
          name: "Rajma Masala",
          description: "Authentic rajma curry spice blend",
          price: "₹200",
          image: spicesImage,
          weight: "100g",
        },
      ],
    },
    "cold-pressed-oils": {
      title: "Cold-pressed Oils",
      description: "Pure, unrefined oils extracted using traditional methods",
      products: [
        {
          id: "17",
          name: "Virgin Coconut Oil",
          description: "Cold-pressed virgin coconut oil",
          price: "₹350",
          image: spicesImage,
          weight: "500ml",
        },
        {
          id: "18",
          name: "Mustard Oil",
          description: "Pure cold-pressed mustard oil",
          price: "₹280",
          image: spicesImage,
          weight: "500ml",
        },
        {
          id: "19",
          name: "Sesame Oil",
          description: "Traditional cold-pressed sesame oil",
          price: "₹320",
          image: spicesImage,
          weight: "500ml",
        },
        {
          id: "20",
          name: "Groundnut Oil",
          description: "Pure cold-pressed groundnut oil",
          price: "₹300",
          image: spicesImage,
          weight: "500ml",
        },
      ],
    },
    millets: {
      title: "Ancient Millets",
      description: "Nutritious ancient grains packed with essential nutrients",
      products: [
        {
          id: "21",
          name: "Foxtail Millet",
          description: "High protein foxtail millet grains",
          price: "₹120",
          image: spicesImage,
          weight: "500g",
        },
        {
          id: "22",
          name: "Pearl Millet",
          description: "Iron-rich pearl millet (bajra)",
          price: "₹100",
          image: spicesImage,
          weight: "500g",
        },
        {
          id: "23",
          name: "Finger Millet",
          description: "Calcium-rich finger millet (ragi)",
          price: "₹130",
          image: spicesImage,
          weight: "500g",
        },
        {
          id: "24",
          name: "Little Millet",
          description: "Fiber-rich little millet grains",
          price: "₹140",
          image: spicesImage,
          weight: "500g",
        },
      ],
    },
    "rice-flour": {
      title: "Rice & Traditional Flours",
      description: "Premium grains and traditional flours for healthy cooking",
      products: [
        {
          id: "25",
          name: "Organic Basmati Rice",
          description: "Aged organic basmati rice",
          price: "₹180",
          image: spicesImage,
          weight: "1kg",
        },
        {
          id: "26",
          name: "Brown Rice",
          description: "Nutritious whole grain brown rice",
          price: "₹160",
          image: spicesImage,
          weight: "1kg",
        },
        {
          id: "27",
          name: "Wheat Flour",
          description: "Stone-ground whole wheat flour",
          price: "₹80",
          image: spicesImage,
          weight: "1kg",
        },
        {
          id: "28",
          name: "Sattu Flour",
          description: "Roasted gram flour (sattu)",
          price: "₹120",
          image: spicesImage,
          weight: "500g",
        },
      ],
    },
  };

  const currentCategory = categoryData[category || ""];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Category Not Found
          </h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 mt-28">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <button
            onClick={() => navigate("/")}
            className="hover:text-primary transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-foreground">{currentCategory.title}</span>
        </div>

        {/* Category Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {currentCategory.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {currentCategory.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {currentCategory.products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-organic transition-all duration-500 border-2 border-transparent hover:border-primary/20"
            >
              <CardContent className="p-4">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xl font-bold text-primary">
                        {product.price}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">
                        / {product.weight}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full" variant="organic">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Purchase Soon!
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Categories */}
        <div className="text-center">
          <Button
            onClick={() => navigate("/#products")}
            variant="outline"
            size="lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Categories
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
