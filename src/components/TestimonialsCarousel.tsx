import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    condition: "Chronic Back Pain",
    rating: 5,
    testimonial:
      "After years of suffering from chronic back pain, the personalized yog plan from Yog Sadhana Kendra completely transformed my life.",
    video: "public/testimonials/1.mp4",
    duration: "3 months of practice",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Mumbai",
    condition: "Stress & Anxiety",
    rating: 5,
    testimonial:
      "The meditation sessions and pranayama classes helped me find inner peace during the most stressful period of my career.",
    video: "public/testimonials/2.mp4",
    duration: "6 months of practice",
  },
  // add more testimonials...
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    if (videoEnded) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setVideoEnded(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [videoEnded]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setVideoEnded(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setVideoEnded(false);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-peaceful">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-sacred text-4xl text-primary font-bold mb-4">
            Healing Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real people, real transformations.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="p-8 bg-card/90 backdrop-blur-sm shadow-sacred">
            <Quote className="absolute top-4 right-4 w-16 h-16 text-primary/10" />

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Media Section */}
              <div className="text-center lg:text-left">
                {current.video ? (
                  <video
                    src={current.video}
                    
                    controls
    
                    onEnded={() => setVideoEnded(true)}
                    className={`mx-auto transition-all duration-700 object-cover ${
                      videoEnded
                        ? "w-24 h-24 rounded-full ring-4 ring-primary/20"
                        : "w-full h-64 rounded-lg"
                    }`}
                  />
                ) : (
                  <img
                    alt={current.name}
                    className="w-24 h-24 mx-auto rounded-full ring-4 ring-primary/20"
                  />
                )}

                <h3 className="text-xl font-bold text-foreground mt-4">{current.name}</h3>
                <p className="text-muted-foreground">{current.location}</p>
                <div className="flex justify-center lg:justify-start my-2">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <span className="inline-block bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm">
                  {current.condition}
                </span>
              </div>

              {/* Testimonial Text */}
              <div className="lg:col-span-2">
                <blockquote className="text-lg text-foreground leading-relaxed mb-4 relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/30" />
                  <span className="ml-4">"{current.testimonial}"</span>
                </blockquote>
                <p className="text-sm text-primary font-medium">— {current.duration}</p>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <Button variant="outline" size="sm" onClick={prev}>
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setVideoEnded(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary shadow-lg scale-110"
                      : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={next}>
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
