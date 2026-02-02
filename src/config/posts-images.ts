// Mapping Slug Proyek ke Lokasi Gambar
export const postImages: Record<string, string> = {
  // 1. Proyek Dashboard (Skripsi)
  "dashboard-petrolog": "/images/projects/dashboard-petrolog.png", 
  
  // 2. Proyek Portal (Magang)
  "petrolog-portal": "/images/projects/petrolog-portal.png",
  
  // 3. Proyek Backend (Side Project)
  // Karena ga ada SS aplikasi, kita arahkan ke ilustrasi server/database
  // Atau kamu bisa pakai screenshot Swagger UI
  "mobile-app-backend": "/svg/project3.svg", 
};

// Gambar cadangan kalau kamu lupa masukin gambar
export const defaultPostImage = "/svg/project1.svg";