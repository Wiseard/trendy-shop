import './filter.css'
import { useFilterContext } from '../../../context/filter_context'
import { formatPrice, getUniqueValues } from '../../../utils/helpers'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineDown,
  AiOutlineUp,
} from 'react-icons/ai'
import { useRef, useState } from 'react'

const Filter = () => {
  const {
    filters: { text, category, min_price, max_price, price },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')

  const ref = useRef(null)
  const formRef = useRef(null)

  const [formOpen, setFormOpen] = useState(true)
  const [categoryOpen, setCategoryOpen] = useState(false)

  const styleCategory = {
    height: categoryOpen
      ? `${ref.current.getBoundingClientRect().height}px`
      : '0',
  }

  const styleForm = {
    height: formOpen ? `auto` : '0',
  }

  return (
    <section className="filter-container">
      {/* header */}
      <header className="filter-header">
        <h3 className="filter-title cursive-title">choose your look</h3>
        <div className="filter-subtitle-container">
          <h4 className="filter-subtitle">filters</h4>
          {formOpen ? (
            <button
              type="button"
              className="btn-control-form btn-close-form"
              onClick={() => setFormOpen(false)}
            >
              <AiOutlineUp className="form-icon form-close-icon" />
            </button>
          ) : (
            <button
              type="button"
              className="btn-control-form btn-open-form"
              onClick={() => setFormOpen(true)}
            >
              <AiOutlineDown className="form-icon form-open-icon" />
            </button>
          )}
        </div>
        <div className="filter-underline"></div>
      </header>
      {/* form */}
      <div style={styleForm} className="filter-form-container">
        <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
          {/* Search */}
          <div className="filter-search-container">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end of search */}
          {/* categories */}
          <div className="filter-categories-container">
            <header className="filter-categories-header">
              <h4>category</h4>
              {categoryOpen ? (
                <button
                  type="button"
                  className="btn-categories-control"
                  onClick={() => setCategoryOpen(false)}
                >
                  <AiOutlineMinus />
                </button>
              ) : (
                <button
                  type="button"
                  className="btn-categories-control"
                  onClick={() => setCategoryOpen(true)}
                >
                  <AiOutlinePlus />
                </button>
              )}
            </header>
            <div className="categories-container" style={styleCategory}>
              <div ref={ref} className="flex categories-list">
                {categories.map((c, index) => {
                  return (
                    <button
                      className={`${
                        category === c.toLowerCase()
                          ? 'btn-category-active btn-category-filter'
                          : 'btn-category-filter'
                      }`}
                      key={index}
                      type="button"
                      name="category"
                      onClick={updateFilters}
                    >
                      {c}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
          {/* end of categories */}
          {/* price */}
          <div className="filter-price-container">
            <h4>price</h4>
            <p>{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price */}
          <button
            type="button"
            className="btn-standard clear-btn"
            onClick={clearFilters}
          >
            clear filters
          </button>
        </form>
      </div>
    </section>
  )
}
export default Filter
