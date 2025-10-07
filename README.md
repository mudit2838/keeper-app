# Keeper App — Modern Notes Manager (Vite + React + Tailwind)

A fully functional, responsive, and elegant **note-taking app** built with React JS, TailwindCSS, and Vite. This project demonstrates CRUD (Create, Read, Update, Delete) operations using React Hooks and Props while maintaining clean, modular, and reusable components.

---


## 🚀 Objective
The goal of this project is to create a **Keeper App** that helps users manage their notes in an intuitive and visually appealing way while demonstrating modern React development practices.

---

## 🌟 Features

✅ **Add Notes:** Create new notes instantly with title and content.

✅ **Edit Notes:** Update existing notes easily with pre-filled fields.

✅ **Delete Notes:** Remove notes permanently when no longer needed.

✅ **Persistent Data:** Notes are stored locally using `localStorage`.

✅ **Responsive UI:** Optimized for all screen sizes — mobile, tablet, and desktop.

✅ **Alerts:** Displays alert messages when trying to submit an empty note.

✅ **Reusable Components:** Each feature is modular, improving scalability and readability.

✅ **Clean Styling:** TailwindCSS ensures consistent design and responsiveness.

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend Framework | [React JS](https://react.dev/) |
| Styling | [TailwindCSS](https://tailwindcss.com/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| State Management | React Hooks (`useState`, `useEffect`) |
| Deployment | Vercel Compatible |

---

## 🧱 Project Structure

```
keeper-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── CreateArea.jsx
│   │   ├── NoteCard.jsx
│   │   ├── Footer.jsx
│   │  
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## ⚙️ How It Works

1. When the app loads, it fetches notes from `localStorage` using `useEffect`.
2. On submitting a new note, it checks for empty fields — if empty, an alert is shown.
3. Notes are dynamically displayed using reusable `NoteCard` components.
4. Edit and Delete actions modify the state directly and sync it with `localStorage`.
5. The design automatically adapts to different screen sizes via Tailwind utilities.

---

## 🧠 Common Problems Faced & Solutions

### 1. **Issue:** Data not persisting after page reload.
**Cause:** Notes not stored properly in localStorage.
**Solution:** Used `useEffect` to sync notes state with localStorage whenever changes occur.

### 2. **Issue:** UI breaking on smaller screens.
**Cause:** Lack of responsive grid structure.
**Solution:** Implemented Tailwind's `grid-cols` classes for different breakpoints.

### 3. **Issue:** Multiple state updates during edit operation.
**Cause:** Old note state not cleared after update.
**Solution:** Reset `editNote` state after updating the note.

### 4. **Issue:** Users submitting empty notes.
**Cause:** Missing validation.
**Solution:** Added conditional validation and alert system before adding or editing notes.

---

## 🧩 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/keeper-app.git
cd keeper-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

---

## 💡 Future Enhancements

- 🔍 Search and Filter notes
- 🌙 Dark Mode support
- 📂 Category-based organization
- ☁️ Cloud sync and authentication

---

## 🧑‍💻 Author
**Mudit Kumar**  
B.Tech in Computer Science & Engineering  
Project under guidance of *RVIT*  

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---

✨ *A simple yet elegant project to demonstrate your mastery in React JS and TailwindCSS. Perfect for portfolios and interviews!*
