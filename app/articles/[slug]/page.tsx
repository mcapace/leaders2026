import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Article } from "@/lib/articles";
import { articles, getArticle, getArticleBlocks } from "@/lib/articles";
import {
  ArticleBody,
  ArticleHeader,
  Footer,
  MoreArticles,
} from "@/components/ArticleLayout";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.dek,
    openGraph: {
      title: `${article.title} | Market Watch Leaders 2026`,
      description: article.dek,
      type: "article",
      images: [{ url: article.hero.src, alt: article.hero.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
      images: [article.hero.src],
    },
  };
}

export default function ArticlePage({ params }: Params) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const blocks = getArticleBlocks(article.slug);
  const isProduct = article.hero.src.includes("/products/");

  return (
    <>
      <ArticleHeader />
      <main style={{ backgroundColor: "#fefcf7" }}>
        <article className="mx-auto w-full max-w-[81.25rem] px-5 pb-16 pt-10 sm:px-8 md:pt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_minmax(16rem,22rem)] md:gap-12 lg:grid-cols-[1fr_minmax(18rem,26rem)]">
            <div className="flex flex-col justify-center">
              <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#98652b]">
                {article.kicker}
              </p>
              <h1
                className="gradient-text mt-3"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  margin: "0.75rem 0 0",
                }}
              >
                {article.title}
              </h1>
              <p
                className="mt-5 text-[#141414]"
                style={{
                  fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)",
                  lineHeight: 1.45,
                  opacity: 0.85,
                }}
              >
                {article.dek}
              </p>
              <p className="mt-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#98652b]">
                {article.byline}
              </p>
              <p className="mt-1 text-[0.75rem] text-[#141414]" style={{ opacity: 0.55 }}>
                Market Watch Leaders 2026 · {article.pages}
              </p>
            </div>

            <figure className="m-0 md:justify-self-end md:w-full">
              <div
                className={
                  "relative w-full overflow-hidden rounded-xl " +
                  (isProduct ? "aspect-[3/4] bg-white" : "aspect-[3/4] bg-[#f1ebdf]")
                }
              >
                <Image
                  src={article.hero.src}
                  alt={article.hero.alt}
                  fill
                  priority
                  className={isProduct ? "object-contain p-6" : "object-cover object-top"}
                  sizes="(max-width: 768px) 100vw, 26rem"
                />
              </div>
              {article.hero.caption && (
                <figcaption
                  className="mt-2 text-[0.78rem] leading-snug text-[#141414]"
                  style={{ opacity: 0.7 }}
                >
                  {article.hero.caption}
                </figcaption>
              )}
            </figure>
          </div>

          <div className="mx-auto mt-12 w-full max-w-[44rem]">
            {article.people && (
              <div className="mb-2">
                <PeopleStrip article={article} />
              </div>
            )}
            <ArticleBody article={article} blocks={blocks} />
            <KeyFactsBlock article={article} />
            <p className="mt-10 text-center">
              <Link href="/#winners" className="btn-gold small inline-block no-underline">
                back to the 2026 winners
              </Link>
            </p>
          </div>
        </article>
        <MoreArticles current={article.slug} />
      </main>
      <Footer />
    </>
  );
}


function PeopleStrip({ article }: { article: Article }) {
  if (!article.people?.length) return null;
  return (
    <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      {article.people.map((p) => (
        <div key={p.name} className="text-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[9rem] overflow-hidden rounded-md">
            <Image
              src={p.headshot}
              alt={p.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 9rem"
            />
          </div>
          <div className="mt-2 text-[0.85rem] font-bold text-[#141414]">
            {p.name}
          </div>
          <div
            className="text-[0.72rem] leading-snug text-[#141414]"
            style={{ opacity: 0.7 }}
          >
            {p.title}
          </div>
        </div>
      ))}
    </div>
  );
}

function KeyFactsBlock({ article }: { article: Article }) {
  if (!article.keyFacts) return null;
  return (
    <aside
      className="my-12 rounded-xl p-6 text-white sm:p-8"
      style={{ backgroundColor: "#141414" }}
      aria-label={article.keyFacts.heading}
    >
      <h2
        className="gradient-text uppercase"
        style={{ fontSize: "1.1rem", lineHeight: 1.2, margin: "0 0 1rem", fontWeight: 700 }}
      >
        {article.keyFacts.heading}
      </h2>
      <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-[max-content_1fr]">
        {article.keyFacts.facts.map((f) => (
          <div key={f.label} className="contents">
            <dt className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#cc9933] sm:pt-[0.15rem]">
              {f.label}
            </dt>
            <dd className="m-0 text-[0.9rem] leading-relaxed text-white/85">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
