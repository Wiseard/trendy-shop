import React, { useEffect, useContext, useReducer, useState } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  LOCATION,
  UPDATE_ADDRESS,
  RESET_ORDERS,
  CREATE_ORDER,
} from '../actions'
import axios from 'axios'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}
const getOrderStorage = () => {
  let orders = localStorage.getItem('orders')
  if (orders) {
    return JSON.parse(localStorage.getItem('orders'))
  } else {
    return []
  }
}

const API_KEY = 'bdc_c8b427e2181646eb8e746574d4bfa3b7'

const initialState = {
  cart: getLocalStorage(),
  orders: getOrderStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 10,
  local_pickup: 7,
  user_country: '',
  user_city: '',
  user_address: '',
  user_postcode: '',
  user_email: '',
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // add to cart
  const addToCart = (id, amount, item, image, size) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, item, image, size } })
  }

  // remove item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }

  // toggle amount
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } })
  }

  // clear cart
  const clearCart = (id, value) => {
    dispatch({ type: CLEAR_CART })
  }

  // get location
  async function userLocation() {
    try {
      const { data } = await axios.get(
        `https://api-bdc.net/data/ip-geolocation?key=${API_KEY}`
      )
      dispatch({ type: LOCATION, payload: { data } })
    } catch (error) {
      console.log(error.message)
    }
  }

  // update address
  const updateAddress = (value) => {
    dispatch({ type: UPDATE_ADDRESS, payload: { value } })
  }

  // create order
  const createOrder = (
    country,
    city,
    address,
    postcode,
    email,
    shipping_method,
    shipping_fee,
    delivery_time
  ) => {
    dispatch({
      type: CREATE_ORDER,
      payload: {
        country,
        city,
        address,
        postcode,
        email,
        shipping_method,
        shipping_fee,
        delivery_time,
      },
    })
  }

  // reset orders
  const resetOrders = () => {
    dispatch({ type: RESET_ORDERS })
  }

  useEffect(() => {
    userLocation()
  }, [])

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(state.orders))
  }, [state.orders])

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        toggleAmount,
        clearCart,
        updateAddress,
        resetOrders,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
