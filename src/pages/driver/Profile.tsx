import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Award, ChevronRight, LogOut, User, Car, FileText, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/shared/BottomNavigation";
import { toast } from "sonner";

const DriverProfile = () => {
  const navigate = useNavigate();

  const profileSections = [
    {
      title: "Account",
      items: [
        { icon: User, label: "Personal Information", action: () => toast.info("Edit personal info") },
        { icon: FileText, label: "Documents", action: () => toast.info("View documents") },
        { icon: Car, label: "Vehicle Details", action: () => toast.info("Edit vehicle info") },
      ],
    },
    {
      title: "Payments",
      items: [
        { icon: CreditCard, label: "Bank Account", action: () => toast.info("Manage bank account") },
      ],
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
            onClick={() => navigate("/driver/home")}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-bold">Driver Profile</h1>
        </div>
      </div>

      {/* Profile Header */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-3xl font-bold text-white">
            JD
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">John Driver</h2>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <Star className="w-5 h-5 fill-warning text-warning" />
              <p className="text-2xl font-bold">4.9</p>
            </div>
            <p className="text-sm text-muted-foreground">Rating</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-5 h-5 text-primary" />
              <p className="text-2xl font-bold">1,284</p>
            </div>
            <p className="text-sm text-muted-foreground">Total Trips</p>
          </div>
        </div>
      </div>

      {/* Vehicle Info */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-muted-foreground mb-3">VEHICLE</h3>
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center text-3xl">
              🚗
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg">Toyota Camry</p>
              <p className="text-sm text-muted-foreground">2022 • Silver</p>
              <p className="text-sm font-semibold mt-1">ABC-1234</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Sections */}
      <div className="px-4 space-y-6">
        {profileSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">{section.title.toUpperCase()}</h3>
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIndex}
                    onClick={item.action}
                    className="w-full flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary transition-smooth"
                  >
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <p className="flex-1 text-left font-semibold">{item.label}</p>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <div className="px-4 mt-6 mb-6">
        <Button
          variant="outline"
          size="lg"
          className="w-full h-14 text-destructive border-destructive/50 hover:bg-destructive/10"
          onClick={() => {
            toast.success("Logged out successfully");
            navigate("/");
          }}
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation type="driver" />
    </div>
  );
};

export default DriverProfile;
