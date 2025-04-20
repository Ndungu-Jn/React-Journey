import "./App.css";
import FunctionalComponent from "./components/functional-component";
import ProductList from "./components/products";

const dummyProductData = ["Product1", "Product2", "Product3"];

function App() {
  return (
    <div>
      <h1>React Js basics</h1>
      {/* <FunctionalComponent /> */}
      <ProductList
        dummyProductData={dummyProductData}
        name="Ian"
        city="Kanairo"
      />
    </div>
  );
}

export default App;
