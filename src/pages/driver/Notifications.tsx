import { Button } from "@/components/ui/button";
import { ArrowLeft, DollarSign, Star, TrendingUp, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/shared/BottomNavigation";

const DriverNotifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: "1",
      icon: DollarSign,
      iconBg: "bg-success/10",
      iconColor: "text-success",
      title: "Weekly Payout Processed",
      message: "$252.20 has been transferred to your account",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: "2",
      icon: Star,
      iconBg: "bg-warning/10",
      iconColor: "text-warning",
      title: "New 5-Star Rating!",
      message: "Sarah Johnson left you a 5-star rating",
      time: "Today, 2:35 PM",
      unread: true,
    },
    {
      id: "3",
      icon: TrendingUp,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      title: "Peak Hours Alert",
      message: "High demand in your area. Go online to earn more!",
      time: "Today, 2:00 PM",
      unread: false,
    },
    {
      id: "4",
      icon: Bell,
      iconBg: "bg-muted",
      iconColor: "text-foreground",
      title: "Document Expiry Reminder",
      message: "Your insurance certificate expires in 30 days",
      time: "Yesterday",
      unread: false,
    },
  ];

  return (
    <div className="mobile-container bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/driver/home")}
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-xl font-bold">Notifications</h1>
          </div>
          <Button variant="ghost" size="sm" className="text-primary font-semibold">
            Mark all read
          </Button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="divide-y divide-border">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <button
              key={notification.id}
              className={`w-full p-4 hover:bg-muted transition-smooth text-left ${
                notification.unread ? "bg-primary/5" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-full ${notification.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${notification.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className={`font-semibold ${notification.unread ? "text-foreground" : "text-foreground/80"}`}>
                      {notification.title}
                    </p>
                    {notification.unread && (
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Empty State (hidden when there are notifications) */}
      {notifications.length === 0 && (
        <div className="flex flex-col items-center justify-center h-96 px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <Bell className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No notifications yet</h3>
          <p className="text-muted-foreground">
            We'll notify you about earnings, ratings, and important updates
          </p>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNavigation type="driver" />
    </div>
  );
};

export default DriverNotifications;
