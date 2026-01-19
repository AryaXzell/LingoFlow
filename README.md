# 🌊 lingoflow.
> **experience the next level of translation with a premium, minimalist, and snappy interface.**

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/username/lingoflow?style=for-the-badge&color=blue)
![GitHub forks](https://img.shields.io/github/forks/username/lingoflow?style=for-the-badge&color=6366f1)
![License](https://img.shields.io/badge/License-MIT-000000?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)

</div>

---

### 📖 overview
**lingoflow** bukan cuma translator biasa. ini adalah *premium translation tool* yang dirancang buat lu yang bosen sama tampilan translator kaku. dibangun dengan **Vanilla JS** dan **Tailwind CSS**, aplikasi ini nawarin kecepatan *realtime* dengan *UI/UX* yang sangat *clean*.



---

### 🚀 features & highlights

| fitur | penjelasan | status |
| :--- | :--- | :---: |
| **Realtime Engine** | nerjemahin otomatis pas lu lagi ngetik (debounced) | ✅ |
| **Markdown Render** | hasil translasi support formatting (bold, italic, list) | ✅ |
| **Auto-Resize** | area input yang fleksibel ngikutin panjang teks lu | ✅ |
| **Smart Swap** | tukar bahasa sumber & tujuan dalam sekali klik | ✅ |
| **Modern Modal** | pemilihan 30+ bahasa dengan interface yang *smooth* | ✅ |
| **Abort Controller** | sistem pinter yang nge-cancel request lama biar nggak lag | ✅ |

---

### 🛠️ technical workflow
lingoflow dirancang biar nggak boros *resource*:
1. **Input Tracking**: memantau setiap ketikan user.
2. **Debouncing (350ms)**: nunggu lu jeda ngetik bentar baru kirim request (biar hemat API).
3. **Abort Signal**: kalau lu ngetik lagi pas proses *loading*, request sebelumnya langsung dibatalin.
4. **Markdown Parsing**: nerima data dari backend dan ngerapiin tampilannya pake `marked.js`.

---

### 💻 setup lokal

1. **clone repository**
   ```bash
   git clone [https://github.com/AryaXzell/lingoflow.git](https://github.com/AryaXzell/lingoflow.git)
