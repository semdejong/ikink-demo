"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Photo } from "@/content";

export default function Lightbox({
  photos,
  index,
  onClose,
  onIndex,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onIndex: (index: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const photo = photos[index];
  const total = photos.length;

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onIndex(Math.max(0, index - 1));
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onIndex(Math.min(total - 1, index + 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, onClose, onIndex, total]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-x-hidden overflow-y-auto bg-inkt p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-bijschrift"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-5xl">
        <div className="relative mx-auto h-[62vh] w-full max-w-full">
          <Image
            src={photo.src}
            alt=""
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
        <p id="lightbox-bijschrift" className="mt-3 max-w-3xl text-[1.0625rem] leading-snug text-papier">
          {photo.alt}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="btn btn-line"
            onClick={() => onIndex(index - 1)}
            disabled={index === 0}
          >
            Vorige
          </button>
          <p className="mono min-w-16 text-center text-papier" aria-live="polite">
            {index + 1} van {total}
          </p>
          <button
            type="button"
            className="btn btn-line"
            onClick={() => onIndex(index + 1)}
            disabled={index === total - 1}
          >
            Volgende
          </button>
          <button type="button" ref={closeRef} className="btn btn-blad ml-auto" onClick={onClose}>
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
}
