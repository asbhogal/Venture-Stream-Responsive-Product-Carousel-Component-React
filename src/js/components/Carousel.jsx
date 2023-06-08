import { useRef, useEffect } from "react";
import products from "../constants/productsData";

const Carousel = () => {
  const carouselRef = useRef(null);
  const dragStartRef = useRef(0);
  const isDraggingRef = useRef(false);
  const previousTranslateRef = useRef(0);
  const currentTranslateRef = useRef(0);

  useEffect(() => {
    const carouselContainer = carouselRef.current;
    const handleMouseDown = (e) => {
      e.preventDefault();
      dragStartRef.current = e.clientX;
      isDraggingRef.current = true;
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const currentPosition = e.clientX;
      const diffX = currentPosition - dragStartRef.current;
      currentTranslateRef.current = previousTranslateRef.current + diffX;
      carouselContainer.style.transform = `translateX(${currentTranslateRef.current}px)`;
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      previousTranslateRef.current = currentTranslateRef.current;
    };

    const handleTouchStart = (e) => {
      dragStartRef.current = e.touches[0].clientX;
      isDraggingRef.current = true;
    };

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      const currentPosition = e.touches[0].clientX;
      const diffX = currentPosition - dragStartRef.current;
      currentTranslateRef.current = previousTranslateRef.current + diffX;
      carouselContainer.style.transform = `translateX(${currentTranslateRef.current}px)`;
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
      previousTranslateRef.current = currentTranslateRef.current;
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseUp);

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseUp);

      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);
  return (
    <>
      <div
        className="carousel group flex gap-[20px] pl-[37px] md:pl-[142px] py-[21px] overflow-x-scroll overflow-y-hidden"
        ref={carouselRef}
        onTouchStart={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
        onTouchEnd={(e) => e.preventDefault()}
      >
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
