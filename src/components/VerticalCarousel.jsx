import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./VerticalCarousel.css";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-vertical-carousel-component-in-react
 */

const VerticalCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 140;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const changeBackground = () => {
  const videoSource = document.querySelector('video');
  videoSource.src = data[activeIndex].videobackground;
  console.log(activeIndex)
  console.log(videoSource.src) ;
  }

  return (
    <div className="carousel-inner">
    {data.map((item, i) => (
        <button type="button" onClick={function() {setActiveIndex(i); changeBackground()}} className={cn("carousel-item", {
            active: activeIndex === i,
            visible:
            Math.abs(determinePlacement(i)) <= visibleStyleThreshold
        })}
        key={item.id}
        style={{
            transform: `translateY(${determinePlacement(i)}px)`
        }}
        ><img src={item.images} className="gamesimages" /></button>
    ))}
    </div>
  );
};

VerticalCarousel.propTypes = {
  data: PropTypes.array.isRequired,
};

export default VerticalCarousel;
