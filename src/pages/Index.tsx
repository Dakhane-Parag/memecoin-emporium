import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoinCard from "@/components/CoinCard";
import { coins } from "@/data/coins";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <Hero />
        
        <section id="explore" className="container mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Meme Coins</h2>
              <p className="text-muted-foreground">
                Trade the most popular meme coins with instant SDK payments
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {coins.map((coin) => (
              <CoinCard key={coin.id} {...coin} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-16 border-t border-border">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Powered by Advanced Payment SDK
            </h2>
            <p className="text-muted-foreground mb-8">
              Our crypto payment gateway SDK enables seamless, secure transactions with support for 
              multiple cryptocurrencies. Integrate in minutes, scale to millions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">
                  Process transactions in under 3 seconds with our optimized infrastructure
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
                <p className="text-sm text-muted-foreground">
                  Bank-grade security with full regulatory compliance across all markets
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Simple API with comprehensive docs. Go live in less than an hour
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-border py-8 mt-16">
          <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
            <p>© 2024 MemeVault. Demo marketplace for payment SDK integration.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
