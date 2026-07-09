import './About.css'
import aboutImg from '../assets/images/about.jpg'

function About() {
  return (
    <section className="about" id="about">
      <div className="about__image">
        <img
          src={aboutImg}
          alt="Interior of Brew Haven coffee shop"
          className="about__image-img"
        />
      </div>

      <div className="about__content">
        <span className="about__label">About Brew Haven</span>
        <h2 className="about__title">
          Where Every Bean<br />
          Tells a Story
        </h2>
        <p className="about__description">
          Nestled in the heart of the city, Brew Haven is more than a coffee
          shop — it is a sanctuary for those who appreciate the art of a
          perfectly brewed cup. We source our beans directly from small farms
          across Ethiopia, Colombia, and Guatemala.
        </p>
        <p className="about__description">
          Every batch is roasted in-house to highlight its unique character,
          ensuring that each visit brings a new discovery and a familiar comfort.
        </p>
        <a href="#menu" className="about__btn">Learn More</a>
      </div>
    </section>
  )
}

export default About
