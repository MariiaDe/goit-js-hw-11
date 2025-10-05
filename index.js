import{a as d,S as m,i as s}from"./assets/vendor-BSTwZ_tR.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const f="https://pixabay.com/api/",p="52610822-f7e96d61057c97541c6e10504";async function y(r){const n={key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(f,{params:n})).data}const u=document.querySelector(".gallery");document.querySelector(".loader");const g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const n=r.map(e=>`
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
      </li>`).join("");u.insertAdjacentHTML("beforeend",n),g.refresh()}function L(){u.innerHTML=""}function b(){const r=document.querySelector(".loader");r.classList.remove("hidden"),r.textContent="Loading images, please wait..."}function a(){const r=document.querySelector(".loader");r.classList.add("hidden"),r.textContent=""}const l=document.querySelector(".form"),w=l.querySelector('input[name="query"], input[name="search-text"]');l.addEventListener("submit",async r=>{r.preventDefault();const n=w.value.trim();if(!n){s.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}L(),b(),await new Promise(e=>requestAnimationFrame(e));try{const e=await y(n);if(a(),e.hits.length===0){s.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(e.hits)}catch{a(),s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{a(),l.reset()}});
//# sourceMappingURL=index.js.map
