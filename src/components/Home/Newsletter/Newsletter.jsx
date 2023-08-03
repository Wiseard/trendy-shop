import './newsletter.css'

const NewsletterAlt = () => {
  return (
    <section className="newsletter-container">
      <div className="grid news box-section">
        <div className="news-header">
          <h3 className="news-title">Get 20% off!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam.
          </p>
        </div>
        <div className="news-form">
          <form className="form">
            <input
              type="email"
              name="email"
              id=""
              placeholder="enter email"
              className="news-form-input"
            />
            <button type="submit" className="btn-news-submit">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default NewsletterAlt
