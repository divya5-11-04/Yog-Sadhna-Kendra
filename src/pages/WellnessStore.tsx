import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, CheckCircle, Droplets } from "lucide-react";
import { getAssetPath } from "@/lib/assetHelper";

export default function WellnessStore() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());

  const toggleWishlist = (id: number) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(id)) {
      newWishlist.delete(id);
    } else {
      newWishlist.add(id);
    }
    setWishlist(newWishlist);
  };

  const netiLautaBenefits = [
    "Clears nasal passages",
    "Improves respiratory health",
    "Reduces allergies & sinusitis",
    "Enhances oxygen intake",
    "Prevents common cold",
  ];

  const netiPipeBenefits = [
    "Premium quality material",
    "Ergonomic design",
    "Easy to clean & maintain",
    "Durable construction",
    "Comfortable grip",
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background text-foreground py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="default" className="bg-primary text-primary-foreground text-sm md:text-base">
              ✨ Sacred Wellness
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-gotu text-primary drop-shadow-lg leading-tight">
            🏪 Wellness Store
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Authentic neti products for your nasal cleansing journey
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Product 1: Neti Lauta with Video */}
          <Card className="border-2 border-primary/30 overflow-hidden shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="space-y-4">
              {/* Video Section */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-primary text-primary-foreground text-xs md:text-sm">
                    ⭐ Featured Product
                  </Badge>
                </div>
                <div className="aspect-video w-full bg-black/10">
                  <video
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src={getAssetPath("/ashram/Neti_Lauta_with_202604061306.mp4")} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-gotu text-primary mb-2">
                      नेति लौटा
                    </h2>
                    <h3 className="text-xl md:text-2xl font-body text-foreground">
                      Neti Pot (Neti Lauta)
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <p className="text-base md:text-lg font-semibold text-primary">
                      ₹299 - ₹499
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Traditional copper or ceramic neti pot for nasal irrigation. Cleanses sinuses, improves breathing, and prevents respiratory issues.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-primary" />
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {netiLautaBenefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleWishlist(1)}
                      className="border-primary/30 text-primary hover:bg-primary/10"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          wishlist.has(1) ? "fill-current" : ""
                        }`}
                      />
                    </Button>
                  </div>
                </div>

                {/* Spiritual Message */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 border border-primary/20">
                  <p className="text-xs md:text-sm text-foreground italic leading-relaxed">
                    "नेति प्राणायाम से नाड़ी शुद्धि होती है और मन शांत रहता है।"
                    <br />
                    <span className="text-muted-foreground">"Neti purifies the nadis and brings peace to the mind."</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Product 2: Neti Pipe with Flip Card */}
          <Card className="border-2 border-secondary/30 overflow-hidden shadow-xl bg-gradient-to-br from-secondary/5 to-accent/5">
            <div className="space-y-4">
              {/* Flip Card */}
              <div className="relative h-96 md:h-80 perspective px-6 md:px-8 pt-6 md:pt-8">
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-secondary text-secondary-foreground text-xs md:text-sm">
                    💎 Premium Product
                  </Badge>
                </div>
                <div
                  className="relative w-full h-full cursor-pointer transition-transform duration-500 preserve-3d"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  {/* Front - neti.jpeg */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl border-2 border-secondary/30 overflow-hidden flex items-center justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <img
                      src={getAssetPath("/ashram/neti.jpeg")}
                      alt="Neti Pot Front"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  {/* Back - This_neti_pipe_202604061405.png */}
                  <div
                    className="absolute w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl border-2 border-secondary/30 overflow-hidden flex items-center justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <img
                      src={getAssetPath("/ashram/This_neti_pipe_202604061405.png")}
                      alt="Neti Pipe"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                <p className="text-center text-xs md:text-sm text-muted-foreground mt-3 font-body">
                  Hover to flip • {isFlipped ? "Front view" : "Detailed view"}
                </p>
              </div>

              {/* Product Details */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-gotu text-secondary mb-2">
                      नेति पाइप
                    </h2>
                    <h3 className="text-xl md:text-2xl font-body text-foreground">
                      Neti Pipe (Premium)
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <p className="text-base md:text-lg font-semibold text-secondary">
                      ₹399 - ₹699
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Premium quality neti pipe designed for optimal nasal irrigation experience. Crafted with ergonomic design for comfort and ease of use.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-secondary" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {netiPipeBenefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleWishlist(2)}
                      className="border-secondary/30 text-secondary hover:bg-secondary/10"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          wishlist.has(2) ? "fill-current" : ""
                        }`}
                      />
                    </Button>
                  </div>
                </div>

                {/* Spiritual Message */}
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-4 border border-secondary/20">
                  <p className="text-xs md:text-sm text-foreground italic leading-relaxed">
                    "स्वच्छता धर्म है, धर्म ही स्वच्छता है।"
                    <br />
                    <span className="text-muted-foreground">"Cleanliness is godliness."</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <Card className="border-2 border-primary/20 overflow-hidden shadow-lg bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="p-6 md:p-8 text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-gotu text-primary">
              Pure Nasal Cleansing Experience
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Combine traditional wisdom with premium quality products for optimal wellness results
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <a
                href="https://maps.app.goo.gl/V7KQDSP1EVwUr2DDA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold"
              >
                <ShoppingCart className="w-4 h-4" />
                Visit Our Ashram
              </a>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
