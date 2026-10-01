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

[Live Demo](https://fanbase-os.vercel.app) · [Portfolio](https://osama-sadek-portfolio.vercel.app/) · [Report Bug](https://github.com/Eng-Osama-Sadek/fanbase-os/issues) · [Request Feature](https://github.com/Eng-Osama-Sadek/fanbase-os/issues)

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
- **Next.js 14** (App Router, Server Components)
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
