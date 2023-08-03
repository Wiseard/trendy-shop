import './services.css'
import services from '../../../utils/constants/services'

const ServicesAlt = () => {
  return (
    <section className="box-container box-section">
      <div className="services-container grid">
        {services.map(({ id, icon, name, text }) => {
          return (
            <article key={id} className="service-container">
              <span className="service-icon">{icon}</span>
              <h4 className="service-desc">{name}</h4>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default ServicesAlt
