import { useState, useRef, useEffect, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface DraggableBottomSheetProps {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  snapPoints?: number[]; // percentages of screen height [30, 60, 90]
  defaultSnap?: number; // index of default snap point
  showHandle?: boolean;
}

const DraggableBottomSheet = ({
  children,
  isOpen,
  onClose,
  snapPoints = [30, 60, 90],
  defaultSnap = 0,
  showHandle = true,
}: DraggableBottomSheetProps) => {
  const [currentSnap, setCurrentSnap] = useState(defaultSnap);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const sheetRef = useRef<HTMLDivElement>(null);

  const heightPercentage = snapPoints[currentSnap];

  useEffect(() => {
    if (isOpen) {
      setCurrentSnap(defaultSnap);
    }
  }, [isOpen, defaultSnap]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const deltaY = currentY - startY;
    const threshold = 50;

    if (deltaY > threshold) {
      // Dragged down
      if (currentSnap > 0) {
        setCurrentSnap(currentSnap - 1);
      } else if (onClose) {
        onClose();
      }
    } else if (deltaY < -threshold) {
      // Dragged up
      if (currentSnap < snapPoints.length - 1) {
        setCurrentSnap(currentSnap + 1);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setCurrentY(e.clientY);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setCurrentY(e.clientY);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const deltaY = currentY - startY;
    const threshold = 50;

    if (deltaY > threshold) {
      if (currentSnap > 0) {
        setCurrentSnap(currentSnap - 1);
      } else if (onClose) {
        onClose();
      }
    } else if (deltaY < -threshold) {
      if (currentSnap < snapPoints.length - 1) {
        setCurrentSnap(currentSnap + 1);
      }
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, startY, currentY]);

  if (!isOpen) return null;

  const dragOffset = isDragging ? Math.max(0, currentY - startY) : 0;

  return (
    <>
      {/* Overlay */}
      {currentSnap === snapPoints.length - 1 && (
        <div
          className="bottom-sheet-overlay"
          onClick={onClose}
        />
      )}

      {/* Bottom Sheet */}
      <div
        ref={sheetRef}
        className="fixed left-0 right-0 bottom-0 bg-card rounded-t-3xl shadow-2xl z-50 transition-smooth max-w-md mx-auto"
        style={{
          height: `${heightPercentage}vh`,
          transform: `translateY(${dragOffset}px)`,
          transition: isDragging ? "none" : "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Drag Handle */}
        {showHandle && (
          <div
            className="w-full py-3 cursor-grab active:cursor-grabbing flex justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
          >
            <div className="w-12 h-1.5 bg-muted-foreground/30 rounded-full" />
          </div>
        )}

        {/* Content */}
        <div className="h-[calc(100%-2rem)] overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};

export default DraggableBottomSheet;
