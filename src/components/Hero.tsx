import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Powered by WrapPay SDK</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Trade Premium
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Meme Coins
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Experience seamless crypto payments with WrapPay SDK. 
          Trade the hottest meme coins with enterprise-grade security.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" className="text-lg">
            Explore Collections
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Learn About WrapPay
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-primary mb-1">$2.4B</div>
            <div className="text-sm text-muted-foreground">Total Volume</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">50K+</div>
            <div className="text-sm text-muted-foreground">Active Traders</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
