/**
 * Site data for leaders2026.marketwatchmag.com
 *
 * Winners, Leaders Choice Awards, gallery photos and archive covers come from
 * the Market Watch Leaders 2026 issue (October 2026). Article text for the
 * "read article" pages lives in lib/articles.ts + lib/articles-content.json.
 */

export type AwardWinner = {
  id: string;
  /** Article slug under /articles/[slug] */
  articleSlug: string;
  category: string;
  name: string;
  company: string;
  title: string;
  location: string;
  bio: string;
  image: string;
};

export const winners: AwardWinner[] = [
  {
    id: "chad-sokol",
    articleSlug: "chad-sokol",
    category: "2026 Retailer of the Year",
    name: "Chad Sokol",
    company: "Costco Wholesale Corp.",
    title: "Vice President and General Merchandise Manager, Wine, Spirits, and Beer",
    location: "Issaquah, WA",
    bio: "Chad Sokol keeps Costco’s multi-billion-dollar beverage alcohol business thriving with a tightly curated, constantly rotating “treasure hunt” assortment anchored by the Kirkland Signature label. Fifteen years after Costco was first named Retailer of the Year, the warehouse giant earns the top honor again under his leadership.",
    image: "/images/2026/portraits/chad-sokol.avif",
  },
  {
    id: "abc-fine-wine-spirits",
    articleSlug: "abc-fine-wine-spirits",
    category: "2026 Market Watch Leaders",
    name: "Charlie Bailes IV, Chad Holloway, Sean Kelly, Dave Larue, and Chris Quarles",
    company: "ABC Fine Wine & Spirits",
    title: "Fourth-generation leadership team",
    location: "Orlando, FL",
    bio: "The fourth generation of the family behind ABC Fine Wine & Spirits is taking the 127-store Florida chain beyond its home state for the first time, with new superstores, a modernized technology stack, and the recent acquisition of Applejack Wine & Spirits in Colorado.",
    image: "/images/2026/portraits/abc-fine-wine-spirits.avif",
  },
  {
    id: "mike-fisch",
    articleSlug: "mike-fisch",
    category: "2026 Market Watch Leader",
    name: "Mike Fisch",
    company: "Gary’s Wine & Marketplace",
    title: "Chief Financial Officer",
    location: "Morristown, NJ",
    bio: "Son of former Retailer of the Year Gary Fisch, Mike Fisch has brought financial acumen and a flair for technology to the three-store New Jersey retailer, growing online sales to 20% of revenue and launching Samplii, a sampling-event platform now rolling out to the broader industry.",
    image: "/images/2026/portraits/mike-fisch.avif",
  },
  {
    id: "meghan-cimini-jones",
    articleSlug: "meghan-cimini-jones",
    category: "2026 Market Watch Leader",
    name: "Meghan Cimini-Jones",
    company: "Yankee Spirits",
    title: "Majority Owner",
    location: "Sturbridge, MA",
    bio: "A second-generation retailer who has worked nearly every job at Yankee Spirits, Meghan Cimini-Jones now leads the four-store, $60 million Massachusetts chain, following her father, the late Don Cimini, and her brother Michael as a Market Watch Leader.",
    image: "/images/2026/portraits/meghan-cimini-jones.avif",
  },
  {
    id: "fresh-market",
    articleSlug: "fresh-market",
    category: "2026 Market Watch Leaders",
    name: "Olivier Kielwasser and Kristen Bennett",
    company: "The Fresh Market",
    title: "Adult Beverage Director / Retail Category Manager",
    location: "Greensboro, NC",
    bio: "In a little more than two years, Olivier Kielwasser and Kristen Bennett have turned the beverage alcohol department at the 172-store specialty grocer from a declining category into one seeing weekly year-over-year growth, with cross-merchandising, private-label wines, and a fast-tracked THC beverage program.",
    image: "/images/2026/portraits/fresh-market.avif",
  },
  {
    id: "mark-pinho",
    articleSlug: "mark-pinho",
    category: "2026 Market Watch Leader",
    name: "Mark Pinho",
    company: "Wine.com",
    title: "Chief Executive Officer",
    location: "San Leandro, CA",
    bio: "Since taking the helm of the largest online-only wine retailer in 2024, Mark Pinho has shifted Wine.com from “growth at all costs” to long-term sustainability, fixing pricing, adding storage and timed delivery, and refocusing the site on the customer rather than the bottle.",
    image: "/images/2026/portraits/mark-pinho.avif",
  },
  {
    id: "anuj-mittal",
    articleSlug: "anuj-mittal",
    category: "2026 Market Watch Leader",
    name: "Anuj Mittal",
    company: "Zipps Liquors",
    title: "Chief Operating Officer",
    location: "Conroe, TX",
    bio: "Anuj Mittal helped scale his family’s Zipps Liquor chain from eight stores to 38 across Houston and East Texas, building a “Trader Joe’s of the liquor world” that wins on pricing, selection, and convenience, with more acquisitions ahead.",
    image: "/images/2026/portraits/anuj-mittal.avif",
  },
  {
    id: "adam-acquistapace",
    articleSlug: "adam-acquistapace",
    category: "Best Marketing Award",
    name: "Adam Acquistapace",
    company: "Acquistapace’s",
    title: "General Manager",
    location: "Covington, LA",
    bio: "A 2018 Market Watch Leader, Adam Acquistapace earns the Best Marketing Award for community-first events like the Cheese Extravaganza, a weekly television segment, and a world-class wine and spirits shop built inside the family’s Louisiana grocery stores.",
    image: "/images/2026/portraits/adam-acquistapace.avif",
  },
  {
    id: "stew-leonard",
    articleSlug: "stew-leonard",
    category: "Community Service Award",
    name: "Stew Leonard Jr.",
    company: "Stew Leonard’s Wine & Spirits",
    title: "President and CEO",
    location: "Norwalk, CT",
    bio: "After losing his son Stewie in 1989, Stew Leonard Jr. and his wife, Kim, built the Stew Leonard III Water Safety Foundation, which has raised more than $8 million and donated over 300,000 swim lessons through its Stewie the Duck swim schools.",
    image: "/images/2026/portraits/stew-leonard.avif",
  },
];

