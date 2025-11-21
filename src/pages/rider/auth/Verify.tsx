import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const RiderVerify = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length !== 6) {
      toast.error("Please enter the complete code");
      return;
    }
    toast.success("Verified successfully!");
    navigate("/rider/auth/profile");
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
          <h1 className="text-3xl font-bold mb-2">Enter verification code</h1>
          <p className="text-muted-foreground">
            We sent a code to +1 (555) 123-4567
          </p>
        </div>

        <div className="flex gap-2 justify-center">
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="w-12 h-14 text-center text-xl font-semibold"
            />
          ))}
        </div>

        <Button
          size="lg"
          className="w-full h-14 text-lg font-semibold"
          onClick={handleVerify}
        >
          Verify
        </Button>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Didn't receive the code?
          </p>
          <Button
            variant="link"
            className="text-primary font-semibold"
            onClick={() => toast.info("Code resent")}
          >
            Resend Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RiderVerify;
