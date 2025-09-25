import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

const FEATURES = [
  {
    title: "COUVERTURE D'INFORMATIONS ENTREPRISE",
    image: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67a4826b165fb_1.png",
      width: 360,
      height: 520,
      alt: "Jonathan Anguelov, couverture du magazine Informations Entreprise",
    },
  },
  {
    title: "TROPHÉE ENTREPRENEUR DE L'ANNÉE 2024",
    image: {
      src: "/images/home-page/remise du trophée.png",
      width: 360,
      height: 520,
      alt: "Jonathan Anguelov remise du trophée Entrepreneur de l'année 2024",
    },
  },
  {
    title: "COUVERTURE D'ECORÉSEAU",
    image: {
      src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67a482bf0a0d7_2.png",
      width: 360,
      height: 520,
      alt: "Jonathan Anguelov en couverture d'EcoRéseau",
    },
  },
];

export default function PressFeatures() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection animation="slideUp">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black leading-tight text-[#012634] sm:text-4xl lg:text-5xl" style={{ fontWeight: '900' }}>
              Couvertures &amp; distinctions
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="space-y-4 text-center">
              <div className="overflow-hidden shadow-2xl shadow-black/10">
                <Image
                  src={feature.image.src}
                  alt={feature.image.alt}
                  width={feature.image.width}
                  height={feature.image.height}
                  className="w-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-[#5F667E]">{feature.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}