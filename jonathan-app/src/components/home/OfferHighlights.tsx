import Image from "next/image";

const OFFERS = [
  {
    title: "Coaching privé",
    description:
      "Un moment privilégié avec moi où vous\nrecevez des conseils concrets et adaptés à\nvotre situation afin de passer au niveau\nsupérieur.",
    ctaLabel: "Réservez votre appel",
    href: "https://buy.stripe.com/4gw7v4bESeevdt6288",
    mainImage: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/679cb039c4a9e_service-5.png",
      width: 280,
      height: 240,
      alt: "Session de coaching privé",
    },
  },
  {
    title: "Conférences",
    description:
      "Offrez à votre équipe ou à une audience une\nconférence inspirante et pleine de stratégies.\nPlus d'informations à l'adresse :\nanne@bayard-unlimited.com",
    ctaLabel: "Me contacter",
    href: "https://www.linkedin.com/in/jonathan-anguelov-14346611/?originalSubdomain=fr",
    mainImage: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67af0d8007e73_CONFTOP2.jpg",
      width: 280,
      height: 240,
      alt: "Jonathan Anguelov en conférence",
    },
  },
  {
    title: "Investir à mes côtés",
    description:
      "Investir aux côtés de ma foncière Aguesseau\nCapital, vous permet d'investir facilement,\ntout en profitant de rendements compétitifs.\nNous investissons ensemble.",
    ctaLabel: "En savoir plus",
    href: "https://aguesseaucapital.com/investir-a-nos-cotes/",
    mainImage: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/679cb111ea078_RETOUCHE-photo.png",
      width: 280,
      height: 240,
      alt: "Investir aux côtés de Jonathan Anguelov",
    },
  },
];

export default function OfferHighlights() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="bg-[#012634] rounded-3xl py-18 px-8 text-white">

        <div className="grid gap-10 lg:grid-cols-3">
          {OFFERS.map((offer) => (
            <article key={offer.title} className="flex h-full flex-col gap-5 items-center text-center">
              <div className="relative">
                <Image
                  src={offer.mainImage.src}
                  alt={offer.mainImage.alt}
                  width={offer.mainImage.width}
                  height={offer.mainImage.height}
                  className="w-72 h-[26rem] rounded-3xl object-cover"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">{offer.title}</h3>
                <p className="text-sm leading-relaxed text-white/85 whitespace-pre-line">{offer.description}</p>
              </div>

              <div className="pt-2">
                <a
                  href={offer.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4B6471] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4B6471]/30 transition hover:-translate-y-0.5 hover:bg-[#3c5260] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B6471]"
                >
                  {offer.ctaLabel}
                  <span aria-hidden>&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
