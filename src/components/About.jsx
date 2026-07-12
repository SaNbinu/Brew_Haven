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
          Nestled in the heart of the city, Brew Haven is a sanctuary for those
          who appreciate the art of a perfectly brewed cup. We source our beans
          directly from small farms across Ethiopia, Colombia, and Guatemala,
          then roast each batch in-house to bring out its unique character.
        </p>
        <div className="about__divider" />
        <div className="about__benefits">
          <div className="about__benefit">
            <span className="about__benefit-icon">☕</span>
            <div>
              <span className="about__benefit-title">Specialty Beans</span>
              <p className="about__benefit-desc">Freshly sourced from trusted farms.</p>
            </div>
          </div>
          <div className="about__benefit">
            <span className="about__benefit-icon">🌍</span>
            <div>
              <span className="about__benefit-title">Ethically Sourced</span>
              <p className="about__benefit-desc">Supporting sustainable coffee growers.</p>
            </div>
          </div>
          <div className="about__benefit">
            <span className="about__benefit-icon">🔥</span>
            <div>
              <span className="about__benefit-title">Roasted Daily</span>
              <p className="about__benefit-desc">Crafted in small batches for perfect flavour.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
