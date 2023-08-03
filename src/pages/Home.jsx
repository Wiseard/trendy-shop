import { useEffect } from 'react'
import {
  Hero,
  Featured,
  NewArrivals,
  Discover,
  Services,
  Newsletter,
} from '../components/index'

const Home = () => {
  useEffect(() => {
    document.title = 'Trendy - Home'
  }, [])
  return (
    <main>
      <Hero />
      <Featured />
      <NewArrivals />
      <Discover />
      <Services />
      <Newsletter />
    </main>
  )
}
export default Home
