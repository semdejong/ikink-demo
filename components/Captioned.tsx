import type { Photo } from "@/content";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";

export default function Captioned({
  photo,
  sizes,
  preload = false,
  index,
}: {
  photo: Photo;
  sizes: string;
  preload?: boolean;
  index?: number;
}) {
  return (
    <Hedge>
      <SiteImage photo={photo} sizes={sizes} preload={preload} />
      <p className="p-4 text-[1.0625rem]">
        {index !== undefined ? (
          <span className="mono mr-2 text-sm text-aarde">{String(index).padStart(2, "0")}</span>
        ) : null}
        {photo.blik}
      </p>
    </Hedge>
  );
}
