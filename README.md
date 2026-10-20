# Portfolio + Jasa PCB — Website

Website portfolio pribadi + jasa desain & fabrikasi PCB (1, 2 & 4 lapis), dibangun dengan **Next.js 16 + TypeScript + Tailwind CSS 4 + shadcn/ui**.

## Sebelum Deploy — WAJIB DIEDIT DULU!

Edit file **`src/lib/site-config.ts`**:

| Bagian | Yang diganti |
|---|---|
| `name` | Nama asli Anda (default: "Andika Pratama" — contoh saja) |
| `brand` | Nama brand Anda |
| `fiverr.url` | ⚠️ Ganti `https://www.fiverr.com/yourusername` dengan URL Fiverr Anda yang sebenarnya |
| `stats` | Sesuaikan angka statistik dengan kondisi Anda |
| `projects` | Ganti dengan proyek PCB Anda sendiri (foto taruh di `public/images/`) |
| `services` | Harga & fitur layanan 1/2/4 lapis |

## Menjalankan di Komputer Lokal

```bash
npm install        # atau: bun install / pnpm install
npm run dev        # buka http://localhost:3000
```

## Deploy ke Vercel (Direkomendasikan)

1. Buat repository GitHub, upload semua file ini (lihat cara di bawah)
2. Buka [vercel.com/new](https://vercel.com/new) → **Import** repository tersebut
3. Klik **Deploy** — selesai! Tidak perlu setting apa pun (Next.js terdeteksi otomatis)

## Deploy ke Netlify

1. Upload project ke GitHub
2. Buka [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
3. Pilih repository → Netlify otomatis memakai Next.js runtime
4. Klik **Deploy**

## Upload ke GitHub (cara cepat)

```bash
git init
git add .
git commit -m "Portfolio PCB website"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

> Catatan: `.gitignore` sudah disiapkan — `node_modules` dan hasil build tidak akan ikut ter-upload.

## Struktur Project

```
src/
├── app/
│   ├── layout.tsx        # Metadata, font, SEO
│   ├── page.tsx          # Halaman utama (susunan section)
│   └── api/route.ts      # Health check (opsional)
├── components/
│   ├── sections/         # Navbar, Hero, About, Services, Projects, dst.
│   ├── circuit-art.tsx   # Ornamen dekoratif PCB (SVG)
│   └── ui/               # Komponen shadcn/ui
└── lib/
    └── site-config.ts    # ⚠️ SEMUA KONTEN DIEDIT DI SINI
public/
└── images/               # Foto PCB hero & proyek
```

## Kustomisasi Cepat

- **Warna tema**: edit variabel `--primary`, `--background`, dll. di `src/app/globals.css`
- **Foto proyek**: ganti file di `public/images/` (rasio ±4:3, format PNG/JPG)
- **Teks section**: semua ada di `src/lib/site-config.ts` — tidak perlu sentuh komponen

## Tipografi & Ikon

- Font: Space Grotesk (display) · Inter (body) · JetBrains Mono (aksen teknis)
- Ikon: Lucide React
