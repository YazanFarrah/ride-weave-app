import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const RiderProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = () => {
    if (!formData.firstName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Profile created successfully!");
    navigate("/rider/home");
  };

  return (
    <div className="mobile-container bg-background overflow-y-auto">
      {/* Header */}
      <div className="p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
      </div>

      {/* Content */}
      <div className="px-6 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Complete your profile</h1>
          <p className="text-muted-foreground">
            Let's get to know you better
          </p>
        </div>

        {/* Profile Photo */}
        <div className="flex justify-center">
          <button className="relative w-24 h-24 rounded-full bg-muted flex items-center justify-center group hover:bg-muted/80 transition-smooth">
            <Camera className="w-8 h-8 text-muted-foreground group-hover:scale-110 transition-smooth" />
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-muted-foreground/30" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="John"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Doe"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12"
            />
          </div>
        </div>

        <Button
          size="lg"
          className="w-full h-14 text-lg font-semibold"
          onClick={handleSubmit}
        >
          Complete Setup
        </Button>
      </div>
    </div>
  );
};

export default RiderProfile;
