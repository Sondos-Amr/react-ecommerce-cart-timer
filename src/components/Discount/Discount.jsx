export default function Discount() {
  return (
    <section className="discount-session">
      <div className="container container-discount">
        <div className="contant-discount">
          <LeftDiscount />
          <RightDiscount />
        </div>
      </div>
    </section>
  );
}

function LeftDiscount() {
  return (
    <div className="left-discount-section">
      <div className="topTitle-discount">10% OFF Discount Coupons</div>
      <div className="subTitle-discount">
        Subscribe us to get 10% OFF on all the purchases
      </div>
    </div>
  );
}

function RightDiscount() {
  return (
    <div className="right-discount-section">
      <div className="topTitle-discount">
        <small>10</small>
        <strong>% OFF</strong>
      </div>
      <div className="btn-container">
        <button>Email me</button>
      </div>
    </div>
  );
}
