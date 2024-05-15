document.addEventListener('DOMContentLoaded', (event) => {
  const searchForm = document.getElementById('searchForm');
  const cardContainer = document.querySelector('.card-container');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const searchTerm = document.getElementById('search').value.toLowerCase().trim(); // Trim leading/trailing spaces
  const bookCards = cardContainer.querySelectorAll('.book-card');

  bookCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (!title.includes(searchTerm)) {
      card.style.display = 'none'; // Hide books that don't match the search term
    } else {
      card.style.display = ''; // Show books that match the search term
    }
  });
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

  const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", availability: "Available" },
    { title: "Pride and Prejudice", author: "Jane Austen", availability: "On Loan" },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", availability: "Available" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", availability: "On Loan" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", availability: "Available" },
    { title: "Fahrenheit 451", author: "Ray Bradbury", availability: "Available" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", availability: "On Loan" },
    { title: "Moby Dick", author: "Herman Melville", availability: "Available" },
    { title: "The Night Circus", author: "Erin Morgenstern", availability: "Available" },
    { title: "The Book Thief", author: "Markus Zusak", availability: "On Loan" },
    { title: "The Secret History", author: "Donna Tartt", availability: "Available" },
    { title: "War and Peace", author: "Leo Tolstoy", availability: "Available" },
    { title: "1984", author: "George Orwell", availability: "On Loan" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", availability: "Available" },
    { title: "Animal Farm", author: "George Orwell", availability: "Available" },
    { title: "Little Women", author: "Louisa May Alcott", availability: "On Loan" },
    { title: "Brave New World", author: "Aldous Huxley", availability: "Available" }
];

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
