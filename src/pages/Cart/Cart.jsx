import { useEffect } from 'react'
import CartTotals from '../../components/Cart/CartTotals'
import EmptyCart from '../../components/Cart/EmptyCart'
import ShoppingCart from '../../components/Cart/ShoppingCart'
import PageHero from '../../components/PageHero/PageHero'
import { useCartContext } from '../../context/cart_context'
import './cartlayout.css'

const Cart = () => {
  const { cart } = useCartContext()
  useEffect(() => {
    document.title = 'Trendy - Cart'
  }, [])

  return (
    <>
      <section className="cart-layout-container box-container box-section">
        <PageHero title="cart" />
        {cart.length ? (
          <div className="cart-container grid">
            <ShoppingCart cart={cart} />
            <CartTotals />
          </div>
        ) : (
          <EmptyCart />
        )}
      </section>
    </>
  )
}
export default Cart
