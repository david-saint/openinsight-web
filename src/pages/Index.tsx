import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Demo } from "@/components/landing/Demo";
import { Features } from "@/components/landing/Features";
import { Security } from "@/components/landing/Security";
import { Customize } from "@/components/landing/Customize";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Demo />
        <Features />
        <Security />
        <Customize />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
