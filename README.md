# helloMind 🧠 

A **student mental wellness chatbot** 
helloMind provides a safe, anonymous space for students to talk about anxiety, stress, and depression — with compassionate AI responses powered by Google Gemini.

## About

Many students struggle silently with mental health. helloMind lowers the barrier by offering an **anonymous, judgment-free** conversational interface. The chatbot is guided by a carefully crafted system prompt to be supportive, non-diagnostic, and empathetic while always reminding users it is not a replacement for professional care.

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, TypeScript, Vite 6 |
| **Styling** | Tailwind CSS (CDN) |
| **AI** | Google Gemini 2.5 Flash (`@google/genai`) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (optional, via Mongoose 8) |
| **Rendering** | react-markdown + remark-gfm |
| **Auth** | localStorage (mock) |
| **Streaming** | Server-Sent Events (SSE) |

## Features

- Real-time streaming AI responses (character-by-character)
- Markdown rendering with syntax highlighting
- Anonymous chat sessions (no personal data stored)
- Responsive design (mobile + desktop)
- Dark theme UI with calming animations
- Login/signup with mock authentication
- Optional chat persistence via MongoDB

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Frontend

```bash
cd SIH-Chat-Bot
npm install
npm run dev
```

### Backend (optional, for production streaming)

```bash
cd server
npm install
cp .env.example .env
# Add your GEMINI_API_KEY to .env
node index.js
```

### Environment Variables

| Variable | Description |
|---|---|
| `VITE_GEMINI_API_KEY` | Gemini API key (client-side dev mode) |
| `VITE_USE_REMOTE_API` | Set to `true` to use the Express backend |
| `GEMINI_API_KEY` | Gemini API key (server-side) |
| `MONGODB_URI` | MongoDB connection string (optional) |


