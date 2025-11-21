import { Home, Activity, Wallet, Bell, HelpCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface BottomNavigationProps {
  type: "rider" | "driver";
}

const BottomNavigation = ({ type }: BottomNavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const riderItems = [
    { icon: Home, label: "Home", path: "/rider/home" },
    { icon: Activity, label: "Activity", path: "/rider/activity" },
    { icon: Wallet, label: "Payments", path: "/rider/wallet" },
    { icon: Bell, label: "Alerts", path: "/rider/notifications" },
    { icon: HelpCircle, label: "Support", path: "/rider/support" },
  ];

  const driverItems = [
    { icon: Home, label: "Home", path: "/driver/home" },
    { icon: Activity, label: "Activity", path: "/driver/activity" },
    { icon: Wallet, label: "Earnings", path: "/driver/wallet" },
    { icon: Bell, label: "Alerts", path: "/driver/notifications" },
    { icon: HelpCircle, label: "Profile", path: "/driver/profile" },
  ];

  const items = type === "rider" ? riderItems : driverItems;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg max-w-md mx-auto z-30">
      <div className="flex items-center justify-around h-16 px-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-smooth ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? "fill-primary/20" : ""}`} />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
