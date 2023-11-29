import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro_4262e2f8.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/folio-1","type":"page","pattern":"^\\/portfolio\\/folio-1\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"folio-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/folio-1.html","pathname":"/portfolio/folio-1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/folio-2","type":"page","pattern":"^\\/portfolio\\/folio-2\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"folio-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/folio-2.html","pathname":"/portfolio/folio-2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/folio-3","type":"page","pattern":"^\\/portfolio\\/folio-3\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"folio-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/folio-3.html","pathname":"/portfolio/folio-3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@import\"https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Dancing+Script:wght@400;700&family=Noto+Sans+TC:wght@400;900&display=swap\";@import\"https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Dancing+Script:wght@400;700&family=Lobster&family=Noto+Sans+TC:wght@400;900&display=swap\";[data-astro-cid-kh7btl4r]{margin:0;padding:0;box-sizing:border-box}header[data-astro-cid-kh7btl4r]{z-index:1000}header[data-astro-cid-kh7btl4r],section[data-astro-cid-kh7btl4r]{position:relative;width:100%;height:100vh;background-color:#123}img[data-astro-cid-kh7btl4r]{position:absolute}#first[data-astro-cid-kh7btl4r]{background-color:#ccc;.right{top:10%;right:15%;z-index:20;filter:drop-shadow(8px 8px 10px rgb(0 0 0 / .2))}.left{bottom:10%;left:15%;z-index:10;filter:drop-shadow(8px 8px 10px rgb(0 0 0 / .2))}.title{position:absolute;width:fit-content;height:fit-content;inset:0;margin:auto;z-index:15;filter:drop-shadow(8px 8px 10px rgb(0 0 0 / .6));font-family:Caveat,serif}}#second[data-astro-cid-kh7btl4r]{background-color:#088;.right{top:10%;right:15%;z-index:20;filter:drop-shadow(8px 8px 10px rgb(0 0 0 / .3))}.left{bottom:10%;left:15%;z-index:10;filter:drop-shadow(8px 8px 10px rgb(0 0 0 / .3))}.title{position:absolute;width:fit-content;height:fit-content;inset:0;margin:auto;z-index:15;filter:drop-shadow(8px 8px 10px rgb(0 0 0 / .4));font-family:Lobster,serif;color:#e04}}footer[data-astro-cid-kh7btl4r]{height:100vh}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-1","type":"page","pattern":"^\\/blog\\/post-1\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-1.md","pathname":"/blog/post-1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-2","type":"page","pattern":"^\\/blog\\/post-2\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-2.md","pathname":"/blog/post-2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-3","type":"page","pattern":"^\\/blog\\/post-3\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-3.md","pathname":"/blog/post-3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/User/OneDrive/桌面/MsiTest-master/astro/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/OneDrive/桌面/MsiTest-master/astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_3e5b7606.mjs","/src/pages/portfolio/folio-1.html":"chunks/pages/folio-1_3e5b4984.mjs","/src/pages/portfolio/folio-2.html":"chunks/pages/folio-2_c9de6877.mjs","/src/pages/portfolio/folio-3.html":"chunks/pages/folio-3_e36b4269.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_3c6a0cfb.mjs","/src/pages/index.astro":"chunks/pages/index_690cf4c1.mjs","/src/pages/blog/post-1.md":"chunks/pages/post-1_aee748f8.mjs","/src/pages/blog/post-2.md":"chunks/pages/post-2_622692d4.mjs","/src/pages/blog/post-3.md":"chunks/pages/post-3_ed499b35.mjs","\u0000@astrojs-manifest":"manifest_dc3b9f7c.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_cbc69e99.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_ce6e7e79.mjs","\u0000@astro-page:src/pages/portfolio/folio-1@_@html":"chunks/folio-1_37d33039.mjs","\u0000@astro-page:src/pages/portfolio/folio-2@_@html":"chunks/folio-2_18e25163.mjs","\u0000@astro-page:src/pages/portfolio/folio-3@_@html":"chunks/folio-3_794346a1.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_37034a04.mjs","\u0000@astro-page:src/pages/blog/post-1@_@md":"chunks/post-1_3268e10d.mjs","\u0000@astro-page:src/pages/blog/post-2@_@md":"chunks/post-2_ddec87bb.mjs","\u0000@astro-page:src/pages/blog/post-3@_@md":"chunks/post-3_ce03d053.mjs","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg"]});

export { manifest };
