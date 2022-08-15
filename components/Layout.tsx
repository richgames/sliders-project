/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function Layout() {
  return (
    <div class={tw`flex`}>
      <div class={tw`text-gray-400 bg-black min-w-full`}>
        <header class={tw`px-10 pt-10`}>
          <img 
            src="/sliders-logo.png" 
            height="200px"
            alt="Sliders logo"
          />
        </header>
        <nav class={tw`px-10 py-4`}>
          <ul class={tw`flex gap-4`}>
            <li class={tw`active:font-bold hover:underline`}>
              <a href="/">Home</a>
            </li>  
            <li class={tw`active:font-bold hover:underline`}>
              <a href="/about">About</a>
            </li>  
            <li class={tw`active:font-bold hover:underline`}>
              <a href="/chapters">
                Chapters
              </a>
            </li>
            <li class={tw`active:font-bold hover:underline`}>
              <a href="/downloads">
                Downloads
              </a>
            </li>
          </ul>
        </nav> 
      </div>
    </div>
  );
}
