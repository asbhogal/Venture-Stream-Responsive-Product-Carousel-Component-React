import products from "../constants/productsData";

const Carousel = () => {
  console.log(products);
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="carousel-card">
          <img
            className="product-image"
            src={product.imgSrc}
            alt={product.imgAlt}
          />
          <div className="product-title">{product.name}</div>
          <img
            className="product-arrow"
            src="./icons/Arrow.svg"
            alt="Arrow icon"
          />
        </div>
      ))}
    </>
  );
};

export default Carousel;
