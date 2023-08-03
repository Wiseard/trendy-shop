import { Navigate } from 'react-router-dom'
import { useCartContext } from '../../context/cart_context'

// rest operator is gathering all the Private Route parameters : exact path
const PrivateRoute = ({ children, ...rest }) => {
  const { orders } = useCartContext()
  if (!orders.length) {
    return <Navigate to="/" />
  }
  return children
}
export default PrivateRoute
