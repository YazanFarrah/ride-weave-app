import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { DollarSign, TrendingUp, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MapView from "@/components/shared/MapView";
import BottomNavigation from "@/components/shared/BottomNavigation";

const DriverHome = () => {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(false);
  const [showRideRequest, setShowRideRequest] = useState(false);

  const handleGoOnline = () => {
    setIsOnline(true);
    // Simulate incoming ride request after 2 seconds
    setTimeout(() => setShowRideRequest(true), 2000);
  };

  const handleAcceptRide = () => {
    setShowRideRequest(false);
    navigate("/driver/ride-active");
  };

  return (
    <div className="mobile-container relative">
      {/* Map */}
      <MapView className="h-full" />

      {/* Top Status Bar */}
      <div className="absolute top-4 left-4 right-4">
        <div className="bg-card rounded-2xl shadow-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground">You're</p>
              <p className={`text-xl font-bold ${isOnline ? "text-success" : "text-muted-foreground"}`}>
                {isOnline ? "Online" : "Offline"}
              </p>
            </div>
            <Switch
              checked={isOnline}
              onCheckedChange={isOnline ? setIsOnline : handleGoOnline}
              className="scale-125"
            />
          </div>

          {isOnline && (
            <p className="text-sm text-muted-foreground">
              Looking for ride requests nearby...
            </p>
          )}
        </div>
      </div>

      {/* Earnings Card */}
      {isOnline && (
        <div className="absolute top-32 left-4 right-4">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl shadow-xl p-4 text-white">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <DollarSign className="w-4 h-4" />
                  <p className="text-xs opacity-90">Today</p>
                </div>
                <p className="text-xl font-bold">$87.50</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <p className="text-xs opacity-90">Trips</p>
                </div>
                <p className="text-xl font-bold">12</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <Clock className="w-4 h-4" />
                  <p className="text-xs opacity-90">Hours</p>
                </div>
                <p className="text-xl font-bold">4.5</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Incoming Ride Request Modal */}
      {showRideRequest && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-in slide-in-from-bottom">
            <div className="text-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h2 className="text-2xl font-bold mb-1">New Ride Request</h2>
              <p className="text-muted-foreground">Sarah Johnson</p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <span className="text-sm text-muted-foreground">Pickup</span>
                <span className="font-semibold">2.5 km away</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <span className="text-sm text-muted-foreground">Destination</span>
                <span className="font-semibold">Times Square</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <span className="text-sm text-muted-foreground">Estimated Fare</span>
                <span className="font-bold text-lg text-success">$18.50</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowRideRequest(false)}
                className="h-14"
              >
                Decline
              </Button>
              <Button
                size="lg"
                onClick={handleAcceptRide}
                className="h-14 bg-success hover:bg-success/90"
              >
                Accept
              </Button>
            </div>

            {/* Auto decline timer */}
            <div className="mt-4 flex justify-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Auto-decline in 15s</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Offline Message */}
      {!isOnline && (
        <div className="absolute bottom-24 left-4 right-4">
          <div className="bg-card rounded-2xl shadow-xl p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center">
              <span className="text-3xl">🚗</span>
            </div>
            <h3 className="text-xl font-bold mb-2">You're offline</h3>
            <p className="text-muted-foreground mb-4">
              Go online to start accepting ride requests
            </p>
            <Button
              size="lg"
              className="w-full h-14 text-lg font-semibold"
              onClick={handleGoOnline}
            >
              Go Online
            </Button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNavigation type="driver" />
    </div>
  );
};

export default DriverHome;
