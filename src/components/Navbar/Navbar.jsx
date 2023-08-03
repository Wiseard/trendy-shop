import logo from '../../assets/logo.svg'
import links from '../../utils/constants/menuLinks'
import { HiSquares2X2 } from 'react-icons/hi2'
import { AiOutlineMenu } from 'react-icons/ai'
import { useNavigationContext } from '../../context/navigation_context'
import { useCartContext } from '../../context/cart_context'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const { navBg, setOpenSidebar, setOpenSidebarMenu } = useNavigationContext()
  const { orders, total_items } = useCartContext()

  return (
    <nav className={navBg ? 'nav-bg' : ''}>
      {/* LOGO */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      {/* RESPONSIVE MENU ICON */}
      <button
        type="button"
        className="btn-menu"
        onClick={() => setOpenSidebarMenu(true)}
      >
        <AiOutlineMenu className="btn-menu-icon" />
      </button>
      {/* LINKS */}
      <ul className="menu-links">
        {links.map(({ id, name, url }) => {
          return (
            <li
              className="link"
              style={{
                display: `${
                  name === 'your orders' && !orders.length ? 'none' : ''
                }`,
              }}
              key={id}
            >
              <NavLink to={url}>{name}</NavLink>
            </li>
          )
        })}
      </ul>
      {/* CART ICON */}
      <button
        onClick={() => setOpenSidebar(true)}
        type="button"
        className="cart-menu"
      >
        <HiSquares2X2 className="cart-menu-icon" />
        {total_items > 0 && <span className="item-number">{total_items}</span>}
      </button>
    </nav>
  )
}
export default Navbar
