/**
 * Site content for michael-scott-cohen.
 *
 * Factual items (ventures, press, bio) are real and carried over from the
 * previous build. The `essays` and `films` collections are PLACEHOLDERS —
 * architecturally complete samples written in Michael's voice so the
 * media-hub layout reads true. Swap these for real writing / films by
 * editing this file (or, later, moving essays to MDX routes).
 */

export type Venture = {
  name: string;
  role: string;
  founded?: string;
  body: string;
  proof?: string;
  href?: string;
};

export type Essay = {
  index: string;
  date: string;
  reading: string;
  title: string;
  dek: string;
  tag: string;
  href?: string;
};

export type Film = {
  title: string;
  runtime: string;
  year: string;
  role: string;
  description: string;
  featured?: boolean;
};

export type Press = {
  year: string;
  title: string;
  source: string;
};

export const profile = {
  name: "Michael Scott Cohen",
  monogram: "MSC",
  roleLine: "Co-Founder & CEO, Harper+Scott",
  location: "New York",
  // The sharp POV — one sentence the whole site orbits.
  pov: "I build the physical things that carry the world’s largest brands — and I’m unromantic about how the work gets done.",
  povShort: "Operator. Investor. Unromantic about the work.",
};

export const clients = [
  "Sephora",
  "L’Oréal Paris",
  "Compass",
  "Coach",
  "Estée Lauder",
  "Fortune 500",
];

export const ventures: Venture[] = [
  {
    name: "Harper+Scott",
    role: "Co-Founder & CEO",
    founded: "Est. 2014",
    body: "A creative agency that designs, manufactures, and delivers private-label branded goods for the world’s most recognized companies — turning disposable swag into objects worth keeping.",
    proof: "$57.5M valuation · Backed by Lew Frankfort (former CEO, Coach) & Irving Place Capital",
    href: "https://harperandscott.com",
  },
  {
    name: "Local Weather",
    role: "Co-Founder",
    founded: "2021",
    body: "A mind-and-body hydration beverage built on the belief that a consumer product should earn its place on the shelf and in the body.",
  },
  {
    name: "Plug Spot",
    role: "Advisor & Investor",
    body: "Early-stage consumer and operator bets — writing small checks and larger checks of time into founders building physical things.",
  },
];

/**
 * PLACEHOLDER essays. Voice and subject are real to Michael’s domain
 * (private-label, CPG, operator life); replace with real pieces.
 */
export const essays: Essay[] = [
  {
    index: "01",
    date: "Mar 2025",
    reading: "6 min",
    tag: "Industry",
    title: "The end of disposable swag",
    dek: "The promotional products industry moves $24B a year and almost all of it ends up in a landfill by Thursday. Why the category is quietly being rebuilt by people who care about the object.",
  },
  {
    index: "02",
    date: "Jan 2025",
    reading: "9 min",
    tag: "Operators",
    title: "Private label is a discipline, not a category",
    dek: "What Sephora and L’Oréal are actually buying when they buy private label — and why most agencies misunderstand the brief on the first call.",
  },
  {
    index: "03",
    date: "Oct 2024",
    reading: "5 min",
    tag: "Building",
    title: "The operator’s edge",
    dek: "Why I’d rather have built one physical supply chain than read ten decks about one. A defense of scar tissue over spreadsheets.",
  },
  {
    index: "04",
    date: "Jun 2024",
    reading: "8 min",
    tag: "Capital",
    title: "Raising on a real P&L",
    dek: "What Lew Frankfort saw in the numbers, what he didn’t need to see, and the meeting that taught me how real operators evaluate a business.",
  },
  {
    index: "05",
    date: "Nov 2023",
    reading: "4 min",
    tag: "Point of view",
    title: "Founders should make things",
    dek: "A short, unfashionable defense of physical goods in a software-only era — and why the hardest moats still smell like a factory.",
  },
];

/**
 * PLACEHOLDER films. Replace src/poster with real assets when available.
 */
export const films: Film[] = [
  {
    title: "Inside the studio",
    runtime: "8:12",
    year: "2025",
    role: "Harper+Scott",
    description:
      "A walk through the Harlem studio where a Sephora kit becomes a real, manufactured object — from sketch to ship.",
    featured: true,
  },
  {
    title: "On building Local Weather",
    runtime: "6:05",
    year: "2024",
    role: "Local Weather",
    description: "Starting a beverage brand in public, and what it costs to put something real on a shelf.",
  },
  {
    title: "A conversation with Lew Frankfort",
    runtime: "22:40",
    year: "2024",
    role: "Interview",
    description: "On building iconic brands, the long game, and what scale actually requires.",
  },
  {
    title: "The making of a kit",
    runtime: "4:30",
    year: "2023",
    role: "Harper+Scott",
    description: "How a single branded object moves through twelve hands before it reaches a customer.",
  },
];

export const press: Press[] = [
  {
    year: "2023",
    title: "Distributor Entrepreneurs of the Year",
    source: "Counselor Awards / ASI — with Jon Alagem",
  },
  {
    year: "2019",
    title: "$57.5M raise, covered as “fixing disposable swag”",
    source: "Business Insider — led by Lew Frankfort & Irving Place Capital",
  },
  {
    year: "Ongoing",
    title: "YPO — NY Metro Chapter",
    source: "Young Presidents’ Organization",
  },
  {
    year: "Clients",
    title: "Trusted by global brands",
    source: "Sephora · L’Oréal Paris · Compass · Fortune 500",
  },
];

export const colophon = {
  bio: [
    "Michael Scott Cohen is a New York-based operator and the Co-Founder & CEO of Harper+Scott, a creative agency that has redefined how the world’s top brands approach private-label goods.",
    "He studied Communications & Culture at Indiana University Bloomington, then cut his teeth in business development — recruiting, insurance brokerages, procurement — building the relationships with chief procurement officers and marketing leaders that became the spine of the business.",
    "With co-founder Jon Alagem, he built Harper+Scott into a company valued at $57.5M, backed by the former CEO of Coach and Irving Place Capital, making branded experiences for Sephora, L’Oréal Paris, Compass, and the Fortune 500.",
  ],
  founded: [
    { label: "Based", value: "New York" },
    { label: "Alma mater", value: "Indiana University Bloomington" },
    { label: "First chapter", value: "Access Staffing, AVP" },
    { label: "Network", value: "YPO · NY Metro" },
  ],
};

export const nav = [
  { label: "Now", href: "#now" },
  { label: "Writing", href: "#writing" },
  { label: "Film", href: "#film" },
  { label: "Press", href: "#press" },
  { label: "About", href: "#about" },
];
