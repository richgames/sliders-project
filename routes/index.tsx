/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head, asset } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (

    <html>
    <Head>
      <script type="module" src={asset('./modelviewer/model-viewer.min.js')}></script>
    </Head>
    <Layout />
    <div class={tw`flex flex-col justify-between`} style={`min-height: 100vh; background-image: url("${asset("./sliders-close-up.jpg")}"); background-size: container;`}>
      <div>
        <p class={tw`mx-10 my-6 text-4xl`}>
          <mark style="background: rgba(255, 255, 255, .4) !important">
            Sliders is a game for 2 players.
          </mark>  
        </p>
        <p class={tw`mx-10 my-6 text-4xl`}>
          <mark style="background: rgba(255, 255, 255, .4) !important">
            Each chapter takes about 20 minutes to play and progresses the story.
          </mark>
        </p>
        <p class={tw`mx-10 my-6 text-4xl`}>
          <mark style="background: rgba(255, 255, 255, .4) !important">
            If you prefer to play abstract strategy games without the story and theme, feel free to skip reading the chapters.  
          </mark>
        </p>
      </div>
      <Footer />
    </div>
    </html>
  );
}
