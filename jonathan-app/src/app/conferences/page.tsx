import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import FooterSection from "@/components/home/FooterSection";

export const metadata: Metadata = {
  title: "Conférences - Jonathan Anguelov",
  description: "Conférences de Jonathan Anguelov : interventions inspirantes sur l'entrepreneuriat, la tech et l'immobilier. Contactez-nous pour organiser une conférence.",
  alternates: {
    canonical: "https://www.jonathananguelov.com/conferences",
  },
  keywords: ["Jonathan Anguelov", "Conférences", "Entrepreneuriat", "Tech", "Immobilier"],
  authors: [{ name: "Jonathan Anguelov" }],
  openGraph: {
    title: "Conférences - Jonathan Anguelov",
    description: "Conférences de Jonathan Anguelov : interventions inspirantes sur l'entrepreneuriat, la tech et l'immobilier. Contactez-nous pour organiser une conférence.",
    url: "https://www.jonathananguelov.com/conferences",
    images: [
      {
        url: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67af0d8007e73_CONFTOP2.jpg",
        alt: "Jonathan Anguelov - Conférences",
      },
    ],
  },
};

const CONFERENCES = [
  {
    id: "z-event-2024",
    backgroundImage: "/images/conferences/2024 Z event.webp",
    date: "Décembre 2024",
    event: "Z Event",
    title: "Comment réussir en Immobilier ? Mon histoire",
    description: [
      "Jonathan Anguelov raconte son parcours de la tech à l'immobilier, prouvant que ce secteur est accessible à tous avec la bonne stratégie.",
      "Il raconte comment, en parallèle d'Aircall, il a créé sa foncière immobilière : <strong>Aguesseau Capital</strong>. Faisant passer son patrimoine immobilier de <strong>3 à 100 millions d'euros d'actif sous gestion</strong>. Il met en avant le potentiel du secteur hôtelier, plus rentable que l'immobilier résidentiel, et insiste sur l'importance d'une analyse de marché approfondie.",
      "Il encourage les <strong>5.000 spectateurs</strong> à privilégier les investissements générant du <strong>cash flow</strong> plutôt que de compter uniquement sur la valorisation des biens et le remboursement de dettes. Enfin, il motive les nouveaux investisseurs à surmonter leurs peurs et à saisir les opportunités du marché immobilier."
    ],
    videoLink: "https://www.youtube.com/watch?v=m1VYWF8_Z2w"
  },
  {
    id: "saastock-2023-1",
    backgroundImage: "/images/conferences/2023 Saastock.webp",
    date: "2023",
    event: "Saastock",
    title: "Building a $100M ARR Sales Machine in a competitive industry",
    description: [
      "Jonathan Anguelov raconte l'histoire de sa startup : <strong>en une décennie, Aircall est passé d'une simple idée à une entreprise générant 160 millions de dollars de revenus annuels récurrents (ARR).</strong>",
      "Avec 40 nationalités et 19 000 clients, Aircall s'est imposé comme un acteur majeur du secteur des télécommunications. Jonathan met en avant l'importance des métriques, affirmant que suivre des indicateurs clés comme le NPS, le churn et les taux de rétention est essentiel pour une croissance durable. Jonathan précise que considérer les premiers employés comme des cofondateurs a permis de créer une culture d'innovation et de responsabilisation, ce qui a accéléré le développement de l'entreprise."
    ],
    videoLink: "https://www.youtube.com/watch?v=d6w8H3tTGF4"
  },
  {
    id: "saastock-2023-2",
    backgroundImage: "/images/conferences/2023 Saastock 2.webp",
    date: "2023",
    event: "Saastock",
    title: "Building a $100M ARR Sales Machine in a competitive industry",
    description: [
      "<strong>Jonathan met en avant que le succès ne repose pas uniquement sur une idée brillante, mais sur l'exécution</strong>, la compréhension des besoins clients et la constitution d'une équipe solide.",
      "Il souligne l'importance de définir les besoins des clients, d'adopter une approche consultative des ventes, et de maintenir la transparence des métriques. Il insiste sur le fait que les premiers employés doivent adopter un état d'esprit de fondateur pour contribuer à la culture et à la croissance de l'entreprise.",
      "<strong>En conclusion, il précise que n'importe qui peut réussir avec la bonne mentalité et les bonnes stratégies.</strong>"
    ],
    videoLink: "https://www.youtube.com/watch?v=d6w8H3tTGF4"
  },
  {
    id: "techcrunch-2019",
    backgroundImage: "/images/conferences/tedcrunch disrupt Berlin 2019.jpg",
    date: "2019",
    event: "TedCrunch Disrupt Berlin 2019",
    title: "Jonathan Anguelov showcased Aircall's incredible 5-year journey before publicly announcing the launch of its brand new App Marketplace",
    description: [
      "Jonathan Anguelov retrace le parcours d'Aircall. <strong>En 2019, Aircall est passé d'une startup à une entreprise mondiale, servant 4 000 clients B2B dans plus de 100 pays.</strong>",
      "Grâce à plusieurs levées de fonds (<strong>dont 41M$ en 2018</strong>), <strong>Aircall a révolutionné la téléphonie d'entreprise</strong> avec une solution cloud intégrée aux outils métiers.",
      "L'annonce clé de sa présentation est le lancement du marketplace Aircall, offrant plus de 50 intégrations pour améliorer l'expérience client. Il souligne l'importance des conversations, des collaborations et de l'innovation continue pour répondre aux besoins des entreprises modernes."
    ],
    videoLink: "https://www.youtube.com/watch?v=d6w8H3tTGF4"
  },
  {
    id: "noah-berlin-2019",
    backgroundImage: "/images/conferences/Noah Berlin 2019.webp",
    date: "2019",
    event: "Noah Berlin 2019",
    title: "Empowering the European Digital Ecosystem",
    description: [
      "Dans cette vidéo, Jonathan Anguelov présente l'approche innovante d'Aircall.",
      "Fondée en 2014, <strong>la société, avec plus de 200 employés répartis entre Paris et New York, a levé 41 millions de dollars et enregistré plus d'un milliard d'appels en 2018, soit quatre ans après sa création (2019)</strong>. Jonathan met en avant comment Aircall permet aux utilisateurs de gérer facilement leurs systèmes téléphoniques et de les connecter à des CRM, des helpdesks et divers outils, ce qui améliore la productivité."
    ],
    videoLink: "https://www.youtube.com/watch?v=Ccw51V8ihfc"
  },
  {
    id: "b2b-rocks-2019",
    backgroundImage: "/images/conferences/B2B2 Rocks 20219.webp",
    date: "2019",
    event: "B2B Rocks 2019",
    title: "Playing nice: your solution needs to integrate with other software",
    description: [
      "Jonathan Anguelov insiste sur l'importance de l'intégration des solutions logicielles pour la croissance des entreprises.",
      "Analysant l'évolution des logiciels, il souligne le rôle crucial des API dans les intégrations. <strong>Jonathan met en garde contre la tentation de créer des produits trop complexes et recommande de se concentrer sur la spécialisation.</strong>",
      "Il encourage également à privilégier les partenariats et intégrations stratégiques pour stimuler la croissance et améliorer l'expérience client."
    ],
    videoLink: "https://www.youtube.com/watch?v=d6w8H3tTGF4"
  },
  {
    id: "ebe-berlin-2018",
    backgroundImage: "/images/conferences/2018 EBE berlin.jpg",
    date: "2018",
    event: "EBE Berlin",
    title: "The customer support from ticket centric to customer centric - Aircall, Jonathan Anguelov",
    description: [
      "Jonathan Anguelov, COO d'Aircall, explique comment le service client est passé d'un modèle ticket-centric à une approche customer experience.",
      "Aircall facilite cette transition en centralisant les interactions et en offrant une vision 360° des clients, permettant un service plus réactif et personnalisé. <strong>Grâce à son intégration avec divers outils, il aide les équipes à anticiper les besoins</strong> et à communiquer de manière proactive.",
      "Anguelov souligne que l'expérience client est devenue un facteur clé de différenciation, surtout dans l'e-commerce. Les entreprises doivent choisir les bons canaux et exploiter les données pour fidéliser leur clientèle. En optimisant la relation client, Aircall transforme le support en un véritable levier de croissance."
    ],
    videoLink: "https://www.youtube.com/watch?v=d6w8H3tTGF4"
  }
];

