import Image from "next/image";

const HERO_IMAGES = {
  portrait: {
    src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67ab808d10182_Retouche_PRESSE_.jpg",
    width: 640,
    height: 720,
    alt: "Jonathan Anguelov",
  },
  avatars: {
    src: "/images/home-page/avatars.webp",
    width: 120,
    height: 30,
    alt: "Avatars des membres de la communauté",
  },
};

export default function HomeHero() {
  return (
    <section className="relative bg-white py-12 sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:gap-12 sm:pl-2 sm:pr-8 lg:flex-row lg:items-stretch lg:gap-16 lg:pl-2 lg:pr-8">
          <div className="flex-1 space-y-6 sm:space-y-12 lg:py-4 flex flex-col justify-center lg:justify-start lg:pt-16">
            <div className="space-y-6 sm:space-y-8 text-center">
              <div>
                <h1 className="text-3xl font-black leading-tight text-[#012634] sm:text-4xl lg:text-5xl" style={{ fontWeight: '900' }}>
                  Rejoins ma<br />
                  Newsletter et reçois<br />
                  mes meilleurs conseils
                </h1>
              </div>
              
              <div className="space-y-2 sm:space-y-3 text-base sm:text-lg text-[#012634]">
                <p className="flex items-center justify-center gap-2">
                  <span className="text-[#2C4B56]">✓</span>
                  <span className="hidden sm:inline">Reçois mes conseils en Start-up, Tech, Immobilier & Vente.</span>
                  <span className="sm:hidden">Conseils Start-up, Tech, Immobilier & Vente</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="text-[#2C4B56]">✓</span>
                  <span className="hidden sm:inline">Vidéos, <strong>Webinaires & Évènements Exclusifs.</strong></span>
                  <span className="sm:hidden">Vidéos & <strong>Webinaires Exclusifs</strong></span>
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <Image
                  src={HERO_IMAGES.avatars.src}
                  alt={HERO_IMAGES.avatars.alt}
                  width={HERO_IMAGES.avatars.width}
                  height={HERO_IMAGES.avatars.height}
                  className="h-6 w-auto sm:h-8"
                />
                <span className="text-base sm:text-lg font-bold text-[#012634]">Rejoindre +1 800 membres</span>
              </div>

              <div className="hidden sm:flex flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-base outline-none focus:border-[#012634] focus:ring-2 focus:ring-[#012634]/30"
                />
                <button className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30">
                  &gt;&gt; S&apos;abonner
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-xs sm:max-w-md flex flex-col justify-start -mt-8 sm:-mt-8 lg:-mt-16">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl shadow-black/15">
              <Image
                src={HERO_IMAGES.portrait.src}
                alt={HERO_IMAGES.portrait.alt}
                width={400}
                height={500}
                className="h-full w-full object-cover"
                priority
              />
              
              {/* Formulaire superposé sur mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:hidden">
                <div className="bg-white rounded-xl p-3 shadow-lg">
                  <div className="flex flex-col gap-2">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#012634] focus:ring-2 focus:ring-[#012634]/30"
                    />
                    <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30">
                      &gt;&gt; S&apos;abonner
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
