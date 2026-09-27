import { useRef, useState } from 'react'
import { CATEGORIES } from '../constants'

const emptyForm = {
  title: '',
  amount: '',
  category: CATEGORIES[0],
  date: new Date().toISOString().slice(0, 10),
}

function ExpenseForm({ onAddExpense, sectionRef }) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const titleInputRef = useRef(null)

  const validate = () => {
    const nextErrors = {}
    if (!form.title.trim()) {
      nextErrors.title = 'Give this expense a title.'
    }
    const amountValue = Number(form.amount)
    if (!form.amount || Number.isNaN(amountValue) || amountValue <= 0) {
      nextErrors.amount = 'Enter an amount greater than 0.'
    }
    if (!form.date) {
      nextErrors.date = 'Pick a date for this expense.'
    }
    return nextErrors
  }

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      return
    }

    onAddExpense({
      title: form.title.trim(),
      amount: Number(form.amount),
      category: form.category,
      date: form.date,
    })

    setForm(emptyForm)
    setErrors({})
    // Return focus to the title field so a person logging several
    // expenses in a row never has to reach for the mouse.
    titleInputRef.current?.focus()
  }

  return (
    <section className="panel" ref={sectionRef} aria-labelledby="add-expense-heading">
      <h2 className="panel__heading" id="add-expense-heading">Add an expense</h2>
      <form className="expense-form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="expense-title">Title</label>
          <input
            id="expense-title"
            ref={titleInputRef}
            type="text"
            value={form.title}
            onChange={handleChange('title')}
            placeholder="e.g. Grocery shopping"
            aria-invalid={Boolean(errors.title)}
            aria-describedby={errors.title ? 'expense-title-error' : undefined}
          />
          {errors.title && (
            <p className="field__error" id="expense-title-error" role="alert">
              {errors.title}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="expense-amount">Amount (₹)</label>
          <input
            id="expense-amount"
            type="number"
            min="0"
            step="0.01"
            inputMode="decimal"
            value={form.amount}
            onChange={handleChange('amount')}
            placeholder="0"
            aria-invalid={Boolean(errors.amount)}
            aria-describedby={errors.amount ? 'expense-amount-error' : undefined}
          />
          {errors.amount && (
            <p className="field__error" id="expense-amount-error" role="alert">
              {errors.amount}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="expense-category">Category</label>
          <select
            id="expense-category"
            value={form.category}
            onChange={handleChange('category')}
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="expense-date">Date</label>
          <input
            id="expense-date"
            type="date"
            value={form.date}
            onChange={handleChange('date')}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? 'expense-date-error' : undefined}
          />
          {errors.date && (
            <p className="field__error" id="expense-date-error" role="alert">
              {errors.date}
            </p>
          )}
        </div>

        <button type="submit" className="button button--primary">
          Add expense
        </button>
      </form>
    </section>
  )
}

export default ExpenseForm
