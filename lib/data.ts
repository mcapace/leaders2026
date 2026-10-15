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

/* —— Gallery: photography from the Leaders 2026 issue —— */
export type GalleryImage = { src: string; alt: string };

export const galleryImages: GalleryImage[] = [
  { src: "/images/2026/photos/costco-exterior.avif", alt: "Costco warehouse exterior. Costco operates more than 900 warehouses globally." },
  { src: "/images/2026/photos/costco-wine.avif", alt: "Wooden wine boxes on the floor at Costco, where wine makes up 50% of beverage alcohol sales." },
  { src: "/images/2026/photos/costco-team.avif", alt: "Costco’s beverage buying team." },
  { src: "/images/2026/photos/abc-selections.avif", alt: "The World-Class Selections whiskey wall at ABC Fine Wine & Spirits." },
  { src: "/images/2026/photos/abc-store.avif", alt: "An ABC Fine Wine & Spirits store exterior in Florida." },
  { src: "/images/2026/photos/garys-aisles.avif", alt: "Wine aisles at Gary’s Wine & Marketplace, where wine is 65% of the business." },
  { src: "/images/2026/photos/yankee-beer-cave.avif", alt: "The beer cave at Yankee Spirits, which stocks about 3,000 beer SKUs." },
  { src: "/images/2026/photos/yankee-exterior.avif", alt: "A Yankee Spirits store exterior in Massachusetts." },
  { src: "/images/2026/photos/fresh-market-exterior.avif", alt: "A Fresh Market store exterior. The chain operates 172 stores across 22 states." },
  { src: "/images/2026/photos/fresh-market-wine.avif", alt: "The reserve wine selection at The Fresh Market." },
  { src: "/images/2026/photos/winecom-warehouse.avif", alt: "Inside a Wine.com fulfillment warehouse." },
  { src: "/images/2026/photos/winecom-packing.avif", alt: "Order packing at Wine.com." },
  { src: "/images/2026/photos/zipps-interior.avif", alt: "Inside a Zipps Liquor store, designed so shoppers find what they need within 30 seconds." },
  { src: "/images/2026/photos/zipps-exterior.avif", alt: "A Zipps Liquor store exterior in Texas." },
  { src: "/images/2026/photos/acquistapace-spirits.avif", alt: "The spirits aisle at Acquistapace’s in Covington, Louisiana." },
  { src: "/images/2026/photos/stew-swim-school.avif", alt: "Stew Leonard Jr., Kim Leonard, and Ryann Leonard Grossbard at a Stewie the Duck swim school." },
  { src: "/images/2026/photos/stew-interior.avif", alt: "Inside a Stew Leonard’s Wine & Spirits store." },
];

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
