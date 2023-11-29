import { e as createAstro, f as createComponent, r as renderTemplate, g as renderHead, i as addAttribute } from '../astro_4262e2f8.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/post-1.md": () => import('./post-1_aee748f8.mjs'),"./blog/post-2.md": () => import('./post-2_622692d4.mjs'),"./blog/post-3.md": () => import('./post-3_ed499b35.mjs')}), () => "./blog/*.md");
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>${renderHead()}</head> <body> <h1>Astro</h1> <nav></nav> <nav> <a href="/portfolio/folio-1">作品集一</a> <a href="/portfolio/folio-2">作品集二</a> <a href="/portfolio/folio-3">作品集三</a> <a href="/blog/post-1">post 1</a> <a href="/blog/post-2">post 2</a> <a href="/blog/post-3">post 3</a> </nav> ${posts.map((post) => renderTemplate`<div><a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a></div>`)} </body> </html>`;
}, "C:/Users/User/OneDrive/\u684C\u9762/MsiTest-master/astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/User/OneDrive/桌面/MsiTest-master/astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
