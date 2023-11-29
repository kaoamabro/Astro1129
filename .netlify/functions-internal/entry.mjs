import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_b5b55477.mjs';

const _page0  = () => import('./chunks/generic_d647027f.mjs');
const _page1  = () => import('./chunks/index_023c4dbc.mjs');
const _page2  = () => import('./chunks/taeyeonabout_45df30d3.mjs');
const _page3  = () => import('./chunks/taeyeonalbum_16432493.mjs');
const _page4  = () => import('./chunks/taeyeonaward_832f8f5a.mjs');
const _page5  = () => import('./chunks/folio-1_5fc0c788.mjs');
const _page6  = () => import('./chunks/folio-2_e2e8eec0.mjs');
const _page7  = () => import('./chunks/folio-3_599cba82.mjs');
const _page8  = () => import('./chunks/taeyeon_7fb25a49.mjs');
const _page9  = () => import('./chunks/about_438aa476.mjs');
const _page10  = () => import('./chunks/index_3a5df3d9.mjs');
const _page11  = () => import('./chunks/post-1_9cc3f3c8.mjs');
const _page12  = () => import('./chunks/post-2_a9923e0a.mjs');
const _page13  = () => import('./chunks/post-3_b3eeb514.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/portfolio/taeyeonabout.astro", _page2],["src/pages/portfolio/taeyeonalbum.astro", _page3],["src/pages/portfolio/taeyeonaward.astro", _page4],["src/pages/portfolio/folio-1.astro", _page5],["src/pages/portfolio/folio-2.astro", _page6],["src/pages/portfolio/folio-3.astro", _page7],["src/pages/portfolio/taeyeon.astro", _page8],["src/pages/about.astro", _page9],["src/pages/blog/index.astro", _page10],["src/pages/blog/post-1.md", _page11],["src/pages/blog/post-2.md", _page12],["src/pages/blog/post-3.md", _page13]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
