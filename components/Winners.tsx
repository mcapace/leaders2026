"use client";

import type { AwardWinner } from "@/lib/data";
import { winners } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function WinnerCard({
  winner,
  index,
}: {
  winner: AwardWinner;
  index: number;
}) {
  const delay = (index % 2) * 0.1;

  return (
    <motion.article
      className="flex flex-col gap-0 border border-[#fee2b2] bg-[#fee2b21a] p-3 min-[480px]:flex-row"
      style={{ borderWidth: "0.0625rem", borderRadius: "0.75rem" }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex w-full flex-col justify-between min-[480px]:w-[40%]">
        <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-md">
          <Image
            src={winner.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href={winner.articleDesktop}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold small hidden no-underline sm:inline-block"
          >
            read article
          </Link>
          <Link
            href={winner.articleMobile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold small inline-block no-underline sm:hidden"
          >
            read article
          </Link>
        </div>
      </div>

      <div className="w-full px-3 py-0 min-[480px]:w-[55%] min-[480px]:py-3">
        <div
          className="font-bold uppercase leading-none text-[#98652b]"
          style={{ fontSize: "0.75rem" }}
        >
          {winner.category}
        </div>
        <h3
          className="mt-1 text-[#141414]"
          style={{
            fontSize: "1.5rem",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            marginBottom: "0.375rem",
          }}
        >
          {winner.name}
        </h3>
        <div className="text-[0.8rem] font-bold leading-tight text-[#141414]">
          {winner.company}
        </div>
        <div
          className="text-[0.8rem] leading-tight text-[#141414]"
          style={{ opacity: 0.8 }}
        >
          {winner.title}
        </div>
        <div
          className="text-[0.8rem] leading-tight text-[#141414]"
          style={{ opacity: 0.7 }}
        >
          {winner.location}
        </div>
        <p
          className="text-[#141414]"
          style={{
            opacity: 0.8,
            marginTop: "1.5rem",
            lineHeight: "150%",
            fontSize: "0.875rem",
          }}
        >
          {winner.bio}
        </p>
      </div>
    </motion.article>
  );
}

export default function Winners() {
  return (
    <section
      id="winners"
      className="px-4 py-24"
      style={{ backgroundColor: "#fefcf7" }}
    >
      <div className="mx-auto w-full max-w-[81.25rem]">
        <header className="mx-auto max-w-[40.625rem] px-6 text-center">
          <h2 className="section-title gradient-text">
            2024 award winners
          </h2>
          <p
            className="mt-4"
            style={{
              opacity: 0.8,
              color: "#141414",
              fontSize: "1.0625rem",
              lineHeight: "1.5625rem",
            }}
          >
            Meet last year&apos;s standout retailers, recognized for excellence
            in innovation, service, and impact.
          </p>
        </header>

        {winners.length === 0 ? (
          <p className="mt-8 text-center text-neutral-600">
            Add winners in lib/data.ts.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {winners.map((w, i) => (
              <WinnerCard key={w.id} winner={w} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
