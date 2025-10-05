import{a as f,S as m,i as s}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="https://pixabay.com/api/",y="52610822-f7e96d61057c97541c6e10504";async function g(i){const o={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(p,{params:o})).data}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const o=i.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy"/>
        </a>
        <ul class="info">
          <li><b>Likes:</b> ${e.likes}</li>
          <li><b>Views:</b> ${e.views}</li>
          <li><b>Comments:</b> ${e.comments}</li>
          <li><b>Downloads:</b> ${e.downloads}</li>
        </ul>
      </li>`).join("");u.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){u.innerHTML=""}function w(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}const a=document.querySelector(".form"),q=a.querySelector('input[name="query"], input[name="search-text"]');a.addEventListener("submit",async i=>{i.preventDefault();const o=q.value.trim();if(!o){s.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}L(),w(),await new Promise(e=>requestAnimationFrame(e));try{const e=await g(o);if(c(),e.hits.length===0){s.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(e.hits)}catch{c(),s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{a.reset()}});
//# sourceMappingURL=index.js.map
