import React, { useState }  from "react";

export default function Contact() {
  const [purpose, setPurpose] = useState("");
  const [name, setName] = useState("");
  const sendWhatsApp = () => {
    const message = `Hello, I'm ${name} ,I'd like to know more about Yog Sadhana Kendra.
🙏 Message: ${purpose}` ;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "918837598603";
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">

    <section className="min-h-screen bg-background text-foreground px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-gotu text-primary mb-6">📩 Contact Yog Sadhana Kendra</h1>
        <p className="text-muted-foreground mb-8">We'd love to hear from you. Reach out for any questions or guidance.</p>
        <form className="space-y-4 text-left">
          <input type="text" placeholder="Your Name" 
          value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded" />
          <textarea placeholder="Your Message" 
          value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        className="w-full p-2 border rounded h-32"></textarea>
          <button onClick={sendWhatsApp} type="submit" className="bg-gradient-primary text-white px-6 py-2 rounded">Send via Whatsapp</button>
        </form>
      </div>
    </section>
    </div>
  );
}
