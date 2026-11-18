import type { Metadata, Viewport } from "next";
import { Brygada_1918, Onest, Sometype_Mono } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

const display = Brygada_1918({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  variable: "--font-brygada",
  display: "swap",
});

const sans = Onest({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-onest",
  display: "swap",
});

const mono = Sometype_Mono({
  subsets: ["latin", "latin-ext"],
  weight: "500",
  variable: "--font-sometype",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s | Hovenier Ikink",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  icons: { icon: content.company.logoPng },
};

export const viewport: Viewport = { themeColor: content.colors.buxus };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--buxus": c.buxus,
  "--blad": c.blad,
  "--aarde": c.aarde,
  "--grind": c.grind,
  "--stip": c.stip,
  "--papier": c.papier,
  "--inkt": c.inkt,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col">
        <Header
          nav={content.nav}
          phoneTel={content.company.phoneTel}
          phoneDisplay={content.company.phoneDisplay}
          logo={content.company.logo}
          logoPng={content.company.logoPng}
          logoAlt={content.company.name}
        />
        <div className="flex-1">{children}</div>
        <Footer />
        <MobileBar phoneTel={content.company.phoneTel} />
      </body>
    </html>
  );
}
