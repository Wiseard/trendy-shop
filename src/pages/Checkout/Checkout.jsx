import { useEffect } from 'react'
import { Orders } from '../../components/index'
import './checkout.css'

const Checkout = () => {
  useEffect(() => {
    document.title = 'Trendy - Your orders'
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="checkout-container">
      <Orders />
    </section>
  )
}
export default Checkout
