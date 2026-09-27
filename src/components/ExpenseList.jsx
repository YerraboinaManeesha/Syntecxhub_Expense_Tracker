import ExpenseItem from './ExpenseItem'
import EmptyState from './EmptyState'

function ExpenseList({ expenses, hasAnyExpenses, onDelete, onAddClick }) {
  return (
    <section className="panel" aria-label="Expense list">
      <h2 className="panel__heading">Expenses</h2>

      {expenses.length === 0 ? (
        <EmptyState
          variant={hasAnyExpenses ? 'no-results' : 'no-expenses'}
          onAddClick={hasAnyExpenses ? undefined : onAddClick}
        />
      ) : (
        <ul className="expense-list">
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default ExpenseList
