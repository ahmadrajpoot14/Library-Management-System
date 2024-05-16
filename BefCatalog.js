let books = [
        {title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', availability: 'Avaliable', description: 'An epic high fantasy novel set in the mystical land of Middle-earth, featuring a perilous quest to destroy a powerful ring, and exploring themes of friendship, courage, and the struggle between good and evil.', image: '.assets/lor.jpg'},
        {title: 'Pride and Prejudice', author: 'Jane Austen', availability: 'On Loan', description: 'A classic novel of manners, love, and society in 19th-century England.', image: '.assets/pp.jpg'},
        {title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', availability: 'Available', description: 'A humorous science fiction series about the adventures of an unwitting human and his alien friend.', image: '.assets/hitch.jpg'},
        {title: 'To Kill a Mockingbird', author: 'Harper Lee', availability: 'On Loan', description: 'A Pulitzer Prize-winning novel about racial injustice in the American South.', image: '.assets/mockb.jpg'},
        {title: 'The Fault in our Stars', author: 'John Green', availability: 'Avaliable', description: 'A poignant novel of love and loss, set in contemporary times. It tells the story of two teenagers, Hazel and Gus, who meet in a cancer support group and embark on a journey of deep connection and shared experiences.', image: '.assets/fault.jpg'},
        {title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', availability: 'Available', description: 'The first book in the Harry Potter series, introducing the world to the boy wizard.', image: '.assets/harryp.jpg'},
        {title: 'Fahrenheit 451', author: 'Ray Bradbury', availability: 'Available', description: 'A dystopian novel about a future society where books are banned and "firemen" burn any they find.', image: '.assets/451.jpg'},
        {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', availability: 'On Loan', description: 'A critique of the American Dream set in the Jazz Age.', image: '.assets/greatg.jpg'},
        {title: 'Moby Dick', author: 'Herman Melville', availability: 'Available', description: 'A seafaring adventure about one man\'s obsession with a great white whale.', image: '.assets/mobyd.jpg'},
        {title: 'The Night Circus', author: 'Erin Morgenstern', availability: 'Available', description: 'A magical novel about a mysterious circus that appears without warning.', image: '.assets/circus.jpg'},
        {title: 'The Book Thief', author: 'Markus Zusak', availability: 'On Loan', description: 'A novel about a young girl who finds solace in books during World War II.', image: '.assets/Thief.jpg'},
        {title: 'The Secret History', author: 'Donna Tartt', availability: 'Available', description: 'A novel about a group of classics students at a small New England college.', image: '.assets/history.png'},
        {title: 'War and Peace', author: 'Leo Tolstoy', availability: 'Available', description: 'A sweeping epic of Russian society during the Napoleonic Era.', image: '.assets/warpeace.jpg'},
        {title: '1984', author: 'George Orwell', availability: 'On Loan', description: 'A dystopian novel about a future totalitarian state where "Big Brother" is always watching.', image: '.assets/1984.png'},
        {title: 'The Catcher in the Rye', author: 'J.D. Salinger', availability: 'Available', description: 'A novel about teenage rebellion and alienation.', image: '.assets/catcher.jpg'},
        {title: 'Animal Farm', author: 'George Orwell', availability: 'Available', description: 'A satirical allegory of Soviet totalitarianism.', image: '.assets/animalfarm.jpg'},
        {title: 'Little Women', author: 'Louisa May Alcott', availability: 'On Loan', description: 'A novel about the lives and loves of four sisters growing up during the American Civil War.', image: '.assets/littlewomen.jpg'},
        {title: 'Brave New World', author: 'Aldous Huxley', availability: 'Available', description: 'A dystopian novel about a future society driven by technology and pleasure.', image: '.assets/bravenewworld.jpg'}
      ];
  
  // Store the books array in localStorage
  localStorage.setItem('books', JSON.stringify(books));
  