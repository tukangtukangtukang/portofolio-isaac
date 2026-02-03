// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Isaac's Portfolio",
  title: "Isaac | IT Developer Portfolio",
  description: "Portofolio Isaac - Mahasiswa IT AMIKOM Yogyakarta & Fullstack Developer",
  
  // Navigation
  navigation: {
    home: "Home",
    posts: "Projects", // Diubah jadi Projects agar lebih relevan
    contact: "Contact",
  },
  
  // Hero Section
  hero: {
    prefix: "I am",
    name: "Bonaventura Isaac Guric",
    intro: "Saya adalah mahasiswa IT dari Universitas AMIKOM Yogyakarta yang memiliki passion di bidang Fullstack Development. Saat ini sedang menyelesaikan skripsi melalui jalur magang profesional di PT. Petrolog Balikpapan.",
    avatar: "/image/1.jpg", // Pastikan file fotomu sudah ada di folder public/image
    buttons: {
      viewPosts: "Lihat Proyek",
      contactMe: "Hubungi Saya",
    },
    socialLinks: [
      { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/in/bonaventura-isaac-guric/" },
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/tukangtukangtukang" },
      { name: "Instagram", icon: "/svg/instagram.svg", url: "https://instagram.com/tukangambunewangi" },
    ],
  },
  
  // About Section
  about: {
    title: "Tentang Saya",
    text: "Sebagai mahasiswa Universitas AMIKOM Yogyakarta, saya memiliki minat besar dalam membangun sistem web yang efisien. Pengalaman magang saya di Balikpapan memberikan kesempatan untuk mengimplementasikan teknologi seperti Node.js, Svelte, dan Docker dalam skala industri. Saya senang mengeksplorasi teknologi baru dan hobi saya di bidang perfumery memberikan perspektif unik dalam detail dan komposisi, baik dalam aroma maupun kodingan.",
  },
  
  // Contact Page
  contact: {
    title: "Mari Berkolaborasi",
    subtitle: "Saya selalu terbuka untuk diskusi mengenai proyek baru, ide kreatif, atau peluang profesional di bidang IT.",
    info: {
      email: {
        label: "Email",
        value: "bonaventuraisaac52@gmail.com",
        link: "mailto:bonaventuraisaac52@gmail.com",
      },
      phone: {
        label: "Location",
        value: "Balikpapan / Yogyakarta",
        link: "#",
      },
      location: {
        label: "Status",
        value: "Intern at PT. Petrolog Balikpapan",
      },
    },
    followMe: {
      title: "Ikuti Saya",
      links: [
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/in/bonaventura-isaac-guric/" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/tukangtukangtukang" },
      ],
    },
    footerText: [
      "Saya biasanya membalas pesan dalam waktu 24 jam.",
      "Mari membangun sesuatu yang luar biasa! 🚀",
    ],
    messageButton: "💬 Kirim Pesan",
  },
  
  // Footer
  footer: {
    // Perbaikan: Menggunakan new Date() yang benar
    copyright: `© ${new Date().getFullYear()} Bonaventura Isaac Guric. All rights reserved.`,
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "Lihat Kode Sumber di Github",
      url: "https://github.com/tukangtukangtukang/portofolio-isaac",
    },
  },
  
  // Posts Page
  posts: {
    title: "Daftar Proyek & Blog",
    subtitle: "Kumpulan dokumentasi proyek magang, side project, dan eksplorasi teknologi saya.",
    searchPlaceholder: "Cari proyek...",
  },
  
  // Comments Page
  comments: {
    title: "Diskusi & Komentar",
    subtitle: "Punya pertanyaan tentang proyek Petrolog atau sekadar ingin menyapa? Tulis di bawah ini!",
    guidelines: {
      title: "Aturan Diskusi",
      items: [
        "Gunakan bahasa yang sopan dan konstruktif",
        "Dilarang melakukan spam atau promosi tanpa izin",
        "Tetap fokus pada topik seputar IT dan pengembangan web",
        "Gunakan bahasa yang inklusif dan ramah",
      ],
    },
  },
};