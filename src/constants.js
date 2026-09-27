export const CATEGORIES = [
  'Food',
  'Bills',
  'Transport',
  'Shopping',
  'Entertainment',
  'Health',
  'Education',
  'Other',
]

export const STORAGE_KEY = 'spendwise_expenses'

export const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

export const dateFormatter = new Intl.DateTimeFormat('en-IN', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})
