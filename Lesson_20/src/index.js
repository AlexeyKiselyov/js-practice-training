// import { lordApi } from './js/fetchLord';
// import { createMarkup } from './js/markup';

//--------fetch----------
const BASE_URL = 'https://the-one-api.dev/v2/';
const character = 'character';
const bearer = 'Bearer XJlq9OFMcHAy8pAQK7xj';
const limit = 10;

const options = {
  headers: {
    Authorization: bearer,
  },
};

export function lordApi(page = 1) {
  const response = fetch(
    `${BASE_URL}${character}/?limit=${limit}&page=${page}`,
    options
  )
    .then(data => {
      if (!data.ok) {
        throw new Error('Fail');
      }
      return data.json();
    })
    .catch(err => console.error(err));
  return response;
}

// --------markup--------

export function createMarkup(arr) {
  const markup = arr.reduce(
    (acc, { name, gender, race }) =>
      acc +
      `  <li>
    <h2>Name: ${name}</h2>
    <p>Race: ${race}</p>
    <p>Gender: ${gender}</p>
  </li>`,
    ''
  );
  return markup;
}

// ---------------------------

const list = document.querySelector('.js-list');
const guard = document.querySelector('.js-guard');

const optionsObserver = {
  root: null,
  rootMargin: '1000px',
  treshold: 1,
};

const observer = new IntersectionObserver(handlerLoadMore, optionsObserver);

// const loadMore = document.querySelector('.js-load');
// loadMore.addEventListener('click', handlerLoadMore);

let page = 1;

lordApi().then(resp => {
  list.insertAdjacentHTML('beforeend', createMarkup(resp.docs));
  observer.observe(guard);
  // loadMore.setAttribute('hidden', '');
});

// function handlerLoadMore(evt) {
//   page += 1;

//   lordApi(page).then(resp => {
//     list.insertAdjacentHTML('beforeend', createMarkup(resp.docs));
//     if (resp.page === 5) {
//       // loadMore.removeAttribute('hidden');
//       observer.unobserve(guard);
//       alert('End of search');
//     }
//   });
// }

function handlerLoadMore(entries) {
  console.log(entries);
  const entry = entries[0];
  if (entry.isIntersecting) {
    page += 1;
    lordApi(page).then(resp => {
      list.insertAdjacentHTML('beforeend', createMarkup(resp.docs));
      if (resp.page === resp.pages) {
        observer.unobserve(guard);
        alert('End of search');
      }
    });
  }
}
