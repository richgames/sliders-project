/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";
import { frontMatter, gfm } from "../../utils/markdown.ts";
import Layout from "../../components/Layout.tsx";
import ChapterNavBar from "../../components/ChapterNavBar.tsx";
import { TABLE_OF_CONTENTS } from "../../data/chapters.ts";


export const handler = {
  async GET(_req, ctx) {
    let slug = ctx.params.slug;
    console.log({ctx})
    if (slug === '') {
      slug = 'prologue'
    }
    const entry = TABLE_OF_CONTENTS[slug];
    console.log(TABLE_OF_CONTENTS)
    console.log({entry})

    const url  = new URL(`..${entry.file}`, import.meta.url);
    const fileContent = await Deno.readTextFile(url);
    const { content, data } = frontMatter(fileContent);
    const page = {...entry, markdown: content, data: data ?? {}};
    const resp = ctx.render({ page });
    return resp;
  }
}

function Content ({ page }) {
  const html = gfm.render(page.markdown);
  return (
    <main class={tw`mt-4 w-2/3`}>
      <h1 class={tw`text-4xl text-gray-900 mt-6`}>
        {page.title}
      </h1>
      <div
        class={tw`mt-6` + " markdown-body"}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  )

}

function Main(props) {
  const { page } = props.data;
  return (
    <div class={tw`max-w-screen-lg flex grow gap-6`}>
      <ChapterNavBar path={props.url.pathname} />
      <Content page={page} />
    </div>
  )
  
}

export default function ChapterPage(props) {
  console.log("ChapterPage:", props)
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <div class={tw`bg-purple-100 min-h-screen`}>
        <Layout />
        <Main {...props} />
      </div>
    </div>
  );
}
