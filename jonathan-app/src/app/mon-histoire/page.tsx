/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

import Header from "@/components/layout/Header";
import FooterSection from "@/components/home/FooterSection";

type TextBlockProps = {
  children: ReactNode;
  className?: string;
};

const TextBlock = ({ children, className }: TextBlockProps) => {
  const baseClasses = "text-lg leading-relaxed text-gray-700 [&>p]:mb-8 [&>p:last-child]:mb-0";

  return (
    <div className={className ? `${baseClasses} ${className}` : baseClasses}>
      {children}
    </div>
  );
};

export const metadata: Metadata = {
  title: "Qui suis-je ? - Jonathan Anguelov",
  description:
    "L'histoire inspirante de Jonathan Anguelov : de l'aide sociale à l'enfance à la création d'Aircall, une licorne française. Découvrez son parcours de résilience et de réussite.",
  alternates: {
    canonical: "https://www.jonathananguelov.com/mon-histoire",
  },
  keywords: ["Jonathan Anguelov", "Histoire", "Aircall", "Résilience", "Entrepreneuriat", "Aide sociale"],
  authors: [{ name: "Jonathan Anguelov" }],
  openGraph: {
    title: "Qui suis-je ? - Jonathan Anguelov",
    description:
      "L'histoire inspirante de Jonathan Anguelov : de l'aide sociale à l'enfance à la création d'Aircall, une licorne française.",
    url: "https://www.jonathananguelov.com/mon-histoire",
    images: [
      {
        url: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67af0d8007e73_CONFTOP2.jpg",
        alt: "Jonathan Anguelov - Mon histoire",
      },
    ],
  },
};

