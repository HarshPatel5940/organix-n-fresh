import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Products from "@/components/Products";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Story />
        <Products />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
