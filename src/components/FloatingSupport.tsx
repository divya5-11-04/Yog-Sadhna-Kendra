import { useState } from "react";
import { Heart, X, CreditCard, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const FloatingSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-primary shadow-sacred hover:shadow-lg transition-all duration-300 group"
          size="sm"
        >
          <Heart className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
        </Button>
      </div>

      {/* Support Modal Overlay */}
      <div className={cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-300",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <div className="flex items-center justify-center min-h-screen p-4">
          <Card className={cn(
            "w-full max-w-md bg-card/95 backdrop-blur-md shadow-sacred transition-all duration-300",
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          )}>
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <HandHeart className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-sacred text-xl font-bold text-primary">
                      Support Our Mission
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      Help us heal more lives
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Donation Options */}
              <div className="space-y-4 mb-6">
                <p className="font-body text-sm text-muted-foreground text-center">
                  Choose an amount to donate:
                </p>
          
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <Button className="w-full bg-gradient-primary hover:shadow-sacred transition-all duration-300 font-body">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Donate Now
                </Button>
                
                <div className="text-center">
                  <p className="font-body text-xs text-muted-foreground">
                    Your donation is eligible for 80G tax exemption
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    UPI • Cards • Bank Transfer • PayPal
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FloatingSupport;