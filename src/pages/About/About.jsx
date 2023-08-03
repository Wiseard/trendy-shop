import './about.css'
import workshop from '../../assets/workshop.jpg'
import { PageHero } from '../../components'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    document.title = 'Trendy - About us'
  }, [])

  return (
    <section className="box-container box-section about-container">
      <PageHero title="about" />
      <div className="about grid">
        <img src={workshop} alt="workshop" className="about-image" />
        <article className="about-story">
          <h2>our story</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            <br />
            <br />
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
