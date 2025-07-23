import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  currentImageSrc: string;
  onNavigate: (direction: number) => void;
  totalImages: number;
  currentImageIndex: number;
}

export default function ModalGallery({
  isOpen,
  onClose,
  currentImageSrc,
  onNavigate,
  totalImages,
  currentImageIndex,
}: ModalGalleryProps) {
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl mx-4 sm:mx-6 md:mx-12 rounded-xl overflow-hidden bg-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImageSrc}
          alt={`Imagen ${currentImageIndex + 1}`}
          className="w-full h-auto max-h-[80vh] object-contain transition-all duration-300 ease-in-out"
        />

        {/* Botón de cierre */}
        <button
          className="absolute top-3 right-3 text-white text-[30px] hover:text-red-400 transition-colors"
          onClick={onClose}
          aria-label="Cerrar galería"
        >
          ✕
        </button>

        {/* Navegación */}
        {totalImages > 1 && (
          <>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-[4rem] hover:text-neutral-300 transition"
              onClick={() => onNavigate(-1)}
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-[4rem] hover:text-neutral-300 transition"
              onClick={() => onNavigate(1)}
              aria-label="Siguiente"
            >
              ›
            </button>
          </>
        )}

        {/* Indicador de imagen */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-xs bg-black/40 px-3 py-1 rounded-full">
          {currentImageIndex + 1} / {totalImages}
        </div>
      </div>
    </div>,
    modalRoot
  );
}
