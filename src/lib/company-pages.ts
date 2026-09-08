export type CompanyPage = {
  slug: string;
  name: string;
  category: string;
  description: string;
  homeDetail: string;
  role: string;
  status: string;
  lessons: readonly string[];
  sources: readonly { label: string; href: string }[];
};

export const companies: readonly CompanyPage[] = [
  {
    slug: "harper-scott",
    name: "Harper+Scott",
    category: "Branded merchandise",
    description: "Harper+Scott is the branded-merchandise company co-founded by Michael Scott Cohen and acquired by BDA in September 2025.",
    homeDetail: "Co-founded by Michael. Acquired by BDA in September 2025.",
    role: "Co-founder",
    status: "Acquired by BDA in September 2025.",
    lessons: [
      "Treat merchandise as a strategic medium, not a catalog transaction.",
      "Design around the audience and desired behavior before choosing the product.",
      "Build operating discipline around creative work, sourcing, distribution, and client trust.",
    ],
    sources: [
      { label: "Advertising Specialty Institute: BDA acquires Harper+Scott", href: "https://members.asicentral.com/news/industry-news/september-2025/bda-acquires-harper-plus-scott/" },
      { label: "Advertising Specialty Institute: 2023 Distributor Entrepreneurs of the Year", href: "https://members.asicentral.com/news/web-exclusive/july-2023/distributor-entrepreneurs-of-the-year-2023-jon-alagem-michael-scott-cohen-harper-plus-scott/" },
      { label: "Business Insider: Harper+Scott investment and reported company valuation", href: "https://www.businessinsider.com/harper-scott-john-howard-lew-frankfort-coach-sephora-swag-2019-9" },
    ],
  },
  {
    slug: "local-weather",
    name: "Local Weather",
    category: "Consumer products / sports drink",
    description: "Local Weather is the sports-drink company co-founded by Michael Scott Cohen and acquired by Blue Monkey Beverage in March 2026.",
    homeDetail: "Co-founded by Michael. Acquired by Blue Monkey Beverage in March 2026.",
    role: "Co-founder",
    status: "Acquired by Blue Monkey Beverage in March 2026.",
    lessons: [
      "A consumer product needs distribution and repeatable demand, not only a strong brand idea.",
      "Capital, channel strategy, and operating focus must match the ambition of the launch.",
      "A transaction headline should not be used to infer private proceeds or personal net worth.",
    ],
    sources: [
      { label: "PR Newswire: Blue Monkey Beverage acquires Local Weather", href: "https://www.prnewswire.com/news-releases/blue-monkey-beverage-acquires-local-weather-sports-drink-302702909.html" },
    ],
  },
  {
    slug: "cyndra",
    name: "Cyndra",
    category: "Applied AI",
    description: "Cyndra is an applied-AI company focused on turning recurring business workflows into working systems.",
    homeDetail: "Michael’s current applied-AI company, focused on real business workflows.",
    role: "Current company",
    status: "Listed among Michael’s current companies on his official site.",
    lessons: [
      "Start with a recurring business workflow rather than an abstract AI capability.",
      "Put explicit human approval before consequential external actions.",
      "Measure reliability, time saved, error rate, and business outcomes—not demonstrations.",
    ],
    sources: [
      { label: "Michael Scott Cohen: official site", href: "https://www.michaelscottcohen.com/#companies" },
      { label: "Cyndra on LinkedIn", href: "https://www.linkedin.com/company/cyndra-ai" },
    ],
  },
] as const;

export function getCompany(slug: string) {
  return companies.find((item) => item.slug === slug);
}
