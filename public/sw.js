if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const u=e=>n(e,i),r={module:{uri:i},exports:c,require:u};s[i]=Promise.all(a.map((e=>r[e]||u(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/7AeuUAhxTQhWuxaAQ5mzG/_buildManifest.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/7AeuUAhxTQhWuxaAQ5mzG/_middlewareManifest.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/7AeuUAhxTQhWuxaAQ5mzG/_ssgManifest.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/chunks/177-95a47691d5af8b1b.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/chunks/858-afb49ac740978a65.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/chunks/main-a39e96cb1c2837e1.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/chunks/pages/404-8333f28f3db42bd4.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/chunks/pages/_app-84e3f34e59611c73.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/chunks/pages/_error-8022dacb1937fc7a.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/chunks/pages/blog-5ec76365ef79c913.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/chunks/pages/index-f2fc4a7bf9d8df71.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-b5f4112c99c60f45.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/chunks/webpack-ad6c7245cbb481de.js",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/_next/static/css/480d3eaa28e70b1c.css",revision:"7AeuUAhxTQhWuxaAQ5mzG"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/images/avatar-suit.jpg",revision:"d93dadcb19c594fe6372a4b809188f36"},{url:"/images/favicon.png",revision:"ab41c9e49e28d6b5ad570a081e125f3b"},{url:"/manifest.json",revision:"063ad5760903dcffc6f479ef11627179"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
