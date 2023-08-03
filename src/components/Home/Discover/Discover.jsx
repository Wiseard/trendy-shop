import './discover.css'
import turquoise from '../../../assets/turquoise-bag.jpeg'
import { formatPrice } from '../../../utils/helpers'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const DiscoverAlt = () => {
  return (
    <section className="grid discover-container">
      <div className="discover-parallax-image"></div>
      <div className="grid discover-article">
        <div className="discover-image-container">
          <img
            src={turquoise}
            alt="turquoise purse"
            className="discover-article-image"
          />
        </div>
        <div className="discover-article-info">
          <div className="flex discover-article-desc">
            <h4>turquoise</h4>
            <div className="flex discover-article-prices">
              <p className="old-price">$120</p>&nbsp;
              <p className="new-price">{formatPrice(60)}</p>
            </div>
          </div>
          <Link to="/shop" className="link-standard learn-more">
            learn more
            <BsArrowRightShort className="arrow-right-icon" />
          </Link>
        </div>
      </div>
    </section>
  )
}
export default DiscoverAlt
