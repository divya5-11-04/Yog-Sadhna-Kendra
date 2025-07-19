// ActionCards.tsx
import cities from "../data/in.json";
import { useEffect, useState } from "react";
import { UserPlus, FileText, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Booking from "@/components/Booking";

const ashrams = [
  {
    name: "Yog Sadhna Kendra,Ferozepur",
    lat: 30.9644664,
    lon: 74.6156481,
    address: "Backside of Blind Home,Makhu Gate,Ferozepur,Punjab",
  },
  {
    name: "Yog Sadhan Ashram,Patiala",
    lat: 30.345236,
    lon: 76.430888,
    address: "New Friends Enclave,63-64,Patiala,Punjab",
  },
  {
    name: "Yog Sadhan Ashram,Hoshiarpur",
    lat: 31.5318533,
    lon: 75.8982861,
    address: "3L, Model Town, Hoshiarpur, Punjab 146001",
  },
  {
    name: "Yog Sadhan Ashram,Una",
    lat: 31.5318533,
    lon: 75.8982861,
    address: "Ward No. 1, Yog Sadhan Ashram, Prem Nagar, Una, Himachal Pradesh 174303",
  },
  {
    name: "Yog Sadhan Ashram,Chirgaon",
    lat: 31.2192139,
    lon: 77.8783052,
    address: "V. P.O, Teh, Khashdhar, Chirgaon, Himachal Pradesh 171208",
  },
];


type City = {
  city: string;
  latitude: number;
  longitude: number;
};


const getDistance = (a, b) => {
  const R = 6371; // Earth's radius in km
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lon - a.lon) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;

  const aVal =
    Math.sin(dLat / 2) ** 2 +
    (Math.sin(dLon / 2) ** 2) * Math.cos(lat1) * Math.cos(lat2);

  const c = 2 * Math.atan2(Math.sqrt(aVal), Math.sqrt(1 - aVal));
  return R * c;
};

