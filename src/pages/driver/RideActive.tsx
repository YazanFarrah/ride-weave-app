import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Navigation, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MapView from "@/components/shared/MapView";
import DraggableBottomSheet from "@/components/shared/DraggableBottomSheet";

type RidePhase = "on-way" | "arrived" | "started" | "completed";

const DriverRideActive = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<RidePhase>("on-way");

  const phaseData = {
    "on-way": {
      title: "On the way to pickup",
      subtitle: "Navigate to passenger location",
      action: "I've Arrived",
      bgColor: "bg-primary",
    },
    "arrived": {
      title: "Arrived at pickup",
      subtitle: "Waiting for passenger",
      action: "Start Trip",
      bgColor: "bg-warning",
    },
    "started": {
      title: "Trip in progress",
      subtitle: "Heading to destination",
      action: "Complete Trip",
      bgColor: "bg-success",
    },
    "completed": {
      title: "Trip completed",
      subtitle: "Payment processed",
      action: "Back to Home",
      bgColor: "bg-success",
    },
  };

  const handlePhaseAction = () => {
    if (phase === "on-way") setPhase("arrived");
    else if (phase === "arrived") setPhase("started");
    else if (phase === "started") setPhase("completed");
    else navigate("/driver/home");
  };

  return (
    <div className="mobile-container relative">
      {/* Map */}
      <MapView 
        pickup={{ lat: 0, lng: 0, address: "Pickup Location" }}
        destination={{ lat: 1, lng: 1, address: "Dropoff Location" }}
        showRoute={phase === "started"}
        className="h-full"
      />

      {/* Draggable Bottom Sheet */}
      <DraggableBottomSheet
        isOpen={true}
        snapPoints={[40, 70, 90]}
        defaultSnap={1}
      >
        <div className="px-6 pb-6 space-y-6">
          {/* Status Header */}
          <div className="text-center py-4">
            <div className={`w-12 h-12 rounded-full ${phaseData[phase].bgColor} mx-auto mb-3 flex items-center justify-center`}>
              <Navigation className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold mb-1">{phaseData[phase].title}</h2>
            <p className="text-muted-foreground">{phaseData[phase].subtitle}</p>
          </div>

          {/* Passenger Info */}
          <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-white">
              SJ
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">⭐ 4.8 • 150 trips</p>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="rounded-full">
                <Phone className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <MessageSquare className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Trip Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-muted rounded-xl p-3 text-center">
              <p className="text-2xl font-bold">2.5</p>
              <p className="text-xs text-muted-foreground">km away</p>
            </div>
            <div className="bg-muted rounded-xl p-3 text-center">
              <p className="text-2xl font-bold">8</p>
              <p className="text-xs text-muted-foreground">min ETA</p>
            </div>
            <div className="bg-muted rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-success">$18.50</p>
              <p className="text-xs text-muted-foreground">Fare</p>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 rounded-full bg-primary mt-1" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Pickup Location</p>
                <p className="font-semibold">123 Main Street, Manhattan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-destructive mt-1" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Dropoff Location</p>
                <p className="font-semibold">Times Square, New York</p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          {phase !== "completed" ? (
            <Button
              size="lg"
              className="w-full h-14 text-lg font-semibold"
              onClick={handlePhaseAction}
            >
              {phaseData[phase].action}
            </Button>
          ) : (
            <div className="space-y-3">
              <div className="bg-success/10 border border-success/20 rounded-xl p-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-2" />
                <p className="font-bold text-lg mb-1">Trip Completed!</p>
                <p className="text-sm text-muted-foreground">You earned $18.50</p>
              </div>
              <Button
                size="lg"
                className="w-full h-14 text-lg font-semibold"
                onClick={handlePhaseAction}
              >
                {phaseData[phase].action}
              </Button>
            </div>
          )}
        </div>
      </DraggableBottomSheet>
    </div>
  );
};

export default DriverRideActive;
