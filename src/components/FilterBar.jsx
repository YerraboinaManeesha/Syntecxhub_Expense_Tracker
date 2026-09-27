import { CATEGORIES } from '../constants'

function FilterBar({ search, onSearchChange, category, onCategoryChange, onClearAll, hasExpenses }) {
  return (
    <section className="panel filter-bar" aria-label="Search and filter expenses">
      <div className="field field--grow">
        <label htmlFor="expense-search">Search</label>
        <input
          id="expense-search"
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by title or category"
        />
      </div>

      <div className="field">
        <label htmlFor="expense-category-filter">Category</label>
        <select
          id="expense-category-filter"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="All">All categories</option>
          {CATEGORIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        className="button button--ghost"
        onClick={onClearAll}
        disabled={!hasExpenses}
      >
        Clear all
      </button>
    </section>
  )
}

export default FilterBar
