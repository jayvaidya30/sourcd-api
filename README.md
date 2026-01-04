> The backend API for Sourcd, a community platform for sharing developer resources.

## 🚀 About The Project

This repository hosts the Express.js API that powers the DevResources platform. It handles user authentication, resource management, voting logic, and database interactions via Prisma.

**Frontend Repository:** [Frontend Repo Here](https://github.com/jayvaidya30/sourcd-web)

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Validation:** Zod
* **Authentication:** JWT (HTTP-Only Cookies)

## ⚡ Getting Started

Follow these steps to set up the backend locally.

### Prerequisites

* Node.js (v18 or higher)
* PostgreSQL (Local or via Docker)
* pnpm

### Installation

1.  **Clone the repo**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/REPO_NAME.git](https://github.com/YOUR_USERNAME/REPO_NAME.git)
    cd REPO_NAME
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory:
    ```env
    PORT=4000
    DATABASE_URL="postgresql://user:password@localhost:5432/my_db?schema=public"
    JWT_SECRET="super_secret_key"
    FRONTEND_URL="http://localhost:3000"
    ```

4.  **Database Migration**
    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Run the Server**
    ```bash
    npm run dev
    ```

## 📂 Project Structure

```text
src/
├── controllers/    # Route logic
├── middlewares/    # Auth & Validation
├── routes/         # API Endpoints
└── schemas/        # Zod Validation schemas

