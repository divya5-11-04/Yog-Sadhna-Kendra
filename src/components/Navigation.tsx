import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useSupport } from "@/context/SupportContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openSupport } = useSupport();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Gurus", href: "/Gurus"},
    { name: "Ashram Highlights", href: "/ashram-highlights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-gentle w-full">
  <div className="w-full px-4 sm:px-6 lg:px-12">
    <div className="flex flex-wrap items-center justify-between h-20 md:h-24">
      {/* Logo & Title */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shrink-0">
          <span className="text-primary-foreground font-sacred text-xl">🕉</span>
        </div>
        <div>
          <h1 className="font-gotu text-xl sm:text-2xl md:text-3xl leading-snug">योग साधना केंद्र</h1>
          <p className="text-xs sm:text-sm text-muted-foreground font-body">Spiritual Healing & Wellness</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 flex-wrap">
        {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="text-sm xl:text-base font-body text-foreground hover:text-primary transition duration-200">
          {item.name}
        </Link>
      ))}
        <Button onClick={openSupport} className="bg-gradient-primary hover:shadow-sacred transition-all duration-300 text-xs sm:text-sm md:text-base px-4 py-2">
          <Heart className="w-4 h-4 mr-2" />
          Support Our Mission
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>
    </div>

    {/* Mobile Dropdown Menu */}
    <div className={cn(
      "lg:hidden transition-all duration-300 ease-in-out",
      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
      "overflow-hidden"
    )}>
      <div className="px-3 pt-2 pb-3 space-y-2 bg-card rounded-lg mt-2 shadow-gentle">
        {navItems.map((item) => (
  <Link
    key={item.name}
    to={item.href}
    className="block px-4 py-2 rounded-md text-sm font-body text-foreground hover:text-primary hover:bg-muted transition"
    onClick={() => setIsOpen(false)}
  >
    {item.name}
  </Link>
))}
        <div className="px-4 pt-2">
          <Button onClick={() => { openSupport(); setIsOpen(false); }} className="w-full text-sm bg-gradient-primary hover:shadow-sacred transition">
            <Heart className="w-4 h-4 mr-2" />
            Support Our Mission
          </Button>
        </div>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navigation;