/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function ChapterNavBar() {
  return (
    <div class={tw`mx-5 my-10 bg-green-100`}>
      <ul>
        <li>
          <a href="">
            0. Prologue
          </a>
        </li>
        <li>
          <a href="">
            1. The Lab
          </a>
        </li>    
      </ul>
    </div>
  );
}
