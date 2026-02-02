---
title: "Unified Fleet Intelligence Hub"
date: "11/12/2025"
author: "Isaac"
tags: ["Internship", "Svelte", "Docker", "Supabase"]
readTime: "8 min read"
excerpt: "Sistem integrator cerdas untuk PT. Petrolog Balikpapan yang menyatukan ekosistem monitoring Transtrack dan UD Trucks dalam satu dashboard terpusat."
heroImage: "/image/1.jpg"
---

### 📈 Latar Belakang Masalah
Di PT. Petrolog Indah Balikpapan, tim operasional menghadapi tantangan inefisiensi dalam memantau armada logistik. Mereka harus membuka berbagai dashboard terpisah dari vendor yang berbeda (seperti **Transtrack** dan **UD Trucks**) untuk melacak lokasi kendaraan. Hal ini menyulitkan proses pengambilan keputusan yang cepat dan akurat.

Sebagai bagian dari proyek Skripsi dan Magang Profesional, saya mengusulkan dan membangun solusi **Unified Dashboard** yang mengintegrasikan semua aliran data tersebut ke dalam satu "Single Source of Truth".

### 🛠️ Arsitektur & Implementasi Teknis
Sistem ini dibangun dengan pendekatan modern web development untuk menjamin kecepatan dan skalabilitas:

* **Frontend (Svelte & Vite):** Saya memilih Svelte karena reaktivitasnya yang tinggi tanpa Virtual DOM, membuat dashboard tetap ringan meski memuat banyak data peta secara real-time.
* **Backend (Node.js):** Bertugas sebagai *middleware* yang melakukan *fetching* data dari API Transtrack dan UD Trucks, lalu menormalisasi format datanya sebelum dikirim ke frontend.
* **Database (Supabase):** Digunakan untuk menyimpan data historis perjalanan, log user, dan konfigurasi armada.
* **Deployment (Docker):** Aplikasi dibungkus dalam container Docker untuk memastikan konsistensi lingkungan (environment) antara development dan server produksi di kantor.

### 🚀 Fitur Unggulan
1.  **Live Tracking Map:** Visualisasi posisi armada secara real-time dalam satu peta interaktif.
2.  **Unified Data Stream:** Tidak perlu lagi login ke banyak website; semua data status mesin, bahan bakar, dan kecepatan ada di satu layar.
3.  **Responsif:** Dashboard didesain agar bisa diakses dengan nyaman baik melalui Desktop di ruang kontrol maupun Tablet/Mobile oleh manajer lapangan.

### 🔗 Project Links
Tertarik melihat bagaimana sistem ini bekerja atau ingin melihat kode sumbernya?

* [**🌐 Kunjungi Live Demo**](https://dash.petrolog.my.id/)
* [**💻 Lihat Repository GitHub**](https://github.com/tukangtukangtukang/petrolog-dashboard.git)