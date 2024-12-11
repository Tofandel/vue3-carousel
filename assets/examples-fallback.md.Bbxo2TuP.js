import{d as K,a1 as bt,L as oe,V as I,p as C,q as fe,h as b,x as _t,v as Qe,z as wt,a2 as A,a3 as Ye,a4 as de,s as Te,Y as xt,a5 as We,a6 as Ze,a7 as St,o as S,b as ie,w as g,a8 as J,a9 as Q,k as f,G as d,c as T,C as P,j as s,t as L,F as N,_ as et,aa as tt,ab as yt,K as Ne,ac as At,a as M}from"./chunks/framework.B81bEg3w.js";/**
 * Vue 3 Carousel 0.9.0
 * (c) 2024
 * @license MIT
 */const F=Symbol("carousel"),nt=["center","start","end","center-even","center-odd"],at=["viewport","carousel"],ot=["ltr","left-to-right","rtl","right-to-left","ttb","top-to-bottom","btt","bottom-to-top"],kt={ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaNavigateToPage:"Navigate to page {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"},Ie={"left-to-right":"ltr","right-to-left":"rtl","top-to-bottom":"ttb","bottom-to-top":"btt"};Object.values(Ie);const y={enabled:!0,itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,gap:0,height:"auto",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,snapAlign:nt[0],dir:ot[0],breakpointMode:at[0],breakpoints:void 0,i18n:kt,ignoreAnimations:!1};function Ee({val:t,max:n,min:e}){return n<e?t:Math.min(Math.max(t,isNaN(e)?t:e),isNaN(n)?t:n)}function De({val:t,max:n,min:e=0}){const a=n-e+1;return((t-e)%a+a)%a+e}const it=(t,n)=>{switch(t){default:case"start":return 0;case"center":return(n-1)/2;case"center-odd":return(n-1)/2;case"center-even":return(n-2)/2;case"end":return n-1}};function Tt({config:t,currentSlide:n,slidesCount:e}){const{snapAlign:a="center",wrapAround:o,itemsToShow:u=1}=t,p=it(a,u);return o?De({val:n-p,max:e+u,min:0-u}):Ee({val:n-p,max:e-u,min:0})}function Ct({config:t,slidesCount:n}){const{snapAlign:e="center",wrapAround:a,itemsToShow:o=1}=t;return a||o>n?0:Math.max(0,Math.floor(it(e,o)))}function Nt({config:t,slidesCount:n}){const{snapAlign:e="center",wrapAround:a,itemsToShow:o=1}=t;function u(){switch(a?"":e){case"start":return Math.ceil(n-o);case"center":case"center-odd":return n-Math.ceil((o-.5)/2);case"center-even":return n-Math.ceil(o/2);case"end":default:return Math.ceil(n-1)}}return Math.max(u(),0)}function lt(t="",n={}){return Object.entries(n).reduce((e,[a,o])=>e.replace(`{${a}}`,String(o)),t)}function Ce(t,n=0){let e=!1,a=0,o=null;function u(...p){if(e)return;e=!0;const r=()=>{o=requestAnimationFrame(_=>{_-a>n?(a=_,t(...p),e=!1):r()})};r()}return u.cancel=()=>{o&&(cancelAnimationFrame(o),o=null,e=!1)},u}function It(t,n){return Object.keys(t).filter(e=>!n.includes(e)).reduce((e,a)=>(e[a]=t[a],e),{})}function Et(t){const{transform:n}=window.getComputedStyle(t);return n.split(/[(,)]/).slice(1,-1).map(e=>parseFloat(e))}const E=K({name:"CarouselSlide",props:{isClone:{type:Boolean,default:!1},id:{type:String,default:t=>t.isClone?void 0:bt()},index:{type:Number,default:0}},setup(t,{slots:n,expose:e}){const a=oe(F);if(I(F,void 0),!a)return()=>"";const o=C(t.index);fe(()=>t.index,i=>o.value=i);const u=b(()=>o.value===a.currentSlide),p=b(()=>o.value===a.currentSlide-1),r=b(()=>o.value===a.currentSlide+1),_=b(()=>o.value>=Math.floor(a.scrolledIndex)&&o.value<Math.ceil(a.scrolledIndex)+a.config.itemsToShow),x=b(()=>{const i=a.config.gap>0&&a.config.itemsToShow>1?`calc(${100/a.config.itemsToShow}% - ${a.config.gap*(a.config.itemsToShow-1)/a.config.itemsToShow}px)`:`${100/a.config.itemsToShow}%`;return a.isVertical?{height:i}:{width:i}}),h=Ze();if(!t.isClone)a.registerSlide(h,i=>o.value=i),_t(()=>{a.unregisterSlide(h)});else{const i=m=>{[...m!=null&&m.el?m.el.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'):[]].filter(O=>!O.hasAttribute("disabled")&&!O.getAttribute("aria-hidden")).forEach(O=>O.setAttribute("tabindex","-1"))};Qe(()=>{i(h.vnode)}),wt(()=>{i(h.vnode)})}return e({id:t.id}),()=>{var i,m;return a.config.enabled?A("li",{style:x.value,class:{carousel__slide:!0,"carousel__slide--clone":t.isClone,"carousel__slide--visible":_.value,"carousel__slide--active":u.value,"carousel__slide--prev":p.value,"carousel__slide--next":r.value,"carousel__slide--sliding":a.isSliding},onFocusin:()=>{a.viewport&&(a.viewport.scrollLeft=0),a.nav.slideTo(o.value)},id:t.isClone?void 0:t.id,"aria-hidden":t.isClone||void 0},(m=n.default)===null||m===void 0?void 0:m.call(n,{isActive:u.value,isClone:t.isClone,isPrev:p.value,isNext:r.value,isSliding:a.isSliding,isVisible:_.value})):(i=n.default)===null||i===void 0?void 0:i.call(n)}}});function He({slides:t,position:n,toShow:e}){const a=[],o=n==="before",u=o?-e:0,p=o?0:e;for(let r=u;r<p;r++){const x={index:o?r:t.length>0?r+t.length:r+99999,isClone:!0,id:void 0,key:`clone-${n}-${r}`};a.push(t.length>0?St(t[(r%t.length+t.length)%t.length].vnode,x):A(E,x))}return a}const Ot=K({name:"CarouselAria",setup(){const t=oe(F);return t?()=>A("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},lt(t.config.i18n.itemXofY,{currentSlide:t.currentSlide+1,slidesCount:t.slidesCount})):()=>""}}),Dt={enabled:{default:y.enabled,type:Boolean},itemsToShow:{default:y.itemsToShow,type:Number},itemsToScroll:{default:y.itemsToScroll,type:Number},wrapAround:{default:y.wrapAround,type:Boolean},gap:{default:y.gap,type:Number},height:{default:y.height,type:[Number,String]},snapAlign:{default:y.snapAlign,validator(t){return nt.includes(t)}},transition:{default:y.transition,type:Number},breakpointMode:{default:y.breakpointMode,validator(t){return at.includes(t)}},breakpoints:{default:y.breakpoints,type:Object},autoplay:{default:y.autoplay,type:Number},pauseAutoplayOnHover:{default:y.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:y.mouseDrag,type:Boolean},touchDrag:{default:y.touchDrag,type:Boolean},dir:{type:String,default:y.dir,validator(t){return ot.includes(t)}},i18n:{default:y.i18n,type:Object},ignoreAnimations:{default:!1,type:[Array,Boolean,String]}},V=K({name:"VueCarousel",props:Dt,emits:["init","drag","slide-start","loop","update:modelValue","slide-end","before-init"],setup(t,{slots:n,emit:e,expose:a}){var o;const u=C(null),p=C(null),r=Ye([]),_=C(0),x=b(()=>r.length),h=b(()=>Object.assign(Object.assign(Object.assign({},y),It(t,["breakpoints","modelValue"])),{i18n:Object.assign(Object.assign({},y.i18n),t.i18n)})),i=de(Object.assign({},h.value)),m=C((o=t.modelValue)!==null&&o!==void 0?o:0),O=C(0),pe=b(()=>Math.ceil((x.value-1)/2)),G=b(()=>Nt({config:i,slidesCount:x.value})),Z=b(()=>Ct({config:i,slidesCount:x.value}));let X=null,me=null,ee=null;const Me=b(()=>_.value+i.gap),Y=b(()=>{const l=i.dir||"ltr";return l in Ie?Ie[l]:l}),te=[],rt=(l,c)=>{c(r.length),r.push(l),te.push(c)},st=l=>{const c=r.indexOf(l);c>=0&&(r.splice(c,1),te.splice(c,1),te.slice(c).forEach((v,w)=>v(c+w)))},le=b(()=>["rtl","btt"].includes(Y.value)),D=b(()=>["ttb","btt"].includes(Y.value)),Pe=b(()=>Math.ceil(i.itemsToShow)+1);function W(){var l;const c=(h.value.breakpointMode==="carousel"?(l=u.value)===null||l===void 0?void 0:l.getBoundingClientRect().width:typeof window<"u"?window.innerWidth:0)||0,v=Object.keys(t.breakpoints||{}).map(k=>Number(k)).sort((k,ne)=>+ne-+k),w={};v.some(k=>c>=k?(Object.assign(w,t.breakpoints[k]),w.i18n&&Object.assign(w.i18n,h.value.i18n,t.breakpoints[k].i18n),!0):!1),Object.assign(i,h.value,w)}const ut=Ce(()=>{W(),se(),B()}),ge=b(()=>(i.itemsToShow-1)*i.gap),re=Ye(new Set);function B(){if(!p.value)return;let l=1;if(re.forEach(c=>{const v=Et(c);v.length===6&&(l*=v[0])}),D.value){if(i.height!=="auto"){const c=typeof i.height=="string"&&isNaN(parseInt(i.height))?p.value.getBoundingClientRect().height:parseInt(i.height);_.value=(c-ge.value)/i.itemsToShow}}else{const c=p.value.getBoundingClientRect().width;_.value=(c/l-ge.value)/i.itemsToShow}}function se(){!i.wrapAround&&x.value>0&&(m.value=Ee({val:m.value,max:G.value,min:Z.value}))}const he=b(()=>typeof t.ignoreAnimations=="string"?t.ignoreAnimations.split(","):Array.isArray(t.ignoreAnimations)?t.ignoreAnimations:t.ignoreAnimations?!1:[]);Te(()=>se()),Te(()=>{B()});let H;const Le=l=>{const c=l.target;if(!(!(c!=null&&c.contains(u.value))||Array.isArray(he.value)&&he.value.includes(l.animationName))&&(re.add(c),!H)){const v=()=>{H=requestAnimationFrame(()=>{B(),v()})};v()}},Ve=l=>{const c=l.target;c&&re.delete(c),H&&re.size===0&&(cancelAnimationFrame(H),B())},be=C(!1);typeof document<"u"&&Te(()=>{be.value&&he.value!==!1?(document.addEventListener("animationstart",Le),document.addEventListener("animationend",Ve)):(document.removeEventListener("animationstart",Le),document.removeEventListener("animationend",Ve))}),W(),Qe(()=>{be.value=!0,h.value.breakpointMode==="carousel"&&W(),ze(),u.value&&(ee=new ResizeObserver(ut),ee.observe(u.value)),e("init")}),xt(()=>{be.value=!1,r.splice(0,r.length),te.splice(0,te.length),me&&clearTimeout(me),H&&cancelAnimationFrame(H),X&&clearInterval(X),ee&&(ee.disconnect(),ee=null),typeof document<"u"&&Be(),u.value&&(u.value.removeEventListener("transitionend",B),u.value.removeEventListener("animationiteration",B))});let z=!1;const ue={x:0,y:0},R=de({x:0,y:0}),ce=C(!1),_e=C(!1),ct=()=>{ce.value=!0},dt=()=>{ce.value=!1},$e=Ce(l=>{if(!l.ctrlKey)switch(l.key){case"ArrowLeft":case"ArrowUp":D.value===l.key.endsWith("Up")&&(le.value?U.next(!0):U.prev(!0));break;case"ArrowRight":case"ArrowDown":D.value===l.key.endsWith("Down")&&(le.value?U.prev(!0):U.next(!0));break}},200),ft=()=>{document.addEventListener("keydown",$e)},Be=()=>{document.removeEventListener("keydown",$e)};function Re(l){const c=l.target.tagName;if(["INPUT","TEXTAREA","SELECT"].includes(c)||j.value||(z=l.type==="touchstart",!z&&(l.preventDefault(),l.button!==0)))return;ue.x="touches"in l?l.touches[0].clientX:l.clientX,ue.y="touches"in l?l.touches[0].clientY:l.clientY;const v=z?"touchmove":"mousemove",w=z?"touchend":"mouseup";document.addEventListener(v,we,{passive:!1}),document.addEventListener(w,je,{passive:!0})}const we=Ce(l=>{_e.value=!0;const c="touches"in l?l.touches[0].clientX:l.clientX,v="touches"in l?l.touches[0].clientY:l.clientY,w=c-ue.x,k=v-ue.y;R.x=w,R.y=k,e("drag",{deltaX:w,deltaY:k})});function je(){we.cancel();const l=D.value?"y":"x",c=le.value?-1:1,v=Math.sign(R[l])*.4,w=Math.round(R[l]/Me.value+v)*c;if(w&&!z){const ae=ke=>{ke.preventDefault(),window.removeEventListener("click",ae)};window.addEventListener("click",ae)}const k=m.value-w;q(k),R.x=0,R.y=0,_e.value=!1;const ne=z?"touchmove":"mousemove",Ae=z?"touchend":"mouseup";document.removeEventListener(ne,we),document.removeEventListener(Ae,je)}function ze(){!i.autoplay||i.autoplay<=0||(X=setInterval(()=>{i.pauseAutoplayOnHover&&ce.value||Se()},i.autoplay))}function Ue(){X&&(clearInterval(X),X=null)}function xe(){Ue(),ze()}const j=C(!1);function q(l,c=!1){const v=i.wrapAround?l:Ee({val:l,max:G.value,min:Z.value});if(m.value===v||!c&&j.value)return;e("slide-start",{slidingToIndex:l,currentSlideIndex:m.value,prevSlideIndex:O.value,slidesCount:x.value}),Ue(),j.value=!0,O.value=m.value;const w=i.wrapAround?De({val:v,max:G.value,min:0}):v;m.value=v,w!==v&&Xe.pause(),e("update:modelValue",w),me=setTimeout(()=>{i.wrapAround&&w!==v&&(Xe.resume(),m.value=w,e("loop",{currentSlideIndex:m.value,slidingToIndex:l})),e("slide-end",{currentSlideIndex:m.value,prevSlideIndex:O.value,slidesCount:x.value}),j.value=!1,xe()},i.transition)}function Se(l=!1){q(m.value+i.itemsToScroll,l)}function Fe(l=!1){q(m.value-i.itemsToScroll,l)}const U={slideTo:q,next:Se,prev:Fe},Ge=b(()=>Tt({config:i,currentSlide:m.value,slidesCount:x.value})),vt=de({config:i,slidesCount:x,viewport:p,slides:r,scrolledIndex:Ge,currentSlide:m,maxSlide:G,minSlide:Z,slideSize:_,isVertical:D,normalizedDir:Y,nav:U,isSliding:j,registerSlide:rt,unregisterSlide:st});I(F,vt),I("config",i),I("slidesCount",x),I("currentSlide",m),I("maxSlide",G),I("minSlide",Z),I("slideSize",_),I("isVertical",D),I("normalizeDir",Y),I("nav",U),I("isSliding",j);function pt(){W(),se(),B(),xe()}fe(()=>[h.value,t.breakpoints],()=>W(),{deep:!0}),fe(()=>t.autoplay,()=>xe());const Xe=fe(()=>t.modelValue,l=>{l!==m.value&&q(Number(l),!0)});e("before-init");const ye=de({config:i,slidesCount:x,slideSize:_,currentSlide:m,maxSlide:G,minSlide:Z,middleSlide:pe});a({updateBreakpointsConfig:W,updateSlidesData:se,updateSlideSize:B,restartCarousel:pt,slideTo:q,next:Se,prev:Fe,nav:U,data:ye});const mt=b(()=>D.value&&_.value&&i.height==="auto"?`${_.value*i.itemsToShow+ge.value}px`:i.height!=="auto"?typeof i.height=="number"||parseInt(i.height).toString()===i.height?`${i.height}px`:i.height:void 0),gt=b(()=>{const l=i.wrapAround?Pe.value:0,c=le.value?-1:1,v=(Ge.value+l)*Me.value*c,w=D.value?R.y:R.x;return`translate${D.value?"Y":"X"}(${w-v}px)`});return()=>{const l=n.default||n.slides,c=n.addons;let v=(l==null?void 0:l(ye))||[];if(!i.enabled||!v.length)return A("section",{ref:u,class:["carousel","is-disabled"]},v);const w=(c==null?void 0:c(ye))||[];if(i.wrapAround){const Ae=v.length>0?v[0].scopeId:null;We(Ae);const ae=Pe.value,ke=He({slides:r,position:"before",toShow:ae}),ht=He({slides:r,position:"after",toShow:ae});We(Ze().vnode.scopeId),v=[...ke,...v,...ht]}const k=A("ol",{class:"carousel__track",style:{transform:gt.value,"transition-duration":j.value?`${i.transition}ms`:void 0,gap:i.gap>0?`${i.gap}px`:void 0},onMousedownCapture:i.mouseDrag?Re:null,onTouchstartPassiveCapture:i.touchDrag?Re:null},v),ne=A("div",{class:"carousel__viewport",ref:p},k);return A("section",{ref:u,class:["carousel",`is-${Y.value}`,{"is-vertical":D.value,"is-sliding":j.value,"is-dragging":_e.value,"is-hover":ce.value}],style:{"--vc-trk-height":mt.value},dir:Y.value,"aria-label":i.i18n.ariaGallery,tabindex:"0",onFocus:ft,onBlur:Be,onMouseenter:ct,onMouseleave:dt},[ne,w,A(Ot)])}}});var Oe;(function(t){t.arrowUp="arrowUp",t.arrowDown="arrowDown",t.arrowRight="arrowRight",t.arrowLeft="arrowLeft"})(Oe||(Oe={}));function Mt(t){return t in Oe}const qe=t=>`icon${t.charAt(0).toUpperCase()+t.slice(1)}`,Ke=t=>t&&Mt(t),Pt={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},Je=K({props:{name:{type:String,required:!0,validator:Ke},title:{type:String,default:t=>t.name?y.i18n[qe(t.name)]:""}},setup(t){const n=oe(F,null);return()=>{const e=t.name;if(!e||!Ke(e))return;const a=Pt[e],o=A("path",{d:a}),u=(n==null?void 0:n.config.i18n[qe(e)])||t.title,p=A("title",u);return A("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":u},[p,o])}}}),$=K({name:"CarouselNavigation",inheritAttrs:!1,setup(t,{slots:n,attrs:e}){const a=oe(F);if(!a)return()=>"";const{next:o,prev:u}=n,p=()=>({ltr:"arrowLeft",rtl:"arrowRight",ttb:"arrowUp",btt:"arrowDown"})[a.normalizedDir],r=()=>({ltr:"arrowRight",rtl:"arrowLeft",ttb:"arrowDown",btt:"arrowUp"})[a.normalizedDir],_=b(()=>!a.config.wrapAround&&a.currentSlide<=a.minSlide),x=b(()=>!a.config.wrapAround&&a.currentSlide>=a.maxSlide);return()=>{const{i18n:h}=a.config,i=A("button",Object.assign(Object.assign({type:"button",disabled:_.value,"aria-label":h.ariaPreviousSlide,title:h.ariaPreviousSlide,onClick:a.nav.prev},e),{class:["carousel__prev",{"carousel__prev--disabled":_.value},e.class]}),(u==null?void 0:u())||A(Je,{name:p()})),m=A("button",Object.assign(Object.assign({type:"button",disabled:x.value,"aria-label":h.ariaNextSlide,title:h.ariaNextSlide,onClick:a.nav.next},e),{class:["carousel__next",{"carousel__next--disabled":x.value},e.class]}),(o==null?void 0:o())||A(Je,{name:r()}));return[i,m]}}}),ve=K({name:"CarouselPagination",props:{disableOnClick:{type:Boolean},paginated:{type:Boolean}},setup(t){const n=oe(F);if(!n)return()=>"";const e=b(()=>{switch(n.config.snapAlign){default:case"center":case"center-odd":return(n.config.itemsToShow-1)/2;case"end":return n.config.itemsToShow-1;case"start":case"center-even":return 0}}),a=b(()=>t.paginated&&n.config.itemsToShow>1),o=b(()=>Math.ceil((n.currentSlide-e.value)/n.config.itemsToShow)),u=b(()=>Math.ceil(n.slidesCount/n.config.itemsToShow)),p=r=>De(a.value?{val:o.value,max:u.value-1,min:0}:{val:n.currentSlide,max:n.maxSlide,min:n.minSlide})===r;return()=>{var r,_;const x=[];for(let h=a.value?0:n.minSlide;h<=(a.value?u.value-1:n.maxSlide);h++){const i=lt(n.config.i18n[a.value?"ariaNavigateToPage":"ariaNavigateToSlide"],{slideNumber:h+1}),m=p(h),O=A("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":m},"aria-label":i,"aria-pressed":m,"aria-controls":(_=(r=n.slides[h])===null||r===void 0?void 0:r.exposed)===null||_===void 0?void 0:_.id,title:i,disabled:t.disableOnClick,onClick:()=>n.nav.slideTo(a.value?h*n.config.itemsToShow+e.value:h)}),pe=A("li",{class:"carousel__pagination-item",key:h},O);x.push(pe)}return A("ol",{class:"carousel__pagination"},x)}}}),Lt={class:"carousel__item"},Vt={__name:"ExampleBasic",setup(t){const n={};return(e,a)=>(S(),ie(f(V),J(Q(n)),{addons:g(()=>[d(f($)),d(f(ve))]),default:g(()=>[(S(),T(N,null,P(10,o=>d(f(E),{key:o},{default:g(()=>[s("div",Lt,L(o),1)]),_:2},1024)),64))]),_:1},16))}},$t={class:"carousel__item"},Bt={__name:"ExampleWrapAround",setup(t){const n={itemsToShow:3,wrapAround:!0,gap:20};return(e,a)=>(S(),ie(f(V),J(Q(n)),{addons:g(()=>[d(f($)),d(f(ve))]),default:g(()=>[(S(),T(N,null,P(10,o=>d(f(E),{key:o},{default:g(()=>[s("div",$t,L(o),1)]),_:2},1024)),64))]),_:1},16))}},Rt={style:{resize:"horizontal",border:"2px dashed gray",overflow:"auto"}},jt={class:"carousel__item"},zt={__name:"ExampleBreakpoints",setup(t){const n={itemsToShow:1,snapAlign:"center",breakpointMode:"carousel",breakpoints:{300:{itemsToShow:2,snapAlign:"center"},400:{itemsToShow:3,snapAlign:"start"},500:{itemsToShow:4,snapAlign:"start"}}};return(e,a)=>(S(),T("div",Rt,[d(f(V),J(Q(n)),{addons:g(()=>[d(f($))]),default:g(()=>[(S(),T(N,null,P(10,o=>d(f(E),{key:o},{default:g(()=>[s("div",jt,L(o),1)]),_:2},1024)),64))]),_:1},16)]))}},Ut={class:"carousel__item"},Ft={__name:"ExampleAutoplay",setup(t){const n={autoplay:2e3,wrapAround:!0,pauseAutoplayOnHover:!0};return(e,a)=>(S(),ie(f(V),J(Q(n)),{addons:g(()=>[d(f($))]),default:g(()=>[(S(),T(N,null,P(10,o=>d(f(E),{key:o},{default:g(()=>[s("div",Ut,L(o),1)]),_:2},1024)),64))]),_:1},16))}},Gt={class:"carousel__item"},Xt={__name:"ExampleActiveClasses",setup(t){const n={itemsToShow:3.95,wrapAround:!0,transition:500};return(e,a)=>(S(),ie(f(V),J(Q(n)),{addons:g(()=>[d(f($))]),default:g(()=>[(S(),T(N,null,P(10,o=>d(f(E),{key:o},{default:g(()=>[s("div",Gt,L(o),1)]),_:2},1024)),64))]),_:1},16))}},Yt=et(Xt,[["__scopeId","data-v-80745526"]]),Wt={class:"carousel__item"},Ht={__name:"ExampleCustomNavigation",setup(t){const n=C(),e=C(0),a=()=>n.value.next(),o=()=>n.value.prev();return(u,p)=>(S(),T(N,null,[d(f(V),{ref_key:"carouselRef",ref:n,modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=r=>e.value=r),snapAlign:"start"},{addons:g(()=>[d(f($))]),default:g(()=>[(S(),T(N,null,P(10,r=>d(f(E),{key:r},{default:g(()=>[s("div",Wt,L(r-1),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),s("div",null,[s("button",{onClick:o},"Prev"),tt(s("input",{type:"number",min:"0",max:"9","onUpdate:modelValue":p[1]||(p[1]=r=>e.value=r)},null,512),[[yt,e.value]]),s("button",{onClick:a},"Next")])],64))}},qt={class:"carousel__item"},Kt=["onClick"],Jt={__name:"ExampleGallery",setup(t){const n=C(0),e=u=>n.value=u,a={itemsToShow:1,mouseDrag:!1,touchDrag:!1,wrapAround:!1},o={itemsToShow:7,wrapAround:!0,height:100,gap:10};return(u,p)=>(S(),T(N,null,[d(f(V),Ne({id:"gallery"},a,{modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=r=>n.value=r)}),{default:g(()=>[(S(),T(N,null,P(10,r=>d(f(E),{key:r},{default:g(()=>[s("div",qt,L(r),1)]),_:2},1024)),64))]),_:1},16,["modelValue"]),d(f(V),Ne({id:"thumbnails"},o,{modelValue:n.value,"onUpdate:modelValue":p[1]||(p[1]=r=>n.value=r)}),{addons:g(()=>[d(f($))]),default:g(()=>[(S(),T(N,null,P(10,r=>d(f(E),{key:r},{default:g(()=>[s("div",{class:"carousel__item",onClick:_=>e(r-1)},L(r),9,Kt)]),_:2},1024)),64))]),_:1},16,["modelValue"])],64))}},Qt={class:"carousel__item"},Zt={__name:"ExampleVertical",setup(t){const n={dir:"top-to-bottom",wrapAround:!0,itemsToShow:2,snapAlign:"center",gap:5,height:350};return(e,a)=>(S(),ie(f(V),J(Q(n)),{addons:g(()=>[d(f($)),d(f(ve))]),default:g(()=>[(S(),T(N,null,P(10,o=>d(f(E),{key:o},{default:g(()=>[s("div",Qt,L(o),1)]),_:2},1024)),64))]),_:1},16))}},en={class:"carousel__item"},tn={__name:"ExampleDisable",setup(t){const n={},e=C(!0);return(a,o)=>(S(),T(N,null,[s("div",null,[o[1]||(o[1]=s("span",null,"Enabled: ",-1)),tt(s("input",{id:"status-checkbox",type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=u=>e.value=u)},null,512),[[At,e.value]])]),d(f(V),Ne(n,{enabled:e.value}),{addons:g(()=>[d(f($)),d(f(ve))]),default:g(()=>[(S(),T(N,null,P(10,u=>d(f(E),{key:u},{default:g(()=>[s("div",en,L(u),1)]),_:2},1024)),64))]),_:1},16,["enabled"])],64))}},nn=et(tn,[["__scopeId","data-v-30f41d5b"]]),ln=JSON.parse('{"title":"Examples","description":"","frontmatter":{},"headers":[],"relativePath":"examples-fallback.md","filePath":"examples-fallback.md"}'),an={name:"examples-fallback.md"},rn=Object.assign(an,{setup(t){return(n,e)=>(S(),T("div",null,[e[0]||(e[0]=s("h1",{id:"examples",tabindex:"-1"},[M("Examples "),s("a",{class:"header-anchor",href:"#examples","aria-label":'Permalink to "Examples"'},"​")],-1)),e[1]||(e[1]=s("h2",{id:"basic",tabindex:"-1"},[M("Basic "),s("a",{class:"header-anchor",href:"#basic","aria-label":'Permalink to "Basic"'},"​")],-1)),e[2]||(e[2]=s("p",null,"A simple implementation of the carousel with default settings.",-1)),d(Vt),e[3]||(e[3]=s("h2",{id:"wrap-around",tabindex:"-1"},[M("Wrap Around "),s("a",{class:"header-anchor",href:"#wrap-around","aria-label":'Permalink to "Wrap Around"'},"​")],-1)),e[4]||(e[4]=s("p",null,"Demonstrates a carousel with continuous wrap-around functionality.",-1)),d(Bt),e[5]||(e[5]=s("h2",{id:"vertical",tabindex:"-1"},[M("Vertical "),s("a",{class:"header-anchor",href:"#vertical","aria-label":'Permalink to "Vertical"'},"​")],-1)),e[6]||(e[6]=s("p",null,"Showcases a vertically scrolling carousel. Adjust the height to better fit your content.",-1)),d(Zt),e[7]||(e[7]=s("h2",{id:"breakpoints",tabindex:"-1"},[M("Breakpoints "),s("a",{class:"header-anchor",href:"#breakpoints","aria-label":'Permalink to "Breakpoints"'},"​")],-1)),e[8]||(e[8]=s("p",null,"An example of a responsive carousel with breakpoints for varying screen sizes.",-1)),d(zt),e[9]||(e[9]=s("h2",{id:"autoplay",tabindex:"-1"},[M("Autoplay "),s("a",{class:"header-anchor",href:"#autoplay","aria-label":'Permalink to "Autoplay"'},"​")],-1)),e[10]||(e[10]=s("p",null,"Illustrates the carousel with autoplay functionality enabled.",-1)),d(Ft),e[11]||(e[11]=s("h2",{id:"active-classes",tabindex:"-1"},[M("Active Classes "),s("a",{class:"header-anchor",href:"#active-classes","aria-label":'Permalink to "Active Classes"'},"​")],-1)),e[12]||(e[12]=s("p",null,"An example highlighting active items with custom classes.",-1)),d(Yt),e[13]||(e[13]=s("h2",{id:"disabled",tabindex:"-1"},[M("Disabled "),s("a",{class:"header-anchor",href:"#disabled","aria-label":'Permalink to "Disabled"'},"​")],-1)),e[14]||(e[14]=s("p",null,"A demonstration of how to disable the carousel.",-1)),d(nn),e[15]||(e[15]=s("h2",{id:"custom-navigation",tabindex:"-1"},[M("Custom Navigation "),s("a",{class:"header-anchor",href:"#custom-navigation","aria-label":'Permalink to "Custom Navigation"'},"​")],-1)),e[16]||(e[16]=s("p",null,"A demonstration of the carousel with fully customizable navigation controls.",-1)),d(Ht),e[17]||(e[17]=s("h2",{id:"gallery",tabindex:"-1"},[M("Gallery "),s("a",{class:"header-anchor",href:"#gallery","aria-label":'Permalink to "Gallery"'},"​")],-1)),e[18]||(e[18]=s("p",null,"Transforms the carousel into a gallery-style component.",-1)),d(Jt)]))}});export{ln as __pageData,rn as default};
