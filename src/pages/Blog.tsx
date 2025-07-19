import React from "react";

export default function Blog() {
  const title = "🧘 The Power of Inner Peace Through Yog";
  const image = "https://images.unsplash.com/photo-1590080876362-98d1c593b61c?auto=format&fit=crop&w=800&q=80";
  const content = `
    In today’s chaotic world, finding a moment of stillness is a rare gift. At Yog Sadhana Kendra,
    we believe that true healing begins with silence, breath, and movement. 

    Yog is not just a physical practice — it's a way of life. It teaches us patience, discipline,
    and connection with the divine energy within. Through regular asana practice, mindful breathing
    (pranayama), and satsang, even the most restless mind can find peace.

    We welcome you to experience this transformation at our Ashram.
    
    🌿 Start with simple postures.
    🕉 Practice mantra chanting.
    🥗 Eat sattvic food.
    💛 Serve others selflessly.

    Come. Heal. Awaken.
  `;

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">

    <section className="min-h-screen bg-background text-foreground px-6 py-24 md:px-16 max-w-4xl mx-auto">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-gotu text-primary leading-snug">{title}</h1>
        <img src={image} alt="Blog visual" className="w-full rounded-lg shadow-md object-cover max-h-[400px]" />
        <div className="whitespace-pre-line text-muted-foreground leading-relaxed text-base sm:text-lg font-body">
          {content}
        </div>
      </div>
    </section>
    </div>
  );
}
