import { MapPin, Users, Sprout, Award } from "lucide-react";
import IndiaStatesMap from "./ui/map";

const Story = () => {
  const deliveryStates = [
    { name: "Jharkhand", products: ["Spices", "Rice", "Millets"] },
    { name: "Bihar", products: ["Wheat", "Pulses", "Mustard Oil"] },
    { name: "West Bengal", products: ["Mustard Oil", "Rice", "Spices"] },
    { name: "Odisha", products: ["Rice", "Coconut Oil", "Turmeric"] },
  ];

  return (
    <section id="story" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering premium organic products across Jharkhand, Bihar, West
            Bengal, and Odisha. From farm to your doorstep, we ensure freshness
            and quality in every delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Farm-to-Table Promise
                  </h3>
                  <p className="text-muted-foreground">
                    We work directly with organic farmers across India, ensuring
                    fair trade practices and the highest quality standards from
                    seed to shelf.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Community Impact
                  </h3>
                  <p className="text-muted-foreground">
                    Supporting over 500 farming families across Jharkhand,
                    Bihar, West Bengal, and Odisha, creating sustainable
                    livelihoods while preserving traditional farming methods.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-muted-foreground">
                    Every product undergoes rigorous testing and quality checks,
                    ensuring you receive nothing but the purest, most nutritious
                    organic products.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/75 backdrop-blur-sm p-6 rounded-lg border border-primary/10">
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Currently Available in
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {deliveryStates.map((state) => (
                  <div key={state.name} className="bg-accent/50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold text-foreground">
                        {state.name}
                      </span>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                        Active
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Delivery Coverage Map */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-organic border border-primary/10">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Our Delivery Coverage
              </h3>

              {/* Interactive India Map */}
              <div className="mb-6">
                <IndiaStatesMap
                  showTooltip={true}
                  colorScheme={{
                    delivering: "#22C55E",
                    comingSoon: "#EAB308",
                    notDelivering: "#F97316",
                    hover: "#16A34A",
                  }}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4 text-sm flex-wrap gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-muted-foreground">
                      Delivering Now
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-muted-foreground">Coming Soon</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span className="text-muted-foreground">
                      Not Available (hover)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
