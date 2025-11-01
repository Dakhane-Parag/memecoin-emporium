import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet, CreditCard, Bitcoin, Zap } from "lucide-react";
import { toast } from "sonner";

interface PaymentGatewayDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  coinName: string;
  coinPrice: string;
}

const paymentGateways = [
  {
    id: "metamask",
    name: "MetaMask",
    icon: Wallet,
    description: "Connect with MetaMask wallet",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    icon: Zap,
    description: "Connect via WalletConnect",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    icon: Bitcoin,
    description: "Pay with Coinbase",
    color: "from-primary to-secondary",
  },
  {
    id: "credit-card",
    name: "Credit/Debit Card",
    icon: CreditCard,
    description: "Pay with card via WrapPay",
    color: "from-purple-500 to-pink-500",
  },
];

const PaymentGatewayDialog = ({
  open,
  onOpenChange,
  coinName,
  coinPrice,
}: PaymentGatewayDialogProps) => {
  const [selectedGateway, setSelectedGateway] = useState<string | null>(null);

  const handleGatewaySelect = (gatewayId: string, gatewayName: string) => {
    setSelectedGateway(gatewayId);
    
    // Simulate SDK integration
    setTimeout(() => {
      toast.success(`Processing payment via ${gatewayName}`, {
        description: `Purchasing ${coinName} at ${coinPrice}`,
      });
      onOpenChange(false);
      setSelectedGateway(null);
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Choose Payment Gateway
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Select your preferred payment method to purchase {coinName}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {paymentGateways.map((gateway) => {
            const Icon = gateway.icon;
            const isSelected = selectedGateway === gateway.id;
            
            return (
              <button
                key={gateway.id}
                onClick={() => handleGatewaySelect(gateway.id, gateway.name)}
                disabled={isSelected}
                className="w-full group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,207,232,0.15)] disabled:opacity-50"
              >
                <div className="flex items-center gap-4 p-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gateway.color} flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {gateway.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {gateway.description}
                    </p>
                  </div>

                  {isSelected && (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Powered by WrapPay SDK</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentGatewayDialog;
