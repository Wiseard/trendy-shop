import { nanoid } from 'nanoid'
import { useCartContext } from '../../context/cart_context'
import urlFor from '../../utils/sanity_image_builder'
import { formatPrice } from '../../utils/helpers'
import { BsChevronLeft, BsChevronRight, BsTrash3 } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import './shoppingcart.css'
import { Link } from 'react-router-dom'

const ShoppingCart = ({ cart }) => {
  const { toggleAmount, removeItem } = useCartContext()
  return (
    <section className="shopping-cart-container">
      <div className="shopping-cart-title">
        <h2>shopping cart</h2>
      </div>
      {cart.map((item) => {
        const { id, image, name, size, price, amount, slug, category } = item
        return (
          <div key={nanoid()} className="cart-item-container">
            <div className="cart-item">
              <div className="cart-item-header">
                <div className="btn-delete">
                  <button
                    className="btn-delete-trash"
                    type="button"
                    onClick={() => removeItem(id)}
                  >
                    <BsTrash3 className="delete-trash-icon" />
                  </button>
                </div>
                <Link to={`/shop/${slug.current}`}>
                  <img
                    src={urlFor(image[0])}
                    alt={name}
                    className="cart-image"
                  />
                </Link>
                <div className="cart-item-info">
                  <Link to={`/shop/${slug.current}`}>
                    <p className="cart-item-name">{name}</p>
                  </Link>
                  <p
                    className="cart-item-size"
                    style={{
                      display: `${category === 'sunglasses' ? 'none' : ''}`,
                    }}
                  >
                    Size :{size}
                  </p>
                </div>
              </div>
              <p className="cart-item-price">{formatPrice(price)}</p>
              <p className="cart-item-total">{formatPrice(price * amount)}</p>
              <div className="cart-item-quantity">
                <div className="quantity-text">
                  <span>Quantity&nbsp;:</span>
                </div>
                <div className="quantity-buttons">
                  <button
                    type="button"
                    className="item-qty qty-left"
                    onClick={() => toggleAmount(id, 'dec')}
                  >
                    <BsChevronLeft />
                  </button>
                  <span>{amount}</span>
                  <button
                    type="button"
                    className="item-qty qty-left"
                    onClick={() => toggleAmount(id, 'inc')}
                  >
                    <BsChevronRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="cart-item-underline"></div>
          </div>
        )
      })}

      <Link to={'/shop'} className="btn-back-shop">
        <AiOutlineArrowLeft className="back-shop-icon" />
        <span>go shopping</span>
      </Link>
    </section>
  )
}
export default ShoppingCart
