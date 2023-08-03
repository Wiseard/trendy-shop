import { nanoid } from 'nanoid'
import { useCartContext } from '../../context/cart_context'
import './orders.css'
import urlFor from '../../utils/sanity_image_builder'
import { formatPrice } from '../../utils/helpers'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useRef, useState } from 'react'
import PageHero from '../PageHero/PageHero'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Orders = () => {
  const { orders } = useCartContext()
  const [isOrderActive, setIsOrderActive] = useState(null)
  const tableRef = useRef(null)

  function getOrderActive(index) {
    const orderActive = isOrderActive === index ? null : index
    setIsOrderActive(orderActive)
  }

  return (
    <section className="orders-container">
      <PageHero title="orders" className="orders-page-hero" />

      <div className="orders-header">
        <h2>Your orders</h2>
        <p>Thank you for your trust!</p>
        <p>Please find below your orders details</p>
      </div>
      <div className="all-orders">
        {orders.map((order, index) => {
          const { order_details, order_user, order_articles } = order
          const {
            order_num,
            order_date,
            order_total_items,
            subtotal,
            shipping_fee,
            delivery_time,
          } = order_details

          const {
            user_country,
            user_city,
            user_address,
            user_postcode,
            user_email,
          } = order_user
          return (
            <div key={nanoid()} className="order-container">
              <div className="caption" onClick={() => getOrderActive(index)}>
                <p className="order-num">
                  {`Order #${order_num}`}
                  <span className="order-date">({order_date})</span>
                </p>
                {isOrderActive === index ? (
                  <button className="btn-order btn-reduce" type="button">
                    <AiOutlineMinus className="order-icon" />
                  </button>
                ) : (
                  <button
                    className="order-icon btn-order btn-expand"
                    type="button"
                  >
                    <AiOutlinePlus />
                  </button>
                )}
              </div>
              <div
                style={{
                  height: `${
                    isOrderActive === index
                      ? tableRef.current.offsetHeights + 'px'
                      : '0'
                  }`,
                }}
                className="order-table"
              >
                <table className="order-table-container" ref={tableRef}>
                  <thead className="order-table-header">
                    <tr>
                      <th>Article</th>
                      <th>Size</th>
                      <th>Qty</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order_articles.map((item) => {
                      const { name, image, amount, price, size, category } =
                        item
                      return (
                        <tr key={nanoid()} className="order-info">
                          <td className="order-article">
                            <img
                              src={urlFor(image[0])}
                              alt={name}
                              className="order-img"
                            />
                            <p>{name}</p>
                          </td>
                          <td>{category === 'sunglasses' ? '-' : size}</td>
                          <td>{amount}</td>
                          <td className="order-article-price">
                            {formatPrice(amount * price)}
                          </td>
                        </tr>
                      )
                    })}
                    <tr className="order-subtotal-container">
                      <td className="order-subtotal" colSpan={2}>
                        Subtotal
                      </td>
                      <td className="order-total-items">{order_total_items}</td>
                      <td className="order-subtotal-amount">
                        {formatPrice(subtotal)}
                      </td>
                    </tr>
                    <tr className="order-shipping-fee-container">
                      <td className="order-shipping-fee" colSpan={3}>
                        Shipping fee
                      </td>
                      <td className="order-shipping-amount">
                        {formatPrice(shipping_fee)}
                      </td>
                    </tr>
                    <tr className="order-total-container">
                      <td colSpan={3}>Total</td>
                      <td className="order-total-amount">
                        {formatPrice(subtotal + shipping_fee)}
                      </td>
                    </tr>
                    {/* USER ADDRESS */}
                    <tr className="user-header">
                      <td colSpan={4}>Address</td>
                    </tr>
                    <tr className="user user-address">
                      <td colSpan={1}>address</td>
                      <td colSpan={3}>{user_address}</td>
                    </tr>
                    <tr className="user user-postcode">
                      <td colSpan={1}>postcode</td>
                      <td colSpan={3}>{user_postcode}</td>
                    </tr>
                    <tr className="user user-city">
                      <td colSpan={1}>city</td>
                      <td colSpan={3}>{user_city}</td>
                    </tr>
                    <tr className="user user-country">
                      <td colSpan={1}>country</td>
                      <td colSpan={3}>{user_country}</td>
                    </tr>
                    <tr className="user user-email">
                      <td colSpan={1}>email</td>
                      <td colSpan={3}>{user_email}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )
        })}
      </div>
      <Link to={'/shop'} className="btn-back-shop btn-orders">
        <AiOutlineArrowLeft className="back-shop-icon" />
        <span>go shopping</span>
      </Link>
    </section>
  )
}
export default Orders
