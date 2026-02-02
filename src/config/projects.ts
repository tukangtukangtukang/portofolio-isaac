// Projects configuration
export const projectsConfig = {
  // Gambar ikon proyek (Default template mapping by index)
  images: [
    "/svg/project1.svg",
    "/svg/project2.svg",
    "/svg/project3.svg",
  ],
  projects: [
    {
      title: "Unified Fleet Intelligence Hub",
      description:
        "Sistem integrator cerdas untuk PT. Petrolog Balikpapan yang menyatukan ekosistem monitoring Transtrack dan UD Trucks dalam satu dashboard terpusat.",
      technologies: ["Svelte", "Node.js", "Supabase", "Docker"],
      liveLink: "https://dash.petrolog.my.id/",
      githubLink: "https://github.com/tukangtukangtukang/petrolog-dashboard.git",
    },
    {
      title: "Melawai Petrolog Portal",
      description:
        "Portal internal perusahaan dengan manajemen container Docker dan konfigurasi Nginx untuk memastikan stabilitas deployment di server kantor.",
      technologies: ["Vite", "Docker", "Nginx", "GitLab"],
      liveLink: "#", // Internal Access Only
      githubLink: "https://github.com/tukangtukangtukang/petrolog-dashboard",
    },
    {
      title: "Mobile App Backend Collaboration",
      description:
        "Pengembangan infrastruktur backend RESTful API yang scalable menggunakan Node.js, Express, dan dokumentasi otomatis via Swagger.",
      technologies: ["Node.js", "Express", "Swagger", "PostgreSQL"],
      liveLink: "#",
      githubLink: "https://github.com/tukangtukangtukang",
    },
  ],
};