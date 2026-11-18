import Link from "next/link";
import { content, photoById } from "@/content";
import PageMain from "@/components/PageMain";
import Hedge from "@/components/Hedge";
import SiteImage from "@/components/SiteImage";
import ContactSentence from "@/components/ContactSentence";
import Path from "@/components/Path";

const workSpans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-6",
  "md:col-span-6",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-12",
];

const sizes = "(min-width: 768px) 40vw, 100vw";

export default function Home() {
  const terras = photoById("terras-10");
  const hagen = photoById("hagen-07");
  const graaf = photoById("natuurlijk-06");
  const hedera = photoById("erfafscheiding-09");
  const bus = content.extraPhotos.bus;
  const { company } = content;

  return (
    <PageMain>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        <div className="slot order-1 md:order-none md:col-span-8">
          <div className="slot-label hidden md:block" aria-hidden />
          <Hedge grow className="h-full">
            <div className="rise p-5 md:p-8">
              <h1>{content.home.h1}</h1>
              <p className="mt-4 max-w-2xl text-[1.125rem]">{content.home.lede}</p>
              <p className="max-w-2xl">{content.copy.homeMore}</p>
              <p className="mt-3 text-sm">
                {company.street}, {company.postalCode} {company.city}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={company.phoneTel} data-cta="bellen" className="btn btn-buxus">
                  Bellen
                </a>
                <Link href="/offerte" data-cta="offerte" className="btn btn-blad">
                  Offerte aanvragen
                </Link>
              </div>
            </div>
          </Hedge>
        </div>

        <div className="slot order-2 md:order-none md:col-span-4">
          <p className="slot-label vak-label">VAK A · AANLEG</p>
          <Hedge className="h-full">
            <Link href="/aanleg" className="flex h-full flex-col">
              <SiteImage photo={terras} sizes={sizes} preload />
              <span className="block p-4">
                <span className="font-display text-2xl text-aarde">Aanleg tuinen</span>
                <span className="mt-2 block">Van ontwerp tot terras, pad en beplanting.</span>
              </span>
            </Link>
          </Hedge>
        </div>

        <div className="slot order-4 md:order-none md:col-span-3">
          <p className="slot-label vak-label">VAK B · ONDERHOUD</p>
          <Hedge className="h-full">
            <Link href="/onderhoud" className="flex h-full flex-col">
              <SiteImage photo={hagen} sizes="(min-width: 768px) 24vw, 100vw" />
              <span className="block p-4">
                <span className="font-display text-2xl text-aarde">Onderhoud</span>
                <span className="mt-2 block">Snoeien, maaien, gazons en planten.</span>
              </span>
            </Link>
          </Hedge>
        </div>

        <div className="slot order-3 md:order-none md:col-span-6">
          <div className="slot-label hidden md:block" aria-hidden />
          <div className="cross rise relative flex min-h-56 items-center justify-center md:min-h-0">
            <div className="absolute top-1/2 right-0 left-0 h-3 -translate-y-1/2 rounded-[8px] bg-buxus md:-right-5 md:-left-5" aria-hidden />
            <div className="absolute top-0 bottom-0 left-1/2 w-3 -translate-x-1/2 rounded-[8px] bg-buxus" aria-hidden />
            <a
              href={company.phoneTel}
              data-cta="bellen"
              className="relative z-10 flex h-52 w-52 items-center justify-center rounded-full bg-buxus p-3"
            >
              <span className="flex h-full w-full flex-col items-center justify-center rounded-full bg-papier px-2 text-center">
                <span className="vak-label">Telefoon</span>
                <span className="mono mt-1 text-[0.95rem] whitespace-nowrap text-inkt">
                  {company.phoneDisplay}
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="slot order-5 md:order-none md:col-span-3">
          <p className="slot-label vak-label">VAK C · RENOVATIE</p>
          <Hedge className="h-full">
            <Link href="/renovatie" className="flex h-full flex-col">
              <SiteImage photo={graaf} sizes="(min-width: 768px) 24vw, 100vw" />
              <span className="block p-4">
                <span className="font-display text-2xl text-aarde">Renovatie</span>
                <span className="mt-2 block">Bestaande tuinen opnieuw indelen, te beginnen bij het grondwerk.</span>
              </span>
            </Link>
          </Hedge>
        </div>

        <div className="slot order-6 md:order-none md:col-span-5">
          <p className="slot-label vak-label">VAK D · WATER EN GRENS</p>
          <Hedge className="h-full">
            <Link href="/vijvers-en-schuttingen" className="flex h-full flex-col">
              <SiteImage photo={hedera} sizes={sizes} />
              <span className="block p-4">
                <span className="font-display text-2xl text-aarde">Vijvers en schuttingen</span>
                <span className="mt-2 block">Erfafscheiding, bijvoorbeeld betongaas met hedera, en graafwerk voor een vijver.</span>
              </span>
            </Link>
          </Hedge>
        </div>

        <div className="slot order-7 md:order-none md:col-span-7">
          <p className="slot-label vak-label">VAK E · ADVIES</p>
          <Hedge className="h-full">
            <div className="grid h-full md:grid-cols-5">
              <div className="p-5 md:col-span-3">
                <h2>Advies en materialen</h2>
                <p className="mt-3">
                  Allround werkzaamheden van ontwerp tot aanleg, onderhoud en renovatie, advies en levering van materialen.
                </p>
                <p className="mt-3">
                  <Link href="/werkzaamheden" className="link-row">
                    Alle werkzaamheden
                  </Link>
                </p>
              </div>
              <div className="md:col-span-2 md:flex md:items-end">
                <SiteImage photo={bus} sizes="(min-width: 768px) 28vw, 100vw" />
              </div>
            </div>
          </Hedge>
        </div>

        <div className="order-8 md:order-none md:col-span-12">
          <Path label="VIER PROJECTEN" />
          <h2 className="sr-only">Projecten</h2>
        </div>

        <ProjectBed slug="lounge-terras" photoId="terras-07" span="md:col-span-7" order="order-9" />
        <ProjectBed slug="erfafscheidingen" photoId="erfafscheiding-03" span="md:col-span-5" order="order-10" />
        <ProjectBed slug="natuurlijk-gebied" photoId="natuurlijk-03" span="md:col-span-5" order="order-11" />
        <ProjectBed slug="vorm-en-hagensnoei" photoId="hagen-01" span="md:col-span-7" order="order-12" />
      </div>

      <Path label="HET WERK" />
      <Hedge beds>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-12">
          {content.works.map((work, index) => (
            <li key={work.label} className={`hedge-inner p-4 md:p-5 ${workSpans[index]}`}>
              <h3>
                {work.label.includes("/") ? (
                  <>
                    {work.label.slice(0, work.label.indexOf("/") + 1)}
                    <wbr />
                    {work.label.slice(work.label.indexOf("/") + 1)}
                  </>
                ) : (
                  work.label
                )}
              </h3>
              <p className="mt-2 text-[1.0625rem]">{work.short}</p>
              {work.href ? (
                <p className="mt-3">
                  <Link href={work.href} className="link-row">
                    Verder
                  </Link>
                </p>
              ) : null}
            </li>
          ))}
          <li className="hedge-inner p-4 md:col-span-7 md:p-5">
            <p>{content.copy.homeClose}</p>
          </li>
          <li className="hedge-inner flex flex-col justify-between gap-4 p-4 md:col-span-5 md:p-5">
            <div>
              <ContactSentence />
            </div>
            <p>
              <Link href="/offerte" data-cta="offerte" className="btn btn-buxus">
                Offerte aanvragen
              </Link>
            </p>
          </li>
        </ul>
      </Hedge>
    </PageMain>
  );
}

function ProjectBed({
  slug,
  photoId,
  span,
  order,
}: {
  slug: string;
  photoId: string;
  span: string;
  order: string;
}) {
  const project = content.projects.find((item) => item.slug === slug);
  if (!project) return null;
  const photo = photoById(photoId);
  return (
    <div className={`${order} h-full md:order-none ${span}`}>
      <Hedge className="h-full">
        <Link href={`/projecten/${project.slug}`} className="flex h-full flex-col">
          <SiteImage photo={photo} sizes="(min-width: 768px) 50vw, 100vw" />
          <span className="block p-4">
            <span className="font-display text-2xl text-aarde">{project.title}</span>
            <span className="mt-2 block">{project.caption}</span>
            {project.cardLine ? <span className="mt-2 block">{project.cardLine}</span> : null}
            <span className="mono mt-3 block text-sm text-aarde">
              {project.photos.length} foto’s
            </span>
          </span>
        </Link>
      </Hedge>
    </div>
  );
}
