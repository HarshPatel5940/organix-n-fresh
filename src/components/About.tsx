import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Target, Eye, Users, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      description:
        "To provide the finest organic products while supporting sustainable farming communities across India.",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Our Vision",
      description:
        "To be India's most trusted name in organic FMCG products, promoting health and sustainability.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Our Values",
      description:
        "Integrity, quality, sustainability, and community empowerment guide everything we do.",
    },
  ];

  return (
    // Founded by Nyas Corporation in the heart of Jharkhand, we began with a simple mission: to bring the authentic flavors of India's organic produce to every household. Today, we're proud to be trusted by thousands of families who choose quality over compromise.
    <section
      id="about"
      className="py-20 bg-gradient-subtle-to-b rounded-3xl p-8"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn about our journey, mission, and the passionate team behind
            Organix n Fresh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Nyas Corporation
                  </h3>
                  <p className="text-muted-foreground">
                    Established with a vision to revolutionize the organic food
                    industry in India, Nyas Corporation is the parent company
                    behind the Organix n Fresh brand.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-primary/10">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Our Story
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Starting from the mineral-rich lands of Jharkhand, we
                  recognized the immense potential of organic farming in India.
                  What began as a small initiative to support local farmers has
                  grown into a comprehensive organic products company serving
                  customers nationwide.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we work with over 50 partner farms across multiple
                  states, ensuring that every product meets our strict quality
                  standards while supporting sustainable agriculture practices.
                </p>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="hover:shadow-organic transition-all duration-300 border border-primary/10"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-organic rounded-lg flex items-center justify-center text-white">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
