import './Menu.css'
import espressoImg from '../assets/images/menu/espresso.png'
import cappuccinoImg from '../assets/images/menu/cappuccino.png'
import caramelLatteImg from '../assets/images/menu/caramel-latte.png'
import flatWhiteImg from '../assets/images/menu/flat-white.png'
import mochaImg from '../assets/images/menu/mocha.png'
import coldBrewImg from '../assets/images/menu/cold-brew.png'

export const drinks = [
  {
    name: 'Espresso',
    image: espressoImg,
    price: '$3.50',
    description: 'Rich and intense coffee with a bold flavor.',
  },
  {
    name: 'Cappuccino',
    image: cappuccinoImg,
    price: '$4.50',
    description: 'Smooth espresso with creamy milk foam.',
  },
  {
    name: 'Caramel Latte',
    image: caramelLatteImg,
    price: '$5.00',
    description: 'Perfect balance of espresso and steamed milk.',
  },
  {
    name: 'Flat White',
    image: flatWhiteImg,
    price: '$5.00',
    description: 'Velvety texture with a rich coffee taste.',
  },
  {
    name: 'Mocha',
    image: mochaImg,
    price: '$5.70',
    description: 'Chocolate meets premium espresso.',
  },
  {
    name: 'Cold Brew',
    image: coldBrewImg,
    price: '$4.90',
    description: 'Slow brewed for a naturally smooth finish.',
  },
]

function Menu({ selectedIndex, fading, onSelect }) {
  const selected = drinks[selectedIndex]

  return (
    <section className="menu" id="menu">
      <div className="menu__inner">
        <div className="menu__header">
          <h2 className="menu__title">Menu</h2>
          <p className="menu__subtitle">
            Handcrafted coffee made with carefully selected beans.
          </p>
        </div>

        <div className="menu__layout">
          <div className="menu__image-wrap">
            <div className={`menu__image-fade ${fading ? 'menu__image-fade--out' : ''}`}>
              <img
                key={selectedIndex}
                src={selected.image}
                alt={selected.name}
                className="menu__image"
              />
            </div>
          </div>

          <div className="menu__list">
            {drinks.map((drink, i) => (
              <button
                key={drink.name}
                className={`menu__item ${i === selectedIndex ? 'menu__item--active' : ''}`}
                onClick={() => onSelect(i)}
              >
                <div className="menu__item-top">
                  <span className="menu__item-name">{drink.name}</span>
                  <span className="menu__item-price">{drink.price}</span>
                </div>
                <div className="menu__item-desc-wrap">
                  <p className="menu__item-desc">
                    {i === selectedIndex ? selected.description : drink.description}
                  </p>
                </div>
              </button>
            ))}

            <a href="#contact" className="menu__btn">View Full Menu</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
