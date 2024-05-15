window.onload = () => {
    // Retrieve the selected book's data from localStorage
    let book = JSON.parse(localStorage.getItem('selectedBook'));
    
    // Populate the book-card div with the selected book's data
    document.getElementById('book-image').src = book.image;
    document.getElementById('book-image').alt = book.title + ' Cover';
    document.getElementById('book-title').innerText = book.title;
    document.getElementById('book-author').innerText = 'By ' + book.author;
    document.getElementById('book-description').innerText = book.description;
    document.getElementById('book-availability').innerText = book.availability;

    // Get the loan button element
    let loanButton = document.getElementById('loan-button');

    // Check if the book is on loan
    if (book.availability === 'On Loan') {
        // If on loan, remove the green-button class and add the red-button class to the loan button
        loanButton.classList.add('red-button');
        document.getElementById('book-availability').innerHTML = 'On Loan 😞';
    }

    // Add an event listener to the loan button
    document.getElementById('loan-button').addEventListener('click', () => {
        // Check the book's availability
        if (book.availability === 'Available') {
            alert('You have successfully loaned 🎉' + book.title);
            book.availability = 'On Loan';
            localStorage.setItem('selectedBook', JSON.stringify(book));
            document.getElementById('book-availability').innerHTML = 'On Loan 😞';
            // Remove the green-button class and add the red-button class to the loan button when clicked
            loanButton.classList.remove('green-button');
            loanButton.classList.add('red-button');

            // Update the book's availability in the catalog
            let catalog = JSON.parse(localStorage.getItem('catalog'));
            let bookInCatalog = catalog.find(b => b.title === book.title);
            if (bookInCatalog) {
                bookInCatalog.availability = 'On Loan';
                localStorage.setItem('catalog', JSON.stringify(catalog));
            }
             // Update the books array in the localStorage
            let books = JSON.parse(localStorage.getItem('books'));
            let bookInBooks = books.find(b => b.title === book.title);
            if (bookInBooks) {
            bookInBooks.availability = 'On Loan';
            localStorage.setItem('books', JSON.stringify(books));
        }
        } else {
            alert('Sorry, ' + book.title + ' is currently on loan.');
        }
    });
};
