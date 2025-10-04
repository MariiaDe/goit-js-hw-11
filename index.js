import{a as f,S as m,i as s}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",y="52610822-f7e96d61057c97541c6e10504";async function g(i){const o={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(p,{params:o})).data}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const o=i.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/>
        </a>
        <ul class="info">
          <li><b>Likes:</b> ${t.likes}</li>
          <li><b>Views:</b> ${t.views}</li>
          <li><b>Comments:</b> ${t.comments}</li>
          <li><b>Downloads:</b> ${t.downloads}</li>
        </ul>
      </li>`).join("");u.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){u.innerHTML=""}function w(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}const a=document.querySelector(".form"),S=a.querySelector("input[name='search-text']");a.addEventListener("submit",async i=>{i.preventDefault();const o=S.value.trim();if(!o){s.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}L(),w();try{const t=await g(o);if(c(),t.hits.length===0){s.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(t.hits)}catch{c(),s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{a.reset()}});
//# sourceMappingURL=index.js.map
