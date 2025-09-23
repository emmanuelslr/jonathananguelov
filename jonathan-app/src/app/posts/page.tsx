import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import ArticlesSection from "@/components/home/ArticlesSection";
import FooterSection from "@/components/home/FooterSection";

export const metadata: Metadata = {
  title: "Articles - Jonathan Anguelov",
  description: "Articles de presse et interviews de Jonathan Anguelov dans Challenges, Le Figaro, TechCrunch, Capital, Les Échos, Business Insider",
  alternates: {
    canonical: "https://www.jonathananguelov.com/posts",
  },
  keywords: ["Jonathan Anguelov", "Articles", "Presse", "Interviews"],
  authors: [{ name: "Jonathan Anguelov" }],
  openGraph: {
    title: "Articles - Jonathan Anguelov",
    description: "Articles de presse et interviews de Jonathan Anguelov dans Challenges, Le Figaro, TechCrunch, Capital, Les Échos, Business Insider",
    url: "https://www.jonathananguelov.com/posts",
    images: [
      {
        url: "https://d1yei2z3i6k35z.cloudfront.net/10521134/67aba0ff68d67_Retouche_PRESSE_.jpg",
        alt: "Jonathan Anguelov - Articles",
      },
    ],
  },
};

export default function PostsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="bg-[#012634] py-16 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold sm:text-5xl">Articles</h1>
              <p className="mt-4 text-lg text-white/80">
                Découvrez les articles de presse et interviews de Jonathan Anguelov
              </p>
            </div>
          </div>
        </div>
        <ArticlesSection />
        <FooterSection />
      </main>
    </>
  );
}