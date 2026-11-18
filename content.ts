/**
 * Alle feiten komen van hovenier-ikink.nl (geverifieerd 18 nov 2026).
 * Niets verzinnen: geen reviews, openingstijden, socials, prijzen of garanties.
 * Slug blijft "ikink-demo" (data-demo van de Sleads-analytics).
 */

export type Photo = {
  id: string;
  src: string;
  alt: string;
  /** Korte, zichtbare regel: alleen wat op de foto te zien is. */
  blik: string;
  w: number;
  h: number;
};

export type Project = {
  slug: string;
  title: string;
  caption: string;
  note?: string;
  cardLine?: string;
  lead: string;
  specs?: string[];
  relatedHref: string;
  relatedLabel: string;
  photos: Photo[];
};

export type Work = {
  label: string;
  short: string;
  text: string;
  href?: string;
  photoId?: string;
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
      photoId: "hagen-05",
      short: "Bestaande tuinen bijhouden, voor particulieren en bedrijven.",
      text: "Bestaande tuinen bijhouden: snoei, maaien en de beplanting in orde houden. Dat geldt voor particulieren en voor bedrijven. Hagen in verschillende knipwijzen staan bij het project Vorm- en hagensnoei.",
    },
    {
      label: "Aanleg tuinen",
      href: "/aanleg",
      photoId: "terras-03",
      short: "Van ontwerp tot aanleg. Terras, pad, gazon of beplanting stemt u af.",
      text: "Nieuwe tuinen, van ontwerp tot aanleg. Een terras, een pad, een gazon of nieuwe beplanting bespreekt u per tuin. Het lounge-terras laat de gang zien van zandbed tot straatwerk.",
    },
    {
      label: "Tuinrenovatie",
      href: "/renovatie",
      photoId: "natuurlijk-03",
      short: "Een bestaande tuin opnieuw indelen, te beginnen bij het grondwerk.",
      text: "Een bestaande tuin opnieuw indelen. Grondwerk en een nieuwe opzet horen daarbij. Het eindbeeld hangt van de tuin af. Bij de herinrichting van een natuurlijk terrein is het graaf- en grondwerk te zien.",
    },
    {
      label: "Levering alle (tuin)materialen",
      photoId: "terras-02",
      short: "Materialen in overleg. Bij het terras: Basolo Morano en Redtumb Coal.",
      text: "Materialen voor de tuin kunnen worden geleverd. Welke, spreekt u af. Bij het lounge-terras is betonsteen getrommeld Basolo Morano gebruikt, met kopsteen Redtumb Coal.",
    },
    {
      label: "Snoeien, zagen en maaien",
      href: "/onderhoud",
      photoId: "hagen-11",
      short: "Hagen, heesters, bomen en gras.",
      text: "Hagen, heesters, bomen en gras. Op de foto’s staan lage vakken, een blokvorm en hoge geschoren hagen, elk met een eigen knipwijze.",
    },
    {
      label: "Planten, zaaien en kweken",
      href: "/onderhoud",
      photoId: "hagen-01",
      short: "Nieuwe beplanting, afgestemd per tuin.",
      text: "Nieuwe beplanting, zaaien en kweken. Soorten en aantallen bespreekt u per tuin. Op de foto’s van de hagen staan onder meer lavendel, hortensia’s, siergras en vaste planten.",
    },
    {
      label: "Gazons",
      href: "/onderhoud",
      photoId: "natuurlijk-02",
      short: "Aanleg en onderhoud van gazon, inclusief maaien.",
      text: "Aanleg en onderhoud van gazon, inclusief maaien. Op de foto’s van de herinrichting ligt eerst een gazon binnen een hoge haag; daarna freest een trekker die grasmat om.",
    },
    {
      label: "Vijvers",
      href: "/vijvers-en-schuttingen",
      photoId: "natuurlijk-07",
      short: "Graafwerk voor een vijver. Op de foto’s nog zonder water.",
      text: "Graafwerk voor een vijver hoort bij het werk. De foto’s tonen de start: een kuil in zandgrond, nog zonder water. Een afgewerkte vijver staat er niet bij.",
    },
    {
      label: "Schuttingen/erfafscheidingen",
      href: "/vijvers-en-schuttingen",
      photoId: "erfafscheiding-02",
      short: "Erfafscheiding, zoals betongaas met hedera.",
      text: "Erfafscheiding, zoals betongaas met hedera. De projectfoto’s laten palen, gaas langs een schuur en de tuin, en jonge, net geplante hedera zien.",
    },
    {
      label: "Reparatie-/opruimwerkzaamheden",
      short: "Opruimen, reparatie en kleine klussen, ook buiten de tuin.",
      text: "Reparatie en opruimen in en om de tuin. Ook kleine klussen die niet bij de tuin horen, buiten of binnen, kunt u voorleggen.",
    },
    {
      label: "Advies",
      href: "/contact",
      photoId: "bus",
      short: "Advies over tuin, groen en materialen.",
      text: "Advies over tuin, groen en materialen, van ontwerp tot de keuze van wat er geleverd wordt. U bereikt het bedrijf per telefoon of per mail.",
    },
  ] as Work[],

  extraPhotos: {
    bus: {
      id: "bus",
      src: "/img/bus.jpg",
      w: 1600,
      h: 1200,
      alt: "Witte bedrijfsbus geparkeerd langs de stoep, met een huis met rieten kap en een grote conifeer op de achtergrond.",
      blik: "Witte bedrijfsbus langs de stoep, met een rieten kap en een conifeer erachter.",
    },
    werk: {
      id: "werk-staand",
      src: "/img/werk-staand.jpg",
      w: 1200,
      h: 1600,
      alt: "Terras in aanleg met gemengde grijze en roodbruine tegels naast een bakstenen muur. Een glazen windscherm staat schuin tegen de muur.",
      blik: "Een ander terras in aanleg: gemengde grijze en roodbruine tegels, een bakstenen muur en een schuin glazen windscherm.",
    },
  } satisfies Record<string, Photo>,

  projects: [
    {
      slug: "lounge-terras",
      title: "Aanleg “Lounge terras”",
      caption:
        "Lounge terras ± 40 m². Materiaal betonsteen getrommeld Basolo Morano 22,5 × 15 × 8 cm. Kopsteen/opsluiting Redtumb Coal 20 × 30 cm.",
      note: "De foto’s lopen van zandbed tot terras.",
      cardLine: "De foto’s lopen van zandbed tot terras.",
      lead: "De reeks begint bij het lossen van zand en eindigt bij de loungeset op het straatwerk. Daartussen liggen het zandbed, de stapels stenen en het leggen van de getrommelde betonstenen. Alleen bij dit project lopen de foto’s zo van begin tot eind.",
      relatedHref: "/aanleg",
      relatedLabel: "Aanleg van tuinen",
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
          blik: "Zand wordt gelost op een gazon.",
        },
        {
          id: "terras-02",
          src: "/img/projecten/terras-02.jpg",
          w: 1600,
          h: 1200,
          alt: "Twee pakketten grijze betonstenen naast een berg zand, met een schep en een trilplaat.",
          blik: "Pakketten grijze stenen, een berg zand, een schep en een trilplaat.",
        },
        {
          id: "terras-03",
          src: "/img/projecten/terras-03.jpg",
          w: 1600,
          h: 1200,
          alt: "Afgevlakt zandbed met een gebogen rand, klaar om te bestraten. Stapels stenen staan op de voorgrond.",
          blik: "Het zandbed ligt vlak, met een gebogen rand. Stapels stenen staan ervoor.",
        },
        {
          id: "terras-04",
          src: "/img/projecten/terras-04.jpg",
          w: 1600,
          h: 1200,
          alt: "Hoek van een terras in aanleg: getrommelde stenen in halfsteensverband met een donkere opsluitband, naast open zand.",
          blik: "De hoek van het straatwerk, halfsteens, met een donkere opsluitband langs open zand.",
        },
        {
          id: "terras-05",
          src: "/img/projecten/terras-05.jpg",
          w: 1600,
          h: 1200,
          alt: "Deels bestraat terras, met pakketten stenen, een witte bus en een aanhanger op de oprit.",
          blik: "Een deel van het terras ligt erin. Pakketten, een witte bus en een aanhanger staan op de oprit.",
        },
        {
          id: "terras-06",
          src: "/img/projecten/terras-06.jpg",
          w: 1600,
          h: 1200,
          alt: "Detail van het straatwerk: een lichte natuursteenplaat met een zwarte parasolvoet, een waterpas erlangs, omringd door getrommelde stenen.",
          blik: "Een lichte plaat met parasolvoet in het straatwerk, een waterpas erlangs.",
        },
        {
          id: "terras-07",
          src: "/img/projecten/terras-07.jpg",
          w: 1600,
          h: 1200,
          alt: "Bijna rondom bestraat terras met een lichte plaat in het midden en een haag langs de rand.",
          blik: "Het terras is bijna rondom bestraat, met een lichte plaat in het midden en een haag langs de rand.",
        },
        {
          id: "terras-08",
          src: "/img/projecten/terras-08.jpg",
          w: 1600,
          h: 1200,
          alt: "Detail van de hoek: getrommelde stenen en een grijze opsluitband tegen de aarde.",
          blik: "Detail van de hoek: getrommelde stenen en een grijze opsluitband tegen de aarde.",
        },
        {
          id: "terras-09",
          src: "/img/projecten/terras-09.jpg",
          w: 1600,
          h: 1200,
          alt: "Lichte plaat met parasolvoet in het straatwerk, met zand en kale grond erachter.",
          blik: "De lichte plaat met parasolvoet, met zand en kale grond erachter.",
        },
        {
          id: "terras-10",
          src: "/img/projecten/terras-10.jpg",
          w: 1600,
          h: 1200,
          alt: "Afgewerkt terras met een rotan loungeset: twee banken, twee stoelen en twee lage tafels, in een tuin met kale grond eromheen.",
          blik: "De loungeset staat op het afgewerkte terras. Eromheen ligt nog kale grond.",
        },
      ],
    },
    {
      slug: "erfafscheidingen",
      title: "Erfafscheidingen",
      caption:
        "Voorbeelden van aanleg erfafscheiding, zoals bijvoorbeeld betongaas met hedera.",
      lead: "De foto’s zijn voorbeelden van een erfafscheiding: palen, betongaas langs een schuur en de tuin, en jonge hedera die net geplant is. Hoe de begroeiing er later uitziet, is op deze reeks nog niet te zien.",
      relatedHref: "/vijvers-en-schuttingen",
      relatedLabel: "Vijvers en schuttingen",
      photos: [
        {
          id: "erfafscheiding-01",
          src: "/img/projecten/erfafscheiding-01.jpg",
          w: 1200,
          h: 1600,
          alt: "Aluminium trap voor een schuur van baksteen en donker hout. Betongaas staat tegen de muur, met een stapel stenen op de voorgrond.",
          blik: "Een trap voor een schuur. Betongaas staat tegen de muur, stenen liggen op de voorgrond.",
        },
        {
          id: "erfafscheiding-02",
          src: "/img/projecten/erfafscheiding-02.jpg",
          w: 1200,
          h: 1600,
          alt: "Lange rij betongaas op houten palen langs een schuur, met een kruiwagen in de open sleuf.",
          blik: "Betongaas op palen langs de schuur, een kruiwagen in de sleuf.",
        },
        {
          id: "erfafscheiding-03",
          src: "/img/projecten/erfafscheiding-03.jpg",
          w: 1600,
          h: 1200,
          alt: "Betongaas rond een gazon, langs de schuur en verder de tuin in.",
          blik: "Het gaas loopt rond een gazon, langs de schuur en verder de tuin in.",
        },
        {
          id: "erfafscheiding-04",
          src: "/img/projecten/erfafscheiding-04.jpg",
          w: 1200,
          h: 1600,
          alt: "Houten paal en betongaas in een sleuf langs een bakstenen muur.",
          blik: "Paal en gaas in een sleuf langs een bakstenen muur.",
        },
        {
          id: "erfafscheiding-05",
          src: "/img/projecten/erfafscheiding-05.jpg",
          w: 1200,
          h: 1600,
          alt: "Betongaas op palen, met omgewoelde grond aan de voet.",
          blik: "Palen en gaas, met omgewoelde grond aan de voet.",
        },
        {
          id: "erfafscheiding-06",
          src: "/img/projecten/erfafscheiding-06.jpg",
          w: 1200,
          h: 1600,
          alt: "Strook verse aarde langs het betongaas, naast het gazon en de schuur.",
          blik: "Een strook verse aarde langs het gaas, naast gazon en schuur.",
        },
        {
          id: "erfafscheiding-07",
          src: "/img/projecten/erfafscheiding-07.jpg",
          w: 1200,
          h: 1600,
          alt: "Jonge hedera langs het gaas, net geplant, met lege zwarte potten op het gras.",
          blik: "Jonge hedera, net geplant, met lege potten op het gras.",
        },
        {
          id: "erfafscheiding-08",
          src: "/img/projecten/erfafscheiding-08.jpg",
          w: 1600,
          h: 1200,
          alt: "Jonge hedera aan de voet van het betongaas langs de schuur, met een berg zand op de voorgrond.",
          blik: "Jonge hedera aan de voet van het gaas, een berg zand ervoor.",
        },
        {
          id: "erfafscheiding-09",
          src: "/img/projecten/erfafscheiding-09.jpg",
          w: 1600,
          h: 1200,
          alt: "Betongaas met jonge hedera langs de schuur en verder de tuin in, naast een strook zwarte grond en gazon.",
          blik: "Gaas met jonge hedera langs de schuur en de tuin, naast zwarte grond en gazon.",
        },
      ],
    },
    {
      slug: "natuurlijk-gebied",
      title: "Herinrichting natuurlijk gebied",
      caption:
        "Dit stuk grond wordt in ± 1 jaar helemaal ‘natuurlijk’ ingericht met een grote vijver, gras en beplanting.",
      note: "Een stuk grond dat natuurlijk wordt ingericht met een grote vijver, gras en beplanting; hier het graaf- en grondwerk. Een afgewerkte vijver staat niet op de foto’s.",
      cardLine: "Hier het graaf- en grondwerk.",
      lead: "Eerst ligt er een gazon binnen een hoge haag. Daarna freest een trekker de grasmat om, vlakt een graafmachine het zand en ontstaat een kuil. Water staat er niet in. De eigen toelichting beschrijft het plan: in ongeveer een jaar een natuurlijke inrichting met een grote vijver, gras en beplanting.",
      relatedHref: "/renovatie",
      relatedLabel: "Tuinrenovatie",
      photos: [
        {
          id: "natuurlijk-01",
          src: "/img/projecten/natuurlijk-01.jpg",
          w: 1600,
          h: 1200,
          alt: "Groen gemaaid veld achter een lage afrastering van palen en draad, met een hoge haag en bomen.",
          blik: "Een gemaaid veld achter palen en draad, met een hoge haag en bomen.",
        },
        {
          id: "natuurlijk-02",
          src: "/img/projecten/natuurlijk-02.jpg",
          w: 1600,
          h: 1200,
          alt: "Droog, geelbruin gazon, omzoomd door een hoge haag.",
          blik: "Een droog, geelbruin gazon binnen een hoge haag.",
        },
        {
          id: "natuurlijk-03",
          src: "/img/projecten/natuurlijk-03.jpg",
          w: 1600,
          h: 1200,
          alt: "Oranje trekker freest een gazon om. De voorgrond is losse, zwarte grond.",
          blik: "Een trekker freest het gazon om. Vooraan ligt losse grond.",
        },
        {
          id: "natuurlijk-04",
          src: "/img/projecten/natuurlijk-04.jpg",
          w: 1600,
          h: 1200,
          alt: "Houten tuinhuis met een rond terras van klinkers, hangende planten en een gazon ervoor.",
          blik: "Een tuinhuis met een rond klinkerterras, hangplanten en gazon ervoor.",
        },
        {
          id: "natuurlijk-05",
          src: "/img/projecten/natuurlijk-05.jpg",
          w: 1200,
          h: 1600,
          alt: "Gele graafmachine tilt een kluit grond en wortels uit de bodem, naast een conifeer.",
          blik: "Een graafmachine tilt een kluit met wortels uit de grond, naast een conifeer.",
        },
        {
          id: "natuurlijk-06",
          src: "/img/projecten/natuurlijk-06.jpg",
          w: 1600,
          h: 1200,
          alt: "Gele graafmachine werkt een groot open vlak zand vlak. Piketten markeren de rand.",
          blik: "Een graafmachine vlakt een open zandvlak. Piketten markeren de rand.",
        },
        {
          id: "natuurlijk-07",
          src: "/img/projecten/natuurlijk-07.jpg",
          w: 1200,
          h: 1600,
          alt: "Uitgegraven kuil in donkere en gele zandgrond, met graafsporen. Er staat geen water in.",
          blik: "Een uitgegraven kuil in zandgrond. Er staat geen water in.",
        },
        {
          id: "natuurlijk-08",
          src: "/img/projecten/natuurlijk-08.jpg",
          w: 1200,
          h: 1600,
          alt: "Gele graafmachine naast een brede, onaffe kuil in zandgrond.",
          blik: "De graafmachine naast een brede, onaffe kuil in zandgrond.",
        },
      ],
    },
    {
      slug: "vorm-en-hagensnoei",
      title: "Vorm- en hagensnoei",
      caption: "Diverse foto’s van soorten hagen en knipwijzen.",
      lead: "Een reeks van hagen en knipwijzen: lage vakken met grind, een blokvorm, een hoge geschoren haag langs een huis, en een lage haag tussen terras en border. Het zijn verschillende tuinen, geen stappen van één werk.",
      relatedHref: "/onderhoud",
      relatedLabel: "Onderhoud van tuinen",
      photos: [
        {
          id: "hagen-01",
          src: "/img/projecten/hagen-01.jpg",
          w: 1600,
          h: 1200,
          alt: "Lage, strak geknipte hagen in een slingerend patroon, met vaste planten en hortensia’s.",
          blik: "Lage hagen in een slinger, met vaste planten en hortensia’s.",
        },
        {
          id: "hagen-02",
          src: "/img/projecten/hagen-02.jpg",
          w: 1200,
          h: 1600,
          alt: "Van bovenaf: lage geknipte hagen langs een grindpad, met een heggenschaar op de haag en een oranje bol op het grind.",
          blik: "Van boven: lage hagen langs een grindpad, een heggenschaar op de haag.",
        },
        {
          id: "hagen-03",
          src: "/img/projecten/hagen-03.jpg",
          w: 1600,
          h: 1200,
          alt: "Lage geknipte hagen en grindpaden, met hortensia’s en een witte bus langs de straat.",
          blik: "Lage hagen en grindpaden, hortensia’s, een witte bus langs de straat.",
        },
        {
          id: "hagen-04",
          src: "/img/projecten/hagen-04.jpg",
          w: 1200,
          h: 1600,
          alt: "Blokvormig geknipte haag op een bakstenen voet, met een opening tot op het metselwerk.",
          blik: "Een blokvormige haag op een bakstenen voet, met een opening tot op het metselwerk.",
        },
        {
          id: "hagen-05",
          src: "/img/projecten/hagen-05.jpg",
          w: 1600,
          h: 1200,
          alt: "Strak geschoren hoge haag langs een gazon, tussen een bakstenen huis en een huis met een rieten kap.",
          blik: "Een hoge, strak geschoren haag langs een gazon, tussen een bakstenen huis en een huis met een rieten kap.",
        },
        {
          id: "hagen-06",
          src: "/img/projecten/hagen-06.jpg",
          w: 1200,
          h: 1600,
          alt: "Lage haag tussen een terras van grote tegels en een border met hoge grassen.",
          blik: "Een lage haag tussen een terras van grote tegels en een border met hoge grassen.",
        },
        {
          id: "hagen-07",
          src: "/img/projecten/hagen-07.jpg",
          w: 1600,
          h: 1200,
          alt: "Lage hagen vormen vakken met lavendel, gezien van boven, met grind en een zwart hek.",
          blik: "Lage hagen als vakken met lavendel, van boven, met grind en een zwart hek.",
        },
        {
          id: "hagen-08",
          src: "/img/projecten/hagen-08.jpg",
          w: 1600,
          h: 1200,
          alt: "Lage hagen vormen vakken met lavendel voor een bakstenen gevel met een gestreept zonnescherm, grind erlangs en een zwart hek.",
          blik: "Lage hagen als vakken met lavendel, voor een gevel met een gestreept zonnescherm.",
        },
        {
          id: "hagen-09",
          src: "/img/projecten/hagen-09.jpg",
          w: 1200,
          h: 1600,
          alt: "Grindpad langs blokvormig geknipte hagen en een hoge geschoren haag, met bomen erboven.",
          blik: "Een grindpad langs blokvormige hagen en een hoge geschoren haag.",
        },
        {
          id: "hagen-10",
          src: "/img/projecten/hagen-10.jpg",
          w: 1200,
          h: 1600,
          alt: "Hoge, dichte geschoren haag langs een border met siergras en vaste planten.",
          blik: "Een hoge dichte haag langs een border met siergras en vaste planten.",
        },
        {
          id: "hagen-11",
          src: "/img/projecten/hagen-11.jpg",
          w: 1600,
          h: 1200,
          alt: "Lage, strak geknipte haag langs een bakstenen huis. Snoeisel ligt op het gazon en een heggenschaar ligt op de haag.",
          blik: "Een lage haag langs een bakstenen huis. Snoeisel ligt op het gazon, een heggenschaar op de haag.",
        },
      ],
    },
  ] as Project[],

  copy: {
    homeMore:
      "U bent aan het juiste adres voor alles op het gebied van tuinen en groen: ontwerp, aanleg, onderhoud, renovatie, advies en levering van materialen.",
    homeClose:
      "Ook voor opruimwerkzaamheden en kleine (niet tuingerelateerde) klussen, buiten of binnen, kunt u contact opnemen.",
    aanleg: [
      "Aanleg van tuinen hoort bij het werk van Hoveniersbedrijf Felix Ikink, van ontwerp tot aanleg. Dat geldt voor particulieren en voor bedrijven.",
      "Een terras, een pad, een gazon of nieuwe beplanting: u bespreekt wat er moet komen. Materialen kunnen worden geleverd. Welke, spreekt u af.",
      "Het lounge-terras is het werk waarvan de foto’s de hele gang laten zien, van zandbed tot terras. Het vlak is ongeveer 40 m². De steen is betonsteen getrommeld Basolo Morano, de opsluiting is Redtumb Coal.",
    ],
    onderhoudIntro:
      "Onderhoud van tuinen: snoeien, zagen en maaien, gazons, en planten, zaaien en kweken. Voor particulieren en voor bedrijven. Een tuin die er eenmaal ligt, vraagt snoei, maaiwerk en nieuwe planten.",
    onderhoud: [
      {
        title: "Snoeien, zagen en maaien",
        text: "Hagen, heesters, bomen en gras. De vorm volgt de haag die er staat: laag en in vakken, blokvormig, of hoog en strak langs een huis. Op de foto’s ligt soms snoeisel op het gazon, met een heggenschaar op de haag.",
      },
      {
        title: "Gazons",
        text: "Maaien en het bijhouden van bestaand gazon. Nieuwe gazons horen bij aanleg en renovatie. Op de herinrichting is een gazon te zien, en daarna het omfrezen van die grasmat.",
      },
      {
        title: "Planten, zaaien en kweken",
        text: "Nieuwe planten, zaaien en kweken. Welke soorten, spreekt u af. Tussen de hagen op de foto’s staan onder meer lavendel, hortensia’s, siergras en vaste planten.",
      },
    ],
    renovatie: [
      "Tuinrenovatie is het opnieuw inrichten van een bestaande tuin. Daar horen grondwerk, een nieuwe indeling en beplanting bij. Het eindbeeld hangt van de tuin af.",
      "Een voorbeeld is de herinrichting van een natuurlijk gebied. De eigen toelichting: dit stuk grond wordt in ± 1 jaar helemaal natuurlijk ingericht, met een grote vijver, gras en beplanting.",
    ],
    vijversErf:
      "Schuttingen en andere erfafscheidingen worden aangelegd. Een voorbeeld op de foto’s is betongaas op houten palen, met daarna jonge hedera aan de voet. U ziet de palen, het gaas langs een schuur, de sleuf en de net geplante hedera.",
    vijversWater:
      "Voor een vijver begint het bij het graafwerk. Een stuk grond dat natuurlijk wordt ingericht met een grote vijver, gras en beplanting; hier het graaf- en grondwerk. Een afgewerkte vijver staat niet op de foto’s. Er staat geen water in de kuil.",
    overSteps: [
      { label: "Opleiding", text: "Uitvoerder Hoveniersbedrijf." },
      { label: "Stages", text: "Verschillende stages in binnen- en buitenland." },
      { label: "In de regio", text: "Vijf jaar werkervaring bij diverse hoveniersbedrijven in de regio." },
      { label: "Zelfstandig", text: "Gestart als zelfstandige in mei 2013." },
    ],
    kleineKlussen:
      "Ook voor opruimwerkzaamheden en kleine (niet tuingerelateerde) klussen, buiten of binnen, kunt u contact opnemen.",
  },
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
