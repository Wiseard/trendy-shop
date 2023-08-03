import './sort.css'
import { BsFillGridFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi'
import { useFilterContext } from '../../../context/filter_context'

const SortAlt = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext()

  return (
    <section className="sort-container">
      <div className="sort-view">
        <button
          type="button"
          className={`btn-sort ${grid_view && 'active'}`}
          onClick={setGridView}
        >
          <BsFillGridFill className="sort-icon grid-icon" />
        </button>
        <button
          type="button"
          className={`btn-sort ${!grid_view && 'active'}`}
          onClick={setListView}
        >
          <FaThList className="sort-icon grid-icon" />
        </button>
        <p className="sort-view-products-number">
          {products.length} products found
        </p>
      </div>
      <form className="form-sort">
        <BiChevronDown className="sort-select-icon arrow-down-icon" />
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </section>
  )
}
export default SortAlt
