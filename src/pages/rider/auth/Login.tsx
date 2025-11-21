import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const RiderLogin = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    navigate("/rider/auth/verify");
  };

  return (
    <div className="mobile-container bg-background">
      {/* Header */}
      <div className="p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
      </div>

      {/* Content */}
      <div className="px-6 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Enter your mobile number</h1>
          <p className="text-muted-foreground">
            We'll send you a confirmation code
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="pl-12 h-14 text-lg"
            />
          </div>

          <Button
            size="lg"
            className="w-full h-14 text-lg font-semibold"
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          By continuing, you agree to our{" "}
          <span className="text-primary">Terms of Service</span> and{" "}
          <span className="text-primary">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default RiderLogin;
