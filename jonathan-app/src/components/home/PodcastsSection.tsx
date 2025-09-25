import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

const FEATURED_PODCAST = {
  image: {
    src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6797ca25360fb_Jonathan-Anguelov-est-dans-GDIY.png",
    width: 760,
    height: 510,
    alt: "Jonathan Anguelov sur le podcast Génération Do It Yourself",
  },
  title:
    "#145 Jonathan Anguelov - Aircall - La force intérieure. Tout casser alors qu'on part de rien",
  hostLine: "Matthieu Stefani le 23 janvier 2020",
  summary:
    "On ne naît pas tous sous la même étoile. Et pourtant, on peut tous accomplir des merveilles. Le nouvel invité de GDIY en est la preuve. Jonathan Anguelov n'avait...",
  link: "https://www.gdiy.fr/podcast/145-jonathan-anguelov-aircall/",
  ratingImage: {
    src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6797cc2096829_Capturedecran2025-01-27a18.42.09.png",
    width: 235,
    height: 220,
    alt: "Avis du podcast Génération Do It Yourself",
  },
};

const PODCAST_LIST = [
  {
    logo: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6798b23abe42e_logopodcast-2.jpeg",
    title: "Jonathan Anguelov - Figure connue de la tech : \"Rien n'arrête une personne blessée\"",
    meta: "Podcast \"Sans Permission\" le 7 janvier 2024",
    link: "https://www.youtube.com/watch?v=p-9w5HUCQ2A",
  },
  {
    logo: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6798b3febbded_logopodcast-1.png",
    title: "Le Figaro Podcasts | Le Talk Décideurs - Jonathan Anguelov",
    meta: "Quentin Périnel le 9 mars 2023",
    link: "https://podcasts.lefigaro.fr/le-figaro-le-talk-decideurs",
  },
  {
    logo: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6798bc725fd71_20minutes-blue-1000.webp",
    title: "Jonathan Anguelov, fondateur d'Aircall et d'Aguesseau Capital",
    meta: "Alexandre Mars le 14 sept. 2022",
    link: "https://podcasts.20minutes.fr/alexandre-mars-pause-le-podcast-dalexandre-mars/202209142100-jonathan-anguelov-cofondateur-daircall-et-daguesseau-capital",
  },
];

export default function PodcastsSection() {
  return (
    <AnimatedSection animation="slideUp">
      <section className="bg-[#EFF0F5] py-20 sm:py-28">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6">
        <AnimatedSection animation="slideUp">
          <header className="mb-10 sm:mb-12">
            <h2 className="text-3xl font-black text-[#1F2129] sm:text-4xl lg:text-5xl">Podcasts</h2>
          </header>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <article className="space-y-6">
            <div className="overflow-hidden rounded-[32px] shadow-2xl shadow-black/10">
              <Image
                src={FEATURED_PODCAST.image.src}
                alt={FEATURED_PODCAST.image.alt}
                width={FEATURED_PODCAST.image.width}
                height={FEATURED_PODCAST.image.height}
                className="w-full object-cover"
                priority
              />
            </div>

            <div className="space-y-4 text-[#5F667E]">
              <h3 className="text-2xl font-semibold leading-tight text-[#1F2129] sm:text-[28px]">
                <a
                  href={FEATURED_PODCAST.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#324450]"
                >
                  {FEATURED_PODCAST.title}
                </a>
              </h3>

              <p className="text-sm font-semibold text-[#5F667E]" translate="no">
                {FEATURED_PODCAST.hostLine}
              </p>

              <div className="mt-1">
                <Image
                  src={FEATURED_PODCAST.ratingImage.src}
                  alt={FEATURED_PODCAST.ratingImage.alt}
                  width={FEATURED_PODCAST.ratingImage.width}
                  height={FEATURED_PODCAST.ratingImage.height}
                  className="h-10 w-auto object-contain"
                />
              </div>

              <p className="text-base leading-relaxed">
                {FEATURED_PODCAST.summary}
              </p>

              <a
                href={FEATURED_PODCAST.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-[#1F2129] underline underline-offset-4 transition hover:text-[#324450]"
              >
                Écouter ici
              </a>
            </div>
          </article>

          <aside className="space-y-6">
            {PODCAST_LIST.map((podcast) => (
              <article
                key={podcast.title}
                className="rounded-[28px] bg-white p-6 shadow-xl shadow-black/5"
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={podcast.logo}
                    alt="Logo du podcast"
                    width={52}
                    height={52}
                    className="h-12 w-12 flex-none rounded-2xl object-contain"
                  />
                  <div>
                    <a
                      href={podcast.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg font-semibold leading-snug text-[#1F2129] transition hover:text-[#324450]"
                    >
                      {podcast.title}
                    </a>
                    <p className="mt-2 text-sm font-semibold text-[#5F667E]" translate="no">
                      {podcast.meta}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </aside>
        </div>
      </div>
      </section>
    </AnimatedSection>
  );
}
