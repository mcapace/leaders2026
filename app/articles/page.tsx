import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles, articleSections } from "@/lib/articles";
import { LEADERS_2026_ISSUE_URL } from "@/lib/data";
import { ArticleHeader, Footer } from "@/components/ArticleLayout";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "The 2026 Issue",
  description:
    "Every profile from the Market Watch Leaders 2026 issue: Retailer of the Year, the Class of 2026, the Alumni Awards, and the Leaders Choice Awards.",
};

export default function ArticlesIndex() {
  return (
    <>
      <ArticleHeader />
      <main style={{ backgroundColor: "#fefcf7" }}>
        <section className="mx-auto w-full max-w-[81.25rem] px-5 pb-20 pt-12 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(14rem,20rem)_1fr] md:gap-12">
            <div className="relative mx-auto aspect-[1000/1318] w-full max-w-[18rem] overflow-hidden rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.25)] md:max-w-none">
              <Image
                src="/images/2026/covers/leaders-2026.avif"
                alt="Market Watch Leaders 2026 cover featuring Chad Sokol of Costco Wholesale Corp."
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 18rem, 20rem"
              />
            </div>
            <div>
              <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#98652b]">
                Market Watch · October 2026
              </p>
              <h1 className="section-title gradient-text mt-3" style={{ fontSize: "clamp(2.4rem, 5vw, 4.125rem)" }}>
                The Leaders 2026 Issue
              </h1>
              <p
                className="max-w-[40rem] text-[#141414]"
                style={{ fontSize: "1.0625rem", lineHeight: "1.5625rem", opacity: 0.8 }}
              >
                Eleven retailers from six companies are named Market Watch
                Leaders, Costco&apos;s Chad Sokol is Retailer of the Year, and
                Leaders veterans are honored for Best Marketing and Community
                Service. Read every profile below.
              </p>
              <p className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/#winners" className="btn-gold small inline-block no-underline" style={{ marginTop: 0 }}>
                  back to the winners
                </Link>
                <a
                  href={LEADERS_2026_ISSUE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-alt inline-block no-underline"
                  style={{ fontSize: "0.8rem", padding: "0.85rem 1.6rem" }}
                >
                  read the digital edition
                </a>
              </p>
            </div>
          </div>

          {articleSections.map((section) => {
            const list = articles.filter((a) => a.section === section);
            if (!list.length) return null;
            return (
              <div key={section} className="mt-16">
                <h2
                  className="border-b pb-2 text-[0.85rem] font-bold uppercase tracking-[0.14em] text-[#98652b]"
                  style={{ borderColor: "#fee2b2" }}
                >
                  {section}
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((a) => {
                    const isProduct = a.hero.src.includes("/products/");
                    return (
                      <Link
                        key={a.slug}
                        href={`/articles/${a.slug}`}
                        className="group flex gap-4 rounded-xl border border-[#fee2b2] bg-[#fee2b21a] p-3 no-underline transition hover:border-[#cc9933]"
                      >
                        <div className="relative aspect-[3/4] w-28 shrink-0 overflow-hidden rounded-md bg-white">
                          <Image
                            src={a.hero.src}
                            alt={a.hero.alt}
                            fill
                            className={isProduct ? "object-contain p-2" : "object-cover object-top"}
                            sizes="7rem"
                          />
                        </div>
                        <div className="min-w-0 py-1">
                          <div className="text-[0.62rem] font-bold uppercase leading-tight text-[#98652b]">
                            {a.kicker}
                          </div>
                          <h3
                            className="mt-1 text-[1.15rem] font-medium leading-tight text-[#141414] group-hover:underline"
                            style={{ letterSpacing: "-0.02em" }}
                          >
                            {a.title}
                          </h3>
                          <p
                            className="mt-2 text-[0.82rem] leading-snug text-[#141414]"
                            style={{ opacity: 0.75 }}
                          >
                            {a.summary}
                          </p>
                          <span className="mt-2 inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-wider text-[#98652b]">
                            read article
                            <ArrowRight size={13} className="transition group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
