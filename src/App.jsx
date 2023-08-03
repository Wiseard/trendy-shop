import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer, SidebarCart, SidebarMenu } from './components/index'
import {
  Home,
  ProductsLayout,
  SingleProduct,
  Cart,
  Checkout,
  PrivateRoute,
  About,
} from './pages/index'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <SidebarCart />
      <SidebarMenu />
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="shop" element={<ProductsLayout />}></Route>
        <Route path="shop/:id" element={<SingleProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App
