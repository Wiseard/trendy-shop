import { useFilterContext } from '../../../context/filter_context'
import urlFor from '../../../utils/sanity_image_builder'
import { formatPrice } from '../../../utils/helpers'
import { Link } from 'react-router-dom'

import './products.css'

const ProductsAlt = () => {
  const { filtered_products: products, grid_view } = useFilterContext()

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search...
      </h5>
    )
  }

  return (
    <section className="products-grid-view-container">
      {grid_view ? (
        <div className="products-list-grid-view">
          {products.map((product) => {
            const { _id, name, price, portrait, image, slug } = product
            return (
              <article
                key={_id}
                className={
                  portrait && products.length > 10
                    ? 'article article-grid-main'
                    : 'article'
                }
              >
                <Link to={`/shop/${slug.current}`}>
                  <img
                    src={urlFor(image[0])}
                    alt={name}
                    className="article-image"
                  />
                </Link>
                <div className="article-header">
                  <h4>{name}</h4>
                  <p>{formatPrice(price)}</p>
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <div className="products-list-list-view">
          {products.map((product) => {
            const { _id, name, price, description, image, slug } = product
            return (
              <article className="product-list-view" key={_id}>
                <img
                  src={urlFor(image[0])}
                  alt={name}
                  className="product-list-view-image"
                />
                <div className="product-list-view-description">
                  <header className="product-list-view-header">
                    <h4>{name}</h4>
                    <p>{formatPrice(price)}</p>
                  </header>
                  <p>{description}</p>
                  <Link
                    to={`/shop/${slug.current}`}
                    className="btn product-list-btn"
                  >
                    details
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
export default ProductsAlt
