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
  });

  const handleUpload = (type: keyof typeof documents) => {
    setDocuments({ ...documents, [type]: true });
    toast.success("Document uploaded successfully!");
  };

  const handleContinue = () => {
    if (!documents.license || !documents.registration || !documents.insurance) {
      toast.error("Please upload all required documents");
      return;
    }
    navigate("/driver/auth/vehicle");
  };

  const documentTypes = [
    { key: "license", label: "Driver's License", required: true },
    { key: "registration", label: "Vehicle Registration", required: true },
    { key: "insurance", label: "Insurance Certificate", required: true },
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
            Please upload the following documents to verify your account
          </p>
        </div>

        {/* Document Upload Cards */}
        <div className="space-y-4">
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
          disabled={!documents.license || !documents.registration || !documents.insurance}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default DriverDocuments;
