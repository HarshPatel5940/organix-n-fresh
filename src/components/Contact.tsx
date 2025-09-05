import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 -mt-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to answer any questions about our organic products, bulk
            orders, or partnership opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-green-50 to-white backdrop-blur-sm border-2 border-transparent hover:border-green-300 hover:shadow-2xl hover:shadow-green-500/20 rounded-3xl transition-all duration-700 transform hover:scale-105 hover:-rotate-1 group">
              <CardContent className="p-8 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-200/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                  <MessageCircle className="w-8 h-8 text-white group-hover:animate-bounce" />
                </div>

                <h3 className="font-bold text-gray-800 mb-4 text-xl group-hover:text-green-700 transition-colors duration-300">
                  WhatsApp Chat
                </h3>

                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  Get instant responses to your queries. Chat with our team now!
                </p>

                <a
                  href="https://wa.me/8210684996?text=Hi,%20Interested%20in%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn"
                >
                  <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform group-hover/btn:scale-110 flex items-center space-x-2">
                    <span>Chat with us!</span>
                    <MessageCircle className="w-4 h-4 group-hover/btn:animate-pulse" />
                  </button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white backdrop-blur-sm border-2 border-transparent hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/20 rounded-3xl transition-all duration-700 transform hover:scale-105 hover:rotate-1 group">
              <CardContent className="p-8 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl">
                  <Mail className="w-8 h-8 text-white group-hover:animate-bounce" />
                </div>

                <h3 className="font-bold text-gray-800 mb-4 text-xl group-hover:text-blue-700 transition-colors duration-300">
                  Email Support
                </h3>

                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  Send us detailed queries and we'll get back to you promptly.
                </p>

                <a
                  href="mailto:nyascorporation@gmail.com"
                  className="group/btn"
                >
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform group-hover/btn:scale-110 flex items-center space-x-2">
                    <span>Email Us</span>
                    <Mail className="w-4 h-4 group-hover/btn:animate-pulse" />
                  </button>
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
