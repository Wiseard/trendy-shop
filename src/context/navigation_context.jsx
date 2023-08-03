import React, { useContext, useEffect, useState } from 'react'

const NavigationContext = React.createContext()

export const NavigationProvider = ({ children }) => {
  const [navBg, setNavBg] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false)

  function changeNavBg() {
    window.scrollY >= 20 ? setNavBg(true) : setNavBg(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg)
    return () => {
      window.removeEventListener('scroll', changeNavBg)
    }
  }, [])

  useEffect(() => {
    if (openSidebar || openSidebarMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [openSidebar, openSidebarMenu])

  return (
    <NavigationContext.Provider
      value={{
        navBg,
        setNavBg,
        openSidebar,
        setOpenSidebar,
        openSidebarMenu,
        setOpenSidebarMenu,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
// make sure use
export const useNavigationContext = () => {
  return useContext(NavigationContext)
}
