import { X } from "lucide-react";
import type { SelectedVertexImage } from "./vertex-content";

type VertexImageLightboxProps = {
  selectedImage: SelectedVertexImage;
  onClose: () => void;
};

export function VertexImageLightbox({ selectedImage, onClose }: VertexImageLightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="flex items-center justify-between pb-4 border-b border-white/10 max-w-7xl mx-auto w-full">
        <div>
          <div className="text-base font-bold font-montserrat text-white uppercase tracking-tight">
            {selectedImage.title}
          </div>
          {selectedImage.subtitle && (
            <div className="text-xs text-[#B8A86C] font-sans mt-0.5">
              {selectedImage.subtitle}
            </div>
          )}
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="relative flex-1 w-full overflow-auto custom-scrollbar flex items-center justify-center p-2 sm:p-4">
        <div
          className="relative max-w-full max-h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
          />
        </div>
      </div>
    </div>
  );
}
