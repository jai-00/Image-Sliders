import { ChevronLeft, ChevronRight } from "lucide-react";
import imageArray from "../data/images";
import classes from "./InfiniteImageSlider.module.css";
import { useState } from "react";

type activeImageStateType = {
  leftImageIndex: number;
  rightImageIndex: number;
  activeIndex: number;
};

function InfiniteImageSlider() {
  const [activeImage, setActiveImage] = useState<activeImageStateType>({
    leftImageIndex: 0,
    rightImageIndex: -1,
    activeIndex: 0,
  });

  function handleRightArrowClick() {
    if (activeImage.activeIndex === imageArray.length - 1) {
      setActiveImage({
        leftImageIndex: -1,
        rightImageIndex: 0,
        activeIndex: 0,
      });
      return;
    }
    setActiveImage((prevActiveImageIndex) => ({
      leftImageIndex: -1,
      rightImageIndex: prevActiveImageIndex.activeIndex + 1,
      activeIndex: prevActiveImageIndex.activeIndex + 1,
    }));
  }

  function handleLeftArrowClick() {
    if (activeImage.activeIndex === 0) {
      setActiveImage({
        leftImageIndex: imageArray.length - 1,
        rightImageIndex: -1,
        activeIndex: imageArray.length - 1,
      });
      return;
    }
    setActiveImage((prevActiveImageIndex) => ({
      leftImageIndex: prevActiveImageIndex.activeIndex - 1,
      rightImageIndex: -1,
      activeIndex: prevActiveImageIndex.activeIndex - 1,
    }));
  }

  console.log(activeImage);

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        {imageArray.map((image, index) => (
          <img
            className={classes["left-images"]}
            key={image}
            src={image}
            alt="image"
            style={{
              translate: `-${index === activeImage.leftImageIndex ? 0 : 100}%`,
              zIndex: `${index === activeImage.leftImageIndex ? 10 : 1}`,
            }}
          />
        ))}
        {imageArray.map((image, index) => (
          <img
            className={classes["right-images"]}
            key={image}
            src={image}
            alt="image"
            style={{
              translate: `${index === activeImage.rightImageIndex ? 0 : 100}%`,
              zIndex: `${index === activeImage.rightImageIndex ? 10 : 1}`,
            }}
          />
        ))}
      </div>

      <button
        onClick={handleLeftArrowClick}
        className={`${classes.leftButton} ${classes.navButton}`}
      >
        <ChevronLeft />
      </button>

      <button
        onClick={handleRightArrowClick}
        className={`${classes.rightButton} ${classes.navButton}`}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default InfiniteImageSlider;
