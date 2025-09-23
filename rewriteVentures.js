const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "jonathan-app", "src", "components", "home", "VenturesSection.tsx");

const content = `import Image from "next/image";

const VENTURES = [
  {
    name: "Aircall",
    period: "2014 - Nos jours",
    valuation: "Valorisation actuelle : 1 200 000 000 €",
    description: [
      { text: "J'ai cofondé Aircall en 2014." },
      { text: "En 2014, nous étions une petite équipe à Paris." },
      { text: "Nous avons levé un total de 226 millions de dollars auprès d'investisseurs comme Goldman Sachs." },
      { text: "Aujourd'hui nous employons plus de 700 salariés avec des bureaux à Paris, Londres, Sydney, Berlin, Madrid, Mexico et New York.", highlighted: true },
      { text: "Aircall a atteint un chiffre d'affaires annuel récurrent de plus de 200 millions de dollars.", highlighted: true },
    ],
    logo: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6797ce0caebda_1copie.png",
      width: 560,
      height: 400,
      alt: "Logo Aircall",
    },
    cta: {
      label: "En savoir plus",
      href: "https://aircall.io/",
    },
  },
  {
    name: "Aguesseau Capital",
    period: "2019 - Nos jours",
    valuation: "Valorisation actuelle : 105 000 000 €",
    description: [
      { text: "Aguesseau Capital est mon fonds d'investissement immobilier." },
      { text: "Créé en 2018 avec 3 millions d'euros, nous avons dépassé les 100 millions d'euros d'actifs en moins de 5 ans." },
      { text: "Nous avons acheté plus de 40 immeubles et possédons 6 hôtels dans Paris, tels que Maison Barbès, Maison du Moulin Vert ou Maison Iéna.", highlighted: true },
      { text: "Vous pouvez investir à nos côtés et obtenir des rendements jusqu'à 20 % de TRI.", highlighted: true },
    ],
    logo: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6797ce173950e_2copie.png",
      width: 560,
      height: 400,
      alt: "Logo Aguesseau Capital",
    },
    cta: {
      label: "En savoir plus",
      href: "https://aguesseaucapital.com/",
    },
  },
] as const;

export default function VenturesSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold leading-tight text-[#012634] sm:text-4xl">
          Mes business
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {VENTURES.map((venture) => (
            <article
              key={venture.name}
              className="flex h-full flex-col rounded-[32px] bg-[#f5f9fd] p-8 shadow-[0_20px_40px_rgba(1,38,52,0.08)]"
            >
              <div className="flex justify-center">
                <div className="flex h-20 w-36 items-center justify-center rounded-2xl bg-white shadow-inner shadow-black/5">
                  <Image
                    src={venture.logo.src}
                    alt={venture.logo.alt}
                    width={venture.logo.width}
                    height={venture.logo.height}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </div>

              <div className="mt-8 space-y-2 text-[#012634]">
                <h3 className="text-2xl font-semibold">{venture.name}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#012634]/70">
                  {venture.period}
                </p>
                <p className="text-sm text-[#012634]/60">{venture.valuation}</p>
              </div>

              <div className="mt-6 space-y-3 text-sm leading-relaxed text-[#012634]/85 sm:text-base">
                {venture.description.map((paragraph) => (
                  <p
                    key={paragraph.text}
                    className={paragraph.highlighted ? "font-semibold text-[#012634]" : undefined}
                  >
                    {paragraph.text}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={venture.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#012634] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#012634]/20 transition hover:-translate-y-0.5 hover:bg-[#023549] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#012634]"
                >
                  {venture.cta.label}
                  <span aria-hidden>&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(filePath, content, "utf8");
