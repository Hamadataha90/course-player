# 🎓 Course Player

A modern, responsive online course player built with **Next.js 16** and **React 19**. Designed to provide a clean, distraction-free learning experience with an interactive video player, structured curriculum sidebar, course materials overview, student leaderboard, and a community comments section.

---

## ✨ Features

- 📺 **Video Player** — Native HTML5 video player with quick-access action buttons
- 📚 **Course Curriculum** — Week-by-week lesson breakdown with lock/unlock states and progress tracking
- 📊 **Progress Bar** — Visual progress indicator showing how far a student has advanced
- 🏆 **Leaderboard** — Modal overlay showing student rankings to encourage healthy competition
- 💬 **Comments Section** — View and submit comments per lesson
- ❓ **Ask a Question** — Modal form to submit course-related questions
- 📋 **Course Materials** — At-a-glance course metadata (duration, lessons, enrolled students, language)
- 📱 **Fully Responsive** — Optimized layout for mobile, tablet, and desktop screens

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.10 | React framework & routing |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first styling |
| [Lucide React](https://lucide.dev/) | ^1.23.0 | Icon library |
| [React Icons](https://react-icons.github.io/react-icons/) | ^5.7.0 | Additional icon sets |
| [Base UI](https://base-ui.com/) | ^1.6.0 | Unstyled accessible UI primitives |

---

## 📁 Project Structure

```
course-player/
├── src/
│   ├── app/
│   │   ├── layout.js           # Root layout with metadata & fonts
│   │   ├── page.js             # Main page — composes all sections
│   │   └── globals.css         # Global base styles
│   └── components/
│       ├── Header.jsx          # Top navigation bar
│       ├── VideoPlayer.jsx     # Video element + action buttons
│       ├── CourseMaterials.jsx # Course metadata card (duration, lessons, etc.)
│       ├── Comments.jsx        # Comments list + new comment form
│       ├── Sidebar.jsx         # Curriculum sidebar with progress bar
│       ├── LeaderBoard.jsx     # Leaderboard modal overlay
│       └── AsqQuestion.jsx     # Ask a Question modal
├── public/                     # Static assets
├── package.json
└── next.config.mjs
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `>= 18.x`
- [npm](https://www.npmjs.com/) `>= 9.x` (or `yarn`, `pnpm`, `bun`)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/course-player.git

# 2. Navigate into the project directory
cd course-player

# 3. Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## 🖥️ Page Layout

The app is structured as a single-page layout with two main columns:

```
┌─────────────────────────────────────────────────────┐
│                      Header                         │
├──────────────────────────────┬──────────────────────┤
│  VideoPlayer (desktop only)  │                      │
│  CourseMaterials             │  Sidebar             │
│  Comments                    │  (Curriculum +       │
│                              │   Progress Bar)      │
└──────────────────────────────┴──────────────────────┘
```

> On **mobile**, the video player is pinned to the top of the screen (sticky) and the sidebar stacks below the main content.

---

## 🧩 Components Overview

| Component | Description |
|---|---|
| `Header` | Navigation bar with branding |
| `VideoPlayer` | HTML5 `<video>` element + shortcut buttons (Curriculum, Comments, Ask a Question, Leaderboard) |
| `Sidebar` | Weekly curriculum accordion with per-lesson lock states, question counts, and a dynamic progress bar |
| `CourseMaterials` | Two-column metadata card (duration, lessons, enrolled students, language) |
| `Comments` | Scrollable list of student comments + a submit-comment textarea form |
| `LeaderBoard` | Modal overlay showing ranked student list with a motivational banner |
| `AsqQuestion` | Modal overlay with a form to submit a question to the instructor |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  Built with ❤️ using Next.js & React
</div>
