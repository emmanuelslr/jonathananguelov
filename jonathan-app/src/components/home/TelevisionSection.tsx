import Image from "next/image";

const TV_APPEARANCES = [
  {
    title: "Good Morning Business",
    quote: "Aircall annonce une levée de fonds de 120 millions de dollars et devient la 16ᵉ licorne française.",
    image: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6797bb18c1e87_Thumbnbail-TV-1clair_min.png",
      width: 420,
      height: 260,
      alt: "Jonathan Anguelov sur BFM Business",
    },
    link: "https://aircall.io/",
  },
  {
    title: "Ça commence aujourd'hui",
    quote: "Jonathan Anguelov : de l'aide sociale à l'enfance à la grande réussite professionnelle.",
    image: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/679794ff47aab_thumbnail_TV_1.jpg",
      width: 420,
      height: 260,
      alt: "Jonathan Anguelov dans l'émission Ça commence aujourd'hui",
    },
    link: "https://www.youtube.com/watch?v=bRuNOMe7NC4&t=208s",
  },
  {
    title: "BFM Académie",
    quote: "BFM Académie, saison 17, épisode 1 : Le choix des coachs.",
    image: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6797b74e3a99a_Thumbnbail-TV-3.png",
      width: 420,
      height: 260,
      alt: "Jonathan Anguelov sur BFM Académie",
    },
    link: "https://www.bfmtv.com/economie/replay-emissions/bfm-academie/bfm-academie-saison-17-episode-1-le-choix-des-coachs_VN-202409170600.html",
  },
];

export default function TelevisionSection() {
  return (
    <section className="bg-[#012634] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl" style={{ fontWeight: '900' }}>Programmes TV</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {TV_APPEARANCES.map((tv) => (
            <article key={tv.title} className="flex h-full flex-col">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={tv.image.src}
                  alt={tv.image.alt}
                  width={tv.image.width}
                  height={tv.image.height}
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-4 space-y-3 text-sm p-6">
                <p className="font-semibold uppercase tracking-wide text-white/70">
                  {tv.title}
                </p>
                <p className="text-base leading-relaxed text-white">
                  “{tv.quote}”
                </p>
                <a
                  href={tv.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 hover:text-white/80"
                >
                  Visionner
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
