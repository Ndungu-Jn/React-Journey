import ProductItem from "./components/product-item";

const dummyProductData = ["Product1", "Product2", "Product3"];

function ProductList() {
  return (
    <div>
      <h3> ECommerce Project</h3>
      {/* <ProductItem /> */}

      <ul>
        {dummyProductData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
