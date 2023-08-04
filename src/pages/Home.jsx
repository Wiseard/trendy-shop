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
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className="home-container">
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
