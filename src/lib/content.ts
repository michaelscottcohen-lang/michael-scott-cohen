import { companies as companyPages } from "@/lib/company-pages";

export const profile = {
  name: "Michael Scott Cohen",
  monogram: "MSC",
  location: "New York",
  headline: "Founder, operator, and investor",
  intro: "I’m a New York entrepreneur and operator. I’ve built in branded merchandise and CPG, and I’m now exploring what AI makes possible.",
};

export const proof = [
  { value: "3", label: "Exits", detail: "Companies built through acquisition" },
  { value: "$57.5M", label: "Harper+Scott valuation", detail: "Reported by Business Insider" },
  { value: "2023", label: "Entrepreneur of the Year", detail: "Advertising Specialty Institute" },
] as const;

// Direct publication URLs verified through public search results on July 28, 2026.
// ONE37pm is intentionally omitted: no original article/source URL could be verified.
export const featuredIn = [
  { publication: "Business Insider", href: "https://www.businessinsider.com/harper-scott-john-howard-lew-frankfort-coach-sephora-swag-2019-9" },
  { publication: "ASI", href: "https://members.asicentral.com/news/web-exclusive/july-2023/distributor-entrepreneurs-of-the-year-2023-jon-alagem-michael-scott-cohen-harper-plus-scott/" },
  { publication: "The Post and Courier", href: "https://www.postandcourier.com/news/charleston-waffle-house-waitress-recognized-by-ceo-long-time-customers-for-her-service/article_1fb0d832-ef5f-11e8-8438-c3126724d82a.html" },
] as const;

export const companies = companyPages.map((company) => ({
  name: company.name,
  category: company.category,
  detail: company.homeDetail,
  href: `/companies/${company.slug}`,
}));

export const socials = [
  { label: "Instagram", handle: "@michaelscottcohen_official", href: "https://www.instagram.com/michaelscottcohen_official/" },
  { label: "YouTube", handle: "@michaelscottcohen", href: "https://www.youtube.com/@michaelscottcohen/shorts" },
  { label: "TikTok", handle: "@michaelscottcohen", href: "https://www.tiktok.com/@michaelscottcohen" },
  { label: "LinkedIn", handle: "/in/mcohen3", href: "https://www.linkedin.com/in/mcohen3/" },
  { label: "X", handle: "@TheMichaelCohen", href: "https://x.com/TheMichaelCohen" },
] as const;

// Titles/topics below are limited to text visible in the linked public results. No metrics or invented captions.
export const watch = [
  {
    platform: "Instagram",
    title: "There’s no magic follow-up that works every time.",
    detail: "A short note on timing, changing the angle, and moving on when a prospect goes quiet.",
    href: "https://www.instagram.com/michaelscottcohen_official/reel/Da-iSjlE3Hr/",
    embed: "https://www.instagram.com/reel/Da-iSjlE3Hr/embed/",
    kind: "instagram",
  },
  {
    platform: "YouTube",
    title: "Counselor’s 2023 Distributor Entrepreneurs",
    detail: "Michael and Jon Alagem on starting Harper+Scott, recent projects, and what comes next.",
    href: "https://www.youtube.com/watch?v=6JoOYOdqCXM",
    embed: "https://www.youtube-nocookie.com/embed/6JoOYOdqCXM",
    kind: "youtube",
  },
  {
    platform: "TikTok",
    title: "Reputation",
    detail: "Watch on TikTok",
    href: "https://www.tiktok.com/@michaelscottcohen/video/7657189322512141581",
    kind: "link",
  },
  {
    platform: "TikTok",
    title: "Starting over and AI",
    detail: "Watch on TikTok",
    href: "https://www.tiktok.com/@michaelscottcohen/video/7666589108231343374",
    kind: "link",
  },
] as const;

// Exact opening text and direct URLs verified through public search results on July 28, 2026.
export const linkedInPosts = [
  {
    excerpt: "I haven’t personally made $100 million. I’ve sold businesses collectively…",
    href: "https://www.linkedin.com/posts/mcohen3_i-havent-personally-made-100-million-activity-7486782933283008512-kPlj",
  },
  {
    excerpt: "I wish I had Delta Air Lines CEO Ed Bastian’s cell number.",
    href: "https://www.linkedin.com/posts/mcohen3_i-wish-i-had-delta-air-lines-ceo-ed-bastian-activity-7483620137561161728-rWqi",
  },
  {
    excerpt: "Norman is 97 years old. Born in 1929. He’s lived in Africa, California…",
    href: "https://www.linkedin.com/posts/mcohen3_norman-is-97-years-old-born-in-1929-he-activity-7478811154841088000-XqeN",
  },
] as const;

export const press = [
  { publication: "Advertising Specialty Institute", title: "Distributor Entrepreneurs of the Year", href: "https://members.asicentral.com/news/web-exclusive/july-2023/distributor-entrepreneurs-of-the-year-2023-jon-alagem-michael-scott-cohen-harper-plus-scott/" },
  { publication: "Business Insider", title: "Harper+Scott’s outside investment and valuation", href: "https://www.businessinsider.com/harper-scott-john-howard-lew-frankfort-coach-sephora-swag-2019-9" },
  { publication: "PR Newswire", title: "Blue Monkey Beverage acquires Local Weather", href: "https://www.prnewswire.com/news-releases/blue-monkey-beverage-acquires-local-weather-sports-drink-302702909.html" },
] as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Companies", href: "/companies" },
  { label: "Watch", href: "/#watch" },
] as const;
