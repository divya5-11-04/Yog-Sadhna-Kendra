import React, { useEffect } from "react";

declare global {
  interface Window {
    FB: any;
  }
}

export default function AshramHighlights() {
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

  return (
    <section className="min-h-screen w-full bg-background text-foreground pt-24 pb-12 px-4 sm:px-6 md:px-8 lg:px-12 overflow-x-hidden">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-gotu text-primary drop-shadow-md">
          🏞️ Ashram Highlights
        </h1>
        <p className="text-muted-foreground mt-2 text-base md:text-lg font-body">
          Follow our divine journey through visuals & updates
        </p>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Facebook Embed */}
        <div className="w-full sm:px-20 md:px-0 lg:px-0 overflow-x-hidden">
          <div
            className="fb-page w-full"
            data-href="https://www.facebook.com/yogsadnakender.ferozpur"
            data-tabs="timeline"
            data-height="600"
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          ></div>
        </div>

        {/* Photo & Video Gallery */}
        <div className="space-y-8">
          {/* Photos */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-4 font-body">📸 Photo Moments</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={i}
                  src={`/public/ashram/${i}.jpg`}
                  alt={`Photo ${i}`}
                  className="rounded-xl shadow-gentle object-cover w-full h-40 sm:h-48 lg:h-52"
                />
              ))}
            </div>
          </div>

          {/* Videos */}
          <div>
            <h2 className="text-xl font-semibold text-primary mb-4 font-body">🎥 Glimpses in Motion</h2>
            <div className="space-y-4">
              {[1, 2 , 3,4,5,6,7,8].map((i) => (
                <video
                  key={i}
                  controls
                  className="w-full rounded-xl shadow-gentle"
                >
                  <source src={`/public/ashram/${i}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
