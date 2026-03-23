import classes from "./ImageSlider.module.css";
import imageArray from "../data/images";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageSlider() {
  const [activeImage, setActiveImage] = useState<number>(0);

  function handleLeftArrowClick() {
    if (activeImage === 0) {
      // setActiveImage(imageArray.length - 1);
      return;
    }
    setActiveImage((activeImage) => activeImage - 1);
  }

  function handleRightArrowClick() {
    if (activeImage === imageArray.length - 1) {
      // setActiveImage(0);
      return;
    }
    setActiveImage((activeImage) => activeImage + 1);
  }

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        {imageArray.map((img) => (
          <img
            src={img}
            key={img}
            alt="image"
            style={{ translate: `-${activeImage * 100}%` }}
          />
        ))}
      </div>

      {activeImage !== 0 && (
        <button
          onClick={handleLeftArrowClick}
          className={`${classes.leftButton} ${classes.navButton}`}
        >
          <ChevronLeft />
        </button>
      )}
      {activeImage !== imageArray.length - 1 && (
        <button
          onClick={handleRightArrowClick}
          className={`${classes.rightButton} ${classes.navButton}`}
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
}

export default ImageSlider;
