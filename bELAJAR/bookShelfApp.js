const books = JSON.parse(localStorage.getItem('books')) || [];

function renderBooks() {
    const unreadBooks = document.getElementById('unreadBooks');
    const readBooks = document.getElementById('readBooks');
    unreadBooks.innerHTML = '';
    readBooks.innerHTML = '';

    books.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.textContent = book.title;

        if (book.isRead) {
            readBooks.appendChild(bookItem);
        } else {
            unreadBooks.appendChild(bookItem);
        }

        const toggleButton = document.createElement('button');
        toggleButton.textContent = book.isRead ? 'Belum Dibaca' : 'Selesai Dibaca';
        toggleButton.onclick = () => toggleReadStatus(book.id);
        bookItem.appendChild(toggleButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.onclick = () => deleteBook(book.id);
        bookItem.appendChild(deleteButton);
    });
}

function addBook(title, isRead = false) {
    const book = {
        id: Date.now(),
        title,
        isRead
    };
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    renderBooks();
}

function toggleReadStatus(id) {
    const book = books.find(book => book.id === id);
    book.isRead = !book.isRead;
    localStorage.setItem('books', JSON.stringify(books));
    renderBooks();
}

function deleteBook(id) {
    const bookIndex = books.findIndex(book => book.id === id);
    books.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
    renderBooks();
}

document.getElementById('addBookButton').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    addBook(title);
});

renderBooks();
