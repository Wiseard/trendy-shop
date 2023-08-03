import { Link } from 'react-router-dom'
import './new_arrivals.css'
import { BsArrowRightShort } from 'react-icons/bs'

const NewArrivals = () => {
  return (
    <section className="arrivals-container flex box-container">
      <div className="arrivals-header">
        <h2 className="arrivals-title cursive-title">don't wait</h2>
        <h3 className="arrivals-subtitle">check the new arrivals</h3>
        <div className="arrivals-underline"></div>
        <Link to="/shop" className="btn-standard arrivals-btn">
          <span>all collections</span>
          <BsArrowRightShort className="arrow-right-icon" />
        </Link>
      </div>
    </section>
  )
}
export default NewArrivals
