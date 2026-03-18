import type { Metadata } from "next";
import "./globals.css";

const title = "The 2025 Market Watch Leaders Awards";
const description =
  "October 9th, 2025 at Pierre Hotel, NYC. Hosted by Marvin R. Shanken, Chairman, M. Shanken Communications, Inc. Honoring the most progressive wine & spirits merchants in North America.";

export const metadata: Metadata = {
  metadataBase: new URL("https://leaders2025.marketwatchmag.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/images/hero.avif",
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.avif"],
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
