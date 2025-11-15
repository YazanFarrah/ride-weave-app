import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, MapPin, Navigation, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MapView from "@/components/shared/MapView";

const RiderRequest = () => {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState("Current Location");
  const [destination, setDestination] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    { name: "Times Square", address: "Manhattan, NY 10036", time: "5 min" },
    { name: "Central Park", address: "New York, NY 10024", time: "12 min" },
    { name: "Empire State Building", address: "20 W 34th St, NY 10001", time: "8 min" },
  ];

  const vehicleTypes = [
    { name: "Economy", time: "3 min", price: "$12.50", capacity: "4 seats" },
    { name: "Premium", time: "5 min", price: "$18.00", capacity: "4 seats" },
    { name: "XL", time: "4 min", price: "$22.00", capacity: "6 seats" },
  ];

  return (
    <div className="mobile-container relative">
      {/* Map */}
      <MapView 
        pickup={{ lat: 0, lng: 0 }}
        className="h-1/2"
      />

      {/* Content */}
      <div className="h-1/2 bg-background">
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-lg font-semibold">Plan your ride</h1>
        </div>

        {/* Location Inputs */}
        <div className="p-4 space-y-3 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <Input
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="flex-1 h-12"
            />
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-destructive" />
            <Input
              placeholder="Where to?"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                setShowSuggestions(true);
              }}
              className="flex-1 h-12"
            />
          </div>
        </div>

        {/* Suggestions or Vehicle Selection */}
        <div className="overflow-y-auto" style={{ height: "calc(50vh - 13rem)" }}>
          {showSuggestions && destination ? (
            <div className="p-4 space-y-2">
              <p className="text-sm font-semibold text-muted-foreground mb-3">SUGGESTED DESTINATIONS</p>
              {suggestions.map((place, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDestination(place.name);
                    setShowSuggestions(false);
                  }}
                  className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-smooth"
                >
                  <Navigation className="w-5 h-5 text-muted-foreground mt-1" />
                  <div className="flex-1 text-left">
                    <p className="font-semibold">{place.name}</p>
                    <p className="text-sm text-muted-foreground">{place.address}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {place.time}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 space-y-3">
              <p className="text-sm font-semibold text-muted-foreground mb-3">CHOOSE A RIDE</p>
              {vehicleTypes.map((vehicle, index) => (
                <button
                  key={index}
                  onClick={() => navigate("/rider/ride-status")}
                  className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-border hover:border-primary transition-smooth bg-card"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                      <span className="text-2xl">🚗</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold">{vehicle.name}</p>
                      <p className="text-sm text-muted-foreground">{vehicle.time} away • {vehicle.capacity}</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold">{vehicle.price}</p>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RiderRequest;
