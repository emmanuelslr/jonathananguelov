import Image from "next/image";
import Link from "next/link";

const BIO_PARAGRAPHS = [
  "Parti de rien, j'ai été placé en famille d'accueil à 12 ans.",
  "J'ai cofondé Aircall, l'une des licornes françaises, qui génère aujourd'hui près de 200 millions d'euros de chiffre d'affaires annuel.",
  "Nous avons levé 227 millions de dollars auprès d'investisseurs comme Goldman Sachs à une valorisation de plus d'un milliard de dollars.",
  "En parallèle, j'ai fondé Aguesseau Capital, une foncière passée de 3 millions à plus de 100 millions d'euros d'actifs depuis 2018. Je gère aujourd'hui 6 hôtels et une dizaine d'immeubles dans Paris.",
  "J'ai également une casquette de business angel, avec plus de 40 startups financées à titre personnel.",
  "Aujourd'hui, je partage tout mon savoir et mes conseils pour vous aider à franchir vos propres paliers.",
];

const PROFILE_IMAGE = {
  src: "/images/home-page/jonathan profile.jpg",
  width: 500,
  height: 600,
  alt: "Jonathan Anguelov",
};

export default function BioSection() {
  return (
    <section className="relative overflow-hidden bg-[#012634] py-24 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl" style={{ fontWeight: '900' }}>
            Qui suis-je ?
          </h2>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="order-1 space-y-5 text-base leading-relaxed text-white/80 sm:text-lg lg:max-w-xl">
            <div className="space-y-5">
              {BIO_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/mon-histoire"
                className="inline-flex items-center gap-2 rounded-full border border-white px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#012634]"
              >
                Lire mon histoire complète
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="order-2 flex justify-center">
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-black/20 max-w-md -mt-8 lg:mt-0">
              <Image
                src={PROFILE_IMAGE.src}
                alt={PROFILE_IMAGE.alt}
                width={PROFILE_IMAGE.width}
                height={PROFILE_IMAGE.height}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
