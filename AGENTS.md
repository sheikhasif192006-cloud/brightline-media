# BRIGHTLINE MEDIA — COMPLETE A TO Z GUIDE

Naye PC (Indore) se lekar deploy karne tak sab kuch.

---

## 📦 PHASE 1: PC READY KARO

### Step 1: Windows PC pe yeh sab install karo

**PowerShell (Terminal) kholo** aur yeh commands run karo:

```powershell
# Node.js — yeh zaroori hai project chalane ke liye
winget install OpenJS.NodeJS.LTS

# Git — code download/upload ke liye
winget install Git.Git

# GitHub CLI — GitHub se connect karne ke liye
winget install GitHub.cli

# VS Code — code edit karne ke liye
winget install Microsoft.VisualStudioCode

# FFmpeg — video compress karne ke liye (Cloudflare deploy ke liye)
winget install Gyan.FFmpeg
```

> **Note:** Har command ke baad Enter dabao. Install hone ka wait karo, phir agla command run karo.

### Step 2: VS Code install karte waqt yeh karna

VS Code installer mein **"Add to PATH"** checkbox **zaroor select** karo.

---

## 📁 PHASE 2: CODE DOWNLOAD KARO (CLONE)

### Option A: GitHub Desktop (Easy — Button se)
1. Google Chrome kholo → https://desktop.github.com/ → **Download** karo
2. Install karo → Open karo → **Sign in to GitHub**
3. Login: **sheikhasif192006-cloud** (browser khulega)
4. **File → Clone Repository → URL tab**
5. URL paste karo: `https://github.com/sheikhasif192006-cloud/brightline-media.git`
6. **Choose local path** → `C:\Projects`
7. **Clone** button daba do
8. Baaki projects ke liye bhi same karo:
   - `https://github.com/sheikhasif192006-cloud/axility-ai.git`
   - `https://github.com/sheikhasif192006-cloud/aurelius-erp.git`
   - `https://github.com/sheikhasif192006-cloud/hive-ai-pro.git`

### Option B: Command Line (Terminal)
```powershell
# Pehle Projects folder banao
mkdir C:\Projects -Force

# Phir clone karo — ek ek karke
cd C:\Projects
git clone https://github.com/sheikhasif192006-cloud/brightline-media.git
git clone https://github.com/sheikhasif192006-cloud/axility-ai.git
git clone https://github.com/sheikhasif192006-cloud/aurelius-erp.git
git clone https://github.com/sheikhasif192006-cloud/hive-ai-pro.git
```

---

## ⚙️ PHASE 3: PROJECT CHALAO

### Step 1: Packages install karo
```powershell
cd C:\Projects\brightline-media
npm install
```

> **Agar error aaye** to `npm install --legacy-peer-deps` try karo.

### Step 2: Project start karo
```powershell
npm run dev
```
Browser mein jaao → **http://localhost:3000** — site dikhni chahiye.

### Step 3: Build karo (production ready)
```powershell
npm run build
```
Sab green hona chahiye, koi error nahi aana chahiye.

---

## 🤖 PHASE 4: OPENCODE SETUP (AI ASSISTANT)

### Step 1: OpenCode install karo
```powershell
winget install opencode
```

### Step 2: Config file banao
Folder banao: `C:\Users\saddam uddin mondal\.config\opencode`

Us folder mein **opencode.jsonc** naam ki nayi file banao. Uss file mein yeh daalo:
```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "model": "google/gemini-3.1-flash-lite-preview"
}
```

### Step 3: API key set karo
OpenRouter ka API key chahiye:
1. Browser kholo → https://openrouter.ai/keys
2. Login karo (Google se ho sakta hai)
3. **Create Key** dabao
4. Copy karo (kuch aisa: `sk-or-v1-abcdef123456789...`)
5. **PowerShell mein yeh run karo** (permanently set hoga):

```powershell
[System.Environment]::SetEnvironmentVariable("OPENROUTER_API_KEY", "sk-or-v1-tumhara-key-yahan", "User")
[System.Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "sk-or-v1-tumhara-key-yahan", "User")
```

