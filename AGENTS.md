# BRIGHTLINE MEDIA — Complete Project Guide

## 📦 GitHub Repos (Sab Projects)
| Project | GitHub | Tech |
|---------|--------|------|
| **brightline-media** | https://github.com/sheikhasif192006-cloud/brightline-media | Next.js 16 + Tailwind v4 + Framer Motion |
| **axility-ai** | https://github.com/sheikhasif192006-cloud/axility-ai | Next.js 16 + Supabase |
| **aurelius-erp** | https://github.com/sheikhasif192006-cloud/aurelius-erp | Vite+React 19 (frontend) + Express+Prisma (backend) |
| **hive-ai-pro** | https://github.com/sheikhasif192006-cloud/hive-ai-pro | Vite+React 19 + Three.js (frontend) + Express+Mongoose (backend) + Electron (desktop) |

---

## 🔧 Indore PC Setup (Naye PC pe kaise chalana hai)

### 1. Install karo:
```bash
# Node.js
winget install OpenJS.NodeJS.LTS

# Git
winget install Git.Git

# GitHub CLI
winget install GitHub.cli

# VS Code
winget install Microsoft.VisualStudioCode
```

### 2. Clone all repos:
```bash
cd C:\Projects
git clone https://github.com/sheikhasif192006-cloud/brightline-media.git
git clone https://github.com/sheikhasif192006-cloud/axility-ai.git
git clone https://github.com/sheikhasif192006-cloud/aurelius-erp.git
git clone https://github.com/sheikhasif192006-cloud/hive-ai-pro.git
```

### 3. OpenCode setup (AI assistant ke liye):
```bash
# Install OpenCode CLI
winget install opencode

# Global config banao
mkdir -p ~\.config\opencode
```

`~\.config\opencode\opencode.jsonc` file banao with:
```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "model": "google/gemini-3.1-flash-lite-preview"
}
```

System environment variables set karo (Permanent):
```powershell
[System.Environment]::SetEnvironmentVariable("OPENROUTER_API_KEY", "sk-or-v1-tumhara-key-yahan", "User")
[System.Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "sk-or-v1-tumhara-key-yahan", "User")
```
Note: OpenRouter ka API key use hota hai (`sk-or-v1-...`). Yaha se lo: https://openrouter.ai/keys

### 4. Har project ke liye:
```bash
cd brightline-media
npm install
npm run dev        # local: http://localhost:3000
npm run build      # production build
```

---

## 🌐 Brightline Media — Quick Reference

### Deploy to Cloudflare Pages:
```bash
cd brightline-media
npm run build
```
Phir `out/` folder ko Cloudflare Pages dashboard mein drag-drop karo:
1. https://dash.cloudflare.com/ → Pages
2. Project `brightline-media` → "Create deployment"
3. `out/` folder drag-drop

CLI se deploy (pehle API token banao with Pages:Edit permission):
```powershell
$env:CLOUDFLARE_API_TOKEN = "cfat_..."
npx wrangler pages deploy out --project-name=brightline-media --commit-dirty=true
```

### Login:
```bash
npx wrangler login              # Login (interactive mode)
# Ya API token use karo:
$env:CLOUDFLARE_API_TOKEN = "cfat_..."
```

### Credentials:
- Cloudflare: Sheikh.asif.192006@gmail.com
- GitHub Account: sheikhasif192006-cloud
- Domain: brightlinemedia.com → Cloudflare Pages
- Live URL: https://brightline-media.pages.dev/

---

## 🎨 Site Features
- Orange theme (#FF6A01) — video editing agency
- Section headers with stagger animations (2s gap between elements)
- Hero with showreel video placeholder (/videos/showreel.mp4)
- 6 services, 6 features, 4 portfolio projects
- Mobile responsive, hamburger drawer, custom cursor
- WhatsApp contact: +919285500971 (User)
- Partner (Asif Bhai): +917415411469

### Pending (Videos dene baaki):
1. /public/videos/showreel.mp4 — Hero showreel
2. /public/videos/project-*.mp4 — Portfolio thumbnails

---


