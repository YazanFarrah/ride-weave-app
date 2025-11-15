import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DriverVehicle = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    plate: "",
  });

  const handleSubmit = () => {
    if (!formData.make || !formData.model || !formData.year || !formData.color || !formData.plate) {
      toast.error("Please fill in all vehicle details");
      return;
    }
    toast.success("Vehicle information saved!");
    navigate("/driver/home");
  };

  return (
    <div className="mobile-container bg-background">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-bold">Vehicle Details</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 space-y-6">
        <div>
          <p className="text-muted-foreground">
            Add your vehicle information to start accepting rides
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="make">Vehicle Make *</Label>
            <Select
              value={formData.make}
              onValueChange={(value) => setFormData({ ...formData, make: value })}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select make" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="honda">Honda</SelectItem>
                <SelectItem value="ford">Ford</SelectItem>
                <SelectItem value="chevrolet">Chevrolet</SelectItem>
                <SelectItem value="nissan">Nissan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="model">Vehicle Model *</Label>
            <Input
              id="model"
              placeholder="e.g., Camry"
              value={formData.model}
              onChange={(e) => setFormData({ ...formData, model: e.target.value })}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="year">Year *</Label>
            <Select
              value={formData.year}
              onValueChange={(value) => setFormData({ ...formData, year: value })}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="color">Vehicle Color *</Label>
            <Select
              value={formData.color}
              onValueChange={(value) => setFormData({ ...formData, color: value })}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="silver">Silver</SelectItem>
                <SelectItem value="gray">Gray</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="red">Red</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="plate">License Plate *</Label>
            <Input
              id="plate"
              placeholder="e.g., ABC-1234"
              value={formData.plate}
              onChange={(e) => setFormData({ ...formData, plate: e.target.value.toUpperCase() })}
              className="h-12"
            />
          </div>
        </div>

        <div className="bg-muted rounded-xl p-4">
          <h3 className="font-semibold mb-2">Vehicle Requirements</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Vehicle must be 10 years old or newer</li>
            <li>• Must be a 4-door vehicle</li>
            <li>• In good working condition</li>
            <li>• Clean interior and exterior</li>
          </ul>
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

export default DriverVehicle;