/* —— Leaders Choice Awards —— */
export type LeadersChoiceAward = {
  id: string;
  award: string;
  name: string;
  company: string;
  image: string;
  /** Product shots are tall bottles; portraits are 3:4 */
  imageStyle: "product" | "portrait";
  articleSlug: string;
  anchor?: string;
};

export const leadersChoiceAwards: LeadersChoiceAward[] = [
  {
    id: "tom-day",
    award: "Industry Executive of the Year",
    name: "Tom Day",
    company: "CEO, Reyes Beverage Group",
    image: "/images/2026/portraits/tom-day.avif",
    imageStyle: "portrait",
    articleSlug: "tom-day",
  },
  {
    id: "lunazul",
    award: "Spirits Brand of the Year",
    name: "Lunazul Tequila",
    company: "Heaven Hill Brands",
    image: "/images/2026/products/lunazul.avif",
    imageStyle: "product",
    articleSlug: "lunazul",
  },
  {
    id: "avaline",
    award: "Wine Brand of the Year",
    name: "Avaline",
    company: "Avaline Ltd.",
    image: "/images/2026/products/avaline.avif",
    imageStyle: "product",
    articleSlug: "avaline",
  },
  {
    id: "gran-malo",
    award: "Best New Product: Spirits",
    name: "Gran Malo",
    company: "Gallo",
    image: "/images/2026/products/gran-malo.avif",
    imageStyle: "product",
    articleSlug: "best-new-products",
    anchor: "gran-malo",
  },
  {
    id: "decoy-featherweight",
    award: "Best New Product: Wine",
    name: "Decoy Featherweight",
    company: "The Duckhorn Portfolio",
    image: "/images/2026/products/decoy-featherweight.avif",
    imageStyle: "product",
    articleSlug: "best-new-products",
    anchor: "decoy-featherweight",
  },
];

/* —— Event gallery —— */
export type GalleryImage = { src: string; alt: string };

/**
 * Photos from the October 8, 2026 awards dinner. Leave empty to show the
 * "coming soon" state; add { src, alt } entries to turn the slider on.
 */
export const galleryImages: GalleryImage[] = [];

export const eventGallery = {
  heading: "2026 Event Gallery",
  comingSoon: "Coming soon",
  blurb:
    "Photography from the 43rd annual Market Watch Leaders Awards dinner at The Pierre, New York, is on its way.",
  backdrop: "/images/hero-2026.avif",
};

