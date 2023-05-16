const cardContainer = document.querySelector('.book-container');
const books = [];

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
    // const bookIndex = i % books.length;
    // const book = books[bookIndex];
    const book = books[i];
    const card = createBookCard(book);
    cardContainer.appendChild(card);
  }
}

numberOfBooks = Math.floor(Math.random() * 10) + 10;

function BookFactory(title, author, coverImageNum, link) {
  this.title = title
  this.author = author
  this.coverImage = `https://picsum.photos/45${coverImageNum}`
  this.link = "#"
}

for (let i = 0; i< numberOfBooks; i++) {
  books.push(new BookFactory(
    `Titulo ${i}`,
    `Autor ${i}`,
    i,  
  ))

}

addBooksToPage(numberOfBooks);


