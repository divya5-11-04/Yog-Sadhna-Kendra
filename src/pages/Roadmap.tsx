import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MapPin, Phone } from "lucide-react";

interface GoalContent {
  video: string;
  desc: string;
  icon: string;
  tips?: string[];
}

const contentMap: Record<string, GoalContent> = {
  "Improve Eyesight": {
    video: "https://www.youtube.com/embed/NTZwzoxnLS0",
    icon: "👁️",
    desc: "Improve your eyesight with blinking exercises, eye yog, and proper nutrition like vitamin A and lutein. Avoid screen fatigue.",
    tips: [
      "Regular blinking exercises (20-20-20 rule)",
      "Vitamin A rich foods",
      "Eye yoga practice",
      "Screen time management",
    ],
  },
  "Improve Height": {
    video: "https://www.youtube.com/embed/O_f-WKguQVo",
    icon: "📏",
    desc: "Stretching, nutrition, posture correction, and sleep help improve height naturally, especially during growth years.",
    tips: [
      "Daily stretching routines",
      "Proper nutrition and calcium",
      "Posture correction exercises",
      "8+ hours quality sleep",
    ],
  },
  "Weight Loss": {
    video: "https://www.youtube.com/embed/H3jJ29oE8Zg",
    icon: "⚖️",
    desc: "Lose weight by creating a sustainable calorie deficit with a proper diet, daily movement, and strong mental focus.",
    tips: [
      "Calorie deficit diet plan",
      "Regular cardio and yoga",
      "Mindful eating habits",
      "Consistent progress tracking",
    ],
  },
  "Weight Gain": {
    video: "https://www.youtube.com/embed/RJF5eCXYzK8",
    icon: "💪",
    desc: "Gain weight through calorie surplus, protein intake, and strength workouts. Track your progress and be consistent.",
    tips: [
      "Calorie surplus meals",
      "High protein intake",
      "Strength training",
      "Progress monitoring",
    ],
  },
};

const Roadmap: React.FC = () => {
  const [goal, setGoal] = useState<string | null>(null);

  useEffect(() => {
    const selected = localStorage.getItem("selectedGoal");
    setGoal(selected);
  }, []);

  if (!goal || !contentMap[goal]) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center px-4">
        <div className="space-y-4">
          <p className="text-xl font-semibold text-foreground">No goal selected</p>
          <p className="text-muted-foreground">Please select a wellness goal to continue</p>
        </div>
      </div>
    );
  }

  const { video, desc, icon, tips } = contentMap[goal];

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background text-foreground py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full">
            <span className="text-4xl md:text-5xl">{icon}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-gotu text-primary drop-shadow-lg">
            {goal} Roadmap
          </h1>
          <p className="text-sm md:text-base text-muted-foreground font-body max-w-2xl mx-auto">
            Your personalized wellness journey starts here
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Video Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Card */}
            <Card className="border-2 border-primary/20 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 md:p-6 border-b border-primary/20">
                <h2 className="text-lg md:text-xl font-semibold text-primary flex items-center gap-2">
                  🎥 Featured Video
                </h2>
              </div>
              <div className="aspect-video w-full bg-black/10">
                <iframe
                  className="w-full h-full"
                  src={video}
                  frameBorder="0"
                  allowFullScreen
                  title="Goal Video"
                />
              </div>
            </Card>

            {/* Description Card */}
            <Card className="border-2 border-primary/20 overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 md:p-6 border-b border-primary/20">
                <h3 className="text-lg md:text-xl font-semibold text-primary">📋 Overview</h3>
              </div>
              <div className="p-4 md:p-6">
                <p className="text-sm md:text-base text-foreground leading-relaxed font-body">
                  {desc}
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tips Card */}
            {tips && tips.length > 0 && (
              <Card className="border-2 border-secondary/20 overflow-hidden shadow-lg sticky top-24">
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-4 md:p-6 border-b border-secondary/20">
                  <h3 className="text-lg font-semibold text-secondary flex items-center gap-2">
                    ✨ Key Tips
                  </h3>
                </div>
                <div className="p-4 md:p-6 space-y-3">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                        <span className="text-xs md:text-sm font-bold text-secondary">
                          {index + 1}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-foreground leading-relaxed">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* CTA - Book Your Visit (Indication Only) */}
            <Card className="border-2 border-primary/30 overflow-hidden shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="p-6 md:p-8 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📞</span>
                    <h3 className="text-lg font-semibold text-primary font-gotu">
                      Ready to Begin?
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Personalized guidance awaits
                  </p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm border border-primary/20 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm md:text-base">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <span className="font-body text-foreground">Book Your Visit</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm md:text-base">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" />
                    <span className="font-body text-muted-foreground text-xs md:text-sm leading-snug">
                      योग साधना केंद्र, फिरोजपुर
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm md:text-base">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                    <span className="font-body text-foreground">88375-98603</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-primary/20">
                  <p className="text-xs text-muted-foreground text-center font-body italic">
                    Contact us to schedule your personalized wellness session
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <Card className="border-2 border-primary/20 overflow-hidden shadow-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="p-6 md:p-8 text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-gotu text-primary">
              Begin Your Healing Journey
            </h2>
            <p className="text-sm md:text-base text-foreground max-w-2xl mx-auto leading-relaxed">
              Visit our ashram to meet with our expert yoga practitioners and receive personalized guidance tailored to your wellness goals.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-sm border-2 border-primary rounded-full">
                <span className="font-semibold text-foreground">📍 Visit Us Today</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground font-body pt-2">
              शिवालय मन्दिर वाली जगह, पटवारी पैट्रोल पम्प के पीछे
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Roadmap;