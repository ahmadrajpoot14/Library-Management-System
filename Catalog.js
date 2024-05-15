document.addEventListener('DOMContentLoaded', (event) => {
  const searchForm = document.getElementById('searchForm');
  const cardContainer = document.querySelector('.card-container');

  // Load books from localStorage
  let books = JSON.parse(localStorage.getItem('books')) || [];

  // Function to create a book card
  function createBookCard(book) {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.innerHTML = `
      <img src="${book.image}" alt="Book Cover">
      <h3>${book.title}</h3>
      <p>By ${book.author}</p>
    `;
    return card;
  }

  // Create a book card for each book and add it to the card container
  books.forEach((book) => {
    const card = createBookCard(book);
    cardContainer.appendChild(card);
     // Add an event listener to the book card
  card.addEventListener('click', () => {
    // When a book card is clicked, save the book data to localStorage and open GetBook.html
    localStorage.setItem('selectedBook', JSON.stringify(book));
    window.location.href = 'GetBook.html';
  });
  });

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const searchTerm = document.getElementById('search').value.toLowerCase().trim(); // Trim leading/trailing spaces
    const bookCards = document.querySelectorAll('.book-card');

    bookCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      if (!title.includes(searchTerm)) {
        card.style.display = 'none'; // Hide books that don't match the search term
      } else {
        card.style.display = ''; // Show books that match the search term
      }
    });

    const exactMatch = books.find((book) => book.title.toLowerCase() === searchTerm);
    const existingMatch = cardContainer.querySelector(`.book-card h3:contains("${searchTerm}")`); // Target book card with matching title
    if (existingMatch) {
      existingMatch.parentElement.remove(); // Remove the entire book card element
    }

    if (exactMatch) {
      // Only show the exact book that matches the search term
      const card = document.createElement('div');
      card.classList.add('book-card');
      card.innerHTML = `
            <img src=".assets/book-cover.jpg" alt="Book Cover"> <h3>${exactMatch.title}</h3>
            <p>By ${exactMatch.author}</p>
            <span class="availability">${exactMatch.availability}</span>
          `;
      cardContainer.appendChild(card);
    } else {
      cardContainer.innerHTML = '<p>No book found matching your search.</p>';
    }
  });

  document.getElementById('search').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();

    // If the search box is cleared, show all books
    if (!searchTerm) {
      const bookCards = cardContainer.querySelectorAll('.book-card');
      bookCards.forEach(card => {
        card.style.display = '';
      });
    }
  });
});
