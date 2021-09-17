const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
]
const refs = {
  gallery: document.querySelector(".js-gallery"),
  lightBox: document.querySelector(".lightbox"),
  originalImage: document.querySelector(".lightbox__image"),
  closeLightBoxBtn: document.querySelector('[data-action="close-lightbox"]')
}
const { gallery, lightBox, originalImage, closeLightBoxBtn } = refs;
//Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
//Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
const createCards = (card) => {
  return `<li class = "gallery__item">
            <a class="gallery__link" href = "${card.original}">
              <img class="gallery__image" src = "${card.preview}" data-source = "${card.original}" alt = "${card.description}"/>
            </a>
          </li>`
}
const tableWithCards = galleryItems.map(createCards).join('')
gallery.insertAdjacentHTML("beforeend", tableWithCards)
//Открытие модального окна по клику на элементе галереи.
//Подмена значения атрибута src элемента img.lightbox__image.
gallery.addEventListener("click", increase)
function increase (event) {
  if (event.target.nodeName !== "IMG") 
    return
  event.preventDefault()
  lightBox.classList.add("is-open")
  originalImage.src = event.target.dataset.source
  originalImage.alt = event.target.alt  
}
//Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
//Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того,
// чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
closeLightBoxBtn.addEventListener("click", closeOriginal)
function closeOriginal () {
  lightBox.classList.remove("is-open")
  originalImage.src = ''
  originalImage.alt = ''
}