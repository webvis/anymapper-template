const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};Q();function x(){}function I(e){return e()}function P(){return Object.create(null)}function j(e){e.forEach(I)}function X(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let L;function Y(e,t){return L||(L=document.createElement("a")),L.href=t,e===L.href}function Z(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function F(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function y(){return O(" ")}function ee(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function te(e){return Array.from(e.childNodes)}function ne(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let V;function b(e){V=e}const $=[],B=[],S=[],H=[],re=Promise.resolve();let N=!1;function oe(){N||(N=!0,re.then(R))}function M(e){S.push(e)}const A=new Set;let E=0;function R(){const e=V;do{for(;E<$.length;){const t=$[E];E++,b(t),ie(t.$$)}for(b(null),$.length=0,E=0;B.length;)B.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];A.has(n)||(A.add(n),n())}S.length=0}while($.length);for(;H.length;)H.pop()();N=!1,A.clear(),b(e)}function ie(e){if(e.fragment!==null){e.update(),j(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const C=new Set;let se;function U(e,t){e&&e.i&&(C.delete(e),e.i(t))}function le(e,t,n,r){if(e&&e.o){if(C.has(e))return;C.add(e),se.c.push(()=>{C.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ce(e){e&&e.c()}function W(e,t,n,r){const{fragment:o,on_mount:i,on_destroy:s,after_update:f}=e.$$;o&&o.m(t,n),r||M(()=>{const a=i.map(I).filter(X);s?s.push(...a):j(a),e.$$.on_mount=[]}),f.forEach(M)}function z(e,t){const n=e.$$;n.fragment!==null&&(j(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){e.$$.dirty[0]===-1&&($.push(e),oe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(e,t,n,r,o,i,s,f=[-1]){const a=V;b(e);const l=e.$$={fragment:null,ctx:null,props:i,update:x,not_equal:o,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:P(),dirty:f,skip_bound:!1,root:t.target||a.$$.root};s&&s(l.root);let _=!1;if(l.ctx=n?n(e,t.props||{},(u,m,...v)=>{const g=v.length?v[0]:m;return l.ctx&&o(l.ctx[u],l.ctx[u]=g)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](g),_&&ue(e,u)),m}):[],l.update(),_=!0,j(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const u=te(t.target);l.fragment&&l.fragment.l(u),u.forEach(T)}else l.fragment&&l.fragment.c();t.intro&&U(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),R()}b(a)}class G{$destroy(){z(this,1),this.$destroy=x}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Z(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fe=""+new URL("svelte.a39f39b7.svg",import.meta.url).href;function ae(e){let t,n,r,o,i;return{c(){t=d("button"),n=O("count is "),r=O(e[0])},m(s,f){F(s,t,f),c(t,n),c(t,r),o||(i=ee(t,"click",e[1]),o=!0)},p(s,[f]){f&1&&ne(r,s[0])},i:x,o:x,d(s){s&&T(t),o=!1,i()}}}function de(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class me extends G{constructor(t){super(),D(this,t,de,ae,K,{})}}function he(e){let t,n,r,o,i,s,f,a,l,_,u,m,v,g,q,w,k;return m=new me({}),{c(){t=d("main"),n=d("div"),r=d("a"),r.innerHTML='<img src="/vite.svg" class="logo svelte-c9fbf7" alt="Vite Logo"/>',o=y(),i=d("a"),s=d("img"),a=y(),l=d("h1"),l.textContent="Vite + Svelte",_=y(),u=d("div"),ce(m.$$.fragment),v=y(),g=d("p"),g.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app framework powered by Vite!',q=y(),w=d("p"),w.textContent="Click on the Vite and Svelte logos to learn more",h(r,"href","https://vitejs.dev"),h(r,"target","_blank"),Y(s.src,f=fe)||h(s,"src",f),h(s,"class","logo svelte svelte-c9fbf7"),h(s,"alt","Svelte Logo"),h(i,"href","https://svelte.dev"),h(i,"target","_blank"),h(u,"class","card"),h(w,"class","read-the-docs svelte-c9fbf7")},m(p,J){F(p,t,J),c(t,n),c(n,r),c(n,o),c(n,i),c(i,s),c(t,a),c(t,l),c(t,_),c(t,u),W(m,u,null),c(t,v),c(t,g),c(t,q),c(t,w),k=!0},p:x,i(p){k||(U(m.$$.fragment,p),k=!0)},o(p){le(m.$$.fragment,p),k=!1},d(p){p&&T(t),z(m)}}}class pe extends G{constructor(t){super(),D(this,t,null,he,K,{})}}navigator.serviceWorker.register("service-worker.js",{scope:"."});new pe({target:document.getElementById("app")});