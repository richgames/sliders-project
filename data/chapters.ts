import RAW_TOC from "../routes/chapters/tableofcontents.json" assert { type: "json" };

export const TABLE_OF_CONTENTS = {};
export const CHAPTERS: ChapterType[] = [];

export interface ChapterType {
  title: string;
  href: string;
}

for (const parent in RAW_TOC) {
  const rawEntry = RAW_TOC[parent];
  const href = `/chapters/${parent}`;
  const file = `/chapters/${parent}/index.md`;
  const entry = {
    slug: parent,
    title: rawEntry.title,
    href,
    file
  };
  TABLE_OF_CONTENTS[parent] = entry;
  const chapter = {
    title: rawEntry.title,
    href,
    entries: [],
  }
  CHAPTERS.push(chapter);
}