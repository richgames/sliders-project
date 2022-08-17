/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "../components/Layout.tsx";

export default function Downloads() {
  return (
    <div class={tw`bg-purple-100 min-h-screen`}>
      <Layout />
      <ul class={tw`mt-10`}>
        <li>
          <a href="about-richgames-sliders.pdf"class={tw`mx-10 my-6 text-2xl`}>
            About
          </a>
        </li>
        <li>
          <a href="prologue-richgames-sliders.pdf"class={tw`mx-10 my-6 text-2xl`}>
            Prologue
          </a>
        </li>
        <li>
          <a href="chapter1-the-lab-richgames-sliders.pdf"class={tw`mx-10 my-6 text-2xl`}>
            Chapter 1: The Lab
          </a>
        </li>
        <li>
          <a href=""class={tw`mx-10 my-6 text-2xl`}>
            Chapter 2: The Space Between (Coming soon)
          </a>
        </li>
        <li>
          <a href=""class={tw`mx-10 my-6 text-2xl`}>
            Chapter 3: The Ship (Coming soon)
          </a>
        </li>
        <li>
          <a href="sliders-board.pdf"class={tw`mx-10 my-6 text-2xl`}>
            Sliders Board
          </a>
        </li>
      </ul>
      <div class={tw`bg-green-100`}>
      About the Board:
      </div>
    </div>
  );
}
