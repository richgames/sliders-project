/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "../../components/Layout.tsx";
import ChapterNavBar from "../../components/ChapterNavBar.tsx";

export default function Downloads() {
  return (
    <div class={tw`bg-purple-100 min-h-screen`}>
      <Layout />
      <ChapterNavBar />
      <p class={tw`mx-10 my-6`}>
        Chapters
      </p>

  
    </div>
  );
}
