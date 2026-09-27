import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header'
import SummaryCards from './components/SummaryCards'
import ExpenseForm from './components/ExpenseForm'
import FilterBar from './components/FilterBar'
import ExpenseList from './components/ExpenseList'
import { STORAGE_KEY } from './constants'

function App() {
  const [expenses, setExpenses] = useState([])
  const [loading, setLoading] = useState(true)
  const [statusMessage, setStatusMessage] = useState(null)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [hasLoaded, setHasLoaded] = useState(false)

  // Custom confirmation modal state
  const [confirmModal, setConfirmModal] = useState({
    open: false,
    title: '',
    message: '',
    action: null,
  })

  const formSectionRef = useRef(null)

  // Load initial expenses
  useEffect(() => {
    let isMounted = true

    async function loadExpenses() {
      const stored = window.localStorage.getItem(STORAGE_KEY)

      if (stored) {
        try {
          const parsed = JSON.parse(stored)

          if (Array.isArray(parsed) && parsed.length > 0) {
            if (isMounted) {
              setExpenses(parsed)
              setLoading(false)
              setHasLoaded(true)
            }
            return
          }
        } catch {
          // Ignore malformed local data and fall through to mock API.
        }
      }

      try {
        // BASE_URL makes the mock API work on GitHub Pages
        const response = await fetch(
          `${import.meta.env.BASE_URL}mock-expenses.json`
        )

        if (!response.ok) {
          throw new Error('Could not load starter expenses.')
        }

        const data = await response.json()

        if (isMounted) {
          setExpenses(data)
        }
      } catch {
        if (isMounted) {
          setStatusMessage(
            'Could not reach the expense feed, so we started you with a blank list.'
          )
          setExpenses([])
        }
      } finally {
        if (isMounted) {
          setLoading(false)
          setHasLoaded(true)
        }
      }
    }

    loadExpenses()

    return () => {
      isMounted = false
    }
  }, [])

  // Keep LocalStorage in sync
  useEffect(() => {
    if (!hasLoaded) return

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(expenses)
    )
  }, [expenses, hasLoaded])

  const handleAddExpense = useCallback((newExpense) => {
    setExpenses((prev) => [
      {
        ...newExpense,
        id:
          prev.length > 0
            ? Math.max(...prev.map((e) => e.id)) + 1
            : 1,
      },
      ...prev,
    ])

    setStatusMessage(null)
  }, [])

  // Delete expense
  const handleDeleteExpense = useCallback(
    (id) => {
      const target = expenses.find(
        (expense) => expense.id === id
      )

      setConfirmModal({
        open: true,
        title: target
          ? `Delete "${target.title}"?`
          : 'Delete this expense?',
        message: "This can't be undone.",
        action: () => {
          setExpenses((prev) =>
            prev.filter((expense) => expense.id !== id)
          )

          setConfirmModal({
            open: false,
            title: '',
            message: '',
            action: null,
          })
        },
      })
    },
    [expenses]
  )

  // Clear all expenses
  const handleClearAll = useCallback(() => {
    setConfirmModal({
      open: true,
      title: 'Clear every expense?',
      message: "This can't be undone.",
      action: () => {
        setExpenses([])

        setConfirmModal({
          open: false,
          title: '',
          message: '',
          action: null,
        })
      },
    })
  }, [])

  const closeConfirmModal = useCallback(() => {
    setConfirmModal({
      open: false,
      title: '',
      message: '',
      action: null,
    })
  }, [])

  const scrollToForm = useCallback(() => {
    formSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    formSectionRef.current
      ?.querySelector('input')
      ?.focus()
  }, [])

  const handleNavigate = useCallback(
    (target) => {
      if (target === 'add-expense') {
        scrollToForm()
        return
      }

      const el = document.getElementById(target)

      el?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
    [scrollToForm]
  )

  const filteredExpenses = useMemo(() => {
    const query = search.trim().toLowerCase()

    return expenses.filter((expense) => {
      const matchesQuery =
        !query ||
        expense.title.toLowerCase().includes(query) ||
        expense.category.toLowerCase().includes(query)

      const matchesCategory =
        category === 'All' ||
        expense.category === category

      return matchesQuery && matchesCategory
    })
  }, [expenses, search, category])

  const totalSpent = useMemo(
    () =>
      expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
      ),
    [expenses]
  )

  const monthTotal = useMemo(() => {
    const now = new Date()

    return expenses
      .filter((expense) => {
        const d = new Date(expense.date)

        return (
          d.getMonth() === now.getMonth() &&
          d.getFullYear() === now.getFullYear()
        )
      })
      .reduce(
        (sum, expense) => sum + expense.amount,
        0
      )
  }, [expenses])

  const highestExpense = useMemo(() => {
    if (expenses.length === 0) return null

    return expenses.reduce(
      (max, expense) =>
        expense.amount > max.amount
          ? expense
          : max,
      expenses[0]
    )
  }, [expenses])

  const transactionCount = useMemo(
    () => expenses.length,
    [expenses]
  )

  return (
    <div className="app-shell">
      <Header onNavigate={handleNavigate} />

      <main className="app-main" id="dashboard">
        <section className="intro">
          <h1>Know where every rupee goes.</h1>

          <p>
            SpendWise keeps a running picture of your everyday spending,
            so you can log an expense in seconds and see exactly what it
            adds up to.
          </p>
        </section>

        <SummaryCards
          totalSpent={totalSpent}
          monthTotal={monthTotal}
          highestExpense={highestExpense}
          transactionCount={transactionCount}
        />

        {loading && (
          <p
            className="status-banner"
            role="status"
          >
            Loading your expenses…
          </p>
        )}

        {!loading && statusMessage && (
          <p
            className="status-banner status-banner--warning"
            role="status"
          >
            {statusMessage}
          </p>
        )}

        <ExpenseForm
          onAddExpense={handleAddExpense}
          sectionRef={formSectionRef}
        />

        <div id="expenses">
          <FilterBar
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            onClearAll={handleClearAll}
            hasExpenses={expenses.length > 0}
          />

          <ExpenseList
            expenses={filteredExpenses}
            hasAnyExpenses={expenses.length > 0}
            onDelete={handleDeleteExpense}
            onAddClick={scrollToForm}
          />
        </div>
      </main>

      <footer className="app-footer">
        <p>
          SpendWise — built for the Syntecxhub Web Development Internship.
        </p>
      </footer>

      {/* Custom Confirmation Modal */}
      {confirmModal.open && (
        <div
          className="confirm-overlay"
          onClick={closeConfirmModal}
        >
          <div
            className="confirm-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-title"
          >
            <h2 id="confirm-title">
              {confirmModal.title}
            </h2>

            <p>{confirmModal.message}</p>

            <div className="confirm-actions">
              <button
                type="button"
                className="button button--ghost"
                onClick={closeConfirmModal}
              >
                Cancel
              </button>

              <button
                type="button"
                className="button button--danger confirm-delete"
                onClick={confirmModal.action}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App