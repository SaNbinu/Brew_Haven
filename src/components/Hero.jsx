import './Hero.css'
import heroImg from '../assets/images/hero.jpg'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <span className="hero__badge">Since 2015</span>
        <h1 className="hero__title">
          Crafted Coffee,<br />
          Made With Passion
        </h1>
        <p className="hero__description">
          Every cup tells a story of carefully sourced beans and
          uncompromising craftsmanship.
        </p>
        <div className="hero__buttons">
          <button className="hero__btn hero__btn--primary">Order Coffee</button>
          <a href="#menu" className="hero__btn hero__btn--secondary">View Menu</a>
        </div>
        <div className="hero__trust">
          <div className="hero__trust-item">
            <span className="hero__trust-value">★ 4.9</span>
            <span className="hero__trust-label">Rating</span>
          </div>
          <div className="hero__trust-divider" />
          <div className="hero__trust-item">
            <span className="hero__trust-value">10K+</span>
            <span className="hero__trust-label">Served</span>
          </div>
          <div className="hero__trust-divider" />
          <div className="hero__trust-item">
            <span className="hero__trust-value">Fresh</span>
            <span className="hero__trust-label">Roast Daily</span>
          </div>
        </div>
      </div>

      <div className="hero__image">
        <img
          src={heroImg}
          alt="A freshly brewed cup of coffee"
          className="hero__image-img"
        />
      </div>
    </section>
  )
}

export default Hero
