import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  LOCATION,
  UPDATE_ADDRESS,
  RESET_ORDERS,
  CREATE_ORDER,
} from '../actions'

import { getOrderDate } from '../utils/helpers'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, item, image, size } = action.payload
    if (id && amount && item && image && item.slug) {
      const tempItem = state.cart.find((i) => i.id === id + size)

      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + size) {
            let newAmount = cartItem.amount + amount
            return { ...cartItem, amount: newAmount }
          } else {
            return cartItem
          }
        })

        return { ...state, cart: tempCart }
      } else {
        const newItem = {
          id: id + size,
          name: item.name,
          amount: amount,
          image: image,
          price: item.price,
          size: size,
          slug: item.slug,
          category: item.category,
        }
        return { ...state, cart: [...state.cart, newItem] }
      }
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart: tempCart }
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload
    const tempCart = state.cart
      .map((item) => {
        if (item.id === id) {
          if (value === 'inc') {
            let newAmount = item.amount + 1
            return { ...item, amount: newAmount }
          }
          if (value === 'dec') {
            let newAmount = item.amount - 1
            // if (newAmount < 1) {
            //   newAmount = 1
            // }
            return { ...item, amount: newAmount }
          }
        }
        return item
      })
      .filter((item) => item.amount >= 1)

    return { ...state, cart: tempCart }
  }

  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_amount } = state.cart.reduce(
      (total, item) => {
        const { amount, price } = item
        if (price) {
          total.total_items += amount
          total.total_amount += price * amount
        }
        return total
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    )
    return { ...state, total_items, total_amount }
  }

  if (action.type === LOCATION) {
    const { data } = action.payload
    return {
      ...state,
      user_country: data.country.name,
      user_city: data.location.city,
      user_postcode: data.location.postcode,
    }
  }

  if (action.type === UPDATE_ADDRESS) {
    const { value } = action.payload
    return {
      ...state,
      user_address: value,
    }
  }

  if (action.type === RESET_ORDERS) {
    return {
      ...state,
      orders: [],
    }
  }

  if (action.type === CREATE_ORDER) {
    const {
      country,
      city,
      address,
      postcode,
      shipping_method,
      shipping_fee,
      delivery_time,
      email,
    } = action.payload

    const newCart = state.cart

    const newOrder = {
      order_num: !state.orders.length ? 1 : state.orders.length + 1,
      order_date: getOrderDate(),
      order_total_items: state.total_items,
      shipping_method,
      shipping_fee,
      delivery_time,
      subtotal: state.total_amount,
    }

    const userInfo = {
      user_country: country,
      user_city: city,
      user_address: address,
      user_postcode: postcode,
      user_email: email,
    }

    return {
      ...state,
      cart: [],
      orders: [
        ...state.orders,
        {
          order_details: newOrder,
          order_user: userInfo,
          order_articles: newCart,
        },
      ],
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
