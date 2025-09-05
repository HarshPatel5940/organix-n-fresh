import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Clock, MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to answer any questions about our organic products, bulk
            orders, or partnership opportunities.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:border-primary/30 hover:shadow-lg rounded-3xl transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100/80 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/8210684996?text=Hi,%20Interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm transition-colors"
                >
                  Chat with us!
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:border-primary/30 hover:shadow-lg rounded-3xl transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-blue-100/80 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                <a
                  href="mailto:nyascorporation@gmail.com"
                  className="text-blue-600 hover:underline text-sm"
                >
                  nyascorporation@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
