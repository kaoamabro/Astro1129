import { e as createAstro, f as createComponent, r as renderTemplate, g as renderHead } from '../astro_4262e2f8.mjs';
import 'clsx';
/* empty css                           */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-kh7btl4r> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script><script src="https://cdn.tailwindcss.com"><\/script>', `</head> <body data-astro-cid-kh7btl4r> <header data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>PARALLAX \u8996\u5DEE\u6EFE\u52D5</h1> </header> <section id="first" data-astro-cid-kh7btl4r> <img src="../../images/01.png" alt="" class="right w-[250px] sm:w-[400px]" data-astro-cid-kh7btl4r> <img src="../../images/02.png" alt="" class="left w-[250px] sm:w-[400px]" data-astro-cid-kh7btl4r> <h2 class="title text-5xl sm:text-9xl" data-astro-cid-kh7btl4r>Air Pods Pro</h2> </section> <section id="second" data-astro-cid-kh7btl4r> <img src="images/01.png" alt="" class="right w-[250px] sm:w-[400px]" data-astro-cid-kh7btl4r> <img src="images/02.png" alt="" class="left w-[250px] sm:w-[400px]" data-astro-cid-kh7btl4r> <h2 class="title text-5xl sm:text-9xl" data-astro-cid-kh7btl4r>Air Pods Pro</h2> </section> <footer data-astro-cid-kh7btl4r></footer> <!-- <script>
        let tl1 = gsap.timeline({
            scrollTrigger:{
                trigger:'#first',
                markers: true,
                start: 'top 50%',
                end: '+=50%',
                scrub: 2,
            }
        })
        .from('#first .right',{y:-200})
        .from('#first .left',{y:200},0)
        .from('#first .title',{scale:0,opacity:0},0)

        gsap.timeline({
            scrollTrigger:{
                trigger:'#second',
                markers: true,
                start: 'top 50%',
                end: '+=50%',
                scrub: 3,
            }
        })
        .to('#second .right',{x:300,opacity:0})
        .to('#second .left',{x:-300,opacity:0},0)
        .from('#second .title',{scale:0,opacity:0},0)
    <\/script> --> </body></html>`])), renderHead());
}, "C:/Users/User/OneDrive/\u684C\u9762/MsiTest-master/astro/src/pages/about.astro", void 0);

const $$file = "C:/Users/User/OneDrive/桌面/MsiTest-master/astro/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
