import axios from 'axios'

const authFetch = axios.create({
  baseURL: `https://${import.meta.env.VITE_PUBLIC_SANITY_TOKEN}.api.sanity.io`,
  headers: {
    Accept: 'application/json',
  },
})

export default authFetch
