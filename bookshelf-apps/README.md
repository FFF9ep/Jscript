# Submission Belajar Membuat Front-End Web untuk Pemula

🌀 "Belajar Membuat Front-End Web untuk Pemula"

<p align='center'>
  <a href="https://www.w3.org/standards/webdesign/htmlcss">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/></a>&nbsp;&nbsp;
  <a href="https://www.w3.org/standards/webdesign/htmlcss">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/></a>&nbsp;&nbsp;
  <a href="https://www.javascript.com/">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/></a>&nbsp;&nbsp;
</p>

<div align="center">

| Profile |              |
| ------- | ------------ |
| Nama    | Fandi Ardyan |

</div>

Proyek submission untuk kelas **Belajar Membuat Front-End Web untuk Pemula Dicoding**.

## Resource

- HTML

- CSS

- JavaScript

- Visual Studio Code (VSCode)

## Kriteria Submission

Buatlah aplikasi web yang dapat memasukan data buku ke dalam rak, memindahkan data buku antar rak, dan menghapus data buku dari rak.

Untuk lebih jelasnya, terdapat 5 kriteria utama pada Bookshelf Apps yang harus Anda buat.

### Kriteria 1. Mampu Menambahkan Data Buku

- [x] Bookshelf Apps harus mampu **menambahkan data buku baru**.

- [x] Data buku yang disimpan merupakan objek JavaScript dengan struktur berikut:

  ```javascript
  {
    id: string | number,
    title: string,
    author: string,
    year: number,
    isComplete: boolean,
  }
  ```

  ***

### Kriteria 2: Memiliki Dua Rak Buku

- [x] Bookshelf Apps harus **memiliki** **2** **Rak buku**. Yakni, “Belum selesai dibaca” dan “Selesai dibaca”.
- [x] Rak buku "Belum selesai dibaca" hanya menyimpan buku jika properti `isComplete` bernilai _false_.
- [x] Rak buku "Selesai dibaca" hanya menyimpan buku jika properti `isComplete` bernilai _true_.

### Kriteria 3: Dapat Memindahkan Buku antar Rak

- [x] Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" **harus dapat dipindahkan di antara keduanya**.

### Kriteria 4: Dapat Menghapus Data Buku

- [x] Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" **harus dapat dihapus**.

### Kriteria 5: Manfaatkan localStorage dalam Menyimpan Data Buku

- [x] Data buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" **harus dapat bertahan walaupun halaman web ditutup**.
- [x] Dengan begitu, Anda **harus** **menyimpan data buku pada localStorage**.

## Penilaian & Saran

Submission Anda akan dinilai oleh Tim Reviewer dengan **skala 1-5**. Untuk mendapatkan nilai tinggi, silakan penuhi **saran-saran** berikut ini:

- [x] Tambahkan fitur pencarian untuk mem-_filter_ buku yang ditampilkan pada rak sesuai dengan _title_ buku yang dituliskan pada kolom pencarian.
- [x] Berkreasilah dengan membuat proyek Bookshelf Apps tanpa menggunakan _project starter_.
- [x] Menuliskan kode dengan bersih.
  - Bersihkan comment dan kode yang tidak digunakan.
  - Indentasi yang sesuai.
- [x] Terdapat improvisasi fitur seperti (pilih satu):
  - Custom Dialog ketika menghapus buku. **(Done)**
  - Dapat _edit_ buku. **(Done)**
  - dsb.

Berikut adalah detail penilaian submission:

- **Bintang 1** : Semua ketentuan terpenuhi, namun terdapat indikasi kecurangan dalam mengerjakan submission.
- **Bintang 2** : Semua ketentuan terpenuhi, namun terdapat kekurangan pada penulisan kode.
- **Bintang 3** : Semua ketentuan terpenuhi, namun tidak terdapat improvisasi atau saran yang dipenuhi.
- **Bintang 4** : Semua ketentuan terpenuhi dan menerapkan minimal satu saran yang diberikan.
- **Bintang 5** : Semua ketentuan terpenuhi dan menerapkan seluruh saran yang diberikan. **(Done)**

## Ketentuan Berkas Submission

Beberapa poin yang perlu diperhatikan ketika mengirimkan berkas submission:

- Berkas submission yang dikirim merupakan folder proyek dari Bookshelf Apps dalam bentuk **ZIP**. **(Done)**
- Pastikan di dalam folder proyek yang Anda kirim terdapat berkas HTML, CSS, dan JavaScript. **(Done)**
- Jangan memasukan berkas lain yang tidak digunakan pada proyek Anda. Karena itu hanya memperbesar ukuran ZIP dan membuat proses reviu menjadi lebih lama. **(Done)**
- Anda boleh menambahkan berkas aset seperti gambar selama aset tersebut digunakan pada proyek Anda. **(Done)**

## Reference and library or external repository/API used:

Secara keseluruhan, saya mengembangkan bokshelf apps hanya menggunakan **HTML + CSS + JS** dengan sedikit manipulasi DOM. Untuk memperindah tampilan website, saya memakai beberapa reference atau library external. penggunaan library ini hanyalah untuk memperbaiki _styling minor_ akhir, tidak terpengaruh oleh kriteria utama yang ditentukan oleh dicoding. Berikut beberapa reference-nya.

- **Google Fonts**

  Saya memakai font _Poppins_ sebagai font utama.

  https://fonts.google.com/specimen/Poppins

- **Bootstrap Icons**

  Saya memakai icons yang disediakan oleh bootstrap yang saya gunakan pada button move, edit, and delete card (book).

  https://icons.getbootstrap.com/

- **Canva**

  https://www.canva.com/

- **ColorHunt**

  https://colorhunt.co/
