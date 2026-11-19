# সাইট ভাঙা দেখালে (CSS নেই, নীল বার)

**কারণ:** Netlify-তে **Publish directory** ভুলে `.next` দেওয়া আছে। Next.js 16-এ এটা খালি রাখতে হয়।

## ঠিক করা (২ মিনিট)

1. [Netlify → maruf-hasan-chowdhury-profile](https://app.netlify.com/projects/maruf-hasan-chowdhury-profile)
2. **Site configuration** → **Build & deploy** → **Build settings**
3. **Publish directory** → খালি করো (delete `.next`) → **Save**
4. **Deploys** → **Trigger deploy** → **Clear cache and deploy site**
5. ৩–৫ মিনিট wait → hard refresh: `Ctrl+Shift+R`

## GitHub থেকে build (recommended)

**Build & deploy** → **Continuous deployment** → Link repo `maruf-hasan7081/Portfolio`, branch `main`.

Build command: `npm run build` (from `netlify.toml`). Publish directory: **empty**.