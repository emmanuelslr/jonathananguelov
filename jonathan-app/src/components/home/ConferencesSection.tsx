import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

const CONFERENCES = [
  {
    src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67ab869451033_CONF-1.jpg",
    alt: "NOAH Berlin 2019 — Aircall",
    link: "https://www.youtube.com/watch?v=Ccw51V8ihfc",
    label: "NOAH Berlin 2019 — Aircall",
  },
  {
    src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67ab7e6593216_CONF-2.png",
    alt: "Conférence Z Event",
    link: "https://www.youtube.com/watch?v=m1VYWF8_Z2w",
    label: "Conférence Z Event",
  },
  {
    src: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67ab83fbddef3_CONF-2_accueil.png",
    alt: "Conférence TechCrunch",
    link: "https://www.youtube.com/watch?v=d6w8H3tTGF4",
    label: "Conférence TechCrunch",
  },
  {
    src: "/images/conferences/2018 EBE berlin.jpg",
    alt: "2018 EBE Berlin",
    link: "https://www.youtube.com/watch?v=d6w8H3tTGF4",
    label: "2018 EBE Berlin",
  },
  {
    src: "/images/conferences/2023 Saastock.webp",
    alt: "2023 Saastock",
    link: "https://www.youtube.com/watch?v=d6w8H3tTGF4",
    label: "2023 Saastock",
  },
  {
    src: "/images/conferences/2023 Saastock 2.webp",
    alt: "2023 Saastock",
    link: "https://www.youtube.com/watch?v=d6w8H3tTGF4",
    label: "2023 Saastock",
  },
];

const BOOK_ANCHOR = "#mon-livre";

export default function ConferencesSection() {
  return (
    <AnimatedSection animation="fadeIn">
      <section className="bg-[#EFF0F5] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-black/5 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-3xl font-black leading-tight text-[#012634] sm:text-4xl lg:text-5xl" style={{ fontWeight: '900' }}>
              Conférences
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={BOOK_ANCHOR}
                className="inline-flex items-center gap-2 rounded-full border border-[#4B6471] px-5 py-2 text-sm font-semibold text-[#4B6471] transition hover:-translate-y-0.5 hover:bg-[#4B6471] hover:text-white"
              >
                Mon livre
                <span aria-hidden>&rarr;</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jonathan-anguelov-14346611/?originalSubdomain=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#4B6471] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#4B6471]/30 transition hover:-translate-y-0.5 hover:bg-[#3c5260] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4B6471]"
              >
                Me contacter pour une conférence
                <span aria-hidden>&rarr;</span>
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CONFERENCES.map((conference, index) => (
              <a
                key={index}
                href={conference.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-3xl border border-[#EFF0F5] bg-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10 flex flex-col"
              >
                <Image
                  src={conference.src}
                  alt={conference.alt}
                  width={480}
                  height={320}
                  className={`w-full object-cover transition duration-300 group-hover:scale-105 ${
                    index === 4 ? 'h-40 object-top' : ''
                  }`}
                />
                <div 
                  className={`text-sm font-semibold text-[#012634] flex items-center ${
                    index === 4 ? 'py-2 px-4' : 'p-4'
                  }`}
                  style={index === 4 ? { height: '3rem' } : { height: '4rem' }}
                >{conference.label}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
      </section>
    </AnimatedSection>
  );
}