# CommitVerse 🚀

> **Contribute. Collaborate. Create.**
> An open-source event platform where developers browse and contribute to real projects.

![CommitVerse](https://img.shields.io/badge/CommitVerse-Open%20Source%20Event-3B82F6?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)

---

## 📁 Folder Structure

```
commitverse/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar with mobile menu
│   │   ├── Hero.jsx            # Hero section with animated canvas
│   │   ├── Projects.jsx        # Projects grid with filter
│   │   ├── ProjectCard.jsx     # Individual project card
│   │   ├── ProjectModal.jsx    # Full project details modal
│   │   ├── Sponsors.jsx        # Sponsors by tier
│   │   ├── Team.jsx            # Team member cards
│   │   ├── Contact.jsx         # Contact section
│   │   ├── Footer.jsx          # Footer with links
│   │   └── BackToTop.jsx       # Scroll-to-top button
│   ├── data/
│   │   ├── projects.json       # 10 open-source project definitions
│   │   └── team.js             # Team members + sponsors data
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ⚡ Getting Started

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9+ or **pnpm** (recommended)

### 1. Install dependencies

```bash
cd commitverse
npm install
# or
pnpm install
```

### 2. Start the dev server

```bash
npm run dev
# or
pnpm dev
```

### 3. Open in browser

```
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

---

## 🛠 Customization

### Adding / Editing Projects

Edit `src/data/projects.json`. Each project follows this schema:

```json
{
  "id": 11,
  "name": "Your Project Name",
  "tagline": "One-line summary",
  "description": "2-3 sentence description shown on the card.",
  "techStack": ["React", "Node.js", "MongoDB"],
  "problemStatement": "Full explanation of the problem being solved.",
  "contributionGuidelines": "How to contribute, what areas need help, setup notes.",
  "github": "https://github.com/your-org/your-repo",
  "difficulty": "Beginner",
  "stars": 123
}
```

**Difficulty options:** `"Beginner"` | `"Intermediate"` | `"Advanced"`

### Updating Team Members

Edit the `teamMembers` array in `src/data/team.js`:

```js
{ id: 7, name: "Your Name", role: "Your Role", avatar: "YN", linkedin: "https://linkedin.com/in/you" }
```

### Updating Sponsors

Edit the `sponsors` array in `src/data/team.js`:

```js
{ id: 7, name: "YourCorp", tier: "Gold" }
```

**Tier options:** `"Gold"` | `"Silver"` | `"Bronze"`

### Fonts

The project uses:
- **Syne** — display/headings font
- **JetBrains Mono** — monospace/code font

Both are loaded from Google Fonts in `index.html`.

---

## 🎨 Design System

The UI uses a custom dark developer theme defined in `tailwind.config.js`:

| Token | Value | Usage |
|-------|-------|-------|
| `void` | `#080B12` | Page background |
| `deep` | `#0D1117` | Secondary bg |
| `card` | `#1C2333` | Card backgrounds |
| `accent` | `#3B82F6` | Primary blue |
| `emerald` | `#10B981` | Beginner / success |
| `amber` | `#F59E0B` | Intermediate / warning |
| `rose` | `#F43F5E` | Advanced / danger |

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| TailwindCSS 3 | Utility-first styling |
| JetBrains Mono | Code font |
| Syne | Display font |
| HTML Canvas API | Hero particle animation |

---

## 📄 License

MIT — free to use, fork, and modify for your own events.

---

Built with ❤️ for the open-source community.
