import Image from "next/image";
import type { ReactNode } from "react";
import AnimatedSection from "../AnimatedSection";

type Venture = {
  name: string;
  period: string;
  valuation: string;
  description: Array<{ id: string; content: ReactNode }>;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  cta: {
    label: string;
    href: string;
  };
};

const VENTURES: Venture[] = [
  {
    name: "Aircall",
    period: "2014 - Nos jours",
    valuation: "Valorisation actuelle : 1.200.000.000 \u20ac",
    description: [
      { id: "aircall-1", content: "J'ai co-fond\u00e9 Aircall en 2014." },
      { id: "aircall-2", content: "En 2014, nous \u00e9tions une petite \u00e9quipe \u00e0 Paris." },
      {
        id: "aircall-3",
        content:
          "Nous avons lev\u00e9 un total de 226 millions de dollars aupr\u00e8s d'investisseurs comme Goldman Sachs.",
      },
      {
        id: "aircall-4",
        content: (
          <strong>
            {"Aujourd'hui nous employons plus de 700 salari\u00e9s avec des bureaux \u00e0 Paris, Londres, Sydney, Berlin, Madrid, Mexico et New York."}
          </strong>
        ),
      },
      {
        id: "aircall-5",
        content: (
          <strong>
            {"R\u00e9cemment, Aircall a atteint un chiffre d'affaires annuel r\u00e9current de plus de 200 millions de dollars."}
          </strong>
        ),
      },
    ],
    image: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6797ce0caebda_1copie.png",
      width: 560,
      height: 400,
      alt: "Aircall - la startup co-fond\u00e9e par Jonathan Anguelov",
    },
    cta: {
      label: "En savoir plus",
      href: "https://aircall.io/",
    },
  },
  {
    name: "Aguesseau Capital",
    period: "2019 - Nos jours",
    valuation: "Valorisation actuelle : 105.000.000 \u20ac",
    description: [
      { id: "aguesseau-1", content: "Aguesseau Capital est mon fonds d'investissement immobilier." },
      {
        id: "aguesseau-2",
        content: (
          <>
            {"Cr\u00e9\u00e9 en 2018 avec 3 millions d'euros, "}
            <strong>{"nous avons d\u00e9pass\u00e9 les 100 millions d'euros d'actifs en moins de 5 ans."}</strong>
          </>
        ),
      },
      {
        id: "aguesseau-3",
        content:
          "Nous avons achet\u00e9 plus de 40 immeubles et poss\u00e9dons 6 h\u00f4tels dans Paris, tels que Maison Barb\u00e8s, Maison du Moulin Vert ou Maison I\u00e9na.",
      },
      {
        id: "aguesseau-4",
        content: (
          <strong>{"Vous pouvez investir \u00e0 nos c\u00f4t\u00e9s et obtenir des rendements jusqu'\u00e0 20 % de TRI."}</strong>
        ),
      },
    ],
    image: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6797ce173950e_2copie.png",
      width: 560,
      height: 400,
      alt: "Aguesseau Capital - le fonds immobilier co-fond\u00e9 par Jonathan Anguelov",
    },
    cta: {
      label: "En savoir plus",
      href: "https://aguesseaucapital.com/",
    },
  },
];

export default function VenturesSection() {
  return (
    <AnimatedSection animation="slideUp">
      <section className="bg-[#f5f8fc] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp">
          <h2
            className="text-3xl font-black leading-tight text-[#012634] sm:text-4xl lg:text-5xl"
            style={{ fontWeight: "900" }}
          >
            Mes business
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {VENTURES.map((venture) => (
            <article
              key={venture.name}
              className="flex h-full w-full flex-col rounded-[32px] bg-white p-10 shadow-[0_30px_80px_-45px_rgba(1,38,52,0.35)] ring-1 ring-[#dce4ec]"
            >
              <div className="relative flex h-24 w-full items-center justify-center overflow-hidden rounded-3xl sm:h-32">
                <Image
                  src={venture.image.src}
                  alt={venture.image.alt}
                  className="h-full w-full object-contain"
                  width={venture.image.width * 1.5}
                  height={venture.image.height * 1.5}
                />
              </div>

              <div className="mt-8 space-y-2">
                <h3 className="text-3xl font-semibold text-[#012634] sm:text-[34px]">{venture.name}</h3>
                <p className="text-base font-semibold uppercase tracking-[0.2em] text-[#012634]/70 sm:text-lg">
                  {venture.period}
                </p>
                <p className="text-base text-[#012634]/70 sm:text-lg">{venture.valuation}</p>
              </div>

              <div className="mt-6 flex-1 space-y-3 text-base leading-relaxed text-[#012634]/80 sm:text-lg">
                {venture.description.map((item) => (
                  <p key={item.id}>{item.content}</p>
                ))}
              </div>

              <a
                href={venture.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-[#012634] px-6 py-4 text-base font-semibold text-white shadow-[0_14px_30px_-16px_rgba(1,38,52,0.6)] transition hover:bg-[#023347] sm:w-auto"
              >
                {venture.cta.label}
              </a>
            </article>
          ))}
        </div>
      </div>
      </section>
    </AnimatedSection>
  );
}
