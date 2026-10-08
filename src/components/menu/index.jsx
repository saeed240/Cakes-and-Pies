//internal imports
import "./style.css";
import {
  FudgeCake,
  ApplePie,
  Strawberry,
  Lemon,
  FruitPie,
  SpringRolls,
  Layer,
  Peanut,
  BerriesCream,
  VanillaCake,
  BlissCake,
  FreshPastries,
} from "../../assets/images/index.js";

//menu items data
const menuItems = [
  {
    name: "Chocolate Fudge Cake",
    price: "$36.56",
    description: "Rich cocoa sponge with dark ganache.",
    image: FudgeCake,
    order: "Order",
  },
  {
    name: "Classic Apple Pie",
    price: "$28.87",
    description: "Cinnamon-spiced apples in a flaky crust.",
    image: ApplePie,
    order: "Order",
  },
  {
    name: "Strawberry Cheesecake",
    price: "$32.99",
    description: "Light cream cheese and berry finish.",
    image: Strawberry,
    order: "Order",
  },
  {
    name: "Lemon Tart",
    price: "$26.69",
    description: "Bright citrus filling with delicate pastry.",
    image: Lemon,
    order: "Order",
  },
  {
    name: "Fruit Pie",
    price: "$27.78",
    description: "Fresh seasonal fruits in a buttery crust.",
    image: FruitPie,
    order: "Order",
  },
  {
    name: "Spring Rolls",
    price: "$19.99",
    description: " Crispy, delicious and savory flavors rolls.",
    image: SpringRolls,
    order: "Order",
  },
  {
    name: "Layered Cake",
    price: "$35.92",
    description: "Delicious layers of moist cake with rich frosting.",
    image: Layer,
    order: "Order",
  },
  {
    name: "Peanut Butter Pie",
    price: "$24.78",
    description: "Rich peanut butter filling in a crispy crust.",
    image: Peanut,
    order: "Order",
  },
  {
    name: "Berries Cream Cake",
    price: "$31.45",
    description:
      "A delightful combination of fresh berries and creamy frosting.",
    image: BerriesCream,
    order: "Order",
  },
  {
    name: "Vanilla Bean Cake",
    price: "$29.99",
    description: "Classic vanilla cake with real bean seeds.",
    image: VanillaCake,
    order: "Order",
  },
  {
    name: "Bliss Cake",
    price: "$24.99",
    description: "Light, moist cake with a sweet, creamy finish.",
    image: BlissCake,
    order: "Order",
  },
  {
    name: "Fresh Patries",
    price: "$17.99",
    description: "Delicate pastries with a fresh, buttery taste.",
    image: FreshPastries,
    order: "Order",
  },
];

//menu
function Menu() {
  return (
    <section id="menu" className="menu-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our menu</span>
          <h2>Favorites from the bakery.</h2>
        </div>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <article key={item.name} className="menu-card">
              <span className="menu-card-price">{item.price}</span>

              {item.image && (
                <div className="menu-card-image">
                  <img src={item.image} alt={item.name} />
                </div>
              )}

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <a href="#contact" className="order-btn">
                {item.order}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
