# 🛍️ Productify — Full-Stack Product Store (PERN Stack)

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-blue?logo=postgresql)
![Express](https://img.shields.io/badge/Express-5-black?logo=express)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Drizzle ORM](https://img.shields.io/badge/ORM-Drizzle-orange)
![Auth](https://img.shields.io/badge/Auth-Clerk-purple)
![Deployment](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

> A full-stack **PERN (PostgreSQL, Express, React, Node.js)** product store application with role-based access control and seamless UI consistency.

🔗 **Live App:** https://productify-store-app.vercel.app

📦 **Repository:** https://github.com/RamBapu/productify

🚀 **Deployed on:** Vercel

---

# 📌 Project Overview

**Productify** is a production-ready full-stack e-commerce-style product store application built using the PERN stack.

It demonstrates:

- 🔐 Secure authentication with Clerk
- 👥 Role-based access control
- 🛍️ Product CRUD operations
- 💬 Authenticated user commenting
- 🎨 Seamless, consistent UI theme styling
- ⚡ Optimized server-state management with React Query
- 🗄 Type-safe database interactions using Drizzle ORM

---

# 🧠 Key Features

## 👀 Public Access

- All users can view products
- Responsive UI with consistent theme styling

## 🔐 Authentication

- Implemented using Clerk
- Secure session handling
- Token validation in backend

## 💬 Authenticated Users

- Can comment on products
- Comments linked to user identity

## 👑 Owner Privileges

- Only product owner can:
  - 👥 Access profile section
  - ✏️ Edit products
  - 🗑️ Delete products

Role-based authorization is enforced at the backend level.

---

# 🛠 Tech Stack

## Frontend

- React 19 (Vite)
- TypeScript
- React Router
- Tailwind CSS + DaisyUI
- TanStack React Query
- Axios
- Clerk React
- Lucide React

## Backend

- Node.js
- Express 5
- TypeScript
- Drizzle ORM
- PostgreSQL (Neon)

## Authentication

- Clerk

## Deployment

- Vercel

---

# 🔍 Architecture Explanation

## 1️⃣ Frontend Layer

- Built with React + Vite for fast development
- Type-safe components using TypeScript
- Centralized Axios instance for API calls
- React Query for:
  - Caching
  - Background refetch
  - Mutation handling
  - Error & loading states via custom hooks

## 2️⃣ Authentication Layer

- Clerk manages authentication on frontend
- Synced Users with DB on signing in
- Ensures secure access control

## 3️⃣ Backend Layer (Express + TypeScript)

- RESTful API structure
- Modular controller-based architecture
- Environment config management
- Role-based authorization logic

## 4️⃣ Database Layer

- PostgreSQL (Neon)
- Drizzle ORM provides:
  - Type-safe queries
  - Clean schema management
  - Scalable data access

---

# 📂 Project Structure

## Backend

```
backend/
│
├── src/config        # Environment configuration
├── src/controllers   # Business logic
├── src/db            # Database & schema
├── src/routes        # API routes
└── src/types         # Type definitions
```

## Frontend

```
frontend/
│
├── public
├── src/components    # Reusable components
├── src/hooks         # Custom hooks (mutation, loading, error handling)
├── src/lib           # Axios instance & API abstraction
└── src/pages	      # Routing
```

---

# 🚀 Local Development

## 1️⃣ Clone Repository

```bash
git clone https://github.com/RamBapu/productify.git
cd productify
```

---

## 2️⃣ Setup Backend

```
cd backend
npm install
```

Create `.env`:

```
PORT=3000
DATABASE_URL=
FRONTEND_URL=http://localhost:5173
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NODE_ENV=development
```

Run:

```bash
npm run dev
```

---

## 3️⃣ Setup Frontend

```
cd frontend
npm install
```

Create `.env`:

```
VITE_CLERK_PUBLISHABLE_KEY=
VITE_API_URL=http://localhost:3000/api
```

Run:

```bash
npm run dev
```

---

# 👨‍💻 Author

**Ram Bapu**

Product Developer | Full stack Web Developer

GitHub: https://github.com/RamBapu
