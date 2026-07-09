import { useState } from 'react'
import './Menu.css'
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
    price: '$3.50',
    description: 'Rich and intense coffee with a bold flavor.',
  },
  {
    name: 'Cappuccino',
    image: cappuccinoImg,
    price: '$4.80',
    description: 'Smooth espresso with creamy milk foam.',
  },
  {
    name: 'Latte',
    image: latteImg,
    price: '$5.20',
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

function Menu() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [fading, setFading] = useState(false)

  const handleSelect = (index) => {
    if (index === selectedIndex) return
    setFading(true)
    setTimeout(() => {
      setSelectedIndex(index)
      setFading(false)
    }, 150)
  }

  const selected = drinks[selectedIndex]

  return (
    <section className="menu" id="menu-section">
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
                onClick={() => handleSelect(i)}
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

            <button className="menu__btn">View Full Menu</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
