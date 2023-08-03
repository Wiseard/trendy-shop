import socials from '../../utils/constants/social'
import './footer.css'

const Footer = () => {
  return (
    <section className="grid footer-container">
      <div className="footer-copyright">
        <h4 className="copyright-title">trendy</h4>
        <p>&copy;trendy. All Right Reserved.</p>
        <ul className="socials">
          {socials.map(({ id, icon }) => {
            return (
              <li className="social-link" key={id}>
                <a href="/">{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="footer-locate">
        <h4>locate us</h4>
        <p>28 Bartholomeo street, NY, NY</p>
        <p>phone: 0035 265 244 58</p>
      </div>
      <div className="footer-support">
        <h4>support</h4>
        <p>checkout</p>
        <p>help & support</p>
      </div>
    </section>
  )
}
export default Footer
