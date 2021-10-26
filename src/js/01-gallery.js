// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery')



// 1. Создание и рендер разметки по массиву данных galleryItems 
//и предоставленному шаблону элемента галереи.

const galleryMarkup = createPhotoMarkup(galleryItems);

galleryDiv.insertAdjacentHTML('beforeend', galleryMarkup);

function createPhotoMarkup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" 
href="${original}">
  <img
  class="gallery__image"
   data-source="${original}"
  src="${preview}"
   alt="${description}"
   title ="${description}"/>
</a>
    `;
    })
    .join('');
}

// 2. Инициализация библиотеки 
// Добавляет отображение подписей к изображениям из атрибута alt.
// Пусть подпись будет снизу и появляется
// через 250 миллисекунд после открытия изображения.

let gallery = new SimpleLightbox('.gallery a', ({captionDelay: '250'}));
gallery.on('show.simplelightbox', function () {
});