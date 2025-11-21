import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DriverDocuments = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState({
    license: false,
    registration: false,
    insurance: false,
    carFront: false,
    carBack: false,
    carLeft: false,
    carRight: false,
  });

  const handleUpload = (type: keyof typeof documents) => {
    setDocuments({ ...documents, [type]: true });
    toast.success("Photo uploaded successfully!");
  };

  const handleContinue = () => {
    const allDocsUploaded = 
      documents.license && 
      documents.registration && 
      documents.insurance &&
      documents.carFront &&
      documents.carBack &&
      documents.carLeft &&
      documents.carRight;
      
    if (!allDocsUploaded) {
      toast.error("Please upload all required documents and car photos");
      return;
    }
    navigate("/driver/auth/vehicle");
  };

  const documentTypes = [
    { key: "license", label: "Driver's License", required: true, section: "documents" },
    { key: "registration", label: "Vehicle Registration", required: true, section: "documents" },
    { key: "insurance", label: "Insurance Certificate", required: true, section: "documents" },
  ];

  const carPhotoTypes = [
    { key: "carFront", label: "Car Front View", required: true },
    { key: "carBack", label: "Car Back View", required: true },
    { key: "carLeft", label: "Car Left Side", required: true },
    { key: "carRight", label: "Car Right Side", required: true },
  ];

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
          <h1 className="text-xl font-bold">Upload Documents</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 space-y-6">
        <div>
          <p className="text-muted-foreground">
            Please upload the following documents and car photos to verify your account
          </p>
        </div>

        {/* Document Upload Section */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">REQUIRED DOCUMENTS</h3>
          <div className="space-y-3">
            {documentTypes.map((doc) => {
              const isUploaded = documents[doc.key as keyof typeof documents];
              return (
                <div
                  key={doc.key}
                  className={`border-2 rounded-xl p-4 transition-smooth ${
                    isUploaded
                      ? "border-success bg-success/5"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{doc.label}</h3>
                      {doc.required && (
                        <p className="text-xs text-muted-foreground">Required</p>
                      )}
                    </div>
                    {isUploaded && (
                      <CheckCircle2 className="w-6 h-6 text-success" />
                    )}
                  </div>

                  {isUploaded ? (
                    <Button
                      variant="outline"
                      className="w-full border-success text-success hover:bg-success/10"
                      onClick={() => handleUpload(doc.key as keyof typeof documents)}
                    >
                      Replace Document
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => handleUpload(doc.key as keyof typeof documents)}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload {doc.label}
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Car Photos Section */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">CAR PHOTOS</h3>
          <div className="grid grid-cols-2 gap-3">
            {carPhotoTypes.map((photo) => {
              const isUploaded = documents[photo.key as keyof typeof documents];
              return (
                <div
                  key={photo.key}
                  className={`border-2 rounded-xl p-3 transition-smooth ${
                    isUploaded
                      ? "border-success bg-success/5"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2 mb-2">
                    {isUploaded ? (
                      <CheckCircle2 className="w-8 h-8 text-success" />
                    ) : (
                      <Upload className="w-8 h-8 text-muted-foreground" />
                    )}
                    <div className="text-center">
                      <p className="font-semibold text-sm">{photo.label}</p>
                      <p className="text-xs text-muted-foreground">Required</p>
                    </div>
                  </div>

                  <Button
                    variant={isUploaded ? "outline" : "default"}
                    size="sm"
                    className={`w-full ${
                      isUploaded 
                        ? "border-success text-success hover:bg-success/10" 
                        : ""
                    }`}
                    onClick={() => handleUpload(photo.key as keyof typeof documents)}
                  >
                    {isUploaded ? "Replace" : "Upload"}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-muted rounded-xl p-4">
          <h3 className="font-semibold mb-2">Document Requirements</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Clear, readable photos or scans</li>
            <li>• Documents must be valid and not expired</li>
            <li>• Name on documents must match your profile</li>
            <li>• Supported formats: JPG, PNG, PDF</li>
          </ul>
        </div>

        <Button
          size="lg"
          className="w-full h-14 text-lg font-semibold"
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default DriverDocuments;
