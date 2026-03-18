/** eMagazines issue deep links (Leaders 2024) — from leaders2025.marketwatchmag.com */
const LEADERS_2024_IPT = "b2a88fc3-9b32-4912-953d-f7635166cc6e";
const article = (page: string, mobilePage: string) => ({
  articleDesktop: `https://reader.emagazines.com/issue/market-watch/leaders-2024?ipt=${LEADERS_2024_IPT}#${page}`,
  articleMobile: `https://reader.emagazines.com/issue/market-watch/leaders-2024?viewMobile=true&ipt=${LEADERS_2024_IPT}#${mobilePage}`,
});

export type AwardWinner = {
  id: string;
  category: string;
  name: string;
  company: string;
  title: string;
  location: string;
  bio: string;
  image: string;
  articleDesktop: string;
  articleMobile: string;
};

export const winners: AwardWinner[] = [
  {
    id: "jim-shpall",
    category: "Retailer of the Year",
    name: "Jim Shpall",
    company: "Applejack Wine & Spirits",
    title: "CEO",
    location: "Wheat Ridge, Colorado",
    bio: "Jim Shpall left a career in law to grow Applejack Wine & Spirits into one of Colorado’s top retail chains. With a focus on clean store design, wide selection, and strong pricing, he modernized all three locations and built Applejack into a go-to destination for wine, spirits, and more.",
    image:
      "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/682735ecaf3a2e2a3512deba_1.avif",
    ...article("p124", "p63"),
  },
  {
    id: "abc-fine-wine-spirits",
    category: "Community Service Award",
    name: "ABC Fine Wine & Spirits",
    company: "ABC Fine Wine & Spirits",
    title: "Owner and CEO / Executive Vice President",
    location: "Orlando, Florida",
    bio: "ABC Fine Wine & Spirits, a family business since 1936, has been recognized with the 2024 Market Watch Leaders Community Service Award for its strong commitment to charitable giving and community engagement. Led by Charles and Jess Bailes, the company supports causes like the National Pediatric Cancer Foundation and United Cerebral Palsy of Central Florida, while promoting a culture of service across its 127 locations.",
    image:
      "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/68273614f0c423b388632a5f_2.avif",
    ...article("p118", "p61"),
  },
  {
    id: "marques-warren",
    category: "Best Marketing Award 2024",
    name: "Marques Warren",
    company: "Downtown Spirits",
    title: "Owner",
    location: "Seattle, WA",
    bio: "Marques Warren blends tradition and tech through Downtown Spirits, Esquin Wine & Spirits, and Madwine.com. With exclusive offerings, digital memberships, and Amazon-integrated sales tools, his strategy keeps wine and spirits retail fresh and customer-focused.",
    image:
      "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/682736a4a43712836f53f504_3.avif",
    ...article("p112", "p59"),
  },
  {
    id: "barry-broudy",
    category: "Market Watch Leader 2024",
    name: "Barry Broudy",
    company: "Broudy’s Liquors",
    title: "Co-owner",
    location: "St. Augustine, FL",
    bio: "Barry Broudy carries on a four-generation retail tradition through Broudy’s Liquors, now five modern stores strong across northeast Florida. With a strong focus on education, service, and Bourbon-driven innovation, he’s helping evolve the customer experience while preserving family business values.",
    image:
      "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/6827372635bca0c8763fcf14_4.avif",
    ...article("p106", "p57"),
  },
  {
    id: "neal-rounseville",
    category: "Market Watch Leader 2024",
    name: "Neal Rounseville",
    company: "M&R Liquors",
    title: "Vice President and Co-owner",
    location: "South Windsor, CT",
    bio: "With over four decades in beverage retail, Neal Rounseville has helped grow M&R Liquors into one of Connecticut’s most respected chains. Known for its strong service model and deep product knowledge, the six-store business continues to thrive under his leadership and focus on customer connection.",
    image:
      "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/6827379ef60fc7a98a546d59_5.avif",
    ...article("p100", "p55"),
  },
  {
    id: "beau-starkel",
    category: "Market Watch Leader 2024",
    name: "Beau Starkel",
    company: "Wine, Beer, and Spirits",
    title: "Co-owner and CEO",
    location: "Omaha, NE",
    bio: "Beau Starkel launched Wine, Beer, and Spirits during the pandemic and grew it into one of Nebraska’s largest beverage alcohol retailers in just a few years. With five stores, a strong brand identity, and focus on in-store experience, Starkel has helped shape a new model for modern drinks retail in the state.",
    image:
      "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/6827380c3203a9f3030fa882_6.avif",
    ...article("p94", "p53"),
  },
  {
    id: "vanessa-patel",
    category: "Market Watch Leader 2024",
    name: "Vanessa Patel",
    company: "A1A Fine Wine & Spirits",
    title: "Owner",
    location: "Palm Beach Gardens, FL",
    bio: "Vanessa Patel built her store from the ground up with a sharp palate, global perspective, and deep customer care. Known for her curated selection and service-first mindset, she has made A1A Fine Wine & Spirits a boutique standout in Florida’s retail scene.",
    image:
      "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/682738ad56236aa23786030d_7.avif",
    ...article("p88", "p51"),
  },
  {
    id: "chris-lamb",
    category: "Market Watch Leader 2024",
    name: "Chris Lamb",
    company: "Indiana Liquor Group",
    title: "President and Managing Partner",
    location: "Carmel, IN",
    bio: "Chris Lamb leads Indiana Liquor Group, one of the fastest-growing store groups in the U.S., with 59 locations and a focus on smart acquisitions, local trust, and efficient operations. Under his leadership, ILG has expanded rapidly across Indiana while maintaining strong sales performance and customer experience.",
    image:
      "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/682739255ab2b4b6e8b43201_8.avif",
    ...article("p82", "p49"),
  },
  {
    id: "ted-beau-farrell",
    category: "Market Watch Leader 2024",
    name: "Ted and Beau Farrell",
    company: "Haskell’s",
    title: "President and VP of E-commerce and Digital Marketing",
    location: "Minneapolis, MN",
    bio: "Ted and Beau Farrell are carrying on a 90-year legacy at Haskell’s, leading 11 retail stores across Minnesota with a focus on customer experience, curated selection, and digital innovation. Under their leadership, Haskell’s has embraced both tradition and growth, serving as a model for family-run beverage alcohol businesses.",
    image:
      "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/68273a59824a1874a4072d0d_9.avif",
    /** No per-winner article pair on the live page; next spread after Chris Lamb (p82/p49) */
    ...article("p76", "p47"),
  },
];

