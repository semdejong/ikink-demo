import Link from "next/link";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import ContactSentence from "@/components/ContactSentence";

export default function Footer() {
  const { company } = content;
  return (
    <footer className="mt-8">
      <div className="h-3 bg-buxus" aria-hidden />
      <div className="bg-papier text-inkt">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-8 md:grid-cols-12 md:px-6">
          <div className="md:col-span-5">
            <p className="font-display text-2xl text-aarde">{company.name}</p>
            <p className="mt-3">
              {company.street}
              <br />
              {company.postalCode} {company.city}
            </p>
            <p className="mt-3">
              <a href={company.phoneTel} data-cta="bellen" className="link mono text-[1.05rem]">
                {company.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${company.email}`} data-cta="mailen" className="link">
                {company.email}
              </a>
            </p>
          </div>
          <div className="md:col-span-4">
            <ContactSentence />
            <nav className="mt-4 flex flex-col" aria-label="Voettekst">
              <Link href="/aanleg" className="link-row">
                Aanleg
              </Link>
              <Link href="/onderhoud" className="link-row">
                Onderhoud
              </Link>
              <Link href="/werkzaamheden" className="link-row">
                Alle werkzaamheden
              </Link>
              <Link href="/projecten" className="link-row">
                Projecten
              </Link>
              <Link href="/over" className="link-row">
                Over het bedrijf
              </Link>
              <Link href="/privacy" className="link-row">
                Privacy
              </Link>
            </nav>
          </div>
          <div className="md:col-span-3">
            <Link href="/offerte" data-cta="offerte" className="btn btn-blad">
              Offerte
            </Link>
            <p className="mt-5 text-sm leading-relaxed">
              KvK {company.kvk}
              <br />
              Btw {company.btw}
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-4 pb-28 md:px-6 xl:pb-8">
          <p className="text-sm">Concept door Sleads</p>
          <SleadsBadge />
        </div>
      </div>
    </footer>
  );
}
