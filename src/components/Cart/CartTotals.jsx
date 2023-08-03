import { useEffect, useRef, useState } from 'react'
import { useCartContext } from '../../context/cart_context'
import { formatPrice } from '../../utils/helpers'
import { BiChevronDown } from 'react-icons/bi'
import country_list from '../../utils/constants/countries'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import './carttotals.css'
import { useFormContext } from '../../context/form_context'

const CartTotals = () => {
  const {
    shipping_fee,
    total_amount,
    local_pickup,
    updateAddress,
    createOrder,
    orders,
  } = useCartContext()

  const {
    country,
    isSelectEmpty,
    city,
    postcode,
    userAddress,
    email,
    shipping,
    confirmOrder,
    setCountry,
    setIsSelectEmpty,
    setCity,
    setPostcode,
    setUserAddress,
    setEmail,
    handleChange,
    setConfirmOrder,
  } = useFormContext()

  // FORM DYNAMIC HEIGHT
  const [isFormOpen, setIsFormOpen] = useState(false)
  const formRef = useRef(null)
  const formStyle = {
    height: isFormOpen
      ? `${formRef.current.getBoundingClientRect().height}px`
      : '0px',
  }

  // SUBMIT FUNCTION

  function handleSubmit(e) {
    e.preventDefault()
    if (country === '') {
      setIsSelectEmpty(true)
      return
    }
    if (confirmOrder) {
      updateAddress('')
      setConfirmOrder(false)

      document.querySelectorAll('.address-form input').forEach((element) => {
        element.disabled = false
      })
      document.querySelector('.address-dropdown').disabled = false

      return
    }
    updateAddress(userAddress)
    document.querySelectorAll('.address-form input').forEach((element) => {
      element.disabled = true
    })
    document.querySelector('.address-dropdown').disabled = true
    setConfirmOrder(true)
    setIsSelectEmpty(false)
  }

  // USE EFFECT

  useEffect(() => {
    if (orders.length > 0) {
      // SET PREVIOUS USER INFO TO FORM
      const { order_user } = orders[orders.length - 1]
      const {
        user_country,
        user_city,
        user_address,
        user_postcode,
        user_email,
      } = order_user
      setCountry(user_country)
      setCity(user_city)
      setUserAddress(user_address)
      setPostcode(user_postcode)
      setEmail(user_email)

      // LOCK FORM
      document.querySelector('.address-dropdown').disabled = true
      setConfirmOrder(true)

      document.querySelectorAll('.address-form input').forEach((element) => {
        element.disabled = true
      })
    }
  }, [])

  // RENDER
  return (
    <section className="cart-totals-container">
      <div className="cart-totals-title">
        <h2>cart totals</h2>
      </div>
      <div className="cart-totals-content">
        {/* SUBTOTAL */}
        <div className="subtotal">
          <h3>subtotal</h3>
          <p>{formatPrice(total_amount)}</p>
        </div>
        {/* SHIPPING */}
        <div className="shipping-content">
          <div className="shipping-header">
            <h3>shipping</h3>
          </div>
          <form className="shipping-modes" onChange={handleChange}>
            <div>
              <input
                type="radio"
                id="flat-rate"
                name="shipping-mode"
                value="flat-rate"
                defaultChecked={shipping === 'flat-rate'}
              />
              <label htmlFor="flat-rate">
                flat-rate : {formatPrice(shipping_fee)}
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="free-shipping"
                name="shipping-mode"
                value="free-shipping"
                defaultChecked={shipping === 'free-shipping'}
              />
              <label htmlFor="free-shipping">free shipping</label>
            </div>
            <div>
              <input
                type="radio"
                id="local-pickup"
                name="shipping-mode"
                value="local-pickup"
                defaultChecked={shipping === 'local-pickup'}
              />
              <label htmlFor="local-pickup">
                local pickup : {formatPrice(local_pickup)}
              </label>
            </div>
          </form>
        </div>
        {/* DELIVERY TIME */}
        <div className="delivery-content">
          <div className="delivery-time">
            <h3>delivery time</h3>
            <p>
              {shipping === 'flat-rate'
                ? '1 - 2 days'
                : shipping === 'local-pickup'
                ? '2 - 3 days'
                : '5 - 6 days'}
            </p>
          </div>
          {/* FORM ADDRESS */}
          <div className="delivery-address">
            <div
              className="address-header"
              onClick={() => setIsFormOpen(!isFormOpen)}
              style={{ cursor: 'pointer' }}
            >
              <h3>change address</h3>
              <button className="btn-address-dropdown" type="button">
                <BiChevronDown className="address-dropdown-icon" />
              </button>
            </div>
            <div style={formStyle} className="address-update">
              <form
                ref={formRef}
                className="address-form"
                onSubmit={handleSubmit}
              >
                <div className="select-country">
                  <select
                    name="address"
                    id="address"
                    className={`address-dropdown ${
                      isSelectEmpty && 'error-address-dropdown'
                    }`}
                    // className="address-dropdown"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    {country_list.map((item) => {
                      return (
                        <option key={nanoid()} value={item}>
                          {item}
                        </option>
                      )
                    })}
                  </select>
                  <button type="button" className="btn-select-country">
                    <BiChevronDown />
                  </button>
                </div>
                <input
                  type="text"
                  name="address"
                  id="city"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="address"
                  id="address-city"
                  placeholder="Address"
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="address"
                  id="postcode"
                  placeholder="Postcode"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  required
                />
                <input
                  type="email"
                  name="address"
                  id="address-email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {confirmOrder ? (
                  <button type="submit" className="btn btn-submit-address">
                    reset address
                  </button>
                ) : (
                  <button type="submit" className="btn btn-submit-address">
                    update changes
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="cart-totals-underline"></div>
        {/* TOTAL */}
        <div className="cart-totals-sum">
          <h3>total</h3>
          <p>
            {shipping === 'flat-rate'
              ? formatPrice(total_amount + shipping_fee)
              : shipping === 'local-pickup'
              ? formatPrice(total_amount + local_pickup)
              : formatPrice(total_amount)}
          </p>
        </div>
        <div className="btn-checkout-container">
          <Link
            disabled
            to="/checkout"
            className={
              confirmOrder
                ? 'btn btn-checkout-validation'
                : 'btn btn-checkout-validation btn-checkout-disabled'
            }
            onClick={() =>
              createOrder(
                country,
                city,
                userAddress,
                postcode,
                email,
                // shipping method
                shipping === 'flat-rate'
                  ? 'flat-rate'
                  : shipping === 'local-pickup'
                  ? 'local-pickup'
                  : 'free shipping',
                // shipping fee
                shipping === 'flat-rate'
                  ? shipping_fee
                  : shipping === 'local-pickup'
                  ? local_pickup
                  : 0,
                // delivery time
                shipping === 'flat-rate'
                  ? '1 - 2 days'
                  : shipping === 'local-pickup'
                  ? '2 - 3 days'
                  : '5 - 6 days'
              )
            }
          >
            place order
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CartTotals
