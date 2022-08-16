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
      </ul>
    </div>
  );
}
