import React from "react";
import { Link } from "react-router-dom";

const gurus = [
  {
    id: "rampyaaraji",
    name: "Swami Ram Pyara Ji Maharaj",
    photo: "/gurus/Maharaj ji.jpg",
    teaching: "Path of Bhakti Yog",
    quote: "Through devotion, one becomes the divine.",
    bio: "A revered saint guiding seekers with love and chanting...",
    fullBio: "Swami Anand Giri Ji is a living embodiment of Bhakti Yog. Born in...",
  },
  {
    id: "mulakhji",
    name: "Swami Mulakh ji Maharaj",
    photo: "/gurus/Mulakh Ji maharaj.png",
    teaching: "Divine Feminine & Healing",
    quote: "Silence is the voice of the soul.",
    bio: "Embodies spiritual grace and healing energy through sadhana...",
    fullBio: "Maa Shanti Devi has been a guiding light in the tradition of feminine spiritual wisdom...",
  },
  {
    id: "ramlalji",
    name: "Swami Ram Lal Ji Maharaj",
    photo: "./gurus/Ram Lal Ji maharaj.png",
    teaching: "Vedanta & Self-Realization",
    quote: "Know thyself, and you shall know the universe.",
    bio: "A scholar of the Upanishads helping seekers with clarity...",
    fullBio: "Acharya Omkar Das is a renowned Vedantic teacher bridging ancient truths with modern seekers...",
  },
];

export default function OurGurus() {
  return (
    <section className="relative min-h-screen w-full bg-background text-foreground pt-24 pb-12 overflow-hidden">
      {/* 🎉 Celebration Flower Animation Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[url('ashram/autumn-flower.gif')] bg-cover opacity-30 mix-blend-soft-light animate-float" />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16 px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-gotu text-saffron drop-shadow-md">
            🙏 Our Yog Darbaar
          </h1>
          <img src="/gurus/YogDarbaar.jpg" alt="Yog Darbaar" className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-xl mt-4 rounded-lg shadow-md mx-auto max-w-md" />
          <p className="text-muted-foreground  mt-4 font-body max-w-2xl mx-auto text-base sm:text-lg" style = {{fontWeight:"bold"}}>
            गुरु महिमा गावत सदा मन रखियो अतिमोद<br></br>
            सो भव फिर आवत नहीं बैठ गुरु की गोद
          </p>
        </div>

        {/* Guru Sections */}
        {gurus.map((guru, index) => (
          <Link
            to={`/our-gurus/${guru.id}`}
            key={guru.id}
            className="group block w-full"
          >
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-10 lg:gap-20 mb-24 px-4 sm:px-6 md:px-8 bg-white lg:px-12 hover:bg-muted/20 transition rounded-xl py-4 cursor-pointer`}
            >
              {/* Guru Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={guru.photo}
                  alt={guru.name}
                  className="ww-full max-w-sm justify-center sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-xl shadow-gentle object-cover"
                />
              </div>

              {/* Guru Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary font-body">
                  {guru.name}
                </h2>
                <h3 className="text-md sm:text-lg italic text-secondary-foreground font-body">
                  {guru.teaching}
                </h3>
                <blockquote className="text-lg sm:text-xl text-accent-foreground font-serif italic">
                  “{guru.quote}”
                </blockquote>
                <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
                  {guru.bio}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
