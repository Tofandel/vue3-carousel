import{B as l}from"./Badge.45b5fcce.js";import{_ as p,r as o,c,a as n,b as a,e,d as t,o as u}from"./app.e0cba8ab.js";const i={components:{Badge:l}},M='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Basic Using","slug":"basic-using"},{"level":2,"title":"Available Props","slug":"available-props"},{"level":2,"title":"Slots","slug":"slots"},{"level":3,"title":"Slides/Default","slug":"slides-default"},{"level":3,"title":"Addons","slug":"addons"},{"level":3,"title":"Slots Attributes","slug":"slots-attributes"}],"relativePath":"getting-started.md","lastUpdated":1659868788483}',d=e(`<h1 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>First step is to install it using <code>yarn</code> or <code>npm</code>:</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> vue3-carousel

<span class="token comment"># or use yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> vue3-carousel
</code></pre></div><h2 id="basic-using" tabindex="-1">Basic Using <a class="header-anchor" href="#basic-using" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:items-to-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1.5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide in 10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ slide }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#addons</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation</span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pagination</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes</span>
<span class="token keyword">import</span> <span class="token string">&#39;vue3-carousel/dist/carousel.css&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Carousel<span class="token punctuation">,</span> Slide<span class="token punctuation">,</span> Pagination<span class="token punctuation">,</span> Navigation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-carousel&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Carousel<span class="token punctuation">,</span>
    Slide<span class="token punctuation">,</span>
    Pagination<span class="token punctuation">,</span>
    Navigation<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="available-props" tabindex="-1">Available Props <a class="header-anchor" href="#available-props" aria-hidden="true">#</a></h2>`,7),r=n("thead",null,[n("tr",null,[n("th",null,"Prop"),n("th",null,"Default"),n("th",null,"Description")])],-1),k=n("tr",null,[n("td",null,[n("code",null,"itemsToShow")]),n("td",null,"1"),n("td",null,"count of items to showed per view (can be a fraction).")],-1),g=n("tr",null,[n("td",null,[n("code",null,"itemsToScroll")]),n("td",null,"1"),n("td",null,"number of slides to be scrolled")],-1),h=n("td",null,[n("s",null,[n("code",null,"currentSlide")])],-1),_=n("td",null,[n("s",null,"0")],-1),m=n("s",null,"index number of the initial slide.",-1),v=t(),b=n("tr",null,[n("td",null,[n("code",null,"wrapAround")]),n("td",null,"false"),n("td",null,"enable infinite scrolling mode.")],-1),f=n("tr",null,[n("td",null,[n("code",null,"snapAlign")]),n("td",null,"'center'"),n("td",null,"controls the carousel position alignment, can be 'start', 'end', 'center[-odd|-even]'")],-1),q=n("tr",null,[n("td",null,[n("code",null,"transition")]),n("td",null,"300"),n("td",null,"sliding transition time in ms.")],-1),S=n("tr",null,[n("td",null,[n("code",null,"autoplay")]),n("td",null,"0"),n("td",null,"Auto play time in ms.")],-1),x=n("tr",null,[n("td",null,[n("code",null,"settings")]),n("td"),n("td",null,"an object to pass all settings.")],-1),y=n("tr",null,[n("td",null,[n("code",null,"breakpoints")]),n("td",null,"null"),n("td",null,"an object to pass all the breakpoints settings.")],-1),A=n("td",null,[n("code",null,"modelValue")],-1),C=n("td",null,"0",-1),T=t("index number of the initial slide. "),w=n("td",null,[n("code",null,"mouseDrag")],-1),P=n("td",null,"true",-1),D=t("toggle mouse dragging "),B=n("td",null,[n("code",null,"touchDrag")],-1),N=n("td",null,"true",-1),V=t("toggle pointer touch dragging "),I=n("td",null,[n("code",null,"pauseAutoplayOnHover")],-1),j=n("td",null,"true",-1),U=t("toggle if auto play should pause on mouse hover "),E=n("td",null,[n("code",null,"dir")],-1),$=n("td",null,"ltr",-1),G=t("controls the carousel direction. Available values 'ltr', 'rtl' "),R=e(`<h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="slides-default" tabindex="-1">Slides/Default <a class="header-anchor" href="#slides-default" aria-hidden="true">#</a></h3><p>Used to render the carousel items. You can use either the default slot or wrap element in <code>slides</code> slot.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#slides</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slide</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide in 10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Slide</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="addons" tabindex="-1">Addons <a class="header-anchor" href="#addons" aria-hidden="true">#</a></h3><p>Used to add display carousel addons components.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span><span class="token punctuation">&gt;</span></span>
  ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#addons</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Navigation</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="slots-attributes" tabindex="-1">Slots Attributes <a class="header-anchor" href="#slots-attributes" aria-hidden="true">#</a></h3><table><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>slideWidth</code></td><td>the width of a single slide element.</td></tr><tr><td><code>currentSlide</code></td><td>index number of the current slide.</td></tr><tr><td><code>slidesCount</code></td><td>the count of all slides</td></tr></tbody></table><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h4><div class="language-vue"><div class="highlight-lines"><br><br><br><br><br><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><div class="highlighted">\xA0</div><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slide</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide in slides<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slide<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>carousel__item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ slide }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Slide</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#addons</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ slidesCount }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Navigation</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slidesCount &gt; 1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,11);function F(H,O,W,Y,z,J){const s=o("Badge");return u(),c("div",null,[d,n("table",null,[r,n("tbody",null,[k,g,n("tr",null,[h,_,n("td",null,[m,v,a(s,{text:"Deprecated 0.1.20",type:"danger"})])]),b,f,q,S,x,y,n("tr",null,[A,C,n("td",null,[T,a(s,{text:"0.1.20"})])]),n("tr",null,[w,P,n("td",null,[D,a(s,{text:"0.1.23"})])]),n("tr",null,[B,N,n("td",null,[V,a(s,{text:"0.1.23"})])]),n("tr",null,[I,j,n("td",null,[U,a(s,{text:"0.1.25"})])]),n("tr",null,[E,$,n("td",null,[G,a(s,{text:"0.1.38"})])])])]),R])}var Q=p(i,[["render",F]]);export{M as __pageData,Q as default};