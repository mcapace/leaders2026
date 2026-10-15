"use client";

import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const links = navLinks.filter((l) => l.href !== "#hero");

  return (
    <motion.header
      className="section-nav pointer-events-none absolute inset-x-0 top-0 z-10"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <nav className="pointer-events-auto mx-auto flex w-[90%] max-w-[81.25rem] items-center justify-between gap-4 pt-4 md:pt-5">
        <Link
          href="#hero"
          className="shrink-0 drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Market Watch Leaders 2026"
            width={200}
            height={54}
            className="h-auto w-[104px] sm:w-[118px] md:w-[132px] lg:w-[148px]"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#fee2b2]/85 no-underline transition hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#winners"
          className="btn-alt no-underline md:hidden"
          style={{ fontSize: "0.62rem" }}
        >
          Winners
        </a>
      </nav>
    </motion.header>
  );
}
