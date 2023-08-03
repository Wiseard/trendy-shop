import { useNavigate, useParams } from 'react-router-dom'
import { useProductsContext } from '../../context/products_context'
import { useEffect } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import './single_product.css'
import Article from '../../components/SingleProductLayout/Article'

export const singleProductUrl = `/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22product%22+%26%26+slug.current+%3D%3D+%22green-shoes%22%5D`

const SingleProductAlt = () => {
  useEffect(() => {
    document.title = `Trendy - Shop : ${id}`
    // document.title = 'Trendy - Home'
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
    return <h1>Loading</h1>
  }
  if (error) {
    return <h1>There was an error</h1>
  }

  return (
    <section className="single-article-container box-section">
      {/* <section className="single-article-container box-container box-section"> */}
      <PageHero title={id} product />
      {product.length && <Article product={product} />}
    </section>
  )
}
export default SingleProductAlt
