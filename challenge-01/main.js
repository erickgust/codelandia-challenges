const $feed = document.querySelector('[data-js="feed"]');
const imgUrl = 'assets/heart.svg';

function createElement(elementName) {
  return document.createElement(elementName);
}

function createNewPost(title, desc, date) {
  const $post = createElement('article');
  const $title = createElement('h2');
  const $desc = createElement('p');

  $title.textContent = title;
  $desc.textContent = desc;
  $post.className = 'blog-post';
  $title.className = 'title';
  $desc.className = 'desc';

  $post.append(cardInfo(date), $title, $desc);
  $feed.appendChild($post);
}

function cardInfo(value) {
  const $div = createElement('div');
  const $date = createElement('span');
  const $button = createElement('button');
  const $img = createElement('img');

  $date.textContent = value;
  $img.src = imgUrl;
  $img.alt = 'Favorite';
  $div.className = 'info';

  $button.appendChild($img);
  $div.append($date, $button);

  return $div;
}

createNewPost(
  'Agora é oficial: o Windows 11 está vindo',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
  '02 de jul, 2021'
);
createNewPost(
  'Agora é oficial: o Windows 11 está vindo',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
  '02 de jul, 2021'
);
createNewPost(
  'Agora é oficial: o Windows 11 está vindo',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
  '02 de jul, 2021'
);
