import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#winners", label: "Winners" },
  { href: "/#leaders-choice", label: "Leaders Choice" },
  { href: "/articles", label: "The 2026 Issue" },
  { href: "/#archive", label: "Archive" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "#141414", borderTop: "0.0625rem solid #98652b66" }}
    >
      <div className="mx-auto flex w-[90%] max-w-container flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo/logo.png"
            alt="Market Watch Leaders 2026"
            width={200}
            height={54}
            className="h-auto w-[96px]"
          />
          <p className="m-0 max-w-[22rem] text-[0.78rem] leading-snug text-white/65">
            Market Watch is published by M. Shanken Communications, Inc.
            Profiles are from the Leaders 2026 issue.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#fee2b2]/80 no-underline transition hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto w-[90%] max-w-container border-t border-white/10 py-4 text-[0.75rem] text-white/55">
        ©2026 Market Watch · M. Shanken Communications, Inc.
      </div>
    </footer>
  );
}