> **Important:** "tumhara-key-yahan" ki jagah apna asli key daalo.

---

## ☁️ PHASE 5: CLOUDFLARE PE DEPLOY (LIVE KARO)

### Option A: GUI se (Simple — Drag & Drop)
1. Browser kholo → https://dash.cloudflare.com/ → login karo
2. **Pages** → `brightline-media` project kholo
3. **Create deployment** dabao
4. File Explorer kholo → `C:\Projects\brightline-media\out` folder
5. **Poora `out/` folder** browser mein drag & drop karo
6. Upload hone do — **Deployment successful** dikhega

### Option B: CLI se (Terminal)
```powershell
cd C:\Projects\brightline-media
$env:CLOUDFLARE_API_TOKEN = "cfat_..."
npx wrangler pages deploy out --project-name=brightline-media --commit-dirty=true
```

> API token bana ne ke liye: Cloudflare dashboard → API Tokens → Create Token → Cloudflare Pages: Edit permission do

### Promote to Production
Preview deploy ho jayega. **Production promote** karne ke liye:
1. Cloudflare → Pages → `brightline-media`
2. Deployments list mein latest wala → **3 dots (⋮)** → **"Set as Production"**

---

## 🔄 PHASE 6: CHANGE KARO AUR DEPLOY KARO (Daily kaam)

Jab bhi website mein change karna ho:

### Step 1: Code edit karo
VS Code mein `C:\Projects\brightline-media` folder kholo. Files edit karo.

### Step 2: Test locally
```powershell
npm run dev
```
Browser mein http://localhost:3000 pe check karo.

### Step 3: Build karo
```powershell
npm run build
```

### Step 4: Deploy karo
```powershell
# Cloudflare pe drag-drop karo (out/ folder)
```
Ya CLI se:
```powershell
$env:CLOUDFLARE_API_TOKEN = "cfat_..."
npx wrangler pages deploy out --project-name=brightline-media --commit-dirty=true
```

### Step 5: Promote to Production
Cloudflare dashboard → Pages → latest deployment → **Set as Production**

---

## 📝 PHASE 7: GIT PUSH KARO (GitHub pe save karo)

### 🔑 GitHub Token kaise paayein (Pehli baar setup)

Jab pehli baar git push karoge to **username aur password maangega**. Password ki jagah **token** daalna hota hai:

1. **Browser kholo** → https://github.com/settings/tokens
2. **"opencode-brightline"** token pe click karo
3. **"Regenerate"** button dabao → password daalo
4. **Naya token** dikhega (`ghp_...`) — **copy karo** (Ctrl+C)
5. Kahi safe jagah save karo (Notepad mein daal do)

**Token kahan set karna hoga?**
```powershell
# Git push karte waqt maangega (bas ek baar)
Username: sheikhasif192006-cloud
Password: <yahan token paste karo>
```

Ya phir **GitHub Desktop** use karoge to browser se login hoga — token ki zaroorat nahi.



### VS Code mein:
1. Baayi taraf **Source Control** icon (3 dots) pe click karo
2. **Message** box mein likho ki kya change kiya
3. **✔ Commit** dabao
4. **Sync Changes** → **Push** dabao

**Terminal se:**
```powershell
cd C:\Projects\brightline-media
git add -A
git commit -m "Kya change kiya hai — brief description"
git push
```

---

## 🛠️ COMMON CHEEZEIN JO KARNI PADENGI

### Video compress kaise karein (Cloudflare limit 25MB)

Jab bhi naya video daal rahe ho jo 25MB se bada ho:

```powershell
$ffmpeg = "C:\Projects\brightline-media\node_modules\.bin\ffmpeg"
# Agar winget se install kiya hai to yeh use karo:
$ffmpeg = "C:\Users\saddam uddin mondal\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.2-full_build\bin\ffmpeg.exe"

& $ffmpeg -i "source-file.mp4" -vcodec libx264 -crf 28 -preset fast -acodec aac -b:a 128k "output-file.mp4" -y
```

