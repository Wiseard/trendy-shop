import { useNavigate, useParams } from 'react-router-dom'
import { useProductsContext } from '../../context/products_context'
import { useEffect } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import './single_product.css'
import Article from '../../components/SingleProductLayout/Article'
import SkeletonsProduct from '../../components/SingleProductLayout/SkeletonsProduct'
import ErrorData from '../../components/Error/ErrorData'

export const singleProductUrl = `/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22product%22+%26%26+slug.current+%3D%3D+%22green-shoes%22%5D`

const SingleProductAlt = () => {
  useEffect(() => {
    document.title = `Trendy - Shop : ${id}`
    window.scrollTo(0, 0)
  }, [])

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchSingleProduct(
      `/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22product%22+%26%26+slug.current+%3D%3D+%22${id}%22%5D`
    )
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [error])

  if (loading) {
    return (
      <section className="single-article-container box-section">
        <SkeletonsProduct />
      </section>
    )
  }
  if (error) {
    return (
      <section className="single-article-container box-section">
        <ErrorData />
      </section>
    )
  }

  return (
    <section className="single-article-container box-section">
      <PageHero title={id} product />
      {product.length && <Article product={product} />}
    </section>
  )
}
export default SingleProductAlt
