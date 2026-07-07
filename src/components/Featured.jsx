import './Featured.css'

const drinks = [
  {
    name: 'Espresso',
    description:
      'Bold and intense single-origin shot with a rich crema finish.',
    price: '$3.50',
  },
  {
    name: 'Cappuccino',
    description:
      'Smooth espresso topped with velvety steamed milk and a light foam.',
    price: '$4.50',
  },
  {
    name: 'Caramel Latte',
    description:
      'House-made caramel sauce meets silky latte for a sweet balance.',
    price: '$5.00',
  },
]

function Featured() {
  return (
    <section className="featured" id="menu">
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
            <div className="featured__card-image" />
            <div className="featured__card-body">
              <h3 className="featured__card-name">{drink.name}</h3>
              <p className="featured__card-desc">{drink.description}</p>
              <div className="featured__card-footer">
                <span className="featured__card-price">{drink.price}</span>
                <button className="featured__card-btn">Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Featured
