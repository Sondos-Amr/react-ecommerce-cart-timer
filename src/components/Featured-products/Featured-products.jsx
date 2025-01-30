import Cards from "./Cards";
export default function FeaturedProducts() {
  return (
    <section className="featured">
      <div className="container featured-container">
        <Cards dataCards={dataCards} />
      </div>
    </section>
  );
}

const dataCards = [
  {
    img: "/assets/featured-products/card-item1.jpg",
    cardTitle: "Running shoes for men",
    cardPrice: "$99",
  },
  {
    img: "/assets/featured-products/card-item2.jpg",
    cardTitle: "Running shoes for men",
    cardPrice: "$99",
  },
  {
    img: "/assets/featured-products/card-item3.jpg",
    cardTitle: "Running shoes for men",
    cardPrice: "$99",
  },
  {
    img: "/assets/featured-products/card-item4.jpg",
    cardTitle: "Running shoes for men",
    cardPrice: "$99",
  },
  {
    img: "/assets/featured-products/card-item5.jpg",
    cardTitle: "Running shoes for men",
    cardPrice: "$99",
  },
];
