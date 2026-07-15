import './Featured.css'
import espressoImg from '../assets/images/signature-coffee/espresso.png'
import cappuccinoImg from '../assets/images/signature-coffee/cappuccino.png'
import caramelLatteImg from '../assets/images/signature-coffee/caramel-latte.png'

const drinks = [
  {
    name: 'Espresso',
    image: espressoImg,
    description:
      'Bold and intense single-origin shot with a rich crema finish.',
    price: '$3.50',
    menuIndex: 0,
  },
  {
    name: 'Cappuccino',
    image: cappuccinoImg,
    description:
      'Smooth espresso topped with velvety steamed milk and a light foam.',
    price: '$4.50',
    menuIndex: 1,
  },
  {
    name: 'Caramel Latte',
    image: caramelLatteImg,
    description:
      'House-made caramel sauce meets silky latte for a sweet balance.',
    price: '$5.00',
    menuIndex: 2,
  },
]

function Featured({ onSelect }) {
  return (
    <section className="featured">
      <div className="featured__header">
        <h2 className="featured__title">Our Signature Coffee</h2>
        <p className="featured__subtitle">
          Every batch is hand-roasted from ethically sourced beans to capture
          the purest flavor in each cup.
        </p>
      </div>

      <div className="featured__grid">
        {drinks.map((drink) => (
          <div key={drink.name} className="featured__card">
            <img
              src={drink.image}
              alt={drink.name}
              className="featured__card-image"
            />
            <div className="featured__card-body">
              <h3 className="featured__card-name">{drink.name}</h3>
              <p className="featured__card-desc">{drink.description}</p>
              <div className="featured__card-footer">
                <span className="featured__card-price">{drink.price}</span>
                <a href="#menu" className="featured__card-btn" onClick={() => onSelect(drink.menuIndex)}>Order</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Featured
