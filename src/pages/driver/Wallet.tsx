import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Calendar, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/shared/BottomNavigation";

const DriverWallet = () => {
  const navigate = useNavigate();

  const weeklyData = [
    { day: "Mon", earnings: "$45.50", trips: 6 },
    { day: "Tue", earnings: "$67.20", trips: 9 },
    { day: "Wed", earnings: "$52.00", trips: 7 },
    { day: "Thu", earnings: "$87.50", trips: 12 },
    { day: "Fri", earnings: "$0.00", trips: 0 },
    { day: "Sat", earnings: "$0.00", trips: 0 },
    { day: "Sun", earnings: "$0.00", trips: 0 },
  ];

  const transactions = [
    { id: "1", desc: "Trip to Times Square", amount: "$18.50", date: "Today, 2:30 PM" },
    { id: "2", desc: "Trip to Central Park", amount: "$15.00", date: "Today, 1:15 PM" },
    { id: "3", desc: "Trip to Airport", amount: "$45.00", date: "Today, 10:00 AM" },
    { id: "4", desc: "Bonus - Peak Hours", amount: "$9.00", date: "Today, 9:00 AM" },
  ];

  return (
    <div className="mobile-container bg-background pb-20 overflow-y-auto">
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
          <h1 className="text-xl font-bold">Earnings</h1>
        </div>
      </div>

      {/* Today's Earnings Card */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-success via-success-light to-success-light rounded-2xl p-6 text-white shadow-xl">
          <p className="text-white/80 mb-2">Today's Earnings</p>
          <h2 className="text-5xl font-bold mb-4">$87.50</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-white/70 text-sm mb-1">Trips</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-white/70 text-sm mb-1">Hours</p>
              <p className="text-2xl font-bold">4.5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Summary */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-muted-foreground">THIS WEEK</h3>
          <p className="text-lg font-bold text-success">$252.20</p>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="grid grid-cols-7 gap-2">
            {weeklyData.map((day, index) => {
              const isToday = day.day === "Thu";
              const hasEarnings = parseFloat(day.earnings.replace("$", "")) > 0;
              
              return (
                <div
                  key={index}
                  className={`text-center ${isToday ? "bg-primary/10 rounded-lg p-2" : "p-2"}`}
                >
                  <p className={`text-xs font-semibold mb-1 ${
                    isToday ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {day.day}
                  </p>
                  <div className={`h-16 ${
                    hasEarnings ? "bg-success" : "bg-muted"
                  } rounded mb-1`} style={{
                    height: hasEarnings ? `${(parseFloat(day.earnings.replace("$", "")) / 100) * 64}px` : "8px"
                  }} />
                  <p className="text-xs font-bold">{day.trips}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Payout Info */}
      <div className="px-4 mb-6">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
          <Calendar className="w-5 h-5 text-primary mt-1" />
          <div className="flex-1">
            <p className="font-semibold mb-1">Next Payout</p>
            <p className="text-sm text-muted-foreground">
              Monday, December 18 • $252.20 will be transferred to your account
            </p>
          </div>
        </div>
      </div>

      {/* Recent Earnings */}
      <div className="px-4">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">TODAY'S ACTIVITY</h3>
        <div className="space-y-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-card border border-border rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold">{transaction.desc}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <p className="text-lg font-bold text-success">{transaction.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation type="driver" />
    </div>
  );
};

export default DriverWallet;
