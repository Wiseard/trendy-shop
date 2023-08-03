import { useState } from 'react'
import { formatPrice } from '../../utils/helpers'
import urlFor from '../../utils/sanity_image_builder'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './article.css'
import { useCartContext } from '../../context/cart_context'

const Article = ({ product }) => {
  const { addToCart } = useCartContext()
  const [activeSize, setActiveSize] = useState(null)
  const [notification, setNotification] = useState(false)
  const [sizeError, setSizeError] = useState(false)
  const { _id, name, price, category, image, description, sizes } = product[0]

  // add cart function
  function addCart(e) {
    e.preventDefault()
    if (!activeSize && category !== 'sunglasses') {
      setSizeError(true)
      return
    }
    if (category === 'sunglasses') {
      setActiveSize('noSize')
    }
    addToCart(_id, 1, product[0], image, activeSize)
    setSizeError(false)
    setNotification(true)
    setTimeout(() => {
      setNotification(false)
    }, 5500)
  }

  return (
    <article className="grid article-container">
      <div className="article-image-container">
        <img
          src={urlFor(image && image[0])}
          alt={name}
          className="article-img"
        />
      </div>
      <div className="article-info">
        <header className="article-head">
          <h2>{name}</h2>
          <p>{formatPrice(price)}</p>
        </header>
        <div className="article-description">
          <p>{description}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            reiciendis laborum doloremque aut officiis dolores aliquam suscipit
            fugiat voluptatem ipsum.
          </p>
        </div>
        {/* sizes */}
        <div className="article-sizes">
          <h5>sizes :</h5>
          {/* sizes buttons */}
          <div
            className={`article-sizes-buttons ${
              sizeError && 'article-sizes-error'
            }`}
          >
            {sizes &&
              sizes.map((size, index) => {
                return (
                  <button
                    key={index}
                    style={{
                      pointerEvents: `${
                        category === 'sunglasses' ? 'none' : ''
                      }`,
                    }}
                    className={
                      activeSize === size
                        ? 'btn-size btn-size-active'
                        : 'btn-size'
                    }
                    onClick={() =>
                      setActiveSize(activeSize === size ? '' : size)
                    }
                    type="button"
                  >
                    <span>{size}</span>
                  </button>
                )
              })}
          </div>
          {sizeError && <p className="article-size-error">select a size</p>}
        </div>
        {/* stock */}
        <div className="article-stock">
          <h5>availability :</h5>
          <p>
            <AiOutlineCheck className="stock-icon" />
            <span>in stock</span>
          </p>
        </div>
        {/* buttons */}
        <div className="article-buttons">
          <button
            type="button"
            className="btn-standard btn-add-cart"
            onClick={addCart}
          >
            <span>add to cart</span>
            <BsArrowRightShort className="arrow-right-icon" />
          </button>
          <Link to="/shop" className="link-shop">
            <span>back to shop</span>
            <BsArrowRightShort className="arrow-right-icon" />
          </Link>
        </div>
      </div>
      {/* article notification */}
      <div
        className={`article-notification ${
          notification ? 'show-article-notification' : ''
        }`}
      >
        <img
          src={urlFor(image && image[0])}
          alt={name}
          className="article-notification-img"
        />
        <p>{name} added to the cart</p>
      </div>
    </article>
  )
}
export default Article
