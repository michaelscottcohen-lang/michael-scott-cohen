export const profile = {
  name: "Michael Scott Cohen",
  monogram: "MSC",
  location: "New York",
  headline: "Builder. Operator. Investor.",
  thesis: "I’ve spent my career turning ambitious ideas into physical products—and learning where the deck ends and the work begins.",
};

export const receipts = [
  {
    year: "2014",
    title: "Co-founded Harper+Scott",
    body: "Built the creative merchandise agency with Jon Alagem, serving global brands through design, sourcing, production, and fulfillment.",
    href: "https://www.harperandscott.com",
    cta: "Harper+Scott",
  },
  {
    year: "2023",
    title: "Counselor Entrepreneurs of the Year",
    body: "Michael and Jon were named Distributor Entrepreneurs of the Year by the Advertising Specialty Institute.",
    href: "https://members.asicentral.com/news/web-exclusive/july-2023/distributor-entrepreneurs-of-the-year-2023-jon-alagem-michael-scott-cohen-harper-plus-scott/",
    cta: "Read the profile",
  },
  {
    year: "2025",
    title: "Harper+Scott joined BDA",
    body: "The next chapter: BDA acquired Harper+Scott, bringing the two businesses together around global merchandise and brand experience.",
    href: "https://www.bdainc.com/blog/2025/09/16/promo-insiders-podcast-dives-deep-inside-bdas-acquisition-of-harper-scott/",
    cta: "Hear the story",
  },
];

export const fieldNotes = [
  ["Objects over abstractions", "A physical product has nowhere to hide. It has to be designed, costed, made, moved, and wanted."],
  ["Judgment compounds", "The useful pattern recognition comes from decisions made with incomplete information—and living with the result."],
  ["Relationships are infrastructure", "Trust is not a soft asset. It is how hard things move when the timeline gets short."],
] as const;

export const proof = [
  {
    label: "Long-form conversation",
    title: "Into the Metaverse",
    source: "commonsku · Episode 216",
    href: "https://commonsku.com/skucast/episode-216-into-the-metaverse-with-harperscotts-michael-scott-cohen",
  },
  {
    label: "Industry recognition",
    title: "Distributor Entrepreneurs of the Year",
    source: "ASI Counselor Awards · 2023",
    href: "https://members.asicentral.com/news/web-exclusive/july-2023/distributor-entrepreneurs-of-the-year-2023-jon-alagem-michael-scott-cohen-harper-plus-scott/",
  },
  {
    label: "Company chapter",
    title: "Inside BDA’s acquisition of Harper+Scott",
    source: "BDA · Promo Insiders",
    href: "https://www.bdainc.com/blog/2025/09/16/promo-insiders-podcast-dives-deep-inside-bdas-acquisition-of-harper-scott/",
  },
] as const;

export const socials = [
  { label: "Instagram", handle: "@michaelscottcohen_official", href: "https://www.instagram.com/michaelscottcohen_official/" },
  { label: "LinkedIn", handle: "Michael Scott Cohen", href: "https://www.linkedin.com/in/mcohen3/" },
  { label: "X", handle: "@TheMichaelCohen", href: "https://x.com/TheMichaelCohen" },
] as const;

export const KIT_FORM = "https://michael-scott-cohen.kit.com/8c7eab4ec7";
export const nav = [
  { label: "Story", href: "#story" },
  { label: "Receipts", href: "#receipts" },
  { label: "Notes", href: "#notes" },
  { label: "Elsewhere", href: "#elsewhere" },
];
