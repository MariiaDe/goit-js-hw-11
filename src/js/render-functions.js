import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

export const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      (image) => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy"/>
        </a>
        <ul class="info">
          <li><b>Likes:</b> ${image.likes}</li>
          <li><b>Views:</b> ${image.views}</li>
          <li><b>Comments:</b> ${image.comments}</li>
          <li><b>Downloads:</b> ${image.downloads}</li>
        </ul>
      </li>`
    )
    .join("");

  galleryContainer.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = "";
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('hidden');
  loader.textContent = 'Loading images, please wait...';
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
  loader.textContent = '';
}