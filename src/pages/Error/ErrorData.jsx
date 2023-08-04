import './error_data.css'
import errorImage from '../../assets/error.svg'
import { Link } from 'react-router-dom'

const ErrorData = () => {
  return (
    <section className="box-section box-container error-container">
      <div className="error-titles">
        <h2>an error occurred...</h2>
        <h2>please try again</h2>
      </div>
      <img src={errorImage} alt="error image" />
      <Link to="/" className="btn-error btn-standard">
        back home
      </Link>
    </section>
  )
}
export default ErrorData
