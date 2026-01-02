# OpenInsight Landing Page

This repository contains the source code for the landing page of **OpenInsight**, a minimalist Chrome extension designed for clarity and truth.

## 🌟 About OpenInsight

OpenInsight is a Chrome extension built on the design philosophy of **Epistemic Minimalism**. It functions by attaching a smart pop-up to a user's highlighted text, allowing them to either explain the content or fact-check it instantly.

### Primary Goals

- **Instant Verification:** Empower users to verify claims and facts the moment they encounter them.
- **Clarity through Explanation:** Provide clear, simplified explanations of complex text.
- **Promote Media Literacy:** Foster critical thinking habits by making verification a seamless part of browsing.

### Key Features

- **Smart Pop-up Interface:** Minimalist UI appearing on text selection (10-2000 chars).
- **Structured Insights:** Clear verdicts with clickable sources for fact-checking.
- **Advanced Customization:** Select preferred AI models via [OpenRouter](https://openrouter.ai/).
- **Security & Privacy:** API keys are stored locally and encrypted using the Web Crypto API.

## 🛠 Tech Stack

The landing page is built using:

- **React 18** & **Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Radix UI** primitives
- **Lucide React** for iconography

## 🏁 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SaintsWebnology/openinsight-web.git
   cd openinsight-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

- **Development Server:**

  ```bash
  npm run dev
  ```

  The site will be available at `http://localhost:8080`.

- **Build for Production:**

  ```bash
  npm run build
  ```

  The production-ready files will be in the `dist/` directory.

- **Development Build:**

  ```bash
  npm run build:dev
  ```

- **Preview Production Build:**

  ```bash
  npm run preview
  ```

- **Check for Issues:**
  ```bash
  npm run lint
  ```

## 👥 Target Audience

- **General News Readers** looking for clarity in daily information.
- **Students & Researchers** needing quick explanations of complex content.
- **Journalists & Fact-checkers** requiring rapid verification.

## 🔒 Security & Privacy

OpenInsight is designed with a "Security-First" architecture:

- **Local Storage:** All sensitive data (like API keys) stays on the user's device.
- **Encryption:** Uses the Web Crypto API for local encryption.
- **Sandboxing:** Background Service Workers ensure isolated process execution.

---

_OpenInsight - Stripping away the clutter, focusing on clarity and truth._
