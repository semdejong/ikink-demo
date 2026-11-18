import Image from "next/image";
import type { Photo } from "@/content";

export default function SiteImage({
  photo,
  sizes,
  preload = false,
  className = "h-auto w-full",
}: {
  photo: Photo;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.w}
      height={photo.h}
      sizes={sizes}
      preload={preload}
      className={className}
    />
  );
}
