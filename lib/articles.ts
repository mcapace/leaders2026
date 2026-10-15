/**
 * Articles from the Market Watch Leaders 2026 issue.
 *
 * Metadata (titles, bylines, images, key facts) is curated here; the body
 * text was extracted from the issue PDF into lib/articles-content.json.
 */
import content from "./articles-content.json";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "byline"; text: string };

export type ArticleFigure = {
  src: string;
  alt: string;
  caption?: string;
  /** Source image orientation; defaults to landscape */
  orientation?: "landscape" | "portrait";
};

export type KeyFact = { label: string; value: string };

export type ArticleSection =
  | "Retailer of the Year"
  | "Class of 2026"
  | "Alumni Awards"
  | "Leaders Choice Awards";

export type Article = {
  slug: string;
  section: ArticleSection;
  /** Small uppercase label above the headline */
  kicker: string;
  title: string;
  dek: string;
  byline: string;
  /** Printed page range in the issue */
  pages: string;
  summary: string;
  hero: ArticleFigure;
  /** Inline figures, placed before successive section headings */
  figures?: ArticleFigure[];
  keyFacts?: { heading: string; facts: KeyFact[] };
  people?: { name: string; title: string; headshot: string }[];
};

const P = "/images/2026/portraits";
const H = "/images/2026/headshots";
const F = "/images/2026/photos";
const PR = "/images/2026/products";

