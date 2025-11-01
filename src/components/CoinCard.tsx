import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import PaymentGatewayDialog from "@/components/PaymentGatewayDialog";

interface SubCoin {
  name: string;
  price: string;
  change: number;
}

interface CoinCardProps {
  image: string;
  name: string;
  symbol: string;
  price: string;
  change: number;
  volume: string;
  subCoins: SubCoin[];
}

const CoinCard = ({ image, name, symbol, price, change, volume, subCoins }: CoinCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isPositive = change > 0;

  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,207,232,0.2)] hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <img 
            src={image} 
            alt={name}
            className="w-16 h-16 rounded-full ring-2 ring-border group-hover:ring-primary/50 transition-all"
          />
          <Badge variant={isPositive ? "default" : "destructive"} className="flex items-center gap-1">
            {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {isPositive ? '+' : ''}{change}%
          </Badge>
        </div>

        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{symbol}</p>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Price</span>
            <span className="font-semibold text-foreground">{price}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">24h Volume</span>
            <span className="font-semibold text-foreground">{volume}</span>
          </div>
        </div>

        <div className="border-t border-border pt-4 mb-4">
          <p className="text-xs text-muted-foreground mb-3 font-semibold">SUB-VARIANTS</p>
          <div className="space-y-2">
            {subCoins.map((sub, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm bg-muted/50 rounded-lg p-2">
                <span className="font-medium">{sub.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">{sub.price}</span>
                  <span className={`text-xs font-semibold ${sub.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {sub.change > 0 ? '+' : ''}{sub.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button 
          className="w-full" 
          size="lg"
          onClick={() => setIsDialogOpen(true)}
        >
          Buy with WrapPay
        </Button>
      </div>

      <PaymentGatewayDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        coinName={name}
        coinPrice={price}
      />
    </Card>
  );
};

export default CoinCard;
