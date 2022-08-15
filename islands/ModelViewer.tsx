/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";


export default function ModelViewer() {
  
  return (
    <div class={tw`flex gap-2 w-full`}>
      <model-viewer></model-viewer>
     
    </div>
  );
}
