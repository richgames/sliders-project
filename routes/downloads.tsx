/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head, asset } from "$fresh/runtime.ts";
import Layout from "../components/Layout.tsx";

export default function Downloads() {
  return (
    <html>
      <Head>
        <script type="module" src={asset('./modelviewer/model-viewer.min.js')}></script>
      </Head>
      <div class={tw`bg-purple-100 min-h-screen`}>
        <Layout />
        <div class={tw`mx-10 mt-10`}>
        <h1 class={tw`text-3xl underline font-bold`}>PDFS</h1>
      </div>
      <ul class={tw`mt-2`}>
        <li>
          <a href="about-richgames-sliders.pdf" class={tw`mx-10 my-6 text-2xl`}>
            About
          </a>
        </li>
        <li>
          <a href="prologue-richgames-sliders.pdf" class={tw`mx-10 my-6 text-2xl`}>
            Prologue
          </a>
        </li>
        <li>
          <a href="chapter1-the-lab-richgames-sliders.pdf" class={tw`mx-10 my-6 text-2xl`}>
            Chapter 1: The Lab
          </a>
        </li>
        <li>
          <a href="" class={tw`mx-10 my-6 text-2xl`}>
            Chapter 2: The Space Between (Coming soon)
          </a>
        </li>
        <li>
          <a href="" class={tw`mx-10 my-6 text-2xl`}>
            Chapter 3: The Ship (Coming soon)
          </a>
        </li>
        <li>
          <a href="sliders-board.pdf" class={tw`mx-10 my-6 text-2xl`}>
            Sliders Board
          </a>
        </li>
      </ul>
      <div class={tw`mx-10 mt-10`}>
        <h1 class={tw`text-3xl underline font-bold`}>STLS</h1>
      </div>
        <div class={tw`flex mt-2`}>
          <div>
            <a href={asset('slider-piece.stl')} class={tw`mx-10 text-2xl`}>Slider</a>
            <div class={tw`mx-10 mb-2 flex gap-px`} style="background: linear-gradient(purple, black); width: 300px;">
              <model-viewer src={asset('slider-piece.glb')} camera-controls touch-action="pan-y"></model-viewer>
            </div>
          </div>
          <div>
            <a href={asset('slider-piece.stl')} class={tw`mx-10 text-2xl`}>Path</a>  
            <div class={tw`mx-10 mb-2 flex gap-px`} style="background: linear-gradient(purple, black); width: 300px;">  
              <model-viewer src={asset('path-piece.glb')} camera-controls touch-action="pan-y"></model-viewer>
            </div>
          </div>
        </div>  
      </div>
    </html>
  );
}
