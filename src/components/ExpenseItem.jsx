import { currencyFormatter, dateFormatter } from '../constants'

function ExpenseItem({ expense, onDelete }) {
  return (
    <li className="expense-item">
      <div className="expense-item__info">
        <p className="expense-item__title">{expense.title}</p>
        <p className="expense-item__meta">
          {expense.category} • {dateFormatter.format(new Date(expense.date))}
        </p>
      </div>
      <div className="expense-item__actions">
        <p className="expense-item__amount">{currencyFormatter.format(expense.amount)}</p>
        <button
          type="button"
          className="button button--danger"
          onClick={() => onDelete(expense.id)}
          aria-label={`Delete ${expense.title}`}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default ExpenseItem
