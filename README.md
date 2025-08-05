# 🚀 Job & Networking Portal 🌐  
> **Core Team Internship Submission — Jihvitha Lakshmi Mannam**

---

## 📝 Project Overview
This is a **Job & Networking Portal** where:
- Users can **create and update their profiles**.
- Employers can **post job opportunities**.
- Wallet-based **crypto payments (MetaMask)** are integrated for secure transactions.
- Backend APIs are modularly designed to handle profile management, job postings, and payment verifications.

---

## 🖥️ Tech Stack
| Frontend                         | Backend                              | Others                        |
|----------------------------------|--------------------------------------|-------------------------------|
| React.js (CRA)                   | Node.js + Express.js                 | Tailwind CSS                  |
| Axios (for API calls)             | MongoDB (via Mongoose)               | ethers.js (for Wallet Tx)     |
| Wallet Integration (MetaMask)     | REST API Architecture                | .env for secure configurations |

---

## 🌟 Features
- **Profile Update Flow** (Name, Bio, Wallet).
- **Post Job Flow** (Title, Description, Skills, Budget).
- **Wallet Payment Simulation** (Connect Wallet, Pay 0.001 ETH).
- **Modular Backend APIs** (Ready for deployment).
- **Responsive & Interactive UI** (Tailwind CSS powered).

---

## ⚙️ Folder Structure
```

/frontend
/src/components
ProfilePage.jsx
PostJobPage.jsx
WalletButton.jsx
App.jsx
index.js
index.css
/backend
server.js
routes/
.env.example

````

---

## 🛠️ How to Run the Project (Frontend-Only Demo)
1. Navigate to frontend folder:
   ```bash
   cd frontend
   npm install
   npm start
````

2. The portal will run at: `http://localhost:3000`.

3. Backend code is available in `/backend/`, but due to **system-level network restrictions**, API calls are simulated via **mock frontend state**.

---

## 🔗 Backend Architecture (Ready-to-deploy)

* Express server with CORS & JSON middleware.
* Routes:

  * `/api/profile` → GET Profile Data.
  * `/api/profile/update` → Update Profile.
  * `/api/job/post` → Post a Job.
  * `/api/payment/verify` → Verify Payment txHash.
* MongoDB integration using Mongoose (configured via `.env`).
* Wallet payment verification using ethers.js.

---

## 📊 Demo Video Flow

* Frontend workflows are fully interactive (Profile Update, Post Job, Wallet Connect).
* Backend APIs are explained through code walkthrough.
* Simulated API responses are used due to firewall restrictions.
* Payment flow is shown via Wallet simulation and success alerts.

---

## 🧠 Future Scope

* AI Skill Matching Algorithm.
* Blockchain Escrow Payments for Job Contracts.
* Real-time Chat & Notifications.
* Full-stack deployment on Render/Vercel with live APIs.

---

## 👨‍💻 Developer

* Jihvitha Lakshmi Mannam
* Core Team Internship Applicant

---
