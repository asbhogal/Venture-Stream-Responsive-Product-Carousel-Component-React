import { useState, useRef } from "react";
import products from "../constants/productsData";

const Carousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [startPos, setStartPos] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const carouselRef = useRef(null);

  const dragStart = (e) => {
    setIsDragging(true);
    carouselRef.current.classList.add("dragging");
    setStartPos(e.pageX - carouselRef.current.offsetLeft);
    setStartX(e.pageX);
    setStartScrollLeft(carouselRef.current.scrollLeft);
  };

  const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    setCurrentPos(e.pageX - carouselRef.current.offsetLeft);
    const scrollPos = currentPos - startPos;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - scrollPos;
    carouselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
  };

  const dragStop = () => {
    setIsDragging(false);
    carouselRef.current.classList.remove("dragging");
  };

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <div
        className="carousel group flex gap-[20px] pl-[37px] md:pl-[142px] py-[21px] overflow-x-auto overflow-y-hidden"
        ref={carouselRef}
        onMouseDown={dragStart}
        onMouseMove={dragging}
        onMouseUp={dragStop}
        onMouseLeave={dragStop}
      >
        {products.map((product) => (
          <a
            key={product.id}
            className="carousel-card flex group flex-col gap-[20px] hover:scale-105 transition"
            href="#"
            target="_blank"
            onMouseEnter={() => handleCardHover(product.id)}
            onMouseLeave={handleCardLeave}
          >
            <img
              className="product-image max-w-none w-[287px] sm:w-[396px]"
              src={product.imgSrc}
              alt={product.imgAlt}
            />
            <div className="product-title font-medium text-lg">
              {product.name}
            </div>
            <div
              className={`product-arrow-container justify-center items-center h-10 w-10 bg-white rounded-full absolute right-[30px] bottom-[74.25px] ${
                hoveredCard === product.id ? "flex" : "hidden"
              }`}
            >
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