export default function MonHistoirePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex flex-col items-center text-center gap-6">
              <h1
                className="text-4xl font-black text-[#012634] sm:text-5xl"
                style={{ fontWeight: "900" }}
              >
                Qui suis-je ?
              </h1>
              <p className="max-w-2xl text-xl text-[#5F667E]">
                5 minutes de lecture, qui, je l'espère, vont vous inspirer.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="space-y-14">
              <TextBlock>
                <p>
                  <strong>Je suis parti de rien.</strong>
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  <strong>Je n'avais absolument rien pour réussir. Mon parcours est la preuve que vous pouvez changer votre destin.</strong>
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  Je suis né à Paris, d'une maman immigrée bulgare qui ne savait pas écrire, et d'un père inconnu.
                </p>
              </TextBlock>

              <div className="mx-auto w-full max-w-2xl">
                <Image
                  src="/images/qui-suis-je/qui-1.webp"
                  alt="Jonathan Anguelov - Histoire"
                  width={600}
                  height={250}
                  className="w-full rounded-2xl"
                />
              </div>

              <TextBlock>
                <p>
                  Lorsque j'ai 10 ans, il y a un incendie chez nous, et nous perdons presque tout ce que nous possédons. Quelques années plus tard, <strong>ma maman est victime d'une escroquerie</strong> et cette fois, on ne se relèvera pas. <strong>On perd tout.</strong>
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  Nous n'avions plus rien et <strong>ma maman ne pouvait plus s'occuper de moi</strong>, puisqu'en plus de l'escroquerie dont elle a été victime, le fisc se met sur son dos et lui saisit ses derniers biens.
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  <strong>À l'aube de mes 12 ans, ma mère se fait escroquer et nous perdons tout.</strong>
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  Un matin, alors que j'allais partir à l'école, la porte sonne. Derrière la porte : des huissiers, des policiers, et une assistante sociale. Ce jour-là, c'était le coup de grâce : les huissiers entrent dans notre appartement et saisissent tout ce que ma mère possède. L'assistante sociale me met à part, et me dit : "fais ton sac Jonathan, tu ne rentreras pas à la maison ce soir".
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  <strong>Je me retrouve placé en famille d'accueil.</strong> Je passe d'un collège privé à Paris à étudier dans une Z.E.P (zone d'éducation prioritaire) dans une cité en banlieue parisienne.
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  <strong>Dès mes 12 ans je connais la faim, la saleté, le froid et le jugement des autres.</strong> J'avais une étiquette collée sur mon dos comme "enfant de l'aide sociale à l'enfance".
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  Toute ma vie on m'a dit "Jonathan, tu ne pourras pas faire ça", "Jonathan, ne vise pas trop haut" etc. Sans le vouloir, <strong>on m'a toujours fait comprendre que j'étais moins bien que les autres.</strong>
                </p>
              </TextBlock>

              <div className="mx-auto w-full max-w-xl">
                <Image
                  src="/images/qui-suis-je/qui-2.webp"
                  alt="Jonathan Anguelov - Parcours"
                  width={640}
                  height={320}
                  className="w-full rounded-2xl"
                />
              </div>

              <TextBlock>
                <p>
                  Une fois placé sous la tutelle de l'ASE, je ne vois ma mère qu'une semaine sur deux en faisant de longs aller-retours en transports en commun. Malheureusement, maman n'est plus la même, ayant tout perdu, elle sombre dans la dépression et l'alcool.
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  À partir de 14 ans, en parallèle de mes études, <strong>j'enchaîne les petits boulots.</strong> Tour à tour, je livre des pizzas, je distribue des journaux à la sortie du métro, je suis serveur, caissier… et cela jusqu'à mes 18 ans afin de pouvoir déjà gagner mon propre argent et avoir un minimum d'argent de poche.
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  À 19 ans, j'ai 10 000 € sur mon compte bancaire grâce à toutes ces années de jobs étudiants. Je contracte un prêt étudiant, et je mets toutes mes économies dans l'achat de mon premier bien immobilier, une chambre de service dans un état pitoyable au sixième étage sans ascenseur d'un immeuble cossu du 10<sup>e</sup> arrondissement de Paris.
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  Je la rénove moi-même, et je la loue. Je réalise que c'est une manière de m'enrichir. Du coup, j'enchaîne les prêts dans d'autres établissements et je continue d'acheter d'autres biens que je rénove. À 21 ans, je gagne plus de 5 000 € par mois grâce à tous mes appartements.
                </p>
              </TextBlock>

              <div className="mx-auto w-full max-w-3xl">
                <Image
                  src="/images/qui-suis-je/qui-3.webp"
                  alt="Jonathan Anguelov - Immobilier"
                  width={800}
                  height={350}
                  className="w-full rounded-2xl"
                />
              </div>

              <TextBlock>
                <p>
                  En parallèle de tout ça, je continue mes études et, à force de travail, j'intègre l'ESCP Europe d'où je sortirai diplômé quelques années plus tard.
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  Après mes études, je travaille en finance à Londres, mais je m'ennuie terriblement. <strong>Au bout de quelques mois, je décide d'arrêter et de rentrer à Paris</strong> car j'ai une idée derrière la tête.
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  La téléphonie d'entreprise et les systèmes de centre d'appels n'ont pas évolué depuis 15 ans et il est temps de les disrupter. Je rencontre mes associés et <strong>nous lançons Aircall</strong> dans la foulée.
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  Le pitch : Aircall est une solution de téléphonie cloud qui révolutionne la communication en entreprise car elle s'intègre nativement à tous les outils CRM et helpdesk du marché. Aircall embarque également un moteur d'intelligence artificielle qui permet à ses clients d'analyser toutes leurs conversations, de les transcrire et même d'entraîner des robots d'appels.
                </p>
              </TextBlock>

              <div className="mx-auto w-full max-w-3xl">
                <Image
                  src="/images/qui-suis-je/qui-4.webp"
                  alt="Jonathan Anguelov - Aircall"
                  width={800}
                  height={350}
                  className="w-full rounded-2xl"
                />
              </div>

              <TextBlock>
                <p>
                  Aircall a levé 225 millions de dollars et est devenue une des licornes françaises en 2021. <strong>Aujourd'hui Aircall génère près de 200 millions de chiffre d'affaires</strong> et est un des leaders mondiaux des logiciels de téléphonie professionnels.
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  Début 2024, je quitte mes fonctions chez Aircall pour me consacrer à ma foncière Aguesseau Capital où <strong>j'achète des immeubles et notamment des hôtels.</strong>
                </p>
              </TextBlock>

              <TextBlock>
                <p>
                  <strong>Je reste actionnaire d'Aircall et impliqué dans la stratégie du groupe, mais je n'y travaille plus au quotidien.</strong>
                </p>
              </TextBlock>

              <TextBlock className="italic">
                <p>Maison Iéna, un de mes hôtels dans le 16<sup>e</sup> arrondissement.</p>
              </TextBlock>

              <div className="mx-auto w-full max-w-3xl">
                <Image
                  src="/images/qui-suis-je/qui-5.webp"
                  alt="Jonathan Anguelov - Hôtel"
                  width={800}
                  height={350}
                  className="w-full rounded-2xl"
                />
              </div>

              <TextBlock>
                <p>
                  <strong>Si je vous raconte cette petite histoire, c'est pour vous donner envie de vous dépasser et ne jamais baisser les bras.</strong> Mon passé difficile a été mon moteur au quotidien et chaque échec a été une leçon.
                </p>
              </TextBlock>

              <TextBlock>
                <p>J'ai vite compris que je ne serais pas comme les autres, ma vie était différente et je l'étais tout autant.</p>
              </TextBlock>

              <TextBlock>
                <p>
                  <strong>"Rien à perdre", c'est d'ailleurs le nom de mon livre</strong> où je vous raconte toute mon histoire jusqu'à aujourd'hui avec tous les dessous de cette vie passée à se battre contre mon passé.
                </p>
              </TextBlock>

              <div className="mx-auto w-full max-w-3xl">
                <Image
                  src="/images/qui-suis-je/qui-6.webp"
                  alt="Jonathan Anguelov - Livre"
                  width={800}
                  height={350}
                  className="w-full rounded-2xl"
                />
              </div>

              <TextBlock>
                <p>Vous pouvez vous procurer le livre ici.</p>
              </TextBlock>

              <TextBlock>
                <p>
                  Ce livre est à la fois un récit de vie, <strong>un condensé de leçons et de conseils pour réussir.</strong> Mais c'est aussi et surtout un hommage à l'aide sociale à l'enfance, sans qui je ne serais pas là aujourd'hui.
                </p>
              </TextBlock>

              <TextBlock>
                <p>Ce n'est que le début.</p>
              </TextBlock>

              <TextBlock>
                <p>- Jonathan</p>
              </TextBlock>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
}
