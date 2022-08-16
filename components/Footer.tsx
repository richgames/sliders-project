/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div class={tw`flex items-center mx-10`}>
      <span class={tw`mx-1`}>{`Copyright`}</span>
      <span class={tw`text-lg`}>©</span> 
      <span class={tw`mx-1`}>
        {`${year} `} A <a href="https://richgames.xyz/" class={tw`underline`}>Rich Games</a> Site
      </span>
    </div>
  );
}
