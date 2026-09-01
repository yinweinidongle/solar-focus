var Hf=Object.defineProperty;var Gf=(n,e,t)=>e in n?Hf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var be=(n,e,t)=>Gf(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function el(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ot={},ps=[],wn=()=>{},Wu=()=>!1,xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Mo=n=>n.startsWith("onUpdate:"),Ct=Object.assign,tl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Vf=Object.prototype.hasOwnProperty,tt=(n,e)=>Vf.call(n,e),ze=Array.isArray,ui=n=>lr(n)==="[object Map]",Qr=n=>lr(n)==="[object Set]",zl=n=>lr(n)==="[object Date]",Ve=n=>typeof n=="function",mt=n=>typeof n=="string",An=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",Xu=n=>(st(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),Yu=Object.prototype.toString,lr=n=>Yu.call(n),kf=n=>lr(n).slice(8,-1),qu=n=>lr(n)==="[object Object]",nl=n=>mt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vs=el(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),So=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Wf=/-\w/g,fn=So(n=>n.replace(Wf,e=>e.slice(1).toUpperCase())),Xf=/\B([A-Z])/g,Oi=So(n=>n.replace(Xf,"-$1").toLowerCase()),ju=So(n=>n.charAt(0).toUpperCase()+n.slice(1)),zo=So(n=>n?`on${ju(n)}`:""),En=(n,e)=>!Object.is(n,e),Ho=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ku=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Yf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Hl;const yo=()=>Hl||(Hl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Eo(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=mt(i)?$f(i):Eo(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(mt(n)||st(n))return n}const qf=/;(?![^(]*\))/g,jf=/:([^]+)/,Kf=/\/\*[^]*?\*\//g;function $f(n){const e={};return n.replace(Kf,"").split(qf).forEach(t=>{if(t){const i=t.split(jf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function bo(n){let e="";if(mt(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=bo(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jf=el(Zf);function $u(n){return!!n||n===""}function Qf(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=To(n[i],e[i]);return t}function Gl(n,e){if(n.size!==e.size)return!1;const t=Array.from(e),i=new Uint8Array(t.length);for(const s of n){let r=-1;for(let a=0;a<t.length;a++)if(!i[a]&&To(s,t[a])){r=a;break}if(r<0)return!1;i[r]=1}return!0}function To(n,e){if(n===e)return!0;let t=zl(n),i=zl(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=An(n),i=An(e),t||i)return n===e;if(t=ze(n),i=ze(e),t||i)return t&&i?Qf(n,e):!1;if(t=st(n),i=st(e),t||i){if(!t||!i)return!1;if(t=ui(n),i=ui(e),t||i||(t=Qr(n),i=Qr(e),t||i))return t&&i?Gl(n,e):!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!To(n[a],e[a]))return!1}}return String(n)===String(e)}const Zu=n=>!!(n&&n.__v_isRef===!0),La=n=>mt(n)?n:n==null?"":ze(n)||st(n)&&(n.toString===Yu||!Ve(n.toString))?Zu(n)?La(n.value):JSON.stringify(n,Ju,2):String(n),Ju=(n,e)=>Zu(e)?Ju(n,e.value):ui(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Go(i,r)+" =>"]=s,t),{})}:Qr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Go(t))}:An(e)?Go(e):st(e)&&!ze(e)&&!qu(e)?String(e):e,Go=(n,e="")=>{var t;return An(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wt;class ed{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&wt&&(wt.active?(this.parent=wt,this.index=(wt.scopes||(wt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=wt;try{return wt=this,e()}finally{wt=t}}}on(){++this._on===1&&(this.prevScope=wt,wt=this)}off(){if(this._on>0&&--this._on===0){if(wt===this)wt=this.prevScope;else{let e=wt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function td(){return wt}let rt;const Vo=new WeakSet;class Qu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,wt&&(wt.active?wt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vo.has(this)&&(Vo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||th(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vl(this),nh(this);const e=rt,t=dn;rt=this,dn=!0;try{return this.fn()}finally{ih(this),rt=e,dn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)rl(e);this.deps=this.depsTail=void 0,Vl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Da(this)&&this.run()}get dirty(){return Da(this)}}let eh=0,ks,Ws;function th(n,e=!1){if(n.flags|=8,e){n.next=Ws,Ws=n;return}n.next=ks,ks=n}function il(){eh++}function sl(){if(--eh>0)return;if(Ws){let e=Ws;for(Ws=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ks;){let e=ks;for(ks=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function nh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ih(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),rl(i),nd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Da(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function sh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Qs)||(n.globalVersion=Qs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Da(n))))return;n.flags|=2;const e=n.dep,t=rt,i=dn;rt=n,dn=!0;try{nh(n);const s=n.fn(n._value);(e.version===0||En(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{rt=t,dn=i,ih(n),n.flags&=-3}}function rl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)rl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function nd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let dn=!0;const rh=[];function jn(){rh.push(dn),dn=!1}function Kn(){const n=rh.pop();dn=n===void 0?!0:n}function Vl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=rt;rt=void 0;try{e()}finally{rt=t}}}let Qs=0;class id{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ol{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!rt||!dn||rt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==rt)t=this.activeLink=new id(rt,this),rt.deps?(t.prevDep=rt.depsTail,rt.depsTail.nextDep=t,rt.depsTail=t):rt.deps=rt.depsTail=t,oh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=rt.depsTail,t.nextDep=void 0,rt.depsTail.nextDep=t,rt.depsTail=t,rt.deps===t&&(rt.deps=i)}return t}trigger(e){this.version++,Qs++,this.notify(e)}notify(e){il();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{sl()}}}function oh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)oh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ua=new WeakMap,Ci=Symbol(""),Ia=Symbol(""),er=Symbol("");function Ut(n,e,t){if(dn&&rt){let i=Ua.get(n);i||Ua.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new ol),s.map=i,s.key=t),s.track()}}function Hn(n,e,t,i,s,r){const a=Ua.get(n);if(!a){Qs++;return}const o=l=>{l&&l.trigger()};if(il(),e==="clear")a.forEach(o);else{const l=ze(n),c=l&&nl(t);if(l&&t==="length"){const u=Number(i);a.forEach((h,d)=>{(d==="length"||d===er||!An(d)&&d>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(er)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Ci)),ui(n)&&o(a.get(Ia)));break;case"delete":l||(o(a.get(Ci)),ui(n)&&o(a.get(Ia)));break;case"set":ui(n)&&o(a.get(Ci));break}}sl()}function Hi(n){const e=et(n);return e===n?e:(Ut(e,"iterate",er),pn(n)?e:e.map($n))}function al(n){return Ut(n=et(n),"iterate",er),n}function Mn(n,e){return fi(n)?tr(ms(n)?$n(e):e):$n(e)}const sd={__proto__:null,[Symbol.iterator](){return ko(this,Symbol.iterator,n=>Mn(this,n))},concat(...n){return Hi(this).concat(...n.map(e=>ze(e)?Hi(e):e))},entries(){return ko(this,"entries",n=>(n[1]=Mn(this,n[1]),n))},every(n,e){return Cn(this,"every",n,e,void 0,arguments)},filter(n,e){return Cn(this,"filter",n,e,t=>t.map(i=>Mn(this,i)),arguments)},find(n,e){return Cn(this,"find",n,e,t=>Mn(this,t),arguments)},findIndex(n,e){return Cn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Cn(this,"findLast",n,e,t=>Mn(this,t),arguments)},findLastIndex(n,e){return Cn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Cn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Wo(this,"includes",n)},indexOf(...n){return Wo(this,"indexOf",n)},join(n){return Hi(this).join(n)},lastIndexOf(...n){return Wo(this,"lastIndexOf",n)},map(n,e){return Cn(this,"map",n,e,void 0,arguments)},pop(){return Cs(this,"pop")},push(...n){return Cs(this,"push",n)},reduce(n,...e){return kl(this,"reduce",n,e)},reduceRight(n,...e){return kl(this,"reduceRight",n,e)},shift(){return Cs(this,"shift")},some(n,e){return Cn(this,"some",n,e,void 0,arguments)},splice(...n){return Cs(this,"splice",n)},toReversed(){return Hi(this).toReversed()},toSorted(n){return Hi(this).toSorted(n)},toSpliced(...n){return Hi(this).toSpliced(...n)},unshift(...n){return Cs(this,"unshift",n)},values(){return ko(this,"values",n=>Mn(this,n))}};function ko(n,e,t){const i=al(n),s=i[e]();return i!==n&&!pn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const rd=Array.prototype;function Cn(n,e,t,i,s,r){const a=al(n),o=a!==n&&!pn(n),l=a[e];if(l!==rd[e]){const h=l.apply(n,r);return o?$n(h):h}let c=t;a!==n&&(o?c=function(h,d){return t.call(this,Mn(n,h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function kl(n,e,t,i){const s=al(n),r=s!==n&&!pn(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,h){return o&&(o=!1,c=Mn(n,c)),t.call(this,c,Mn(n,u),h,n)}):t.length>3&&(a=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](a,...i);return o?Mn(n,l):l}function Wo(n,e,t){const i=et(n);Ut(i,"iterate",er);const s=i[e](...t);return(s===-1||s===!1)&&hl(t[0])?(t[0]=et(t[0]),i[e](...t)):s}function Cs(n,e,t=[]){jn(),il();const i=et(n)[e].apply(n,t);return sl(),Kn(),i}const od=el("__proto__,__v_isRef,__isVue"),ah=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(An));function ad(n){An(n)||(n=String(n));const e=et(this);return Ut(e,"has",n),e.hasOwnProperty(n)}class lh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?_d:fh:r?hh:uh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ze(e);if(!s){let l;if(a&&(l=sd[t]))return l;if(t==="hasOwnProperty")return ad}const o=Reflect.get(e,t,It(e)?e:i);if((An(t)?ah.has(t):od(t))||(s||Ut(e,"get",t),r))return o;if(It(o)){const l=a&&nl(t)?o:o.value;return s&&st(l)?Fa(l):l}return st(o)?s?Fa(o):cl(o):o}}class ch extends lh{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=ze(e)&&nl(t);if(!this._isShallow){const c=fi(r);if(!pn(i)&&!fi(i)&&(r=et(r),i=et(i)),!a&&It(r)&&!It(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:tt(e,t),l=Reflect.set(e,t,i,It(e)?e:s);return e===et(s)&&l&&(o?En(i,r)&&Hn(e,"set",t,i):Hn(e,"add",t,i)),l}deleteProperty(e,t){const i=tt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Hn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!An(t)||!ah.has(t))&&Ut(e,"has",t),i}ownKeys(e){return Ut(e,"iterate",ze(e)?"length":Ci),Reflect.ownKeys(e)}}class ld extends lh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const cd=new ch,ud=new ld,hd=new ch(!0);const Na=n=>n,mr=n=>Reflect.getPrototypeOf(n);function fd(n,e,t){return function(...i){const s=this.__v_raw,r=et(s),a=ui(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Na:e?tr:$n;return!e&&Ut(r,"iterate",l?Ia:Ci),Ct(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function gr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function dd(n,e){const t={get(s){const r=this.__v_raw,a=et(r),o=et(s);n||(En(s,o)&&Ut(a,"get",s),Ut(a,"get",o));const{has:l}=mr(a),c=e?Na:n?tr:$n;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ut(et(s),"iterate",Ci),s.size},has(s){const r=this.__v_raw,a=et(r),o=et(s);return n||(En(s,o)&&Ut(a,"has",s),Ut(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=et(o),c=e?Na:n?tr:$n;return!n&&Ut(l,"iterate",Ci),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}};return Ct(t,n?{add:gr("add"),set:gr("set"),delete:gr("delete"),clear:gr("clear")}:{add(s){const r=et(this),a=mr(r),o=et(s),l=!e&&!pn(s)&&!fi(s)?o:s;return a.has.call(r,l)||En(s,l)&&a.has.call(r,s)||En(o,l)&&a.has.call(r,o)||(r.add(l),Hn(r,"add",l,l)),this},set(s,r){!e&&!pn(r)&&!fi(r)&&(r=et(r));const a=et(this),{has:o,get:l}=mr(a);let c=o.call(a,s);c||(s=et(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?En(r,u)&&Hn(a,"set",s,r):Hn(a,"add",s,r),this},delete(s){const r=et(this),{has:a,get:o}=mr(r);let l=a.call(r,s);l||(s=et(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Hn(r,"delete",s,void 0),c},clear(){const s=et(this),r=s.size!==0,a=s.clear();return r&&Hn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=fd(s,n,e)}),t}function ll(n,e){const t=dd(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(tt(t,s)&&s in i?t:i,s,r)}const pd={get:ll(!1,!1)},md={get:ll(!1,!0)},gd={get:ll(!0,!1)};const uh=new WeakMap,hh=new WeakMap,fh=new WeakMap,_d=new WeakMap;function vd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cl(n){return fi(n)?n:ul(n,!1,cd,pd,uh)}function xd(n){return ul(n,!1,hd,md,hh)}function Fa(n){return ul(n,!0,ud,gd,fh)}function ul(n,e,t,i,s){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=vd(kf(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function ms(n){return fi(n)?ms(n.__v_raw):!!(n&&n.__v_isReactive)}function fi(n){return!!(n&&n.__v_isReadonly)}function pn(n){return!!(n&&n.__v_isShallow)}function hl(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function Md(n){return!tt(n,"__v_skip")&&Object.isExtensible(n)&&Ku(n,"__v_skip",!0),n}const $n=n=>st(n)?cl(n):n,tr=n=>st(n)?Fa(n):n;function It(n){return n?n.__v_isRef===!0:!1}function _r(n){return Sd(n,!1)}function Sd(n,e){return It(n)?n:new yd(n,e)}class yd{constructor(e,t){this.dep=new ol,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:$n(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||pn(e)||fi(e);e=i?e:et(e),En(e,t)&&(this._rawValue=e,this._value=i?e:$n(e),this.dep.trigger())}}function Ed(n){return It(n)?n.value:n}const bd={get:(n,e,t)=>e==="__v_raw"?n:Ed(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return It(s)&&!It(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function dh(n){return ms(n)?n:new Proxy(n,bd)}class Td{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ol(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&rt!==this)return th(this,!0),!0}get value(){const e=this.dep.track();return sh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wd(n,e,t=!1){let i,s;return Ve(n)?i=n:(i=n.get,s=n.set),new Td(i,s,t)}const vr={},eo=new WeakMap;let yi;function Ad(n,e=!1,t=yi){if(t){let i=eo.get(t);i||eo.set(t,i=[]),i.push(n)}}function Rd(n,e,t=ot){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=b=>s?b:pn(b)||s===!1||s===0?oi(b,1):oi(b);let u,h,d,p,_=!1,g=!1;if(It(n)?(h=()=>n.value,_=pn(n)):ms(n)?(h=()=>c(n),_=!0):ze(n)?(g=!0,_=n.some(b=>ms(b)||pn(b)),h=()=>n.map(b=>{if(It(b))return b.value;if(ms(b))return c(b);if(Ve(b))return l?l(b,2):b()})):Ve(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){jn();try{d()}finally{Kn()}}const b=yi;yi=u;try{return l?l(n,3,[p]):n(p)}finally{yi=b}}:h=wn,e&&s){const b=h,L=s===!0?1/0:s;h=()=>oi(b(),L)}const m=td(),f=()=>{u.stop(),m&&m.active&&tl(m.effects,u)};if(r&&e){const b=e;e=(...L)=>{const P=b(...L);return f(),P}}let E=g?new Array(n.length).fill(vr):vr;const S=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const L=u.run();if(b||s||_||(g?L.some((P,R)=>En(P,E[R])):En(L,E))){d&&d();const P=yi;yi=u;try{const R=[L,E===vr?void 0:g&&E[0]===vr?[]:E,p];E=L,l?l(e,3,R):e(...R)}finally{yi=P}}}else u.run()};return o&&o(S),u=new Qu(h),u.scheduler=a?()=>a(S,!1):S,p=b=>Ad(b,!1,u),d=u.onStop=()=>{const b=eo.get(u);if(b){if(l)l(b,4);else for(const L of b)L();eo.delete(u)}},e?i?S(!0):E=u.run():a?a(S.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function oi(n,e=1/0,t){if(e<=0||!st(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,It(n))oi(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)oi(n[i],e,t);else if(Qr(n)||ui(n))n.forEach(i=>{oi(i,e,t)});else if(qu(n)){for(const i in n)oi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&oi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cr(n,e,t,i){try{return i?n(...i):n()}catch(s){wo(s,e,t)}}function gn(n,e,t,i){if(Ve(n)){const s=cr(n,e,t,i);return s&&Xu(s)&&s.catch(r=>{wo(r,e,t)}),s}if(ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(gn(n[r],e,t,i));return s}}function wo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ot;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(r){jn(),cr(r,null,10,[n,l,c]),Kn();return}}Cd(n,t,s,i,a)}function Cd(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const zt=[];let xn=-1;const gs=[];let ri=null,cs=0;const ph=Promise.resolve();let to=null;function Pd(n){const e=to||ph;return n?e.then(this?n.bind(this):n):e}function Ld(n){let e=xn+1,t=zt.length;for(;e<t;){const i=e+t>>>1,s=zt[i],r=nr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function fl(n){if(!(n.flags&1)){const e=nr(n),t=zt[zt.length-1];!t||!(n.flags&2)&&e>=nr(t)?zt.push(n):zt.splice(Ld(e),0,n),n.flags|=1,mh()}}function mh(){to||(to=ph.then(_h))}function Dd(n){if(!ze(n))ri&&n.id===-1?ri.splice(cs+1,0,n):n.flags&1||(gs.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)gs.push(n[e]);mh()}function Wl(n,e,t=xn+1){for(;t<zt.length;t++){const i=zt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;zt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function gh(n){if(gs.length){const e=[...new Set(gs)].sort((t,i)=>nr(t)-nr(i));if(gs.length=0,ri){for(let t=0;t<e.length;t++)ri.push(e[t]);return}for(ri=e,cs=0;cs<ri.length;cs++){const t=ri[cs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ri=null,cs=0}}const nr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function _h(n){try{for(xn=0;xn<zt.length;xn++){const e=zt[xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),cr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xn<zt.length;xn++){const e=zt[xn];e&&(e.flags&=-2)}xn=-1,zt.length=0,gh(),to=null,(zt.length||gs.length)&&_h()}}let Tn=null,vh=null;function no(n){const e=Tn;return Tn=n,vh=n&&n.type.__scopeId||null,e}function Ud(n,e=Tn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&tc(-1);const r=no(e),a=Pi.length;let o;try{o=n(...s)}finally{for(let l=Pi.length;l>a;l--)Vh();no(r),i._d&&tc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function gi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(jn(),gn(l,t,8,[n.el,o,n,e]),Kn())}}function Id(n,e){if(Ht){let t=Ht.provides;const i=Ht.parent&&Ht.parent.provides;i===t&&(t=Ht.provides=Object.create(i)),t[n]=e}}function Kr(n,e,t=!1){const i=Ip();if(i||_s){let s=_s?_s._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}const Nd=Symbol.for("v-scx"),Fd=()=>Kr(Nd);function Xo(n,e,t){return xh(n,e,t)}function xh(n,e,t=ot){const{immediate:i,deep:s,flush:r,once:a}=t,o=Ct({},t),l=e&&i||!e&&r!=="post";let c;if(rr){if(r==="sync"){const p=Fd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=wn,p.resume=wn,p.pause=wn,p}}const u=Ht;o.call=(p,_,g)=>gn(p,u,_,g);let h=!1;r==="post"?o.scheduler=p=>{Vt(p,u&&u.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(p,_)=>{_?p():fl(p)}),o.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Rd(n,e,o);return rr&&(c?c.push(d):l&&d()),d}function Od(n,e,t){const i=this.proxy,s=mt(n)?n.includes(".")?Mh(i,n):()=>i[n]:n.bind(i,i);let r;Ve(e)?r=e:(r=e.handler,t=e);const a=ur(this),o=xh(s,r.bind(i),t);return a(),o}function Mh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Bd=Symbol("_vte"),Ao=n=>n.__isTeleport,Yo=Symbol("_leaveCb");function zd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Zn){e=t;break}}return e}function Sh(n){if(!pl(n))return Ao(n.type)&&n.children?zd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ve(t.default))return t.default()}}function dl(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;dl(Ao(t.type)&&Sh(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Hd(n,e){return Ve(n)?Ct({name:n.name},e,{setup:n}):n}function yh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Xl(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const io=new WeakMap;function Xs(n,e,t,i,s=!1){if(ze(n)){n.forEach((g,m)=>Xs(g,e&&(ze(e)?e[m]:e),t,i,s));return}if(Ys(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Xs(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?vl(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===ot?o.refs={}:o.refs,h=o.setupState,d=et(h),p=h===ot?Wu:g=>Xl(u,g)?!1:tt(d,g),_=(g,m)=>!(m&&Xl(u,m));if(c!=null&&c!==l){if(Yl(e),mt(c))u[c]=null,p(c)&&(h[c]=null);else if(It(c)){const g=e;_(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(Ve(l))cr(l,o,12,[a,u]);else{const g=mt(l),m=It(l);if(g||m){const f=()=>{if(n.f){const E=g?p(l)?h[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)ze(E)&&tl(E,r);else if(ze(E))E.includes(r)||E.push(r);else if(g)u[l]=[r],p(l)&&(h[l]=u[l]);else{const S=[r];_(l,n.k)&&(l.value=S),n.k&&(u[n.k]=S)}}else g?(u[l]=a,p(l)&&(h[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const E=()=>{f(),io.delete(n)};E.id=-1,io.set(n,E),Vt(E,t)}else Yl(n),f()}}}function Yl(n){const e=io.get(n);e&&(e.flags|=8,io.delete(n))}yo().requestIdleCallback;yo().cancelIdleCallback;const Ys=n=>!!n.type.__asyncLoader,pl=n=>n.type.__isKeepAlive;function Gd(n,e){Eh(n,"a",e)}function Vd(n,e){Eh(n,"da",e)}function Eh(n,e,t=Ht){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ro(e,i,t),t){let s=t.parent;for(;s&&s.parent;)pl(s.parent.vnode)&&kd(i,e,t,s),s=s.parent}}function kd(n,e,t,i){const s=Ro(e,n,i,!0);ml(()=>{tl(i[e],s)},t)}function Ro(n,e,t=Ht,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{jn();const o=ur(t),l=gn(e,t,n,a);return o(),Kn(),l});return i?s.unshift(r):s.push(r),r}}const Qn=n=>(e,t=Ht)=>{(!rr||n==="sp")&&Ro(n,(...i)=>e(...i),t)},Wd=Qn("bm"),bh=Qn("m"),Xd=Qn("bu"),Yd=Qn("u"),qd=Qn("bum"),ml=Qn("um"),jd=Qn("sp"),Kd=Qn("rtg"),$d=Qn("rtc");function Zd(n,e=Ht){Ro("ec",n,e)}const Jd=Symbol.for("v-ndc"),Oa=n=>n?Yh(n)?vl(n):Oa(n.parent):null,qs=Ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Oa(n.parent),$root:n=>Oa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>wh(n),$forceUpdate:n=>n.f||(n.f=()=>{fl(n.update)}),$nextTick:n=>n.n||(n.n=Pd.bind(n.proxy)),$watch:n=>Od.bind(n)}),qo=(n,e)=>n!==ot&&!n.__isScriptSetup&&tt(n,e),Qd={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(qo(i,e))return a[e]=1,i[e];if(s!==ot&&tt(s,e))return a[e]=2,s[e];if(tt(r,e))return a[e]=3,r[e];if(t!==ot&&tt(t,e))return a[e]=4,t[e];Ba&&(a[e]=0)}}const c=qs[e];let u,h;if(c)return e==="$attrs"&&Ut(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==ot&&tt(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,tt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return qo(s,e)?(s[e]=t,!0):i!==ot&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==ot&&o[0]!=="$"&&tt(n,o)||qo(e,o)||tt(r,o)||tt(i,o)||tt(qs,o)||tt(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function ql(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ba=!0;function ep(n){const e=wh(n),t=n.proxy,i=n.ctx;Ba=!1,e.beforeCreate&&jl(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:g,deactivated:m,beforeDestroy:f,beforeUnmount:E,destroyed:S,unmounted:b,render:L,renderTracked:P,renderTriggered:R,errorCaptured:Z,serverPrefetch:y,expose:w,inheritAttrs:W,components:j,directives:le,filters:N}=e;if(c&&tp(c,i,null),a)for(const ee in a){const K=a[ee];Ve(K)&&(i[ee]=K.bind(t))}if(s){const ee=s.call(t,t);st(ee)&&(n.data=cl(ee))}if(Ba=!0,r)for(const ee in r){const K=r[ee],ie=Ve(K)?K.bind(t,t):Ve(K.get)?K.get.bind(t,t):wn,se=!Ve(K)&&Ve(K.set)?K.set.bind(t):wn,ue=Hp({get:ie,set:se});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>ue.value,set:he=>ue.value=he})}if(o)for(const ee in o)Th(o[ee],i,t,ee);if(l){const ee=Ve(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(K=>{Id(K,ee[K])})}u&&jl(u,n,"c");function G(ee,K){ze(K)?K.forEach(ie=>ee(ie.bind(t))):K&&ee(K.bind(t))}if(G(Wd,h),G(bh,d),G(Xd,p),G(Yd,_),G(Gd,g),G(Vd,m),G(Zd,Z),G($d,P),G(Kd,R),G(qd,E),G(ml,b),G(jd,y),ze(w))if(w.length){const ee=n.exposed||(n.exposed={});w.forEach(K=>{Object.defineProperty(ee,K,{get:()=>t[K],set:ie=>t[K]=ie,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===wn&&(n.render=L),W!=null&&(n.inheritAttrs=W),j&&(n.components=j),le&&(n.directives=le),y&&yh(n)}function tp(n,e,t=wn){ze(n)&&(n=za(n));for(const i in n){const s=n[i];let r;st(s)?"default"in s?r=Kr(s.from||i,s.default,!0):r=Kr(s.from||i):r=Kr(s),It(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function jl(n,e,t){gn(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Th(n,e,t,i){let s=i.includes(".")?Mh(t,i):()=>t[i];if(mt(n)){const r=e[n];Ve(r)&&Xo(s,r)}else if(Ve(n))Xo(s,n.bind(t));else if(st(n))if(ze(n))n.forEach(r=>Th(r,e,t,i));else{const r=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(r)&&Xo(s,r,n)}}function wh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>so(l,c,a,!0)),so(l,e,a)),st(e)&&r.set(e,l),l}function so(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&so(n,r,t,!0),s&&s.forEach(a=>so(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=np[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const np={data:Kl,props:$l,emits:$l,methods:Hs,computed:Hs,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Hs,directives:Hs,watch:sp,provide:Kl,inject:ip};function Kl(n,e){return e?n?function(){return Ct(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function ip(n,e){return Hs(za(n),za(e))}function za(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ft(n,e){return n?[...new Set([].concat(n,e))]:e}function Hs(n,e){return n?Ct(Object.create(null),n,e):e}function $l(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:Ct(Object.create(null),ql(n),ql(e??{})):e}function sp(n,e){if(!n)return e;if(!e)return n;const t=Ct(Object.create(null),n);for(const i in e)t[i]=Ft(n[i],e[i]);return t}function Ah(){return{app:null,config:{isNativeTag:Wu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rp=0;function op(n,e){return function(i,s=null){Ve(i)||(i=Ct({},i)),s!=null&&!st(s)&&(s=null);const r=Ah(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:rp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Gp,get config(){return r.config},set config(u){},use(u,...h){return a.has(u)||(u&&Ve(u.install)?(a.add(u),u.install(c,...h)):Ve(u)&&(a.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||kn(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,vl(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(gn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=_s;_s=c;try{return u()}finally{_s=h}}};return c}}let _s=null;const ap=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${fn(e)}Modifiers`]||n[`${Oi(e)}Modifiers`];function lp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ot;let s=t;const r=e.startsWith("update:"),a=r&&ap(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>mt(u)?u.trim():u)),a.number&&(s=s.map(Yf)));let o,l=i[o=zo(e)]||i[o=zo(fn(e))];!l&&r&&(l=i[o=zo(Oi(e))]),l&&gn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,gn(c,n,6,s)}}const cp=new WeakMap;function Rh(n,e,t=!1){const i=t?cp:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Ve(n)){const l=c=>{const u=Rh(c,e,!0);u&&(o=!0,Ct(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(st(n)&&i.set(n,null),null):(ze(r)?r.forEach(l=>a[l]=null):Ct(a,r),st(n)&&i.set(n,a),a)}function Co(n,e){return!n||!xo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,Oi(e))||tt(n,e))}function Zl(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:_,inheritAttrs:g}=n,m=no(n);let f,E;try{if(t.shapeFlag&4){const b=s||i,L=b;f=Sn(c.call(L,b,u,h,p,d,_)),E=o}else{const b=e;f=Sn(b.length>1?b(h,{attrs:o,slots:a,emit:l}):b(h,null)),E=e.props?o:up(o)}}catch(b){Pi.length=0,wo(b,n,1),f=kn(Zn)}let S=f;if(E&&g!==!1){const b=Object.keys(E),{shapeFlag:L}=S;b.length&&L&7&&(r&&b.some(Mo)&&(E=hp(E,r)),S=Ms(S,E,!1,!0))}if(t.dirs&&(S=Ms(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition){const b=Ao(S.type)&&Sh(S)||S;dl(b,t.transition)}return f=S,no(m),f}const up=n=>{let e;for(const t in n)(t==="class"||t==="style"||xo(t))&&((e||(e={}))[t]=n[t]);return e},hp=(n,e)=>{const t={};for(const i in n)(!Mo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function fp(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Jl(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(Ch(a,i,d)&&!Co(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Jl(i,a,c):!0:!!a;return!1}function Jl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Ch(e,n,r)&&!Co(t,r))return!0}return!1}function Ch(n,e,t){const i=n[t],s=e[t];return t==="style"&&st(i)&&st(s)?!To(i,s):i!==s}function dp({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const Ph={},Lh=()=>Object.create(Ph),Dh=n=>Object.getPrototypeOf(n)===Ph;function pp(n,e,t,i=!1){const s={},r=Lh();n.propsDefaults=Object.create(null),Uh(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:xd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function mp(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=et(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Co(n.emitsOptions,d))continue;const p=e[d];if(l)if(tt(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=fn(d);s[_]=Ha(l,o,_,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Uh(n,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!tt(e,h)&&((u=Oi(h))===h||!tt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Ha(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!tt(e,h))&&(delete r[h],c=!0)}c&&Hn(n.attrs,"set","")}function Uh(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Vs(l))continue;const c=e[l];let u;s&&tt(s,u=fn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Co(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=et(t),c=o||ot;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Ha(s,l,h,c[h],n,!tt(c,h))}}return a}function Ha(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=tt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ve(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=ur(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===Oi(t))&&(i=!0))}return i}const gp=new WeakMap;function Ih(n,e,t=!1){const i=t?gp:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Ve(n)){const u=h=>{l=!0;const[d,p]=Ih(h,e,!0);Ct(a,d),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return st(n)&&i.set(n,ps),ps;if(ze(r))for(let u=0;u<r.length;u++){const h=fn(r[u]);Ql(h)&&(a[h]=ot)}else if(r)for(const u in r){const h=fn(u);if(Ql(h)){const d=r[u],p=a[h]=ze(d)||Ve(d)?{type:d}:Ct({},d),_=p.type;let g=!1,m=!0;if(ze(_))for(let f=0;f<_.length;++f){const E=_[f],S=Ve(E)&&E.name;if(S==="Boolean"){g=!0;break}else S==="String"&&(m=!1)}else g=Ve(_)&&_.name==="Boolean";p[0]=g,p[1]=m,(g||tt(p,"default"))&&o.push(h)}}const c=[a,o];return st(n)&&i.set(n,c),c}function Ql(n){return n[0]!=="$"&&!Vs(n)}const gl=n=>n==="_"||n==="_ctx"||n==="$stable",_l=n=>ze(n)?n.map(Sn):[Sn(n)],_p=(n,e,t)=>{if(e._n)return e;const i=Ud((...s)=>_l(e(...s)),t);return i._c=!1,i},Nh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(gl(s))continue;const r=n[s];if(Ve(r))e[s]=_p(s,r,i);else if(r!=null){const a=_l(r);e[s]=()=>a}}},Fh=(n,e)=>{const t=_l(e);n.slots.default=()=>t},Oh=(n,e,t)=>{for(const i in e)(t||!gl(i))&&(n[i]=e[i])},vp=(n,e,t)=>{const i=n.slots=Lh();if(n.vnode.shapeFlag&32){const s=e._;s?(Oh(i,e,t),t&&Ku(i,"_",s,!0)):Nh(e,i)}else e&&Fh(n,e)},xp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=ot;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:Oh(s,e,t):(r=!e.$stable,Nh(e,s)),a=e}else e&&(Fh(n,e),a={default:1});if(r)for(const o in s)!gl(o)&&a[o]==null&&delete s[o]},Vt=bp;function Mp(n){return Sp(n)}function Sp(n,e){const t=yo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=wn,insertStaticContent:_}=n,g=(x,U,F,X=null,z=null,Q=null,te=void 0,M=null,v=!!U.dynamicChildren)=>{if(x===U)return;x&&!Ps(x,U)&&(X=we(x),he(x,z,Q,!0),x=null),U.patchFlag===-2&&(v=!1,U.dynamicChildren=null);const{type:C,ref:k,shapeFlag:O}=U;switch(C){case Po:m(x,U,F,X);break;case Zn:f(x,U,F,X);break;case Ko:x==null&&E(U,F,X,te);break;case On:j(x,U,F,X,z,Q,te,M,v);break;default:O&1?L(x,U,F,X,z,Q,te,M,v):O&6?le(x,U,F,X,z,Q,te,M,v):(O&64||O&128)&&C.process(x,U,F,X,z,Q,te,M,v,Ce)}k!=null&&z?Xs(k,x&&x.ref,Q,U||x,!U):k==null&&x&&x.ref!=null&&Xs(x.ref,null,Q,x,!0)},m=(x,U,F,X)=>{if(x==null)i(U.el=o(U.children),F,X);else{const z=U.el=x.el;U.children!==x.children&&c(z,U.children)}},f=(x,U,F,X)=>{x==null?i(U.el=l(U.children||""),F,X):U.el=x.el},E=(x,U,F,X)=>{[x.el,x.anchor]=_(x.children,U,F,X,x.el,x.anchor)},S=({el:x,anchor:U},F,X)=>{let z;for(;x&&x!==U;)z=d(x),i(x,F,X),x=z;i(U,F,X)},b=({el:x,anchor:U})=>{let F;for(;x&&x!==U;)F=d(x),s(x),x=F;s(U)},L=(x,U,F,X,z,Q,te,M,v)=>{if(U.type==="svg"?te="svg":U.type==="math"&&(te="mathml"),x==null)P(U,F,X,z,Q,te,M,v);else{const C=x.el&&x.el._isVueCE?x.el:null;try{C&&C._beginPatch(),y(x,U,z,Q,te,M,v)}finally{C&&C._endPatch()}}},P=(x,U,F,X,z,Q,te,M)=>{let v,C;const{props:k,shapeFlag:O,transition:H,dirs:oe}=x;if(v=x.el=a(x.type,Q,k&&k.is,k),O&8?u(v,x.children):O&16&&Z(x.children,v,null,X,z,jo(x,Q),te,M),oe&&gi(x,null,X,"created"),R(v,x,x.scopeId,te,X),k){for(const fe in k)fe!=="value"&&!Vs(fe)&&r(v,fe,null,k[fe],Q,X);"value"in k&&r(v,"value",null,k.value,Q),(C=k.onVnodeBeforeMount)&&vn(C,X,x)}oe&&gi(x,null,X,"beforeMount");const re=yp(z,H);re&&H.beforeEnter(v),i(v,U,F),((C=k&&k.onVnodeMounted)||re||oe)&&Vt(()=>{try{C&&vn(C,X,x),re&&H.enter(v),oe&&gi(x,null,X,"mounted")}finally{}},z)},R=(x,U,F,X,z)=>{if(F&&p(x,F),X)for(let Q=0;Q<X.length;Q++)p(x,X[Q]);if(z){let Q=z.subTree;if(U===Q||Gh(Q.type)&&(Q.ssContent===U||Q.ssFallback===U)){const te=z.vnode;R(x,te,te.scopeId,te.slotScopeIds,z.parent)}}},Z=(x,U,F,X,z,Q,te,M,v=0)=>{for(let C=v;C<x.length;C++){const k=x[C]=M?Bn(x[C]):Sn(x[C]);g(null,k,U,F,X,z,Q,te,M)}},y=(x,U,F,X,z,Q,te)=>{const M=U.el=x.el;let{patchFlag:v,dynamicChildren:C,dirs:k}=U;v|=x.patchFlag&16;const O=x.props||ot,H=U.props||ot;let oe;if(F&&_i(F,!1),(oe=H.onVnodeBeforeUpdate)&&vn(oe,F,U,x),k&&gi(U,x,F,"beforeUpdate"),F&&_i(F,!0),C&&(!x.dynamicChildren||x.dynamicChildren.length!==C.length)&&(v=0,te=!1,C=null),(O.innerHTML&&H.innerHTML==null||O.textContent&&H.textContent==null)&&u(M,""),C?w(x.dynamicChildren,C,M,F,X,jo(U,z),Q):te||K(x,U,M,null,F,X,jo(U,z),Q,!1),v>0){if(v&16)W(M,O,H,F,z);else if(v&2&&O.class!==H.class&&r(M,"class",null,H.class,z),v&4&&r(M,"style",O.style,H.style,z),v&8){const re=U.dynamicProps;for(let fe=0;fe<re.length;fe++){const _e=re[fe],Ee=O[_e],ne=H[_e];(ne!==Ee||_e==="value")&&r(M,_e,Ee,ne,z,F)}}v&1&&x.children!==U.children&&u(M,U.children)}else!te&&C==null&&W(M,O,H,F,z);((oe=H.onVnodeUpdated)||k)&&Vt(()=>{oe&&vn(oe,F,U,x),k&&gi(U,x,F,"updated")},X)},w=(x,U,F,X,z,Q,te)=>{for(let M=0;M<U.length;M++){const v=x[M],C=U[M],k=v.el&&(v.type===On||!Ps(v,C)||v.shapeFlag&198)?h(v.el):F;g(v,C,k,null,X,z,Q,te,!0)}},W=(x,U,F,X,z)=>{if(U!==F){if(U!==ot)for(const Q in U)!Vs(Q)&&!(Q in F)&&r(x,Q,U[Q],null,z,X);for(const Q in F){if(Vs(Q))continue;const te=F[Q],M=U[Q];te!==M&&Q!=="value"&&r(x,Q,M,te,z,X)}"value"in F&&r(x,"value",U.value,F.value,z)}},j=(x,U,F,X,z,Q,te,M,v)=>{const C=U.el=x?x.el:o(""),k=U.anchor=x?x.anchor:o("");let{patchFlag:O,dynamicChildren:H,slotScopeIds:oe}=U;oe&&(M=M?M.concat(oe):oe),x==null?(i(C,F,X),i(k,F,X),Z(U.children||[],F,k,z,Q,te,M,v)):O>0&&O&64&&H&&x.dynamicChildren&&x.dynamicChildren.length===H.length?(w(x.dynamicChildren,H,F,z,Q,te,M),(U.key!=null||z&&U===z.subTree)&&Bh(x,U,!0)):K(x,U,F,k,z,Q,te,M,v)},le=(x,U,F,X,z,Q,te,M,v)=>{U.slotScopeIds=M,x==null?U.shapeFlag&512?z.ctx.activate(U,F,X,te,v):N(U,F,X,z,Q,te,v):V(x,U,v)},N=(x,U,F,X,z,Q,te)=>{const M=x.component=Up(x,X,z);if(pl(x)&&(M.ctx.renderer=Ce),Np(M,!1,te),M.asyncDep){if(z&&z.registerDep(M,G,te),!x.el){const v=M.subTree=kn(Zn);f(null,v,U,F),x.placeholder=v.el}}else G(M,x,U,F,z,Q,te)},V=(x,U,F)=>{const X=U.component=x.component;if(fp(x,U,F))if(X.asyncDep&&!X.asyncResolved){ee(X,U,F);return}else X.next=U,X.update();else U.el=x.el,X.vnode=U},G=(x,U,F,X,z,Q,te)=>{const M=()=>{if(x.isMounted){let{next:O,bu:H,u:oe,parent:re,vnode:fe}=x;{const Ue=zh(x);if(Ue){O&&(O.el=fe.el,ee(x,O,te)),Ue.asyncDep.then(()=>{Vt(()=>{x.isUnmounted||C()},z)});return}}let _e=O,Ee;_i(x,!1),O?(O.el=fe.el,ee(x,O,te)):O=fe,H&&Ho(H),(Ee=O.props&&O.props.onVnodeBeforeUpdate)&&vn(Ee,re,O,fe),_i(x,!0);const ne=Zl(x),He=x.subTree;x.subTree=ne,g(He,ne,h(He.el),we(He),x,z,Q),O.el=ne.el,_e===null&&dp(x,ne.el),oe&&Vt(oe,z),(Ee=O.props&&O.props.onVnodeUpdated)&&Vt(()=>vn(Ee,re,O,fe),z)}else{let O;const{el:H,props:oe}=U,{bm:re,m:fe,parent:_e,root:Ee,type:ne}=x,He=Ys(U);_i(x,!1),re&&Ho(re),!He&&(O=oe&&oe.onVnodeBeforeMount)&&vn(O,_e,U),_i(x,!0);{Ee.ce&&Ee.ce._hasShadowRoot()&&Ee.ce._injectChildStyle(ne,x.parent?x.parent.type:void 0);const Ue=x.subTree=Zl(x);g(null,Ue,F,X,x,z,Q),U.el=Ue.el}if(fe&&Vt(fe,z),!He&&(O=oe&&oe.onVnodeMounted)){const Ue=U;Vt(()=>vn(O,_e,Ue),z)}(U.shapeFlag&256||_e&&Ys(_e.vnode)&&_e.vnode.shapeFlag&256)&&x.a&&Vt(x.a,z),x.isMounted=!0,U=F=X=null}};x.scope.on();const v=x.effect=new Qu(M);x.scope.off();const C=x.update=v.run.bind(v),k=x.job=v.runIfDirty.bind(v);k.i=x,k.id=x.uid,v.scheduler=()=>fl(k),_i(x,!0),C()},ee=(x,U,F)=>{U.component=x;const X=x.vnode.props;x.vnode=U,x.next=null,mp(x,U.props,X,F),xp(x,U.children,F),jn(),Wl(x),Kn()},K=(x,U,F,X,z,Q,te,M,v=!1)=>{const C=x&&x.children,k=x?x.shapeFlag:0,O=U.children,{patchFlag:H,shapeFlag:oe}=U;if(H>0){if(H&128){se(C,O,F,X,z,Q,te,M,v);return}else if(H&256){ie(C,O,F,X,z,Q,te,M,v);return}}oe&8?(k&16&&Te(C,z,Q),O!==C&&u(F,O)):k&16?oe&16?se(C,O,F,X,z,Q,te,M,v):Te(C,z,Q,!0):(k&8&&u(F,""),oe&16&&Z(O,F,X,z,Q,te,M,v))},ie=(x,U,F,X,z,Q,te,M,v)=>{x=x||ps,U=U||ps;const C=x.length,k=U.length,O=Math.min(C,k);let H;for(H=0;H<O;H++){const oe=U[H]=v?Bn(U[H]):Sn(U[H]);g(x[H],oe,F,null,z,Q,te,M,v)}C>k?Te(x,z,Q,!0,!1,O):Z(U,F,X,z,Q,te,M,v,O)},se=(x,U,F,X,z,Q,te,M,v)=>{let C=0;const k=U.length;let O=x.length-1,H=k-1;for(;C<=O&&C<=H;){const oe=x[C],re=U[C]=v?Bn(U[C]):Sn(U[C]);if(Ps(oe,re))g(oe,re,F,null,z,Q,te,M,v);else break;C++}for(;C<=O&&C<=H;){const oe=x[O],re=U[H]=v?Bn(U[H]):Sn(U[H]);if(Ps(oe,re))g(oe,re,F,null,z,Q,te,M,v);else break;O--,H--}if(C>O){if(C<=H){const oe=H+1,re=oe<k?U[oe].el:X;for(;C<=H;)g(null,U[C]=v?Bn(U[C]):Sn(U[C]),F,re,z,Q,te,M,v),C++}}else if(C>H)for(;C<=O;)he(x[C],z,Q,!0),C++;else{const oe=C,re=C,fe=new Map;for(C=re;C<=H;C++){const ge=U[C]=v?Bn(U[C]):Sn(U[C]);ge.key!=null&&fe.set(ge.key,C)}let _e,Ee=0;const ne=H-re+1;let He=!1,Ue=0;const De=new Array(ne);for(C=0;C<ne;C++)De[C]=0;for(C=oe;C<=O;C++){const ge=x[C];if(Ee>=ne){he(ge,z,Q,!0);continue}let A;if(ge.key!=null)A=fe.get(ge.key);else for(_e=re;_e<=H;_e++)if(De[_e-re]===0&&Ps(ge,U[_e])){A=_e;break}A===void 0?he(ge,z,Q,!0):(De[A-re]=C+1,A>=Ue?Ue=A:He=!0,g(ge,U[A],F,null,z,Q,te,M,v),Ee++)}const Re=He?Ep(De):ps;for(_e=Re.length-1,C=ne-1;C>=0;C--){const ge=re+C,A=U[ge],de=U[ge+1],Ae=ge+1<k?de.el||Hh(de):X;De[C]===0?g(null,A,F,Ae,z,Q,te,M,v):He&&(_e<0||C!==Re[_e]?ue(A,F,Ae,2):_e--)}}},ue=(x,U,F,X,z=null)=>{const{el:Q,type:te,transition:M,children:v,shapeFlag:C}=x;if(C&6){ue(x.component.subTree,U,F,X);return}if(C&128){x.suspense.move(U,F,X);return}if(C&64){te.move(x,U,F,Ce);return}if(te===On){i(Q,U,F);for(let O=0;O<v.length;O++)ue(v[O],U,F,X);i(x.anchor,U,F);return}if(te===Ko){S(x,U,F);return}if(X!==2&&C&1&&M)if(X===0)M.persisted&&!Q[Yo]?i(Q,U,F):(M.beforeEnter(Q),i(Q,U,F),Vt(()=>M.enter(Q),z));else{const{leave:O,delayLeave:H,afterLeave:oe}=M,re=()=>{x.ctx.isUnmounted?s(Q):i(Q,U,F)},fe=()=>{const _e=Q._isLeaving||!!Q[Yo];Q._isLeaving&&Q[Yo](!0),M.persisted&&!_e?re():O(Q,()=>{re(),oe&&oe()})};H?H(Q,re,fe):fe()}else i(Q,U,F)},he=(x,U,F,X=!1,z=!1)=>{const{type:Q,props:te,ref:M,children:v,dynamicChildren:C,shapeFlag:k,patchFlag:O,dirs:H,cacheIndex:oe,memo:re}=x;if(O===-2&&(z=!1),M!=null&&(jn(),Xs(M,null,F,x,!0),Kn()),oe!=null&&(U.renderCache[oe]=void 0),k&256){U.ctx.deactivate(x);return}const fe=k&1&&H,_e=!Ys(x);let Ee;if(_e&&(Ee=te&&te.onVnodeBeforeUnmount)&&vn(Ee,U,x),k&6)Me(x.component,F,X);else{if(k&128){x.suspense.unmount(F,X);return}fe&&gi(x,null,U,"beforeUnmount"),k&64?x.type.remove(x,U,F,Ce,X):C&&!C.hasOnce&&(Q!==On||O>0&&O&64)?Te(C,U,F,!1,!0):(Q===On&&O&384||!z&&k&16)&&Te(v,U,F),X&&J(x)}const ne=re!=null&&oe==null;(_e&&(Ee=te&&te.onVnodeUnmounted)||fe||ne)&&Vt(()=>{Ee&&vn(Ee,U,x),fe&&gi(x,null,U,"unmounted"),ne&&(x.el=null)},F)},J=x=>{const{type:U,el:F,anchor:X,transition:z}=x;if(U===On){ae(F,X);return}if(U===Ko){b(x);return}const Q=()=>{s(F),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(x.shapeFlag&1&&z&&!z.persisted){const{leave:te,delayLeave:M}=z,v=()=>te(F,Q);M?M(x.el,Q,v):v()}else Q()},ae=(x,U)=>{let F;for(;x!==U;)F=d(x),s(x),x=F;s(U)},Me=(x,U,F)=>{const{bum:X,scope:z,job:Q,subTree:te,um:M,m:v,a:C}=x;ec(v),ec(C),X&&Ho(X),z.stop(),Q&&(Q.flags|=8,he(te,x,U,F)),M&&Vt(M,U),Vt(()=>{x.isUnmounted=!0},U)},Te=(x,U,F,X=!1,z=!1,Q=0)=>{for(let te=Q;te<x.length;te++)he(x[te],U,F,X,z)},we=x=>{if(x.shapeFlag&6)return we(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const U=d(x.anchor||x.el),F=U&&U[Bd];return F?d(F):U};let Fe=!1;const Oe=(x,U,F)=>{let X;x==null?U._vnode&&(he(U._vnode,null,null,!0),X=U._vnode.component):g(U._vnode||null,x,U,null,null,null,F),U._vnode=x,Fe||(Fe=!0,Wl(X),gh(),Fe=!1)},Ce={p:g,um:he,m:ue,r:J,mt:N,mc:Z,pc:K,pbc:w,n:we,o:n};return{render:Oe,hydrate:void 0,createApp:op(Oe)}}function jo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function _i({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function yp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Bh(n,e,t=!1){const i=n.children,s=e.children;if(ze(i)&&ze(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Bn(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Bh(a,o)),o.type===Po&&(o.patchFlag===-1&&(o=s[r]=Bn(o)),o.el=a.el),o.type===Zn&&!o.el&&(o.el=a.el)}}function Ep(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function zh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zh(e)}function ec(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Hh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Hh(e.subTree):null}const Gh=n=>n.__isSuspense;function bp(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):Dd(n)}const On=Symbol.for("v-fgt"),Po=Symbol.for("v-txt"),Zn=Symbol.for("v-cmt"),Ko=Symbol.for("v-stc"),Pi=[];let Zt=null;function Ga(n=!1){Pi.push(Zt=n?null:[])}function Vh(){Pi.pop(),Zt=Pi[Pi.length-1]||null}let ir=1;function tc(n,e=!1){ir+=n,n<0&&Zt&&e&&(Zt.hasOnce=!0)}function kh(n){return n.dynamicChildren=ir>0?Zt||ps:null,Vh(),ir>0&&Zt&&Zt.push(n),n}function nc(n,e,t,i,s,r){return kh(Et(n,e,t,i,s,r,!0))}function Tp(n,e,t,i,s){return kh(kn(n,e,t,i,s,!0))}function Wh(n){return n?n.__v_isVNode===!0:!1}function Ps(n,e){return n.type===e.type&&n.key===e.key}const Xh=({key:n})=>n??null,$r=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?mt(n)||It(n)||Ve(n)?{i:Tn,r:n,k:e,f:!!t}:n:null);function Et(n,e=null,t=null,i=0,s=null,r=n===On?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Xh(e),ref:e&&$r(e),scopeId:vh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tn};return o?(ro(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=mt(t)?8:16),ir>0&&!a&&Zt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Zt.push(l),l}const kn=wp;function wp(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Jd)&&(n=Zn),Wh(n)){const o=Ms(n,e,!0);return t&&ro(o,t),ir>0&&!r&&Zt&&(o.shapeFlag&6?Zt[Zt.indexOf(n)]=o:Zt.push(o)),o.patchFlag=-2,o}if(zp(n)&&(n=n.__vccOpts),e){e=Ap(e);let{class:o,style:l}=e;o&&!mt(o)&&(e.class=bo(o)),st(l)&&(hl(l)&&!ze(l)&&(l=Ct({},l)),e.style=Eo(l))}const a=mt(n)?1:Gh(n)?128:Ao(n)?64:st(n)?4:Ve(n)?2:0;return Et(n,e,t,i,s,a,r,!0)}function Ap(n){return n?hl(n)||Dh(n)?Ct({},n):n:null}function Ms(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Pp(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Xh(c),ref:e&&e.ref?t&&r?ze(r)?r.concat($r(e)):[r,$r(e)]:$r(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==On?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ms(n.ssContent),ssFallback:n.ssFallback&&Ms(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&dl(u,l.clone(u)),u}function Rp(n=" ",e=0){return kn(Po,null,n,e)}function Cp(n="",e=!1){return e?(Ga(),Tp(Zn,null,n)):kn(Zn,null,n)}function Sn(n){return n==null||typeof n=="boolean"?kn(Zn):ze(n)?kn(On,null,n.slice()):Wh(n)?Bn(n):kn(Po,null,String(n))}function Bn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ms(n)}function ro(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ro(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Dh(e)?e._ctx=Tn:s===3&&Tn&&(Tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ve(e)){if(i&65){ro(n,{default:e});return}e={default:e,_ctx:Tn},t=32}else e=String(e),i&64?(t=16,e=[Rp(e)]):t=8;n.children=e,n.shapeFlag|=t}function Pp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=bo([e.class,i.class]));else if(s==="style")e.style=Eo([e.style,i.style]);else if(xo(s)){const r=e[s],a=i[s];a&&r!==a&&!(ze(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!Mo(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function vn(n,e,t,i=null){gn(n,e,7,[t,i])}const Lp=Ah();let Dp=0;function Up(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Lp,r={uid:Dp++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ed(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ih(i,s),emitsOptions:Rh(i,s),emit:null,emitted:null,propsDefaults:ot,inheritAttrs:i.inheritAttrs,ctx:ot,data:ot,props:ot,attrs:ot,slots:ot,refs:ot,setupState:ot,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=lp.bind(null,r),n.ce&&n.ce(r),r}let Ht=null;const Ip=()=>Ht||Tn;let oo,sr;{const n=yo(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};oo=e("__VUE_INSTANCE_SETTERS__",t=>Ht=t),sr=e("__VUE_SSR_SETTERS__",t=>rr=t)}const ur=n=>{const e=Ht;return oo(n),n.scope.on(),()=>{n.scope.off(),oo(e)}},ic=()=>{Ht&&Ht.scope.off(),oo(null)};function Yh(n){return n.vnode.shapeFlag&4}let rr=!1;function Np(n,e=!1,t=!1){e&&sr(e);const{props:i,children:s}=n.vnode,r=Yh(n);pp(n,i,r,e),vp(n,s,t||e);const a=r?Fp(n,e):void 0;return e&&sr(!1),a}function Fp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Qd);const{setup:i}=t;if(i){jn();const s=n.setupContext=i.length>1?Bp(n):null,r=ur(n),a=cr(i,n,0,[n.props,s]),o=Xu(a);if(Kn(),r(),(o||n.sp)&&!Ys(n)&&yh(n),o){if(a.then(ic,ic),e)return a.then(l=>{sr(!0);try{sc(n,l,e)}finally{sr(!1)}}).catch(l=>{wo(l,n,0)});n.asyncDep=a}else sc(n,a)}else qh(n)}function sc(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=dh(e)),qh(n)}function qh(n,e,t){const i=n.type;n.render||(n.render=i.render||wn);{const s=ur(n);jn();try{ep(n)}finally{Kn(),s()}}}const Op={get(n,e){return Ut(n,"get",""),n[e]}};function Bp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Op),slots:n.slots,emit:n.emit,expose:e}}function vl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(dh(Md(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qs)return qs[t](n)},has(e,t){return t in e||t in qs}})):n.proxy}function zp(n){return Ve(n)&&"__vccOpts"in n}const Hp=(n,e)=>wd(n,e,rr),Gp="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Va;const rc=typeof window<"u"&&window.trustedTypes;if(rc)try{Va=rc.createPolicy("vue",{createHTML:n=>n})}catch{}const jh=Va?n=>Va.createHTML(n):n=>n,Vp="http://www.w3.org/2000/svg",kp="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,oc=Fn&&Fn.createElement("template"),Wp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Fn.createElementNS(Vp,n):e==="mathml"?Fn.createElementNS(kp,n):t?Fn.createElement(n,{is:t}):Fn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Fn.createTextNode(n),createComment:n=>Fn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Fn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{oc.innerHTML=jh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=oc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Xp=Symbol("_vtc");function Yp(n,e,t){const i=n[Xp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ac=Symbol("_vod"),qp=Symbol("_vsh"),jp=Symbol(""),Kp=/(?:^|;)\s*display\s*:/;function $p(n,e,t){const i=n.style,s=mt(t);let r=!1;if(t&&!s){if(e)if(mt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Gs(i,o,"")}else for(const a in e)t[a]==null&&Gs(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?Jp(n,a,!mt(e)&&e?e[a]:void 0,o)||Gs(i,a,o):Gs(i,a,"")}}else if(s){if(e!==t){const a=i[jp];a&&(t+=";"+a),i.cssText=t,r=Kp.test(t)}}else e&&n.removeAttribute("style");ac in n&&(n[ac]=r?i.display:"",n[qp]&&(i.display="none"))}const xr=/\s*!important$/;function Gs(n,e,t){if(ze(t))t.forEach(i=>Gs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))xr.test(t)?n.setProperty(e,t.replace(xr,""),"important"):n.setProperty(e,t);else{const i=Zp(n,e);xr.test(t)?n.setProperty(Oi(i),t.replace(xr,""),"important"):n[i]=t}}const lc=["Webkit","Moz","ms"],$o={};function Zp(n,e){const t=$o[e];if(t)return t;let i=fn(e);if(i!=="filter"&&i in n)return $o[e]=i;i=ju(i);for(let s=0;s<lc.length;s++){const r=lc[s]+i;if(r in n)return $o[e]=r}return e}function Jp(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&mt(i)&&t===i}const cc="http://www.w3.org/1999/xlink";function uc(n,e,t,i,s,r=Jf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(cc,e.slice(6,e.length)):n.setAttributeNS(cc,e,t):t==null||r&&!$u(t)?n.removeAttribute(e):n.setAttribute(e,r?"":An(t)?String(t):t)}function hc(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?jh(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=$u(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Qp(n,e,t,i){n.addEventListener(e,t,i)}function em(n,e,t,i){n.removeEventListener(e,t,i)}const fc=Symbol("_vei");function tm(n,e,t,i,s=null){const r=n[fc]||(n[fc]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=sm(e);if(i){const c=r[e]=am(i,s);Qp(n,o,c,l)}else a&&(em(n,o,a,l),r[e]=void 0)}}const nm=/(Once|Passive|Capture)$/,im=/^on:?(?:Once|Passive|Capture)$/;function sm(n){let e,t;for(;(t=n.match(nm))&&!im.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Oi(n.slice(2)),e]}let Zo=0;const rm=Promise.resolve(),om=()=>Zo||(rm.then(()=>Zo=0),Zo=Date.now());function am(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(ze(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&gn(c,e,5,o)}}else gn(s,e,5,[i])};return t.value=n,t.attached=om(),t}const dc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,lm=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Yp(n,i,a):e==="style"?$p(n,t,i):xo(e)?Mo(e)||tm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cm(n,e,i,a))?(hc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&uc(n,e,i,a,r,e!=="value")):n._isVueCE&&(um(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!mt(i)))?hc(n,fn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),uc(n,e,i,a))};function cm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&dc(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return dc(e)&&mt(t)?!1:e in n}function um(n,e){const t=n._def.props;if(!t)return!1;const i=fn(e);return Array.isArray(t)?t.some(s=>fn(s)===i):Object.keys(t).some(s=>fn(s)===i)}const hm=Ct({patchProp:lm},Wp);let pc;function fm(){return pc||(pc=Mp(hm))}const dm=(...n)=>{const e=fm().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=mm(i);if(!s)return;const r=e._component;!Ve(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,pm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function pm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function mm(n){return mt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="160",Gi={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gm=0,mc=1,_m=2,Kh=1,$h=2,Nn=3,di=0,Wt=1,$t=2,Wn=0,vs=1,Gn=2,gc=3,_c=4,vm=5,bi=100,xm=101,Mm=102,vc=103,xc=104,Sm=200,ym=201,Em=202,bm=203,ka=204,Wa=205,Tm=206,wm=207,Am=208,Rm=209,Cm=210,Pm=211,Lm=212,Dm=213,Um=214,Im=0,Nm=1,Fm=2,ao=3,Om=4,Bm=5,zm=6,Hm=7,Zh=0,Gm=1,Vm=2,hi=0,km=1,Wm=2,Xm=3,Jh=4,Ym=5,qm=6,Qh=300,Ss=301,ys=302,Xa=303,Ya=304,Lo=306,Li=1e3,hn=1001,qa=1002,Bt=1003,Mc=1004,Jo=1005,kt=1006,jm=1007,or=1008,Xn=1009,Km=1010,$m=1011,Ml=1012,ef=1013,li=1014,ci=1015,Yn=1016,tf=1017,nf=1018,Di=1020,Zm=1021,sn=1023,Jm=1024,Qm=1025,Ui=1026,Es=1027,eg=1028,sf=1029,tg=1030,rf=1031,of=1033,Qo=33776,ea=33777,ta=33778,na=33779,Sc=35840,yc=35841,Ec=35842,bc=35843,af=36196,Tc=37492,wc=37496,Ac=37808,Rc=37809,Cc=37810,Pc=37811,Lc=37812,Dc=37813,Uc=37814,Ic=37815,Nc=37816,Fc=37817,Oc=37818,Bc=37819,zc=37820,Hc=37821,ia=36492,Gc=36494,Vc=36495,ng=36283,kc=36284,Wc=36285,Xc=36286,lf=3e3,Ii=3001,ig=3200,sg=3201,cf=0,rg=1,rn="",lt="srgb",Jn="srgb-linear",Sl="display-p3",Do="display-p3-linear",lo="linear",at="srgb",co="rec709",uo="p3",ki=7680,Yc=519,og=512,ag=513,lg=514,uf=515,cg=516,ug=517,hg=518,fg=519,ja=35044,qc="300 es",Ka=1035,Vn=2e3,ho=2001;class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const js=Math.PI/180,ar=180/Math.PI;function qn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function yl(n,e){return(n%e+e)%e}function dg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function pg(n,e,t){return n!==e?(t-n)/(e-n):0}function Ks(n,e,t){return(1-t)*n+t*e}function mg(n,e,t,i){return Ks(n,e,1-Math.exp(-t*i))}function gg(n,e=1){return e-Math.abs(yl(n,e*2)-e)}function _g(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function vg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function xg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Mg(n,e){return n+Math.random()*(e-n)}function Sg(n){return n*(.5-Math.random())}function yg(n){n!==void 0&&(jc=n);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Eg(n){return n*js}function bg(n){return n*ar}function $a(n){return(n&n-1)===0&&n!==0}function Tg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wg(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const us={DEG2RAD:js,RAD2DEG:ar,generateUUID:qn,clamp:At,euclideanModulo:yl,mapLinear:dg,inverseLerp:pg,lerp:Ks,damp:mg,pingpong:gg,smoothstep:_g,smootherstep:vg,randInt:xg,randFloat:Mg,randFloatSpread:Sg,seededRandom:yg,degToRad:Eg,radToDeg:bg,isPowerOfTwo:$a,ceilPowerOfTwo:Tg,floorPowerOfTwo:fo,setQuaternionFromProperEuler:wg,normalize:nt,denormalize:bn};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,i,s,r,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],g=s[0],m=s[3],f=s[6],E=s[1],S=s[4],b=s[7],L=s[2],P=s[5],R=s[8];return r[0]=a*g+o*E+l*L,r[3]=a*m+o*S+l*P,r[6]=a*f+o*b+l*R,r[1]=c*g+u*E+h*L,r[4]=c*m+u*S+h*P,r[7]=c*f+u*b+h*R,r[2]=d*g+p*E+_*L,r[5]=d*m+p*S+_*P,r[8]=d*f+p*b+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,_=t*h+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*c-u*i)*g,e[2]=(o*i-s*a)*g,e[3]=d*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sa.makeScale(e,t)),this}rotate(e){return this.premultiply(sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new je;function hf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ag(){const n=po("canvas");return n.style.display="block",n}const Kc={};function $s(n){n in Kc||(Kc[n]=!0,console.warn(n))}const $c=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zc=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mr={[Jn]:{transfer:lo,primaries:co,toReference:n=>n,fromReference:n=>n},[lt]:{transfer:at,primaries:co,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Do]:{transfer:lo,primaries:uo,toReference:n=>n.applyMatrix3(Zc),fromReference:n=>n.applyMatrix3($c)},[Sl]:{transfer:at,primaries:uo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Zc),fromReference:n=>n.applyMatrix3($c).convertLinearToSRGB()}},Rg=new Set([Jn,Do]),it={enabled:!0,_workingColorSpace:Jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Rg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Mr[e].toReference,s=Mr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Mr[n].primaries},getTransfer:function(n){return n===rn?lo:Mr[n].transfer}};function xs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ra(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wi;class ff{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=po("canvas")),Wi.width=e.width,Wi.height=e.height;const i=Wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xs(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xs(t[i]/255)*255):t[i]=xs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cg=0;class df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oa(s[a].image)):r.push(oa(s[a]))}else r=oa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ff.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pg=0;class Xt extends Bi{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=hn,s=hn,r=kt,a=or,o=sn,l=Xn,c=Xt.DEFAULT_ANISOTROPY,u=rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=qn(),this.name="",this.source=new df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:($s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ii?lt:rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?Ii:lf}set encoding(e){$s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ii?lt:rn}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Qh;Xt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(p+1)/2,L=(f+1)/2,P=(u+d)/4,R=(h+g)/4,Z=(_+m)/4;return S>b&&S>L?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=P/i,r=R/i):b>L?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=P/s,r=Z/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=R/r,s=Z/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-g)/E,this.z=(d-u)/E,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lg extends Bi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&($s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ii?lt:rn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Xt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new df(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Lg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pf extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dg extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==p||u!==_){let m=1-o;const f=l*d+c*p+u*_+h*g,E=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const L=Math.sqrt(S),P=Math.atan2(L,f*E);m=Math.sin(m*P)/L,o=Math.sin(o*P)/L}const b=o*E;if(l=l*m+d*b,c=c*m+p*b,u=u*m+_*b,h=h*m+g*b,m===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*p-c*d,e[t+1]=l*_+u*d+c*h-o*p,e[t+2]=c*_+u*p+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new I,Jc=new Fi;class hr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(r,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sr.copy(i.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),yr.subVectors(this.max,Ls),Xi.subVectors(e.a,Ls),Yi.subVectors(e.b,Ls),qi.subVectors(e.c,Ls),ei.subVectors(Yi,Xi),ti.subVectors(qi,Yi),vi.subVectors(Xi,qi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-vi.z,vi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,vi.z,0,-vi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-vi.y,vi.x,0];return!la(t,Xi,Yi,qi,yr)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Xi,Yi,qi,yr))?!1:(Er.crossVectors(ei,ti),t=[Er.x,Er.y,Er.z],la(t,Xi,Yi,qi,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,Sr=new hr,Xi=new I,Yi=new I,qi=new I,ei=new I,ti=new I,vi=new I,Ls=new I,yr=new I,Er=new I,xi=new I;function la(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){xi.fromArray(n,r);const o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ug=new hr,Ds=new I,ca=new I;class El{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ug.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ds,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(ca)),this.expandByPoint(Ds.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new I,ua=new I,br=new I,ni=new I,ha=new I,Tr=new I,fa=new I;class bl{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ua.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(ua);const r=e.distanceTo(t)*.5,a=-this.direction.dot(br),o=ni.dot(this.direction),l=-ni.dot(br),c=ni.lengthSq(),u=Math.abs(1-a*a);let h,d,p,_;if(u>0)if(h=a*l-o,d=a*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ua).addScaledVector(br,d),p}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),s=Ln.dot(Ln)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,s,r){ha.subVectors(t,e),Tr.subVectors(i,e),fa.crossVectors(ha,Tr);let a=this.direction.dot(fa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,e);const l=o*this.direction.dot(Tr.crossVectors(ni,Tr));if(l<0)return null;const c=o*this.direction.dot(ha.cross(ni));if(c<0||l+c>a)return null;const u=-o*ni.dot(fa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,i,s,r,a,o,l,c,u,h,d,p,_,g,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,p,_,g,m)}set(e,t,i,s,r,a,o,l,c,u,h,d,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),r=1/ji.setFromMatrixColumn(e,1).length(),a=1/ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,g=c*h;t[0]=d+g*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ig,e,Ng)}lookAt(e,t,i){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ii.crossVectors(i,jt),ii.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ii.crossVectors(i,jt)),ii.normalize(),wr.crossVectors(jt,ii),s[0]=ii.x,s[4]=wr.x,s[8]=jt.x,s[1]=ii.y,s[5]=wr.y,s[9]=jt.y,s[2]=ii.z,s[6]=wr.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],E=i[3],S=i[7],b=i[11],L=i[15],P=s[0],R=s[4],Z=s[8],y=s[12],w=s[1],W=s[5],j=s[9],le=s[13],N=s[2],V=s[6],G=s[10],ee=s[14],K=s[3],ie=s[7],se=s[11],ue=s[15];return r[0]=a*P+o*w+l*N+c*K,r[4]=a*R+o*W+l*V+c*ie,r[8]=a*Z+o*j+l*G+c*se,r[12]=a*y+o*le+l*ee+c*ue,r[1]=u*P+h*w+d*N+p*K,r[5]=u*R+h*W+d*V+p*ie,r[9]=u*Z+h*j+d*G+p*se,r[13]=u*y+h*le+d*ee+p*ue,r[2]=_*P+g*w+m*N+f*K,r[6]=_*R+g*W+m*V+f*ie,r[10]=_*Z+g*j+m*G+f*se,r[14]=_*y+g*le+m*ee+f*ue,r[3]=E*P+S*w+b*N+L*K,r[7]=E*R+S*W+b*V+L*ie,r[11]=E*Z+S*j+b*G+L*se,r[15]=E*y+S*le+b*ee+L*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+r*l*h-s*c*h-r*o*d+i*c*d+s*o*p-i*l*p)+g*(+t*l*p-t*c*d+r*a*d-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+i*a*p+r*o*u-i*c*u)+f*(-s*o*u-t*l*h+t*o*d+s*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],E=h*m*c-g*d*c+g*l*p-o*m*p-h*l*f+o*d*f,S=_*d*c-u*m*c-_*l*p+a*m*p+u*l*f-a*d*f,b=u*g*c-_*h*c+_*o*p-a*g*p-u*o*f+a*h*f,L=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,P=t*E+i*S+s*b+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=E*R,e[1]=(g*d*r-h*m*r-g*s*p+i*m*p+h*s*f-i*d*f)*R,e[2]=(o*m*r-g*l*r+g*s*c-i*m*c-o*s*f+i*l*f)*R,e[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*p-i*l*p)*R,e[4]=S*R,e[5]=(u*m*r-_*d*r+_*s*p-t*m*p-u*s*f+t*d*f)*R,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*f-t*l*f)*R,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*p+t*l*p)*R,e[8]=b*R,e[9]=(_*h*r-u*g*r-_*i*p+t*g*p+u*i*f-t*h*f)*R,e[10]=(a*g*r-_*o*r+_*i*c-t*g*c-a*i*f+t*o*f)*R,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*p-t*o*p)*R,e[12]=L*R,e[13]=(u*g*s-_*h*s+_*i*d-t*g*d-u*i*m+t*h*m)*R,e[14]=(_*o*s-a*g*s-_*i*l+t*g*l+a*i*m-t*o*m)*R,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,_=r*h,g=a*u,m=a*h,f=o*h,E=l*c,S=l*u,b=l*h,L=i.x,P=i.y,R=i.z;return s[0]=(1-(g+f))*L,s[1]=(p+b)*L,s[2]=(_-S)*L,s[3]=0,s[4]=(p-b)*P,s[5]=(1-(d+f))*P,s[6]=(m+E)*P,s[7]=0,s[8]=(_+S)*R,s[9]=(m-E)*R,s[10]=(1-(d+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ji.set(s[0],s[1],s[2]).length();const a=ji.set(s[4],s[5],s[6]).length(),o=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],cn.copy(this);const c=1/r,u=1/a,h=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Vn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let p,_;if(o===Vn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ho)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Vn){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(a-r),d=(t+e)*c,p=(i+s)*u;let _,g;if(o===Vn)_=(a+r)*h,g=-2*h;else if(o===ho)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ji=new I,cn=new vt,Ig=new I(0,0,0),Ng=new I(1,1,1),ii=new I,wr=new I,jt=new I,Qc=new vt,eu=new Fi;class Uo{constructor(e=0,t=0,i=0,s=Uo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eu.setFromEuler(this),this.setFromQuaternion(eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Uo.DEFAULT_ORDER="XYZ";class Tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fg=0;const tu=new I,Ki=new Fi,Dn=new vt,Ar=new I,Us=new I,Og=new I,Bg=new Fi,nu=new I(1,0,0),iu=new I(0,1,0),su=new I(0,0,1),zg={type:"added"},Hg={type:"removed"};class Tt extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new I,t=new Uo,i=new Fi,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new je}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(nu,e)}rotateY(e){return this.rotateOnAxis(iu,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return tu.copy(e).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nu,e)}translateY(e){return this.translateOnAxis(iu,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ar.copy(e):Ar.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Us,Ar,this.up):Dn.lookAt(Ar,Us,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,Og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Bg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new I(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new I,Un=new I,da=new I,In=new I,$i=new I,Zi=new I,ru=new I,pa=new I,ma=new I,ga=new I;let Rr=!1;class tn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){un.subVectors(s,t),Un.subVectors(i,t),da.subVectors(e,t);const a=un.dot(un),o=un.dot(Un),l=un.dot(da),c=Un.dot(Un),u=Un.dot(da),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getUV(e,t,i,s,r,a,o,l){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static isFrontFacing(e,t,i,s){return un.subVectors(i,t),Un.subVectors(e,t),un.cross(Un).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),un.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),tn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;$i.subVectors(s,i),Zi.subVectors(r,i),pa.subVectors(e,i);const l=$i.dot(pa),c=Zi.dot(pa);if(l<=0&&c<=0)return t.copy(i);ma.subVectors(e,s);const u=$i.dot(ma),h=Zi.dot(ma);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector($i,a);ga.subVectors(e,r);const p=$i.dot(ga),_=Zi.dot(ga);if(_>=0&&p<=_)return t.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Zi,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return ru.subVectors(r,s),o=(h-u)/(h-u+(p-_)),t.copy(s).addScaledVector(ru,o);const f=1/(m+g+d);return a=g*f,o=d*f,t.copy(i).addScaledVector($i,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function _a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=yl(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=_a(a,r,e+1/3),this.g=_a(a,r,e),this.b=_a(a,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=lt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){const i=mf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return it.fromWorkingColorSpace(Dt.copy(this),e),Math.round(At(Dt.r*255,0,255))*65536+Math.round(At(Dt.g*255,0,255))*256+Math.round(At(Dt.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=lt){it.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,s=Dt.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Cr);const i=Ks(si.h,Cr.h,t),s=Ks(si.s,Cr.s,t),r=Ks(si.l,Cr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new We;We.NAMES=mf;let Gg=0;class ws extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=vs,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Wa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ka&&(i.blendSrc=this.blendSrc),this.blendDst!==Wa&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wi extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new I,Pr=new me;class mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ja&&(e.usage=this.usage),e}}class gf extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _f extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ct extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Vg=0;const Qt=new vt,va=new Tt,Ji=new I,Kt=new hr,Is=new hr,yt=new I;class Yt extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hf(e)?_f:gf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new El);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Kt.min,Is.min),Kt.expandByPoint(yt),yt.addVectors(Kt.max,Is.max),Kt.expandByPoint(yt)):(Kt.expandByPoint(Is.min),Kt.expandByPoint(Is.max))}Kt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yt.fromBufferAttribute(o,c),l&&(Ji.fromBufferAttribute(e,c),yt.add(Ji)),s=Math.max(s,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<o;w++)c[w]=new I,u[w]=new I;const h=new I,d=new I,p=new I,_=new me,g=new me,m=new me,f=new I,E=new I;function S(w,W,j){h.fromArray(s,w*3),d.fromArray(s,W*3),p.fromArray(s,j*3),_.fromArray(a,w*2),g.fromArray(a,W*2),m.fromArray(a,j*2),d.sub(h),p.sub(h),g.sub(_),m.sub(_);const le=1/(g.x*m.y-m.x*g.y);isFinite(le)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(le),E.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(le),c[w].add(f),c[W].add(f),c[j].add(f),u[w].add(E),u[W].add(E),u[j].add(E))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let w=0,W=b.length;w<W;++w){const j=b[w],le=j.start,N=j.count;for(let V=le,G=le+N;V<G;V+=3)S(i[V+0],i[V+1],i[V+2])}const L=new I,P=new I,R=new I,Z=new I;function y(w){R.fromArray(r,w*3),Z.copy(R);const W=c[w];L.copy(W),L.sub(R.multiplyScalar(R.dot(W))).normalize(),P.crossVectors(Z,W);const le=P.dot(u[w])<0?-1:1;l[w*4]=L.x,l[w*4+1]=L.y,l[w*4+2]=L.z,l[w*4+3]=le}for(let w=0,W=b.length;w<W;++w){const j=b[w],le=j.start,N=j.count;for(let V=le,G=le+N;V<G;V+=3)y(i[V+0]),y(i[V+1]),y(i[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new mn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ou=new vt,Mi=new bl,Lr=new El,au=new I,Qi=new I,es=new I,ts=new I,xa=new I,Dr=new I,Ur=new me,Ir=new me,Nr=new me,lu=new I,cu=new I,uu=new I,Fr=new I,Or=new I;class Je extends Tt{constructor(e=new Yt,t=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(xa.fromBufferAttribute(h,e),a?Dr.addScaledVector(xa,u):Dr.addScaledVector(xa.sub(t),u))}t.add(Dr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!(Lr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Lr,au)===null||Mi.origin.distanceToSquared(au)>(e.far-e.near)**2))&&(ou.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(ou),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,L=S;b<L;b+=3){const P=o.getX(b),R=o.getX(b+1),Z=o.getX(b+2);s=Br(this,f,e,i,c,u,h,P,R,Z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const E=o.getX(m),S=o.getX(m+1),b=o.getX(m+2);s=Br(this,a,e,i,c,u,h,E,S,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=a[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,L=S;b<L;b+=3){const P=b,R=b+1,Z=b+2;s=Br(this,f,e,i,c,u,h,P,R,Z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const E=m,S=m+1,b=m+2;s=Br(this,a,e,i,c,u,h,E,S,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function kg(n,e,t,i,s,r,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===di,o),l===null)return null;Or.copy(o),Or.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Or);return c<t.near||c>t.far?null:{distance:c,point:Or.clone(),object:n}}function Br(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Qi),n.getVertexPosition(l,es),n.getVertexPosition(c,ts);const u=kg(n,e,t,i,Qi,es,ts,Fr);if(u){s&&(Ur.fromBufferAttribute(s,o),Ir.fromBufferAttribute(s,l),Nr.fromBufferAttribute(s,c),u.uv=tn.getInterpolation(Fr,Qi,es,ts,Ur,Ir,Nr,new me)),r&&(Ur.fromBufferAttribute(r,o),Ir.fromBufferAttribute(r,l),Nr.fromBufferAttribute(r,c),u.uv1=tn.getInterpolation(Fr,Qi,es,ts,Ur,Ir,Nr,new me),u.uv2=u.uv1),a&&(lu.fromBufferAttribute(a,o),cu.fromBufferAttribute(a,l),uu.fromBufferAttribute(a,c),u.normal=tn.getInterpolation(Fr,Qi,es,ts,lu,cu,uu,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};tn.getNormal(Qi,es,ts,h.normal),u.face=h}return u}class zi extends Yt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function _(g,m,f,E,S,b,L,P,R,Z,y){const w=b/R,W=L/Z,j=b/2,le=L/2,N=P/2,V=R+1,G=Z+1;let ee=0,K=0;const ie=new I;for(let se=0;se<G;se++){const ue=se*W-le;for(let he=0;he<V;he++){const J=he*w-j;ie[g]=J*E,ie[m]=ue*S,ie[f]=N,c.push(ie.x,ie.y,ie.z),ie[g]=0,ie[m]=0,ie[f]=P>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(he/R),h.push(1-se/Z),ee+=1}}for(let se=0;se<Z;se++)for(let ue=0;ue<R;ue++){const he=d+ue+V*se,J=d+ue+V*(se+1),ae=d+(ue+1)+V*(se+1),Me=d+(ue+1)+V*se;l.push(he,J,Me),l.push(J,ae,Me),K+=6}o.addGroup(p,K,y),p+=K,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=bs(n[t]);for(const s in i)e[s]=i[s]}return e}function Wg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vf(n){return n.getRenderTarget()===null?n.outputColorSpace:it.workingColorSpace}const mo={clone:bs,merge:Ot};var Xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xg,this.fragmentShader=Yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=Wg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xf extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends xf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class qg extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(ns,is,e,t);s.layers=this.layers,this.add(s);const r=new nn(ns,is,e,t);r.layers=this.layers,this.add(r);const a=new nn(ns,is,e,t);a.layers=this.layers,this.add(a);const o=new nn(ns,is,e,t);o.layers=this.layers,this.add(o);const l=new nn(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new nn(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class wl extends Xt{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ss,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jg extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&($s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ii?lt:rn),this.texture=new wl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zi(5,5,5),r=new Rt({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:Wn});r.uniforms.tEquirect.value=t;const a=new Je(s,r),o=t.minFilter;return t.minFilter===or&&(t.minFilter=kt),new qg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const Ma=new I,Kg=new I,$g=new je;class zn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ma.subVectors(i,t).cross(Kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ma),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$g.getNormalMatrix(e),s=this.coplanarPoint(Ma).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new El,zr=new I;class Al{constructor(e=new zn,t=new zn,i=new zn,s=new zn,r=new zn,a=new zn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],f=s[12],E=s[13],S=s[14],b=s[15];if(i[0].setComponents(l-r,d-c,m-p,b-f).normalize(),i[1].setComponents(l+r,d+c,m+p,b+f).normalize(),i[2].setComponents(l+a,d+u,m+_,b+E).normalize(),i[3].setComponents(l-a,d-u,m-_,b-E).normalize(),i[4].setComponents(l-o,d-h,m-g,b-S).normalize(),t===Vn)i[5].setComponents(l+o,d+h,m+g,b+S).normalize();else if(t===ho)i[5].setComponents(o,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(zr.x=s.normal.x>0?e.max.x:e.min.x,zr.y=s.normal.y>0?e.max.y:e.min.y,zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mf(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Zg(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,d=c.usage,p=h.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,u,h){const d=u.array,p=u._updateRange,_=u.updateRanges;if(n.bindBuffer(h,c),p.count===-1&&_.length===0&&n.bufferSubData(h,0,d),_.length!==0){for(let g=0,m=_.length;g<m;g++){const f=_[g];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class ai extends Yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const E=f*d-a;for(let S=0;S<c;S++){const b=S*h-r;_.push(b,-E,0),g.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const S=E+c*f,b=E+c*(f+1),L=E+1+c*(f+1),P=E+1+c*f;p.push(S,b,P),p.push(b,L,P)}this.setIndex(p),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(g,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,i_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o_=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,a_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,l_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,h_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,M_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,S_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,y_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R_="gl_FragColor = linearToOutputTexel( gl_FragColor );",C_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,P_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,U_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,N_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,G_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Y_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Z_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,l0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,d0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,p0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,m0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,g0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,A0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,F0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,G0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ov=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Av=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Jg,alphahash_pars_fragment:Qg,alphamap_fragment:e_,alphamap_pars_fragment:t_,alphatest_fragment:n_,alphatest_pars_fragment:i_,aomap_fragment:s_,aomap_pars_fragment:r_,batching_pars_vertex:o_,batching_vertex:a_,begin_vertex:l_,beginnormal_vertex:c_,bsdfs:u_,iridescence_fragment:h_,bumpmap_pars_fragment:f_,clipping_planes_fragment:d_,clipping_planes_pars_fragment:p_,clipping_planes_pars_vertex:m_,clipping_planes_vertex:g_,color_fragment:__,color_pars_fragment:v_,color_pars_vertex:x_,color_vertex:M_,common:S_,cube_uv_reflection_fragment:y_,defaultnormal_vertex:E_,displacementmap_pars_vertex:b_,displacementmap_vertex:T_,emissivemap_fragment:w_,emissivemap_pars_fragment:A_,colorspace_fragment:R_,colorspace_pars_fragment:C_,envmap_fragment:P_,envmap_common_pars_fragment:L_,envmap_pars_fragment:D_,envmap_pars_vertex:U_,envmap_physical_pars_fragment:X_,envmap_vertex:I_,fog_vertex:N_,fog_pars_vertex:F_,fog_fragment:O_,fog_pars_fragment:B_,gradientmap_pars_fragment:z_,lightmap_fragment:H_,lightmap_pars_fragment:G_,lights_lambert_fragment:V_,lights_lambert_pars_fragment:k_,lights_pars_begin:W_,lights_toon_fragment:Y_,lights_toon_pars_fragment:q_,lights_phong_fragment:j_,lights_phong_pars_fragment:K_,lights_physical_fragment:$_,lights_physical_pars_fragment:Z_,lights_fragment_begin:J_,lights_fragment_maps:Q_,lights_fragment_end:e0,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:n0,logdepthbuf_pars_vertex:i0,logdepthbuf_vertex:s0,map_fragment:r0,map_pars_fragment:o0,map_particle_fragment:a0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:u0,morphcolor_vertex:h0,morphnormal_vertex:f0,morphtarget_pars_vertex:d0,morphtarget_vertex:p0,normal_fragment_begin:m0,normal_fragment_maps:g0,normal_pars_fragment:_0,normal_pars_vertex:v0,normal_vertex:x0,normalmap_pars_fragment:M0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:y0,clearcoat_pars_fragment:E0,iridescence_pars_fragment:b0,opaque_fragment:T0,packing:w0,premultiplied_alpha_fragment:A0,project_vertex:R0,dithering_fragment:C0,dithering_pars_fragment:P0,roughnessmap_fragment:L0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:I0,shadowmap_vertex:N0,shadowmask_pars_fragment:F0,skinbase_vertex:O0,skinning_pars_vertex:B0,skinning_vertex:z0,skinnormal_vertex:H0,specularmap_fragment:G0,specularmap_pars_fragment:V0,tonemapping_fragment:k0,tonemapping_pars_fragment:W0,transmission_fragment:X0,transmission_pars_fragment:Y0,uv_pars_fragment:q0,uv_pars_vertex:j0,uv_vertex:K0,worldpos_vertex:$0,background_vert:Z0,background_frag:J0,backgroundCube_vert:Q0,backgroundCube_frag:ev,cube_vert:tv,cube_frag:nv,depth_vert:iv,depth_frag:sv,distanceRGBA_vert:rv,distanceRGBA_frag:ov,equirect_vert:av,equirect_frag:lv,linedashed_vert:cv,linedashed_frag:uv,meshbasic_vert:hv,meshbasic_frag:fv,meshlambert_vert:dv,meshlambert_frag:pv,meshmatcap_vert:mv,meshmatcap_frag:gv,meshnormal_vert:_v,meshnormal_frag:vv,meshphong_vert:xv,meshphong_frag:Mv,meshphysical_vert:Sv,meshphysical_frag:yv,meshtoon_vert:Ev,meshtoon_frag:bv,points_vert:Tv,points_frag:wv,shadow_vert:Av,shadow_frag:Rv,sprite_vert:Cv,sprite_frag:Pv},ve={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},yn={basic:{uniforms:Ot([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ot([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ot([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ot([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ot([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new We(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ot([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ot([ve.points,ve.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ot([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ot([ve.common,ve.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ot([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ot([ve.sprite,ve.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ot([ve.common,ve.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ot([ve.lights,ve.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};yn.physical={uniforms:Ot([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Hr={r:0,b:0,g:0};function Lv(n,e,t,i,s,r,a){const o=new We(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function _(m,f){let E=!1,S=f.isScene===!0?f.background:null;S&&S.isTexture&&(S=(f.backgroundBlurriness>0?t:e).get(S)),S===null?g(o,l):S&&S.isColor&&(g(S,1),E=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Lo)?(u===void 0&&(u=new Je(new zi(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:bs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=it.getTransfer(S.colorSpace)!==at,(h!==S||d!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Je(new ai(2,2),new Rt({name:"BackgroundMaterial",uniforms:bs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=it.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Hr,vf(n)),i.buffers.color.setClear(Hr.r,Hr.g,Hr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function Dv(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(N,V,G,ee,K){let ie=!1;if(a){const se=g(ee,G,V);c!==se&&(c=se,p(c.object)),ie=f(N,ee,G,K),ie&&E(N,ee,G,K)}else{const se=V.wireframe===!0;(c.geometry!==ee.id||c.program!==G.id||c.wireframe!==se)&&(c.geometry=ee.id,c.program=G.id,c.wireframe=se,ie=!0)}K!==null&&t.update(K,n.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,Z(N,V,G,ee),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(N){return i.isWebGL2?n.bindVertexArray(N):r.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?n.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function g(N,V,G){const ee=G.wireframe===!0;let K=o[N.id];K===void 0&&(K={},o[N.id]=K);let ie=K[V.id];ie===void 0&&(ie={},K[V.id]=ie);let se=ie[ee];return se===void 0&&(se=m(d()),ie[ee]=se),se}function m(N){const V=[],G=[],ee=[];for(let K=0;K<s;K++)V[K]=0,G[K]=0,ee[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:G,attributeDivisors:ee,object:N,attributes:{},index:null}}function f(N,V,G,ee){const K=c.attributes,ie=V.attributes;let se=0;const ue=G.getAttributes();for(const he in ue)if(ue[he].location>=0){const ae=K[he];let Me=ie[he];if(Me===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor)),ae===void 0||ae.attribute!==Me||Me&&ae.data!==Me.data)return!0;se++}return c.attributesNum!==se||c.index!==ee}function E(N,V,G,ee){const K={},ie=V.attributes;let se=0;const ue=G.getAttributes();for(const he in ue)if(ue[he].location>=0){let ae=ie[he];ae===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor));const Me={};Me.attribute=ae,ae&&ae.data&&(Me.data=ae.data),K[he]=Me,se++}c.attributes=K,c.attributesNum=se,c.index=ee}function S(){const N=c.newAttributes;for(let V=0,G=N.length;V<G;V++)N[V]=0}function b(N){L(N,0)}function L(N,V){const G=c.newAttributes,ee=c.enabledAttributes,K=c.attributeDivisors;G[N]=1,ee[N]===0&&(n.enableVertexAttribArray(N),ee[N]=1),K[N]!==V&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,V),K[N]=V)}function P(){const N=c.newAttributes,V=c.enabledAttributes;for(let G=0,ee=V.length;G<ee;G++)V[G]!==N[G]&&(n.disableVertexAttribArray(G),V[G]=0)}function R(N,V,G,ee,K,ie,se){se===!0?n.vertexAttribIPointer(N,V,G,K,ie):n.vertexAttribPointer(N,V,G,ee,K,ie)}function Z(N,V,G,ee){if(i.isWebGL2===!1&&(N.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const K=ee.attributes,ie=G.getAttributes(),se=V.defaultAttributeValues;for(const ue in ie){const he=ie[ue];if(he.location>=0){let J=K[ue];if(J===void 0&&(ue==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),ue==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){const ae=J.normalized,Me=J.itemSize,Te=t.get(J);if(Te===void 0)continue;const we=Te.buffer,Fe=Te.type,Oe=Te.bytesPerElement,Ce=i.isWebGL2===!0&&(Fe===n.INT||Fe===n.UNSIGNED_INT||J.gpuType===ef);if(J.isInterleavedBufferAttribute){const Ke=J.data,x=Ke.stride,U=J.offset;if(Ke.isInstancedInterleavedBuffer){for(let F=0;F<he.locationSize;F++)L(he.location+F,Ke.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let F=0;F<he.locationSize;F++)b(he.location+F);n.bindBuffer(n.ARRAY_BUFFER,we);for(let F=0;F<he.locationSize;F++)R(he.location+F,Me/he.locationSize,Fe,ae,x*Oe,(U+Me/he.locationSize*F)*Oe,Ce)}else{if(J.isInstancedBufferAttribute){for(let Ke=0;Ke<he.locationSize;Ke++)L(he.location+Ke,J.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ke=0;Ke<he.locationSize;Ke++)b(he.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,we);for(let Ke=0;Ke<he.locationSize;Ke++)R(he.location+Ke,Me/he.locationSize,Fe,ae,Me*Oe,Me/he.locationSize*Ke*Oe,Ce)}}else if(se!==void 0){const ae=se[ue];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(he.location,ae);break;case 3:n.vertexAttrib3fv(he.location,ae);break;case 4:n.vertexAttrib4fv(he.location,ae);break;default:n.vertexAttrib1fv(he.location,ae)}}}}P()}function y(){j();for(const N in o){const V=o[N];for(const G in V){const ee=V[G];for(const K in ee)_(ee[K].object),delete ee[K];delete V[G]}delete o[N]}}function w(N){if(o[N.id]===void 0)return;const V=o[N.id];for(const G in V){const ee=V[G];for(const K in ee)_(ee[K].object),delete ee[K];delete V[G]}delete o[N.id]}function W(N){for(const V in o){const G=o[V];if(G[N.id]===void 0)continue;const ee=G[N.id];for(const K in ee)_(ee[K].object),delete ee[K];delete G[N.id]}}function j(){le(),u=!0,c!==l&&(c=l,p(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:le,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:W,initAttributes:S,enableAttribute:b,disableUnusedAttributes:P}}function Uv(n,e,t,i){const s=i.isWebGL2;let r;function a(u){r=u}function o(u,h){n.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,d){if(d===0)return;let p,_;if(s)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,u,h,d),t.update(h,r,d)}function c(u,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(u[_],h[_]);else{p.multiDrawArraysWEBGL(r,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Iv(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,b=a||e.has("OES_texture_float"),L=S&&b,P=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:L,maxSamples:P}}function Nv(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new zn,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,S=E*4;let b=f.clippingState||null;l.value=b,b=u(_,d,S,p);for(let L=0;L!==S;++L)b[L]=t[L];f.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,b=p;S!==g;++S,b+=4)a.copy(h[S]).applyMatrix4(E,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Fv(n){let e=new WeakMap;function t(a,o){return o===Xa?a.mapping=Ss:o===Ya&&(a.mapping=ys),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xa||o===Ya)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jg(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Rl extends xf{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hs=4,hu=[.125,.215,.35,.446,.526,.582],Ti=20,Sa=new Rl,fu=new We;let ya=null,Ea=0,ba=0;const Ei=(1+Math.sqrt(5))/2,ss=1/Ei,du=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ei,ss),new I(0,Ei,-ss),new I(ss,0,Ei),new I(-ss,0,Ei),new I(Ei,ss,0),new I(-Ei,ss,0)];class Za{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ya=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,Ea,ba),e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Yn,format:sn,colorSpace:Jn,depthBuffer:!1},s=pu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ov(r)),this._blurMaterial=Bv(r,e,t)}return s}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,i,s){const o=new nn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(fu),u.toneMapping=hi,u.autoClear=!1;const p=new wi({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),_=new Je(new zi,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(fu),g=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;Gr(s,E*S,f>2?S:0,S,S),u.setRenderTarget(s),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ss||e.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Gr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=du[(s-1)%du.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Je(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ti-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const f=[];let E=0;for(let R=0;R<Ti;++R){const Z=R/g,y=Math.exp(-Z*Z/2);f.push(y),R===0?E+=y:R<m&&(E+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;const b=this._sizeLods[s],L=3*b*(s>S-hs?s-S+hs:0),P=4*(this._cubeSize-b);Gr(t,L,P,3*b,2*b),l.setRenderTarget(t),l.render(h,Sa)}}function Ov(n){const e=[],t=[],i=[];let s=n;const r=n-hs+1+hu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-hs?l=hu[a-n+hs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,f=1,E=new Float32Array(g*_*p),S=new Float32Array(m*_*p),b=new Float32Array(f*_*p);for(let P=0;P<p;P++){const R=P%3*2/3-1,Z=P>2?0:-1,y=[R,Z,0,R+2/3,Z,0,R+2/3,Z+1,0,R,Z,0,R+2/3,Z+1,0,R,Z+1,0];E.set(y,g*_*P),S.set(d,m*_*P);const w=[P,P,P,P,P,P];b.set(w,f*_*P)}const L=new Yt;L.setAttribute("position",new mn(E,g)),L.setAttribute("uv",new mn(S,m)),L.setAttribute("faceIndex",new mn(b,f)),e.push(L),s>hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function pu(n,e,t){const i=new on(n,e,t);return i.texture.mapping=Lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Bv(n,e,t){const i=new Float32Array(Ti),s=new I(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function mu(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function gu(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Xa||l===Ya,u=l===Ss||l===ys;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Za(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Za(n));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Hv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Gv(n,e,t,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const E=p.array;g=p.version;for(let S=0,b=E.length;S<b;S+=3){const L=E[S+0],P=E[S+1],R=E[S+2];d.push(L,P,P,R,R,L)}}else if(_!==void 0){const E=_.array;g=_.version;for(let S=0,b=E.length/3-1;S<b;S+=3){const L=S+0,P=S+1,R=S+2;d.push(L,P,P,R,R,L)}}else return;const m=new(hf(d)?_f:gf)(d,1);m.version=g;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Vv(n,e,t,i){const s=i.isWebGL2;let r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,_){n.drawElements(r,_,o,p*l),t.update(_,r,1)}function h(p,_,g){if(g===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,_,o,p*l,g),t.update(_,r,g)}function d(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,_[f]);else{m.multiDrawElementsWEBGL(r,_,0,o,p,0,g);let f=0;for(let E=0;E<g;E++)f+=_[E];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function kv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Wv(n,e){return n[0]-e[0]}function Xv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Yv(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,a=new bt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let V=function(){le.dispose(),r.delete(u),u.removeEventListener("dispose",V)};var p=V;m!==void 0&&m.texture.dispose();const S=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],Z=u.morphAttributes.color||[];let y=0;S===!0&&(y=1),b===!0&&(y=2),L===!0&&(y=3);let w=u.attributes.position.count*y,W=1;w>e.maxTextureSize&&(W=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const j=new Float32Array(w*W*4*g),le=new pf(j,w,W,g);le.type=ci,le.needsUpdate=!0;const N=y*4;for(let G=0;G<g;G++){const ee=P[G],K=R[G],ie=Z[G],se=w*W*4*G;for(let ue=0;ue<ee.count;ue++){const he=ue*N;S===!0&&(a.fromBufferAttribute(ee,ue),j[se+he+0]=a.x,j[se+he+1]=a.y,j[se+he+2]=a.z,j[se+he+3]=0),b===!0&&(a.fromBufferAttribute(K,ue),j[se+he+4]=a.x,j[se+he+5]=a.y,j[se+he+6]=a.z,j[se+he+7]=0),L===!0&&(a.fromBufferAttribute(ie,ue),j[se+he+8]=a.x,j[se+he+9]=a.y,j[se+he+10]=a.z,j[se+he+11]=ie.itemSize===4?a.w:1)}}m={count:g,texture:le,size:new me(w,W)},r.set(u,m),u.addEventListener("dispose",V)}let f=0;for(let S=0;S<d.length;S++)f+=d[S];const E=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let b=0;b<_;b++)g[b]=[b,0];i[u.id]=g}for(let b=0;b<_;b++){const L=g[b];L[0]=b,L[1]=d[b]}g.sort(Xv);for(let b=0;b<8;b++)b<_&&g[b][1]?(o[b][0]=g[b][0],o[b][1]=g[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Wv);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const L=o[b],P=L[0],R=L[1];P!==Number.MAX_SAFE_INTEGER&&R?(m&&u.getAttribute("morphTarget"+b)!==m[P]&&u.setAttribute("morphTarget"+b,m[P]),f&&u.getAttribute("morphNormal"+b)!==f[P]&&u.setAttribute("morphNormal"+b,f[P]),s[b]=R,E+=R):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),f&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),s[b]=0)}const S=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",S),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function qv(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Sf extends Xt{constructor(e,t,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:Ui,u!==Ui&&u!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ui&&(i=li),i===void 0&&u===Es&&(i=Di),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yf=new Xt,Ef=new Sf(1,1);Ef.compareFunction=uf;const bf=new pf,Tf=new Dg,wf=new wl,_u=[],vu=[],xu=new Float32Array(16),Mu=new Float32Array(9),Su=new Float32Array(4);function As(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=_u[s];if(r===void 0&&(r=new Float32Array(s),_u[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Io(n,e){let t=vu[e];t===void 0&&(t=new Int32Array(e),vu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Jv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Su.set(i),n.uniformMatrix2fv(this.addr,!1,Su),Mt(t,i)}}function Qv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;Mu.set(i),n.uniformMatrix3fv(this.addr,!1,Mu),Mt(t,i)}}function ex(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,i))return;xu.set(i),n.uniformMatrix4fv(this.addr,!1,xu),Mt(t,i)}}function tx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function rx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function cx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Ef:yf;t.setTexture2D(e||r,s)}function ux(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Tf,s)}function hx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||wf,s)}function fx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||bf,s)}function dx(n){switch(n){case 5126:return jv;case 35664:return Kv;case 35665:return $v;case 35666:return Zv;case 35674:return Jv;case 35675:return Qv;case 35676:return ex;case 5124:case 35670:return tx;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return sx;case 5125:return rx;case 36294:return ox;case 36295:return ax;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return fx}}function px(n,e){n.uniform1fv(this.addr,e)}function mx(n,e){const t=As(e,this.size,2);n.uniform2fv(this.addr,t)}function gx(n,e){const t=As(e,this.size,3);n.uniform3fv(this.addr,t)}function _x(n,e){const t=As(e,this.size,4);n.uniform4fv(this.addr,t)}function vx(n,e){const t=As(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xx(n,e){const t=As(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Mx(n,e){const t=As(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sx(n,e){n.uniform1iv(this.addr,e)}function yx(n,e){n.uniform2iv(this.addr,e)}function Ex(n,e){n.uniform3iv(this.addr,e)}function bx(n,e){n.uniform4iv(this.addr,e)}function Tx(n,e){n.uniform1uiv(this.addr,e)}function wx(n,e){n.uniform2uiv(this.addr,e)}function Ax(n,e){n.uniform3uiv(this.addr,e)}function Rx(n,e){n.uniform4uiv(this.addr,e)}function Cx(n,e,t){const i=this.cache,s=e.length,r=Io(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||yf,r[a])}function Px(n,e,t){const i=this.cache,s=e.length,r=Io(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Tf,r[a])}function Lx(n,e,t){const i=this.cache,s=e.length,r=Io(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||wf,r[a])}function Dx(n,e,t){const i=this.cache,s=e.length,r=Io(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),Mt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bf,r[a])}function Ux(n){switch(n){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return _x;case 35674:return vx;case 35675:return xx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return yx;case 35668:case 35672:return Ex;case 35669:case 35673:return bx;case 5125:return Tx;case 36294:return wx;case 36295:return Ax;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Dx}}class Ix{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dx(t.type)}}class Nx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ux(t.type)}}class Fx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function yu(n,e){n.seq.push(e),n.map[e.id]=e}function Ox(n,e,t){const i=n.name,s=i.length;for(Ta.lastIndex=0;;){const r=Ta.exec(i),a=Ta.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yu(t,c===void 0?new Ix(o,n,e):new Nx(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Fx(o),yu(t,h)),t=h}}}class Zr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ox(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Eu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Bx=37297;let zx=0;function Hx(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Gx(n){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(n);let i;switch(e===t?i="":e===uo&&t===co?i="LinearDisplayP3ToLinearSRGB":e===co&&t===uo&&(i="LinearSRGBToLinearDisplayP3"),n){case Jn:case Do:return[i,"LinearTransferOETF"];case lt:case Sl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function bu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Hx(n.getShaderSource(e),a)}else return s}function Vx(n,e){const t=Gx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kx(n,e){let t;switch(e){case km:t="Linear";break;case Wm:t="Reinhard";break;case Xm:t="OptimizedCineon";break;case Jh:t="ACESFilmic";break;case qm:t="AgX";break;case Ym:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fs).join(`
`)}function Xx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(fs).join(`
`)}function Yx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qx(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function fs(n){return n!==""}function Tu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(n){return n.replace(jx,$x)}const Kx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $x(n,e){let t=Xe[e];if(t===void 0){const i=Kx.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ja(t)}const Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(n){return n.replace(Zx,Jx)}function Jx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ru(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function eM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ss:case ys:e="ENVMAP_TYPE_CUBE";break;case Lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function nM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zh:e="ENVMAP_BLENDING_MULTIPLY";break;case Gm:e="ENVMAP_BLENDING_MIX";break;case Vm:e="ENVMAP_BLENDING_ADD";break}return e}function iM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function sM(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Qx(t),c=eM(t),u=tM(t),h=nM(t),d=iM(t),p=t.isWebGL2?"":Wx(t),_=Xx(t),g=Yx(r),m=s.createProgram();let f,E,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fs).join(`
`),f.length>0&&(f+=`
`),E=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fs).join(`
`),E.length>0&&(E+=`
`)):(f=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),E=[p,Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==hi?kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Vx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fs).join(`
`)),a=Ja(a),a=Tu(a,t),a=wu(a,t),o=Ja(o),o=Tu(o,t),o=wu(o,t),a=Au(a),o=Au(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const b=S+f+a,L=S+E+o,P=Eu(s,s.VERTEX_SHADER,b),R=Eu(s,s.FRAGMENT_SHADER,L);s.attachShader(m,P),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function Z(j){if(n.debug.checkShaderErrors){const le=s.getProgramInfoLog(m).trim(),N=s.getShaderInfoLog(P).trim(),V=s.getShaderInfoLog(R).trim();let G=!0,ee=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,P,R);else{const K=bu(s,P,"vertex"),ie=bu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+K+`
`+ie)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(N===""||V==="")&&(ee=!1);ee&&(j.diagnostics={runnable:G,programLog:le,vertexShader:{log:N,prefix:f},fragmentShader:{log:V,prefix:E}})}s.deleteShader(P),s.deleteShader(R),y=new Zr(s,m),w=qx(s,m)}let y;this.getUniforms=function(){return y===void 0&&Z(this),y};let w;this.getAttributes=function(){return w===void 0&&Z(this),w};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=s.getProgramParameter(m,Bx)),W},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=P,this.fragmentShader=R,this}let rM=0;class oM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new aM(e),t.set(e,i)),i}}class aM{constructor(e){this.id=rM++,this.code=e,this.usedTimes=0}}function lM(n,e,t,i,s,r,a){const o=new Tl,l=new oM,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,w,W,j,le){const N=j.fog,V=le.geometry,G=y.isMeshStandardMaterial?j.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),K=ee&&ee.mapping===Lo?ee.image.height:null,ie=_[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ue=se!==void 0?se.length:0;let he=0;V.morphAttributes.position!==void 0&&(he=1),V.morphAttributes.normal!==void 0&&(he=2),V.morphAttributes.color!==void 0&&(he=3);let J,ae,Me,Te;if(ie){const dt=yn[ie];J=dt.vertexShader,ae=dt.fragmentShader}else J=y.vertexShader,ae=y.fragmentShader,l.update(y),Me=l.getVertexShaderID(y),Te=l.getFragmentShaderID(y);const we=n.getRenderTarget(),Fe=le.isInstancedMesh===!0,Oe=le.isBatchedMesh===!0,Ce=!!y.map,Ke=!!y.matcap,x=!!ee,U=!!y.aoMap,F=!!y.lightMap,X=!!y.bumpMap,z=!!y.normalMap,Q=!!y.displacementMap,te=!!y.emissiveMap,M=!!y.metalnessMap,v=!!y.roughnessMap,C=y.anisotropy>0,k=y.clearcoat>0,O=y.iridescence>0,H=y.sheen>0,oe=y.transmission>0,re=C&&!!y.anisotropyMap,fe=k&&!!y.clearcoatMap,_e=k&&!!y.clearcoatNormalMap,Ee=k&&!!y.clearcoatRoughnessMap,ne=O&&!!y.iridescenceMap,He=O&&!!y.iridescenceThicknessMap,Ue=H&&!!y.sheenColorMap,De=H&&!!y.sheenRoughnessMap,Re=!!y.specularMap,ge=!!y.specularColorMap,A=!!y.specularIntensityMap,de=oe&&!!y.transmissionMap,Ae=oe&&!!y.thicknessMap,ye=!!y.gradientMap,ce=!!y.alphaMap,D=y.alphaTest>0,pe=!!y.alphaHash,xe=!!y.extensions,Ie=!!V.attributes.uv1,Le=!!V.attributes.uv2,$e=!!V.attributes.uv3;let Ze=hi;return y.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Ze=n.toneMapping),{isWebGL2:u,shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:J,fragmentShader:ae,defines:y.defines,customVertexShaderID:Me,customFragmentShaderID:Te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Oe,instancing:Fe,instancingColor:Fe&&le.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:we===null?n.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Jn,map:Ce,matcap:Ke,envMap:x,envMapMode:x&&ee.mapping,envMapCubeUVHeight:K,aoMap:U,lightMap:F,bumpMap:X,normalMap:z,displacementMap:d&&Q,emissiveMap:te,normalMapObjectSpace:z&&y.normalMapType===rg,normalMapTangentSpace:z&&y.normalMapType===cf,metalnessMap:M,roughnessMap:v,anisotropy:C,anisotropyMap:re,clearcoat:k,clearcoatMap:fe,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ee,iridescence:O,iridescenceMap:ne,iridescenceThicknessMap:He,sheen:H,sheenColorMap:Ue,sheenRoughnessMap:De,specularMap:Re,specularColorMap:ge,specularIntensityMap:A,transmission:oe,transmissionMap:de,thicknessMap:Ae,gradientMap:ye,opaque:y.transparent===!1&&y.blending===vs,alphaMap:ce,alphaTest:D,alphaHash:pe,combine:y.combine,mapUv:Ce&&g(y.map.channel),aoMapUv:U&&g(y.aoMap.channel),lightMapUv:F&&g(y.lightMap.channel),bumpMapUv:X&&g(y.bumpMap.channel),normalMapUv:z&&g(y.normalMap.channel),displacementMapUv:Q&&g(y.displacementMap.channel),emissiveMapUv:te&&g(y.emissiveMap.channel),metalnessMapUv:M&&g(y.metalnessMap.channel),roughnessMapUv:v&&g(y.roughnessMap.channel),anisotropyMapUv:re&&g(y.anisotropyMap.channel),clearcoatMapUv:fe&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:He&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(y.sheenRoughnessMap.channel),specularMapUv:Re&&g(y.specularMap.channel),specularColorMapUv:ge&&g(y.specularColorMap.channel),specularIntensityMapUv:A&&g(y.specularIntensityMap.channel),transmissionMapUv:de&&g(y.transmissionMap.channel),thicknessMapUv:Ae&&g(y.thicknessMap.channel),alphaMapUv:ce&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(z||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Le,vertexUv3s:$e,pointsUvs:le.isPoints===!0&&!!V.attributes.uv&&(Ce||ce),fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:le.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:he,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$t,flipSided:y.side===Wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:xe&&y.extensions.derivatives===!0,extensionFragDepth:xe&&y.extensions.fragDepth===!0,extensionDrawBuffers:xe&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const W in y.defines)w.push(W),w.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(E(w,y),S(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function E(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function b(y){const w=_[y.type];let W;if(w){const j=yn[w];W=mo.clone(j.uniforms)}else W=y.uniforms;return W}function L(y,w){let W;for(let j=0,le=c.length;j<le;j++){const N=c[j];if(N.cacheKey===w){W=N,++W.usedTimes;break}}return W===void 0&&(W=new sM(n,w,y,r),c.push(W)),W}function P(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function Z(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:L,releaseProgram:P,releaseShaderCache:R,programs:c,dispose:Z}}function cM(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function uM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,d,p,_,g,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function o(h,d,p,_,g,m){const f=a(h,d,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,_,g,m){const f=a(h,d,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||uM),i.length>1&&i.sort(d||Cu),s.length>1&&s.sort(d||Cu)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function hM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Pu,n.set(i,[a])):s>=r.length?(a=new Pu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function fM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new We};break;case"SpotLight":t={position:new I,direction:new I,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function dM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pM=0;function mM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gM(n,e){const t=new fM,i=dM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new I);const r=new I,a=new vt,o=new vt;function l(u,h){let d=0,p=0,_=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let g=0,m=0,f=0,E=0,S=0,b=0,L=0,P=0,R=0,Z=0,y=0;u.sort(mM);const w=h===!0?Math.PI:1;for(let j=0,le=u.length;j<le;j++){const N=u[j],V=N.color,G=N.intensity,ee=N.distance,K=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=V.r*G*w,p+=V.g*G*w,_+=V.b*G*w;else if(N.isLightProbe){for(let ie=0;ie<9;ie++)s.probe[ie].addScaledVector(N.sh.coefficients[ie],G);y++}else if(N.isDirectionalLight){const ie=t.get(N);if(ie.color.copy(N.color).multiplyScalar(N.intensity*w),N.castShadow){const se=N.shadow,ue=i.get(N);ue.shadowBias=se.bias,ue.shadowNormalBias=se.normalBias,ue.shadowRadius=se.radius,ue.shadowMapSize=se.mapSize,s.directionalShadow[g]=ue,s.directionalShadowMap[g]=K,s.directionalShadowMatrix[g]=N.shadow.matrix,b++}s.directional[g]=ie,g++}else if(N.isSpotLight){const ie=t.get(N);ie.position.setFromMatrixPosition(N.matrixWorld),ie.color.copy(V).multiplyScalar(G*w),ie.distance=ee,ie.coneCos=Math.cos(N.angle),ie.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ie.decay=N.decay,s.spot[f]=ie;const se=N.shadow;if(N.map&&(s.spotLightMap[R]=N.map,R++,se.updateMatrices(N),N.castShadow&&Z++),s.spotLightMatrix[f]=se.matrix,N.castShadow){const ue=i.get(N);ue.shadowBias=se.bias,ue.shadowNormalBias=se.normalBias,ue.shadowRadius=se.radius,ue.shadowMapSize=se.mapSize,s.spotShadow[f]=ue,s.spotShadowMap[f]=K,P++}f++}else if(N.isRectAreaLight){const ie=t.get(N);ie.color.copy(V).multiplyScalar(G),ie.halfWidth.set(N.width*.5,0,0),ie.halfHeight.set(0,N.height*.5,0),s.rectArea[E]=ie,E++}else if(N.isPointLight){const ie=t.get(N);if(ie.color.copy(N.color).multiplyScalar(N.intensity*w),ie.distance=N.distance,ie.decay=N.decay,N.castShadow){const se=N.shadow,ue=i.get(N);ue.shadowBias=se.bias,ue.shadowNormalBias=se.normalBias,ue.shadowRadius=se.radius,ue.shadowMapSize=se.mapSize,ue.shadowCameraNear=se.camera.near,ue.shadowCameraFar=se.camera.far,s.pointShadow[m]=ue,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=N.shadow.matrix,L++}s.point[m]=ie,m++}else if(N.isHemisphereLight){const ie=t.get(N);ie.skyColor.copy(N.color).multiplyScalar(G*w),ie.groundColor.copy(N.groundColor).multiplyScalar(G*w),s.hemi[S]=ie,S++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=_;const W=s.hash;(W.directionalLength!==g||W.pointLength!==m||W.spotLength!==f||W.rectAreaLength!==E||W.hemiLength!==S||W.numDirectionalShadows!==b||W.numPointShadows!==L||W.numSpotShadows!==P||W.numSpotMaps!==R||W.numLightProbes!==y)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=E,s.point.length=m,s.hemi.length=S,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+R-Z,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=Z,s.numLightProbes=y,W.directionalLength=g,W.pointLength=m,W.spotLength=f,W.rectAreaLength=E,W.hemiLength=S,W.numDirectionalShadows=b,W.numPointShadows=L,W.numSpotShadows=P,W.numSpotMaps=R,W.numLightProbes=y,s.version=pM++)}function c(u,h){let d=0,p=0,_=0,g=0,m=0;const f=h.matrixWorldInverse;for(let E=0,S=u.length;E<S;E++){const b=u[E];if(b.isDirectionalLight){const L=s.directional[d];L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),d++}else if(b.isSpotLight){const L=s.spot[_];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(f),L.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),_++}else if(b.isRectAreaLight){const L=s.rectArea[g];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(f),o.identity(),a.copy(b.matrixWorld),a.premultiply(f),o.extractRotation(a),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const L=s.point[p];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){const L=s.hemi[m];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function Lu(n,e){const t=new gM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(h){i.push(h)}function o(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function _M(n,e){let t=new WeakMap;function i(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Lu(n,e),t.set(r,[l])):a>=o.length?(l=new Lu(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class vM extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xM extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const MM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yM(n,e,t){let i=new Al;const s=new me,r=new me,a=new bt,o=new vM({depthPacking:sg}),l=new xM,c={},u=t.maxTextureSize,h={[di]:Wt,[Wt]:di,[$t]:$t},d=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:MM,fragmentShader:SM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Yt;_.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Je(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let f=this.type;this.render=function(P,R,Z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const y=n.getRenderTarget(),w=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Wn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const le=f!==Nn&&this.type===Nn,N=f===Nn&&this.type!==Nn;for(let V=0,G=P.length;V<G;V++){const ee=P[V],K=ee.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const ie=K.getFrameExtents();if(s.multiply(ie),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,K.mapSize.y=r.y)),K.map===null||le===!0||N===!0){const ue=this.type!==Nn?{minFilter:Bt,magFilter:Bt}:{};K.map!==null&&K.map.dispose(),K.map=new on(s.x,s.y,ue),K.map.texture.name=ee.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const se=K.getViewportCount();for(let ue=0;ue<se;ue++){const he=K.getViewport(ue);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),j.viewport(a),K.updateMatrices(ee,ue),i=K.getFrustum(),b(R,Z,K.camera,ee,this.type)}K.isPointLightShadow!==!0&&this.type===Nn&&E(K,Z),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,w,W)};function E(P,R){const Z=e.update(g);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new on(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,Z,d,g,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,Z,p,g,null)}function S(P,R,Z,y){let w=null;const W=Z.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(W!==void 0)w=W;else if(w=Z.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const j=w.uuid,le=R.uuid;let N=c[j];N===void 0&&(N={},c[j]=N);let V=N[le];V===void 0&&(V=w.clone(),N[le]=V,R.addEventListener("dispose",L)),w=V}if(w.visible=R.visible,w.wireframe=R.wireframe,y===Nn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:h[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,Z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const j=n.properties.get(w);j.light=Z}return w}function b(P,R,Z,y,w){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===Nn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld);const le=e.update(P),N=P.material;if(Array.isArray(N)){const V=le.groups;for(let G=0,ee=V.length;G<ee;G++){const K=V[G],ie=N[K.materialIndex];if(ie&&ie.visible){const se=S(P,ie,y,w);P.onBeforeShadow(n,P,R,Z,le,se,K),n.renderBufferDirect(Z,null,le,se,P,K),P.onAfterShadow(n,P,R,Z,le,se,K)}}}else if(N.visible){const V=S(P,N,y,w);P.onBeforeShadow(n,P,R,Z,le,V,null),n.renderBufferDirect(Z,null,le,V,P,null),P.onAfterShadow(n,P,R,Z,le,V,null)}}const j=P.children;for(let le=0,N=j.length;le<N;le++)b(j[le],R,Z,y,w)}function L(P){P.target.removeEventListener("dispose",L);for(const Z in c){const y=c[Z],w=P.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function EM(n,e,t){const i=t.isWebGL2;function s(){let D=!1;const pe=new bt;let xe=null;const Ie=new bt(0,0,0,0);return{setMask:function(Le){xe!==Le&&!D&&(n.colorMask(Le,Le,Le,Le),xe=Le)},setLocked:function(Le){D=Le},setClear:function(Le,$e,Ze,ht,dt){dt===!0&&(Le*=ht,$e*=ht,Ze*=ht),pe.set(Le,$e,Ze,ht),Ie.equals(pe)===!1&&(n.clearColor(Le,$e,Ze,ht),Ie.copy(pe))},reset:function(){D=!1,xe=null,Ie.set(-1,0,0,0)}}}function r(){let D=!1,pe=null,xe=null,Ie=null;return{setTest:function(Le){Le?Oe(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(Le){pe!==Le&&!D&&(n.depthMask(Le),pe=Le)},setFunc:function(Le){if(xe!==Le){switch(Le){case Im:n.depthFunc(n.NEVER);break;case Nm:n.depthFunc(n.ALWAYS);break;case Fm:n.depthFunc(n.LESS);break;case ao:n.depthFunc(n.LEQUAL);break;case Om:n.depthFunc(n.EQUAL);break;case Bm:n.depthFunc(n.GEQUAL);break;case zm:n.depthFunc(n.GREATER);break;case Hm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=Le}},setLocked:function(Le){D=Le},setClear:function(Le){Ie!==Le&&(n.clearDepth(Le),Ie=Le)},reset:function(){D=!1,pe=null,xe=null,Ie=null}}}function a(){let D=!1,pe=null,xe=null,Ie=null,Le=null,$e=null,Ze=null,ht=null,dt=null;return{setTest:function(Qe){D||(Qe?Oe(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(Qe){pe!==Qe&&!D&&(n.stencilMask(Qe),pe=Qe)},setFunc:function(Qe,gt,_n){(xe!==Qe||Ie!==gt||Le!==_n)&&(n.stencilFunc(Qe,gt,_n),xe=Qe,Ie=gt,Le=_n)},setOp:function(Qe,gt,_n){($e!==Qe||Ze!==gt||ht!==_n)&&(n.stencilOp(Qe,gt,_n),$e=Qe,Ze=gt,ht=_n)},setLocked:function(Qe){D=Qe},setClear:function(Qe){dt!==Qe&&(n.clearStencil(Qe),dt=Qe)},reset:function(){D=!1,pe=null,xe=null,Ie=null,Le=null,$e=null,Ze=null,ht=null,dt=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,f=!1,E=null,S=null,b=null,L=null,P=null,R=null,Z=null,y=new We(0,0,0),w=0,W=!1,j=null,le=null,N=null,V=null,G=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ie=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(se)[1]),K=ie>=1):se.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),K=ie>=2);let ue=null,he={};const J=n.getParameter(n.SCISSOR_BOX),ae=n.getParameter(n.VIEWPORT),Me=new bt().fromArray(J),Te=new bt().fromArray(ae);function we(D,pe,xe,Ie){const Le=new Uint8Array(4),$e=n.createTexture();n.bindTexture(D,$e),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<xe;Ze++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(pe,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(pe+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return $e}const Fe={};Fe[n.TEXTURE_2D]=we(n.TEXTURE_2D,n.TEXTURE_2D,1),Fe[n.TEXTURE_CUBE_MAP]=we(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Fe[n.TEXTURE_2D_ARRAY]=we(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Fe[n.TEXTURE_3D]=we(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(n.DEPTH_TEST),l.setFunc(ao),te(!1),M(mc),Oe(n.CULL_FACE),z(Wn);function Oe(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function Ce(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function Ke(D,pe){return p[D]!==pe?(n.bindFramebuffer(D,pe),p[D]=pe,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=pe),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=pe)),!0):!1}function x(D,pe){let xe=g,Ie=!1;if(D)if(xe=_.get(pe),xe===void 0&&(xe=[],_.set(pe,xe)),D.isWebGLMultipleRenderTargets){const Le=D.texture;if(xe.length!==Le.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let $e=0,Ze=Le.length;$e<Ze;$e++)xe[$e]=n.COLOR_ATTACHMENT0+$e;xe.length=Le.length,Ie=!0}}else xe[0]!==n.COLOR_ATTACHMENT0&&(xe[0]=n.COLOR_ATTACHMENT0,Ie=!0);else xe[0]!==n.BACK&&(xe[0]=n.BACK,Ie=!0);Ie&&(t.isWebGL2?n.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function U(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const F={[bi]:n.FUNC_ADD,[xm]:n.FUNC_SUBTRACT,[Mm]:n.FUNC_REVERSE_SUBTRACT};if(i)F[vc]=n.MIN,F[xc]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(F[vc]=D.MIN_EXT,F[xc]=D.MAX_EXT)}const X={[Sm]:n.ZERO,[ym]:n.ONE,[Em]:n.SRC_COLOR,[ka]:n.SRC_ALPHA,[Cm]:n.SRC_ALPHA_SATURATE,[Am]:n.DST_COLOR,[Tm]:n.DST_ALPHA,[bm]:n.ONE_MINUS_SRC_COLOR,[Wa]:n.ONE_MINUS_SRC_ALPHA,[Rm]:n.ONE_MINUS_DST_COLOR,[wm]:n.ONE_MINUS_DST_ALPHA,[Pm]:n.CONSTANT_COLOR,[Lm]:n.ONE_MINUS_CONSTANT_COLOR,[Dm]:n.CONSTANT_ALPHA,[Um]:n.ONE_MINUS_CONSTANT_ALPHA};function z(D,pe,xe,Ie,Le,$e,Ze,ht,dt,Qe){if(D===Wn){f===!0&&(Ce(n.BLEND),f=!1);return}if(f===!1&&(Oe(n.BLEND),f=!0),D!==vm){if(D!==E||Qe!==W){if((S!==bi||P!==bi)&&(n.blendEquation(n.FUNC_ADD),S=bi,P=bi),Qe)switch(D){case vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gn:n.blendFunc(n.ONE,n.ONE);break;case gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,L=null,R=null,Z=null,y.set(0,0,0),w=0,E=D,W=Qe}return}Le=Le||pe,$e=$e||xe,Ze=Ze||Ie,(pe!==S||Le!==P)&&(n.blendEquationSeparate(F[pe],F[Le]),S=pe,P=Le),(xe!==b||Ie!==L||$e!==R||Ze!==Z)&&(n.blendFuncSeparate(X[xe],X[Ie],X[$e],X[Ze]),b=xe,L=Ie,R=$e,Z=Ze),(ht.equals(y)===!1||dt!==w)&&(n.blendColor(ht.r,ht.g,ht.b,dt),y.copy(ht),w=dt),E=D,W=!1}function Q(D,pe){D.side===$t?Ce(n.CULL_FACE):Oe(n.CULL_FACE);let xe=D.side===Wt;pe&&(xe=!xe),te(xe),D.blending===vs&&D.transparent===!1?z(Wn):z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Ie=D.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),C(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Oe(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(D){j!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),j=D)}function M(D){D!==gm?(Oe(n.CULL_FACE),D!==le&&(D===mc?n.cullFace(n.BACK):D===_m?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),le=D}function v(D){D!==N&&(K&&n.lineWidth(D),N=D)}function C(D,pe,xe){D?(Oe(n.POLYGON_OFFSET_FILL),(V!==pe||G!==xe)&&(n.polygonOffset(pe,xe),V=pe,G=xe)):Ce(n.POLYGON_OFFSET_FILL)}function k(D){D?Oe(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function O(D){D===void 0&&(D=n.TEXTURE0+ee-1),ue!==D&&(n.activeTexture(D),ue=D)}function H(D,pe,xe){xe===void 0&&(ue===null?xe=n.TEXTURE0+ee-1:xe=ue);let Ie=he[xe];Ie===void 0&&(Ie={type:void 0,texture:void 0},he[xe]=Ie),(Ie.type!==D||Ie.texture!==pe)&&(ue!==xe&&(n.activeTexture(xe),ue=xe),n.bindTexture(D,pe||Fe[D]),Ie.type=D,Ie.texture=pe)}function oe(){const D=he[ue];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function A(D){Me.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Me.copy(D))}function de(D){Te.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Te.copy(D))}function Ae(D,pe){let xe=h.get(pe);xe===void 0&&(xe=new WeakMap,h.set(pe,xe));let Ie=xe.get(D);Ie===void 0&&(Ie=n.getUniformBlockIndex(pe,D.name),xe.set(D,Ie))}function ye(D,pe){const Ie=h.get(pe).get(D);u.get(pe)!==Ie&&(n.uniformBlockBinding(pe,Ie,D.__bindingPointIndex),u.set(pe,Ie))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ue=null,he={},p={},_=new WeakMap,g=[],m=null,f=!1,E=null,S=null,b=null,L=null,P=null,R=null,Z=null,y=new We(0,0,0),w=0,W=!1,j=null,le=null,N=null,V=null,G=null,Me.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Oe,disable:Ce,bindFramebuffer:Ke,drawBuffers:x,useProgram:U,setBlending:z,setMaterial:Q,setFlipSided:te,setCullFace:M,setLineWidth:v,setPolygonOffset:C,setScissorTest:k,activeTexture:O,bindTexture:H,unbindTexture:oe,compressedTexImage2D:re,compressedTexImage3D:fe,texImage2D:Re,texImage3D:ge,updateUBOMapping:Ae,uniformBlockBinding:ye,texStorage2D:Ue,texStorage3D:De,texSubImage2D:_e,texSubImage3D:Ee,compressedTexSubImage2D:ne,compressedTexSubImage3D:He,scissor:A,viewport:de,reset:ce}}function bM(n,e,t,i,s,r,a){const o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,v){return p?new OffscreenCanvas(M,v):po("canvas")}function g(M,v,C,k){let O=1;if((M.width>k||M.height>k)&&(O=k/Math.max(M.width,M.height)),O<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const H=v?fo:Math.floor,oe=H(O*M.width),re=H(O*M.height);h===void 0&&(h=_(oe,re));const fe=C?_(oe,re):h;return fe.width=oe,fe.height=re,fe.getContext("2d").drawImage(M,0,0,oe,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+oe+"x"+re+")."),fe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return $a(M.width)&&$a(M.height)}function f(M){return o?!1:M.wrapS!==hn||M.wrapT!==hn||M.minFilter!==Bt&&M.minFilter!==kt}function E(M,v){return M.generateMipmaps&&v&&M.minFilter!==Bt&&M.minFilter!==kt}function S(M){n.generateMipmap(M)}function b(M,v,C,k,O=!1){if(o===!1)return v;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let H=v;if(v===n.RED&&(C===n.FLOAT&&(H=n.R32F),C===n.HALF_FLOAT&&(H=n.R16F),C===n.UNSIGNED_BYTE&&(H=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(H=n.R8UI),C===n.UNSIGNED_SHORT&&(H=n.R16UI),C===n.UNSIGNED_INT&&(H=n.R32UI),C===n.BYTE&&(H=n.R8I),C===n.SHORT&&(H=n.R16I),C===n.INT&&(H=n.R32I)),v===n.RG&&(C===n.FLOAT&&(H=n.RG32F),C===n.HALF_FLOAT&&(H=n.RG16F),C===n.UNSIGNED_BYTE&&(H=n.RG8)),v===n.RGBA){const oe=O?lo:it.getTransfer(k);C===n.FLOAT&&(H=n.RGBA32F),C===n.HALF_FLOAT&&(H=n.RGBA16F),C===n.UNSIGNED_BYTE&&(H=oe===at?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function L(M,v,C){return E(M,C)===!0||M.isFramebufferTexture&&M.minFilter!==Bt&&M.minFilter!==kt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function P(M){return M===Bt||M===Mc||M===Jo?n.NEAREST:n.LINEAR}function R(M){const v=M.target;v.removeEventListener("dispose",R),y(v),v.isVideoTexture&&u.delete(v)}function Z(M){const v=M.target;v.removeEventListener("dispose",Z),W(v)}function y(M){const v=i.get(M);if(v.__webglInit===void 0)return;const C=M.source,k=d.get(C);if(k){const O=k[v.__cacheKey];O.usedTimes--,O.usedTimes===0&&w(M),Object.keys(k).length===0&&d.delete(C)}i.remove(M)}function w(M){const v=i.get(M);n.deleteTexture(v.__webglTexture);const C=M.source,k=d.get(C);delete k[v.__cacheKey],a.memory.textures--}function W(M){const v=M.texture,C=i.get(M),k=i.get(v);if(k.__webglTexture!==void 0&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(C.__webglFramebuffer[O]))for(let H=0;H<C.__webglFramebuffer[O].length;H++)n.deleteFramebuffer(C.__webglFramebuffer[O][H]);else n.deleteFramebuffer(C.__webglFramebuffer[O]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[O])}else{if(Array.isArray(C.__webglFramebuffer))for(let O=0;O<C.__webglFramebuffer.length;O++)n.deleteFramebuffer(C.__webglFramebuffer[O]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let O=0;O<C.__webglColorRenderbuffer.length;O++)C.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[O]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let O=0,H=v.length;O<H;O++){const oe=i.get(v[O]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(v[O])}i.remove(v),i.remove(M)}let j=0;function le(){j=0}function N(){const M=j;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),j+=1,M}function V(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function G(M,v){const C=i.get(M);if(M.isVideoTexture&&Q(M),M.isRenderTargetTexture===!1&&M.version>0&&C.__version!==M.version){const k=M.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(C,M,v);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function ee(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){Me(C,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function K(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){Me(C,M,v);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function ie(M,v){const C=i.get(M);if(M.version>0&&C.__version!==M.version){Te(C,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const se={[Li]:n.REPEAT,[hn]:n.CLAMP_TO_EDGE,[qa]:n.MIRRORED_REPEAT},ue={[Bt]:n.NEAREST,[Mc]:n.NEAREST_MIPMAP_NEAREST,[Jo]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[jm]:n.LINEAR_MIPMAP_NEAREST,[or]:n.LINEAR_MIPMAP_LINEAR},he={[og]:n.NEVER,[fg]:n.ALWAYS,[ag]:n.LESS,[uf]:n.LEQUAL,[lg]:n.EQUAL,[hg]:n.GEQUAL,[cg]:n.GREATER,[ug]:n.NOTEQUAL};function J(M,v,C){if(C?(n.texParameteri(M,n.TEXTURE_WRAP_S,se[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,se[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,se[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ue[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ue[v.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==hn||v.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,P(v.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,P(v.minFilter)),v.minFilter!==Bt&&v.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,he[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Bt||v.minFilter!==Jo&&v.minFilter!==or||v.type===ci&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Yn&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(M,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function ae(M,v){let C=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",R));const k=v.source;let O=d.get(k);O===void 0&&(O={},d.set(k,O));const H=V(v);if(H!==M.__cacheKey){O[H]===void 0&&(O[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,C=!0),O[H].usedTimes++;const oe=O[M.__cacheKey];oe!==void 0&&(O[M.__cacheKey].usedTimes--,oe.usedTimes===0&&w(v)),M.__cacheKey=H,M.__webglTexture=O[H].texture}return C}function Me(M,v,C){let k=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=n.TEXTURE_3D);const O=ae(M,v),H=v.source;t.bindTexture(k,M.__webglTexture,n.TEXTURE0+C);const oe=i.get(H);if(H.version!==oe.__version||O===!0){t.activeTexture(n.TEXTURE0+C);const re=it.getPrimaries(it.workingColorSpace),fe=v.colorSpace===rn?null:it.getPrimaries(v.colorSpace),_e=v.colorSpace===rn||re===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ee=f(v)&&m(v.image)===!1;let ne=g(v.image,Ee,!1,s.maxTextureSize);ne=te(v,ne);const He=m(ne)||o,Ue=r.convert(v.format,v.colorSpace);let De=r.convert(v.type),Re=b(v.internalFormat,Ue,De,v.colorSpace,v.isVideoTexture);J(k,v,He);let ge;const A=v.mipmaps,de=o&&v.isVideoTexture!==!0&&Re!==af,Ae=oe.__version===void 0||O===!0,ye=L(v,ne,He);if(v.isDepthTexture)Re=n.DEPTH_COMPONENT,o?v.type===ci?Re=n.DEPTH_COMPONENT32F:v.type===li?Re=n.DEPTH_COMPONENT24:v.type===Di?Re=n.DEPTH24_STENCIL8:Re=n.DEPTH_COMPONENT16:v.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ui&&Re===n.DEPTH_COMPONENT&&v.type!==Ml&&v.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=li,De=r.convert(v.type)),v.format===Es&&Re===n.DEPTH_COMPONENT&&(Re=n.DEPTH_STENCIL,v.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Di,De=r.convert(v.type))),Ae&&(de?t.texStorage2D(n.TEXTURE_2D,1,Re,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Re,ne.width,ne.height,0,Ue,De,null));else if(v.isDataTexture)if(A.length>0&&He){de&&Ae&&t.texStorage2D(n.TEXTURE_2D,ye,Re,A[0].width,A[0].height);for(let ce=0,D=A.length;ce<D;ce++)ge=A[ce],de?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ge.width,ge.height,Ue,De,ge.data):t.texImage2D(n.TEXTURE_2D,ce,Re,ge.width,ge.height,0,Ue,De,ge.data);v.generateMipmaps=!1}else de?(Ae&&t.texStorage2D(n.TEXTURE_2D,ye,Re,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,Ue,De,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Re,ne.width,ne.height,0,Ue,De,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){de&&Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Re,A[0].width,A[0].height,ne.depth);for(let ce=0,D=A.length;ce<D;ce++)ge=A[ce],v.format!==sn?Ue!==null?de?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,ne.depth,Ue,ge.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Re,ge.width,ge.height,ne.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ge.width,ge.height,ne.depth,Ue,De,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Re,ge.width,ge.height,ne.depth,0,Ue,De,ge.data)}else{de&&Ae&&t.texStorage2D(n.TEXTURE_2D,ye,Re,A[0].width,A[0].height);for(let ce=0,D=A.length;ce<D;ce++)ge=A[ce],v.format!==sn?Ue!==null?de?t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,ge.width,ge.height,Ue,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Re,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ge.width,ge.height,Ue,De,ge.data):t.texImage2D(n.TEXTURE_2D,ce,Re,ge.width,ge.height,0,Ue,De,ge.data)}else if(v.isDataArrayTexture)de?(Ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Re,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,Ue,De,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,Ue,De,ne.data);else if(v.isData3DTexture)de?(Ae&&t.texStorage3D(n.TEXTURE_3D,ye,Re,ne.width,ne.height,ne.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,Ue,De,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,Ue,De,ne.data);else if(v.isFramebufferTexture){if(Ae)if(de)t.texStorage2D(n.TEXTURE_2D,ye,Re,ne.width,ne.height);else{let ce=ne.width,D=ne.height;for(let pe=0;pe<ye;pe++)t.texImage2D(n.TEXTURE_2D,pe,Re,ce,D,0,Ue,De,null),ce>>=1,D>>=1}}else if(A.length>0&&He){de&&Ae&&t.texStorage2D(n.TEXTURE_2D,ye,Re,A[0].width,A[0].height);for(let ce=0,D=A.length;ce<D;ce++)ge=A[ce],de?t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Ue,De,ge):t.texImage2D(n.TEXTURE_2D,ce,Re,Ue,De,ge);v.generateMipmaps=!1}else de?(Ae&&t.texStorage2D(n.TEXTURE_2D,ye,Re,ne.width,ne.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ue,De,ne)):t.texImage2D(n.TEXTURE_2D,0,Re,Ue,De,ne);E(v,He)&&S(k),oe.__version=H.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Te(M,v,C){if(v.image.length!==6)return;const k=ae(M,v),O=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+C);const H=i.get(O);if(O.version!==H.__version||k===!0){t.activeTexture(n.TEXTURE0+C);const oe=it.getPrimaries(it.workingColorSpace),re=v.colorSpace===rn?null:it.getPrimaries(v.colorSpace),fe=v.colorSpace===rn||oe===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const _e=v.isCompressedTexture||v.image[0].isCompressedTexture,Ee=v.image[0]&&v.image[0].isDataTexture,ne=[];for(let ce=0;ce<6;ce++)!_e&&!Ee?ne[ce]=g(v.image[ce],!1,!0,s.maxCubemapSize):ne[ce]=Ee?v.image[ce].image:v.image[ce],ne[ce]=te(v,ne[ce]);const He=ne[0],Ue=m(He)||o,De=r.convert(v.format,v.colorSpace),Re=r.convert(v.type),ge=b(v.internalFormat,De,Re,v.colorSpace),A=o&&v.isVideoTexture!==!0,de=H.__version===void 0||k===!0;let Ae=L(v,He,Ue);J(n.TEXTURE_CUBE_MAP,v,Ue);let ye;if(_e){A&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,ge,He.width,He.height);for(let ce=0;ce<6;ce++){ye=ne[ce].mipmaps;for(let D=0;D<ye.length;D++){const pe=ye[D];v.format!==sn?De!==null?A?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,0,0,pe.width,pe.height,De,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,0,0,pe.width,pe.height,De,Re,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D,ge,pe.width,pe.height,0,De,Re,pe.data)}}}else{ye=v.mipmaps,A&&de&&(ye.length>0&&Ae++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,ge,ne[0].width,ne[0].height));for(let ce=0;ce<6;ce++)if(Ee){A?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ne[ce].width,ne[ce].height,De,Re,ne[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ge,ne[ce].width,ne[ce].height,0,De,Re,ne[ce].data);for(let D=0;D<ye.length;D++){const xe=ye[D].image[ce].image;A?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,0,0,xe.width,xe.height,De,Re,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,ge,xe.width,xe.height,0,De,Re,xe.data)}}else{A?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,De,Re,ne[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ge,De,Re,ne[ce]);for(let D=0;D<ye.length;D++){const pe=ye[D];A?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,0,0,De,Re,pe.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,D+1,ge,De,Re,pe.image[ce])}}}E(v,Ue)&&S(n.TEXTURE_CUBE_MAP),H.__version=O.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function we(M,v,C,k,O,H){const oe=r.convert(C.format,C.colorSpace),re=r.convert(C.type),fe=b(C.internalFormat,oe,re,C.colorSpace);if(!i.get(v).__hasExternalTextures){const Ee=Math.max(1,v.width>>H),ne=Math.max(1,v.height>>H);O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?t.texImage3D(O,H,fe,Ee,ne,v.depth,0,oe,re,null):t.texImage2D(O,H,fe,Ee,ne,0,oe,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),z(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,O,i.get(C).__webglTexture,0,X(v)):(O===n.TEXTURE_2D||O>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&O<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,O,i.get(C).__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(M,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let k=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(C||z(v)){const O=v.depthTexture;O&&O.isDepthTexture&&(O.type===ci?k=n.DEPTH_COMPONENT32F:O.type===li&&(k=n.DEPTH_COMPONENT24));const H=X(v);z(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,H,k,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,H,k,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,k,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){const k=X(v);C&&z(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,k,n.DEPTH24_STENCIL8,v.width,v.height):z(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{const k=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let O=0;O<k.length;O++){const H=k[O],oe=r.convert(H.format,H.colorSpace),re=r.convert(H.type),fe=b(H.internalFormat,oe,re,H.colorSpace),_e=X(v);C&&z(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,fe,v.width,v.height):z(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const k=i.get(v.depthTexture).__webglTexture,O=X(v);if(v.depthTexture.format===Ui)z(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(v.depthTexture.format===Es)z(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,O):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function Ce(M){const v=i.get(M),C=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");Oe(v.__webglFramebuffer,M)}else if(C){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]=n.createRenderbuffer(),Fe(v.__webglDepthbuffer[k],M,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Fe(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(M,v,C){const k=i.get(M);v!==void 0&&we(k.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&Ce(M)}function x(M){const v=M.texture,C=i.get(M),k=i.get(v);M.addEventListener("dispose",Z),M.isWebGLMultipleRenderTargets!==!0&&(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=v.version,a.memory.textures++);const O=M.isWebGLCubeRenderTarget===!0,H=M.isWebGLMultipleRenderTargets===!0,oe=m(M)||o;if(O){C.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[re]=[];for(let fe=0;fe<v.mipmaps.length;fe++)C.__webglFramebuffer[re][fe]=n.createFramebuffer()}else C.__webglFramebuffer[re]=n.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)C.__webglFramebuffer[re]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(H)if(s.drawBuffers){const re=M.texture;for(let fe=0,_e=re.length;fe<_e;fe++){const Ee=i.get(re[fe]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&z(M)===!1){const re=H?v:[v];C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const _e=re[fe];C.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[fe]);const Ee=r.convert(_e.format,_e.colorSpace),ne=r.convert(_e.type),He=b(_e.internalFormat,Ee,ne,_e.colorSpace,M.isXRRenderTarget===!0),Ue=X(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,He,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,C.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(C.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(O){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),J(n.TEXTURE_CUBE_MAP,v,oe);for(let re=0;re<6;re++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)we(C.__webglFramebuffer[re][fe],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe);else we(C.__webglFramebuffer[re],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);E(v,oe)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(H){const re=M.texture;for(let fe=0,_e=re.length;fe<_e;fe++){const Ee=re[fe],ne=i.get(Ee);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),J(n.TEXTURE_2D,Ee,oe),we(C.__webglFramebuffer,M,Ee,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),E(Ee,oe)&&S(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?re=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,k.__webglTexture),J(re,v,oe),o&&v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)we(C.__webglFramebuffer[fe],M,v,n.COLOR_ATTACHMENT0,re,fe);else we(C.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,re,0);E(v,oe)&&S(re),t.unbindTexture()}M.depthBuffer&&Ce(M)}function U(M){const v=m(M)||o,C=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let k=0,O=C.length;k<O;k++){const H=C[k];if(E(H,v)){const oe=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,re=i.get(H).__webglTexture;t.bindTexture(oe,re),S(oe),t.unbindTexture()}}}function F(M){if(o&&M.samples>0&&z(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],C=M.width,k=M.height;let O=n.COLOR_BUFFER_BIT;const H=[],oe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(M),fe=M.isWebGLMultipleRenderTargets===!0;if(fe)for(let _e=0;_e<v.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let _e=0;_e<v.length;_e++){H.push(n.COLOR_ATTACHMENT0+_e),M.depthBuffer&&H.push(oe);const Ee=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ee===!1&&(M.depthBuffer&&(O|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(O|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[_e]),Ee===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[oe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[oe])),fe){const ne=i.get(v[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,C,k,0,0,C,k,O,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,H)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<v.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,re.__webglColorRenderbuffer[_e]);const Ee=i.get(v[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function X(M){return Math.min(s.maxSamples,M.samples)}function z(M){const v=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Q(M){const v=a.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function te(M,v){const C=M.colorSpace,k=M.format,O=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Ka||C!==Jn&&C!==rn&&(it.getTransfer(C)===at?o===!1?e.has("EXT_sRGB")===!0&&k===sn?(M.format=Ka,M.minFilter=kt,M.generateMipmaps=!1):v=ff.sRGBToLinear(v):(k!==sn||O!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}this.allocateTextureUnit=N,this.resetTextureUnits=le,this.setTexture2D=G,this.setTexture2DArray=ee,this.setTexture3D=K,this.setTextureCube=ie,this.rebindTextures=Ke,this.setupRenderTarget=x,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=we,this.useMultisampledRTT=z}function TM(n,e,t){const i=t.isWebGL2;function s(r,a=rn){let o;const l=it.getTransfer(a);if(r===Xn)return n.UNSIGNED_BYTE;if(r===tf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===nf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Km)return n.BYTE;if(r===$m)return n.SHORT;if(r===Ml)return n.UNSIGNED_SHORT;if(r===ef)return n.INT;if(r===li)return n.UNSIGNED_INT;if(r===ci)return n.FLOAT;if(r===Yn)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Zm)return n.ALPHA;if(r===sn)return n.RGBA;if(r===Jm)return n.LUMINANCE;if(r===Qm)return n.LUMINANCE_ALPHA;if(r===Ui)return n.DEPTH_COMPONENT;if(r===Es)return n.DEPTH_STENCIL;if(r===Ka)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===eg)return n.RED;if(r===sf)return n.RED_INTEGER;if(r===tg)return n.RG;if(r===rf)return n.RG_INTEGER;if(r===of)return n.RGBA_INTEGER;if(r===Qo||r===ea||r===ta||r===na)if(l===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ea)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ta)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===na)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Sc||r===yc||r===Ec||r===bc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Sc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ec)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===af)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Tc||r===wc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Tc)return l===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===wc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ac||r===Rc||r===Cc||r===Pc||r===Lc||r===Dc||r===Uc||r===Ic||r===Nc||r===Fc||r===Oc||r===Bc||r===zc||r===Hc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ac)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ic)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Fc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Oc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hc)return l===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ia||r===Gc||r===Vc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ia)return l===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ng||r===kc||r===Wc||r===Xc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ia)return o.COMPRESSED_RED_RGTC1_EXT;if(r===kc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Di?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class wM extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ai extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AM={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ai,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ai,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ai,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ai;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class RM extends Bi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const E=[],S=[],b=new me;let L=null;const P=new nn;P.layers.enable(1),P.viewport=new bt;const R=new nn;R.layers.enable(2),R.viewport=new bt;const Z=[P,R],y=new wM;y.layers.enable(1),y.layers.enable(2);let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=E[J];return ae===void 0&&(ae=new wa,E[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=E[J];return ae===void 0&&(ae=new wa,E[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=E[J];return ae===void 0&&(ae=new wa,E[J]=ae),ae.getHandSpace()};function j(J){const ae=S.indexOf(J.inputSource);if(ae===-1)return;const Me=E[ae];Me!==void 0&&(Me.update(J.inputSource,J.frame,c||a),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function le(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",N);for(let J=0;J<E.length;J++){const ae=S[J];ae!==null&&(S[J]=null,E[J].disconnect(ae))}w=null,W=null,e.setRenderTarget(m),p=null,d=null,h=null,s=null,f=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",le),s.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new on(p.framebufferWidth,p.framebufferHeight,{format:sn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ae=null,Me=null,Te=null;g.depth&&(Te=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=g.stencil?Es:Ui,Me=g.stencil?Di:li);const we={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(we),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new on(d.textureWidth,d.textureHeight,{format:sn,type:Xn,depthTexture:new Sf(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Fe=e.properties.get(f);Fe.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(J){for(let ae=0;ae<J.removed.length;ae++){const Me=J.removed[ae],Te=S.indexOf(Me);Te>=0&&(S[Te]=null,E[Te].disconnect(Me))}for(let ae=0;ae<J.added.length;ae++){const Me=J.added[ae];let Te=S.indexOf(Me);if(Te===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=S.length){S.push(Me),Te=Fe;break}else if(S[Fe]===null){S[Fe]=Me,Te=Fe;break}if(Te===-1)break}const we=E[Te];we&&we.connect(Me)}}const V=new I,G=new I;function ee(J,ae,Me){V.setFromMatrixPosition(ae.matrixWorld),G.setFromMatrixPosition(Me.matrixWorld);const Te=V.distanceTo(G),we=ae.projectionMatrix.elements,Fe=Me.projectionMatrix.elements,Oe=we[14]/(we[10]-1),Ce=we[14]/(we[10]+1),Ke=(we[9]+1)/we[5],x=(we[9]-1)/we[5],U=(we[8]-1)/we[0],F=(Fe[8]+1)/Fe[0],X=Oe*U,z=Oe*F,Q=Te/(-U+F),te=Q*-U;ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(te),J.translateZ(Q),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const M=Oe+Q,v=Ce+Q,C=X-te,k=z+(Te-te),O=Ke*Ce/v*M,H=x*Ce/v*M;J.projectionMatrix.makePerspective(C,k,O,H,M,v),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function K(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;y.near=R.near=P.near=J.near,y.far=R.far=P.far=J.far,(w!==y.near||W!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,W=y.far);const ae=J.parent,Me=y.cameras;K(y,ae);for(let Te=0;Te<Me.length;Te++)K(Me[Te],ae);Me.length===2?ee(y,P,R):y.projectionMatrix.copy(P.projectionMatrix),ie(J,y,ae)};function ie(J,ae,Me){Me===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ar*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)};let se=null;function ue(J,ae){if(u=ae.getViewerPose(c||a),_=ae,u!==null){const Me=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Te=!1;Me.length!==y.cameras.length&&(y.cameras.length=0,Te=!0);for(let we=0;we<Me.length;we++){const Fe=Me[we];let Oe=null;if(p!==null)Oe=p.getViewport(Fe);else{const Ke=h.getViewSubImage(d,Fe);Oe=Ke.viewport,we===0&&(e.setRenderTargetTextures(f,Ke.colorTexture,d.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(f))}let Ce=Z[we];Ce===void 0&&(Ce=new nn,Ce.layers.enable(we),Ce.viewport=new bt,Z[we]=Ce),Ce.matrix.fromArray(Fe.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Fe.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),we===0&&(y.matrix.copy(Ce.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Te===!0&&y.cameras.push(Ce)}}for(let Me=0;Me<E.length;Me++){const Te=S[Me],we=E[Me];Te!==null&&we!==void 0&&we.update(Te,ae,c||a)}se&&se(J,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}const he=new Mf;he.setAnimationLoop(ue),this.setAnimationLoop=function(J){se=J},this.dispose=function(){}}}function CM(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,vf(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,S,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,E,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const S=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*S,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function PM(n,e,t,i){let s={},r={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,S){const b=S.program;i.uniformBlockBinding(E,b)}function c(E,S){let b=s[E.id];b===void 0&&(_(E),b=u(E),s[E.id]=b,E.addEventListener("dispose",m));const L=S.program;i.updateUBOMapping(E,L);const P=e.render.frame;r[E.id]!==P&&(d(E),r[E.id]=P)}function u(E){const S=h();E.__bindingPointIndex=S;const b=n.createBuffer(),L=E.__size,P=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,L,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=s[E.id],b=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let P=0,R=b.length;P<R;P++){const Z=Array.isArray(b[P])?b[P]:[b[P]];for(let y=0,w=Z.length;y<w;y++){const W=Z[y];if(p(W,P,y,L)===!0){const j=W.__offset,le=Array.isArray(W.value)?W.value:[W.value];let N=0;for(let V=0;V<le.length;V++){const G=le[V],ee=g(G);typeof G=="number"||typeof G=="boolean"?(W.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,j+N,W.__data)):G.isMatrix3?(W.__data[0]=G.elements[0],W.__data[1]=G.elements[1],W.__data[2]=G.elements[2],W.__data[3]=0,W.__data[4]=G.elements[3],W.__data[5]=G.elements[4],W.__data[6]=G.elements[5],W.__data[7]=0,W.__data[8]=G.elements[6],W.__data[9]=G.elements[7],W.__data[10]=G.elements[8],W.__data[11]=0):(G.toArray(W.__data,N),N+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,W.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,S,b,L){const P=E.value,R=S+"_"+b;if(L[R]===void 0)return typeof P=="number"||typeof P=="boolean"?L[R]=P:L[R]=P.clone(),!0;{const Z=L[R];if(typeof P=="number"||typeof P=="boolean"){if(Z!==P)return L[R]=P,!0}else if(Z.equals(P)===!1)return Z.copy(P),!0}return!1}function _(E){const S=E.uniforms;let b=0;const L=16;for(let R=0,Z=S.length;R<Z;R++){const y=Array.isArray(S[R])?S[R]:[S[R]];for(let w=0,W=y.length;w<W;w++){const j=y[w],le=Array.isArray(j.value)?j.value:[j.value];for(let N=0,V=le.length;N<V;N++){const G=le[N],ee=g(G),K=b%L;K!==0&&L-K<ee.boundary&&(b+=L-K),j.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=ee.storage}}}const P=b%L;return P>0&&(b+=L-P),E.__size=b,E.__cache={},this}function g(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Af{constructor(e={}){const{canvas:t=Ag(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const S=this;let b=!1,L=0,P=0,R=null,Z=-1,y=null;const w=new bt,W=new bt;let j=null;const le=new We(0);let N=0,V=t.width,G=t.height,ee=1,K=null,ie=null;const se=new bt(0,0,V,G),ue=new bt(0,0,V,G);let he=!1;const J=new Al;let ae=!1,Me=!1,Te=null;const we=new vt,Fe=new me,Oe=new I,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return R===null?ee:1}let x=i;function U(T,B){for(let q=0;q<T.length;q++){const $=T[q],Y=t.getContext($,B);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xl}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",pe,!1),x===null){const B=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&B.shift(),x=U(B,T),x===null)throw U(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let F,X,z,Q,te,M,v,C,k,O,H,oe,re,fe,_e,Ee,ne,He,Ue,De,Re,ge,A,de;function Ae(){F=new Hv(x),X=new Iv(x,F,e),F.init(X),ge=new TM(x,F,X),z=new EM(x,F,X),Q=new kv(x),te=new cM,M=new bM(x,F,z,te,X,ge,Q),v=new Fv(S),C=new zv(S),k=new Zg(x,X),A=new Dv(x,F,k,X),O=new Gv(x,k,Q,A),H=new qv(x,O,k,Q),Ue=new Yv(x,X,M),Ee=new Nv(te),oe=new lM(S,v,C,F,X,A,Ee),re=new CM(S,te),fe=new hM,_e=new _M(F,X),He=new Lv(S,v,C,z,H,d,l),ne=new yM(S,H,X),de=new PM(x,Q,X,z),De=new Uv(x,F,Q,X),Re=new Vv(x,F,Q,X),Q.programs=oe.programs,S.capabilities=X,S.extensions=F,S.properties=te,S.renderLists=fe,S.shadowMap=ne,S.state=z,S.info=Q}Ae();const ye=new RM(S,x);this.xr=ye,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const T=F.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=F.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(V,G,!1))},this.getSize=function(T){return T.set(V,G)},this.setSize=function(T,B,q=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,G=B,t.width=Math.floor(T*ee),t.height=Math.floor(B*ee),q===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(V*ee,G*ee).floor()},this.setDrawingBufferSize=function(T,B,q){V=T,G=B,ee=q,t.width=Math.floor(T*q),t.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,B,q,$){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,B,q,$),z.viewport(w.copy(se).multiplyScalar(ee).floor())},this.getScissor=function(T){return T.copy(ue)},this.setScissor=function(T,B,q,$){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,B,q,$),z.scissor(W.copy(ue).multiplyScalar(ee).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(T){z.setScissorTest(he=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){ie=T},this.getClearColor=function(T){return T.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(T=!0,B=!0,q=!0){let $=0;if(T){let Y=!1;if(R!==null){const Se=R.texture.format;Y=Se===of||Se===rf||Se===sf}if(Y){const Se=R.texture.type,Pe=Se===Xn||Se===li||Se===Ml||Se===Di||Se===tf||Se===nf,Ne=He.getClearColor(),Be=He.getClearAlpha(),Ye=Ne.r,Ge=Ne.g,ke=Ne.b;Pe?(p[0]=Ye,p[1]=Ge,p[2]=ke,p[3]=Be,x.clearBufferuiv(x.COLOR,0,p)):(_[0]=Ye,_[1]=Ge,_[2]=ke,_[3]=Be,x.clearBufferiv(x.COLOR,0,_))}else $|=x.COLOR_BUFFER_BIT}B&&($|=x.DEPTH_BUFFER_BIT),q&&($|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),fe.dispose(),_e.dispose(),te.dispose(),v.dispose(),C.dispose(),H.dispose(),A.dispose(),de.dispose(),oe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",dt),ye.removeEventListener("sessionend",Qe),Te&&(Te.dispose(),Te=null),gt.stop()};function ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=Q.autoReset,B=ne.enabled,q=ne.autoUpdate,$=ne.needsUpdate,Y=ne.type;Ae(),Q.autoReset=T,ne.enabled=B,ne.autoUpdate=q,ne.needsUpdate=$,ne.type=Y}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xe(T){const B=T.target;B.removeEventListener("dispose",xe),Ie(B)}function Ie(T){Le(T),te.remove(T)}function Le(T){const B=te.get(T).programs;B!==void 0&&(B.forEach(function(q){oe.releaseProgram(q)}),T.isShaderMaterial&&oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,$,Y,Se){B===null&&(B=Ce);const Pe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=Ff(T,B,q,$,Y);z.setMaterial($,Pe);let Be=q.index,Ye=1;if($.wireframe===!0){if(Be=O.getWireframeAttribute(q),Be===void 0)return;Ye=2}const Ge=q.drawRange,ke=q.attributes.position;let pt=Ge.start*Ye,qt=(Ge.start+Ge.count)*Ye;Se!==null&&(pt=Math.max(pt,Se.start*Ye),qt=Math.min(qt,(Se.start+Se.count)*Ye)),Be!==null?(pt=Math.max(pt,0),qt=Math.min(qt,Be.count)):ke!=null&&(pt=Math.max(pt,0),qt=Math.min(qt,ke.count));const St=qt-pt;if(St<0||St===1/0)return;A.setup(Y,$,Ne,q,Be);let Rn,ut=De;if(Be!==null&&(Rn=k.get(Be),ut=Re,ut.setIndex(Rn)),Y.isMesh)$.wireframe===!0?(z.setLineWidth($.wireframeLinewidth*Ke()),ut.setMode(x.LINES)):ut.setMode(x.TRIANGLES);else if(Y.isLine){let qe=$.linewidth;qe===void 0&&(qe=1),z.setLineWidth(qe*Ke()),Y.isLineSegments?ut.setMode(x.LINES):Y.isLineLoop?ut.setMode(x.LINE_LOOP):ut.setMode(x.LINE_STRIP)}else Y.isPoints?ut.setMode(x.POINTS):Y.isSprite&&ut.setMode(x.TRIANGLES);if(Y.isBatchedMesh)ut.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ut.renderInstances(pt,St,Y.count);else if(q.isInstancedBufferGeometry){const qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,No=Math.min(q.instanceCount,qe);ut.renderInstances(pt,St,No)}else ut.render(pt,St)};function $e(T,B,q){T.transparent===!0&&T.side===$t&&T.forceSinglePass===!1?(T.side=Wt,T.needsUpdate=!0,pr(T,B,q),T.side=di,T.needsUpdate=!0,pr(T,B,q),T.side=$t):pr(T,B,q)}this.compile=function(T,B,q=null){q===null&&(q=T),m=_e.get(q),m.init(),E.push(m),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),T!==q&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(S._useLegacyLights);const $=new Set;return T.traverse(function(Y){const Se=Y.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Ne=Se[Pe];$e(Ne,q,Y),$.add(Ne)}else $e(Se,q,Y),$.add(Se)}),E.pop(),m=null,$},this.compileAsync=function(T,B,q=null){const $=this.compile(T,B,q);return new Promise(Y=>{function Se(){if($.forEach(function(Pe){te.get(Pe).currentProgram.isReady()&&$.delete(Pe)}),$.size===0){Y(T);return}setTimeout(Se,10)}F.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ze=null;function ht(T){Ze&&Ze(T)}function dt(){gt.stop()}function Qe(){gt.start()}const gt=new Mf;gt.setAnimationLoop(ht),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(T){Ze=T,ye.setAnimationLoop(T),T===null?gt.stop():gt.start()},ye.addEventListener("sessionstart",dt),ye.addEventListener("sessionend",Qe),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(B),B=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,B,R),m=_e.get(T,E.length),m.init(),E.push(m),we.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J.setFromProjectionMatrix(we),Me=this.localClippingEnabled,ae=Ee.init(this.clippingPlanes,Me),g=fe.get(T,f.length),g.init(),f.push(g),_n(T,B,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(K,ie),this.info.render.frame++,ae===!0&&Ee.beginShadows();const q=m.state.shadowsArray;if(ne.render(q,T,B),ae===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),He.render(g,T),m.setupLights(S._useLegacyLights),B.isArrayCamera){const $=B.cameras;for(let Y=0,Se=$.length;Y<Se;Y++){const Pe=$[Y];Ul(g,T,Pe,Pe.viewport)}}else Ul(g,T,B);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(S,T,B),A.resetDefaultState(),Z=-1,y=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function _n(T,B,q,$){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){$&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(we);const Pe=H.update(T),Ne=T.material;Ne.visible&&g.push(T,Pe,Ne,q,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){const Pe=H.update(T),Ne=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Oe.copy(Pe.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(we)),Array.isArray(Ne)){const Be=Pe.groups;for(let Ye=0,Ge=Be.length;Ye<Ge;Ye++){const ke=Be[Ye],pt=Ne[ke.materialIndex];pt&&pt.visible&&g.push(T,Pe,pt,q,Oe.z,ke)}}else Ne.visible&&g.push(T,Pe,Ne,q,Oe.z,null)}}const Se=T.children;for(let Pe=0,Ne=Se.length;Pe<Ne;Pe++)_n(Se[Pe],B,q,$)}function Ul(T,B,q,$){const Y=T.opaque,Se=T.transmissive,Pe=T.transparent;m.setupLightsView(q),ae===!0&&Ee.setGlobalState(S.clippingPlanes,q),Se.length>0&&Nf(Y,Se,B,q),$&&z.viewport(w.copy($)),Y.length>0&&dr(Y,B,q),Se.length>0&&dr(Se,B,q),Pe.length>0&&dr(Pe,B,q),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Nf(T,B,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const Se=X.isWebGL2;Te===null&&(Te=new on(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")?Yn:Xn,minFilter:or,samples:Se?4:0})),S.getDrawingBufferSize(Fe),Se?Te.setSize(Fe.x,Fe.y):Te.setSize(fo(Fe.x),fo(Fe.y));const Pe=S.getRenderTarget();S.setRenderTarget(Te),S.getClearColor(le),N=S.getClearAlpha(),N<1&&S.setClearColor(16777215,.5),S.clear();const Ne=S.toneMapping;S.toneMapping=hi,dr(T,q,$),M.updateMultisampleRenderTarget(Te),M.updateRenderTargetMipmap(Te);let Be=!1;for(let Ye=0,Ge=B.length;Ye<Ge;Ye++){const ke=B[Ye],pt=ke.object,qt=ke.geometry,St=ke.material,Rn=ke.group;if(St.side===$t&&pt.layers.test($.layers)){const ut=St.side;St.side=Wt,St.needsUpdate=!0,Il(pt,q,$,qt,St,Rn),St.side=ut,St.needsUpdate=!0,Be=!0}}Be===!0&&(M.updateMultisampleRenderTarget(Te),M.updateRenderTargetMipmap(Te)),S.setRenderTarget(Pe),S.setClearColor(le,N),S.toneMapping=Ne}function dr(T,B,q){const $=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Se=T.length;Y<Se;Y++){const Pe=T[Y],Ne=Pe.object,Be=Pe.geometry,Ye=$===null?Pe.material:$,Ge=Pe.group;Ne.layers.test(q.layers)&&Il(Ne,B,q,Be,Ye,Ge)}}function Il(T,B,q,$,Y,Se){T.onBeforeRender(S,B,q,$,Y,Se),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(S,B,q,$,T,Se),Y.transparent===!0&&Y.side===$t&&Y.forceSinglePass===!1?(Y.side=Wt,Y.needsUpdate=!0,S.renderBufferDirect(q,B,$,Y,T,Se),Y.side=di,Y.needsUpdate=!0,S.renderBufferDirect(q,B,$,Y,T,Se),Y.side=$t):S.renderBufferDirect(q,B,$,Y,T,Se),T.onAfterRender(S,B,q,$,Y,Se)}function pr(T,B,q){B.isScene!==!0&&(B=Ce);const $=te.get(T),Y=m.state.lights,Se=m.state.shadowsArray,Pe=Y.state.version,Ne=oe.getParameters(T,Y.state,Se,B,q),Be=oe.getProgramCacheKey(Ne);let Ye=$.programs;$.environment=T.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(T.isMeshStandardMaterial?C:v).get(T.envMap||$.environment),Ye===void 0&&(T.addEventListener("dispose",xe),Ye=new Map,$.programs=Ye);let Ge=Ye.get(Be);if(Ge!==void 0){if($.currentProgram===Ge&&$.lightsStateVersion===Pe)return Fl(T,Ne),Ge}else Ne.uniforms=oe.getUniforms(T),T.onBuild(q,Ne,S),T.onBeforeCompile(Ne,S),Ge=oe.acquireProgram(Ne,Be),Ye.set(Be,Ge),$.uniforms=Ne.uniforms;const ke=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=Ee.uniform),Fl(T,Ne),$.needsLights=Bf(T),$.lightsStateVersion=Pe,$.needsLights&&(ke.ambientLightColor.value=Y.state.ambient,ke.lightProbe.value=Y.state.probe,ke.directionalLights.value=Y.state.directional,ke.directionalLightShadows.value=Y.state.directionalShadow,ke.spotLights.value=Y.state.spot,ke.spotLightShadows.value=Y.state.spotShadow,ke.rectAreaLights.value=Y.state.rectArea,ke.ltc_1.value=Y.state.rectAreaLTC1,ke.ltc_2.value=Y.state.rectAreaLTC2,ke.pointLights.value=Y.state.point,ke.pointLightShadows.value=Y.state.pointShadow,ke.hemisphereLights.value=Y.state.hemi,ke.directionalShadowMap.value=Y.state.directionalShadowMap,ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ke.spotShadowMap.value=Y.state.spotShadowMap,ke.spotLightMatrix.value=Y.state.spotLightMatrix,ke.spotLightMap.value=Y.state.spotLightMap,ke.pointShadowMap.value=Y.state.pointShadowMap,ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=Ge,$.uniformsList=null,Ge}function Nl(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Zr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Fl(T,B){const q=te.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Ff(T,B,q,$,Y){B.isScene!==!0&&(B=Ce),M.resetTextureUnits();const Se=B.fog,Pe=$.isMeshStandardMaterial?B.environment:null,Ne=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Jn,Be=($.isMeshStandardMaterial?C:v).get($.envMap||Pe),Ye=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ke=!!q.morphAttributes.position,pt=!!q.morphAttributes.normal,qt=!!q.morphAttributes.color;let St=hi;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(St=S.toneMapping);const Rn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=Rn!==void 0?Rn.length:0,qe=te.get($),No=m.state.lights;if(ae===!0&&(Me===!0||T!==y)){const Jt=T===y&&$.id===Z;Ee.setState($,T,Jt)}let ft=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==No.state.version||qe.outputColorSpace!==Ne||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||qe.envMap!==Be||$.fog===!0&&qe.fog!==Se||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ee.numPlanes||qe.numIntersection!==Ee.numIntersection)||qe.vertexAlphas!==Ye||qe.vertexTangents!==Ge||qe.morphTargets!==ke||qe.morphNormals!==pt||qe.morphColors!==qt||qe.toneMapping!==St||X.isWebGL2===!0&&qe.morphTargetsCount!==ut)&&(ft=!0):(ft=!0,qe.__version=$.version);let pi=qe.currentProgram;ft===!0&&(pi=pr($,B,Y));let Ol=!1,Rs=!1,Fo=!1;const Pt=pi.getUniforms(),mi=qe.uniforms;if(z.useProgram(pi.program)&&(Ol=!0,Rs=!0,Fo=!0),$.id!==Z&&(Z=$.id,Rs=!0),Ol||y!==T){Pt.setValue(x,"projectionMatrix",T.projectionMatrix),Pt.setValue(x,"viewMatrix",T.matrixWorldInverse);const Jt=Pt.map.cameraPosition;Jt!==void 0&&Jt.setValue(x,Oe.setFromMatrixPosition(T.matrixWorld)),X.logarithmicDepthBuffer&&Pt.setValue(x,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Pt.setValue(x,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Rs=!0,Fo=!0)}if(Y.isSkinnedMesh){Pt.setOptional(x,Y,"bindMatrix"),Pt.setOptional(x,Y,"bindMatrixInverse");const Jt=Y.skeleton;Jt&&(X.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Pt.setValue(x,"boneTexture",Jt.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Pt.setOptional(x,Y,"batchingTexture"),Pt.setValue(x,"batchingTexture",Y._matricesTexture,M));const Oo=q.morphAttributes;if((Oo.position!==void 0||Oo.normal!==void 0||Oo.color!==void 0&&X.isWebGL2===!0)&&Ue.update(Y,q,pi),(Rs||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Pt.setValue(x,"receiveShadow",Y.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(mi.envMap.value=Be,mi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Rs&&(Pt.setValue(x,"toneMappingExposure",S.toneMappingExposure),qe.needsLights&&Of(mi,Fo),Se&&$.fog===!0&&re.refreshFogUniforms(mi,Se),re.refreshMaterialUniforms(mi,$,ee,G,Te),Zr.upload(x,Nl(qe),mi,M)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Zr.upload(x,Nl(qe),mi,M),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Pt.setValue(x,"center",Y.center),Pt.setValue(x,"modelViewMatrix",Y.modelViewMatrix),Pt.setValue(x,"normalMatrix",Y.normalMatrix),Pt.setValue(x,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Jt=$.uniformsGroups;for(let Bo=0,zf=Jt.length;Bo<zf;Bo++)if(X.isWebGL2){const Bl=Jt[Bo];de.update(Bl,pi),de.bind(Bl,pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pi}function Of(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Bf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,B,q){te.get(T.texture).__webglTexture=B,te.get(T.depthTexture).__webglTexture=q;const $=te.get(T);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=q===void 0,$.__autoAllocateDepthBuffer||F.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const q=te.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,q=0){R=T,L=B,P=q;let $=!0,Y=null,Se=!1,Pe=!1;if(T){const Be=te.get(T);Be.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(x.FRAMEBUFFER,null),$=!1):Be.__webglFramebuffer===void 0?M.setupRenderTarget(T):Be.__hasExternalTextures&&M.rebindTextures(T,te.get(T.texture).__webglTexture,te.get(T.depthTexture).__webglTexture);const Ye=T.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Pe=!0);const Ge=te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?Y=Ge[B][q]:Y=Ge[B],Se=!0):X.isWebGL2&&T.samples>0&&M.useMultisampledRTT(T)===!1?Y=te.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?Y=Ge[q]:Y=Ge,w.copy(T.viewport),W.copy(T.scissor),j=T.scissorTest}else w.copy(se).multiplyScalar(ee).floor(),W.copy(ue).multiplyScalar(ee).floor(),j=he;if(z.bindFramebuffer(x.FRAMEBUFFER,Y)&&X.drawBuffers&&$&&z.drawBuffers(T,Y),z.viewport(w),z.scissor(W),z.setScissorTest(j),Se){const Be=te.get(T.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+B,Be.__webglTexture,q)}else if(Pe){const Be=te.get(T.texture),Ye=B||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Be.__webglTexture,q||0,Ye)}Z=-1},this.readRenderTargetPixels=function(T,B,q,$,Y,Se,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){z.bindFramebuffer(x.FRAMEBUFFER,Ne);try{const Be=T.texture,Ye=Be.format,Ge=Be.type;if(Ye!==sn&&ge.convert(Ye)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Ge===Yn&&(F.has("EXT_color_buffer_half_float")||X.isWebGL2&&F.has("EXT_color_buffer_float"));if(Ge!==Xn&&ge.convert(Ge)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===ci&&(X.isWebGL2||F.has("OES_texture_float")||F.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-$&&q>=0&&q<=T.height-Y&&x.readPixels(B,q,$,Y,ge.convert(Ye),ge.convert(Ge),Se)}finally{const Be=R!==null?te.get(R).__webglFramebuffer:null;z.bindFramebuffer(x.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(T,B,q=0){const $=Math.pow(2,-q),Y=Math.floor(B.image.width*$),Se=Math.floor(B.image.height*$);M.setTexture2D(B,0),x.copyTexSubImage2D(x.TEXTURE_2D,q,0,0,T.x,T.y,Y,Se),z.unbindTexture()},this.copyTextureToTexture=function(T,B,q,$=0){const Y=B.image.width,Se=B.image.height,Pe=ge.convert(q.format),Ne=ge.convert(q.type);M.setTexture2D(q,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,q.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,$,T.x,T.y,Y,Se,Pe,Ne,B.image.data):B.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,$,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Pe,B.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,$,T.x,T.y,Pe,Ne,B.image),$===0&&q.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(T,B,q,$,Y=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=T.max.x-T.min.x+1,Pe=T.max.y-T.min.y+1,Ne=T.max.z-T.min.z+1,Be=ge.convert($.format),Ye=ge.convert($.type);let Ge;if($.isData3DTexture)M.setTexture3D($,0),Ge=x.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)M.setTexture2DArray($,0),Ge=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,$.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,$.unpackAlignment);const ke=x.getParameter(x.UNPACK_ROW_LENGTH),pt=x.getParameter(x.UNPACK_IMAGE_HEIGHT),qt=x.getParameter(x.UNPACK_SKIP_PIXELS),St=x.getParameter(x.UNPACK_SKIP_ROWS),Rn=x.getParameter(x.UNPACK_SKIP_IMAGES),ut=q.isCompressedTexture?q.mipmaps[Y]:q.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,ut.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ut.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,T.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,T.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,T.min.z),q.isDataTexture||q.isData3DTexture?x.texSubImage3D(Ge,Y,B.x,B.y,B.z,Se,Pe,Ne,Be,Ye,ut.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(Ge,Y,B.x,B.y,B.z,Se,Pe,Ne,Be,ut.data)):x.texSubImage3D(Ge,Y,B.x,B.y,B.z,Se,Pe,Ne,Be,Ye,ut),x.pixelStorei(x.UNPACK_ROW_LENGTH,ke),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,pt),x.pixelStorei(x.UNPACK_SKIP_PIXELS,qt),x.pixelStorei(x.UNPACK_SKIP_ROWS,St),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Rn),Y===0&&$.generateMipmaps&&x.generateMipmap(Ge),z.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),z.unbindTexture()},this.resetState=function(){L=0,P=0,R=null,z.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sl?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===Do?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?Ii:lf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ii?lt:Jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class LM extends Af{}LM.prototype.isWebGL1Renderer=!0;class Pl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new Pl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class DM extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class UM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ja,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new I;class go{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new go(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Jr extends ws{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let rs;const Ns=new I,os=new I,as=new I,ls=new me,Fs=new me,Rf=new vt,Vr=new I,Os=new I,kr=new I,Du=new me,Aa=new me,Uu=new me;class IM extends Tt{constructor(e=new Jr){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new Yt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new UM(t,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new go(i,3,0,!1)),rs.setAttribute("uv",new go(i,2,3,!1))}this.geometry=rs,this.material=e,this.center=new me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),Rf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),as.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-as.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Wr(Vr.set(-.5,-.5,0),as,a,os,s,r),Wr(Os.set(.5,-.5,0),as,a,os,s,r),Wr(kr.set(.5,.5,0),as,a,os,s,r),Du.set(0,0),Aa.set(1,0),Uu.set(1,1);let o=e.ray.intersectTriangle(Vr,Os,kr,!1,Ns);if(o===null&&(Wr(Os.set(-.5,.5,0),as,a,os,s,r),Aa.set(0,1),o=e.ray.intersectTriangle(Vr,kr,Os,!1,Ns),o===null))return;const l=e.ray.origin.distanceTo(Ns);l<e.near||l>e.far||t.push({distance:l,point:Ns.clone(),uv:tn.getInterpolation(Ns,Vr,Os,kr,Du,Aa,Uu,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Wr(n,e,t,i,s,r){ls.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Fs.x=r*ls.x-s*ls.y,Fs.y=s*ls.x+r*ls.y):Fs.copy(ls),n.copy(e),n.x+=Fs.x,n.y+=Fs.y,n.applyMatrix4(Rf)}class an extends Xt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _o extends Yt{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=At(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,h=new I,d=new me,p=new I,_=new I,g=new I;let m=0,f=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[E+1].x-e[E].x,f=e[E+1].y-e[E].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(_)}for(let E=0;E<=t;E++){const S=i+E*u*s,b=Math.sin(S),L=Math.cos(S);for(let P=0;P<=e.length-1;P++){h.x=e[P].x*b,h.y=e[P].y,h.z=e[P].x*L,a.push(h.x,h.y,h.z),d.x=E/t,d.y=P/(e.length-1),o.push(d.x,d.y);const R=l[3*P+0]*b,Z=l[3*P+1],y=l[3*P+0]*L;c.push(R,Z,y)}}for(let E=0;E<t;E++)for(let S=0;S<e.length-1;S++){const b=S+E*e.length,L=b,P=b+e.length,R=b+e.length+1,Z=b+1;r.push(L,P,Z),r.push(R,Z,P)}this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("uv",new ct(o,2)),this.setAttribute("normal",new ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.points,e.segments,e.phiStart,e.phiLength)}}class Zs extends Yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new I,u=new me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=i+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ri extends Yt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let _=0;const g=[],m=i/2;let f=0;E(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(p,2));function E(){const b=new I,L=new I;let P=0;const R=(t-e)/i;for(let Z=0;Z<=r;Z++){const y=[],w=Z/r,W=w*(t-e)+e;for(let j=0;j<=s;j++){const le=j/s,N=le*l+o,V=Math.sin(N),G=Math.cos(N);L.x=W*V,L.y=-w*i+m,L.z=W*G,h.push(L.x,L.y,L.z),b.set(V,R,G).normalize(),d.push(b.x,b.y,b.z),p.push(le,1-w),y.push(_++)}g.push(y)}for(let Z=0;Z<s;Z++)for(let y=0;y<r;y++){const w=g[y][Z],W=g[y+1][Z],j=g[y+1][Z+1],le=g[y][Z+1];u.push(w,W,le),u.push(W,j,le),P+=6}c.addGroup(f,P,0),f+=P}function S(b){const L=_,P=new me,R=new I;let Z=0;const y=b===!0?e:t,w=b===!0?1:-1;for(let j=1;j<=s;j++)h.push(0,m*w,0),d.push(0,w,0),p.push(.5,.5),_++;const W=_;for(let j=0;j<=s;j++){const N=j/s*l+o,V=Math.cos(N),G=Math.sin(N);R.x=y*G,R.y=m*w,R.z=y*V,h.push(R.x,R.y,R.z),d.push(0,w,0),P.x=V*.5+.5,P.y=G*.5*w+.5,p.push(P.x,P.y),_++}for(let j=0;j<s;j++){const le=L+j,N=W+j;b===!0?u.push(N,N+1,le):u.push(N+1,N,le),Z+=3}c.addGroup(f,Z,b===!0?1:2),f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vo extends Ri{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new vo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ll extends Yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,d=new I,p=[],_=[],g=[],m=[];for(let f=0;f<=i;f++){const E=[],S=f/i;let b=0;f===0&&a===0?b=.5/t:f===i&&l===Math.PI&&(b=-.5/t);for(let L=0;L<=t;L++){const P=L/t;h.x=-e*Math.cos(s+P*r)*Math.sin(a+S*o),h.y=e*Math.cos(a+S*o),h.z=e*Math.sin(s+P*r)*Math.sin(a+S*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(P+b,1-S),E.push(c++)}u.push(E)}for(let f=0;f<i;f++)for(let E=0;E<t;E++){const S=u[f][E+1],b=u[f][E],L=u[f+1][E],P=u[f+1][E+1];(f!==0||a>0)&&p.push(S,b,P),(f!==i-1||l<Math.PI)&&p.push(b,L,P)}this.setIndex(p),this.setAttribute("position",new ct(_,3)),this.setAttribute("normal",new ct(g,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ds extends Yt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new I,h=new I,d=new I;for(let p=0;p<=i;p++)for(let _=0;_<=s;_++){const g=_/s*r,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=s;_++){const g=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,f=(s+1)*(p-1)+_,E=(s+1)*p+_;a.push(g,m,E),a.push(m,f,E)}this.setIndex(a),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Gt extends ws{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dl extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class NM extends Dl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ra=new vt,Iu=new I,Nu=new I;class FM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Iu),Nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nu),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class OM extends FM{constructor(){super(new Rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ca extends Dl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new OM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class BM extends Dl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fu(){return(typeof performance>"u"?Date:performance).now()}class zM{constructor(e,t,i=0,s=1/0){this.ray=new bl(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Qa(e,this,i,t),i.sort(Ou),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Qa(e[s],this,i,t);return i.sort(Ou),i}}function Ou(n,e){return n.distance-e.distance}function Qa(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,a=s.length;r<a;r++)Qa(s[r],e,t,!0)}}class Bu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);const zu={type:"change"},Pa={type:"start"},Hu={type:"end"},Xr=new bl,Gu=new zn,HM=Math.cos(70*us.DEG2RAD);class GM extends Bi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",_e),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(zu),i.update(),r=s.NONE},this.update=function(){const A=new I,de=new Fi().setFromUnitVectors(e.up,new I(0,1,0)),Ae=de.clone().invert(),ye=new I,ce=new Fi,D=new I,pe=2*Math.PI;return function(Ie=null){const Le=i.object.position;A.copy(Le).sub(i.target),A.applyQuaternion(de),o.setFromVector3(A),i.autoRotate&&r===s.NONE&&j(w(Ie)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let $e=i.minAzimuthAngle,Ze=i.maxAzimuthAngle;isFinite($e)&&isFinite(Ze)&&($e<-Math.PI?$e+=pe:$e>Math.PI&&($e-=pe),Ze<-Math.PI?Ze+=pe:Ze>Math.PI&&(Ze-=pe),$e<=Ze?o.theta=Math.max($e,Math.min(Ze,o.theta)):o.theta=o.theta>($e+Ze)/2?Math.max($e,o.theta):Math.min(Ze,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&P||i.object.isOrthographicCamera?o.radius=se(o.radius):o.radius=se(o.radius*c),A.setFromSpherical(o),A.applyQuaternion(Ae),Le.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ht=!1;if(i.zoomToCursor&&P){let dt=null;if(i.object.isPerspectiveCamera){const Qe=A.length();dt=se(Qe*c);const gt=Qe-dt;i.object.position.addScaledVector(b,gt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Qe=new I(L.x,L.y,0);Qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ht=!0;const gt=new I(L.x,L.y,0);gt.unproject(i.object),i.object.position.sub(gt).add(Qe),i.object.updateMatrixWorld(),dt=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;dt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(dt).add(i.object.position):(Xr.origin.copy(i.object.position),Xr.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Xr.direction))<HM?e.lookAt(i.target):(Gu.setFromNormalAndCoplanarPoint(i.object.up,i.target),Xr.intersectPlane(Gu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ht=!0);return c=1,P=!1,ht||ye.distanceToSquared(i.object.position)>a||8*(1-ce.dot(i.object.quaternion))>a||D.distanceToSquared(i.target)>0?(i.dispatchEvent(zu),ye.copy(i.object.position),ce.copy(i.object.quaternion),D.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",He),i.domElement.removeEventListener("pointerdown",M),i.domElement.removeEventListener("pointercancel",C),i.domElement.removeEventListener("wheel",H),i.domElement.removeEventListener("pointermove",v),i.domElement.removeEventListener("pointerup",C),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_e),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new Bu,l=new Bu;let c=1;const u=new I,h=new me,d=new me,p=new me,_=new me,g=new me,m=new me,f=new me,E=new me,S=new me,b=new I,L=new me;let P=!1;const R=[],Z={};let y=!1;function w(A){return A!==null?2*Math.PI/60*i.autoRotateSpeed*A:2*Math.PI/60/60*i.autoRotateSpeed}function W(A){const de=Math.abs(A*.01);return Math.pow(.95,i.zoomSpeed*de)}function j(A){l.theta-=A}function le(A){l.phi-=A}const N=function(){const A=new I;return function(Ae,ye){A.setFromMatrixColumn(ye,0),A.multiplyScalar(-Ae),u.add(A)}}(),V=function(){const A=new I;return function(Ae,ye){i.screenSpacePanning===!0?A.setFromMatrixColumn(ye,1):(A.setFromMatrixColumn(ye,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(Ae),u.add(A)}}(),G=function(){const A=new I;return function(Ae,ye){const ce=i.domElement;if(i.object.isPerspectiveCamera){const D=i.object.position;A.copy(D).sub(i.target);let pe=A.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),N(2*Ae*pe/ce.clientHeight,i.object.matrix),V(2*ye*pe/ce.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(N(Ae*(i.object.right-i.object.left)/i.object.zoom/ce.clientWidth,i.object.matrix),V(ye*(i.object.top-i.object.bottom)/i.object.zoom/ce.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ee(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(A){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(A,de){if(!i.zoomToCursor)return;P=!0;const Ae=i.domElement.getBoundingClientRect(),ye=A-Ae.left,ce=de-Ae.top,D=Ae.width,pe=Ae.height;L.x=ye/D*2-1,L.y=-(ce/pe)*2+1,b.set(L.x,L.y,1).unproject(i.object).sub(i.object.position).normalize()}function se(A){return Math.max(i.minDistance,Math.min(i.maxDistance,A))}function ue(A){h.set(A.clientX,A.clientY)}function he(A){ie(A.clientX,A.clientX),f.set(A.clientX,A.clientY)}function J(A){_.set(A.clientX,A.clientY)}function ae(A){d.set(A.clientX,A.clientY),p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const de=i.domElement;j(2*Math.PI*p.x/de.clientHeight),le(2*Math.PI*p.y/de.clientHeight),h.copy(d),i.update()}function Me(A){E.set(A.clientX,A.clientY),S.subVectors(E,f),S.y>0?ee(W(S.y)):S.y<0&&K(W(S.y)),f.copy(E),i.update()}function Te(A){g.set(A.clientX,A.clientY),m.subVectors(g,_).multiplyScalar(i.panSpeed),G(m.x,m.y),_.copy(g),i.update()}function we(A){ie(A.clientX,A.clientY),A.deltaY<0?K(W(A.deltaY)):A.deltaY>0&&ee(W(A.deltaY)),i.update()}function Fe(A){let de=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?le(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),de=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?le(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),de=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),de=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),de=!0;break}de&&(A.preventDefault(),i.update())}function Oe(A){if(R.length===1)h.set(A.pageX,A.pageY);else{const de=ge(A),Ae=.5*(A.pageX+de.x),ye=.5*(A.pageY+de.y);h.set(Ae,ye)}}function Ce(A){if(R.length===1)_.set(A.pageX,A.pageY);else{const de=ge(A),Ae=.5*(A.pageX+de.x),ye=.5*(A.pageY+de.y);_.set(Ae,ye)}}function Ke(A){const de=ge(A),Ae=A.pageX-de.x,ye=A.pageY-de.y,ce=Math.sqrt(Ae*Ae+ye*ye);f.set(0,ce)}function x(A){i.enableZoom&&Ke(A),i.enablePan&&Ce(A)}function U(A){i.enableZoom&&Ke(A),i.enableRotate&&Oe(A)}function F(A){if(R.length==1)d.set(A.pageX,A.pageY);else{const Ae=ge(A),ye=.5*(A.pageX+Ae.x),ce=.5*(A.pageY+Ae.y);d.set(ye,ce)}p.subVectors(d,h).multiplyScalar(i.rotateSpeed);const de=i.domElement;j(2*Math.PI*p.x/de.clientHeight),le(2*Math.PI*p.y/de.clientHeight),h.copy(d)}function X(A){if(R.length===1)g.set(A.pageX,A.pageY);else{const de=ge(A),Ae=.5*(A.pageX+de.x),ye=.5*(A.pageY+de.y);g.set(Ae,ye)}m.subVectors(g,_).multiplyScalar(i.panSpeed),G(m.x,m.y),_.copy(g)}function z(A){const de=ge(A),Ae=A.pageX-de.x,ye=A.pageY-de.y,ce=Math.sqrt(Ae*Ae+ye*ye);E.set(0,ce),S.set(0,Math.pow(E.y/f.y,i.zoomSpeed)),ee(S.y),f.copy(E);const D=(A.pageX+de.x)*.5,pe=(A.pageY+de.y)*.5;ie(D,pe)}function Q(A){i.enableZoom&&z(A),i.enablePan&&X(A)}function te(A){i.enableZoom&&z(A),i.enableRotate&&F(A)}function M(A){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",v),i.domElement.addEventListener("pointerup",C)),Ue(A),A.pointerType==="touch"?Ee(A):k(A))}function v(A){i.enabled!==!1&&(A.pointerType==="touch"?ne(A):O(A))}function C(A){De(A),R.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",v),i.domElement.removeEventListener("pointerup",C)),i.dispatchEvent(Hu),r=s.NONE}function k(A){let de;switch(A.button){case 0:de=i.mouseButtons.LEFT;break;case 1:de=i.mouseButtons.MIDDLE;break;case 2:de=i.mouseButtons.RIGHT;break;default:de=-1}switch(de){case Gi.DOLLY:if(i.enableZoom===!1)return;he(A),r=s.DOLLY;break;case Gi.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;J(A),r=s.PAN}else{if(i.enableRotate===!1)return;ue(A),r=s.ROTATE}break;case Gi.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;ue(A),r=s.ROTATE}else{if(i.enablePan===!1)return;J(A),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Pa)}function O(A){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;ae(A);break;case s.DOLLY:if(i.enableZoom===!1)return;Me(A);break;case s.PAN:if(i.enablePan===!1)return;Te(A);break}}function H(A){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(A.preventDefault(),i.dispatchEvent(Pa),we(oe(A)),i.dispatchEvent(Hu))}function oe(A){const de=A.deltaMode,Ae={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(de){case 1:Ae.deltaY*=16;break;case 2:Ae.deltaY*=100;break}return A.ctrlKey&&!y&&(Ae.deltaY*=10),Ae}function re(A){A.key==="Control"&&(y=!0,document.addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(A){A.key==="Control"&&(y=!1,document.removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function _e(A){i.enabled===!1||i.enablePan===!1||Fe(A)}function Ee(A){switch(Re(A),R.length){case 1:switch(i.touches.ONE){case Vi.ROTATE:if(i.enableRotate===!1)return;Oe(A),r=s.TOUCH_ROTATE;break;case Vi.PAN:if(i.enablePan===!1)return;Ce(A),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Vi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;x(A),r=s.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;U(A),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Pa)}function ne(A){switch(Re(A),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;F(A),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;X(A),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Q(A),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;te(A),i.update();break;default:r=s.NONE}}function He(A){i.enabled!==!1&&A.preventDefault()}function Ue(A){R.push(A.pointerId)}function De(A){delete Z[A.pointerId];for(let de=0;de<R.length;de++)if(R[de]==A.pointerId){R.splice(de,1);return}}function Re(A){let de=Z[A.pointerId];de===void 0&&(de=new me,Z[A.pointerId]=de),de.set(A.pageX,A.pageY)}function ge(A){const de=A.pointerId===R[0]?R[1]:R[0];return Z[de]}i.domElement.addEventListener("contextmenu",He),i.domElement.addEventListener("pointerdown",M),i.domElement.addEventListener("pointercancel",C),i.domElement.addEventListener("wheel",H,{passive:!1}),document.addEventListener("keydown",re,{passive:!0,capture:!0}),this.update()}}const Pf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class fr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const VM=new Rl(-1,1,1,-1,0,1);class kM extends Yt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}}const WM=new kM;class Lf{constructor(e){this._mesh=new Je(WM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,VM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Df extends fr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mo.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Lf(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vu extends fr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class XM extends fr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class YM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new me);this._width=i.width,this._height=i.height,t=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Df(Pf),this.copyPass.material.blending=Wn,this.clock=new Cf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Vu!==void 0&&(a instanceof Vu?i=!0:a instanceof XM&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qM extends fr{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const jM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ts extends fr{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new me(e.x,e.y):new me(256,256),this.clearColor=new We(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,a,{type:Yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new on(r,a,{type:Yn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new on(r,a,{type:Yn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=jM;this.highPassUniforms=mo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new me(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Pf;this.copyUniforms=mo.clone(u.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Gn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new We,this.oldClearAlpha=1,this.basic=new wi,this.fsQuad=new Lf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new me(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ts.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ts.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Rt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new me(.5,.5)},direction:{value:new me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ts.BlurDirectionX=new me(1,0);Ts.BlurDirectionY=new me(0,1);const Bs=new I;function en(n,e,t,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Bs.copy(e),Bs[i]=0,Bs.normalize();const c=.5*a/(a+o),u=1-Bs.angleTo(n)/l;return Math.sign(Bs[t])===1?u*c:o/(a+o)+c+c*(1-u)}class ku extends zi{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,_=new I,g=.5/s;for(let m=0,f=0;m<u.length;m+=3,f+=2)switch(o.fromArray(u,m),l.copy(o),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[m+0]=c.x*Math.sign(o.x)+l.x*r,u[m+1]=c.y*Math.sign(o.y)+l.y*r,u[m+2]=c.z*Math.sign(o.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/p)){case 0:_.set(1,0,0),d[f+0]=en(_,l,"z","y",r,i),d[f+1]=1-en(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),d[f+0]=1-en(_,l,"z","y",r,i),d[f+1]=1-en(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),d[f+0]=1-en(_,l,"x","z",r,e),d[f+1]=en(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),d[f+0]=1-en(_,l,"x","z",r,e),d[f+1]=1-en(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),d[f+0]=1-en(_,l,"x","y",r,e),d[f+1]=1-en(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),d[f+0]=en(_,l,"x","y",r,e),d[f+1]=1-en(_,l,"y","x",r,t);break}}}const KM=`varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vViewDir;
varying vec2 vUv;
varying vec4 vProjected;

void main() {
  vUv = uv;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vNormal = normalize(mat3(modelMatrix) * normal);
  vViewDir = normalize(cameraPosition - worldPos.xyz);
  vec4 mv = viewMatrix * worldPos;
  vProjected = projectionMatrix * mv;
  gl_Position = vProjected;
}
`,$M=`uniform float uTime;
uniform vec3 uSunDir;
uniform sampler2D uSceneTex;
uniform vec2 uResolution;
uniform float uIOR;
uniform float uAberration;
uniform float uFresnelPower;
uniform float uMagnify;

varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vViewDir;
varying vec2 vUv;
varying vec4 vProjected;

vec3 sampleFakeEnv(vec3 dir) {
  float y = dir.y * 0.5 + 0.5;
  vec3 sky = mix(vec3(0.92, 0.62, 0.35), vec3(0.45, 0.68, 0.95), smoothstep(0.3, 0.95, y));
  vec3 ground = vec3(0.28, 0.18, 0.10);
  vec3 col = mix(ground, sky, smoothstep(-0.25, 0.4, dir.y));
  float sun = pow(max(dot(normalize(dir), normalize(uSunDir)), 0.0), 64.0);
  col += vec3(1.0, 0.88, 0.55) * sun * 1.8;
  return col;
}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(vViewDir);
  float ndotv = clamp(dot(N, V), 0.0, 1.0);
  float fresnel = pow(1.0 - ndotv, uFresnelPower);

  // Screen UV of this fragment
  vec2 screenUv = (vProjected.xy / vProjected.w) * 0.5 + 0.5;

  // Magnification + refraction offset (pull toward lens center in screen space)
  vec2 center = vec2(0.5);
  // Use normal XY as refraction bend
  vec2 bend = N.xy * (0.12 + uMagnify * 0.08);
  // Barrel-style magnify toward center of lens UV
  vec2 fromC = vUv - 0.5;
  float r = length(fromC);
  float mag = 1.0 - uMagnify * 0.35 * (1.0 - smoothstep(0.0, 0.5, r));
  vec2 magUv = 0.5 + fromC * mag;

  vec2 baseOff = bend + (magUv - vUv) * 0.55;

  vec2 uvR = clamp(screenUv + baseOff * (1.0 + uAberration * 2.0), vec2(0.001), vec2(0.999));
  vec2 uvG = clamp(screenUv + baseOff, vec2(0.001), vec2(0.999));
  vec2 uvB = clamp(screenUv + baseOff * (1.0 - uAberration * 2.0), vec2(0.001), vec2(0.999));

  float sr = texture2D(uSceneTex, uvR).r;
  float sg = texture2D(uSceneTex, uvG).g;
  float sb = texture2D(uSceneTex, uvB).b;
  vec3 refractedScene = vec3(sr, sg, sb);

  // Fallback env mix for edges / missing sample richness
  vec3 refrR = refract(-V, N, 1.0 / (uIOR - uAberration));
  vec3 refrG = refract(-V, N, 1.0 / uIOR);
  vec3 refrB = refract(-V, N, 1.0 / (uIOR + uAberration));
  vec3 envRefr = vec3(
    sampleFakeEnv(normalize(mix(-V, refrR, 0.9))).r,
    sampleFakeEnv(normalize(mix(-V, refrG, 0.9))).g,
    sampleFakeEnv(normalize(mix(-V, refrB, 0.9))).b
  );

  vec3 refracted = mix(envRefr, refractedScene, 0.82);
  vec3 reflected = sampleFakeEnv(reflect(-V, N));

  // Internal reflection highlight from sun (thick glass feel)
  vec3 glass = mix(refracted, reflected, fresnel * 0.75);
  float rim = smoothstep(0.42, 0.92, length(vUv - 0.5) * 2.0);
  glass = mix(glass, glass * vec3(0.88, 0.96, 1.05), rim * 0.2);
  glass += vec3(0.12, 0.16, 0.22) * fresnel;

  // Primary sun specular + secondary internal bounce
  vec3 H = normalize(normalize(uSunDir) + V);
  float spec = pow(max(dot(N, H), 0.0), 120.0);
  float internal = pow(max(dot(N, normalize(uSunDir)), 0.0), 8.0) * fresnel;
  glass += vec3(1.0, 0.96, 0.85) * spec * 1.15;
  glass += vec3(1.0, 0.9, 0.7) * internal * 0.35;

  // Slight thickness parallax tint
  float thick = pow(1.0 - ndotv, 2.0);
  glass *= mix(vec3(1.0), vec3(0.92, 0.97, 1.02), thick * 0.35);

  float alpha = mix(0.28, 0.62, fresnel) + rim * 0.06;
  gl_FragColor = vec4(glass, clamp(alpha, 0.22, 0.78));
}
`,ZM=`uniform float uTime;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;
varying float vCurl;

void main() {
  vUv = uv;
  vec3 pos = position;

  // Subtle corner curl / soft warp so paper isn't a dead plane
  float cx = abs(uv.x - 0.5) * 2.0;
  float cy = abs(uv.y - 0.5) * 2.0;
  float corner = pow(cx * cy, 1.35);
  float edge = pow(max(cx, cy), 2.2);
  float curl = corner * 0.028 + edge * 0.01;
  // Gentle breathing when hot areas exist (driven softly by time)
  curl += sin(uv.x * 6.0 + uTime * 0.4) * 0.0015 * edge;
  pos.z += curl;
  vCurl = curl;

  vec4 wp = modelMatrix * vec4(pos, 1.0);
  vWorldPos = wp.xyz;
  // Approximate normal from curl gradient
  vec3 n = normal;
  n.x += (uv.x - 0.5) * corner * 0.35;
  n.y += (uv.y - 0.5) * corner * 0.35;
  vNormal = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,JM=`uniform sampler2D uHeatMap;
uniform sampler2D uFiber;
uniform sampler2D uNormalMap;
uniform sampler2D uRoughMap;
uniform float uTime;
uniform vec3 uSunDir;
uniform vec2 uFocusUV;
uniform float uFocusIntensity;
uniform float uIgnited;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vWorldPos;
varying float vCurl;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.05;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = vUv;
  float heatRaw = texture2D(uHeatMap, uv).r;
  // Organic irregular burn front
  float nEdge = fbm(uv * 18.0 + heatRaw * 3.0);
  float nFine = fbm(uv * 48.0 - heatRaw * 2.0);
  float heat = heatRaw * (0.82 + nEdge * 0.28 + nFine * 0.08);
  heat = clamp(heat, 0.0, 1.0);

  vec3 fiber = texture2D(uFiber, uv * 1.15).rgb;
  vec3 nTex = texture2D(uNormalMap, uv * 1.15).xyz * 2.0 - 1.0;
  float rough = texture2D(uRoughMap, uv * 1.15).r;

  vec3 N = normalize(vNormal);
  N = normalize(N + vec3(nTex.xy * 0.35, 0.0));

  // Cream paper base with fiber
  vec3 paper = fiber * vec3(1.01, 0.99, 0.96);
  paper = mix(paper, vec3(0.94, 0.90, 0.82), 0.25);

  vec3 L = normalize(uSunDir);
  float ndl = max(dot(N, L), 0.0);
  float wrap = max(dot(N, L) * 0.5 + 0.5, 0.0);
  float hemi = 0.38 + wrap * 0.42 + ndl * 0.35;
  // Specular-ish sheen from roughness map
  vec3 H = normalize(L + normalize(cameraPosition - vWorldPos));
  float spec = pow(max(dot(N, H), 0.0), mix(28.0, 8.0, rough)) * (1.0 - rough) * 0.18;
  paper *= hemi;
  paper += vec3(1.0, 0.95, 0.85) * spec;

  // Soft stages with ash rim
  vec3 warm = mix(paper, vec3(0.96, 0.74, 0.48), smoothstep(0.04, 0.22, heat));
  vec3 brown = mix(warm, vec3(0.48, 0.26, 0.12), smoothstep(0.2, 0.48, heat));
  // Ash grey rim before deep char
  float ashMask = smoothstep(0.42, 0.62, heat) * (1.0 - smoothstep(0.62, 0.82, heat));
  vec3 ash = vec3(0.42, 0.40, 0.38);
  vec3 mid = mix(brown, ash, ashMask * 0.85);
  vec3 charred = mix(mid, vec3(0.035, 0.028, 0.022), smoothstep(0.55, 0.88, heat));

  // Ember veins (noise-driven, not uniform glow)
  float ember = smoothstep(0.72, 0.98, heat);
  float vein = fbm(uv * 55.0 + uTime * 0.8);
  float flicker = 0.55 + 0.45 * sin(uTime * 14.0 + heat * 50.0 + hash(uv * 90.0) * 6.28);
  float veinMask = smoothstep(0.45, 0.75, vein) * ember;
  vec3 emberCol = vec3(1.0, 0.28, 0.04) * veinMask * flicker * 2.2;
  emberCol += vec3(1.0, 0.55, 0.1) * ember * flicker * 0.55 * (0.4 + vein);
  vec3 col = charred + emberCol;

  // Progressive frayed hole — irregular alpha edge
  float holeNoise = fbm(uv * 32.0 + 4.0);
  float holeThresh = 0.90 - holeNoise * 0.08;
  float hole = smoothstep(holeThresh - 0.06, holeThresh + 0.02, heat) * uIgnited;
  // Frayed alpha: noisy edge rather than clean circle
  float fray = fbm(uv * 70.0);
  float alpha = 1.0 - hole * (0.92 + fray * 0.08);
  // Char lip around hole
  float lip = smoothstep(0.0, 0.25, hole) * (1.0 - hole);
  col = mix(col, vec3(0.02, 0.015, 0.01), hole);
  col += vec3(0.9, 0.25, 0.05) * lip * flicker * 0.8;

  // Soft focus highlight on paper
  float d = distance(uv, uFocusUV);
  float spot = exp(-d * d * 700.0) * uFocusIntensity;
  float ring = exp(-pow(d - 0.028, 2.0) * 5000.0) * uFocusIntensity * 0.35;
  col += vec3(1.0, 0.92, 0.62) * (spot * 0.45 + ring * 0.25);

  // Tiny AO from curl (edges slightly darker underneath feel)
  col *= 1.0 - vCurl * 4.0;

  gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
}
`,QM=`varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,eS=`uniform float uIntensity;
uniform float uTime;
uniform float uRadius;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

void main() {
  vec2 p = (vUv - 0.5) / max(uRadius, 0.001);
  float d = length(p);

  // Heat shimmer distortion
  float shim = noise(p * 6.0 + vec2(uTime * 1.3, -uTime * 0.9)) * 0.04;
  d += shim;

  float core = exp(-d * d * 18.0);
  float ring1 = exp(-pow(d - 0.28, 2.0) * 55.0) * 0.55;
  float ring2 = exp(-pow(d - 0.48, 2.0) * 70.0) * 0.28;
  float ring3 = exp(-pow(d - 0.62, 2.0) * 90.0) * 0.12;

  // Noisy caustic cells
  float cells = noise(p * 9.0 + uTime * 0.4) * noise(p * 14.0 - uTime * 0.25);
  float caust = core * (0.75 + cells * 0.55) + ring1 + ring2 + ring3;

  float flicker = 0.88 + 0.12 * sin(uTime * 11.0 + d * 25.0);
  float a = caust * uIntensity * flicker;
  vec3 col = vec3(1.0, 0.93, 0.68) * a;
  col += vec3(1.0, 0.75, 0.35) * core * uIntensity * 0.35;

  gl_FragColor = vec4(col, clamp(a * 0.95, 0.0, 1.0));
}
`,tS=`varying float vY;
varying vec2 vUv;
void main() {
  vUv = uv;
  vY = uv.y;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,nS=`uniform float uIntensity;
uniform float uTime;
varying float vY;
varying vec2 vUv;

void main() {
  float radial = 1.0 - abs(vUv.x - 0.5) * 2.0;
  float shaft = pow(max(radial, 0.0), 1.8);
  float along = pow(1.0 - vY, 1.2);
  float dust = 0.85 + 0.15 * sin(uTime * 3.0 + vY * 20.0 + vUv.x * 30.0);
  float a = shaft * along * uIntensity * 0.42 * dust;
  // Soft god-ray falloff at edges
  a *= smoothstep(0.0, 0.15, radial);
  vec3 col = vec3(1.0, 0.9, 0.62) * a;
  gl_FragColor = vec4(col, a);
}
`;class iS{constructor(e=256){be(this,"size");be(this,"canvas");be(this,"ctx");be(this,"texture");be(this,"data");be(this,"ignited",!1);this.size=e,this.canvas=document.createElement("canvas"),this.canvas.width=e,this.canvas.height=e;const t=this.canvas.getContext("2d",{willReadFrequently:!0});if(!t)throw new Error("2d context unavailable");this.ctx=t,this.data=new Float32Array(e*e),this.texture=null}attachTexture(e){this.texture=e}reset(){this.data.fill(0),this.ignited=!1,this.ctx.clearRect(0,0,this.size,this.size),this.texture&&(this.texture.needsUpdate=!0)}setIgnited(e){this.ignited=e}accumulate(e,t,i,s,r){if(!r)return this.maxHeat();const a=Math.floor(e*(this.size-1)),o=Math.floor(t*(this.size-1));if(a<3||o<3||a>=this.size-3||o>=this.size-3)return this.maxHeat();const c=.28*(s*s),u=.012*i,h=11,d=this.maxHeat(),p=.65+Math.pow(d,1.6)*.9;for(let _=-h;_<=h;_++)for(let g=-h;g<=h;g++){const m=a+g,f=o+_;if(m<0||f<0||m>=this.size||f>=this.size)continue;const E=Math.sqrt(g*g+_*_)/h;if(E>1)continue;const S=Math.exp(-E*E*4.5),b=Math.exp(-E*E*1.4)*.22,L=S+b,P=f*this.size+m;let R=this.data[P];R+=c*p*L*i,R=Math.max(0,R-u*(1-S*.7)),this.data[P]=Math.min(1,R)}if(s<.35){const _=i*.012;for(let g=0;g<this.data.length;g++)this.data[g]=Math.max(0,this.data[g]-_)}return this.ignited&&this.expandChar(i),this.flush(),this.maxHeat()}expandChar(e){const t=new Float32Array(this.data),i=this.size;for(let s=1;s<i-1;s++)for(let r=1;r<i-1;r++){const a=s*i+r;if(this.data[a]<.7)continue;const o=.08*e;t[a-1]=Math.min(1,Math.max(t[a-1],this.data[a]*.15)+o*this.data[a]),t[a+1]=Math.min(1,Math.max(t[a+1],this.data[a]*.15)+o*this.data[a]),t[a-i]=Math.min(1,Math.max(t[a-i],this.data[a]*.15)+o*this.data[a]),t[a+i]=Math.min(1,Math.max(t[a+i],this.data[a]*.15)+o*this.data[a])}this.data=t}maxHeat(){let e=0;for(let t=0;t<this.data.length;t++)e=Math.max(e,this.data[t]);return e}flush(){const e=this.ctx.createImageData(this.size,this.size);for(let t=0;t<this.data.length;t++){const i=Math.min(255,Math.floor(this.data[t]*255)),s=t*4;e.data[s]=i,e.data[s+1]=i,e.data[s+2]=i,e.data[s+3]=255}this.ctx.putImageData(e,0,0),this.texture&&(this.texture.needsUpdate=!0)}}class Js{constructor(){be(this,"group",new Ai);be(this,"pool",[]);be(this,"meshes",[]);be(this,"flameMat");be(this,"smokeMat");be(this,"sparkMat");be(this,"spawnAcc",0);be(this,"origin",new I);be(this,"burning",!1);be(this,"audioCtx",null);be(this,"crackleNode",null);be(this,"crackleGain",null);const e=Js.makeFlameTexture(),t=Js.makeSmokeTexture(),i=Js.makeSparkTexture();this.flameMat=new Jr({map:e,transparent:!0,depthWrite:!1,blending:Gn,color:16750916}),this.smokeMat=new Jr({map:t,transparent:!0,depthWrite:!1,opacity:.4,color:10132122}),this.sparkMat=new Jr({map:i,transparent:!0,depthWrite:!1,blending:Gn,color:16764006});for(let s=0;s<96;s++){const r=s<40?"flame":s<78?"smoke":"spark",a=r==="flame"?this.flameMat:r==="smoke"?this.smokeMat:this.sparkMat,o=new IM(a.clone());o.visible=!1,o.scale.setScalar(.05),this.group.add(o),this.meshes.push(o),this.pool.push({active:!1,life:0,maxLife:1,pos:new I,vel:new I,size:.05,kind:r,phase:Math.random()*Math.PI*2})}}static makeFlameTexture(){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");t.clearRect(0,0,128,128);for(let s=0;s<5;s++){const r=90-s*12,a=28-s*4,o=36-s*5,l=t.createRadialGradient(64,r,2,64,r,a),c=.55-s*.08;l.addColorStop(0,`rgba(255, 250, 200, ${c})`),l.addColorStop(.35,`rgba(255, 160, 40, ${c*.85})`),l.addColorStop(.7,`rgba(255, 60, 10, ${c*.4})`),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.beginPath(),t.ellipse(64,r,a,o,0,0,Math.PI*2),t.fill()}const i=new an(e);return i.needsUpdate=!0,i}static makeSmokeTexture(){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");for(let s=0;s<6;s++){const r=50+s%3*14,a=50+Math.floor(s/3)*18,o=t.createRadialGradient(r,a,4,r,a,36);o.addColorStop(0,"rgba(120,120,120,0.35)"),o.addColorStop(.5,"rgba(80,80,80,0.14)"),o.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=o,t.fillRect(0,0,128,128)}return new an(e)}static makeSparkTexture(){const e=document.createElement("canvas");e.width=e.height=32;const t=e.getContext("2d"),i=t.createRadialGradient(16,16,.5,16,16,14);return i.addColorStop(0,"rgba(255,240,180,1)"),i.addColorStop(.3,"rgba(255,160,40,0.8)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,32,32),new an(e)}setOrigin(e){this.origin.copy(e)}setBurning(e){if(this.burning=e,e)this.startCrackle();else{for(let t=0;t<this.pool.length;t++)this.pool[t].active=!1,this.meshes[t].visible=!1;this.stopCrackle()}}startCrackle(){try{this.audioCtx||(this.audioCtx=new AudioContext);const e=this.audioCtx;e.state==="suspended"&&e.resume(),this.stopCrackle();const t=2,i=e.sampleRate,s=e.createBuffer(1,i*t,i),r=s.getChannelData(0);for(let c=0;c<r.length;c++){const u=c/i,h=Math.random()>.97?1:0,d=(Math.random()*2-1)*.15;r[c]=d+h*(Math.random()*2-1)*Math.exp(-(u%.2*18))}const a=e.createBufferSource();a.buffer=s,a.loop=!0;const o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=1800,o.Q.value=.8;const l=e.createGain();l.gain.value=.045,a.connect(o),o.connect(l),l.connect(e.destination),a.start(),this.crackleNode=a,this.crackleGain=l}catch{}}stopCrackle(){var e;try{(e=this.crackleNode)==null||e.stop()}catch{}this.crackleNode=null,this.crackleGain=null}spawn(e){for(let t=0;t<this.pool.length;t++){const i=this.pool[t];if(!(i.active||i.kind!==e)){i.active=!0,i.life=0,i.phase=Math.random()*Math.PI*2,e==="flame"?(i.maxLife=.5+Math.random()*.45,i.pos.set(this.origin.x+(Math.random()-.5)*.05,this.origin.y+.01,this.origin.z+(Math.random()-.5)*.05),i.vel.set((Math.random()-.5)*.1,.4+Math.random()*.55,(Math.random()-.5)*.1),i.size=.045+Math.random()*.055):e==="smoke"?(i.maxLife=1.4+Math.random()*1.1,i.pos.set(this.origin.x+(Math.random()-.5)*.07,this.origin.y+.04,this.origin.z+(Math.random()-.5)*.07),i.vel.set((Math.random()-.5)*.06,.16+Math.random()*.22,(Math.random()-.5)*.06),i.size=.08+Math.random()*.1):(i.maxLife=.35+Math.random()*.4,i.pos.set(this.origin.x+(Math.random()-.5)*.04,this.origin.y+.02,this.origin.z+(Math.random()-.5)*.04),i.vel.set((Math.random()-.5)*.35,.5+Math.random()*.7,(Math.random()-.5)*.35),i.size=.012+Math.random()*.016),this.meshes[t].visible=!0;return}}}update(e){if(this.burning)for(this.spawnAcc+=e;this.spawnAcc>.025;)this.spawnAcc-=.025,this.spawn("flame"),Math.random()>.35&&this.spawn("smoke"),Math.random()>.55&&this.spawn("spark");for(let t=0;t<this.pool.length;t++){const i=this.pool[t];if(!i.active)continue;if(i.life+=e,i.life>=i.maxLife){i.active=!1,this.meshes[t].visible=!1;continue}const s=i.life/i.maxLife,r=Math.sin(i.life*12+i.phase)*(i.kind==="flame"?.12:.06);i.vel.x+=r*e,i.vel.z+=Math.cos(i.life*9+i.phase)*e*(i.kind==="smoke"?.08:.05),i.pos.addScaledVector(i.vel,e),i.vel.y+=e*(i.kind==="flame"?.45:i.kind==="smoke"?.12:-.3);const a=this.meshes[t];a.position.copy(i.pos);let o;i.kind==="flame"?o=i.size*(1+s*1.1)*(1+Math.sin(i.life*20+i.phase)*.08):i.kind==="smoke"?o=i.size*(1+s*2.2):o=i.size*(1-s*.5),a.scale.set(o*(i.kind==="flame"?.75:1),o*(i.kind==="flame"?1.25:1),1);const l=a.material;i.kind==="flame"?(l.opacity=(1-s)*.95,l.color.setHSL(.08-s*.05,.95,.55+(1-s)*.15)):i.kind==="smoke"?l.opacity=(1-s)*.38:l.opacity=(1-s)*.9}}dispose(){var e,t,i,s;this.stopCrackle(),(e=this.audioCtx)==null||e.close(),(t=this.flameMat.map)==null||t.dispose(),(i=this.smokeMat.map)==null||i.dispose(),(s=this.sparkMat.map)==null||s.dispose(),this.flameMat.dispose(),this.smokeMat.dispose(),this.sparkMat.dispose();for(const r of this.meshes)r.material.dispose()}}function Uf(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Ni(n,e,t=5){let i=0,s=.5,r=1;for(let a=0;a<t;a++)i+=s*Uf(n*r,e*r),r*=2.02,s*=.5;return i}function sS(n=1024){const e=document.createElement("canvas"),t=document.createElement("canvas"),i=document.createElement("canvas");e.width=e.height=n,t.width=t.height=n,i.width=i.height=n;const s=e.getContext("2d"),r=t.getContext("2d"),a=i.getContext("2d"),o=s.createImageData(n,n),l=r.createImageData(n,n),c=a.createImageData(n,n);for(let p=0;p<n;p++)for(let _=0;_<n;_++){const g=_/n,m=p/n,f=Ni(g*3.5,m*.8,4)*.35,E=Ni(g*.6+f,m*14+f*2,5),S=Ni(g*28,m*40,3),b=Math.sin((m*18+f*6+E*2)*Math.PI)*.5+.5,L=118+E*42+b*18,P=72+E*28+b*10,R=38+E*14+S*8,Z=.82+S*.12+b*.08,y=(p*n+_)*4;o.data[y]=Math.min(255,L*Z),o.data[y+1]=Math.min(255,P*Z),o.data[y+2]=Math.min(255,R*Z),o.data[y+3]=255;const w=.55+E*.28+S*.18,W=Math.floor(us.clamp(w,.35,.95)*255);l.data[y]=W,l.data[y+1]=W,l.data[y+2]=W,l.data[y+3]=255;const j=Math.floor((E*.65+b*.25+S*.1)*255);c.data[y]=j,c.data[y+1]=j,c.data[y+2]=j,c.data[y+3]=255}s.putImageData(o,0,0),r.putImageData(l,0,0),a.putImageData(c,0,0);const u=new an(e);u.wrapS=u.wrapT=Li,u.repeat.set(2.2,2.2),u.colorSpace=lt,u.anisotropy=8;const h=new an(t);h.wrapS=h.wrapT=Li,h.repeat.copy(u.repeat),h.anisotropy=4;const d=If(i,2.4);return d.wrapS=d.wrapT=Li,d.repeat.copy(u.repeat),d.anisotropy=4,{albedo:u,roughness:h,normal:d}}function If(n,e=2){const t=n.width,s=n.getContext("2d").getImageData(0,0,t,t).data,r=document.createElement("canvas");r.width=r.height=t;const a=r.getContext("2d"),o=a.createImageData(t,t),l=(u,h)=>{const d=(u+t)%t,p=(h+t)%t;return s[(p*t+d)*4]/255};for(let u=0;u<t;u++)for(let h=0;h<t;h++){const d=(l(h+1,u)-l(h-1,u))*e,p=(l(h,u+1)-l(h,u-1))*e,_=-d,g=-p,m=1,f=Math.hypot(_,g,m)||1,E=(u*t+h)*4;o.data[E]=Math.floor((_/f*.5+.5)*255),o.data[E+1]=Math.floor((g/f*.5+.5)*255),o.data[E+2]=Math.floor((m/f*.5+.5)*255),o.data[E+3]=255}return a.putImageData(o,0,0),new an(r)}function rS(n=1024){const e=document.createElement("canvas"),t=document.createElement("canvas"),i=document.createElement("canvas");e.width=e.height=n,t.width=t.height=n,i.width=i.height=n;const s=e.getContext("2d"),r=t.getContext("2d"),a=i.getContext("2d"),o=s.createImageData(n,n),l=r.createImageData(n,n),c=a.createImageData(n,n);for(let p=0;p<n;p++)for(let _=0;_<n;_++){const g=_/n,m=p/n,f=Ni(g*40,m*55,4),E=Ni(g*90+10,m*20,3),S=Uf(g*200,m*200),b=Ni(g*6,m*6,3),L=.9+b*.06+f*.04,P=L*242+E*8-S*6,R=L*230+f*6-S*4,Z=L*205+E*4,y=(p*n+_)*4;o.data[y]=Math.min(255,Math.max(0,P)),o.data[y+1]=Math.min(255,Math.max(0,R)),o.data[y+2]=Math.min(255,Math.max(0,Z)),o.data[y+3]=255;const w=Math.floor((f*.55+E*.3+b*.15)*255);l.data[y]=w,l.data[y+1]=w,l.data[y+2]=w,l.data[y+3]=255;const W=Math.floor((.72+f*.18+S*.08)*255);c.data[y]=W,c.data[y+1]=W,c.data[y+2]=W,c.data[y+3]=255}s.putImageData(o,0,0),r.putImageData(l,0,0),a.putImageData(c,0,0),s.strokeStyle="rgba(160,140,110,0.06)",s.lineWidth=1;for(let p=0;p<18;p++){const _=(p+1)/19*n;s.beginPath(),s.moveTo(n*.06,_),s.lineTo(n*.94,_),s.stroke()}const u=new an(e);u.colorSpace=lt,u.anisotropy=8;const h=If(t,1.6),d=new an(i);return{albedo:u,normal:h,roughness:d}}function oS(n=256){const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=t.createImageData(n,n);for(let r=0;r<n;r++)for(let a=0;a<n;a++){const o=a/n,l=r/n,c=Ni(o*2,l*18,4),u=92+c*50,h=54+c*30,d=28+c*14,p=(r*n+a)*4;i.data[p]=u,i.data[p+1]=h,i.data[p+2]=d,i.data[p+3]=255}t.putImageData(i,0,0);const s=new an(e);return s.wrapS=s.wrapT=Li,s.colorSpace=lt,s}function aS(n=256){const e=document.createElement("canvas");e.width=e.height=n;const t=e.getContext("2d"),i=t.createRadialGradient(n/2,n/2,n*.15,n/2,n/2,n*.48);return i.addColorStop(0,"rgba(0,0,0,0.35)"),i.addColorStop(.45,"rgba(0,0,0,0.14)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,n,n),new an(e)}function lS(n){const t=["px","nx","py","ny","pz","nz"],i=[];for(const o of t){const l=document.createElement("canvas");l.width=l.height=256;const c=l.getContext("2d"),u=c.createImageData(256,256);for(let h=0;h<256;h++)for(let d=0;d<256;d++){const p=d/255*2-1,_=h/255*2-1;let g;o==="px"?g=new I(1,-_,-p):o==="nx"?g=new I(-1,-_,p):o==="py"?g=new I(p,1,_):o==="ny"?g=new I(p,-1,-_):o==="pz"?g=new I(p,-_,1):g=new I(-p,-_,-1),g.normalize();const m=g.y,f=new We(16760954),E=new We(7252184),S=new We(3811868);let b;m>0?b=f.clone().lerp(E,Math.pow(m,.55)):b=f.clone().lerp(S,Math.pow(-m,.7));const L=new I(.35,.88,.25).normalize(),P=Math.pow(Math.max(g.dot(L),0),60);b.r=Math.min(1,b.r+P*1.2),b.g=Math.min(1,b.g+P*.9),b.b=Math.min(1,b.b+P*.45);const R=(h*256+d)*4;u.data[R]=Math.floor(b.r*255),u.data[R+1]=Math.floor(b.g*255),u.data[R+2]=Math.floor(b.b*255),u.data[R+3]=255}c.putImageData(u,0,0),i.push(l)}const s=new wl(i);s.colorSpace=lt,s.needsUpdate=!0;const r=new Za(n);r.compileCubemapShader();const a=r.fromCubemap(s);return r.dispose(),s.dispose(),a.texture}const Yr=1.6,qr=1.1,zs=.025,jr=.42,cS=new I(.35,.88,.25).normalize(),uS={uniforms:{tDiffuse:{value:null},darkness:{value:.42},offset:{value:1.25}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float darkness;
    uniform float offset;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float v = smoothstep(0.45, offset, d);
      c.rgb = mix(c.rgb, c.rgb * (1.0 - darkness), v);
      // Warm grade
      c.rgb = mix(c.rgb, c.rgb * vec3(1.04, 1.0, 0.94), 0.25);
      gl_FragColor = c;
    }
  `};function hS(n,e){return e?"点燃":n<.08?"等待对焦":n<.28?"微温":n<.55?"焦黄":n<.78?"炭化":n<.95?"余烬":"即将点燃"}class fS{constructor(e,t){be(this,"renderer");be(this,"scene",new DM);be(this,"camera");be(this,"controls");be(this,"composer");be(this,"clock",new Cf);be(this,"host");be(this,"callbacks");be(this,"raf",0);be(this,"disposed",!1);be(this,"lensGroup",new Ai);be(this,"lensMesh");be(this,"lensGlassParts",[]);be(this,"paperMesh");be(this,"paperMat");be(this,"lensMat");be(this,"causticMat");be(this,"coneMat");be(this,"causticMesh");be(this,"coneMesh");be(this,"heatMap");be(this,"heatTex");be(this,"fire");be(this,"refractionRT");be(this,"sunLight");be(this,"raycaster",new zM);be(this,"pointer",new me);be(this,"dragPlane",new zn(new I(0,1,0),-jr));be(this,"dragging",!1);be(this,"lastLensPos",new I);be(this,"focusWorld",new I);be(this,"focusUV",new me(.5,.5));be(this,"ignited",!1);be(this,"heat",0);be(this,"orbitEnabledDefault",!0);be(this,"alignment",0);be(this,"sunDir",cS.clone());be(this,"tmp",new I);be(this,"tmp2",new I);be(this,"onPointerDown",e=>{this.updatePointer(e),this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.intersectObject(this.lensGroup,!0).length&&(this.dragging=!0,this.controls.enabled=!1,this.renderer.domElement.setPointerCapture(e.pointerId),this.moveLensToPointer())});be(this,"onPointerMove",e=>{this.updatePointer(e),this.dragging&&this.moveLensToPointer()});be(this,"onPointerUp",()=>{this.dragging&&(this.dragging=!1,this.controls.enabled=this.orbitEnabledDefault)});be(this,"onResize",()=>{const e=this.host.clientWidth,t=Math.max(this.host.clientHeight,1);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.refractionRT.setSize(Math.floor(e*.6),Math.floor(t*.6))});this.host=e,this.callbacks=t,this.heatMap=new iS(256),this.renderer=new Af({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.outputColorSpace=lt,this.renderer.toneMapping=Jh,this.renderer.toneMappingExposure=1.12,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$h,e.appendChild(this.renderer.domElement),this.camera=new nn(38,e.clientWidth/Math.max(e.clientHeight,1),.05,80),this.camera.position.set(1.85,1.45,2.35),this.controls=new GM(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.055,this.controls.maxPolarAngle=Math.PI*.47,this.controls.minDistance=1.35,this.controls.maxDistance=5.5,this.controls.target.set(0,.18,0),this.buildEnvironment(),this.buildLights(),this.buildDesk(),this.buildProps(),this.buildPaper(),this.buildLens(),this.buildCaustics(),this.buildSunDisc(),this.fire=new Js,this.scene.add(this.fire.group);const i=e.clientWidth,s=e.clientHeight;this.refractionRT=new on(Math.floor(i*.6),Math.floor(s*.6),{minFilter:kt,magFilter:kt,format:sn,type:Xn}),this.refractionRT.texture.colorSpace=lt,this.composer=new YM(this.renderer),this.composer.addPass(new qM(this.scene,this.camera));const r=new Ts(new me(i,s),.28,.55,.82);this.composer.addPass(r),this.composer.addPass(new Df(uS)),this.bindEvents(),this.lastLensPos.copy(this.lensGroup.position)}buildEnvironment(){const e=document.createElement("canvas");e.width=8,e.height=512;const t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,512);i.addColorStop(0,"#5b8fb8"),i.addColorStop(.28,"#a8c4d8"),i.addColorStop(.48,"#e8c090"),i.addColorStop(.62,"#c9a078"),i.addColorStop(1,"#2a1c12"),t.fillStyle=i,t.fillRect(0,0,8,512);const s=new an(e);s.colorSpace=lt,this.scene.background=s,this.scene.fog=new Pl(11569768,.008);try{const r=lS(this.renderer);this.scene.environment=r}catch{}}buildLights(){const e=new NM(16769728,4008474,.45);this.scene.add(e);const t=new Ca(16769192,3.4);t.position.copy(this.sunDir.clone().multiplyScalar(8)),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=.5,t.shadow.camera.far=24,t.shadow.camera.left=-3.5,t.shadow.camera.right=3.5,t.shadow.camera.top=3.5,t.shadow.camera.bottom=-3.5,t.shadow.bias=-15e-5,t.shadow.normalBias=.02,t.shadow.radius=2.5,this.scene.add(t),this.sunLight=t;const i=new Ca(10205400,.42);i.position.set(-3,2.5,-1.5),this.scene.add(i);const s=new Ca(13935988,.28);s.position.set(.5,-.2,1.5),this.scene.add(s);const r=new BM(16773341,.12);this.scene.add(r)}buildDesk(){const e=sS(768),t=new Gt({map:e.albedo,roughnessMap:e.roughness,normalMap:e.normal,normalScale:new me(.55,.55),roughness:.85,metalness:.04,envMapIntensity:.55}),i=new Je(new ku(4.6,.16,3.3,4,.04),t);i.position.y=-.08,i.receiveShadow=!0,i.castShadow=!0,this.scene.add(i);const s=new Gt({map:e.albedo,roughnessMap:e.roughness,normalMap:e.normal,roughness:.9,metalness:.03,color:14205088}),r=new ku(.14,.72,.14,2,.02),a=[[-2,-1.35],[2,-1.35],[-2,1.35],[2,1.35]];for(const[l,c]of a){const u=new Je(r,s);u.position.set(l,-.52,c),u.castShadow=!0,u.receiveShadow=!0,this.scene.add(u)}const o=new Je(new ai(18,18),new Gt({color:2760214,roughness:.92,metalness:0}));o.rotation.x=-Math.PI/2,o.position.y=-.88,o.receiveShadow=!0,this.scene.add(o)}buildProps(){const e=aS(256),t=new Je(new ai(Yr*1.15,qr*1.2),new wi({map:e,transparent:!0,opacity:.7,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.set(.02,.002,.02),this.scene.add(t);const i=new Ai,s=new Je(new Ri(.012,.012,.55,12),new Gt({color:13934615,roughness:.55,metalness:.05}));s.rotation.z=Math.PI/2,s.castShadow=!0,i.add(s);const r=new Je(new vo(.012,.05,12),new Gt({color:15258792,roughness:.7}));r.rotation.z=-Math.PI/2,r.position.x=.3,i.add(r);const a=new Je(new vo(.004,.018,8),new Gt({color:2236962,roughness:.4}));a.rotation.z=-Math.PI/2,a.position.x=.328,i.add(a);const o=new Je(new Ri(.013,.013,.03,12),new Gt({color:15245472,roughness:.8}));o.rotation.z=Math.PI/2,o.position.x=-.29,i.add(o),i.position.set(-.95,.02,.55),i.rotation.y=.4,this.scene.add(i);const l=[new me(0,0),new me(.07,0),new me(.075,.02),new me(.068,.14),new me(.072,.15),new me(.055,.15),new me(.05,.02),new me(0,.02)],c=new Je(new _o(l,32),new Gt({color:15921128,roughness:.45,metalness:.05,envMapIntensity:.6}));c.position.set(1.05,0,.55),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);const u=new Je(new Zs(.052,24),new Gt({color:2758672,roughness:.35,metalness:.1}));u.rotation.x=-Math.PI/2,u.position.set(1.05,.138,.55),this.scene.add(u);const h=new Je(new ds(.045,.01,8,16,Math.PI),new Gt({color:15921128,roughness:.45}));h.position.set(1.13,.08,.55),h.rotation.y=Math.PI/2,h.castShadow=!0,this.scene.add(h);const d=new Gt({color:15722196,roughness:.85});for(let p=0;p<4;p++){const _=new Je(new zi(.45,.006,.58),d);_.position.set(-1.15,.01+p*.007,-.55),_.rotation.y=-.15+p*.02,_.castShadow=!0,_.receiveShadow=!0,this.scene.add(_)}}buildPaper(){this.heatTex=new an(this.heatMap.canvas),this.heatTex.flipY=!1,this.heatTex.needsUpdate=!0,this.heatMap.attachTexture(this.heatTex);const e=rS(768);this.paperMat=new Rt({uniforms:{uHeatMap:{value:this.heatTex},uFiber:{value:e.albedo},uNormalMap:{value:e.normal},uRoughMap:{value:e.roughness},uTime:{value:0},uSunDir:{value:this.sunDir.clone()},uFocusUV:{value:new me(.5,.5)},uFocusIntensity:{value:0},uIgnited:{value:0}},vertexShader:ZM,fragmentShader:JM,transparent:!0,side:$t}),this.paperMesh=new Je(new ai(Yr,qr,48,32),this.paperMat),this.paperMesh.rotation.x=-Math.PI/2,this.paperMesh.position.y=zs,this.paperMesh.receiveShadow=!0,this.scene.add(this.paperMesh)}buildLens(){this.lensGroup.position.set(.05,jr,.05),this.lensGroup.rotation.x=-.12,this.lensGroup.rotation.z=.08;const e=new Gt({color:12886122,metalness:.92,roughness:.28,envMapIntensity:1.2}),t=new Gt({color:9071164,metalness:.88,roughness:.38,envMapIntensity:1}),i=new Je(new ds(.22,.022,20,72),e);i.rotation.x=Math.PI/2,i.castShadow=!0,this.lensGroup.add(i);const s=new Je(new ds(.205,.008,12,64),t);s.rotation.x=Math.PI/2,this.lensGroup.add(s);const r=new Je(new ds(.238,.007,12,64),e);r.rotation.x=Math.PI/2,this.lensGroup.add(r);const a=oS(256),o=new Gt({map:a,roughness:.62,metalness:.05,envMapIntensity:.4}),l=[new me(.02,-.22),new me(.026,-.18),new me(.028,-.05),new me(.024,.08),new me(.02,.18),new me(.016,.22)],c=new Je(new _o(l,24),o);c.rotation.z=Math.PI/2.35,c.position.set(.4,-.05,0),c.castShadow=!0,this.lensGroup.add(c);const u=new Je(new Ri(.032,.03,.05,20),e);u.rotation.z=Math.PI/2.35,u.position.set(.205,-.015,0),u.castShadow=!0,this.lensGroup.add(u),this.lensMat=new Rt({uniforms:{uTime:{value:0},uSunDir:{value:this.sunDir.clone()},uSceneTex:{value:null},uResolution:{value:new me(1,1)},uIOR:{value:1.52},uAberration:{value:.018},uFresnelPower:{value:4},uMagnify:{value:1}},vertexShader:KM,fragmentShader:$M,transparent:!0,side:$t,depthWrite:!1});const h=new Ll(.2,64,40),d=new Je(h,this.lensMat);d.scale.set(1,.32,1),d.position.y=.012,this.lensGroup.add(d),this.lensGlassParts.push(d),this.lensMesh=d;const p=new Je(h,this.lensMat);p.scale.set(1,.32,1),p.position.y=-.012,this.lensGroup.add(p),this.lensGlassParts.push(p),i.castShadow=!0,r.castShadow=!0,this.scene.add(this.lensGroup)}buildCaustics(){this.causticMat=new Rt({uniforms:{uIntensity:{value:0},uTime:{value:0},uRadius:{value:.55}},vertexShader:QM,fragmentShader:eS,transparent:!0,depthWrite:!1,blending:Gn}),this.causticMesh=new Je(new ai(.42,.42),this.causticMat),this.causticMesh.rotation.x=-Math.PI/2,this.causticMesh.position.y=zs+.006,this.scene.add(this.causticMesh),this.coneMat=new Rt({uniforms:{uIntensity:{value:0},uTime:{value:0}},vertexShader:tS,fragmentShader:nS,transparent:!0,depthWrite:!1,blending:Gn,side:$t}),this.coneMesh=new Je(new Ri(.035,.2,1,32,1,!0),this.coneMat),this.scene.add(this.coneMesh)}buildSunDisc(){const e=new wi({color:16771248,transparent:!0,opacity:.98}),t=new Je(new Zs(.7,48),e);t.position.copy(this.sunDir.clone().multiplyScalar(14)),t.lookAt(0,0,0),this.scene.add(t);const i=new wi({color:16763e3,transparent:!0,opacity:.22,blending:Gn,depthWrite:!1}),s=new Je(new Zs(1.8,48),i);s.position.copy(t.position),s.lookAt(0,0,0),this.scene.add(s);const r=new Je(new ai(3.5,2.2),new wi({color:16767136,transparent:!0,opacity:.08,blending:Gn,depthWrite:!1,side:$t}));r.position.copy(this.sunDir.clone().multiplyScalar(6)),r.lookAt(0,.2,0),this.scene.add(r)}bindEvents(){this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("resize",this.onResize)}unbindEvents(){this.renderer.domElement.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("resize",this.onResize)}updatePointer(e){const t=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1}moveLensToPointer(){this.raycaster.setFromCamera(this.pointer,this.camera);const e=new I;this.raycaster.ray.intersectPlane(this.dragPlane,e)&&(e.x=us.clamp(e.x,-1.1,1.1),e.z=us.clamp(e.z,-.75,.75),e.y=jr,this.lensGroup.position.copy(e))}computeFocus(){const e=this.lensGroup.position,t=this.sunDir.clone().negate().normalize(),i=(zs-e.y)/t.y;this.focusWorld.set(e.x+t.x*i,zs,e.z+t.z*i);const s=(this.focusWorld.x+Yr*.5)/Yr,r=1-(this.focusWorld.z+qr*.5)/qr;return this.focusUV.set(s,r),s>=0&&s<=1&&r>=0&&r<=1}updateOptics(e){const t=this.computeFocus(),s=this.lensGroup.position.distanceTo(this.lastLensPos)/Math.max(e,1e-4),r=us.clamp(1-s/1.8,0,1);this.lastLensPos.copy(this.lensGroup.position);const a=t?.55+r*.45:.05;this.alignment=us.damp(this.alignment,a,4.5,e);const o=this.alignment;this.causticMat.uniforms.uIntensity.value=o,this.causticMat.uniforms.uTime.value=this.clock.elapsedTime,this.causticMesh.position.x=this.focusWorld.x,this.causticMesh.position.z=this.focusWorld.z;const l=.65+(1-r)*.85;this.causticMesh.scale.setScalar(l);const c=this.tmp.copy(this.lensGroup.position).add(this.focusWorld).multiplyScalar(.5),u=this.lensGroup.position.distanceTo(this.focusWorld);this.coneMesh.position.copy(c),this.coneMesh.scale.set(1,u,1),this.coneMesh.lookAt(this.focusWorld),this.coneMesh.rotateX(Math.PI/2);const h=Math.pow(Math.max(o-.25,0)/.75,1.4);this.coneMat.uniforms.uIntensity.value=h,this.coneMat.uniforms.uTime.value=this.clock.elapsedTime,this.coneMesh.visible=h>.02,this.paperMat.uniforms.uFocusUV.value.copy(this.focusUV),this.paperMat.uniforms.uFocusIntensity.value=t?o:0,this.paperMat.uniforms.uTime.value=this.clock.elapsedTime,this.lensMat.uniforms.uTime.value=this.clock.elapsedTime,this.lensMat.uniforms.uMagnify.value=.85+o*.35,this.ignited?(this.heatMap.accumulate(this.focusUV.x,this.focusUV.y,e*.35,1,t),this.heat=Math.max(this.heat,this.heatMap.maxHeat())):(this.heat=this.heatMap.accumulate(this.focusUV.x,this.focusUV.y,e,r,t),this.heat>=.98&&(this.ignited=!0,this.heatMap.setIgnited(!0),this.paperMat.uniforms.uIgnited.value=1,this.fire.setBurning(!0))),this.fire.setOrigin(this.focusWorld.clone().setY(zs+.02)),this.fire.update(e),this.callbacks.onHeat(this.heat,hS(this.heat,this.ignited),this.ignited)}renderRefraction(){for(const e of this.lensGlassParts)e.visible=!1;this.coneMesh.visible=!1,this.causticMesh.visible=!1,this.fire.group.visible=!1,this.renderer.setRenderTarget(this.refractionRT),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);for(const e of this.lensGlassParts)e.visible=!0;this.causticMesh.visible=!0,this.fire.group.visible=!0,this.lensMat.uniforms.uSceneTex.value=this.refractionRT.texture,this.lensMat.uniforms.uResolution.value.set(this.refractionRT.width,this.refractionRT.height)}start(){const e=()=>{if(this.disposed)return;this.raf=requestAnimationFrame(e);const t=Math.min(this.clock.getDelta(),.05);this.controls.update(),this.updateOptics(t),this.renderRefraction(),this.composer.render()};e()}reset(){this.ignited=!1,this.heat=0,this.alignment=0,this.heatMap.reset(),this.paperMat.uniforms.uIgnited.value=0,this.fire.setBurning(!1),this.lensGroup.position.set(.05,jr,.05),this.lastLensPos.copy(this.lensGroup.position),this.callbacks.onHeat(0,"等待对焦",!1)}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.unbindEvents(),this.controls.dispose(),this.fire.dispose(),this.composer.dispose(),this.refractionRT.dispose(),this.renderer.dispose(),this.host.removeChild(this.renderer.domElement)}}const dS={class:"app"},pS={class:"ui"},mS={class:"hud"},gS={class:"panel"},_S={class:"heat-row"},vS={class:"pct"},xS={class:"heat-bar"},MS={class:"meta"},SS={class:"stage"},yS={key:0,class:"ignite"},ES=Hd({__name:"App",setup(n){const e=_r(null),t=_r(0),i=_r("等待对焦"),s=_r(!1);let r=null;function a(){r==null||r.reset(),t.value=0,i.value="等待对焦",s.value=!1}return bh(()=>{e.value&&(r=new fS(e.value,{onHeat:(o,l,c)=>{t.value=Math.round(o*100),i.value=l,s.value=c}}),r.start())}),ml(()=>{r==null||r.dispose(),r=null}),(o,l)=>(Ga(),nc("div",dS,[Et("div",{ref_key:"canvasHost",ref:e,class:"canvas-host"},null,512),Et("div",pS,[l[1]||(l[1]=Et("header",{class:"title-block"},[Et("p",{class:"eyebrow"},"SOLAR FOCUS"),Et("h1",null,"透镜 · 聚光"),Et("p",{class:"help"},"拖动放大镜，对准阳光，静止片刻直至纸张点燃")],-1)),Et("div",mS,[Et("div",gS,[Et("div",_S,[l[0]||(l[0]=Et("span",{class:"label"},"热量",-1)),Et("span",vS,La(t.value)+"%",1)]),Et("div",xS,[Et("div",{class:bo(["heat-fill",{hot:t.value>70}]),style:Eo({width:t.value+"%"})},null,6)]),Et("div",MS,[Et("span",SS,La(i.value),1)]),s.value?(Ga(),nc("p",yS,"点燃")):Cp("",!0),Et("button",{class:"reset",type:"button",onClick:a},"再来一次")])])])]))}}),bS=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},TS=bS(ES,[["__scopeId","data-v-f386a679"]]);dm(TS).mount("#app");
