if(!self.define){let e,r={};const i=(i,c)=>(i=new URL(i+".js",c).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let o={};const t=e=>i(e,n),l={module:{uri:n},exports:o,require:t};r[n]=Promise.all(c.map((e=>l[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vuestagram"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/practice/css/app.ec5bd91d.css",revision:null},{url:"/practice/follower.json",revision:"4ea727402589bc45b1e957a4c7d31fb6"},{url:"/practice/img/logo1.9db206b1.png",revision:null},{url:"/practice/index.html",revision:"2f857b6a883b225c45f00f9b44d46a94"},{url:"/practice/js/app.88e138c8.js",revision:null},{url:"/practice/js/chunk-vendors.990a627b.js",revision:null},{url:"/practice/manifest.json",revision:"6a1ad00dd7d473f746f3897d0ce8c52e"},{url:"/practice/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
