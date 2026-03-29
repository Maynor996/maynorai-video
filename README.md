# MaynorAI Promotional Video (Remotion)

This project contains the source code for a 30-second vertical (1080x1920) promotional video for **MaynorAI** (https://maynorai.top).

## 🎬 Video Overview
- **Objective**: Highlight MaynorAI as a premium official proxy for high-end AI models.
- **Key Models**: Grok, ChatGPT, Claude, Gemini.
- **Proof Points**: 2,000+ paid users, 4.99 RMB/day entry price.
- **Visual Style**: Royal Purple (#6200ea) and White.

## 🚀 How to Run

### Install
```bash
npm install
```

### Preview
```bash
npm start
```

### Local Render
```bash
npm run build
```

## ☁️ Cloud Rendering (GitHub Actions)
Every time you push to the `main` branch, a high-quality video is rendered automatically.
1. Go to the [Actions](https://github.com/Maynor996/maynorai-video/actions) tab.
2. Select the latest run.
3. Download the `remotion-video` artifact to get your MP4 file.

## 📂 Project Structure
- `src/SceneIntro.tsx`: Opening animation.
- `src/SceneFeatures.tsx`: AI Model matrix.
- `src/SceneAdvantages.tsx`: Pricing and user count.
- `src/SceneCTA.tsx`: Final call-to-action.
- `public/`: Assets and screenshots.

---
Created by **视频宣传队** (Video Promo Team) @ Accio.
