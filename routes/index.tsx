/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <div class={tw`bg-purple-100 min-h-screen`}>
    <Layout />
    <p class={tw`mx-10 my-6 text-4xl`}>
      Sliders is a game for 2 players.
    </p>
    <p class={tw`mx-10 my-6 text-4xl`}>
      Each chapter takes about 20 minutes to play and progresses the story.
    </p>
    <p class={tw`mx-10 my-6 text-4xl`}>
      If you prefer to play abstract strategy games without the story and theme, feel free to skip reading the chapters.  
    </p>
  </div>
  );
}
