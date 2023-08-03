import { Link } from 'react-router-dom'
import emptyCart from '../../assets/empty-cart.svg'
import { BsArrowRightShort } from 'react-icons/bs'

import './emptycart.css'

const EmptyCart = () => {
  return (
    <section className="empty-cart-container box-section box-container">
      <h2>your cart is empty...</h2>
      <img src={emptyCart} alt="empty cart" />
      <Link className="btn-standard" to="/shop">
        <span>let's fill it</span>
        <BsArrowRightShort className="arrow-right-icon" />
      </Link>
    </section>
  )
}
export default EmptyCart
