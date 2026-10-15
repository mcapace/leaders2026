import type { Article, ArticleBlock, ArticleFigure } from "@/lib/articles";
import { articles } from "@/lib/articles";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export function ArticleHeader() {
  return (
    <header
      className="sticky top-0 z-20 border-b border-[#98652b]/50"
      style={{ backgroundColor: "rgba(20, 20, 20, 0.96)" }}
    >
      <nav className="mx-auto flex w-[90%] max-w-[81.25rem] items-center justify-between gap-4 py-3">
        <Link href="/" className="shrink-0 no-underline">
          <Image
            src="/images/logo/logo.png"
            alt="Market Watch"
            width={200}
            height={54}
            className="h-auto w-[96px] sm:w-[120px]"
            priority
          />
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/articles"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#fee2b2] no-underline transition hover:text-white sm:text-xs"
          >
            2026 Issue
          </Link>
          <Link
            href="/#winners"
            className="btn-alt no-underline"
            style={{ fontSize: "0.62rem" }}
          >
            All winners
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Figure({ figure }: { figure: ArticleFigure }) {
  const portrait = figure.orientation === "portrait";
  const product = figure.src.includes("/products/");
  return (
    <figure
      className={
        "my-10 " +
        (portrait ? "mx-auto w-full max-w-[26rem]" : "w-full")
      }
    >
      <div
        className={
          "relative w-full overflow-hidden rounded-lg " +
          (product ? "bg-white " : "bg-[#f1ebdf] ") +
          (portrait ? "aspect-[3/4]" : "aspect-[3/2]")
        }
      >
        <Image
          src={figure.src}
          alt={figure.alt}
          fill
          className={product ? "object-contain p-6" : "object-cover"}
          sizes="(max-width: 768px) 100vw, 44rem"
        />
      </div>
      {figure.caption && (
        <figcaption
          className="mt-2 text-[0.8rem] leading-snug text-[#141414]"
          style={{ opacity: 0.7 }}
        >
          {figure.caption}
        </figcaption>
      )}
    </figure>
  );
}

export function ArticleBody({
  article,
  blocks,
}: {
  article: Article;
  blocks: ArticleBlock[];
}) {
  const figures = article.figures ?? [];
  let figureIndex = 0;
  let headingCount = 0;

  const rendered: React.ReactNode[] = [];
  blocks.forEach((block, i) => {
    if (block.type === "h2") {
      headingCount += 1;
      // Place one figure before each heading after the first section.
      if (headingCount > 1 && figureIndex < figures.length) {
        rendered.push(
          <Figure key={`fig-${figureIndex}`} figure={figures[figureIndex]} />
        );
        figureIndex += 1;
      }
      rendered.push(
        <h2
          key={i}
          id={block.id}
          className="mt-10 scroll-mt-24 text-[1.5rem] font-semibold leading-tight text-[#98652b]"
          style={{ letterSpacing: "-0.02em" }}
        >
          {block.text}
        </h2>
      );
      return;
    }
    if (block.type === "byline") {
      rendered.push(
        <p
          key={i}
          className="mt-4 text-right text-[0.85rem] font-semibold italic text-[#98652b]"
        >
          {block.text}
        </p>
      );
      return;
    }
    rendered.push(
      <p
        key={i}
        className="article-p"
      >
        {block.text}
      </p>
    );
  });

  // Any figures that did not find a heading slot go at the end.
  while (figureIndex < figures.length) {
    rendered.push(
      <Figure key={`fig-${figureIndex}`} figure={figures[figureIndex]} />
    );
    figureIndex += 1;
  }

  return <div className="article-body">{rendered}</div>;
}

export function MoreArticles({ current }: { current: string }) {
  const others = articles.filter((a) => a.slug !== current);
  return (
    <section
      className="border-t px-4 py-16"
      style={{ borderColor: "#fee2b2", backgroundColor: "#fefcf7" }}
    >
      <div className="mx-auto w-full max-w-[81.25rem]">
        <h2 className="section-title gradient-text text-center" style={{ fontSize: "2.4rem" }}>
          More from the 2026 issue
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {others.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group flex gap-3 rounded-lg border border-[#fee2b2] bg-[#fee2b21a] p-2 no-underline transition hover:border-[#cc9933]"
            >
              <div className="relative aspect-[3/4] w-16 shrink-0 overflow-hidden rounded bg-white sm:w-20">
                <Image
                  src={a.hero.src}
                  alt=""
                  fill
                  className={a.hero.src.includes("/products/") ? "object-contain p-1" : "object-cover object-top"}
                  sizes="5rem"
                />
              </div>
              <div className="min-w-0">
                <div className="text-[0.6rem] font-bold uppercase leading-tight text-[#98652b]">
                  {a.kicker}
                </div>
                <div
                  className="mt-1 text-[0.95rem] font-medium leading-tight text-[#141414] group-hover:underline"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {a.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Footer };
