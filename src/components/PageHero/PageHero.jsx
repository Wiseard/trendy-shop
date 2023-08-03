import { Link } from 'react-router-dom'
import './pagehero.css'

const PageHero = ({ title, product }) => {
  return (
    <div className="section-center">
      <h3>
        <Link to="/">Home&nbsp;</Link>
        {product && <Link to="/shop">/ Products&nbsp;</Link>}
        <span>/</span> {title}
      </h3>
    </div>
  )
}
export default PageHero
