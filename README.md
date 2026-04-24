# Interview Management Dashboard

A professional MERN interview tracking platform for recruiters, technical leads, and executives.

## Frontend
- React.js with Vite
- Tailwind CSS styling
- Role-based login for HR, Team, and CEO
- Dashboard, candidate management, interview scheduling, reports, and profile pages
- Clean white and light-blue professional theme

## Backend
- Node.js + Express
- MongoDB with Mongoose models
- JWT authentication and role-based middleware
- REST APIs for auth, candidate CRUD, interviews, profile, and dashboard summary

## Folder structure
- `frontend/` - React application source code
- `backend/` - Express API server and database models

## Setup
1. Install frontend dependencies:
   ```bash
   cd interview-management-dashboard/frontend
   npm install
   npm run dev
   ```
2. Install backend dependencies and start the API:
   ```bash
   cd interview-management-dashboard/backend
   npm install
   cp .env.example .env
   npm run dev
   ```
3. Ensure MongoDB is running and the `MONGODB_URI` is set correctly.
