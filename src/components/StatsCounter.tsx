import { useState, useEffect, useRef } from "react";
import { Users, Utensils, Heart, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    id: 1,
    icon: Heart,
    number: 5000,
    label: "People Healed",
    suffix: "+",
    color: "text-primary"
  },

  {
    id: 2,
    icon: Users,
    number: 12000,
    label: "Sessions Delivered",
    suffix: "+",
    color: "text-accent"
  },
  {
    id: 3,
    icon: Award,
    number: 15,
    label: "Years of Service",
    suffix: "+",
    color: "text-primary"
  }
];

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const increment = Math.ceil(stat.number / 100);
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(intervals[index]);
        }
        
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = current;
          return newCounters;
        });
      }, 30);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sacred text-4xl lg:text-5xl text-primary font-bold mb-4">
            Our Sacred Impact
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Thousands have found healing, peace, and transformation through our traditional practices
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={stat.id} className="p-6 text-center bg-card/80 backdrop-blur-sm shadow-gentle hover:shadow-sacred transition-all duration-300 group">
                <div className="mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="font-sacred text-3xl lg:text-4xl font-bold text-primary">
                    {counters[index].toLocaleString()}{stat.suffix}
                  </div>
                  <p className="font-body text-sm lg:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;