"use client";

import { archiveIssues } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function issueWrapperClass(size: "xs" | "s" | "_2" | "large"): string {
  const base = "relative shrink-0";
  switch (size) {
    case "large":
      return `${base} w-1/2 md:w-[26%] lg:w-[19%]`;
    case "_2":
      return `${base} min-w-0 flex-1 opacity-100 lg:w-[15%] lg:flex-none`;
    case "s":
      return `${base} min-w-0 flex-1 opacity-80 lg:w-[12.5%] lg:flex-none`;
    case "xs":
      return `${base} hidden min-w-0 flex-1 opacity-70 md:block lg:w-[9.5%] lg:flex-none`;
    default:
      return base;
  }
}

export default function Archive() {
  return (
    <section
      id="archive"
      className="px-4 py-24"
      style={{ backgroundColor: "#fefcf7" }}
    >
      <div className="mx-auto w-full max-w-[81.25rem]">
        <header className="mx-auto max-w-[40.625rem] px-6 text-center">
          <h2 className="section-title gradient-text">Explore Past Issues</h2>
          <p
            className="mt-4"
            style={{
              opacity: 0.8,
              color: "#141414",
              fontSize: "1.0625rem",
              lineHeight: "1.5625rem",
            }}
          >
            Seven years of Market Watch Leaders. Open the 2026 issue to read
            this year&apos;s profiles, or revisit 2024 and 2025 in the digital
            edition.
          </p>
        </header>

        {archiveIssues.length === 0 ? (
          <p className="mt-8 text-center text-neutral-600">
            Add archive issues in lib/data.ts.
          </p>
        ) : (
          <motion.div
            className="mt-12 flex flex-row items-center justify-between gap-1 sm:gap-2 lg:gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {archiveIssues.map((issue) => (
              <div
                key={issue.year}
                className={issueWrapperClass(issue.size)}
              >
                {issue.url ? (
                  <div className="relative w-full">
                    <Image
                      src={issue.image}
                      alt={`Market Watch Leaders ${issue.year}`}
                      width={400}
                      height={560}
                      className="h-auto w-full"
                    />
                    <div className="absolute bottom-0 right-0 p-2">
                      <Link
                        href={issue.url}
                        target={issue.url.startsWith("/") ? undefined : "_blank"}
                        rel={issue.url.startsWith("/") ? undefined : "noopener noreferrer"}
                        className="btn-alt"
                      >
                        {issue.featured ? "read the articles" : "view issue"}
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={issue.image}
                    alt={`Market Watch Leaders ${issue.year}`}
                    width={400}
                    height={560}
                    className="h-auto w-full"
                  />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
