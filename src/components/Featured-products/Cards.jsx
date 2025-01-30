import TopTitle from "./topTitle";
export default function Cards({ topTitle, dataCards }) {
  if (!dataCards) return <div>No products available</div>;
  return (
    <div className="cards">
      <TopTitle topTitle={topTitle} />
      <CardsContainer dataCards={dataCards} />
    </div>
  );
}
function CardsContainer({ dataCards }) {
  return (
    <div className="cards-container">
      {dataCards.map((card) => (
        <Card
          img={card.img}
          cardTitle={card.cardTitle}
          cardPrice={card.cardPrice}
        />
      ))}
    </div>
  );
}
function Card({ img, cardTitle, cardPrice }) {
  return (
    <div className="card">
      <li className="card-container">
        <div className="card-img">
          <div className="img-contant">
            <img src={img} alt="soon" />
          </div>
          <div className="icons-featured">
            <button>
              <i class="fa-solid fa-bag-shopping"></i>
            </button>
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
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
