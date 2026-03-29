# MaynorAI 宣传视频项目 (Remotion)

本项目包含为 **MaynorAI** (https://chatgpt-plus.top) 制作的 30 秒竖版 (1080x1920) 宣传视频源代码。

## 🎬 视频概览
- **目标**：展示 MaynorAI 作为全网最稳定的 AI 官方代理服务。
- **支持模型**：ChatGPT (GPT-4o), Claude 3.5, Gemini, Grok, Deepseek。
- **核心卖点**：2000+ 付费用户信任，4.99 元/天起，免梯直登，官方 1:1 体验。
- **视觉风格**：皇家紫 (#6200ea) 与 纯白 极简风格。

## 🚀 如何运行

### 安装依赖
```bash
npm install
```

### 实时预览
```bash
npm start
```

### 本地渲染
```bash
npm run build
```

## ☁️ 云端自动渲染 (GitHub Actions)
项目已配置 GitHub Actions。每当代码推送到 `main` 分支时，云端会自动进行高画质视频渲染。
1. 访问项目的 [Actions](https://github.com/Maynor996/maynorai-video/actions) 页面。
2. 选择最近的一次运行记录。
3. 在页面底部的 **Artifacts** 区域下载 `remotion-video` 压缩包，解压后即可获得 MP4 文件。

## 📂 项目结构
- `src/SceneIntro.tsx`：开场动画，展示 Logo 与 Slogan。
- `src/SceneFeatures.tsx`：AI 模型矩阵展示。
- `src/SceneAdvantages.tsx`：核心优势与价格展示。
- `src/SceneCTA.tsx`：结尾引导页，展示网址。
- `public/`：存放静态资源与网页截图。

---
由 Accio **视频宣传队** 倾情打造。
