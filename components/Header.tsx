"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

export default function Header({
  nav,
  phoneTel,
  phoneDisplay,
  logo,
  logoPng,
  logoAlt,
}: {
  nav: NavItem[];
  phoneTel: string;
  phoneDisplay: string;
  logo: string;
  logoPng: string;
  logoAlt: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-papier">
      <a href="#inhoud" className="skip">
        Naar de inhoud
      </a>
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-3 px-4 py-2 xl:flex-nowrap">
        <Link href="/" className="shrink-0" aria-label={logoAlt} onClick={() => setOpen(false)}>
          {/* Vectorlogo: niet rasterizen of bijsnijden. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo}
            alt={logoAlt}
            width={750}
            height={241}
            className="h-14 w-auto xl:h-16"
            onError={(event) => {
              const image = event.currentTarget;
              image.onerror = null;
              image.src = logoPng;
            }}
          />
        </Link>

        <nav
          id="hoofdmenu"
          aria-label="Hoofdmenu"
          className={`${open ? "flex" : "hidden"} order-3 max-h-[calc(100vh-7rem)] w-full basis-full flex-col overflow-y-auto py-2 xl:order-none xl:flex xl:max-h-none xl:w-auto xl:basis-auto xl:flex-row xl:flex-nowrap xl:items-center xl:overflow-visible xl:py-0`}
        >
          {nav.map((item) => {
            const current = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                aria-current={current ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-2 xl:flex">
          <a href={phoneTel} data-cta="bellen" className="btn btn-buxus">
            Bellen
            <span className="sr-only"> {phoneDisplay}</span>
          </a>
          <Link href="/offerte" data-cta="offerte" className="btn btn-blad">
            Offerte
          </Link>
        </div>

        <button
          type="button"
          className="btn btn-line ml-auto xl:hidden"
          aria-expanded={open}
          aria-controls="hoofdmenu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Sluit" : "Menu"}
        </button>
      </div>
      <div className="h-2.5 bg-buxus" aria-hidden />
    </header>
  );
}
