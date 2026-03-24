import classes from "./FramerMotionSlider.module.css";
import imageArray from "../data/images";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function FramerMotionSlider() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  // const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      // opacity: 0,
    }),
    center: {
      x: 0,
      // opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      // opacity: 0,
    }),
  };

  function handleLeftArrowClick() {
    if (activeIndex > 0) {
      setActiveIndex([activeIndex - 1, -1]);
    } else {
      setActiveIndex([imageArray.length - 1, -1]);
    }
  }

  function handleRightArrowClick() {
    if (activeIndex < imageArray.length - 1) {
      setActiveIndex([activeIndex + 1, 1]);
    } else {
      setActiveIndex([0, 1]);
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <AnimatePresence custom={direction}>
          <motion.img
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            variants={variants}
            transition={{ duration: 0.4 }}
            // onAnimationStart={() => setIsAnimating(true)}
            // onAnimationComplete={() => setIsAnimating(false)}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_e, { offset, velocity }) => {
              const swipe = offset.x + velocity.x * 100;

              if (swipe < -100) {
                setActiveIndex(([prev]) => [(prev + 1) % imageArray.length, 1]);
              } else if (swipe > 100) {
                setActiveIndex(([prev]) => [
                  prev === 0 ? imageArray.length - 1 : prev - 1,
                  -1,
                ]);
              }
            }}
            src={imageArray[activeIndex]}
            alt="image"
            key={activeIndex}
          />
        </AnimatePresence>
      </div>
      <button
        // disabled={isAnimating}
        onClick={handleLeftArrowClick}
        className={`${classes.leftButton} ${classes.navButton}`}
      >
        <ChevronLeft />
      </button>

      <button
        // disabled={isAnimating}
        onClick={handleRightArrowClick}
        className={`${classes.rightButton} ${classes.navButton}`}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default FramerMotionSlider;
