//internal imports
import "./style.css";
import FudgeCake from "../../logos/Fudge-Cake.jpg";
import ApplePie from "../../logos/ClassicApple.jpg";
import Strawberry from "../../logos/Strawberry.jpg";
import Lemon from "../../logos/Lemon.png";
import FruitPie from "../../logos/FruitPie.png";
import SpringRolls from "../../logos/SpringRolls.jpg";
import BerriesCream from "../../logos/BerriesCreamCake.jpg";
import VanillaCake from "../../logos/Vanilla.jpg";
import Layer from "../../logos/layer.jpg";
import Peanut from "../../logos/peanut.jpg";

//menu items data
const menuItems = [
  {
    name: "Chocolate Fudge Cake",
    price: "$36.56",
    description: "Rich cocoa sponge with dark ganache.",
    image: FudgeCake,
  },
  {
    name: "Classic Apple Pie",
    price: "$28.87",
    description: "Cinnamon-spiced apples in a flaky crust.",
    image: ApplePie,
  },
  {
    name: "Strawberry Cheesecake",
    price: "$32.99",
    description: "Light cream cheese and berry finish.",
    image: Strawberry,
  },
  {
    name: "Lemon Tart",
    price: "$26.69",
    description: "Bright citrus filling with delicate pastry.",
    image: Lemon,
  },
  {
    name: "Fruit Pie",
    price: "$27.78",
    description: "Fresh seasonal fruits in a buttery crust.",
    image: FruitPie,
  },
  {
    name: "Spring Rolls",
    price: "$19.99",
    description: " Crispy, delicious and savory flavors rolls.",
    image: SpringRolls,
  },
  {
    name: "Layered Cake",
    price: "$35.92",
    description: "Delicious layers of moist cake with rich frosting.",
    image: Layer,
  },
  {
    name: "Peanut Butter Pie",
    price: "$24.78",
    description: "Rich peanut butter filling in a crispy crust.",
    image: Peanut,
  },
  {
    name: "Berries Cream Cake",
    price: "$31.45",
    description:
      "A delightful combination of fresh berries and creamy frosting.",
    image: BerriesCream,
  },
  {
    name: "Vanilla Bean Cake",
    price: "$29.99",
    description: "Classic vanilla cake with real bean seeds.",
    image: VanillaCake,
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
              <div className="menu-card-top">
                <h3>{item.name}</h3>
                <span>{item.price}</span>
              </div>
              <p>{item.description}</p>
              {item.image && (
                <div className="menu-card-image">
                  <img src={item.image} alt={item.name} />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
