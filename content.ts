/**
 * Alle feiten komen van hovenier-ikink.nl (geverifieerd 18 nov 2026).
 * Niets verzinnen: geen reviews, openingstijden, socials, prijzen of garanties.
 * Slug blijft "ikink-demo" (data-demo van de Sleads-analytics).
 */

export type Photo = {
  id: string;
  src: string;
  alt: string;
  w: number;
  h: number;
};

export type Project = {
  slug: string;
  title: string;
  caption: string;
  note?: string;
  specs?: string[];
  photos: Photo[];
};

export type Work = {
  label: string;
  text: string;
  href?: string;
};

export const content = {
  slug: "ikink-demo",

  company: {
    name: "Hoveniersbedrijf Felix Ikink",
    shortName: "Hovenier Ikink",
    street: "Kortestraat 11",
    postalCode: "7101 JH",
    city: "Winterswijk",
    phoneDisplay: "06 13 68 04 21",
    phoneTel: "tel:+31613680421",
    email: "info@hovenier-ikink.nl",
    kvk: "57853541",
    btw: "NL001390158B02",
    logo: "/logo.svg",
    logoPng: "/logo.png",
  },

  colors: {
    buxus: "#2F4A22",
    blad: "#8CC640",
    aarde: "#593F17",
    grind: "#ECE7DC",
    stip: "#D6CFBF",
    papier: "#FAF8F3",
    inkt: "#1F2419",
  },

  seo: {
    title: "Hoveniersbedrijf Felix Ikink | Winterswijk",
    description:
      "Hoveniersbedrijf Felix Ikink. Tuinen, aanleg en onderhoud, particulieren en bedrijven in de omgeving Winterswijk.",
    lang: "nl",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Aanleg", href: "/aanleg" },
    { label: "Onderhoud", href: "/onderhoud" },
    { label: "Renovatie", href: "/renovatie" },
    { label: "Vijvers", href: "/vijvers-en-schuttingen" },
    { label: "Werk", href: "/werkzaamheden" },
    { label: "Projecten", href: "/projecten" },
    { label: "Over", href: "/over" },
    { label: "Contact", href: "/contact" },
  ],

  home: {
    h1: "Hoveniersbedrijf Felix Ikink",
    lede: "Gestart sinds mei 2013. Alles op het gebied van tuinen, aanleg & onderhoud, particulieren & bedrijven.",
  },

  contactLine:
    "U kunt contact opnemen per mail info@hovenier-ikink.nl of bel ons op 06 13 68 04 21.",

  about: [
    "Hoveniersbedrijf Felix Ikink bestaat sinds mei 2013. Na een opleiding tot ‘Uitvoerder Hoveniersbedrijf’, verschillende stages in binnen- en buitenland en 5 jaar werkervaring bij diverse hoveniersbedrijven in de regio gestart als zelfstandige.",
    "U bent aan het juiste adres voor alles op het gebied van tuinen en groen. Allround werkzaamheden van ontwerp tot aanleg, onderhoud & renovatie, advies & levering van materialen. Ook voor opruimwerkzaamheden & kleine (niet tuingerelateerde) (buiten/binnen) klussen kunt u contact opnemen.",
  ],

  works: [
    {
      label: "Onderhoud tuinen",
      href: "/onderhoud",
      text: "Bestaande tuinen bijhouden: snoei, maaien en de beplanting in orde houden. Voor particulieren en voor bedrijven.",
    },
    {
      label: "Aanleg tuinen",
      href: "/aanleg",
      text: "Nieuwe tuinen, van ontwerp tot aanleg. Terras, pad, gazon of beplanting stemt u af; een vast pakket staat hier niet.",
    },
    {
      label: "Tuinrenovatie",
      href: "/renovatie",
      text: "Een bestaande tuin opnieuw indelen. Grondwerk en een nieuwe opzet horen daarbij. Het eindbeeld hangt van de tuin af.",
    },
    {
      label: "Levering alle (tuin)materialen",
      text: "Materialen voor de tuin kunnen worden geleverd. Welke, spreekt u af. Bij het lounge-terras is betonsteen Basolo Morano gebruikt, met kopsteen Redtumb Coal.",
    },
    {
      label: "Snoeien, zagen en maaien",
      href: "/onderhoud",
      text: "Hagen, heesters, bomen en gras. Verschillende knipwijzen staan bij het project Vorm- en hagensnoei.",
    },
    {
      label: "Planten, zaaien en kweken",
      href: "/onderhoud",
      text: "Nieuwe beplanting, zaaien en kweken. Soorten en aantallen liggen niet vast op deze site.",
    },
    {
      label: "Gazons",
      href: "/onderhoud",
      text: "Aanleg en onderhoud van gazon, inclusief maaien. Op de foto’s van de herinrichting is ook grondwerk op een bestaand gazon te zien.",
    },
    {
      label: "Vijvers",
      href: "/vijvers-en-schuttingen",
      text: "Graafwerk voor een vijver hoort bij het werk. De foto’s tonen de start: een kuil en zand, nog zonder water.",
    },
    {
      label: "Schuttingen/erfafscheidingen",
      href: "/vijvers-en-schuttingen",
      text: "Erfafscheiding, zoals betongaas met hedera. De projectfoto’s laten palen, gaas en jonge hedera zien.",
    },
    {
      label: "Reparatie-/opruimwerkzaamheden",
      text: "Reparatie en opruimen. Ook kleine klussen, ook als die niet bij de tuin horen, kunt u voorleggen.",
    },
    {
      label: "Advies",
      href: "/contact",
      text: "Advies over tuin, groen en materialen. U bereikt het bedrijf per telefoon of per mail.",
    },
  ] as Work[],

  extraPhotos: {
    bus: {
      id: "bus",
      src: "/img/bus.jpg",
      w: 1600,
      h: 1200,
      alt: "Witte bedrijfsbus geparkeerd langs de stoep, met een huis met rieten kap en een grote conifeer op de achtergrond.",
    },
    werk: {
      id: "werk-staand",
      src: "/img/werk-staand.jpg",
      w: 1200,
      h: 1600,
      alt: "Terras in aanleg met gemengde grijze en roodbruine tegels naast een bakstenen muur. Een glazen windscherm staat schuin tegen de muur.",
    },
  } satisfies Record<string, Photo>,

  projects: [
    {
      slug: "lounge-terras",
      title: "Aanleg “Lounge terras”",
      caption:
        "Lounge terras ± 40 m². Materiaal betonsteen getrommeld Basolo Morano 22,5 × 15 × 8 cm. Kopsteen/opsluiting Redtumb Coal 20 × 30 cm.",
      note: "De foto’s lopen van zandbed tot terras.",
      specs: [
        "Lounge terras ± 40 m²",
        "Materiaal betonsteen getrommeld Basolo Morano 22,5 × 15 × 8 cm",
        "Kopsteen/opsluiting Redtumb Coal 20 × 30 cm",
      ],
      photos: [
        {
          id: "terras-01",
          src: "/img/projecten/terras-01.jpg",
          w: 1600,
          h: 1200,
          alt: "Kiepwagen lost zand op een gazon, met een heg en huizen op de achtergrond.",
        },
        {
          id: "terras-02",
          src: "/img/projecten/terras-02.jpg",
          w: 1600,
          h: 1200,
          alt: "Twee pakketten grijze betonstenen naast een berg zand, met een schep en een trilplaat.",
        },
        {
          id: "terras-03",
          src: "/img/projecten/terras-03.jpg",
          w: 1600,
          h: 1200,
          alt: "Afgevlakt zandbed met een gebogen rand, klaar om te bestraten. Stapels stenen staan op de voorgrond.",
        },
        {
          id: "terras-04",
          src: "/img/projecten/terras-04.jpg",
          w: 1600,
          h: 1200,
          alt: "Hoek van een terras in aanleg: getrommelde stenen in halfsteensverband met een donkere opsluitband, naast open zand.",
        },
        {
          id: "terras-05",
          src: "/img/projecten/terras-05.jpg",
          w: 1600,
          h: 1200,
          alt: "Deels bestraat terras, met pakketten stenen, een witte bus en een aanhanger op de oprit.",
        },
        {
          id: "terras-06",
          src: "/img/projecten/terras-06.jpg",
          w: 1600,
          h: 1200,
          alt: "Detail van het straatwerk: een lichte natuursteenplaat met een zwarte parasolvoet, een waterpas erlangs, omringd door getrommelde stenen.",
        },
        {
          id: "terras-07",
          src: "/img/projecten/terras-07.jpg",
          w: 1600,
          h: 1200,
          alt: "Bijna rondom bestraat terras met een lichte plaat in het midden en een haag langs de rand.",
        },
        {
          id: "terras-08",
          src: "/img/projecten/terras-08.jpg",
          w: 1600,
          h: 1200,
          alt: "Detail van de hoek: getrommelde stenen en een grijze opsluitband tegen de aarde.",
        },
        {
          id: "terras-09",
          src: "/img/projecten/terras-09.jpg",
          w: 1600,
          h: 1200,
          alt: "Lichte plaat met parasolvoet in het straatwerk, met zand en kale grond erachter.",
        },
        {
          id: "terras-10",
          src: "/img/projecten/terras-10.jpg",
          w: 1600,
          h: 1200,
          alt: "Afgewerkt terras met een rotan loungeset: twee banken, twee stoelen en twee lage tafels, in een tuin met kale grond eromheen.",
        },
      ],
    },
    {
      slug: "erfafscheidingen",
      title: "Erfafscheidingen",
      caption:
        "Voorbeelden van aanleg erfafscheiding, zoals bijvoorbeeld betongaas met hedera.",
      photos: [
        {
          id: "erfafscheiding-01",
          src: "/img/projecten/erfafscheiding-01.jpg",
          w: 1200,
          h: 1600,
          alt: "Aluminium trap voor een schuur van baksteen en donker hout. Betongaas staat tegen de muur, met een stapel stenen op de voorgrond.",
        },
        {
          id: "erfafscheiding-02",
          src: "/img/projecten/erfafscheiding-02.jpg",
          w: 1200,
          h: 1600,
          alt: "Lange rij betongaas op houten palen langs een schuur, met een kruiwagen in de open sleuf.",
        },
        {
          id: "erfafscheiding-03",
          src: "/img/projecten/erfafscheiding-03.jpg",
          w: 1600,
          h: 1200,
          alt: "Betongaas rond een gazon, langs de schuur en verder de tuin in.",
        },
        {
          id: "erfafscheiding-04",
          src: "/img/projecten/erfafscheiding-04.jpg",
          w: 1200,
          h: 1600,
          alt: "Houten paal en betongaas in een sleuf langs een bakstenen muur.",
        },
        {
          id: "erfafscheiding-05",
          src: "/img/projecten/erfafscheiding-05.jpg",
          w: 1200,
          h: 1600,
          alt: "Betongaas op palen, met omgewoelde grond aan de voet.",
        },
        {
          id: "erfafscheiding-06",
          src: "/img/projecten/erfafscheiding-06.jpg",
          w: 1200,
          h: 1600,
          alt: "Strook verse aarde langs het betongaas, naast het gazon en de schuur.",
        },
        {
          id: "erfafscheiding-07",
          src: "/img/projecten/erfafscheiding-07.jpg",
          w: 1200,
          h: 1600,
          alt: "Jonge hedera langs het gaas, net geplant, met lege zwarte potten op het gras.",
        },
        {
          id: "erfafscheiding-08",
          src: "/img/projecten/erfafscheiding-08.jpg",
          w: 1600,
          h: 1200,
          alt: "Jonge hedera aan de voet van het betongaas langs de schuur, met een berg zand op de voorgrond.",
        },
        {
          id: "erfafscheiding-09",
          src: "/img/projecten/erfafscheiding-09.jpg",
          w: 1600,
          h: 1200,
          alt: "Betongaas met jonge hedera langs de schuur en verder de tuin in, naast een strook zwarte grond en gazon.",
        },
      ],
    },
    {
      slug: "natuurlijk-gebied",
      title: "Herinrichting natuurlijk gebied",
      caption:
        "Dit stuk grond wordt in ± 1 jaar helemaal ‘natuurlijk’ ingericht met een grote vijver, gras en beplanting.",
      note: "Een stuk grond dat natuurlijk wordt ingericht met een grote vijver, gras en beplanting; hier het graaf- en grondwerk. Een afgewerkte vijver staat niet op de foto’s.",
      photos: [
        {
          id: "natuurlijk-01",
          src: "/img/projecten/natuurlijk-01.jpg",
          w: 1600,
          h: 1200,
          alt: "Groen gemaaid veld achter een lage afrastering van palen en draad, met een hoge haag en bomen.",
        },
        {
          id: "natuurlijk-02",
          src: "/img/projecten/natuurlijk-02.jpg",
          w: 1600,
          h: 1200,
          alt: "Droog, geelbruin gazon, omzoomd door een hoge haag.",
        },
        {
          id: "natuurlijk-03",
          src: "/img/projecten/natuurlijk-03.jpg",
          w: 1600,
          h: 1200,
          alt: "Oranje trekker freest een gazon om. De voorgrond is losse, zwarte grond.",
        },
        {
          id: "natuurlijk-04",
          src: "/img/projecten/natuurlijk-04.jpg",
          w: 1600,
          h: 1200,
          alt: "Houten tuinhuis met een rond terras van klinkers, hangende planten en een gazon ervoor.",
        },
        {
          id: "natuurlijk-05",
          src: "/img/projecten/natuurlijk-05.jpg",
          w: 1200,
          h: 1600,
          alt: "Gele graafmachine tilt een kluit grond en wortels uit de bodem, naast een conifeer.",
        },
        {
          id: "natuurlijk-06",
          src: "/img/projecten/natuurlijk-06.jpg",
          w: 1600,
          h: 1200,
          alt: "Gele graafmachine werkt een groot open vlak zand vlak. Piketten markeren de rand.",
        },
        {
          id: "natuurlijk-07",
          src: "/img/projecten/natuurlijk-07.jpg",
          w: 1200,
          h: 1600,
          alt: "Uitgegraven kuil in donkere en gele zandgrond, met graafsporen. Er staat geen water in.",
        },
        {
          id: "natuurlijk-08",
          src: "/img/projecten/natuurlijk-08.jpg",
          w: 1200,
          h: 1600,
          alt: "Gele graafmachine naast een brede, onaffe kuil in zandgrond.",
        },
      ],
    },
    {
      slug: "vorm-en-hagensnoei",
      title: "Vorm- en hagensnoei",
      caption: "Diverse foto’s van soorten hagen en knipwijzen.",
      photos: [
        {
          id: "hagen-01",
          src: "/img/projecten/hagen-01.jpg",
          w: 1600,
          h: 1200,
          alt: "Lage, strak geknipte hagen in een slingerend patroon, met vaste planten en hortensia’s.",
        },
        {
          id: "hagen-02",
          src: "/img/projecten/hagen-02.jpg",
          w: 1200,
          h: 1600,
          alt: "Van bovenaf: lage geknipte hagen langs een grindpad, met een heggenschaar op de haag en een oranje bol op het grind.",
        },
        {
          id: "hagen-03",
          src: "/img/projecten/hagen-03.jpg",
          w: 1600,
          h: 1200,
          alt: "Lage geknipte hagen en grindpaden, met hortensia’s en een witte bus langs de straat.",
        },
        {
          id: "hagen-04",
          src: "/img/projecten/hagen-04.jpg",
          w: 1200,
          h: 1600,
          alt: "Blokvormig geknipte haag op een bakstenen voet, met een opening tot op het metselwerk.",
        },
        {
          id: "hagen-05",
          src: "/img/projecten/hagen-05.jpg",
          w: 1600,
          h: 1200,
          alt: "Strak geschoren hoge haag langs een gazon, tussen een bakstenen huis en een huis met een rieten kap.",
        },
        {
          id: "hagen-06",
          src: "/img/projecten/hagen-06.jpg",
          w: 1200,
          h: 1600,
          alt: "Lage haag tussen een terras van grote tegels en een border met hoge grassen.",
        },
        {
          id: "hagen-07",
          src: "/img/projecten/hagen-07.jpg",
          w: 1600,
          h: 1200,
          alt: "Lage hagen vormen vakken met lavendel, gezien van boven, met grind en een zwart hek.",
        },
        {
          id: "hagen-08",
          src: "/img/projecten/hagen-08.jpg",
          w: 1600,
          h: 1200,
          alt: "Lage hagen vormen vakken met lavendel voor een bakstenen gevel met een gestreept zonnescherm, grind erlangs en een zwart hek.",
        },
        {
          id: "hagen-09",
          src: "/img/projecten/hagen-09.jpg",
          w: 1200,
          h: 1600,
          alt: "Grindpad langs blokvormig geknipte hagen en een hoge geschoren haag, met bomen erboven.",
        },
        {
          id: "hagen-10",
          src: "/img/projecten/hagen-10.jpg",
          w: 1200,
          h: 1600,
          alt: "Hoge, dichte geschoren haag langs een border met siergras en vaste planten.",
        },
        {
          id: "hagen-11",
          src: "/img/projecten/hagen-11.jpg",
          w: 1600,
          h: 1200,
          alt: "Lage, strak geknipte haag langs een bakstenen huis. Snoeisel ligt op het gazon en een heggenschaar ligt op de haag.",
        },
      ],
    },
  ] as Project[],
};

export function getProject(slug: string) {
  return content.projects.find((project) => project.slug === slug);
}

export function photoById(id: string): Photo {
  for (const project of content.projects) {
    const photo = project.photos.find((item) => item.id === id);
    if (photo) return photo;
  }
  const extra = Object.values(content.extraPhotos).find((item) => item.id === id);
  if (!extra) {
    throw new Error(`Onbekende foto: ${id}`);
  }
  return extra;
}
