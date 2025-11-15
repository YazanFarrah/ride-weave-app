import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Phone, Mail, HelpCircle, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/shared/BottomNavigation";
import { toast } from "sonner";

const RiderSupport = () => {
  const navigate = useNavigate();

  const contactOptions = [
    {
      icon: MessageSquare,
      title: "Chat with Support",
      description: "Get help from our support team",
      action: () => toast.info("Opening chat support..."),
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+1 (800) 123-4567",
      action: () => toast.info("Calling support..."),
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "support@rideshare.com",
      action: () => toast.info("Opening email..."),
    },
  ];

  const faqItems = [
    { question: "How do I add a payment method?", category: "Payment" },
    { question: "How to cancel a ride?", category: "Rides" },
    { question: "What if I left something in the car?", category: "Lost Items" },
    { question: "How does surge pricing work?", category: "Pricing" },
    { question: "Can I schedule a ride in advance?", category: "Booking" },
    { question: "How do I change my pickup location?", category: "Rides" },
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
          <h1 className="text-xl font-bold">Support & Help</h1>
        </div>
      </div>

      {/* Contact Options */}
      <div className="p-4 space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">CONTACT US</h3>
        {contactOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <button
              key={index}
              onClick={option.action}
              className="w-full flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary transition-smooth"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold">{option.title}</p>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="p-4 space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">FREQUENTLY ASKED QUESTIONS</h3>
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <button
              key={index}
              onClick={() => toast.info("Opening FAQ article...")}
              className="w-full flex items-center justify-between gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary transition-smooth text-left"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{item.question}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="p-4">
        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
          <p className="font-semibold mb-2 text-destructive">Emergency?</p>
          <p className="text-sm text-muted-foreground mb-3">
            If you're in an emergency situation, please contact local authorities immediately.
          </p>
          <Button
            variant="outline"
            className="w-full border-destructive/50 text-destructive hover:bg-destructive/10"
            onClick={() => toast.info("Emergency contact activated")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Emergency Services
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation type="rider" />
    </div>
  );
};

export default RiderSupport;
