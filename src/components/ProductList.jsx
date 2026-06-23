import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <>
      <div className="list">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </>
  );
}
export default ProductList;