export const articles: Article[] = [
  {
    slug: "chad-sokol",
    section: "Retailer of the Year",
    kicker: "2026 Retailer of the Year",
    title: "Hunting For Treasure",
    dek: "Chad Sokol keeps fine wine and spirits retail thriving at Costco Wholesale Corp.",
    byline: "By Laura Pelner • Photography by Hilary McMullen",
    pages: "Pages 64–69",
    summary:
      "Costco’s constantly rotating “treasure hunt” assortment and Kirkland Signature label add up to a multi-billion-dollar beverage business.",
    hero: {
      src: `${P}/chad-sokol.avif`,
      alt: "Chad Sokol standing among wooden wine boxes at a Costco warehouse",
      caption:
        "Chad Sokol, Costco’s vice president and general merchandise manager for wine, spirits, and beer, receives this year’s Market Watch Leaders Retailer of the Year award for his dedication to maintaining well-curated product selections across the Costco chain of big-box stores.",
      orientation: "portrait",
    },
    figures: [
      {
        src: `${F}/costco-exterior.avif`,
        alt: "Costco warehouse exterior",
        caption:
          "Costco operates more than 900 warehouse stores globally. Of those, 535 units sell wine, 383 stores sell spirits, and 571 locations sell beer. The company’s beverage sales are well over $5 billion annually, according to estimates.",
      },
      {
        src: `${F}/costco-wine.avif`,
        alt: "In-store wine displays in wooden boxes at Costco",
        caption:
          "Wine makes up 50% of beverage alcohol sales at Costco. The stores offer an assortment of well-known brands, boutique finds, and proprietary wines.",
      },
      {
        src: `${F}/costco-spirits.avif`,
        alt: "The spirits aisle at Costco",
        caption:
          "Spirits comprise 35% of Costco’s beverage sales, led by Tequila, Bourbon, and Scotch. Sokol says Costco shoppers delight in searching for allocated offerings across both spirits and wine, which helps create the company’s treasure hunt shopping mentality.",
      },
      {
        src: `${F}/costco-team.avif`,
        alt: "Costco’s beverage buying team",
        caption:
          "Costco avoids a corporate mentality for beverage alcohol, instead allowing regional buyers to make product selections that reflect their individual markets.",
        orientation: "portrait",
      },
    ],
    keyFacts: {
      heading: "Key Facts: Costco Wholesale Corp.",
      facts: [
        { label: "Name of Leader", value: "Vice president and general merchandise manager for beverage alcohol and candy Chad Sokol" },
        { label: "Founded", value: "1976 as Price Club. The first Costco warehouse opened in 1983. The two businesses officially merged in 1993." },
        { label: "Headquarters", value: "Issaquah, Washington" },
        { label: "Number of Stores", value: "928 worldwide in 14 countries. There are 637 in the United States, spread across 47 states, Washington, D.C., and Puerto Rico." },
        { label: "Annual Revenue", value: "$269.9 billion in 2025, an 8% increase over the year prior." },
        { label: "Sales Breakdown", value: "In 2020, the most recent data available, Costco’s beverage sales were at roughly $5 billion in the United States. Today, wine leads at 50% of beverage sales, followed by spirits at 35% and beer and RTDs at 15%." },
        { label: "Website", value: "Costco.com" },
        { label: "Future Plans", value: "The company has additional units planned for this year and beverage alcohol will remain a key retail category. Fine wine and upscale spirits will continue to be the focus, and Costco plans to add several new proprietary Kirkland Signature wines and spirits over the next year." },
      ],
    },
  },
  {
    slug: "abc-fine-wine-spirits",
    section: "Class of 2026",
    kicker: "2026 Market Watch Leaders",
    title: "Fourth Generation Expansion",
    dek: "At ABC Fine Wine & Spirits, the fourth generation of leadership is looking beyond Florida.",
    byline: "By Madeline Ender • Photography by Carlos Amoed",
    pages: "Pages 72–77",
    summary:
      "Five family members are taking the 127-store Florida chain into Colorado, building superstores, and modernizing its technology.",
    hero: {
      src: `${P}/abc-fine-wine-spirits.avif`,
      alt: "Dave Larue, Chad Holloway, Charlie Bailes IV, Sean Kelly, and Chris Quarles in an ABC Fine Wine & Spirits store",
      caption:
        "From left to right: Dave Larue, Chad Holloway, Charlie Bailes IV, Sean Kelly, and Chris Quarles are the next generation of ABC Fine Wine & Spirits executives.",
      orientation: "portrait",
    },
    figures: [
      {
        src: `${F}/abc-selections.avif`,
        alt: "The World-Class Selections whiskey wall at ABC Fine Wine & Spirits",
        caption:
          "ABC stocks around 1,700 spirits SKUs in its family of stores. Standout categories at the company include whiskey and Tequila as well as vodka, though that market has waned in recent years.",
      },
      {
        src: `${F}/abc-wine-aisle.avif`,
        alt: "Wine aisles at ABC Fine Wine & Spirits",
        caption:
          "Wine accounts for about 25% of sales at ABC, and this year’s Leaders note that many of the company’s customers are premiumizing when it comes to their wine purchases.",
      },
      {
        src: `${F}/abc-rtd-shelves.avif`,
        alt: "THC beverage shelves at ABC Fine Wine & Spirits",
        caption:
          "Despite ongoing legislation issues, THC beverages are a bright spot in ABC stores. Best sellers in the segment include Uncle Arnies and Buddi, among others.",
      },
      {
        src: `${F}/abc-store.avif`,
        alt: "An ABC Fine Wine & Spirits store exterior",
        caption: "ABC has 127 stores scattered from the Florida Panhandle to Miami, plus three Applejack Wine & Spirits stores in Colorado.",
      },
    ],
    people: [
      { name: "Charlie Bailes IV", title: "Vice President of Human Resources and Internal Distribution", headshot: `${H}/charlie-bailes.avif` },
      { name: "Chad Holloway", title: "Director of Beer", headshot: `${H}/chad-holloway.avif` },
      { name: "Sean Kelly", title: "Executive Vice President of Marketing and Operations", headshot: `${H}/sean-kelly.avif` },
      { name: "David Larue", title: "Executive Vice President of Sales and Purchasing", headshot: `${H}/david-larue.avif` },
      { name: "Chris Quarles", title: "Vice President of Real Estate", headshot: `${H}/chris-quarles.avif` },
    ],
    keyFacts: {
      heading: "Key Facts: ABC Fine Wine & Spirits",
      facts: [
        { label: "Name of Leaders", value: "Vice president of human resources and internal distribution Charlie Bailes IV, executive vice president of sales and purchasing David Larue, executive vice president of marketing and operations Sean Kelly, vice president of real estate Chris Quarles, and director of beer Chad Holloway" },
        { label: "Founded", value: "1936" },
        { label: "Headquarters", value: "Orlando, Florida" },
        { label: "Annual Revenue", value: "Estimated between $800–$900 million" },
        { label: "Number of Stores", value: "127" },
        { label: "Sales Breakdown", value: "Spirits 59%, Wine 25%, Beer 8%, THC Beverages 4%, miscellaneous 4%" },
        { label: "Website", value: "Abcfws.com" },
        { label: "Future Plans", value: "Continue to expand the company outside of its home state of Florida, as well as scale upward in store size with ABC superstores. Modernizing the company’s technology and IT is also a priority." },
      ],
    },
  },
  {
    slug: "mike-fisch",
    section: "Class of 2026",
    kicker: "2026 Market Watch Leader • Next-Gen",
    title: "Flair For Tech",
    dek: "Mike Fisch is making major contributions to the family business in New Jersey.",
    byline: "By Carol Ward • Photography by Laura Barisonzi",
    pages: "Pages 78–82",
    summary:
      "The second-generation CFO has pushed online sales to 20% of revenue and built Samplii, a sampling platform now rolling out to the industry.",
    hero: {
      src: `${P}/mike-fisch.avif`,
      alt: "Mike Fisch leaning on a barrel in a Gary’s Wine & Marketplace store",
      caption:
        "Gary Fisch opened Gary’s Wine & Spirits in 1987. Thirty-seven years later, his son, Mike Fisch, is helping lead the charge.",
      orientation: "portrait",
    },
    figures: [
      {
        src: `${F}/garys-aisles.avif`,
        alt: "Wine aisles at Gary’s Wine & Marketplace",
        caption:
          "At Gary’s, it’s all about the wine. With 3,800 wine SKUs lining the shelves, the category makes up 65% of the business, and about 20% of the wines sold are private labels sold through the company’s Gary’s Direct program.",
      },
      {
        src: `${F}/garys-rose.avif`,
        alt: "The rosé selection at Gary’s Wine & Marketplace",
        caption: "Despite changes in the market, rosé is selling well at Gary’s, as are white wines from Croatia, Greece, and Austria.",
        orientation: "portrait",
      },
      {
        src: `${F}/garys-spirits.avif`,
        alt: "Spirits shelves at Gary’s Wine & Marketplace",
        caption: "While wine is king at Gary’s, spirits and beer also make up a chunk of the store’s sales. Tequila and spirits RTDs are thriving, as are non-alcoholic beers.",
      },
      {
        src: `${F}/garys-beer.avif`,
        alt: "Beer coolers at Gary’s Wine & Marketplace",
        caption: "Beer makes up about 9% of business at Gary’s, with RTDs and CBD/THC beverages eating into its share.",
      },
    ],
    keyFacts: {
      heading: "Key Facts: Gary’s Wine & Marketplace",
      facts: [
        { label: "Name of Leader", value: "Mike Fisch" },
        { label: "Founded", value: "1987" },
        { label: "Headquarters", value: "Morristown, New Jersey" },
        { label: "Number of Stores", value: "3" },
        { label: "Number of Employees", value: "95" },
        { label: "Annual Revenue", value: "Approximately $48 million" },
        { label: "Sales Breakdown", value: "65% wine, 19% spirits, 9% beer, 7% other" },
        { label: "Website", value: "Garyswine.com" },
        { label: "Future Plans", value: "While expansion through acquisition isn’t off the table, Mike Fisch is focused on refining existing stores, adding new technologies and enhancing in-store experiences. Personally, Fisch is consulting in the industry and offering technologies and systems to interested parties." },
      ],
    },
  },
  {
    slug: "meghan-cimini-jones",
    section: "Class of 2026",
    kicker: "2026 Market Watch Leader",
    title: "All In The Family",
    dek: "Meghan Cimini-Jones now leads her family’s retail operation.",
    byline: "By Terri Allan • Photography by Adam DeTour",
    pages: "Pages 84–89",
    summary:
      "The majority owner of Yankee Spirits carries forward the legacy of her father, Don Cimini, a 1996 Market Watch Leader.",
    hero: {
      src: `${P}/meghan-cimini-jones.avif`,
      alt: "Meghan Cimini-Jones standing in a Yankee Spirits wine aisle",
      caption:
        "Meghan Cimini-Jones is a second-generation beverage retailer and the majority owner of Sturbridge, Massachusetts’ Yankee Spirits. This year, she joins her father, Don Cimini, and her brother, Michael Cimini, in becoming a Market Watch Leader.",
      orientation: "portrait",
    },
    figures: [
      {
        src: `${F}/yankee-specialty-spirits.avif`,
        alt: "Specialty spirits labels at Yankee Spirits",
        caption: "There are about 5,500 spirits SKUs stocked at Yankee Spirits. Tequila is becoming a particularly compelling category at the store as more customers seek out agave spirits.",
      },
      {
        src: `${F}/yankee-beer-cave.avif`,
        alt: "The beer cave at Yankee Spirits",
        caption:
          "Yankee Spirits offers 3,000 beer SKUs in its stores, and while big brands do well, the chain is known for its selection of craft beer, which accounts for 40% of sales within the category.",
      },
      {
        src: `${F}/yankee-wine.avif`,
        alt: "The wine aisle at Yankee Spirits",
        caption: "Customers have access to more than 7,000 wine SKUs when they shop at Yankee Spirits stores. Wines are priced from $3 to $1,000, offering quite the range to appeal to a variety of consumers.",
      },
      {
        src: `${F}/yankee-exterior.avif`,
        alt: "A Yankee Spirits store exterior",
        caption: "Yankee Spirits operates four large-footprint stores in Sturbridge, Attleboro, Norwood, and Swansea, Massachusetts.",
      },
    ],
    keyFacts: {
      heading: "Key Facts: Yankee Spirits",
      facts: [
        { label: "Name of Leader", value: "Majority Owner Meghan Cimini-Jones" },
        { label: "Founded", value: "1971" },
        { label: "Number of Stores", value: "4" },
        { label: "Headquarters", value: "Sturbridge, Massachusetts" },
        { label: "Annual Revenue", value: "More than $60 million" },
        { label: "Sales Breakdown", value: "Spirits account for 43% of sales, followed by wine at 36% and beer at 22%" },
        { label: "Number of Employees", value: "About 200" },
        { label: "Website", value: "Yankeespirits.com" },
        { label: "Future Plans", value: "While there are no current plans for new stores, Cimini-Jones says the company is always on the lookout for new opportunities. Store renovations are ongoing to reflect changing consumer demand." },
      ],
    },
  },
  {
    slug: "fresh-market",
    section: "Class of 2026",
    kicker: "2026 Market Watch Leaders",
    title: "Retail Transformer",
    dek: "The Fresh Market’s new leadership has remade the beverage alcohol side.",
    byline: "By Terri Allan • Photography by Peter Taylor",
    pages: "Pages 90–95",
    summary:
      "Olivier Kielwasser and Kristen Bennett turned a declining department into one with weekly year-over-year growth at the 172-store grocer.",
    hero: {
      src: `${P}/fresh-market.avif`,
      alt: "Olivier Kielwasser and Kristen Bennett in a Fresh Market wine department",
      caption:
        "In just over two years, Olivier Kielwasser and Kristen Bennett have transformed the beverage alcohol department within The Fresh Market grocery chain from a declining section to one seeing year-over-year growth.",
      orientation: "portrait",
    },
    figures: [
      {
        src: `${F}/fresh-market-exterior.avif`,
        alt: "A Fresh Market store exterior",
        caption:
          "The Fresh Market operates 172 stores across 22 states. Wine accounts for 73% of beverage alcohol sales, while beer and THC beverages account for 25% and spirits make up just 2% of sales.",
      },
      {
        src: `${F}/fresh-market-wine.avif`,
        alt: "The reserve wine selection at The Fresh Market",
        caption:
          "White and sparkling wines are currently driving sales at The Fresh Market, which sells wine in 151 of its stores. Top sellers include La Marca Prosecco and Kendall-Jackson Vintner’s Reserve Chardonnay.",
      },
      {
        src: `${F}/fresh-market-beer.avif`,
        alt: "Beer shelves at The Fresh Market",
        caption:
          "Sold in 19 states at 161 stores, beer is doing well at The Fresh Market, with imported and import-style beers like Guinness, Stella Artois, and Peroni all seeing success at the chain.",
      },
    ],
    people: [
      { name: "Olivier Kielwasser", title: "Adult Beverage Director", headshot: `${H}/olivier-kielwasser.avif` },
      { name: "Kristen Bennett", title: "Retail Category Manager", headshot: `${H}/kristen-bennett.avif` },
    ],
    keyFacts: {
      heading: "Key Facts: The Fresh Market",
      facts: [
        { label: "Name of Leaders", value: "Adult beverage director Olivier Kielwasser and retail category manager Kristen Bennett" },
        { label: "Founded", value: "1982" },
        { label: "Number of Stores", value: "172 across 22 states" },
        { label: "Headquarters", value: "Greensboro, North Carolina" },
        { label: "Annual Revenue", value: "Undisclosed" },
        { label: "Sales Breakdown", value: "Wine accounts for 73% of adult beverage sales, followed by beer and THC beverages at 25%, and spirits at 2%" },
        { label: "Website", value: "Thefreshmarket.com" },
        { label: "Future Plans", value: "Kielwasser and Bennett will continue to tweak the stores’ adult beverage selection to reflect changing consumer demand." },
      ],
    },
  },
  {
    slug: "mark-pinho",
    section: "Class of 2026",
    kicker: "2026 Market Watch Leader",
    title: "Shaking It Up At Wine.com",
    dek: "Mark Pinho is leading the online retailer in a new direction.",
    byline: "By Carol Ward • Photography by Dan Bigelow",
    pages: "Pages 96–100",
    summary:
      "The CEO is moving Wine.com from “growth at all costs” to long-term sustainability, with new pricing, storage, and delivery services.",
    hero: {
      src: `${P}/mark-pinho.avif`,
      alt: "Mark Pinho standing in a Wine.com warehouse",
      caption:
        "Mark Pinho is steering Wine.com in a new direction, focusing more on customer interactions rather than the “growth at all cost” strategy employed by his predecessors at the company.",
      orientation: "portrait",
    },
    figures: [
      {
        src: `${F}/winecom-packing.avif`,
        alt: "Order packing at Wine.com",
        caption:
          "Spirits, first introduced on the site in 2019, make up just 5% of sales due to shipping restrictions, with wine accounting for the other 95%. Since Pinho took over, revenue has been about $150 million annually.",
      },
      {
        src: `${F}/winecom-warehouse.avif`,
        alt: "Inside a Wine.com warehouse",
        caption: "Part of Pinho’s strategy overhaul at Wine.com includes shifting pricing by shedding its inventory of wines priced under $15 a 750-ml.",
      },
      {
        src: `${F}/winecom-packing-2.avif`,
        alt: "A Wine.com employee packing orders",
        caption: "Pinho notes that Wine.com is focusing on storytelling and connecting more with suppliers as well. Over the next year, he says, the site will introduce more features to focus on the stories of its wines.",
      },
    ],
    keyFacts: {
      heading: "Key Facts: Wine.com",
      facts: [
        { label: "Name of Leader", value: "CEO Mark Pinho" },
        { label: "Founded", value: "1998" },
        { label: "Headquarters", value: "San Leandro, California" },
        { label: "Parent Company", value: "Wine.com is a standalone company owned by multiple shareholder groups." },
        { label: "Number of Employees", value: "Approximately 140" },
        { label: "Annual Revenue", value: "Approximately $150 million" },
        { label: "Sales Breakdown", value: "Wine 95%, Spirits 5%" },
        { label: "Website", value: "Wine.com" },
        { label: "Future Plans", value: "Utilize technology to provide information and opportunities for online exploration. Ultimately, the goal is to be better in the future than it is today." },
      ],
    },
  },
  {
    slug: "anuj-mittal",
    section: "Class of 2026",
    kicker: "2026 Market Watch Leader",
    title: "Big Box Alternative",
    dek: "Zipps Liquor has created a different sort of big box experience.",
    byline: "By Carol Ward • Photography by Nathan Lindstrom",
    pages: "Pages 102–107",
    summary:
      "Anuj Mittal grew his family’s Texas chain from eight stores to 38 on three pillars: pricing, selection, and convenience.",
    hero: {
      src: `${P}/anuj-mittal.avif`,
      alt: "Anuj Mittal standing in a Zipps Liquor store",
      caption:
        "Part of the second generation of owners for Midway Group investment firm, Anuj Mittal serves as COO of Zipps Liquor alongside his uncle, Mike Mittal, who is CEO.",
      orientation: "portrait",
    },
    figures: [
      {
        src: `${F}/zipps-shelves.avif`,
        alt: "Whiskey shelves at Zipps Liquor",
        caption:
          "Across Zipps’ 38-store footprint, roughly 80% of both selection and sales comes from spirits. Most stores carry roughly 2,000 SKUs, with 1,700–1,800 of those belonging to the spirits category, including RTDs.",
        orientation: "portrait",
      },
      {
        src: `${F}/zipps-interior.avif`,
        alt: "Inside a Zipps Liquor store",
        caption:
          "In its rapid journey from eight to 38 locations, Zipps has focused its operations using a three-pillar strategy of pricing, selection, and convenience to ensure customers are getting what they need at each specific unit.",
      },
      {
        src: `${F}/zipps-wine.avif`,
        alt: "Wine shelves at Zipps Liquor",
        caption: "Making up just 10% of sales, wine offerings encompass mostly major brands.",
      },
      {
        src: `${F}/zipps-exterior.avif`,
        alt: "A Zipps Liquor store exterior",
        caption: "Beer sees less focus at Zipps, especially as RTDs continue to rise in popularity.",
      },
    ],
    keyFacts: {
      heading: "Key Facts: Zipps Liquors",
      facts: [
        { label: "Name of Leader", value: "COO Anuj Mittal" },
        { label: "Founded", value: "1994" },
        { label: "Headquarters", value: "Conroe, Texas" },
        { label: "Parent Company", value: "Midway Group" },
        { label: "Number of Stores", value: "38 locations in urban Houston and surrounding cities, extending south to Port Lavaca and east into rural East Texas." },
        { label: "Number of Employees", value: "Approximately 150" },
        { label: "Annual Revenue", value: "A little over $50 million" },
        { label: "Sales Breakdown", value: "Spirits 80%, Wine 10%, Beer 10% (spirits-based RTDs are counted within spirits)" },
        { label: "Website", value: "Zippsliquor.com" },
        { label: "Future Plans", value: "10–20% annual growth, primarily through opportunistic acquisitions" },
      ],
    },
  },
  {
    slug: "adam-acquistapace",
    section: "Alumni Awards",
    kicker: "2026 Best Marketing Award",
    title: "Excelling Across Categories",
    dek: "The Acquistapace family combines the best parts of beverage and grocery retail in Louisiana.",
    byline: "By Laura Pelner • Photography by Craig Mulcahy",
    pages: "Pages 108–113",
    summary:
      "Community-first events like the Cheese Extravaganza and a weekly TV segment earn the 2018 Leader this year’s Best Marketing Award.",
    hero: {
      src: `${P}/adam-acquistapace.avif`,
      alt: "Adam Acquistapace standing in front of wine shelves",
      caption:
        "Adam Acquistapace and his team take a unique approach to marketing, focusing on community-building before profit. He earns the 2026 Market Watch Leaders Best Marketing Award for his efforts.",
      orientation: "portrait",
    },
    figures: [
      {
        src: `${F}/acquistapace-spirits.avif`,
        alt: "The spirits aisle at Acquistapace’s",
        caption: "Spirits make up 30% of beverage sales at Acquistapace stores, led by whiskies and Tequila.",
      },
      {
        src: `${F}/acquistapace-wine.avif`,
        alt: "Wine aisles at Acquistapace’s",
        caption:
          "Wine is the beverage leader across all three Acquistapace stores, comprising 60% of beverage sales. The company puts a big emphasis on French and Italian labels, and on family-owned estates.",
      },
      {
        src: `${F}/acquistapace-beer.avif`,
        alt: "Beer coolers at Acquistapace’s",
        caption:
          "While beer is a smaller player at Acquistapace stores, the company stocks about 800 SKUs. Mexican brews and local crafts are dominating beer sales, but RTDs and THC drinks are taking share from the category.",
        orientation: "portrait",
      },
    ],
    keyFacts: {
      heading: "Key Facts: Acquistapace’s",
      facts: [
        { label: "Name of Leader", value: "Manager Adam Acquistapace" },
        { label: "Founded", value: "1963" },
        { label: "Number of Stores", value: "3" },
        { label: "Headquarters", value: "Covington, Louisiana" },
        { label: "Annual Revenue", value: "Undisclosed" },
        { label: "Sales Breakdown", value: "Beverage alcohol makes up roughly 30% of total company sales. Within the category, wine comprises 60% of sales, spirits make up 30%, and beer contributes the remaining 10%." },
        { label: "Number of Employees", value: "More than 120" },
        { label: "Website", value: "Acquistapace.com" },
        { label: "Future Plans", value: "The company plans to add a fourth store next year and it will be its largest and most ambitious location to date. The new unit will span 75,000 square feet and include a 25,000-square-foot beverage section within the space. Fine wine will remain a focus." },
      ],
    },
  },
  {
    slug: "stew-leonard",
    section: "Alumni Awards",
    kicker: "2026 Community Service Award",
    title: "Dedication To Saving Lives",
    dek: "Stew Leonard Jr. is a tireless advocate of water safety awareness.",
    byline: "By Terri Allan • Photography by Dan Bigelow",
    pages: "Pages 116–121",
    summary:
      "The Stew Leonard III Water Safety Foundation has raised more than $8 million and donated over 300,000 swim lessons.",
    hero: {
      src: `${P}/stew-leonard.avif`,
      alt: "Stew Leonard Jr. in a Stew Leonard’s Wine & Spirits store",
      caption:
        "Stew Leonard Jr., president and CEO of the Stew Leonard’s retail chain, lost his son Stewie in a drowning accident in 1989. The following year, the Market Watch Leader began to build a foundation in his honor to prevent other parents from experiencing the same loss.",
      orientation: "portrait",
    },
    figures: [
      {
        src: `${F}/stew-swim-school.avif`,
        alt: "Stew Leonard Jr., Kim Leonard, and Ryann Leonard Grossbard beside a pool at a Stewie the Duck swim school",
        caption:
          "Stew Leonard Jr. (center) and his wife, Kim Leonard (right), created the foundation in 1990. The couple, along with their daughter, foundation executive director Ryann Leonard Grossbard (left), have raised over $8 million for the cause.",
      },
      {
        src: `${F}/stew-interior.avif`,
        alt: "Inside a Stew Leonard’s Wine & Spirits store",
        caption:
          "Stew Leonard’s was founded by Stew Leonard Sr. in 1969 as a single store in Norwalk. Today, the chain has multiple locations across Connecticut, New York, and New Jersey.",
      },
      {
        src: `${F}/stew-wine.avif`,
        alt: "The wine department at Stew Leonard’s Wine & Spirits",
        caption:
          "Stew Leonard’s offers 2,500 wine SKUs, 1,000 spirits SKUs, and 800 beer SKUs across all of its stores. Wine accounts for a whopping 58% of sales, followed by spirits at 35% and beer at 7%.",
      },
    ],
    keyFacts: {
      heading: "Key Facts: Stew Leonard’s Wine & Spirits",
      facts: [
        { label: "Name of Leader", value: "Stew Leonard Jr." },
        { label: "Founded", value: "Stew Leonard’s Farm Fresh Foods first opened in 1969. Thirty years later, the first Stew Leonard’s Wine & Spirits was unveiled." },
        { label: "Number of Stores", value: "Stew Leonard’s operates eight Farm Fresh Foods stores in Connecticut, New York, and New Jersey, and eight independently owned and operated Stew Leonard’s Wine & Spirits shops (two of those stores in New Jersey are located within the grocery stores)." },
        { label: "Headquarters", value: "Norwalk, Connecticut" },
        { label: "Annual Revenues", value: "Approximately $600 million, with beverage alcohol comprising roughly $100 million." },
        { label: "Sales Breakdown", value: "58% wine / 35% spirits / 7% beer" },
        { label: "Number of Employees", value: "The Farm Fresh stores employ about 2,500 team workers. The liquor stores have a total of about 170." },
        { label: "Website", value: "Stewswines.com" },
        { label: "Future Plans", value: "Stew Leonard will retire in the next few years, and daughter Blake will serve as president and nephew Jake Tavello as CEO. The company is actively pursuing new locations." },
      ],
    },
  },
  {
    slug: "best-new-products",
    section: "Leaders Choice Awards",
    kicker: "2026 Leaders Choice Awards • Best New Product Awards",
    title: "Gran Malo and Decoy Featherweight",
    dek: "A spicy Tequila liqueur and a better-for-you wine stand out.",
    byline: "By Madeline Ender",
    pages: "Page 122",
    summary:
      "Gallo’s tamarind-flavored Tequila liqueur rocketed to 360,000 cases, while Duckhorn’s 80-calorie Decoy line meets health-minded drinkers where they are.",
    hero: {
      src: `${PR}/gran-malo.avif`,
      alt: "A bottle of Gran Malo tamarind Tequila liqueur",
      caption: "Gran Malo, from Gallo, retails for $20 a 750-ml. and made Market Watch’s Hot Brands list for the first time in 2025.",
      orientation: "portrait",
    },
    figures: [
      {
        src: `${PR}/decoy-featherweight.avif`,
        alt: "A bottle of Decoy Featherweight Sauvignon Blanc",
        caption: "Each Decoy Featherweight wine has just 80 calories and 9% abv, priced at $20 a 750-ml.",
        orientation: "portrait",
      },
    ],
  },
  {
    slug: "lunazul",
    section: "Leaders Choice Awards",
    kicker: "2026 Leaders Choice Awards • Spirits Brand of the Year",
    title: "Lunazul Tequila",
    dek: "This fast-growing brand mixes approachable pricing with quality liquid.",
    byline: "By Danny Brandon",
    pages: "Page 123",
    summary:
      "Heaven Hill’s 100% agave Tequila grew 29.5% last year to 2.2 million cases, surpassing Patrón to become the No. 3 brand in the U.S.",
    hero: {
      src: `${PR}/lunazul.avif`,
      alt: "A bottle of Lunazul Blanco Tequila",
      caption: "Heaven Hill’s Lunazul, billed as a no-nonsense Tequila, has experienced incredible growth in the last five years.",
      orientation: "portrait",
    },
  },
  {
    slug: "avaline",
    section: "Leaders Choice Awards",
    kicker: "2026 Leaders Choice Awards • Wine Brand of the Year",
    title: "Avaline",
    dek: "Organic and affordable, this celebrity-backed wine is not slowing down.",
    byline: "By Julia Higgins",
    pages: "Page 124",
    summary:
      "Co-owned by Cameron Diaz and Katherine Power, Avaline grew from 80,000 cases in 2022 to more than 300,000 in 2025.",
    hero: {
      src: `${PR}/avaline.avif`,
      alt: "A bottle of Avaline rosé",
      caption: "Avaline, co-founded by actress Cameron Diaz and entrepreneur Katherine Power, is pushing beyond its DTC origins.",
      orientation: "portrait",
    },
  },
  {
    slug: "tom-day",
    section: "Leaders Choice Awards",
    kicker: "2026 Leaders Choice Awards • Industry Executive of the Year",
    title: "Tom Day",
    dek: "CEO, Reyes Beverage Group",
    byline: "By David Fleming",
    pages: "Page 125",
    summary:
      "The Reyes Beverage Group CEO led the acquisition of Republic National Distributing Co., reshaping the wine and spirits second tier.",
    hero: {
      src: `${P}/tom-day.avif`,
      alt: "Portrait of Tom Day, CEO of Reyes Beverage Group",
      caption: "Tom Day has led day-to-day operations at Reyes Beverage Group through years of acquisitions and change for the company.",
      orientation: "portrait",
    },
  },
];

const contentBySlug = content as Record<string, ArticleBlock[]>;

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticleBlocks(slug: string): ArticleBlock[] {
  return contentBySlug[slug] ?? [];
}

export const articleSections: ArticleSection[] = [
  "Retailer of the Year",
  "Class of 2026",
  "Alumni Awards",
  "Leaders Choice Awards",
];
