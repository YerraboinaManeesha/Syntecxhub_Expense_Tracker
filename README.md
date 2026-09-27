# 💰 SpendWise – Expense Tracker

## 📌 Overview

**SpendWise** is a responsive **Expense Tracker web application** built with **React.js**. It helps users record, manage, search, filter, and track their everyday expenses through a clean and responsive interface.

This project was developed as **Project 1 – Expense Tracker** during my **Web Development Internship at Syntecxhub**.

## 🌐 Live Demo

🚀 **[View SpendWise Live Demo](https://spendwise-expense-tracker-tau.vercel.app/)**

## 📂 GitHub Repository

💻 **[View Source Code on GitHub](https://github.com/YerraboinaManeesha/Syntecxhub_Expense_Tracker)**

## ✨ Features

* ➕ Add new expenses
* 🗑️ Delete individual expenses
* 🧹 Clear all expenses
* 🔍 Search expenses by name or description
* 🏷️ Filter expenses by category
* 💰 Automatically calculate total spending
* 📅 Track monthly expenses
* 📊 Display highest expense
* 🧾 Display total number of transactions
* 💾 Store expense data using browser local storage
* 🌐 Load initial expense data from a mock API
* 📱 Fully responsive design
* ⚡ Optimized React components using modern React Hooks
* 🔔 Custom confirmation modal for delete and clear actions

## 🛠️ Technologies Used

### Frontend

* ⚛️ React.js
* 🟨 JavaScript (ES6+)
* 🎨 CSS3
* 🌐 HTML5
* ⚡ Vite

### Data & Storage

* 🔗 Mock JSON API
* 💾 Browser Local Storage

### Development Tools

* 🧑‍💻 Visual Studio Code
* 📦 npm
* 🔧 Git
* 🐙 GitHub
* ▲ Vercel

## ⚛️ React Concepts Implemented

This project demonstrates the practical use of React Hooks:

### `useState`

Used to manage:

* Expense records
* Form inputs
* Search text
* Category filters
* Loading and status states
* Confirmation modal state

### `useEffect`

Used to:

* Fetch initial expense data from the mock API
* Load previously stored expenses from Local Storage
* Synchronize expense data with Local Storage

### `useRef`

Used for:

* Form field focus management
* Scrolling to the expense form

### `useMemo`

Used to optimize calculated and filtered data such as:

* Filtered expenses
* Total spending
* Monthly spending
* Highest expense
* Transaction count

### `useCallback`

Used to optimize callback functions such as:

* Adding expenses
* Deleting expenses
* Clearing all expenses
* Navigation
* Scrolling to the form

## 📁 Project Structure

```text
SpendWise/
│
├── public/
│   └── mock-expenses.json
│
├── src/
│   ├── components/
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │   ├── FilterBar.jsx
│   │   ├── Header.jsx
│   │   └── SummaryCards.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🚀 Installation

Follow these steps to run SpendWise locally.

### 1. Clone the repository

```bash
git clone https://github.com/YerraboinaManeesha/Syntecxhub_Expense_Tracker.git
```

### 2. Navigate to the project directory

```bash
cd Syntecxhub_Expense_Tracker
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local Vite development URL shown in the terminal.

## 🏗️ Production Build

To create a production-ready build:

```bash
npm run build
```

The optimized production files are generated inside the:

```text
dist/
```

directory.

## 🌐 Deployment

SpendWise is deployed using **Vercel**.

🚀 **Live Application:**
https://spendwise-expense-tracker-tau.vercel.app/

Every new change pushed to the connected GitHub repository can be deployed through the Vercel Git integration.

## 📱 Responsive Design

SpendWise is designed to work across different screen sizes, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

The layout adapts to different screen sizes while maintaining usability and readability.

## 🎯 Project Objectives

The main objectives of this project were to:

* Build a responsive React application
* Practice React Hooks
* Manage form and application state
* Work with mock API data
* Implement Local Storage persistence
* Optimize rendering using `useMemo` and `useCallback`
* Implement DOM references using `useRef`
* Create a clean and user-friendly interface
* Deploy a React application to a live hosting platform

## 🎓 Internship Details

**Internship:** Web Development Internship
**Organization:** Syntecxhub
**Project:** Project 1 – Expense Tracker
**Application:** SpendWise
**Technology:** React.js

## 🔗 Links

* 🌐 **Live Demo:** https://spendwise-expense-tracker-tau.vercel.app/
* 💻 **GitHub Repository:** https://github.com/YerraboinaManeesha/Syntecxhub_Expense_Tracker
* 👩‍💻 **GitHub Profile:** https://github.com/YerraboinaManeesha

## 👤 Author

**Maneesha Yerraboina**

MSc Computer Science Graduate | Web Development Intern

---


