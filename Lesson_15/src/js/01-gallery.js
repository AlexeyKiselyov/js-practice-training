// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const data = galleryItems.reduce(item => {
  return acc + <div>item</div>, '';
});

const gallery = document.querySelector('.gallery');