### Missing video files kaise check karein
```powershell
Get-ChildItem C:\Projects\brightline-media\public\videos
```

### Port change kaise karein (agar 3000 busy hai)
```powershell
npm run dev -- -p 3001
```

---

## 📋 PROJECT STRUCTURE

```
brightline-media/
├── public/
│   ├── videos/          ← Yahan video files daalo
│   ├── images/          ← Yahan images daalo
│   └── ...
├── src/
│   ├── components/      ← Chhote UI components (Hero, Footer, etc.)
│   ├── sections/        ← Bade sections (Portfolio, Results, Process, etc.)
│   ├── app/             ← Next.js pages
│   └── ...
├── out/                 ← Build ke baad yeh folder banta hai (deploy yahi se karo)
├── AGENTS.md            ← Yeh file (sab kuch yahan likha hai)
└── package.json
```

---

## 📌 PENDING / FUTURE CHANGES (Agli baar karna)

### ⚠️ URGENT — GitHub Token Expiry (July 2026)
- [ ] Token regenerate karo: https://github.com/settings/tokens/4758006008/regenerate
- [ ] Ya naya token banao: https://github.com/settings/tokens
- [ ] Token copy karo → safe jagah save karo
- [ ] Indore PC pe git push karte waqt yahi token use karna

### Portfolio Videos
- [ ] Short Form Reels: 4 videos (03.mp4, 03a.mp4, 03b.mp4, 03c.mp4) — sab working
- [ ] Podcast: 3 videos (02.mp4, 02a.mp4, 02b.mp4) — sab working
- [ ] Koi naya video replace karna ho to `public/videos/` mein daalo aur same naam do

### Known Fixes Applied (Already Done)
- [x] Hero "Watch Showreel" button — `/videos/showreel.mp4` pe link kiya
- [x] Footer dead legal links — hata diye
- [x] Portfolio audio — hover/click/next-prev sab jagah unmuted
- [x] Portfolio video refs — Podcast 3, Reels 4 buttons ke liye restore kiye
- [x] Cloudflare deploy limit — portfolio-03.mp4 aur portfolio-03c.mp4 compress kiye

### Indore PC Setup Checklist
- [ ] Node.js install (`winget install OpenJS.NodeJS.LTS`)
- [ ] Git install (`winget install Git.Git`)
- [ ] VS Code install (`winget install Microsoft.VisualStudioCode`)
- [ ] FFmpeg install (`winget install Gyan.FFmpeg`)
- [ ] Repo clone (`git clone https://github.com/sheikhasif192006-cloud/brightline-media.git`)
- [ ] `npm install`
- [ ] `npm run dev` → localhost:3000 pe check
- [ ] OpenCode install (`winget install opencode`)
- [ ] OpenRouter API key set
- [ ] `npm run build` — error check
- [ ] Cloudflare deploy test

---

## 🔑 IMPORTANT LINKS

| Kya | Link |
|---|---|
| **Live Site** | https://brightline-media.pages.dev |
| **GitHub Repo** | https://github.com/sheikhasif192006-cloud/brightline-media |
| **Cloudflare Dashboard** | https://dash.cloudflare.com/ |
| **OpenRouter API Keys** | https://openrouter.ai/keys |
| **Local Dev Server** | http://localhost:3000 |
| **GitHub Desktop** | https://desktop.github.com/ |
| **OpenCode Config** | https://opencode.ai/config.json |

---

## 💡 TIPS

- **Koi bhi command error de toh mujhe bulao.** Main help karunga.
- **VS Code** use karo editing ke liye (easy hai).
- **out/ folder kabhi delete mat karo** — build se banta hai, deploy wahi se hota hai.
- **Naya video daalne ke baad** hamesha compress check karo (`winget install Gyan.FFmpeg`).
- **Build hamesha deploy se pehle karo** — error nahi aana chahiye.

---

**Kuch bhi problem ho to mujhe bula lena. Main hoon.** 🫡
