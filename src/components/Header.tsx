import { Wallet, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            MemeVault
          </h1>
          <div className="hidden md:flex items-center gap-6">
            <a href="#explore" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Explore
            </a>
            <a href="#trending" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Trending
            </a>
            <a href="#stats" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Stats
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
