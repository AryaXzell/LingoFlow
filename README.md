# 🌊 lingoflow.
> **minimalist, premium, & realtime translation engine.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tailwind](https://img.shields.io/badge/Style-Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![JS](https://img.shields.io/badge/Engine-Vanilla_JS-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Live-success?style=flat-square)](#)

lingoflow adalah aplikasi penerjemah modern yang fokus pada kecepatan dan kenyamanan visual. didesain dengan estetika "glassmorphism" tipis-tipis dan tipografi yang tajam buat pengalaman translasi yang lebih premium.

---

## ✨ fitur utama

* **⚡ realtime translation**: nerjemahin sambil lu ngetik, nggak perlu nunggu tombol klik.
* **📝 markdown support**: hasil terjemahan bisa nampilin format bold, italic, dan list berkat integrasi `marked.js`.
* **🌍 30+ bahasa populer**: support bahasa dunia mulai dari inggris sampai bahasa daerah seperti jawa.
* **📱 ultra responsive**: layout yang adaptif, tetap cantik di layar hp maupun desktop.
* **📋 one-click copy**: fitur salin hasil terjemahan instan dengan feedback visual.

---

## 🛠️ tech stack

proyek ini dibangun dengan pendekatan *lightweight* tanpa framework berat:

| component | tools |
| :--- | :--- |
| **styling** | `Tailwind CSS (via CDN)` |
| **parser** | `Marked.js` |
| **font** | `Plus Jakarta Sans` |
| **icons** | `Lucide Icons / Feather` |

---

## 📂 struktur proyek

```text
lingoflow/
├── index.html      # UI & Logic utama (the magic happens here)
├── README.md       # dokumentasi yang lu baca ini
└── api/            # (optional) tempat backend proxy lu
