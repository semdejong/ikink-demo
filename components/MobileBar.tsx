import Link from "next/link";

export default function MobileBar({ phoneTel }: { phoneTel: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 xl:hidden">
      <div className="h-2 rounded-t-[8px] bg-buxus" aria-hidden />
      <div className="grid grid-cols-2 bg-papier pb-[env(safe-area-inset-bottom)]">
        <a href={phoneTel} data-cta="bellen" className="btn btn-buxus rounded-none border-0">
          Bellen
        </a>
        <Link href="/offerte" data-cta="offerte" className="btn btn-blad rounded-none border-0">
          Offerte
        </Link>
      </div>
    </div>
  );
}
