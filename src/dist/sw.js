if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const d=e=>i(e,n),f={module:{uri:n},exports:o,require:d};s[n]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(a(...e),o)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.381e1cc1.css",revision:null},{url:"assets/index.54e6cf69.js",revision:null},{url:"data/base0.svg",revision:"748b7a29f3e59149e2bd2ef61916aad5"},{url:"data/base1.svg",revision:"44946d89dab58598077a538ba5c71d70"},{url:"data/floor0.svg",revision:"a05d5c6bb18d74f405301125375707d5"},{url:"data/floor1.svg",revision:"e219429089cf94bd368a16b72ea63a69"},{url:"data/floor2.svg",revision:"a4f07fb19b1542eb2dd07e5095ea40d1"},{url:"data/pois.json",revision:"6ea732bbf06f6e2a307621fc1dd88bff"},{url:"icon.svg",revision:"0027e8979fb28cfe1ede46aacb7ed713"},{url:"index.html",revision:"b7da963a4b541a272bb6d5a496681224"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"smui-dark.css",revision:"806a9e31813f022a229afe3b1a0dd754"},{url:"smui.css",revision:"2008b460f4ab4b1fb54bb980840ac096"},{url:"icon.svg",revision:"0027e8979fb28cfe1ede46aacb7ed713"},{url:"manifest.webmanifest",revision:"5e44c07386cfab54f61fae7b23912c49"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
