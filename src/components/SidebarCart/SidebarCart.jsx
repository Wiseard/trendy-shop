import { BiExit } from 'react-icons/bi'
import empty from '../../assets/empty-cart.svg'
import { useNavigationContext } from '../../context/navigation_context'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './sidebarcart.css'
import { useCartContext } from '../../context/cart_context'
import { BsTrash3 } from 'react-icons/bs'
import CartItems from '../CartItem/CartItems'

const SidebarCart = () => {
  const { cart, toggleAmount, clearCart } = useCartContext()
  const { openSidebar, setOpenSidebar } = useNavigationContext()

  return (
    <>
      {/* sidebar cart modal */}
      <div
        className={`sidebar-cart-modal ${
          openSidebar ? 'show-sidebar-cart-modal' : ''
        }`}
        onClick={() => setOpenSidebar(false)}
      ></div>
      <aside className={`sidebar-cart ${openSidebar ? 'show-sidebar' : ''}`}>
        <header className="sidebar-header">
          <h2>cart</h2>
          <button
            onClick={() => setOpenSidebar(false)}
            type="button"
            className="btn-close-sidebar"
          >
            <BiExit className="close-sidebar-icon" />
          </button>
        </header>
        {/* items cart */}
        {cart.length > 0 ? (
          <>
            <CartItems cart={cart} toggleAmount={toggleAmount} />
            {/* buttons */}
            <div className="sidebar-cart-buttons">
              <Link
                to="/cart"
                className="link-checkout"
                onClick={() => setOpenSidebar(false)}
              >
                <span>proceed to checkout</span>
                <BsArrowRightShort className="arrow-right-icon" />
              </Link>
              <button
                type="button"
                className="btn-standard btn-clear-cart-list"
                onClick={clearCart}
              >
                <BsTrash3 />
                <span>clear cart</span>
              </button>
            </div>
          </>
        ) : (
          // empty cart
          <div className="empty-cart-container">
            <h3 className="cursive-title empty-cart-title">
              your cart is empty...
            </h3>
            <img src={empty} alt="empty cart" className="empty-cart-image" />
            <Link
              to="/shop"
              className="btn-standard"
              onClick={() => setOpenSidebar(false)}
            >
              <span>return to shop</span>
              <BsArrowRightShort className="arrow-right-icon" />
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
export default SidebarCart
