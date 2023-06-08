import products from "../constants/productsData";

const Carousel = () => {
  console.log(products);
  return (
    <>
      <div className="carousel group flex gap-[20px] carousel pl-[37px] md:pl-[142px] py-[21px] overflow-x-scroll overflow-y-hidden">
        {products.map((product) => (
          <a
            key={product.id}
            className="carousel-card flex flex-col gap-[20px] hover:scale-105 transition"
            href="#"
            target="_blank"
          >
            <img
              className="product-image max-w-none w-[287px] sm:w-[396px]"
              src={product.imgSrc}
              alt={product.imgAlt}
            />
            <div className="product-title font-medium text-lg">
              {product.name}
            </div>
            <div className="product-arrow-container flex justify-center items-center h-10 w-10 bg-white rounded-full absolute right-[30px] bottom-[74.25px] group-hover:flex>">
              <img
                className="product-arrow flex h-[8.73px] w-[9.23px]"
                src="./icons/Arrow.svg"
                alt="Arrow icon"
              />
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Carousel;
