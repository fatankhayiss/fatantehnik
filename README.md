# Fatan Tehnik Elektro - Company Profile

Ini adalah source code untuk website Company Profile dan Landing Page Fatan Tehnik Elektro, spesialis service dinamo, rewinding, trafo, generator, motor listrik, dan perangkat mechanical lainnya.

## 🚀 Fitur Utama
- **Desain Modern & Profesional**: Tampilan industrial workshop yang clean dan responsif.
- **Pure Static (HTML/CSS/JS)**: Tidak memerlukan framework, build tools, atau database. Sangat ringan dan cepat.
- **SEO Friendly**: Struktur HTML semantic dan meta tag yang dioptimalkan.
- **WhatsApp Integration**: Floating button dan form kontak yang langsung terhubung ke WhatsApp.
- **Modular**: Setiap halaman memiliki file CSS dan JS terpisah (sesuai request).

## 📂 Struktur Direktori
```text
.
├── index.html                  # Halaman Utama (Beranda)
├── css/
│   └── index.css               # CSS Global dan Halaman Utama
├── js/
│   └── index.js                # JS Halaman Utama
├── assets/
│   ├── images/                 # Direktori gambar placeholder
│   └── icons/                  # Direktori ikon (jika diperlukan)
└── pages/
    ├── tentang/
    │   ├── tentang.html        # Halaman Tentang Kami
    │   ├── tentang.css
    │   └── tentang.js
    ├── layanan/
    │   ├── layanan.html        # Halaman Layanan
    │   ├── layanan.css
    │   └── layanan.js
    ├── project/
    │   ├── project.html        # Halaman Project / Gallery
    │   ├── project.css
    │   └── project.js
    └── kontak/
        ├── kontak.html         # Halaman Kontak & Lokasi
        ├── kontak.css
        └── kontak.js
```

## 🛠️ Cara Penggunaan (Development)
Karena website ini 100% static HTML, CSS, dan JS, Anda bisa menjalankannya langsung di browser tanpa server lokal. 
1. Buka folder project.
2. Double-click file `index.html` untuk membukanya di browser.
3. (Opsional) Jika menggunakan VS Code, Anda bisa menggunakan ekstensi **Live Server** untuk auto-reload saat mengedit file.

## 📝 Hal Yang Perlu Disesuaikan Sebelum Publish
Sebelum website diunggah (publish) ke internet, ada beberapa hal yang wajib diganti dengan data asli Anda:

1. **Nomor WhatsApp**:
   Cari teks `6281234567890` (atau `+62 812-3456-7890`) di semua file `.html` dan `.js`, lalu ganti dengan nomor WhatsApp aktif Fatan Tehnik. Pastikan format link menggunakan kode negara (contoh: `628...` tanpa tanda `+` untuk URL `wa.me`). Khususnya di file `pages/kontak/kontak.js`.
2. **Alamat Email**:
   Ganti `info@fatantehnik.com` dengan email perusahaan.
3. **Alamat Lokasi & Google Maps**:
   Di file `pages/kontak/kontak.html`, cari `[Nama Jalan], [Kota]` dan ganti dengan alamat lengkap. Selain itu, temukan tag `<iframe src="">` dan masukkan URL embed dari Google Maps bengkel Anda ke dalam atribut `src`.
4. **Gambar (Assets)**:
   Gambar saat ini menggunakan fallback warna (placeholder) jika file gambar asli tidak ditemukan. 
   - Masukkan foto-foto bengkel ke `assets/images/workshop/`
   - Masukkan foto-foto layanan ke `assets/images/services/`
   - Masukkan foto-foto project ke `assets/images/projects/`
   - Ganti atribut `src` pada tag `<img>` di HTML jika nama file foto Anda berbeda.

## 🌐 Deployment (Cara Hosting)
Karena website ini murni statis, Anda bisa menghostingnya secara **gratis** di berbagai platform:
- **GitHub Pages**: Upload repository ke GitHub dan aktifkan GitHub Pages.
- **Netlify**: Drag & drop folder project ke Netlify Drop atau hubungkan via GitHub.
- **Vercel**: Hubungkan repository GitHub Anda ke Vercel untuk auto-deployment.
- **Shared Hosting**: Jika Anda sudah memiliki domain (misal: *fatantehnik.com*), cukup upload semua file ke folder `public_html` di cPanel hosting Anda.

*Website ini menggunakan relative paths (`../` dan `../../`) sehingga akan berfungsi di subdirektori manapun atau di custom domain tanpa perlu pengaturan routing.*
