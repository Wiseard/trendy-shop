import { BiExit } from 'react-icons/bi'
import links from '../../utils/constants/menuLinks'
import { useNavigationContext } from '../../context/navigation_context'
import { NavLink } from 'react-router-dom'
import './sidebarmenu.css'
import { useCartContext } from '../../context/cart_context'

const SidebarMenu = () => {
  const { openSidebarMenu, setOpenSidebarMenu } = useNavigationContext()
  const { orders } = useCartContext()
  return (
    <>
      <div
        className={`sidebar-menu-modal ${
          openSidebarMenu ? 'show-sidebar-menu-modal' : ''
        }`}
        onClick={() => setOpenSidebarMenu(false)}
      ></div>
      <aside
        className={`sidebar-menu ${openSidebarMenu ? 'show-sidebar-menu' : ''}`}
      >
        <div className="sidebar-menu-header">
          <h2>menu</h2>
          <button type="button" className="btn-close-sidebar-menu">
            <BiExit
              className="close-sidebar-menu-icon"
              onClick={() => setOpenSidebarMenu(false)}
            />
          </button>
        </div>
        <ul className="sidebar-menu-links">
          {links.map(({ id, name, url, icon }) => {
            return (
              <li
                style={{
                  display: `${
                    name === 'your orders' && !orders.length ? 'none' : ''
                  }`,
                }}
                className="sidebar-menu-link"
                key={id}
              >
                {icon}
                <NavLink to={url} onClick={() => setOpenSidebarMenu(false)}>
                  {name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}
export default SidebarMenu
