import { Car, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary-light to-primary-dark p-6">
      <div className="w-full max-w-sm space-y-8 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
              <Car className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white">RideShare</h1>
          <p className="text-white/90 text-lg">Your ride, your way</p>
        </div>

        <div className="space-y-4 pt-12">
          <Button
            size="lg"
            className="w-full h-14 text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-xl"
            onClick={() => navigate("/rider/auth/login")}
          >
            <User className="w-5 h-5 mr-2" />
            Continue as Rider
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full h-14 text-lg font-semibold bg-transparent text-white border-2 border-white hover:bg-white/10 shadow-xl"
            onClick={() => navigate("/driver/auth/login")}
          >
            <Car className="w-5 h-5 mr-2" />
            Continue as Driver
          </Button>
        </div>

        <p className="text-white/70 text-sm pt-8">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Index;
