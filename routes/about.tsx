/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head, asset } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import Footer from "../components/Footer.tsx";

export default function About() {
  return (
    <div class={tw`bg-purple-100 min-h-screen`} style={`min-height: 100vh; background-image: url("${asset("./sliders-close-up.jpg")}"); background-size: cover;`}>
      <Layout />
      <p class={tw`mx-10 my-6 text-4xl`}>
        Sliders is a game about escaping the dying planet of Xolo.
      </p>
      <p class={tw`mx-10 my-6 text-4xl`}>
        The House of Jathum and the House of Norn have been at war with each other for     generations.  No one remembers what caused the division but they both have the same goal - to get off the planet before its core collapses.
      </p>
     <p class={tw`mx-10 my-6 text-4xl`}>
       Sliders is an idea to take the immersive nature of storytelling to abstract strategy games. Although typically used in role playing games, storytelling and themes can also bring to life abstract strategy games in a fun and exciting way.
     </p>

      <p class={tw`mx-10 my-6 text-1xl`}>
          All text and illustrations are licensed under the following: <br />
          <a class={tw`underline`} href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
            Creative Commons Attribution-NonCommercial-NoDerivs 4.0 Unported
          </a> 
      </p>
      <Footer />
    </div>
  );
}
