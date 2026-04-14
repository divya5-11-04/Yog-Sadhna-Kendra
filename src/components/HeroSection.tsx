import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Booking from "@/components/Booking";
import { useNavigate } from 'react-router-dom';
import { getAssetPath } from "@/lib/assetPath";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";



const gurus = [
  {
    id: 1,
    name: "Maharaj Ji",
    mantra: " करो योग रहो निरोग ",
    image: getAssetPath("/gurus/Maharaj ji.jpg"),
  },
  {
    id: 2,
    name: "Ram Lal Ji maharaj",
    mantra: "🌹राम नाम की नैय्या लेकर सतगुरू करें पुकार आओ मेरी नैय्या में ले जाऊंगा भव पार🌹",
    image: getAssetPath("/gurus/Ram Lal Ji maharaj.png"),
  },
  {
    id: 3,
    name: "Swami Ram Mulakh Ji Maharaj",
    mantra: "तत् त्वम् असि",
    image: getAssetPath("/gurus/Mulakh Ji maharaj.png"),
  },
];

const ashramTimings = [
  { time: "5:45 AM", activity: "Morning Aarti", icon: "🪔" },
  { time: "6:00 AM", activity: "Dhyan & Pranayam Session", icon: "🫁" },
  { time: "6:15 AM", activity: "Yog Session", icon: "🧘‍♀️" },
  { time: "7:00 AM", activity: "Neti and Consultation", icon: "💬" },
  { time: "6:00 PM", activity: "Evening Yog Session", icon: "🧘‍♀️" },
  { time: "7:00 PM", activity: "Satsang & Kirtan", icon: "🕉️" },
];

const HeroSection = () => {
  const [currentGuru, setCurrentGuru] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGuru((prev) => (prev + 1) % gurus.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextGuru = () => {
    setCurrentGuru((prev) => (prev + 1) % gurus.length);
  };

  const prevGuru = () => {
    setCurrentGuru((prev) => (prev - 1 + gurus.length) % gurus.length);
  };
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 bg-gradient-to-b from-background to-muted overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-sacred" />
      </div>

      <div className="relative max-w-7xl mx-auto py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Side - Hero Content */}
          <div className="space-y-8 min-w-0">
            <div className="space-y-6">
              <h1 className="font-sacred text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary font-bold leading-tight break-words">
                Transform Your Life
              </h1>
              <h2 className="font-body text-xl sm:text-2xl lg:text-3xl text-secondary font-medium">
                Through Ancient Yog Wisdom & Holistic Healing
              </h2>
              <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Discover inner peace, physical wellness, and spiritual growth at our sacred ashram.
                Join thousands who have found healing through traditional yog practices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-sacred transition-all duration-300 font-body sm:text-lg text-base px-6 py-4"
                 onClick={() => navigate('/#')}
              >
                <Play className="w-5 h-5 mr-2" />
                Begin Your Healing Journey
              </Button>
              

              {/* Book Visit Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body text-lg px-6 sm:px-8 py-4 sm:py-6"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Visit
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-xl w-full">
                  <DialogHeader>
                    <DialogTitle className="text-xl text-primary">Book Your Visit</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                      Fill in the details and we’ll connect with you soon.
                    </DialogDescription>
                  </DialogHeader>
                  <Booking />
                </DialogContent>
              </Dialog>
            </div>

            {/* Daily Ashram Timings */}
            <Card className="p-4 sm:p-6 bg-card/80 backdrop-blur-sm shadow-gentle">
              <h3 className="font-lora text-xl sm:text-2xl text-primary mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                Daily Ashram Schedule
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {ashramTimings.map((timing, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-2xl">{timing.icon}</span>
                    <div>
                      <p className="font-body font-semibold text-primary">{timing.time}</p>
                      <p className="font-body text-sm text-muted-foreground">{timing.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Side - Guru Slider */}
          <div className="relative min-w-0">
            <Card className="relative overflow-hidden shadow-sacred bg-card/90 backdrop-blur-sm">
              <div className="relative h-72 sm:h-96 overflow-hidden rounded-t-lg">
                <img
                  src={gurus[currentGuru].image}
                  alt={gurus[currentGuru].name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 space-y-4 text-center">
                <h3 className="font-sacred text-2xl sm:text-3xl text-primary font-bold">
                  {gurus[currentGuru].name}
                </h3>
                <p className="font-sacred text-lg sm:text-xl text-blue-900 dark:text-blue-400">
                  {gurus[currentGuru].mantra}
                </p>
            
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={prevGuru}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-primary rounded-full w-10 h-10 p-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextGuru}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-primary rounded-full w-10 h-10 p-0"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {gurus.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGuru(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentGuru ? "bg-primary shadow-lg" : "bg-muted hover:bg-primary/50"
                      }`}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
