import { X } from "lucide-react";
import { useState } from "react";

export function AdBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#9b87f5] text-white p-4 mb-6 rounded-lg shadow-md">
      <div className="container mx-auto text-center">
        <p className="font-medium">
          🎉 Special Offer: Free shipping on orders over $50! Use code{" "}
          <span className="font-bold">FREESHIP50</span> at checkout
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}