import { Link } from 'react-router-dom'
import error404 from '../../assets/error404.svg'
import './error_404.css'

const Error404 = () => {
  return (
    <section className="box-section box-container error-404-container">
      <h2>an error occurred...</h2>
      <img src={error404} alt="error 404" />
      <Link to="shop" className="btn-error btn-standard">
        back to shop
      </Link>
    </section>
  )
}
export default Error404
