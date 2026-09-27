import { currencyFormatter } from '../constants'

function SummaryCards({ totalSpent, monthTotal, highestExpense, transactionCount }) {
  const cards = [
    {
      label: 'Total spent',
      value: currencyFormatter.format(totalSpent),
    },
    {
      label: 'This month',
      value: currencyFormatter.format(monthTotal),
    },
    {
      label: 'Highest expense',
      value: highestExpense ? currencyFormatter.format(highestExpense.amount) : '—',
      detail: highestExpense ? highestExpense.title : 'No expenses yet',
    },
    {
      label: 'Transactions',
      value: transactionCount,
    },
  ]

  return (
    <section className="summary-grid" aria-label="Spending summary">
      {cards.map((card) => (
        <div className="summary-card" key={card.label}>
          <p className="summary-card__label">{card.label}</p>
          <p className="summary-card__value">{card.value}</p>
          {card.detail && <p className="summary-card__detail">{card.detail}</p>}
        </div>
      ))}
    </section>
  )
}

export default SummaryCards
