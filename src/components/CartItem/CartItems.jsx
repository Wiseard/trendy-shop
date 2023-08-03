import { nanoid } from 'nanoid'
import './cart_items.css'
import urlFor from '../../utils/sanity_image_builder'
import { formatPrice } from '../../utils/helpers'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const CartItemsAlt = ({ cart, toggleAmount }) => {
  return (
    <section className="cart-item-list-container">
      <table className="cart-item-list-table">
        <thead>
          <tr>
            <th>Articles</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            const { id, image, name, size, price, amount, category } = item
            return (
              <tr key={nanoid()} className="cart-article">
                <td className="cart-article-info">
                  <img
                    src={urlFor(image[0])}
                    alt={name}
                    className="cart-article-img"
                  />
                  <div className="cart-article-information">
                    <p className="cart-article-name">{name}</p>
                    {category === 'sunglasses' || (
                      <p className="cart-article-size">Size : {size}</p>
                    )}
                  </div>
                </td>
                <td className="cart-article-amount">
                  <button
                    type="button"
                    className="btn-article-amount"
                    onClick={() => toggleAmount(id, 'dec')}
                  >
                    <BsChevronLeft className="amount-chevron-icon" />
                  </button>
                  <span>{amount}</span>
                  <button
                    type="button"
                    className="btn-article-amount"
                    onClick={() => toggleAmount(id, 'inc')}
                  >
                    <BsChevronRight className="amount-chevron-icon" />
                  </button>
                </td>
                <td className="cart-article-price">
                  {formatPrice(amount * price)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
export default CartItemsAlt
