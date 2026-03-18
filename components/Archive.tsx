"use client";

import { archiveIssues } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function issueWrapperClass(size: "s" | "_2" | "large"): string {
  const base = "relative shrink-0";
  switch (size) {
    case "large":
      return `${base} w-1/2 md:w-[28%] lg:w-[24%]`;
    case "_2":
      return `${base} min-w-0 flex-1 opacity-100 lg:w-[19%] lg:flex-none`;
    case "s":
      return `${base} min-w-0 flex-1 opacity-80 lg:w-[16%] lg:flex-none`;
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
            Leaders Magazine Archive
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
                {issue.url && issue.featured ? (
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-alt"
                      >
                        view issue
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
