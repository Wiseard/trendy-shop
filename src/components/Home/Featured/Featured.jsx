import { useProductsContext } from '../../../context/products_context'
import urlFor from '../../../utils/sanity_image_builder'
import { formatPrice } from '../../../utils/helpers'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import './featured.css'
import { useCartContext } from '../../../context/cart_context'

const FeaturedAlt = () => {
  const {
    products_loading,
    products_error,
    featured_products: featured,
  } = useProductsContext()

  const { addToCart } = useCartContext()

  if (products_error) {
    return <h2>there was an error</h2>
  }

  if (products_loading) {
    return <h2>Loading...</h2>
  }

  return (
    <section className="box-section">
      <div className="featured-header">
        <h2 className="featured-title cursive-title">summer look</h2>
        <h3 className="featured-subtitle">featured products</h3>
      </div>
      <div className="grid featured-articles-container">
        {featured.map((product) => {
          const { _id, name, price, portrait, image, slug, sizes } = product
          return (
            <div
              key={_id}
              className={
                portrait ? 'article article-main' : 'article article-standard'
              }
            >
              <button type="button" className="btn-learn-more-responsive">
                <AiOutlinePlus />
              </button>
              <Link to={`/shop/${slug.current}`}>
                <img
                  src={urlFor(image[0])}
                  alt={name}
                  className="article-image"
                />
              </Link>
              <div className="article-header">
                <h4 className="article-title">{name}</h4>
                <p className="article-price">{formatPrice(price)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default FeaturedAlt
