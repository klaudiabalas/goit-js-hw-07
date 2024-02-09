import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const arrayGallery = galleryItems.map(
  (
    item
  ) => `<li><a class="gallery__item" href="${itam.original}"><img class="gallery__image"
  src="${item.preview}" alt="${item.description}"/></a></li>`
);

gallery.innerHTML = arrayGallery.join("");

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
