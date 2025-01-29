export default function CollectionProducts() {
  return (
    <section className="collection-products">
      <div className="container container-collection">
        <Collection />
      </div>
    </section>
  );
}

function Collection() {
  return (
    <div className="colllection-img">
      {collection.map((img, index) => (
        <CollectionItem key={index} img={img.img} />
      ))}
    </div>
  );
}
function CollectionItem({ img, key }) {
  return (
    <div className="content-img">
      <img src={img} alt={key} />
    </div>
  );
}
const collection = [
  {
    img: "/assets/collection/collection-item1.jpg",
  },
  {
    img: "/assets/collection/collection-item2.jpg",
  },
];
