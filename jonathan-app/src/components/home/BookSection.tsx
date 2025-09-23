import Image from "next/image";

const BOOK_DATA = {
  title: "Rien à perdre",
  description:
    "D'une enfance en famille d'accueil à la création d'une entreprise valorisée plus de 1 milliard d'euros : les clés d'un succès.",
  excerpt:
    "J'ai vite compris que je ne serais pas comme les autres, ma vie était différente et je l'étais tout autant. Je n'ai jamais eu rien à perdre.",
  fullDescription:
    "Ce livre est à la fois un récit de vie et un condensé de leçons et de conseils pour réussir. Mais c'est aussi et surtout un hommage à l'aide sociale à l'enfance, sans qui je ne serais pas là aujourd'hui.",
  image: {
    src: "/images/home-page/mon livre.png",
    width: 400,
    height: 600,
    alt: "Le livre Rien à perdre de Jonathan Anguelov",
  },
  amazonLink: "https://www.amazon.ca/Rien-%C3%A0-perdre-Jonathan-Anguelov/dp/2379354413",
};

export default function BookSection() {
  return (
    <section id="mon-livre" className="bg-[#EFF0F5] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-black/5 sm:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-3xl font-black leading-tight text-[#012634] sm:text-4xl lg:text-5xl" style={{ fontWeight: '900' }}>
              Mon livre
            </h2>
            <a
              href={BOOK_DATA.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#4B6471] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#4B6471]/30 transition hover:-translate-y-0.5 hover:bg-[#3c5260] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B6471]"
            >
              Commander sur Amazon
              <span aria-hidden>&rarr;</span>
            </a>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
            <div className="flex justify-center">
              <Image
                src={BOOK_DATA.image.src}
                alt={BOOK_DATA.image.alt}
                width={BOOK_DATA.image.width}
                height={BOOK_DATA.image.height}
                className="h-auto w-64 object-contain"
              />
            </div>

            <div className="space-y-6 text-[#012634]">
              <h3 className="text-2xl font-semibold">“{BOOK_DATA.title}”</h3>
              <p className="text-base leading-relaxed text-[#012634]/80 sm:text-lg">
                {BOOK_DATA.description}
              </p>
              <div className="space-y-4 text-base leading-relaxed text-[#012634]/80">
                <p>{BOOK_DATA.excerpt}</p>
                <p>{BOOK_DATA.fullDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
