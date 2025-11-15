import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Home, Briefcase, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MapView from "@/components/shared/MapView";
import BottomNavigation from "@/components/shared/BottomNavigation";

const RiderHome = () => {
  const navigate = useNavigate();
  const [searchFocused, setSearchFocused] = useState(false);

  const savedPlaces = [
    { icon: Home, label: "Home", address: "123 Main St, New York" },
    { icon: Briefcase, label: "Work", address: "456 Office Ave, Manhattan" },
    { icon: Star, label: "Favorite", address: "789 Restaurant Blvd" },
  ];

  return (
    <div className="mobile-container relative">
      {/* Map */}
      <MapView className="h-full" />

      {/* Top Search Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-background/80 to-transparent">
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Where to?"
              onFocus={() => setSearchFocused(true)}
              onClick={() => navigate("/rider/request")}
              className="pl-12 h-14 bg-card shadow-lg border-none text-base font-medium"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Saved Places */}
      {!searchFocused && (
        <div className="absolute bottom-20 left-0 right-0 p-4">
          <div className="bg-card rounded-2xl shadow-xl p-4 space-y-3">
            <h3 className="font-semibold text-sm text-muted-foreground">SAVED PLACES</h3>
            <div className="space-y-2">
              {savedPlaces.map((place, index) => {
                const Icon = place.icon;
                return (
                  <button
                    key={index}
                    onClick={() => navigate("/rider/request")}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-smooth"
                  >
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-semibold">{place.label}</p>
                      <p className="text-sm text-muted-foreground">{place.address}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNavigation type="rider" />
    </div>
  );
};

export default RiderHome;
