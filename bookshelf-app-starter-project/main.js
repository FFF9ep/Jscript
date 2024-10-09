// Inisialisasi variabel untuk key localStorage
const STORAGE_KEY = 'BOOKSHELF_APPS';
let books = [];

// Fungsi untuk memeriksa apakah localStorage didukung
function isStorageExist() {
  if (typeof Storage === 'undefined') {
    alert('Browser kamu tidak mendukung local storage');
    return false;
  }
  return true;
}

// Fungsi untuk menyimpan data ke localStorage
function saveData() {
  const parsed = JSON.stringify(books);
  localStorage.setItem(STORAGE_KEY, parsed);
}

// Fungsi untuk memuat data dari localStorage
function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  if (serializedData !== null) {
    books = JSON.parse(serializedData);
    // Konversi tahun ke number jika diperlukan
    books = books.map(book => ({
      ...book,
      year: parseInt(book.year),  // Ubah year menjadi number
    }));
  }
}


// Fungsi untuk membuat objek buku
function createBookObject(id, title, author, year, isComplete) {
  return {
    id,
    title,
    author,
    year,
    isComplete,
  };
}

// Fungsi untuk membuat elemen buku
function makeBookElement(bookObject) {
  const bookTitle = document.createElement('h3');
  bookTitle.innerText = bookObject.title;
  bookTitle.setAttribute('data-testid', 'bookItemTitle');

  const bookAuthor = document.createElement('p');
  bookAuthor.innerText = `Penulis: ${bookObject.author}`;
  bookAuthor.setAttribute('data-testid', 'bookItemAuthor');

  const bookYear = document.createElement('p');
  bookYear.innerText = `Tahun: ${bookObject.year}`;
  bookYear.setAttribute('data-testid', 'bookItemYear');

  const buttonContainer = document.createElement('div');

  const completeButton = document.createElement('button');
  completeButton.setAttribute('data-testid', 'bookItemIsCompleteButton');
  completeButton.innerText = bookObject.isComplete ? 'Belum selesai dibaca' : 'Selesai dibaca';
  completeButton.addEventListener('click', function () {
    toggleBookCompleteStatus(bookObject.id);
  });

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('data-testid', 'bookItemDeleteButton');
  deleteButton.innerText = 'Hapus Buku';
  deleteButton.addEventListener('click', function () {
    removeBook(bookObject.id);
  });

  buttonContainer.append(completeButton, deleteButton);

  const container = document.createElement('div');
  container.setAttribute('data-bookid', bookObject.id);
  container.setAttribute('data-testid', 'bookItem');
  container.append(bookTitle, bookAuthor, bookYear, buttonContainer);

  return container;
}

// Fungsi untuk menampilkan buku di rak yang sesuai
function renderBooks() {
  const incompleteBookList = document.getElementById('incompleteBookList');
  const completeBookList = document.getElementById('completeBookList');

  incompleteBookList.innerHTML = '';
  completeBookList.innerHTML = '';

  for (const book of books) {
    const bookElement = makeBookElement(book);
    if (book.isComplete) {
      completeBookList.append(bookElement);
    } else {
      incompleteBookList.append(bookElement);
    }
  }
}

//Fungsi Menambahkan Buku
function addBook() {
  const title = document.getElementById('bookFormTitle').value;
  const author = document.getElementById('bookFormAuthor').value;
  const year = parseInt(document.getElementById('bookFormYear').value);  // Pastikan year diubah menjadi number
  const isComplete = document.getElementById('bookFormIsComplete').checked;

  const generatedID = new Date().getTime();
  const newBook = createBookObject(generatedID, title, author, year, isComplete);  // year sekarang number
  books.push(newBook);

  saveData();
  renderBooks();
}


// Fungsi untuk memindahkan buku antar rak
function toggleBookCompleteStatus(bookId) {
  const bookTarget = books.find((book) => book.id === bookId);
  if (bookTarget === null) return;

  bookTarget.isComplete = !bookTarget.isComplete;
  saveData();
  renderBooks();
}

// Fungsi untuk menghapus buku
function removeBook(bookId) {
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex === -1) return;

  books.splice(bookIndex, 1);
  saveData();
  renderBooks();
}

// Fungsi utama saat dokumen sudah siap
document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('bookForm');
  submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addBook();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
    renderBooks();
  }
});
