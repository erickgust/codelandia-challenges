const $feed = document.querySelector('[data-js="feed"]');
const imgUrl = 'assets/heart.svg';

function createElement(elementName) {
  return document.createElement(elementName);
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

async function getPosts() {
  const response = await fetch('./posts.json');
  return response.json();
}

async function addPostInfos() {
  const posts = await getPosts();

  posts.forEach(({date, title, desc}) => {
    createNewPost(title, desc, date);
  });
}

addPostInfos();
