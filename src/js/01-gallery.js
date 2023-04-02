// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

for (const item of galleryItems) {
  gallery.insertAdjacentHTML(
    'beforeend',
    `<li>
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="Image description" />
        </a>
    </li>`
  );
}

gallery.addEventListener('click', event => {
  event.preventDefault();
});

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

lightbox.on('show.simplelightbox');
