import { useState } from 'react'

function Header({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'expenses', label: 'Expenses' },
    { id: 'add-expense', label: 'Add Expense' },
  ]

  const handleClick = (id) => {
    setMenuOpen(false)
    onNavigate(id)
  }

  return (
    <header className="app-header">
      <div className="app-header__inner">
        <div className="app-header__brand">
          <span className="app-header__mark" aria-hidden="true">₹</span>
          <div>
            <p className="app-header__name">SpendWise</p>
            <p className="app-header__tag">Personal Expense Tracker</p>
          </div>
        </div>

        <button
          className="app-header__toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`app-header__nav${menuOpen ? ' app-header__nav--open' : ''}`}>
          {links.map((link) => (
            <button
              key={link.id}
              className="app-header__link"
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
