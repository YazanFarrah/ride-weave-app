import { MapPin } from "lucide-react";

interface MapViewProps {
  pickup?: { lat: number; lng: number; address?: string };
  destination?: { lat: number; lng: number; address?: string };
  showRoute?: boolean;
  className?: string;
}

const MapView = ({ pickup, destination, showRoute, className = "" }: MapViewProps) => {
  return (
    <div className={`map-container bg-muted relative ${className}`}>
      {/* Placeholder map background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-secondary to-muted" />
      
      {/* Grid pattern to simulate map */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

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
