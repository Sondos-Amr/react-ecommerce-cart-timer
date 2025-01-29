import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Discount from "./components/Discount/Discount";
import FeaturedProducts from "./components/Featured-products/Featured-products";
import CollectionProducts from "./components/Collection-products/CollectionProducts";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Discount />
      <FeaturedProducts />
      <CollectionProducts />
    </div>
  );
}

export default App;
