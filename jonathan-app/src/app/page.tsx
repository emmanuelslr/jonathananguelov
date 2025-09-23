import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import HomeHero from "@/components/home/HomeHero";
import PressLogos from "@/components/home/PressLogos";
import OfferHighlights from "@/components/home/OfferHighlights";
import BioSection from "@/components/home/BioSection";
import PressFeatures from "@/components/home/PressFeatures";
import ArticlesSection from "@/components/home/ArticlesSection";
import VenturesSection from "@/components/home/VenturesSection";
import PodcastsSection from "@/components/home/PodcastsSection";
import ConferencesSection from "@/components/home/ConferencesSection";
import BookSection from "@/components/home/BookSection";
import TelevisionSection from "@/components/home/TelevisionSection";
import VideosSection from "@/components/home/VideosSection";
import FooterSection from "@/components/home/FooterSection";

const DESCRIPTION =
  "Site officiel de Jonathan Anguelov – Recevez mes conseils en start-up, tech, immobilier et vente. Mes vidéos, webinaires et événements exclusifs.";

export const metadata: Metadata = {
  title: "Jonathan Anguelov - Site Officiel",
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.jonathananguelov.com/",
  },
  keywords: ["Jonathan Anguelov"],
  authors: [{ name: "Jonathan Anguelov" }],
  openGraph: {
    title: "Jonathan Anguelov - Site Officiel",
    description: DESCRIPTION,
    url: "https://www.jonathananguelov.com/",
    images: [
      {
        url: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67aba0ff68d67_Retouche_PRESSE_.jpg",
        alt: "Jonathan Anguelov - Site Officiel",
      },
    ],
  },
  other: {
    title: "Jonathan Anguelov - Site Officiel",
    author: "Jonathan Anguelov",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <HomeHero />
        <PressLogos />
        <OfferHighlights />
        <BioSection />
        <PressFeatures />
        <ArticlesSection />
        <VenturesSection />
        <PodcastsSection />
        <ConferencesSection />
        <BookSection />
        <TelevisionSection />
        <VideosSection />
        <FooterSection />
      </main>
    </>
  );
}
