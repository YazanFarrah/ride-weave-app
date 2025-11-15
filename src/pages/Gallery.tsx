import { Link } from "react-router-dom";
import { ArrowLeft, User, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const riderScreens = [
    { name: "Login", path: "/rider/auth/login", desc: "Phone & social login" },
    { name: "OTP Verify", path: "/rider/auth/verify", desc: "6-digit verification" },
    { name: "Complete Profile", path: "/rider/auth/profile", desc: "Name, email, photo" },
    { name: "Home Map", path: "/rider/home", desc: "Map with saved places" },
    { name: "Request Ride", path: "/rider/request", desc: "Pickup & destination" },
    { name: "Ride Status", path: "/rider/ride-status", desc: "Live tracking with driver" },
    { name: "Activity", path: "/rider/activity", desc: "Past trips history" },
    { name: "Wallet", path: "/rider/wallet", desc: "Balance & payments" },
    { name: "Notifications", path: "/rider/notifications", desc: "Alerts & updates" },
    { name: "Support", path: "/rider/support", desc: "Help & contact" },
  ];

  const driverScreens = [
    { name: "Login", path: "/driver/auth/login", desc: "Phone & social login" },
    { name: "Documents", path: "/driver/auth/documents", desc: "Upload verification docs" },
    { name: "Vehicle Setup", path: "/driver/auth/vehicle", desc: "Car details & plate" },
    { name: "Home Map", path: "/driver/home", desc: "Online/offline toggle" },
    { name: "Active Ride", path: "/driver/ride-active", desc: "Navigation & trip phases" },
    { name: "Earnings", path: "/driver/wallet", desc: "Daily & weekly stats" },
    { name: "Activity", path: "/driver/activity", desc: "Trip history" },
    { name: "Notifications", path: "/driver/notifications", desc: "Alerts & updates" },
    { name: "Profile", path: "/driver/profile", desc: "Account & vehicle info" },
  ];

  return (
    <div className="mobile-container bg-background overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="p-4 flex items-center gap-3">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-6 h-6" />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold">Screen Gallery</h1>
            <p className="text-sm text-muted-foreground">Browse all screens</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-8 pb-8">
        {/* Rider Screens */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Rider App</h2>
              <p className="text-sm text-muted-foreground">{riderScreens.length} screens</p>
            </div>
          </div>
          <div className="grid gap-3">
            {riderScreens.map((screen, index) => (
              <Link
                key={index}
                to={screen.path}
                className="block bg-card border-2 border-border rounded-xl p-4 hover:border-primary transition-smooth"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold mb-1">{screen.name}</h3>
                    <p className="text-sm text-muted-foreground">{screen.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {index + 1}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Driver Screens */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
              <Car className="w-5 h-5 text-success" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Driver App</h2>
              <p className="text-sm text-muted-foreground">{driverScreens.length} screens</p>
            </div>
          </div>
          <div className="grid gap-3">
            {driverScreens.map((screen, index) => (
              <Link
                key={index}
                to={screen.path}
                className="block bg-card border-2 border-border rounded-xl p-4 hover:border-primary transition-smooth"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold mb-1">{screen.name}</h3>
                    <p className="text-sm text-muted-foreground">{screen.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {index + 1}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
