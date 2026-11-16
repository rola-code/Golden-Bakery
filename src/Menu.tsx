import croissant from './assets/Croissant.webp'
import cinnamonRoll from './assets/Cinnamon Roll.webp'
import cookies from './assets/Cookies.webp'
import donuts from './assets/Donuts.webp'
import fruitTart from './assets/Fruit Tart.webp'
import sourdough from './assets/Sourdough Bread.webp'

const products = [
  {
    name: 'Butter Croissant',
    description: 'Flaky, golden pastry with a light and buttery texture.',
    price: '12 SAR',
    image: croissant,
  },
  {
    name: 'Cinnamon Roll',
    description: 'Soft, freshly baked roll with a sweet cinnamon filling.',
    price: '15 SAR',
    image: cinnamonRoll,
  },
  {
    name: 'Chocolate Cookies',
    description: 'Delicious cookies filled with rich chocolate flavor.',
    price: '8 SAR',
    image: cookies,
  },
  {
    name: 'Classic Donuts',
    description: 'Soft and fluffy donuts with a sweet, smooth glaze.',
    price: '10 SAR',
    image: donuts,
  },
  {
    name: 'Fresh Fruit Tart',
    description: 'A crisp pastry base topped with creamy filling and fresh fruits.',
    price: '18 SAR',
    image: fruitTart,
  },
  {
    name: 'Sourdough Bread',
    description: 'Rustic artisan bread with a crispy crust and soft center.',
    price: '20 SAR',
    image: sourdough,
  },
]

function Menu() {
  return (
    <section className="menu" id="menu">

      <div className="menu-heading">
                          <div className="divider" />

        <span>OUR MENU</span>
        <h2>The Art Of Daily Baking</h2>
        <p>Discover our freshly baked favorites, made with love every day.</p>
      </div>

      <div className="menu-grid">
        {products.map((product) => (
          <div className="menu-card" key={product.name}>

            <div className="menu-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="menu-card-content">
              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <div className="menu-card-bottom">
                <span className="menu-price">{product.price}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Menu