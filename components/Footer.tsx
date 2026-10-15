import Image from "next/image";
import Link from "next/link";
import { NEXT_EVENT, corporateLinks, publications, siteLinks } from "@/lib/data";

const headingClass =
  "m-0 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#cc9933]";
const linkClass =
  "text-[0.9rem] leading-relaxed text-white/75 no-underline transition hover:text-[#fee2b2]";

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        backgroundColor: "#141414",
        borderTop: "0.0625rem solid rgba(152, 101, 43, 0.5)",
      }}
    >
      {/* Publications band */}
      <div className="border-b border-white/10">
        <div className="mx-auto w-[90%] max-w-container py-10">
          <p className={headingClass + " text-center"}>
            From the publishers of
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-14">
            {publications.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={p.description ? `${p.label}: ${p.description}` : p.label}
                  className="block opacity-80 transition hover:opacity-100"
                >
                  {p.logo ? (
                    <Image
                      src={p.logo.src}
                      alt={p.label}
                      width={p.logo.width}
                      height={p.logo.height}
                      className="h-7 w-auto sm:h-8"
                    />
                  ) : (
                    <span className={linkClass}>{p.label}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto grid w-[90%] max-w-container grid-cols-1 gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
        {/* Brand */}
        <div>
          <a
            href="https://www.mshanken.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Market Watch Leaders 2026"
              width={200}
              height={54}
              className="h-auto w-[120px]"
            />
          </a>
          <p className="mt-5 max-w-[26rem] text-[0.9rem] leading-relaxed text-white/75">
            The Market Watch Leaders Awards are presented by{" "}
            <a
              href="https://www.marketwatchmag.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fee2b2] no-underline hover:underline"
            >
              Market Watch
            </a>
            , the beverage alcohol trade magazine from{" "}
            <a
              href="https://www.mshanken.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fee2b2] no-underline hover:underline"
            >
              M. Shanken Communications, Inc.
            </a>
            , publisher of Wine Spectator, Cigar Aficionado, Whisky Advocate,
            Impact, and Shanken News Daily.
          </p>
          <div
            className="mt-6 inline-flex flex-col gap-1 rounded-lg border border-[#98652b]/70 px-4 py-3"
            style={{ backgroundColor: "rgba(254, 226, 178, 0.06)" }}
          >
            <span className={headingClass}>Save the date</span>
            <span className="text-[0.95rem] font-semibold text-white">
              {NEXT_EVENT.ordinal} Market Watch Leaders Awards
            </span>
            <span className="text-[0.85rem] text-[#fee2b2]/85">
              {NEXT_EVENT.dateLabel} · {NEXT_EVENT.city}
            </span>
          </div>
          <address className="mt-6 text-[0.8rem] not-italic leading-relaxed text-white/55">
            M. Shanken Communications, Inc.
            <br />
            825 Eighth Ave., 33rd Fl., New York, NY 10019-7475
            <br />
            Subscription questions:{" "}
            <a
              href="mailto:customerservice@mshanken.com"
              className="text-white/75 no-underline hover:text-[#fee2b2]"
            >
              customerservice@mshanken.com
            </a>
          </address>
        </div>

        {/* This site */}
        <div>
          <h2 className={headingClass}>Leaders 2026</h2>
          <ul className="mt-4 flex flex-col gap-1.5">
            {siteLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Publications + company */}
        <div>
          <h2 className={headingClass}>M. Shanken Communications</h2>
          <ul className="mt-4 flex flex-col gap-1.5">
            {[...corporateLinks, ...publications].map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {p.label}
                </a>
                {p.description && (
                  <span className="block text-[0.72rem] leading-snug text-white/45">
                    {p.description}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-[90%] max-w-container flex-col gap-3 py-5 text-[0.75rem] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">
            ©2026 M. Shanken Communications, Inc. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            <li>
              <a
                href="https://www.mshanken.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-[#fee2b2]"
              >
                mshanken.com
              </a>
            </li>
            <li>
              <a
                href="https://www.mshanken.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-[#fee2b2]"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.mshanken.com/termsofuse/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-[#fee2b2]"
              >
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
