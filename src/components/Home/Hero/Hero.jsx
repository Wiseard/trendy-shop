import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './hero.css'

const Hero = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1 className="main-title">Making someone feel pretty is an art</h1>
        <Link to="/shop" className="btn-hero">
          <span>shop collection</span>
          <BsArrowRightShort className="arrow-right-icon" />
        </Link>
      </div>
    </div>
  )
}
export default Hero
