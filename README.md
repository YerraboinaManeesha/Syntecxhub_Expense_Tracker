# SpendWise — Personal Expense Tracker

A polished personal expense tracker built with React and Vite, created for the **Syntecxhub Web Development Internship** expense-tracker assignment.

## Overview

SpendWise lets a person log everyday expenses, see a running summary of their spending, and search or filter their history — all in the browser, with no backend. Data starts from a mock API and is then persisted in the browser's LocalStorage, so nothing is lost on refresh.

## Features

- **Dashboard summary** — total spent, this month's spend, highest expense, and transaction count, all calculated live from the current data.
- **Add expense** — a validated form for title, amount, category, and date.
- **Delete expense** — remove a single expense, with a confirmation prompt.
- **Clear all** — wipe the whole list, with confirmation.
- **Search** — filter by title or category as you type.
- **Category filter** — narrow the list to one category, combinable with search.
- **Loading, error, and empty states** — the interface is never left blank.
- **Responsive layout** — works from desktop down to small mobile screens.
- **Indian Rupee formatting** — amounts are formatted with `Intl.NumberFormat` (e.g. ₹2,450).

## Technologies used

- React 18
- Vite
- JavaScript (JSX) — no TypeScript
- HTML5 / CSS3
- Browser LocalStorage
- A static mock JSON API (`public/mock-expenses.json`)

## React hooks used

| Hook | Where | What it does |
|---|---|---|
| `useState` | `App.jsx`, `ExpenseForm.jsx`, `Header.jsx` | Holds the expense list, loading/status state, search text, selected category, the add-expense form fields and their validation errors, and the mobile menu's open/closed state. |
| `useEffect` | `App.jsx` | One effect loads the starting expenses on mount — checking LocalStorage first, then falling back to fetching `/mock-expenses.json`. A second effect writes the expense list back to LocalStorage every time it changes. |
| `useRef` | `ExpenseForm.jsx`, `App.jsx` | `ExpenseForm` holds a ref on the title input so it can be refocused automatically after an expense is added. `App` holds a ref on the form's section so the "Add Expense" nav link and empty-state button can scroll the person straight to it. |
| `useMemo` | `App.jsx` | Recalculates the filtered expense list, total spent, this month's total, the highest expense, and the transaction count — only when the expenses, search text, or category filter actually change. |
| `useCallback` | `App.jsx` | Memoizes the add, delete, clear-all, scroll-to-form, and navigation handlers that are passed down to `ExpenseForm`, `FilterBar`, `ExpenseList`, and `Header`, so those child components don't re-render on every unrelated state change. |

## Project structure

```
Syntecxhub_Expense_Tracker/
│
├── public/
│   └── mock-expenses.json
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SummaryCards.jsx
│   │   ├── ExpenseForm.jsx
│   │   ├── FilterBar.jsx
│   │   ├── ExpenseList.jsx
│   │   ├── ExpenseItem.jsx
│   │   └── EmptyState.jsx
│   │
│   ├── App.jsx
│   ├── constants.js
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## How the mock API works

On first load (or whenever LocalStorage is empty), the app fetches `public/mock-expenses.json` with `fetch('/mock-expenses.json')` inside a `useEffect`. If the fetch fails, SpendWise shows a status message and continues with an empty list rather than leaving the screen blank.

## LocalStorage

Once expenses are loaded, every change to the list is written to LocalStorage under the key `spendwise_expenses`. On the next load, if that key already holds data, SpendWise uses it instead of re-fetching the mock API — so any expenses you've added or deleted survive a refresh.

## Installation

```bash
npm install
```

## Running the project

```bash
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
```

## Screenshots

_Add screenshots of the dashboard, add-expense form, and mobile view here._

## Internship purpose

This project was built to fulfil the Syntecxhub Web Development Internship's expense-tracker assignment, demonstrating meaningful, non-artificial use of `useState`, `useEffect`, `useRef`, `useMemo`, and `useCallback` in a real, working application.
