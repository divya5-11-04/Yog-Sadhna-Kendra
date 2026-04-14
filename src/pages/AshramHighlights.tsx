import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAssetPath } from "@/lib/assetHelper";

declare global {
  interface Window {
    FB: any;
  }
}

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  alt: string;
}

const photoMoments: MediaItem[] = [
  { id: 1, type: "image", src: getAssetPath("/ashram/1.jpg"), alt: "Ashram Moment 1" },
  { id: 2, type: "image", src: getAssetPath("/ashram/2.jpg"), alt: "Ashram Moment 2" },
  { id: 3, type: "image", src: getAssetPath("/ashram/3.jpg"), alt: "Ashram Moment 3" },
  { id: 4, type: "image", src: getAssetPath("/ashram/4.jpg"), alt: "Ashram Moment 4" },
  { id: 5, type: "image", src: getAssetPath("/ashram/5.jpg"), alt: "Ashram Moment 5" },
  { id: 6, type: "image", src: getAssetPath("/ashram/6.jpg"), alt: "Ashram Moment 6" },
];

const videoMoments: MediaItem[] = [
  { id: 1, type: "video", src: getAssetPath("/ashram/1.mp4"), alt: "Ashram Video 1" },
  { id: 2, type: "video", src: getAssetPath("/ashram/2.mp4"), alt: "Ashram Video 2" },
  { id: 3, type: "video", src: getAssetPath("/ashram/3.mp4"), alt: "Ashram Video 3" },
  { id: 4, type: "video", src: getAssetPath("/ashram/4.mp4"), alt: "Ashram Video 4" },
  { id: 5, type: "video", src: getAssetPath("/ashram/5.mp4"), alt: "Ashram Video 5" },
  { id: 6, type: "video", src: getAssetPath("/ashram/6.mp4"), alt: "Ashram Video 6" },
  { id: 7, type: "video", src: getAssetPath("/ashram/7.mp4"), alt: "Ashram Video 7" },
  { id: 8, type: "video", src: getAssetPath("/ashram/8.mp4"), alt: "Ashram Video 8" },
];

export default function AshramHighlights() {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [videoErrors, setVideoErrors] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fbInterval = setInterval(() => {
      if (window.FB) {
        clearInterval(fbInterval);
        setTimeout(() => {
          window.FB.XFBML.parse();
        }, 300);
      }
    }, 500);

    return () => clearInterval(fbInterval);
  }, []);

  const handleImageError = (id: number) => {
    setImageErrors((prev) => new Set(prev).add(id));
  };

  const handleVideoError = (id: number) => {
    setVideoErrors((prev) => new Set(prev).add(id));
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-background via-background/95 to-background text-foreground py-12 md:py-16 px-0 sm:px-4 md:px-6 lg:px-8 overflow-x-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4 px-4 sm:px-0">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="default" className="bg-primary text-primary-foreground text-sm md:text-base">
              ✨ Divine Moments
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-gotu text-primary drop-shadow-lg leading-tight">
            🏞️ Ashram Highlights
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Explore our sacred sanctuary through moments captured from our divine community. Follow our journey of spiritual awakening and transformation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Facebook Integration - Sidebar on Desktop, Top on Mobile */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="border-2 border-primary/20 overflow-hidden sticky top-24 bg-white/50 backdrop-blur-sm">
              <div className="p-4 md:p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20">
                <h2 className="text-lg md:text-xl font-semibold text-primary flex items-center gap-2">
                  📱 Connect With Us
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  Follow our latest updates
                </p>
              </div>
              <div className="p-3 md:p-4 overflow-x-hidden">
                <div
                  className="fb-page w-full"
                  data-href="https://www.facebook.com/yogsadnakender.ferozpur"
                  data-tabs="timeline"
                  data-height="500"
                  data-small-header="true"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                ></div>
              </div>
            </Card>
          </div>

          {/* Gallery Section */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Tabs defaultValue="photos" className="w-full">
              {/* Tabs Navigation */}
              <div className="flex justify-center mb-6 md:mb-8 sticky top-20 z-10 bg-background/90 backdrop-blur-md p-2 rounded-lg">
                <TabsList className="grid w-full max-w-xs grid-cols-2 bg-secondary/10 border border-secondary/20">
                  <TabsTrigger
                    value="photos"
                    className="text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    📸 Photos
                  </TabsTrigger>
                  <TabsTrigger
                    value="videos"
                    className="text-sm md:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    🎥 Videos
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Photos Tab */}
              <TabsContent value="photos" className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 px-4 sm:px-0">
                    <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground font-gotu">
                      Photographic Moments
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground px-4 sm:px-0 leading-relaxed">
                    Witness the beauty and serenity of our ashram through these carefully curated moments
                  </p>
                </div>

                {/* Responsive Photo Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-4 sm:px-0">
                  {photoMoments.map((photo) => (
                    <div
                      key={photo.id}
                      className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-primary/10"
                    >
                      <div className="aspect-square overflow-hidden bg-muted">
                        {!imageErrors.has(photo.id) ? (
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            loading="lazy"
                            onError={() => handleImageError(photo.id)}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                            <span className="text-center text-muted-foreground">
                              <div className="text-3xl mb-2">🖼️</div>
                              <div className="text-xs">Image unavailable</div>
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-sm font-semibold">{photo.alt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Videos Tab */}
              <TabsContent value="videos" className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 px-4 sm:px-0">
                    <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground font-gotu">
                      Video Glimpses
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground px-4 sm:px-0 leading-relaxed">
                    Experience the vibrant energy and spiritual essence of our community in motion
                  </p>
                </div>

                {/* Responsive Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 px-4 sm:px-0">
                  {videoMoments.map((video) => (
                    <div
                      key={video.id}
                      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-primary/10 bg-muted"
                    >
                      <div className="aspect-video w-full overflow-hidden bg-black/10">
                        {!videoErrors.has(video.id) ? (
                          <video
                            controls
                            className="w-full h-full object-cover bg-black"
                            onError={() => handleVideoError(video.id)}
                          >
                            <source src={video.src} type="video/mp4" />
                            <div className="w-full h-full flex items-center justify-center">
                              Your browser does not support the video tag.
                            </div>
                          </video>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                            <span className="text-center text-muted-foreground">
                              <div className="text-4xl mb-2">🎬</div>
                              <div className="text-xs">Video unavailable</div>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Bottom CTA Section */}
            <div className="mt-12 md:mt-16 px-4 sm:px-0">
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20 overflow-hidden">
                <div className="p-6 md:p-8 text-center space-y-4">
                  <h4 className="text-xl md:text-2xl font-semibold text-primary font-gotu">
                    Want to explore more?
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                    Follow us on Facebook for daily updates, spiritual guidance, and exclusive community moments
                  </p>
                  <a
                    href="https://www.facebook.com/yogsadnakender.ferozpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 md:px-8 py-2 md:py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    Visit Facebook Page →
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
