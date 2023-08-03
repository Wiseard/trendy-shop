import axios from 'axios'
import { useEffect, useState } from 'react'

export function formatPrice(number) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number)
}

export function getUniqueValues(data, type) {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}

const API_KEY = 'bdc_c8b427e2181646eb8e746574d4bfa3b7'

export function useGetLocation() {
  const [location, setLocation] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [postcode, setPostcode] = useState('')
  const [address, setAddress] = useState('')

  async function fetchLocationData() {
    try {
      const { data } = await axios.get(
        `https://api-bdc.net/data/ip-geolocation?key=${API_KEY}`
      )
      setLocation(data)
      setCountry(data.country.name)
      setCity(data.location.city)
      setPostcode(data.location.postcode)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchLocationData()
  }, [])

  return {
    location,
    country,
    setCountry,
    city,
    setCity,
    postcode,
    setPostcode,
    address,
    setAddress,
  }
}

export function getOrderDate() {
  const day =
    new Date().getDate() < 10
      ? `0${new Date().getDate()}`
      : new Date().getDate()
  const realMonth = new Date().getMonth() + 1
  const month = realMonth < 10 ? `0${realMonth}` : realMonth
  const year = new Date().getFullYear()

  return `${day}/${month}/${year}`
}