export const galleryImages: string[] = [
  "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/684c51db70f7b7319aa5ecf8_01__JS11040.avif",
  "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/684c51db4ba6d2d6cf871f89_02__JS11072.avif",
  "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/684c51dbf4639fdb5c1be78b_03__JS11079.avif",
  "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/684c51db442ab451c710645b_04__JS10955.avif",
  "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/684c51db8aaa2502ec693b59_05__JS10968.avif",
  "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/684c51dba6df476fcfcdb67e_06__JS10983.jpeg",
  "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/684c51db157db353f8ce958c_07__JS11022.jpeg",
  "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/684c51dbaf0d54a6743ac19b_10__JS10954.avif",
  "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/684c51db4f85cb75d11cf8b4_11__JS11088.avif",
  "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/684c51db40efcf9fb9ee5b7e_12__JS10975.avif",
  "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/684c51dc2b45ba4b11a6d46b_13__JS10982.avif",
  "https://cdn.prod.website-files.com/67f3d07b797bbf643e7b65b5/684c51dcfdce344bca7d478f_14__JS10985.avif",
];

export type ArchiveIssue = {
  year: number;
  image: string;
  url: string | null;
  featured: boolean;
  size: "s" | "_2" | "large";
};

/** Left-to-right layout: 2020, 2023, 2024 (featured), 2022, 2021 */
export const archiveIssues: ArchiveIssue[] = [
  {
    year: 2020,
    image: "/images/archive-2020.avif",
    url: null,
    featured: false,
    size: "s",
  },
  {
    year: 2023,
    image: "/images/archive-2023.avif",
    url: null,
    featured: false,
    size: "_2",
  },
  {
    year: 2024,
    image: "/images/archive-2024.avif",
    url: `https://reader.emagazines.com/?id=${LEADERS_2024_IPT}`,
    featured: true,
    size: "large",
  },
  {
    year: 2022,
    image: "/images/archive-2022.avif",
    url: null,
    featured: false,
    size: "_2",
  },
  {
    year: 2021,
    image: "/images/archive-2021.avif",
    url: null,
    featured: false,
    size: "s",
  },
];

/* —— navigation (used by Navbar) —— */
export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#winners", label: "Winners" },
  { href: "#gallery", label: "Gallery" },
  { href: "#archive", label: "Archive" },
  { href: "#contact", label: "Contact" },
];