const ActionCards = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [nearestAshram, setNearestAshram] = useState(null);
  const [showAshramModal, setShowAshramModal] = useState(false);
  const [sortedAshrams, setSortedAshrams] = useState([]);
  const [cityInput, setCityInput] = useState("");
  const [foundCity, setFoundCity] = useState<City | null>(null);
 
   const fetchNearestAshram = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const user = { lat: pos.coords.latitude, lon: pos.coords.longitude };
      const sorted = ashrams
        .map((ashram) => ({
          ...ashram,
          distance: getDistance(user, { lat: ashram.lat, lon: ashram.lon }),
        }))
        .sort((a, b) => a.distance - b.distance);

      setUserLocation(user);
      setNearestAshram(sorted[0]);
      setSortedAshrams(sorted);
      setShowAshramModal(true);
    });
  };

  const handleFindAshrams = () => {
    const Scity = cities.find(c =>
  c.city.toLowerCase().trim() === cityInput.toLowerCase().trim()
);
      if (!Scity) {
    alert("❌ Location not recognized. Try: Closest District");
    return;
  }

  const user = {
    lat: Number(Scity.latitude),
  lon: Number(Scity.longitude)
  };
  


    const sorted = ashrams
      .map((ashram) => ({
        ...ashram,
        distance: getDistance(user, { lat: ashram.lat, lon: ashram.lon }),
      }))
      .sort((a, b) => a.distance - b.distance);
    setSortedAshrams(sorted);
    setShowAshramModal(true);
  };
  

    const useMyLocation = () => {
    fetchNearestAshram();
  };


  
  

  const actions = [
    {
      id: 1,
      icon: UserPlus,
      title: "Join Our Community",
      description:
        "Become part of our spiritual family and start your healing journey with personalized guidance from our experienced gurus.",
      buttonText: "Join WhatsApp Group",
      gradient: "from-primary/20 to-primary-glow/20",
      iconBg: "bg-gradient-to-br from-primary to-primary-glow",
      action: () =>
        window.open("https://chat.whatsapp.com/CWlbLNZB6amKyXBCr3Ly6s", "_blank"),
    },
    {
      id: 2,
      icon: FileText,
      title: "Get Your Wellness Plan",
      description:
        "Receive a personalized yog and lifestyle plan tailored to your specific health conditions and spiritual goals.",
      buttonText: "Create My Plan",
      gradient: "from-secondary/20 to-secondary/30",
      iconBg: "bg-gradient-to-br from-secondary to-secondary/80",
      action: () => setShowPlanModal(true),
    },
    {
      id: 3,
      icon: MapPin,
      title: "Visit Our Ashram",
      description:
        "Experience the divine energy of our sacred space. Book a visit to participate in daily yog sessions, aarti, and satsang.",
      buttonText: "Find Nearest Ashram",
      gradient: "from-accent/20 to-accent/30",
      iconBg: "bg-gradient-to-br from-accent to-accent/80",
      action: () => setShowAshramModal(true),
    },
    {
      id: 4,
      icon: Calendar,
      title: "Schedule Consultation",
      description:
        "Connect with our expert yog therapists for personalized guidance on your health and spiritual development.",
      buttonText: "Book Consultation",
      gradient: "from-primary/15 to-accent/15",
      iconBg: "bg-gradient-to-br from-primary/80 to-accent",
      action: () => setShowBooking(true),
    },
  ];

  
  

  return (
    <section className="py-16 bg-gradient-peaceful">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sacred text-4xl lg:text-5xl text-primary font-bold mb-4">
            Begin Your Journey
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards holistic healing and spiritual transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action) => {
            const IconComponent = action.icon;
            return (
              <Card
                key={action.id}
                className={`p-6 text-center bg-gradient-to-br ${action.gradient} backdrop-blur-sm shadow-gentle hover:shadow-sacred transition-all duration-300 group cursor-pointer border-0`}
              >
                <div className="mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${action.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-lora text-xl font-bold text-foreground">
                    {action.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {action.description}
                  </p>
                  <Button
                    className="w-full bg-gradient-primary hover:shadow-sacred transition-all duration-300 font-body"
                    size="sm"
                    onClick={action.action}
                  >
                    {action.buttonText}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {showBooking && (
        <dialog open className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="relative max-w-lg w-full bg-background p-6 rounded-lg shadow-xl">
            <button
              onClick={() => setShowBooking(false)}
              className="absolute top-2 right-3 text-lg font-bold"
            >
              ✖
            </button>
            <Booking />
          </div>
        </dialog>
      )}

      {showPlanModal && (
        <dialog open className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg shadow-xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowPlanModal(false)}
              className="absolute top-3 right-4 text-lg font-bold"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">🧘‍♂️ Your Healing Roadmap</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Week 1–2: Detox Yog + Breathing</li>
              <li>Week 3–4: Strength + Flexibility Practice</li>
              <li>Week 5–6: Personalized Sessions with Guru Ji</li>
              <li>Diet Guidance & Daily Routine Tips</li>
            </ul>
          </div>
        </dialog>
      )}

      {showAshramModal && (
        <dialog open className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative">
            <button
              onClick={() => setShowAshramModal(false)}
              className="absolute top-2 right-3 text-lg font-bold"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">📍 Nearby Ashrams</h2>
             <input
              type="text"
              placeholder="Enter City (e.g. Delhi, Patiala)"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex gap-2">
              <Button onClick={handleFindAshrams} className="w-full">Search by City</Button>
              <Button onClick={useMyLocation} variant="outline" className="w-full flex items-center gap-1">
                
                Use My Location
              </Button>
            </div>
            <ul className="space-y-4 text-left">
              {sortedAshrams.map((ashram, index) => (
                <li key={index}>
                  <div className="font-semibold">{ashram.name}</div>
                  <div className="text-sm text-gray-600">{ashram.address}</div>
                  <div className="text-sm">
                    Distance: {ashram.distance.toFixed(1)} km
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${ashram.lat},${ashram.lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View on Google Maps
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default ActionCards;
