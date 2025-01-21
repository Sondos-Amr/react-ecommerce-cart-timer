export default function Home() {
  return (
    <section className="home">
      <div className="container container-home">
        <Slider />
      </div>
    </section>
  );
}

const sliderContent = [
  {
    img: [
      "/assets/cards/card-image1.jpg",
      "/assets/cards/card-image2.jpg",
      "/assets/cards/card-image3.jpg",
    ],
    subTitle: "Top Deals This Month",
    topTitle: "Discover Our Exclusive Clothing Offers",
  },
  {
    img: [
      "/assets/cards/card-image1.jpg",
      "/assets/cards/card-image2.jpg",
      "/assets/cards/card-image3.jpg",
    ],
    subTitle: "Amazing Discounts on Electronics",
    topTitle: "Best Smartphone Deals",
  },
  {
    img: [
      "/assets/cards/card-image1.jpg",
      "/assets/cards/card-image2.jpg",
      "/assets/cards/card-image3.jpg",
    ],
    subTitle: "Special Offers on Beauty Products",
    topTitle: "Discover the Latest Cosmetics at Great Prices",
  },
];

function Slider() {
  return (
    <div className="slider">
      <div className="slider-content">
        {sliderContent.map((slide, index) => (
          <div key={index} className="content">
            <h1>{slide.topTitle}</h1>
            <h2>{slide.subTitle}</h2>
            <div className="images">
              {slide.img.map((img, imgIndex) => (
                <img src={img} alt={imgIndex} key={imgIndex} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
