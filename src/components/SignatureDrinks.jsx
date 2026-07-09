import './SignatureDrinks.css'
import espressoImg from '../assets/images/espresso.jpg'
import cappuccinoImg from '../assets/images/cappuccino.jpg'
import latteImg from '../assets/images/latte.jpg'
import flatWhiteImg from '../assets/images/flat-white.jpg'
import mochaImg from '../assets/images/mocha.jpg'
import coldBrewImg from '../assets/images/cold-brew.jpg'

const drinks = [
  {
    name: 'Espresso',
    image: espressoImg,
    description: 'Rich and intense coffee with a bold flavor.',
    price: '$3.50',
  },
  {
    name: 'Cappuccino',
    image: cappuccinoImg,
    description: 'Smooth espresso with creamy milk foam.',
    price: '$4.80',
  },
  {
    name: 'Latte',
    image: latteImg,
    description: 'Perfect balance of espresso and steamed milk.',
    price: '$5.20',
  },
  {
    name: 'Flat White',
    image: flatWhiteImg,
    description: 'Velvety texture with a rich coffee taste.',
    price: '$5.00',
  },
  {
    name: 'Mocha',
    image: mochaImg,
    description: 'Chocolate meets premium espresso.',
    price: '$5.70',
  },
  {
    name: 'Cold Brew',
    image: coldBrewImg,
    description: 'Slow brewed for a naturally smooth finish.',
    price: '$4.90',
  },
]

function SignatureDrinks() {
  return (
    <section className="signature">
      <div className="signature__header">
        <h2 className="signature__title">Our Signature Drinks</h2>
        <p className="signature__subtitle">
          Crafted with carefully selected beans and fresh ingredients.
        </p>
      </div>

      <div className="signature__grid">
        {drinks.map((drink) => (
          <div key={drink.name} className="signature__card">
            <img
              src={drink.image}
              alt={drink.name}
              className="signature__card-image"
            />
            <h3 className="signature__card-name">{drink.name}</h3>
            <p className="signature__card-desc">{drink.description}</p>
            <div className="signature__card-footer">
              <span className="signature__card-price">{drink.price}</span>
              <button className="signature__card-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SignatureDrinks
