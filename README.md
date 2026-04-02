A backend API built with Node.js and MongoDB that supports a secure and structured voting system. It includes user authentication, role-based access control, and logic to ensure fair voting.



## 🚀 Key Features

- 🔐 User authentication with secure registration and login  
- 🔑 JWT-based authorization for protected routes  
- 👑 Admin-only access for creating elections and candidates  
- 🗳️ Voting system that prevents double voting  
- 🧑‍🤝‍🧑 Candidate management for each election  
- 📊 Admin dashboard for viewing system statistics  



## 🛠️ Tech Stack

- Backend: Node.js, Express.js  
- Database: MongoDB Atlas, Mongoose  
- Security: JWT, Bcrypt  
- Testing: Postman  



## 📋 API Endpoints (Examples)

- POST /api/auth/register  
  → Register a new user (Public)

- POST /api/auth/login  
  → Login and get token (Public)

- POST /api/elections  
  → Create election (Admin Only)

- POST /api/candidates  
  → Add candidate (Admin Only)

- GET /api/candidates/:electionId  
  → Get candidates for an election (Public)

- POST /api/votes  
  → Cast a vote (Registered User)

- GET /api/admin/stats  
  → View system stats (Admin Only)



## ⚙️ Installation & Setup

1. Clone the repository  
   git clone 

2. Navigate into the project  
   cd backend

3. Install dependencies  
   npm install

4. Create a .env file and add: