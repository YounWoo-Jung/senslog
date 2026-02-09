# SensLog

A minimal, database-free knowledge blog built with [Astro](https://astro.build).

---

## 🇰🇷 한국어

### 소개

**SensLog**는 마크다운 기반의 정적 블로그입니다. 데이터베이스 없이 마크다운 파일만으로 블로그를 운영할 수 있습니다.

### 글 작성하기

`src/content/blog/` 디렉토리에 `.md` 파일을 생성합니다.

#### Frontmatter 스키마

```yaml
---
title: "글 제목"              # 필수
date: 2025-01-15              # 필수 (ISO 날짜)
tags: ["태그1", "태그2"]       # 필수 (1~5개)
series: "시리즈 이름"          # 선택
description: "글 설명"         # 선택
draft: true                   # 선택 (기본값: false)
---
```

- `draft: true`로 설정하면 모든 공개 목록, RSS, 사이트맵에서 제외됩니다.

### 로컬 실행

```bash
npm install
npm run dev        # 개발 서버 (http://localhost:4321)
npm run build      # 프로덕션 빌드 (dist/)
npm run preview    # 빌드 결과 미리보기
```

### 배포 (GitHub Pages)

1. GitHub 저장소 Settings → Pages → Source를 **GitHub Actions**로 설정
2. `astro.config.mjs`에서 `site`를 실제 URL로 변경
3. `main` 브랜치에 push하면 자동 배포

### 검색 (Pagefind)

`npm run build` 실행 시 `postbuild` 스크립트가 자동으로 Pagefind 인덱스를 생성합니다.
개발 서버에서는 검색이 동작하지 않으며, 빌드 후 `npm run preview`로 확인할 수 있습니다.

---

## 🇺🇸 English

### About

**SensLog** is a minimal, static blog powered by Markdown. No database, no CMS — just Markdown files.

### Writing Posts

Create a `.md` file in `src/content/blog/`.

#### Frontmatter Schema

```yaml
---
title: "Post Title"            # required
date: 2025-01-15               # required (ISO date)
tags: ["tag1", "tag2"]         # required (1–5 tags)
series: "Series Name"          # optional
description: "Post summary"   # optional
draft: true                    # optional (default: false)
---
```

- Setting `draft: true` excludes the post from all public lists, RSS, and sitemap.

### Running Locally

```bash
npm install
npm run dev        # Dev server (http://localhost:4321)
npm run build      # Production build (dist/)
npm run preview    # Preview the build
```

### Deploying to GitHub Pages

1. Go to your repo's Settings → Pages → set Source to **GitHub Actions**
2. Update `site` in `astro.config.mjs` to your actual URL
3. Push to `main` — the workflow deploys automatically

### Enabling Pagefind Search

The `postbuild` script runs Pagefind automatically after `npm run build`.
Search works only on the built site — use `npm run preview` to test it locally.

---

## Project Structure

```
src/
├── content/
│   └── blog/           # Markdown posts go here
├── components/          # Astro components
├── layouts/             # Base layout
├── pages/
│   ├── blog/            # Blog index + post pages
│   ├── tags/            # Tag index + tag pages
│   ├── series/          # Series index + series pages
│   ├── search.astro     # Pagefind search UI
│   ├── about.astro
│   ├── rss.xml.ts       # RSS feed
│   └── index.astro      # Home page
└── content.config.ts    # Collection schema
```

## Tech Stack

- [Astro](https://astro.build) — Static site generator
- [Pagefind](https://pagefind.app) — Static search
- [Zod](https://zod.dev) — Schema validation (via Astro)
- GitHub Actions — CI/CD

## License

MIT
