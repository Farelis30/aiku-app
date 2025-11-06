# 🤖 Aiku App

Aiku App adalah aplikasi chatbot AI sederhana berbasis **Next.js** yang terintegrasi dengan **Gemini AI**.  
Aplikasi ini dirancang agar ringan, mudah dikembangkan, dan dapat digunakan secara lokal untuk eksperimen atau pengembangan fitur chatbot pribadi.

---

## ✨ Fitur Utama

- 💬 **Chat UI sederhana** — terdiri dari area input, tampilan pesan, dan efek loading (non-streaming).
- 🧠 **Integrasi Gemini AI** — menggunakan API key pribadi untuk menghasilkan respon cerdas.
- 💾 **Riwayat percakapan** — disimpan secara lokal di `localStorage` atau Redis.
- 🔐 **Autentikasi sederhana** — login dan register menggunakan **email dan password**.
- ⚡ **Fullstack Next.js** — backend dan frontend berada dalam satu proyek Next.js.
- 🚀 **Deploy mudah** — dapat dijalankan secara lokal atau di-deploy ke GitHub (private).

---

## 🧩 Teknologi yang Digunakan

- [Next.js 14+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Gemini AI API](https://ai.google.dev/)
- [Redis](https://redis.io/) *(opsional untuk penyimpanan riwayat percakapan)*

---

## ⚙️ Cara Menjalankan Proyek

1. **Clone repository ini**
   ```bash
   git clone https://github.com/username/aiku-app.git
   cd aiku-app
   ```

2. **Install dependencies**
```bash
npm install
```

3. **Buat file environment**
```bash
cp .env.example .env.local
```

Lalu isi dengan API key Gemini milikmu:
```env
GEMINI_API_KEY=your_api_key_here
```

4. **Jalankan aplikasi**
```bash
npm run dev
```