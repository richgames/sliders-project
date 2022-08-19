/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { TABLE_OF_CONTENTS, CHAPTERS } from "../data/chapters.ts";

export default function ChapterNavBar({ path }) {
  console.log("CHAPTERS", CHAPTERS)
  return (
    <div class={tw`h-screen w-auto pt-10 pb-10 pl-10 pr-10 bg-green-100`}>
      <ol>
        {CHAPTERS.map((chapter) => {
          return (
            <li class={tw`hover:underline active:underline`}>
              <a href={chapter.href}>
                {chapter.title}
              </a>
            </li>
          )
        } )}
      </ol>
    </div>
  );
}
