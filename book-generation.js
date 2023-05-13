const cardContainer = document.querySelector('.book-container');

const books = [
  {
    title: 'Book Title 1',
    author: 'Author Name 1',
    coverImage: 'https://picsum.photos/200',
    link: '#'
  },
  {
    title: 'Book Title 2',
    author: 'Author Name 2',
    coverImage: 'https://picsum.photos/200',
    link: '#'
  },
  {
    title: 'Book Title 3',
    author: 'Author Name 3',
    coverImage: 'https://picsum.photos/200',
    link: '#'
  },
  {
    title: 'Book Title 4',
    author: 'Author Name 4',
    coverImage: 'https://picsum.photos/200',
    link: '#'
  },

];

function createBookCard(book) {
  const card = document.createElement('div');
  card.classList.add('card');
  
  const coverImg = document.createElement('img');
  coverImg.src = book.coverImage;
  coverImg.alt = `Cover Image for ${book.title}`;
  card.appendChild(coverImg);
  
  const title = document.createElement('h2');
  title.textContent = book.title;
  card.appendChild(title);
  
  const author = document.createElement('p');
  author.textContent = book.author;
  card.appendChild(author);
  
  const readMoreLink = document.createElement('a');
  readMoreLink.href = book.link;
  readMoreLink.textContent = 'Read More';
  card.appendChild(readMoreLink);
  
  return card;
}

function addBooksToPage(numBooks) {
  for (let i = 0; i < numBooks; i++) {
    const bookIndex = i % books.length;
    const book = books[bookIndex];
    const card = createBookCard(book);
    cardContainer.appendChild(card);
  }
}

numberOfBooks = Math.floor(Math.random() * 10) + 5;
addBooksToPage(numberOfBooks);