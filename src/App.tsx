import "./App.css";
import FramerMotionSlider from "./components/FramerMotionSlider";
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
      <div className="container">
        <h1>Framer Motion Slider</h1>
        <FramerMotionSlider />
      </div>
    </>
  );
}

export default App;
