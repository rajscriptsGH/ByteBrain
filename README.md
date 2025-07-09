# 🧠 ByteBrain

**ByteBrain** is a full-stack Second Brain app to capture, organize, and connect ideas in one place. Built with TypeScript, Node.js, React, Express, MongoDB, and Tailwind CSS.

---

## 🚀 Features

- 📝 Create, edit, and delete notes
- 🧠 Tag-based organization
- 🔍 Full-text search
- 🌙 Dark mode support
- 🧩 Markdown support
- 🔐 Authentication (JWT-based)
- 📁 Folder and hierarchy support (coming soon)
- 🤖 AI-powered suggestions (future roadmap)

---

## ⚙️ Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express, TypeScript
- **Database:** MongoDB (Mongoose ODM)
- **Auth:** JWT (planned)
- **Deployment:** Vercel (frontend), Render/Fly.io/Heroku (backend)

---

## 📁 Folder Structure

```bash
bytebrain/
├── client/          # React frontend
├── server/          # Node + Express backend
├── docs/            # Design, planning, schema
└── README.md

```

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/bytebrain.git
cd bytebrain
```

### 2. Set Up the Backend

```bash
cd server
npm install
cp .env.example .env  # Add your environment variables
npm run dev
```

### 3. Set Up the Frontend

```bash
cd client
npm install
npm run dev
```

### 🛡️ .env Example (Server)

```ini
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bytebrain
JWT_SECRET=your_jwt_secret_key
```
