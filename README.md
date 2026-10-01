<div align="center">

# ⚡ Fanbase OS

### Turn Your Followers Into Coordinated Communities

**An AI-powered operating system for the creator economy.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=for-the-badge&logo=openai)](https://openai.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)

### 🌐 [Live Demo](https://end-osama-fanbase-os.vercel.app) · 📂 [Dashboard](https://end-osama-fanbase-os.vercel.app/dashboard) · 👨‍💻 [Portfolio](https://osama-sadek-portfolio.vercel.app/) · 🐛 [Report Bug](https://github.com/Eng-Osama-Sadek/fanbase-os/issues)

</div>

---

## 🎯 The Problem

Content creators with **700K+ followers** face a crippling daily reality:

- 📩 **1,200+ unread DMs** every single day
- 💎 **Valuable opportunities** (collabs, sponsorships, investments) buried under spam
- 👥 **Followers have no way to organize** around shared interests
- 💸 **"Pay-to-message" models** waste the value sitting in their inboxes

**The result:** Millions of dollars in opportunities and the most engaged fans are lost in the noise.

---

## 💡 The Solution

Fanbase OS is an AI-powered platform that moves creators from:

### Core Capabilities

| Feature | Description |
|---------|-------------|
| 🤖 **AI Representative** | Categorizes every DM into Opportunity / Idea / Fan Mail / Spam with automatic summaries |
| 👥 **Communities** | Organize followers into interest-based groups (Developers, Designers, Investors, Musicians...) |
| 💡 **Idea Engine** | AI scores fan ideas from 1–100 based on feasibility and potential impact |
| 📊 **Analytics** | Real-time engagement tracking and AI performance metrics |
| 🔗 **Link-in-Bio Hub** | Public page where fans join communities and pitch ideas |
| 🎯 **Opportunity Discovery** | Auto-surfaces collabs, sponsorships, and investment offers |

---

## 🏗️ Architecture

---

## 🛠️ Tech Stack

<table>
<tr>
<td valign="top" width="33%">

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Lucide Icons**

</td>
<td valign="top" width="33%">

### Backend & AI
- **Next.js API Routes**
- **OpenAI GPT-4o**
- **Prisma ORM**
- **PostgreSQL** (Supabase)
- **Clerk** (Auth)

</td>
<td valign="top" width="33%">

### DevOps
- **Vercel** (Hosting)
- **GitHub Actions** (CI/CD)
- **Prisma Migrate**
- **ESLint + Prettier**

</td>
</tr>
</table>

---

## 📸 Screenshots

### 🏠 Landing Page
![Landing Page](./screenshots/landing.png)

### 📊 Creator Dashboard
![Dashboard](./screenshots/dashboard.png)

### 👥 Communities
![Communities](./screenshots/communities.png)

### 💡 Idea Engine
![Ideas](./screenshots/ideas.png)

### 💌 Smart Inbox
![Messages](./screenshots/messages.png)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (or Supabase account)
- OpenAI API key

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Eng-Osama-Sadek/fanbase-os.git
cd fanbase-os

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Then edit .env with your keys

# 4. Set up the database
npx prisma generate
npx prisma db push

# 5. Run the development server
npm run dev
Open http://localhost:3000 to see the app.

Environment Variables
Create a .env file in the root directory:

env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/fanbase_os"

# OpenAI
OPENAI_API_KEY="sk-..."

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."
🎯 How It Works
For Creators
Connect your DMs from X, Instagram, LinkedIn

AI automatically categorizes and summarizes every message

Review high-value opportunities at a glance

Approve ideas worth promoting to your community

For Followers
Join interest-based communities via your link-in-bio

Pitch ideas and collaborate on projects

Vote on community-driven initiatives

Get discovered by the creator and fellow members

For the AI Representative
Learns the creator's tone and priorities

Surfaces only what matters

Drafts responses for quick approval

Discovers hidden connections between members

🏆 Built for Startupathon
This project was built for the Persist Ventures Startupathon Challenge:

"Build the Operating System for Fanbases"

Challenge: October 1 – October 30, 2026
Host: Persist Ventures

Evaluation Criteria
✅ Problem & UX — Solves the influencer inbox/community problem

✅ Community & AI — Effectively organizes followers with AI

✅ Innovation — Beyond existing social platforms

✅ Execution — Functional, polished, real-world potential

⭐ Real Influencer Validation — Tested by actual creators

👨‍💻 Author
<div align="center">
Osama Sadek

Senior Full-Stack Developer & AI Automation Engineer

https://img.shields.io/badge/Portfolio-Visit-purple?style=for-the-badge&logo=vercel
https://img.shields.io/badge/GitHub-Eng--Osama--Sadek-181717?style=for-the-badge&logo=github
https://img.shields.io/badge/LinkedIn-Osama%20Sadek-0A66C2?style=for-the-badge&logo=linkedin

17+ years engineering · 11+ in software · 8+ production AI apps

</div>
📄 License
This project is licensed under the MIT License.

🙏 Acknowledgments
Persist Ventures for the Startupathon challenge

OpenAI for GPT-4o API

Vercel for free hosting

shadcn for beautiful UI components

All the creators who provided feedback during development

<div align="center">
⭐ If this project helps you, please give it a star!
⬆ Back to Top

Made with ❤️ by Osama Sadek

</div> ```
