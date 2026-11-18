# `maruf-hasan-chowdhury-profile.netlify.app` — লাইভ করার উপায়

**“Site not found”** মানে এই নামে Netlify-তে এখনো কোনো সাইট ডিপ্লয় হয়নি। URL ঠিক আছে, কিন্তু সাইট তৈরি করা দরকার।

---

## পদ্ধতি A — Netlify ওয়েবসাইট (সবচেয়ে সহজ, ৩ মিনিট)

1. যাও: [https://app.netlify.com/start](https://app.netlify.com/start)  
2. **GitHub** দিয়ে লগইন  
3. **Add new site** → **Import an existing project** → **`maruf-hasan7081/Portfolio`**  
4. **Site name** (গুরুত্বপূর্ণ): `maruf-hasan-chowdhury-profile`  
   - URL হবে: `https://maruf-hasan-chowdhury-profile.netlify.app`  
5. Build settings আসলে `netlify.toml` থেকে নেবে (`npm run build`, Node 20)  
6. **Deploy site** চাপো  
7. ২–৫ মিনিট পর ব্রাউজারে URL খোলো  

---

## পদ্ধতি B — Cursor টার্মিনাল (CLI)

1. ব্রাউজারে Netlify authorize করো (টার্মিনাল যখন লিংক খোলে, **Authorize** চাপো)  
2. চালাও:

```powershell
cd c:\my_profile\Portfolio
powershell -ExecutionPolicy Bypass -File scripts\netlify-live.ps1
```

---

## পদ্ধতি C — GitHub Actions (একবার সেটআপ)

1. Netlify → **User settings** → **Applications** → **Personal access tokens** → টোকেন বানাও  
2. সাইট বানানোর পর → **Site configuration** → **General** → **Site ID** কপি করো  
3. GitHub → রিপো → **Settings** → **Secrets** →  
   - `NETLIFY_AUTH_TOKEN`  
   - `NETLIFY_SITE_ID`  
4. `main`-এ push করলে অটো ডিপ্লয় হবে  

---

আমি তোমার Netlify পাসওয়ার্ড জানি না, তাই **Authorize / Import** ধাপ তোমাকেই করতে হবে একবার। এরপর থেকে Git push দিলেই সাইট আপডেট হবে।