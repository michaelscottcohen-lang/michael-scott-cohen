import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

const signalFiles = [
  "src/lib/site.ts",
  "src/app/layout.tsx",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "public/llms.txt",
  "public/llms-full.txt",
];

test("all canonical signals use the final www host", async () => {
  for (const file of signalFiles) {
    const source = await read(file);
    assert.doesNotMatch(source, /https:\/\/michaelscottcohen\.com/, `${file} contains the redirecting non-www host`);
  }
  assert.match(await read("src/lib/site.ts"), /https:\/\/www\.michaelscottcohen\.com/);
});

test("sitemap uses stable dates and includes every owned route", async () => {
  const [sitemap, insights, companies] = await Promise.all([
    read("src/app/sitemap.ts"),
    read("src/lib/insights.ts"),
    read("src/lib/company-pages.ts"),
  ]);
  assert.doesNotMatch(sitemap, /new Date\s*\(/);
  for (const route of ["/about", "/newsletter", "/insights", "/companies"]) assert.match(sitemap, new RegExp(route));
  assert.equal((insights.match(/slug: "/g) || []).length, 4);
  assert.equal((companies.match(/slug: "/g) || []).length, 3);
});

test("homepage does not eagerly load third-party video iframes", async () => {
  const [home, facade] = await Promise.all([
    read("src/app/page.tsx"),
    read("src/components/video-facade.tsx"),
  ]);
  assert.doesNotMatch(home, /<iframe/);
  assert.match(home, /VideoFacade/);
  assert.match(facade, /if \(active\)/);
  assert.match(facade, /track\("video_opened"/);
});

test("navigation is route-safe from nested pages", async () => {
  const [nav, content] = await Promise.all([
    read("src/components/site-nav.tsx"),
    read("src/lib/content.ts"),
  ]);
  assert.match(nav, /href="\/"/);
  assert.match(nav, /href="\/newsletter"/);
  assert.doesNotMatch(nav, /href="#top"/);
  assert.match(content, /href: "\/#watch"/);
});

test("owned content pages publish canonical metadata and structured data", async () => {
  const pages = [
    "src/app/insights/page.tsx",
    "src/app/insights/[slug]/page.tsx",
    "src/app/companies/page.tsx",
    "src/app/companies/[slug]/page.tsx",
    "src/app/newsletter/page.tsx",
    "src/app/about/page.tsx",
  ];
  for (const file of pages) {
    const source = await read(file);
    assert.match(source, /canonical:/, `${file} lacks a canonical`);
    assert.match(source, /images: \[DEFAULT_SOCIAL_IMAGE\]/, `${file} would replace the root social metadata without an image`);
    assert.match(source, /StructuredData/, `${file} lacks page-specific structured data`);
  }
});

test("mobile navigation removes closed links from the accessibility tree", async () => {
  const nav = await read("src/components/site-nav.tsx");
  assert.match(nav, /\{open \? \(/);
  assert.match(nav, /event\.key === "Escape"/);
  assert.match(nav, /menuButtonRef\.current\?\.focus\(\)/);
  assert.match(nav, /aria-controls="mobile-navigation"/);
});

test("company records use one source and cite acquisition claims", async () => {
  const [content, companies, site] = await Promise.all([
    read("src/lib/content.ts"),
    read("src/lib/company-pages.ts"),
    read("src/lib/site.ts"),
  ]);
  assert.match(content, /companies as companyPages/);
  assert.doesNotMatch(content, /Investor and operator helping Cyndra/);
  assert.match(companies, /bda-acquires-harper-plus-scott/);
  assert.match(companies, /official site/);
  assert.match(site, /home: "2026-09-07"/);
  assert.match(site, /about: "2026-09-07"/);
});

test("social image is a real, correctly sized JPEG artifact", async () => {
  const path = new URL("src/app/opengraph-image.jpg", root);
  const info = await stat(path);
  const bytes = await readFile(path);
  assert.ok(info.size > 50_000, "social image is unexpectedly small");
  assert.equal(bytes[0], 0xff);
  assert.equal(bytes[1], 0xd8);
});

test("analytics events never include the subscriber email value", async () => {
  const signup = await read("src/components/signup-form.tsx");
  assert.match(signup, /track\("newsletter_signup"/);
  assert.doesNotMatch(signup, /track\([^\n]*email/);
});

test("accessibility overrides address audited contrast and visible-name issues", async () => {
  const [css, nav] = await Promise.all([
    read("src/app/content.css"),
    read("src/components/site-nav.tsx"),
  ]);
  assert.match(css, /\.short-card \.platform\{color:#9fc4e3\}/);
  assert.match(css, /\.closing \.kicker\{color:#fff\}/);
  assert.match(nav, /MSC —/);
});
