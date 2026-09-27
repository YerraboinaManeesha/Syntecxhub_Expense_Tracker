function EmptyState({ variant = 'no-expenses', onAddClick }) {
  if (variant === 'no-results') {
    return (
      <div className="empty-state">
        <p className="empty-state__title">No matching expenses</p>
        <p className="empty-state__body">Try another search term or category.</p>
      </div>
    )
  }

  return (
    <div className="empty-state">
      <p className="empty-state__title">No expenses yet</p>
      <p className="empty-state__body">Start tracking your spending by adding your first expense.</p>
      {onAddClick && (
        <button type="button" className="button button--primary" onClick={onAddClick}>
          Add an expense
        </button>
      )}
    </div>
  )
}

export default EmptyState
