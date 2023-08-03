import { useEffect } from 'react'
import { Orders } from '../../components/index'
import './checkout.css'

const Checkout = () => {
  useEffect(() => {
    document.title = 'Trendy - Your orders'
  }, [])

  return (
    <section className="checkout-container">
      <Orders />
    </section>
  )
}
export default Checkout
