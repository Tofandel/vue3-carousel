import{u as i,a as p}from"./theme.C0tSeRDK.js";import{d as l,p as u,q as c,v as f,o as _,c as m,_ as b}from"./framework.BNubF-Io.js";const v=l({__name:"VPCarbonAds",props:{carbonAds:{}},setup(r){const{page:d}=i(),a=r.carbonAds,{isAsideEnabled:s}=p(),o=u();let n=!1;function t(){if(!n){n=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${a.code}&placement=${a.placement}`,e.async=!0,o.value.appendChild(e)}}return c(()=>d.value.relativePath,()=>{var e;n&&s.value&&((e=window._carbonads)==null||e.refresh())}),a&&f(()=>{s.value?t():c(s,e=>e&&t())}),(e,h)=>(_(),m("div",{class:"VPCarbonAds",ref_key:"container",ref:o},null,512))}}),k=b(v,[["__scopeId","data-v-9d61e8a2"]]);export{k as default};
