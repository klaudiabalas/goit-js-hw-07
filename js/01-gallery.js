import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(`.gallery`);
document.body.addEventListener("keypress", (event) => {
  if (event.key === "Escape") basicLightBox.close();
});

for (let item of galleryItems) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const linkGallery = document.createElement("a");
  linkGallery.classList.add("gallery__link");
  linkGallery.href = item.original;

  const imageGallery = document.createElement("img");
  imageGallery.classList.add("gallery__image");
  imageGallery.scr = imageGallery.preview;
  imageGallery.dataset.source = item.original;
  imageGallery.alt = item.description;
}

linkGallery.appendChild(imageGallery);
galleryItem.appendChild(linkGallery);
gallery.appendChild(galleryItem);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const lightbox = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  lightbox.show();
});
