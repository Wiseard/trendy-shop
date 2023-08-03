import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App'
import { NavigationProvider } from './context/navigation_context'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { FormProvider } from './context/form_context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigationProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <FormProvider>
              <App />
            </FormProvider>
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </NavigationProvider>
  </React.StrictMode>
)
