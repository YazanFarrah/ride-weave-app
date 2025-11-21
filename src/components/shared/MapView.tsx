import { MapPin } from "lucide-react";

interface MapViewProps {
  pickup?: { lat: number; lng: number; address?: string };
  destination?: { lat: number; lng: number; address?: string };
  showRoute?: boolean;
  className?: string;
}

const MapView = ({ pickup, destination, showRoute, className = "" }: MapViewProps) => {
  return (
    <div className={`map-container bg-muted relative overflow-hidden ${className}`}>
      {/* Realistic map background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E5E3DF] via-[#F2F0ED] to-[#E8E6E1]" />
      
      {/* Street grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(#D1CFC8 1.5px, transparent 1.5px),
            linear-gradient(90deg, #D1CFC8 1.5px, transparent 1.5px),
            linear-gradient(#E0DED7 1px, transparent 1px),
            linear-gradient(90deg, #E0DED7 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          backgroundPosition: '-1px -1px, -1px -1px, -1px -1px, -1px -1px'
        }} />
      </div>

      {/* Parks/green spaces */}
      <div className="absolute top-[20%] left-[15%] w-24 h-24 rounded-full bg-[#C8E6C9]/40 blur-xl" />
      <div className="absolute bottom-[25%] right-[20%] w-32 h-32 rounded-full bg-[#C8E6C9]/30 blur-xl" />
      
      {/* Building blocks */}
      <div className="absolute top-[30%] right-[30%] w-16 h-12 bg-[#B0B0B0]/20 rounded-sm" />
      <div className="absolute bottom-[40%] left-[25%] w-20 h-16 bg-[#B0B0B0]/15 rounded-sm" />
      <div className="absolute top-[50%] left-[40%] w-12 h-12 bg-[#B0B0B0]/20 rounded-sm" />

      {/* Pickup marker */}
      {pickup && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-primary shadow-lg flex items-center justify-center animate-bounce">
              <MapPin className="w-5 h-5 text-white fill-white" />
            </div>
            {pickup.address && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-full shadow-md text-xs font-medium">
                {pickup.address}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Destination marker */}
      {destination && (
        <div className="absolute bottom-1/3 right-1/3 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-destructive shadow-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white fill-white" />
            </div>
            {destination.address && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-full shadow-md text-xs font-medium">
                {destination.address}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Route line */}
      {showRoute && pickup && destination && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path
            d="M 50% 33% Q 60% 50%, 66% 66%"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8 4"
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* Center current location indicator */}
      {!pickup && !destination && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 rounded-full bg-primary shadow-lg border-2 border-white animate-pulse" />
        </div>
      )}
    </div>
  );
};

export default MapView;
