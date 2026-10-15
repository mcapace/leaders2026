import type { Metadata } from "next";
import "./globals.css";

const title = "The 2026 Market Watch Leaders Awards";
const description =
  "Meet the 2026 Market Watch Leaders: Retailer of the Year Chad Sokol of Costco, the Class of 2026, the Alumni Award winners, and the Leaders Choice Awards. Honored October 8, 2026 at The Pierre, New York City.";

export const metadata: Metadata = {
  metadataBase: new URL("https://leaders2026.marketwatchmag.com"),
  title: {
    default: title,
    template: "%s | Market Watch Leaders 2026",
  },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/images/2026/covers/leaders-2026.avif",
        alt: "Market Watch Leaders 2026 cover featuring Chad Sokol of Costco Wholesale Corp.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/2026/covers/leaders-2026.avif"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
