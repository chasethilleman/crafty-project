# Crafty

> Get creative craft ideas based on the items you have!

**Crafty** is a React + Vite web app that lets you enter a list of items and receive a unique craft idea, powered by Anthropic's Claude API. The app features a modern UI, item management, and a serverless backend for secure AI requests.

---

## Features

- Add items you have at home to a list
- Remove items from the list with a trash icon
- When you have at least 4 items, click "Get Crafty" to get a creative idea
- AI-powered suggestions are formatted in markdown for easy reading
- Loading spinner while waiting for a response
- Responsive, modern design

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Setup

1. Clone this repo:
   ```bash
   git clone https://github.com/chasethilleman/crafty-project.git
   cd crafty-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your Anthropic API key:
   - Create a `.env` file in the root with:
     ```
     VITE_ANTHROPIC_API_KEY=your_api_key_here
     ```
   - Or follow your deployment provider's instructions for environment variables.
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

- `src/` — React components and app logic
- `netlify/functions/ai.js` — Serverless function for Claude API
- `public/` — Static assets
- `App.css` — Main styles

---

## Deployment

This app is ready to deploy on Netlify or any platform supporting Vite and serverless functions.

---

## License

MIT