/* —— Archive —— */
const LEADERS_2024_IPT = "b2a88fc3-9b32-4912-953d-f7635166cc6e";

export type ArchiveIssue = {
  year: number;
  image: string;
  url: string | null;
  featured: boolean;
  size: "xs" | "s" | "_2" | "large";
};

/** Left-to-right layout: 2020, 2022, 2024, 2026 (featured), 2025, 2023, 2021 */
export const archiveIssues: ArchiveIssue[] = [
  { year: 2020, image: "/images/archive-2020.avif", url: null, featured: false, size: "xs" },
  { year: 2022, image: "/images/archive-2022.avif", url: null, featured: false, size: "s" },
  {
    year: 2024,
    image: "/images/archive-2024.avif",
    url: `https://reader.emagazines.com/?id=${LEADERS_2024_IPT}`,
    featured: false,
    size: "_2",
  },
  {
    year: 2026,
    image: "/images/2026/covers/leaders-2026.avif",
    url: "/articles",
    featured: true,
    size: "large",
  },
  {
    year: 2025,
    image: "/images/2026/covers/leaders-2025.avif",
    url: "https://reader.emagazines.com/issue/market-watch/leaders-2025",
    featured: false,
    size: "_2",
  },
  { year: 2023, image: "/images/archive-2023.avif", url: null, featured: false, size: "s" },
  { year: 2021, image: "/images/archive-2021.avif", url: null, featured: false, size: "xs" },
];

/* —— navigation (used by Navbar) —— */
export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#winners", label: "Winners" },
  { href: "#leaders-choice", label: "Leaders Choice" },
  { href: "#gallery", label: "Gallery" },
  { href: "#archive", label: "Archive" },
  { href: "#contact", label: "Contact" },
];

/* —— Next event —— */
export const NEXT_EVENT = {
  ordinal: "44th Annual",
  /** Used by the hero countdown; see lib/useCountdown.ts */
  dateLabel: "October 7, 2027",
  city: "New York City",
};

/* —— Footer —— */
export const siteLinks: NavLink[] = [
  { href: "/#winners", label: "2026 Award Winners" },
  { href: "/#leaders-choice", label: "Leaders Choice Awards" },
  { href: "/articles", label: "Read the 2026 Issue" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#archive", label: "Past Issues" },
  { href: "/#contact", label: "Contact" },
];

export type Publication = {
  href: string;
  label: string;
  description?: string;
  /** White-on-transparent logo under public/images/logos; sized by intrinsic px */
  logo?: { src: string; width: number; height: number };
};

/** M. Shanken Communications publications, shown with logos in the footer */
export const publications: Publication[] = [
  {
    href: "https://www.marketwatchmag.com/",
    label: "Market Watch",
    description: "Market intelligence on spirits, wine and beer",
    logo: { src: "/images/logos/market-watch.png", width: 1062, height: 160 },
  },
  {
    href: "https://www.winespectator.com/",
    label: "Wine Spectator",
    description: "The world’s leading authority on wine",
    logo: { src: "/images/logos/wine-spectator.png", width: 595, height: 160 },
  },
  {
    href: "https://www.cigaraficionado.com/",
    label: "Cigar Aficionado",
    description: "The magazine for the good life",
    logo: { src: "/images/logos/cigar-aficionado.png", width: 802, height: 160 },
  },
  {
    href: "https://whiskyadvocate.com/",
    label: "Whisky Advocate",
    description: "America’s leading whisky magazine",
    logo: { src: "/images/logos/whisky-advocate.png", width: 466, height: 160 },
  },
  {
    href: "https://www.mshanken.com/impact/",
    label: "Impact",
    description: "Impact newsletter and Impact Databank",
    logo: { src: "/images/logos/impact.png", width: 444, height: 160 },
  },
  {
    href: "https://www.shankennewsdaily.com/",
    label: "Shanken News Daily",
    description: "Daily news for the beverage alcohol trade",
    logo: { src: "/images/logos/shanken-news-daily.png", width: 453, height: 160 },
  },
];

export const corporateLinks: Publication[] = [
  { href: "https://www.mshanken.com/", label: "M. Shanken Communications", description: "50+ years of publishing with integrity" },
  { href: "https://www.mshanken.com/events/", label: "Events", description: "WhiskyFest, Big Smoke, Wine Experience and more" },
];
