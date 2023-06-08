import "./App.css";
import Carousel from "./js/components/Carousel";

const App = () => {
  return (
    <>
      <div className="carousel-title font-bold container-title pl-[37px] md:pl-[142px] flex py-[21px] pt-[40px] md:pt-[100px]">
        Section Title
      </div>
      <Carousel />
    </>
  );
};

export default App;
