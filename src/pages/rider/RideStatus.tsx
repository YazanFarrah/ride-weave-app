import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, MessageSquare, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MapView from "@/components/shared/MapView";
import DraggableBottomSheet from "@/components/shared/DraggableBottomSheet";

type RideStatus = "requesting" | "searching" | "connecting" | "accepted" | "arriving" | "arrived" | "in-progress" | "completed";

const RiderRideStatus = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<RideStatus>("requesting");

  const statusMessages = {
    requesting: "Requesting a driver...",
    searching: "Searching for nearby drivers...",
    connecting: "Connecting with driver...",
    accepted: "Driver accepted your request",
    arriving: "Driver is on the way",
    arrived: "Driver has arrived",
    "in-progress": "Ride in progress",
    completed: "Ride completed",
  };

  useEffect(() => {
    // Simulate status progression
    const statuses: RideStatus[] = ["requesting", "searching", "connecting", "accepted", "arriving"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < statuses.length) {
        setStatus(statuses[currentIndex]);
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const driverInfo = status !== "requesting" && status !== "searching" && status !== "connecting" && {
    name: "John Driver",
    rating: 4.9,
    car: "Toyota Camry",
    plate: "ABC-1234",
    color: "Silver",
    eta: "3 min",
  };

  return (
    <div className="mobile-container relative">
      {/* Map */}
      <MapView 
        pickup={{ lat: 0, lng: 0, address: "Your Location" }}
        destination={{ lat: 1, lng: 1, address: "Destination" }}
        showRoute={status === "in-progress"}
        className="h-full"
      />

      {/* Header */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <Button
          variant="secondary"
          size="icon"
          className="shadow-lg"
          onClick={() => navigate("/rider/home")}
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
      </div>

      {/* Draggable Bottom Sheet */}
      <DraggableBottomSheet
        isOpen={true}
        snapPoints={[35, 60, 85]}
        defaultSnap={driverInfo ? 1 : 0}
      >
        <div className="px-6 pb-6 space-y-6">
          {/* Status */}
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary animate-pulse" />
            </div>
            <h2 className="text-xl font-bold mb-1">{statusMessages[status]}</h2>
            {driverInfo && (
              <p className="text-muted-foreground">Arrives in {driverInfo.eta}</p>
            )}
          </div>

          {/* Driver Info */}
          {driverInfo && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-white">
                  JD
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-lg">{driverInfo.name}</p>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span className="font-semibold">{driverInfo.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {driverInfo.color} {driverInfo.car}
                  </p>
                  <p className="text-sm font-semibold text-foreground">{driverInfo.plate}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Driver
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Message
                </Button>
              </div>
            </div>
          )}

          {/* Trip Details */}
          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-primary mt-1" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Pickup</p>
                <p className="font-semibold">Current Location</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-destructive mt-1" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Dropoff</p>
                <p className="font-semibold">Times Square, Manhattan</p>
              </div>
            </div>
          </div>

          {/* Cancel Button */}
          {status !== "in-progress" && status !== "completed" && (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate("/rider/home")}
            >
              Cancel Ride
            </Button>
          )}
        </div>
      </DraggableBottomSheet>
    </div>
  );
};

export default RiderRideStatus;