export default function ConferencesPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="py-16">
          {/* Conference Card - Full width with margins */}
          <div className="mx-4 sm:mx-16 md:mx-20 lg:mx-24">
            <div className="overflow-hidden rounded-3xl bg-[#012634] px-6 py-8 sm:px-12 sm:py-12 md:px-16 md:py-16">
              {/* Title and subtitle */}
              <div className="mb-8">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white" style={{ fontWeight: '900' }}>Conférences</h1>
              </div>
              
              <div className="mb-8">
                <div className="h-px w-full bg-white"></div>
              </div>
              
              <div className="mb-8">
                <p className="text-xl text-white">
                  Pour toutes demandes de conférences, veuillez envoyer un mail à :{" "}
                  <a 
                    href="mailto:anne@bayard-unlimited.com" 
                    className="font-semibold underline hover:text-white/80"
                  >
                    anne@bayard-unlimited.com
                  </a>
                </p>
              </div>
              
              {/* Conference Images */}
              <div className="grid gap-8 sm:gap-10 md:grid-cols-3 max-w-full mx-auto">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/conferences/hero 1.webp"
                    alt="Audience at conference"
                    width={500}
                    height={350}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/conferences/hero 2.webp"
                    alt="Conference attendees"
                    width={500}
                    height={350}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/conferences/hero 3.webp"
                    alt="Jonathan Anguelov at TechCrunch"
                    width={500}
                    height={350}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conference Details */}
        <section className="py-20 pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="space-y-20">
              {CONFERENCES.map((conference) => (
                <article key={conference.id} className="relative overflow-hidden rounded-3xl" style={{ backgroundColor: '#F7F8FC' }}>
                  {/* Background Image - Much taller with rounded corners */}
                  <div className="relative w-full overflow-hidden rounded-t-3xl">
                    <Image
                      src={conference.backgroundImage}
                      alt={`${conference.event} background`}
                      width={800}
                      height={400}
                      className="w-full h-auto sm:h-[500px] md:h-[600px] object-contain object-center sm:object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h2 className="text-3xl font-black sm:text-4xl" style={{ fontWeight: '900', color: '#012634' }}>
                        {conference.date} : {conference.event}
                      </h2>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-2xl font-normal" style={{ color: '#5F667E' }}>
                        {conference.title}
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <div className="h-px w-full bg-gray-300"></div>
                    </div>

                    <div className="space-y-4 text-gray-700">
                      {conference.description.map((paragraph, index) => (
                        <p key={index} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }} />
                      ))}
                    </div>

                    <div className="mt-8 flex justify-center">
                      <a
                        href={conference.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#012634] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#024155]"
                      >
                        Visionner
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
}