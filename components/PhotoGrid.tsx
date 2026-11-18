"use client";

import { useRef, useState } from "react";
import type { Photo } from "@/content";
import SiteImage from "@/components/SiteImage";
import Lightbox from "@/components/Lightbox";
import Hedge from "@/components/Hedge";

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <ul className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, photoIndex) => (
          <li key={photo.id}>
            <Hedge>
              <button
                type="button"
                className="block w-full text-left"
                onClick={(event) => {
                  opener.current = event.currentTarget;
                  setIndex(photoIndex);
                }}
              >
                <SiteImage
                  photo={photo}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <span className="sr-only">
                  Vergroot foto {photoIndex + 1} van {photos.length}.
                </span>
                <span className="block p-3 text-[1.02rem]" aria-hidden="true">
                  <span className="mono text-sm text-aarde">
                    {String(photoIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block">{photo.blik}</span>
                </span>
              </button>
            </Hedge>
          </li>
        ))}
      </ul>
      {index !== null ? (
        <Lightbox
          photos={photos}
          index={index}
          onIndex={setIndex}
          onClose={() => {
            setIndex(null);
            opener.current?.focus();
          }}
        />
      ) : null}
    </>
  );
}
