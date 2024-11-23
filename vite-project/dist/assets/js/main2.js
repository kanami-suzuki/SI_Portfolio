(function(){const D=document.createElement("link").relList;if(D&&D.supports&&D.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function g(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(o){if(o.ep)return;o.ep=!0;const t=g(o);fetch(o.href,t)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oe(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var ee={exports:{}};(function(A,D){(function(g,d){A.exports=d()})(te,function(){return function(g){function d(t){if(o[t])return o[t].exports;var n=o[t]={exports:{},id:t,loaded:!1};return g[t].call(n.exports,n,n.exports,d),n.loaded=!0,n.exports}var o={};return d.m=g,d.c=o,d.p="dist/",d(0)}([function(g,d,o){function t(c){return c&&c.__esModule?c:{default:c}}var n=Object.assign||function(c){for(var x=1;x<arguments.length;x++){var q=arguments[x];for(var Y in q)Object.prototype.hasOwnProperty.call(q,Y)&&(c[Y]=q[Y])}return c},a=o(1),m=(t(a),o(6)),s=t(m),f=o(7),l=t(f),r=o(8),i=t(r),v=o(9),O=t(v),_=o(10),B=t(_),G=o(11),J=t(G),Q=o(14),F=t(Q),S=[],K=!1,y={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},M=function(){var c=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(c&&(K=!0),K)return S=(0,J.default)(S,y),(0,B.default)(S,y.once),S},C=function(){S=(0,F.default)(),M()},u=function(){S.forEach(function(c,x){c.node.removeAttribute("data-aos"),c.node.removeAttribute("data-aos-easing"),c.node.removeAttribute("data-aos-duration"),c.node.removeAttribute("data-aos-delay")})},e=function(c){return c===!0||c==="mobile"&&O.default.mobile()||c==="phone"&&O.default.phone()||c==="tablet"&&O.default.tablet()||typeof c=="function"&&c()===!0},p=function(c){y=n(y,c),S=(0,F.default)();var x=document.all&&!window.atob;return e(y.disable)||x?u():(y.disableMutationObserver||i.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),y.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",y.easing),document.querySelector("body").setAttribute("data-aos-duration",y.duration),document.querySelector("body").setAttribute("data-aos-delay",y.delay),y.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?M(!0):y.startEvent==="load"?window.addEventListener(y.startEvent,function(){M(!0)}):document.addEventListener(y.startEvent,function(){M(!0)}),window.addEventListener("resize",(0,l.default)(M,y.debounceDelay,!0)),window.addEventListener("orientationchange",(0,l.default)(M,y.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)(function(){(0,B.default)(S,y.once)},y.throttleDelay)),y.disableMutationObserver||i.default.ready("[data-aos]",C),S)};g.exports={init:p,refresh:M,refreshHard:C}},function(g,d){},,,,,function(g,d){(function(o){function t(e,p,c){function x(b){var j=E,$=N;return E=N=void 0,H=b,k=e.apply($,j)}function q(b){return H=b,h=setTimeout(W,p),V?x(b):k}function Y(b){var j=b-L,$=b-H,Z=p-j;return P?C(Z,T-$):Z}function I(b){var j=b-L,$=b-H;return L===void 0||j>=p||j<0||P&&$>=T}function W(){var b=u();return I(b)?U(b):void(h=setTimeout(W,Y(b)))}function U(b){return h=void 0,w&&E?x(b):(E=N=void 0,k)}function X(){h!==void 0&&clearTimeout(h),H=0,E=L=N=h=void 0}function R(){return h===void 0?k:U(u())}function z(){var b=u(),j=I(b);if(E=arguments,N=this,L=b,j){if(h===void 0)return q(L);if(P)return h=setTimeout(W,p),x(L)}return h===void 0&&(h=setTimeout(W,p)),k}var E,N,T,k,h,L,H=0,V=!1,P=!1,w=!0;if(typeof e!="function")throw new TypeError(r);return p=f(p)||0,a(c)&&(V=!!c.leading,P="maxWait"in c,T=P?M(f(c.maxWait)||0,p):T,w="trailing"in c?!!c.trailing:w),z.cancel=X,z.flush=R,z}function n(e,p,c){var x=!0,q=!0;if(typeof e!="function")throw new TypeError(r);return a(c)&&(x="leading"in c?!!c.leading:x,q="trailing"in c?!!c.trailing:q),t(e,p,{leading:x,maxWait:p,trailing:q})}function a(e){var p=typeof e>"u"?"undefined":l(e);return!!e&&(p=="object"||p=="function")}function m(e){return!!e&&(typeof e>"u"?"undefined":l(e))=="object"}function s(e){return(typeof e>"u"?"undefined":l(e))=="symbol"||m(e)&&y.call(e)==v}function f(e){if(typeof e=="number")return e;if(s(e))return i;if(a(e)){var p=typeof e.valueOf=="function"?e.valueOf():e;e=a(p)?p+"":p}if(typeof e!="string")return e===0?e:+e;e=e.replace(O,"");var c=B.test(e);return c||G.test(e)?J(e.slice(2),c?2:8):_.test(e)?i:+e}var l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="Expected a function",i=NaN,v="[object Symbol]",O=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,G=/^0o[0-7]+$/i,J=parseInt,Q=(typeof o>"u"?"undefined":l(o))=="object"&&o&&o.Object===Object&&o,F=(typeof self>"u"?"undefined":l(self))=="object"&&self&&self.Object===Object&&self,S=Q||F||Function("return this")(),K=Object.prototype,y=K.toString,M=Math.max,C=Math.min,u=function(){return S.Date.now()};g.exports=n}).call(d,function(){return this}())},function(g,d){(function(o){function t(u,e,p){function c(w){var b=z,j=E;return z=E=void 0,L=w,T=u.apply(j,b)}function x(w){return L=w,k=setTimeout(I,e),H?c(w):T}function q(w){var b=w-h,j=w-L,$=e-b;return V?M($,N-j):$}function Y(w){var b=w-h,j=w-L;return h===void 0||b>=e||b<0||V&&j>=N}function I(){var w=C();return Y(w)?W(w):void(k=setTimeout(I,q(w)))}function W(w){return k=void 0,P&&z?c(w):(z=E=void 0,T)}function U(){k!==void 0&&clearTimeout(k),L=0,z=h=E=k=void 0}function X(){return k===void 0?T:W(C())}function R(){var w=C(),b=Y(w);if(z=arguments,E=this,h=w,b){if(k===void 0)return x(h);if(V)return k=setTimeout(I,e),c(h)}return k===void 0&&(k=setTimeout(I,e)),T}var z,E,N,T,k,h,L=0,H=!1,V=!1,P=!0;if(typeof u!="function")throw new TypeError(l);return e=s(e)||0,n(p)&&(H=!!p.leading,V="maxWait"in p,N=V?y(s(p.maxWait)||0,e):N,P="trailing"in p?!!p.trailing:P),R.cancel=U,R.flush=X,R}function n(u){var e=typeof u>"u"?"undefined":f(u);return!!u&&(e=="object"||e=="function")}function a(u){return!!u&&(typeof u>"u"?"undefined":f(u))=="object"}function m(u){return(typeof u>"u"?"undefined":f(u))=="symbol"||a(u)&&K.call(u)==i}function s(u){if(typeof u=="number")return u;if(m(u))return r;if(n(u)){var e=typeof u.valueOf=="function"?u.valueOf():u;u=n(e)?e+"":e}if(typeof u!="string")return u===0?u:+u;u=u.replace(v,"");var p=_.test(u);return p||B.test(u)?G(u.slice(2),p?2:8):O.test(u)?r:+u}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},l="Expected a function",r=NaN,i="[object Symbol]",v=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,B=/^0o[0-7]+$/i,G=parseInt,J=(typeof o>"u"?"undefined":f(o))=="object"&&o&&o.Object===Object&&o,Q=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,F=J||Q||Function("return this")(),S=Object.prototype,K=S.toString,y=Math.max,M=Math.min,C=function(){return F.Date.now()};g.exports=t}).call(d,function(){return this}())},function(g,d){function o(f){var l=void 0,r=void 0;for(l=0;l<f.length;l+=1)if(r=f[l],r.dataset&&r.dataset.aos||r.children&&o(r.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(){return!!t()}function a(f,l){var r=window.document,i=t(),v=new i(m);s=l,v.observe(r.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function m(f){f&&f.forEach(function(l){var r=Array.prototype.slice.call(l.addedNodes),i=Array.prototype.slice.call(l.removedNodes),v=r.concat(i);if(o(v))return s()})}Object.defineProperty(d,"__esModule",{value:!0});var s=function(){};d.default={isSupported:n,ready:a}},function(g,d){function o(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(d,"__esModule",{value:!0});var n=function(){function r(i,v){for(var O=0;O<v.length;O++){var _=v[O];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(i,_.key,_)}}return function(i,v,O){return v&&r(i.prototype,v),O&&r(i,O),i}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,m=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function r(){o(this,r)}return n(r,[{key:"phone",value:function(){var i=t();return!(!a.test(i)&&!m.test(i.substr(0,4)))}},{key:"mobile",value:function(){var i=t();return!(!s.test(i)&&!f.test(i.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),r}();d.default=new l},function(g,d){Object.defineProperty(d,"__esModule",{value:!0});var o=function(n,a,m){var s=n.node.getAttribute("data-aos-once");a>n.position?n.node.classList.add("aos-animate"):typeof s<"u"&&(s==="false"||!m&&s!=="true")&&n.node.classList.remove("aos-animate")},t=function(n,a){var m=window.pageYOffset,s=window.innerHeight;n.forEach(function(f,l){o(f,s+m,a)})};d.default=t},function(g,d,o){function t(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(d,"__esModule",{value:!0});var n=o(12),a=t(n),m=function(s,f){return s.forEach(function(l,r){l.node.classList.add("aos-init"),l.position=(0,a.default)(l.node,f.offset)}),s};d.default=m},function(g,d,o){function t(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(d,"__esModule",{value:!0});var n=o(13),a=t(n),m=function(s,f){var l=0,r=0,i=window.innerHeight,v={offset:s.getAttribute("data-aos-offset"),anchor:s.getAttribute("data-aos-anchor"),anchorPlacement:s.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(r=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(s=document.querySelectorAll(v.anchor)[0]),l=(0,a.default)(s).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":l+=s.offsetHeight/2;break;case"bottom-bottom":l+=s.offsetHeight;break;case"top-center":l+=i/2;break;case"bottom-center":l+=i/2+s.offsetHeight;break;case"center-center":l+=i/2+s.offsetHeight/2;break;case"top-top":l+=i;break;case"bottom-top":l+=s.offsetHeight+i;break;case"center-top":l+=s.offsetHeight/2+i}return v.anchorPlacement||v.offset||isNaN(f)||(r=f),l+r};d.default=m},function(g,d){Object.defineProperty(d,"__esModule",{value:!0});var o=function(t){for(var n=0,a=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)n+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),a+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:a,left:n}};d.default=o},function(g,d){Object.defineProperty(d,"__esModule",{value:!0});var o=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(n){return{node:n}})};d.default=o}])})})(ee);var ne=ee.exports;const re=oe(ne);document.addEventListener("DOMContentLoaded",()=>{re.init()});const ie=document.querySelector(".loading");window.addEventListener("load",()=>{window.setTimeout(()=>{ie.classList.add("remove")},1e3)});document.addEventListener("DOMContentLoaded",function(){let A=window.matchMedia("(max-width: 768px)");const D=document.querySelector(".topVisual_container");if(D&&D.classList.contains("topVisual_container")&&A.matches){const n=()=>{const a=window.innerHeight*.01;D.style.setProperty("--vh",`${a}px`)};n(),window.addEventListener("resize",n)}const g=document.querySelector(".worksYear_list");if(g&&g.classList.contains("worksYear_list")){let n=document.querySelector("#year"),m=document.querySelector("#defaultValue").querySelector("a"),s=document.querySelectorAll(".worksYear_item");m.textContent.trim()||(m.textContent=s[1].querySelector("a").textContent),n.addEventListener("click",f=>{f.preventDefault(),n.classList.contains("worksYear_listVisible")?n.classList.remove("worksYear_listVisible"):n.classList.add("worksYear_listVisible")}),s.forEach(f=>{f.addEventListener("click",l=>{let r=f.querySelector("a").textContent;m.textContent=r})})}let d=document.querySelectorAll(".works_item");const o=n=>{d.forEach((a,m)=>{n.matches&&m%2===0?a.setAttribute("data-aos-delay","100"):n.matches&&m%2===1?a.setAttribute("data-aos-delay","300"):!n.matches&&m%3===0?a.setAttribute("data-aos-delay","100"):!n.matches&&m%3===1?a.setAttribute("data-aos-delay","300"):!n.matches&&m%3===2&&a.setAttribute("data-aos-delay","600")})};A.addEventListener("change",o),o(A);const t=document.querySelector("#works_container");if(t&&t.classList.contains("worksPage_list")){const n=Number(t.dataset.show),a=document.querySelectorAll("#works_container .works_item"),m=document.querySelector("#works_moreBtn");for(let r=0;r<a.length;r++)r>=n?(a[r].style.display="none",a[r].setAttribute("data-mt","false")):(a[r].style.display="block",a[r].setAttribute("data-mt","true"));const s=()=>{const r=Array.from(a).some(i=>i.getAttribute("data-mt")==="false");m.style.display=r?"flex":"none"};s();const f=document.querySelectorAll(".worksYear_item a");for(let r=0;r<f.length;r++)f[r].addEventListener("click",()=>{for(let i=0;i<a.length;i++)i>=n?(a[i].style.display="none",a[i].setAttribute("data-mt","false")):(a[i].style.display="block",a[i].setAttribute("data-mt","true"))});let l=n;m.addEventListener("click",r=>{r.preventDefault(),l+=n;for(let i=0;i<a.length&&i<l;i++)a[i].style.display="block",a[i].removeAttribute("data-mt","false"),a[i].setAttribute("data-mt","true");s()})}});
