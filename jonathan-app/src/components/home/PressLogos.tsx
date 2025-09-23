import Image from "next/image";

const LOGOS = {
  src: "/images/home-page/logoschaine_COULEUR.png",
  width: 916,
  height: 180,
  alt: "Logo de la chaîne",
};

export default function PressLogos() {
  return (
    <section className="bg-white py-18">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
        <Image
          src={LOGOS.src}
          alt={LOGOS.alt}
          width={LOGOS.width}
          height={LOGOS.height}
          className="w-full max-w-7xl"
          priority
        />
      </div>
    </section>
  );
}
