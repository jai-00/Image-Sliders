import "./App.css";
import ImageSlider from "./components/ImageSlider";
import InfiniteImageSlider from "./components/InfiniteImageSlider";

function App() {
  return (
    <>
      <div className="container">
        <h1>Simple Image Slider</h1>
        <ImageSlider />
      </div>
      <div className="container">
        <h1>Infinite Image Slider</h1>
        <InfiniteImageSlider />
      </div>
    </>
  );
}

export default App;
