import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Slider from "../components/slider";

function Blog() {
  return (
    <div id="blogpage">
      <Navbar isWhite />
      <div id="blogpage-container">
        <Slider />
      </div>
    </div>
  );
}

export default Blog;
