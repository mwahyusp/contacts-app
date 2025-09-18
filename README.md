# Contacts App

[Live Demo](https://contacts-app-nine.vercel.app/) • [Repository ini](https://github.com/mwahyusp/contacts-app)

“Contact List Application” dibuat dengan React.js. Aplikasi sederhana untuk menyimpan, menampilkan, serta mengelola daftar kontak.

---

## 🎯 Fitur

- Menambah kontak baru  
- Mengedit kontak yang sudah ada  
- Menghapus kontak  
- Menampilkan daftar kontak secara dinamis  
- Validasi input (nama, nomor telepon, email, atau field lain jika ada)  
- UI responsif agar bisa digunakan di perangkat desktop dan mobile  

---

## 🛠 Teknologi

| Komponen | Teknologi / Tool |
|---|---|
| Frontend | React.js |
| Styling | CSS (atau modul CSS / library jika ada) |
| State Management | (React state, useState/useContext, dsb.) |
| Build / Deployment | Vercel (Live Demo) |
| Package Manager | npm atau yarn |

---

## 🚀 Cara Install & Menjalankan Secara Lokal

### Prasyarat

- Node.js (misalnya versi >= 14)  
- npm atau yarn  

### Langkah-langkah

```bash
# Clone repositori
git clone https://github.com/mwahyusp/contacts-app.git
cd contacts-app

# Install dependencies
npm install
# atau
yarn install

# Jalankan development server
npm start
# atau
yarn start

# Jika ingin build version production
npm run build
# atau
yarn build
````

Setelah `npm start` / `yarn start`, buka browser di `http://localhost:3000` (atau port yang digunakan).

---

## 📂 Struktur Proyek (Perkiraan)

```
contacts-app/
├── public/
│   ├── index.html
│   └── (aset-aset statis seperti gambar/icon jika ada)
├── src/
│   ├── components/         # Komponen seperti FormTambahKontak, ListKontak, ItemKontak, dll.
│   ├── pages/              # Halaman utama / layout jika dipisahkan
│   ├── styles/             # File CSS atau styling global
│   ├── App.js              # Komponen root
│   └── index.js            # Entry point React
├── .gitignore
├── package.json
└── README.md
```

---

## 🧩 Rencana Pengembangan / To Do

Beberapa hal yang bisa ditambahkan agar aplikasi lebih baik:

* Fitur pencarian kontak
* Filter / sort kontak berdasarkan nama / abjad
* Tambah foto profil untuk setiap kontak
* Penyimpanan lokal (LocalStorage) atau backend untuk sinkronisasi agar data tidak hilang ketika pindah perangkat
* Validasi lebih lanjut (format email, cek nomor telepon, dsb.)
* Tema gelap / terang (dark mode / light mode)

---

## 📄 Lisensi

MIT License © 2025 **mwahyusp**

---

Dibuat dengan ❤️ oleh **mwahyusp**

```
