import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/shared/BottomNavigation";

const RiderActivity = () => {
  const navigate = useNavigate();

  const rides = [
    {
      id: "1",
      date: "Today, 2:30 PM",
      from: "Home",
      to: "Times Square",
      fare: "$12.50",
      status: "completed",
    },
    {
      id: "2",
      date: "Yesterday, 5:45 PM",
      from: "Work",
      to: "Central Park",
      fare: "$18.00",
      status: "completed",
    },
    {
      id: "3",
      date: "Dec 10, 10:00 AM",
      from: "Airport",
      to: "Hotel Manhattan",
      fare: "$45.00",
      status: "completed",
    },
    {
      id: "4",
      date: "Dec 9, 8:15 PM",
      from: "Restaurant",
      to: "Home",
      fare: "$15.50",
      status: "completed",
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
            onClick={() => navigate("/rider/home")}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-bold">Your Trips</h1>
        </div>
      </div>

      {/* Rides List */}
      <div className="p-4 space-y-3">
        {rides.map((ride) => (
          <button
            key={ride.id}
            className="w-full bg-card border border-border rounded-xl p-4 hover:border-primary transition-smooth text-left"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {ride.date}
              </div>
              <div className="px-2 py-1 bg-success/10 text-success text-xs font-semibold rounded-full">
                Completed
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="font-semibold">{ride.from}</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-destructive" />
                <p className="font-semibold">{ride.to}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm">Payment</span>
              </div>
              <p className="text-lg font-bold">{ride.fare}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation type="rider" />
    </div>
  );
};

export default RiderActivity;
