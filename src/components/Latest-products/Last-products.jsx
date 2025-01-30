import Cards from "../Featured-products/Cards";

export default function LastProducts() {
  return (
    <section className="last-products-container">
      <div className="container">
        <Cards topTitle="Latest Products" dataCards={dataCards} />
      </div>
    </section>
  );
}
const dataCards = [
  {
    img: "/assets/last-products/card-item6.jpg",
    cardTitle: "Casual Shoes",
    cardPrice: "$49",
  },
  {
    img: "/assets/last-products/card-item7.jpg",
    cardTitle: "Backpack",
    cardPrice: "$89",
  },
  {
    img: "/assets/last-products/card-item8.jpg",
    cardTitle: "Casual Shoes",
    cardPrice: "$49",
  },
  {
    img: "/assets/last-products/card-item9.jpg",
    cardTitle: "Backpack",
    cardPrice: "$89",
  },
  {
    img: "/assets/last-products/card-item10.jpg",
    cardTitle: "Casual Shoes",
    cardPrice: "$49",
  },
];
