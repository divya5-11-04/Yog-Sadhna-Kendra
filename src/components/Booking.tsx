import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Booking() {
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [phone, setPhone] = useState("");

  const sendWhatsApp = () => {
    const message = `Hello, I'd like to visit Yog Sadhana Kendra.
📅 Date: ${date}
🕒 Time Slot: ${timeSlot}
📱 Phone: ${phone}
🙏 Purpose: ${purpose}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "918837598603";
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full px-4 py-2 rounded border border-border"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full px-4 py-2 rounded border border-border"
      />
      <select
        value={timeSlot}
        onChange={(e) => setTimeSlot(e.target.value)}
        className="w-full px-4 py-2 rounded border border-border"
      >
        <option value="">Select Time Slot</option>
        <option value="7:00 AM - 9:00 AM">07:00 AM – 09:00 AM</option>
        <option value="6:00 PM - 7:00 PM">06:00 PM – 07:00 PM</option>
      </select>
      <textarea
        placeholder="Purpose of Visit"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        className="w-full px-4 py-2 rounded border border-border resize-none"
        rows={3}
      ></textarea>

      <Button
        onClick={sendWhatsApp}
        className="w-full bg-primary text-white"
      >
        Send via WhatsApp
      </Button>
    </div>
  );
}
