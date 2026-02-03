---
title: "Melawai Petrolog Portal"
date: "10/16/2025"
author: "Isaac"
tags: ["Internship", "DevOps", "Nginx", "Vite"]
readTime: "6 min read"
excerpt: "Portal internal perusahaan dengan manajemen container Docker dan konfigurasi Nginx untuk stabilitas server produksi."
heroImage: "/svg/project2.svg"
---

### 🏢 Deskripsi Proyek
Selama masa magang di PT. Petrolog, salah satu tugas utama saya adalah memastikan portal internal perusahaan (`melawai-petrolog-portal-app`) dapat berjalan stabil di server lokal. Portal ini krusial karena menjadi gerbang akses utama bagi karyawan untuk berbagai layanan internal.

### 🔧 Tantangan DevOps & Solusi
Pada tahap awal, deployment sering mengalami kendala inkonsistensi environment antar mesin developer dan server. Berikut adalah langkah teknis yang saya lakukan (berdasarkan logbook magang):

1.  **Containerization dengan Docker:**
    Saya menulis ulang `Dockerfile` dan `docker-compose.yaml` untuk membungkus aplikasi. Ini menyelesaikan masalah "it works on my machine" karena aplikasi sekarang berjalan di lingkungan terisolasi yang identik.

2.  **Konfigurasi Nginx Reverse Proxy:**
    Saya mengonfigurasi **Nginx** sebagai web server di depan aplikasi. Nginx bertugas menangani request HTTP, mengatur caching aset statis, dan mengarahkan traffic ke container aplikasi yang berjalan di port internal. Konfigurasi ini meningkatkan keamanan dan performa load time aplikasi.

3.  **Troubleshooting Deployment:**
    Menangani berbagai error saat build process, termasuk optimasi ukuran image Docker agar proses deployment lebih cepat dan hemat storage.

### 📊 Hasil Akhir
Portal kini beroperasi dengan stabil dengan *uptime* tinggi. Dokumentasi deployment yang saya buat juga memudahkan tim IT support untuk melakukan maintenance di masa depan tanpa ketergantungan pada satu orang.

### 🔗 Project Links

* [**🌐 Kunjungi Live Demo**](https://satu.petrolog.my.id/)
* [**💻 Lihat Kode Konfigurasi (GitHub)**](https://github.com/tukangtukangtukang/petrolog-dashboard)