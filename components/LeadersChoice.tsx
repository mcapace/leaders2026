"use client";

import { issuePageUrl, leadersChoiceAwards } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "@/components/Icons";

export default function LeadersChoice() {
  return (
    <section
      id="leaders-choice"
      className="border-y px-4 py-24"
      style={{
        backgroundColor: "#141414",
        borderColor: "#98652b",
        borderWidth: "0.0625rem",
      }}
    >
      <div className="mx-auto w-full max-w-[81.25rem]">
        <header className="mx-auto max-w-[40.625rem] px-6 text-center">
          <h2 className="section-title gradient-text">
            2026 Leaders Choice Awards
          </h2>
          <p
            className="mt-4 text-white"
            style={{
              opacity: 0.78,
              fontSize: "1.0625rem",
              lineHeight: "1.5625rem",
            }}
          >
            The year&apos;s standout brands, new products, and the executive
            who reshaped the second tier, as chosen by Market Watch.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {leadersChoiceAwards.map((award, i) => {
            const href = issuePageUrl(award.issuePage);
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 5) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-xl border border-[#98652b]/60 bg-[#fee2b20d] p-3 no-underline transition hover:border-[#cc9933] hover:bg-[#fee2b21a] sm:p-4"
                >
                  <div
                    className={
                      "relative w-full overflow-hidden rounded-md " +
                      (award.imageStyle === "product"
                        ? "aspect-[3/4] bg-white"
                        : "aspect-[3/4] bg-[#1f1f1f]")
                    }
                  >
                    <Image
                      src={award.image}
                      alt={award.name}
                      fill
                      className={
                        award.imageStyle === "product"
                          ? "object-contain p-3 transition duration-300 group-hover:scale-[1.03]"
                          : "object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                      }
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                  <div
                    className="mt-3 font-bold uppercase leading-tight text-[#cc9933]"
                    style={{ fontSize: "0.68rem", letterSpacing: "0.04em" }}
                  >
                    {award.award}
                  </div>
                  <div
                    className="mt-1 text-white"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                    }}
                  >
                    {award.name}
                  </div>
                  <div
                    className="mt-1 text-[0.8rem] leading-tight text-[#fee2b2]"
                    style={{ opacity: 0.8 }}
                  >
                    {award.company}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[0.7rem] font-semibold uppercase tracking-wider text-[#fee2b2] opacity-70 transition group-hover:opacity-100">
                    read article
                    <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
