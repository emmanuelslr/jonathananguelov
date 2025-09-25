import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

const FEATURED_ARTICLE = {
  logo: {
    src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/679760cbad174_Challenge.png",
    width: 140,
    height: 60,
    alt: "Challenges",
  },
  title: "«Jonathan Anguelov, un ambitieux touche-à-tout»",
  excerpt: [
    "De son enfance difficile, Jonathan Anguelov a tiré « la niaque de s’en sortir » et a créé Aircall, 16e licorne française, valorisée plus d’un milliard d’euros. Il se consacre désormais à Aguesseau Capital, sa foncière immobilière.",
    "Aircall est valorisée plus d’un milliard d’euros et réalise plus de 200 millions d’euros de chiffre d’affaires, avec des bureaux à New York, Paris, Londres, Berlin et Sydney. La clé de son succès ?",
  ],
  link: "https://www.challenges.fr/entreprise/telecoms/jaime-reperer-le-meilleur-de-chacun-pour-men-inspirer-jonathan-anguelov-un-ambitieux-touche-a-tout_596085",
  gallery: [
    {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67a482bf0a0d7_2.png",
      alt: "Jonathan Anguelov, couverture du magazine \"Informations Entreprise\"",
    },
    {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67a4826b165fb_1.png",
      alt: "Jonathan Anguelov, couverture d’Ecoréseau",
    },
    {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67975e4311173_FullSizeRendercopie.jpg",
      alt: "Jonathan Anguelov et Bruno Le Maire",
    },
  ],
} as const;

const SECONDARY_ARTICLES = [
  {
    logo: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6798d95471ec5_Designsanstitre1.png",
      width: 120,
      height: 42,
      alt: "Les Échos",
    },
    title: "«Aircall a dépassé 100 millions de dollars de revenus annuels»",
    summary: "Aircall révèle avoir atteint 132 millions de dollars de revenus récurrents, l’indicateur financier de référence pour les logiciels...",
    link: "https://www.lesechos.fr/start-up/ecosysteme/aircall-a-depasse-100-millions-de-dollars-de-revenus-annuels-1443819",
  },
  {
    logo: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6798a55c065e3_LeFigarocopie3.png",
      width: 147,
      height: 40,
      alt: "Le Figaro",
    },
    title: "«Jonathan Anguelov, ou l’itinéraire d’un enfant peu gâté»",
    summary: "À 34 ans, il a beau être à la tête d’une des plus belles réussites de la French Tech, d’un joli patrimoine immobilier à Paris, il reste inquiet, taraudé par la peur de...",
    link: "https://www.lefigaro.fr/societes/jonathan-anguelov-ou-l-itineraire-d-un-enfant-peu-gate-20210406",
  },
  {
    logo: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6798dba9ca387_Capturedecran2025-01-28a14.28.31.png",
      width: 147,
      height: 44,
      alt: "Le Monde",
    },
    title: "«Aircall est devenu la 16e licorne française : elle vaut désormais plus d’un milliard de dollars»",
    summary: "Le service de téléphonie dans le cloud poursuit sa croissance internationale et franchit le cap symbolique de la licorne.",
    link: "https://www.lemonde.fr/economie/article/2021/06/23/aircall-devient-la-seizieme-licorne-francaise_6085312_3234.html",
  },
] as const;

export default function ArticlesSection() {
  return (
    <AnimatedSection animation="slideUp">
      <section className="bg-[#f3f7fd] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection animation="slideUp">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black leading-tight text-[#012634] sm:text-4xl lg:text-5xl">Articles</h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-white shadow-xl shadow-black/10 lg:flex-1">
              <Image
                src={FEATURED_ARTICLE.gallery[2].src}
                alt={FEATURED_ARTICLE.gallery[2].alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 75vw, 100vw"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-[32px] bg-[#eaf1ff] p-8 shadow-xl shadow-black/10 lg:col-span-7 lg:p-10">
            <div className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-2 shadow-md shadow-black/10">
              <Image
                src={FEATURED_ARTICLE.logo.src}
                alt={FEATURED_ARTICLE.logo.alt}
                width={FEATURED_ARTICLE.logo.width}
                height={FEATURED_ARTICLE.logo.height}
                className="h-8 w-auto object-contain"
                priority
              />
            </div>
            <div className="space-y-5">
              <h3 className="text-3xl font-bold leading-snug text-[#012634] sm:text-4xl">
                {FEATURED_ARTICLE.title}
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-[#012634]/90 sm:text-lg">
                {FEATURED_ARTICLE.excerpt.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <a
              href={FEATURED_ARTICLE.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#012634] underline underline-offset-4 hover:text-[#024155]"
            >
              Lire l&apos;intégralité de l&apos;article
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {SECONDARY_ARTICLES.map((article) => (
            <article
              key={article.title}
              className="flex h-full flex-col gap-4 rounded-[28px] bg-[#eaf1ff] p-6 shadow-lg shadow-black/5 transition-shadow hover:shadow-xl hover:shadow-black/10"
            >
              <div className="inline-flex w-fit items-center rounded-full bg-white px-5 py-2 shadow-sm shadow-black/10">
                <Image
                  src={article.logo.src}
                  alt={article.logo.alt}
                  width={article.logo.width}
                  height={article.logo.height}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold leading-snug text-[#012634]">
                {article.title}
              </h4>
              <p className="text-sm leading-relaxed text-[#012634]/80">{article.summary}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#012634] underline underline-offset-4 hover:text-[#024155]"
              >
                Lire l&apos;intégralité de l&apos;article
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
      </section>
    </AnimatedSection>
  );
}
