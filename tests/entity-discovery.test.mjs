import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("homepage publishes a canonical URL and Person entity graph", async () => {
  const layout = await read("src/app/layout.tsx");
  assert.match(layout, /alternates:\s*\{\s*canonical:/s);
  assert.match(layout, /https:\/\/schema\.org/);
  assert.match(layout, /Michael Scott Cohen/);
  assert.match(layout, /sameAs/);
});

test("crawler and discovery files exist", async () => {
  const [robots, sitemap, llms] = await Promise.all([
    read("src/app/robots.ts"),
    read("src/app/sitemap.ts"),
    read("public/llms.txt"),
  ]);
  assert.match(robots, /GPTBot/);
  assert.match(robots, /OAI-SearchBot/);
  assert.match(robots, /ClaudeBot/);
  assert.match(robots, /Claude-SearchBot/);
  assert.match(sitemap, /michaelscottcohen\.com/);
  assert.match(llms, /Michael Scott Cohen/);
  assert.match(llms, /Primary sources/);
});
