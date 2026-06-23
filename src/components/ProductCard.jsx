function ProductCard({ image, title, price, category }) {
  return (
    <>
      <div className="card">
        <img src={image} alt={title} />
        <div className="card-content">
          <h3>{title}</h3>
          <p className="price">{price.toLocaleString()}원</p>
          <span className="category">{category}</span>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
