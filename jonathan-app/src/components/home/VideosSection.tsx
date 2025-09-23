import Image from "next/image";

const VIDEOS = [
  {
    image: "/images/home-page/miniature I.jpg",
    alt: "Jonathan Anguelov - Vidéo principale",
    link: "https://www.youtube.com/watch?v=mwGbAiWLOjw&t=58s",
  },
  {
    image: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6798f0549143b_Thumbnbail-YTB-3.jpg",
    alt: "Franck Nicolas et Jonathan Anguelov - podcast UNIK",
    link: "https://youtu.be/SF_NQn71Gqk?si=L_VuWLNwBPDxeVmJ",
  },
  {
    image: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6798c5ee3dddd_Thumbnbail-YTB-1-yomi.jpg",
    alt: "Yomi Denzel et Jonathan Anguelov",
    link: "https://youtu.be/ODcQVBs8evA?si=29Cdz4_KGOe5g2qT",
  },
  {
    image: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6799091a60ffe_Thumbnbail-YTB-9.jpg",
    alt: "Alec Henry et Jonathan Anguelov - podcast \"Le Déclic\"",
    link: "https://youtu.be/mQuJVyLKjS8?si=dNXQjUFZSsbA8d8X",
  },
  {
    image: "https://d1yei2z3i6k35z.cloudfront.net/10521134/679908bce477c_Thumbnbail-YTB-8.jpg",
    alt: "Le Tech Show : Vincent Klingbeil et Jonathan Anguelov",
    link: "https://www.youtube.com/watch?v=28m8gYnRvls",
  },
  {
    image: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6798f3f842f82_Thumbnbail-YTB-7.jpg",
    alt: "Guillaume Moubeche (Lemlist) et Jonathan Anguelov",
    link: "https://youtu.be/JfuTZ5rXSXU?si=tnDOgrSq3gK0CHJ7",
  },
  {
    image: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67990adaecfd2_Thumbnbail-YTB-10-RECADRE.png",
    alt: "Jonathan Anguelov au Chinese Business Club",
    link: "https://youtu.be/dV_1y08lso4?si=k0MRjq2cheade5uh",
  },
  {
    image: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6798f3df4043f_Thumbnbail-YTB-6.jpg",
    alt: "Jonathan Anguelov : podcast",
    link: "https://youtu.be/onR98fIbU14?si=6B1igvrNFAdcKwHC",
  },
  {
    image: "https://d1yei2z3i6k35z.cloudfront.net/10521134/6798f5c61b312_Thumbnbail-YTB-5.jpg",
    alt: "Jonathan Anguelov : podcast \"Vraie de vrai\"",
    link: "https://youtu.be/mzKAI1BtlZg?si=zBwKGzTXNXlNG0M5",
  },
];

export default function VideosSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-full max-w-[1120px] px-6 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-black leading-none text-[#1F2129] sm:text-4xl lg:text-5xl">
            Vidéos
          </h2>
          <a
            href="https://www.youtube.com/@Jonathan-Anguelov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#012634] px-6 py-3 text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#001b26]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 fill-current">
                <path d="M6.293 3.293a1 1 0 0 1 1.414 0L11.414 7a1 1 0 0 1 0 1.414L7.707 12.12a1 1 0 0 1-1.414-1.414L8.586 8 6.293 5.707a1 1 0 0 1 0-1.414Z" />
              </svg>
            </span>
            <span>Ma chaîne YouTube</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {VIDEOS.map((video) => (
            <a
              key={video.image}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[32px]"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={video.image}
                  alt={video.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
