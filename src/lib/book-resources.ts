import { readFileSync } from "node:fs";
import path from "node:path";

// The downloadable originals are also the source of the on-page resources.
const resourceDirectory = path.join(process.cwd(), "public/downloads/book");
const promptDocument = readFileSync(path.join(resourceDirectory, "20-AI-Prompts-for-Selling-Branded-Merch.md"), "utf8");
const sourceDocument = readFileSync(path.join(resourceDirectory, "Book-Source-Links.md"), "utf8");

export const promptIntroduction = promptDocument
  .split("## How to use these\n")[1]
  .split("## Prompt 1:")[0]
  .trim()
  .split(/\n\s*\n/);

export const bookPrompts = Array.from(
  promptDocument.matchAll(/^## Prompt (\d+): (.+)\n([\s\S]*?)(?=^## Prompt |$(?![\s\S]))/gm),
  ([, number, title, body]) => {
    const fields = body.match(/^\s*([\s\S]*?)\s*\*\*Have ready:\*\*\s*([\s\S]*?)\s*\*\*Copy and adapt:\*\*\s*([\s\S]*?)\s*\*\*Before you use it:\*\*\s*([\s\S]*?)\s*$/);
    if (!fields) throw new Error(`Invalid book prompt ${number}`);
    return { number: Number(number), title, purpose: fields[1], inputs: fields[2], text: fields[3], review: fields[4] };
  },
);

if (bookPrompts.length !== 20) throw new Error("The book resource page requires all 20 prompts.");

export const sourceSections = sourceDocument.split(/^## /m).slice(1).map((section) => {
  const [title, ...body] = section.split("\n");
  return { title, paragraphs: body.join("\n").trim().split(/\n\s*\n/) };
});
