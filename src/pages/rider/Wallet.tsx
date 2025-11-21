import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, ArrowUpRight, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/shared/BottomNavigation";

const RiderWallet = () => {
  const navigate = useNavigate();

  const transactions = [
    { id: "1", type: "ride", desc: "Ride to Times Square", amount: "-$12.50", date: "Today, 2:30 PM" },
    { id: "2", type: "added", desc: "Added funds", amount: "+$50.00", date: "Yesterday" },
    { id: "3", type: "ride", desc: "Ride to Central Park", amount: "-$18.00", date: "Dec 10" },
    { id: "4", type: "ride", desc: "Ride from Airport", amount: "-$45.00", date: "Dec 10" },
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
          <h1 className="text-xl font-bold">Payments</h1>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="px-4 pt-4 mb-6">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">PAYMENT METHODS</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary transition-smooth">
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-foreground" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold">•••• 4242</p>
              <p className="text-sm text-muted-foreground">Visa</p>
            </div>
            <div className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              Default
            </div>
          </button>

          <Button
            variant="outline"
            size="lg"
            className="w-full justify-start h-auto p-4"
          >
            <Plus className="w-5 h-5 mr-3" />
            Add Payment Method
          </Button>
        </div>
      </div>

      {/* Transaction History */}
      <div className="px-4">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">TRANSACTION HISTORY</h3>
        <div className="space-y-2">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-card border border-border rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === "added" ? "bg-success/10" : "bg-muted"
                }`}>
                  {transaction.type === "added" ? (
                    <Plus className="w-5 h-5 text-success" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-foreground" />
                  )}
                </div>
                <div>
                  <p className="font-semibold">{transaction.desc}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <p className={`text-lg font-bold ${
                transaction.amount.startsWith("+") ? "text-success" : "text-foreground"
              }`}>
                {transaction.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation type="rider" />
    </div>
  );
};

export default RiderWallet;
