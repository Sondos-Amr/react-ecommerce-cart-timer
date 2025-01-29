import TopTitle from "./topTitle";
export default function Cards() {
  return (
    <div className="cards">
      <TopTitle topTitle="Featured Products" />
      <CardsContainer />
    </div>
  );
}
function CardsContainer() {
  return (
    <div className="cards-container">
      {dataCards.map((card, index) => (
        <Card
          key={index}
          img={card.img}
          cardTitle={card.cardTitle}
          cardPrice={card.cardPrice}
        />
      ))}
    </div>
  );
}
function Card({ key, img, cardTitle, cardPrice }) {
  return (
    <div className="card">
      <li key={key} className="card-container">
        <div className="card-img">
          <div className="img-contant">
            <img src={img} alt="soon" />
          </div>
          <div className="icons-featured">
            <li>
              <a href="#">
                <i class="fa-light fa-bag-shopping"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
          </div>
        </div>
        <div className="card-detail">
          <div className="card-title">{cardTitle}</div>
          <div className="card-price">{cardPrice}</div>
        </div>
      </li>
    </div>
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
