# Zerodha Trading Platform

A full-stack trading platform inspired by Zerodha, built using the MERN stack. The application consists of a public-facing React frontend, a trading dashboard, and a Node.js/Express backend connected to MongoDB.

## 🚀 Project Overview

This project provides a modern stock-trading-platform experience where users can explore the landing pages, create an account, log in securely, and access a personalized trading dashboard.

After authentication, users can view their holdings, positions, orders, funds, and watchlist, along with portfolio-related charts. The backend provides REST APIs for authentication, portfolio data, and simulated trading operations.

The project is divided into three applications:

- **Frontend** – Public-facing website and authentication pages.
- **Dashboard** – Trading dashboard and portfolio interface.
- **Backend** – REST API, authentication, database operations, and trading-related functionality.

---

## ✨ Features

### 🔐 Authentication

- User Signup
- User Login
- JWT-based authentication
- HTTP-only authentication cookies
- Password hashing using bcrypt
- Protected user profile endpoint
- Duplicate email validation

### 📊 Trading Dashboard

- Dashboard overview
- Holdings management
- Positions tracking
- Orders management
- Funds overview
- Watchlist
- Portfolio-related charts
- Buy/Sell action interface

### 🔧 Backend

- RESTful API
- MongoDB database integration
- Mongoose ODM
- JWT authentication
- Password hashing
- Cookie-based authentication
- CORS configuration
- Authentication middleware

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- JavaScript
- CSS
- HTML

### Trading Dashboard

- React.js
- Axios
- Material UI (MUI)
- Chart.js
- React Chart.js 2
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- REST APIs
- Mongoose

### Database

- MongoDB
- MongoDB Atlas

### Authentication & Security

- JSON Web Token (JWT)
- bcryptjs
- HTTP-only Cookies
- cookie-parser
- CORS

---

## 🏗️ Project Architecture

The application is divided into three main parts:

```text
                         USER
                          │
                          ▼
                 ┌─────────────────┐
                 │    FRONTEND     │
                 │   React.js      │
                 │   Port: 3000    │
                 └────────┬────────┘
                          │
                   Signup / Login
                          │
                          ▼
                 ┌─────────────────┐
                 │     BACKEND     │
                 │ Node.js/Express │
                 │   Port: 3002    │
                 └────────┬────────┘
                          │
                 Authentication
                   & API Requests
                          │
                          ▼
                 ┌─────────────────┐
                 │     MongoDB     │
                 │  Database Layer │
                 └─────────────────┘
                          ▲
                          │
                          │ API Requests
                          │
                 ┌────────┴────────┐
                 │    DASHBOARD    │
                 │   React.js      │
                 │   Port: 3001    │
                 └─────────────────┘





                 ## 📁 Project Structure

```text
zerodha-trading-platform/
│
├── backend/
│   ├── Controllers/
│   ├── Routes/
│   ├── middleware/
│   ├── model/
│   ├── schemas/
│   └── util/
│
├── dashboard/
│   ├── public/
│   └── src/
│       ├── components/
│       └── data/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── landing_page/
│       └── test/
│
├── .gitignore
└── README.md



💻 Installation & Setup
Prerequisites
- Node.js
- npm
- MongoDB / MongoDB Atlas
1. Clone the Repository
git clone https://github.com/poonamkevat/zerodha-trading-platform.git
cd zerodha-trading-platform

2. Setup Backend
cd backend
npm install

Create a .env file inside the backend folder:
PORT=3002
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_secret_key

Start the backend:
npm start

Backend:
https://zerodha-trading-platform-e1ns.onrender.com

3. Setup Frontend
Open a new terminal:
cd frontend
npm install
npm start

Frontend:
http://localhost:3000

4. Setup Dashboard
Open another terminal:
cd dashboard
npm install
npm start

Dashboard:
http://localhost:3001

🔌 API Overview
Method	Endpoint	Description
POST	/signup	Create a new user account
POST	/login	Authenticate user
GET	/me	Fetch authenticated user
GET	/allHoldings	Retrieve holdings
GET	/allPositions	Retrieve positions
POST	/newOrder	Create a trading order


🚀 Future Improvements
- Implement WebSocket-based real-time stock price updates.
- Connect the Orders dashboard with persistent order data.
- Associate Holdings and Positions with authenticated users.
- Add stronger validation and error handling.
- Deploy the complete application for production use.
👩‍💻 Author
Poonam Kevat
