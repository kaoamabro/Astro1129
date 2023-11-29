import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro_283c68d6.mjs';
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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/taeyeonabout/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/taeyeonabout","type":"page","pattern":"^\\/portfolio\\/taeyeonabout\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"taeyeonabout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/taeyeonabout.astro","pathname":"/portfolio/taeyeonabout","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/taeyeonalbum/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/taeyeonalbum","type":"page","pattern":"^\\/portfolio\\/taeyeonalbum\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"taeyeonalbum","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/taeyeonalbum.astro","pathname":"/portfolio/taeyeonalbum","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/taeyeonaward/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/taeyeonaward","type":"page","pattern":"^\\/portfolio\\/taeyeonaward\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"taeyeonaward","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/taeyeonaward.astro","pathname":"/portfolio/taeyeonaward","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/folio-1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/folio-1","type":"page","pattern":"^\\/portfolio\\/folio-1\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"folio-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/folio-1.astro","pathname":"/portfolio/folio-1","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/folio-2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/folio-2","type":"page","pattern":"^\\/portfolio\\/folio-2\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"folio-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/folio-2.astro","pathname":"/portfolio/folio-2","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/folio-3/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/folio-3","type":"page","pattern":"^\\/portfolio\\/folio-3\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"folio-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/folio-3.astro","pathname":"/portfolio/folio-3","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/taeyeon/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/taeyeon","type":"page","pattern":"^\\/portfolio\\/taeyeon\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"taeyeon","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/taeyeon.astro","pathname":"/portfolio/taeyeon","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/post-1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-1","type":"page","pattern":"^\\/blog\\/post-1\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-1.md","pathname":"/blog/post-1","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/post-2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-2","type":"page","pattern":"^\\/blog\\/post-2\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-2.md","pathname":"/blog/post-2","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/post-3/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-3","type":"page","pattern":"^\\/blog\\/post-3\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-3.md","pathname":"/blog/post-3","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/mcdwd/Desktop/astro-master/astro-master/src/pages/blog/post-1.md",{"propagation":"in-tree","containsHead":true}],["C:/Users/mcdwd/Desktop/astro-master/astro-master/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/mcdwd/Desktop/astro-master/astro-master/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/mcdwd/Desktop/astro-master/astro-master/src/pages/blog/post-2.md",{"propagation":"in-tree","containsHead":true}],["C:/Users/mcdwd/Desktop/astro-master/astro-master/src/pages/blog/post-3.md",{"propagation":"in-tree","containsHead":true}],["C:/Users/mcdwd/Desktop/astro-master/astro-master/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/mcdwd/Desktop/astro-master/astro-master/src/pages/portfolio/taeyeonabout.astro",{"propagation":"none","containsHead":true}],["C:/Users/mcdwd/Desktop/astro-master/astro-master/src/pages/portfolio/taeyeonalbum.astro",{"propagation":"none","containsHead":true}],["C:/Users/mcdwd/Desktop/astro-master/astro-master/src/pages/portfolio/folio-1.astro",{"propagation":"none","containsHead":true}],["C:/Users/mcdwd/Desktop/astro-master/astro-master/src/pages/portfolio/folio-2.astro",{"propagation":"none","containsHead":true}],["C:/Users/mcdwd/Desktop/astro-master/astro-master/src/pages/portfolio/folio-3.astro",{"propagation":"none","containsHead":true}],["C:/Users/mcdwd/Desktop/astro-master/astro-master/src/pages/portfolio/taeyeon.astro",{"propagation":"none","containsHead":true}],["C:/Users/mcdwd/Desktop/astro-master/astro-master/src/layouts/MDLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/post-1@_@md",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/post-2@_@md",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/post-3@_@md",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_acd25820.mjs","\u0000@astrojs-manifest":"manifest_b5b55477.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_d647027f.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_023c4dbc.mjs","\u0000@astro-page:src/pages/portfolio/taeyeonabout@_@astro":"chunks/taeyeonabout_45df30d3.mjs","\u0000@astro-page:src/pages/portfolio/taeyeonalbum@_@astro":"chunks/taeyeonalbum_16432493.mjs","\u0000@astro-page:src/pages/portfolio/taeyeonaward@_@astro":"chunks/taeyeonaward_832f8f5a.mjs","\u0000@astro-page:src/pages/portfolio/folio-1@_@astro":"chunks/folio-1_5fc0c788.mjs","\u0000@astro-page:src/pages/portfolio/folio-2@_@astro":"chunks/folio-2_e2e8eec0.mjs","\u0000@astro-page:src/pages/portfolio/folio-3@_@astro":"chunks/folio-3_599cba82.mjs","\u0000@astro-page:src/pages/portfolio/taeyeon@_@astro":"chunks/taeyeon_7fb25a49.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_438aa476.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_3a5df3d9.mjs","\u0000@astro-page:src/pages/blog/post-1@_@md":"chunks/post-1_9cc3f3c8.mjs","\u0000@astro-page:src/pages/blog/post-2@_@md":"chunks/post-2_a9923e0a.mjs","\u0000@astro-page:src/pages/blog/post-3@_@md":"chunks/post-3_b3eeb514.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.4ed993c7.js","/astro/hoisted.js?q=2":"_astro/hoisted.77775e67.js","/astro/hoisted.js?q=1":"_astro/hoisted.107416b8.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/taeyeonbackground.03411084.jpg","/_astro/taeyeonbackground02.151609fc.jpg","/_astro/about.c023ae63.css","/favicon.svg","/_astro/hoisted.107416b8.js","/_astro/hoisted.77775e67.js","/images/01.png","/images/02.png","/images/03.png","/images/taeyeonbackground.jpg","/images/taeyeonbackground02.jpg","/images/taeyeonheadshot01.jpg","/images/taeyeonscroll01.jpg","/images/taeyeonscroll02.jpg","/images/taeyeonscroll03.jpg","/images/taeyeonscroll04.jpg","/index.html","/portfolio/taeyeonabout/index.html","/portfolio/taeyeonalbum/index.html","/portfolio/taeyeonaward/index.html","/portfolio/folio-1/index.html","/portfolio/folio-2/index.html","/portfolio/folio-3/index.html","/portfolio/taeyeon/index.html","/about/index.html","/blog/index.html","/blog/post-1/index.html","/blog/post-2/index.html","/blog/post-3/index.html"]});

export { manifest };
