import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, DollarSign, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/shared/BottomNavigation";

const DriverActivity = () => {
  const navigate = useNavigate();

  const rides = [
    {
      id: "1",
      date: "Today, 2:30 PM",
      passenger: "Sarah Johnson",
      from: "123 Main St",
      to: "Times Square",
      fare: "$18.50",
      duration: "25 min",
      distance: "8.5 km",
    },
    {
      id: "2",
      date: "Today, 1:15 PM",
      passenger: "Mike Chen",
      from: "Central Park",
      to: "Empire State",
      fare: "$15.00",
      duration: "18 min",
      distance: "5.2 km",
    },
    {
      id: "3",
      date: "Today, 10:00 AM",
      passenger: "Emma Davis",
      from: "JFK Airport",
      to: "Hotel Manhattan",
      fare: "$45.00",
      duration: "45 min",
      distance: "25 km",
    },
  ];

  return (
    <div className="mobile-container bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="p-4 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/driver/home")}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-bold">Trip History</h1>
        </div>
      </div>

      {/* Summary Card */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-6 text-white shadow-xl">
          <p className="text-white/80 mb-2">Today's Summary</p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-white/80">Trips</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4.5</p>
              <p className="text-sm text-white/80">Hours</p>
            </div>
            <div>
              <p className="text-3xl font-bold">$87</p>
              <p className="text-sm text-white/80">Earned</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rides List */}
      <div className="px-4 space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">RECENT TRIPS</h3>
        {rides.map((ride) => (
          <button
            key={ride.id}
            className="w-full bg-card border border-border rounded-xl p-4 hover:border-primary transition-smooth text-left"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="font-bold">{ride.passenger}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <Calendar className="w-4 h-4" />
                  {ride.date}
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-success">{ride.fare}</p>
                <div className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded-full mt-1">
                  Completed
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Pickup</p>
                  <p className="font-semibold">{ride.from}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-destructive mt-1" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Dropoff</p>
                  <p className="font-semibold">{ride.to}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-3 border-t border-border text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {ride.duration}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {ride.distance}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation type="driver" />
    </div>
  );
};

export default DriverActivity;
