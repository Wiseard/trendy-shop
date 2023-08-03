import React, { useContext, useEffect, useState } from 'react'
import { useCartContext } from './cart_context'

const FormContext = React.createContext()

export const FormProvider = ({ children }) => {
  // IMPORT ORDERS

  // USER ADDRESS VARIABLES
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [postcode, setPostcode] = useState('')
  const [userAddress, setUserAddress] = useState('')
  const [email, setEmail] = useState('')

  // SHIPPING INPUTS VARIABLES
  const [shipping, setShipping] = useState('flat-rate')

  // FORM ADDRESS VARIABLES
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSelectEmpty, setIsSelectEmpty] = useState(false)

  // CONFIRM ORDER VARIABLES
  const [confirmOrder, setConfirmOrder] = useState(false)

  // FUNCTIONS
  function handleChange(e) {
    setShipping(e.target.value)
  }

  return (
    <FormContext.Provider
      value={{
        country,
        isSelectEmpty,
        city,
        postcode,
        userAddress,
        email,
        shipping,
        isFormOpen,
        confirmOrder,
        setCountry,
        setCity,
        setPostcode,
        setUserAddress,
        setShipping,
        setIsFormOpen,
        setEmail,
        handleChange,
        setConfirmOrder,
        setIsSelectEmpty,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
// make sure use
export const useFormContext = () => {
  return useContext(FormContext)
}
