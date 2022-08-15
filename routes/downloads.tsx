/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Layout from "../components/Layout.tsx";

export default function Downloads() {
  return (
    <div class={tw`bg-purple-100 min-h-screen`}>
      <Layout />
      <p class={tw`mx-10 my-6`}>
        Downloads
      </p>

  
    </div>
  );
}
