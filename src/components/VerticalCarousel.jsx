import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./VerticalCarousel.css";
import 'animate.css';
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
    console.log(activeIndex);
    
    // Change background video playing and description according to activeIndex
    const videoSource = document.querySelector('video');
    const descriptionDeux = document.querySelector('.description2');
    const imgPlatformUn = document.getElementById('logo1');
    const imgPlatformDeux = document.getElementById('logo2');
    const lienPlatformUn = document.getElementById('lien1');
    const lienPlatformDeux = document.getElementById('lien2');

    if (descriptionDeux !== undefined && descriptionDeux !== null) {
    videoSource.src = data[activeIndex].videobackground;
    descriptionDeux.innerText = data[activeIndex].description;
    imgPlatformUn.src = data[activeIndex].platformun;
    if(data[activeIndex].platformdeux !== "") { imgPlatformDeux.src = data[activeIndex].platformdeux }
    lienPlatformUn.href = data[activeIndex].link1;
    if(data[activeIndex].link2 !== "") { lienPlatformDeux.href = data[activeIndex].link2 } 
    }
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

  const animateCSS = () => {
    const Gamescontent = document.querySelector('.gamescontent');

    /*functions to add animation classes */
    Gamescontent.classList.add('animate__animated', 'animate__fadeInUp');
  
    Gamescontent.style.setProperty('--animate-duration', '.4s');

    Gamescontent.addEventListener('animationend', (e) => {e.target.classList.remove('animate__fadeInUp')});
  }     


  useEffect(() => {
    setTimeout(
      function() {
        document.querySelector('.gamescontent').classList.remove('animate__fadeInUp');
      }, 1000);
  });


  return (
    <div className="carousel-inner">
    {data.map((item, i) => (
        <button type="button" onClick={function() {setActiveIndex(i); animateCSS();}} className={cn("carousel-item", {
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
