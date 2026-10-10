//internal import
import "./style.css";
import {
  Strawberry,
  FruitPie,
  CelebrationDessert,
  SweetGifting,
  FreshPastries,
  VanillaCake,
  CakeSilky,
  FudgeCake,
  Layer,
  SpringRolls,
  BlissCake,
  Peanut,
  BerriesCream,
  MiniCake,
  HeroCake,
} from "../../assets/images/index";

//gallery items
const galleryItems = [
  {
    name: "Strawberry Cakes",
    image: Strawberry,
  },
  {
    name: "Fruit Pies",
    image: FruitPie,
  },
  {
    name: "Celebration Desserts",
    image: CelebrationDessert,
  },
  {
    name: "Fruit Cake",
    image: HeroCake,
  },
  {
    name: "Sweet Gifting",
    image: SweetGifting,
  },
  {
    name: "Fresh Pastries",
    image: FreshPastries,
  },
  {
    name: "Vanilla Cake",
    image: VanillaCake,
  },
  {
    name: "Cake Silky",
    image: CakeSilky,
  },
  {
    name: "Fudge Cake",
    image: FudgeCake,
  },
  {
    name: "Layered Cake",
    image: Layer,
  },
  {
    name: "Spring Rolls",
    image: SpringRolls,
  },
  {
    name: "Bliss Cake",
    image: BlissCake,
  },
  {
    name: "Berries Cream Cake",
    image: BerriesCream,
  },
  {
    name: "Peanut Butter Pie",
    image: Peanut,
  },
  {
    name: "Mini Cake",
    image: MiniCake,
  },
];

//gallery
function Gallery() {
  return (
    <section id="gallery" className="gallery-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Gallery</span>
          <h2>Every detail is baked to impress.</h2>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={item}
              className={`gallery-item gallery-item-${index + 1}`}
            >
              {item.image && (
                <div>
                  <img src={item.image} alt={item.image} />
                </div>
              )}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
