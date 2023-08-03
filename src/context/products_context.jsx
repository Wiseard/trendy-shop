import React, { useContext, useEffect, useReducer, useState } from 'react'
import authFetch from '../axios/custom'
import reducer from '../reducers/products_reducer'
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from '../actions'

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
}
// filter : *[_type == "product" && featured]
// export const featuredUrl = `/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22product%22+%26%26+featured%5D`
export const featuredUrl = `/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22product%22%5D`

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const { data } = await authFetch.get(url)
      const { result } = data
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: result })
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR })
    }
  }

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const { data } = await authFetch.get(url)
      const { result } = data
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: result })
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }

  useEffect(() => {
    fetchProducts(featuredUrl)
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
