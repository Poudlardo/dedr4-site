import React from "react";
import '../App.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
    return(
        <div className="aboutpage">
            <Navbar />
            <div className="slogancontainer">
                <h1>WE SPEND TIME MAKING GAMES SO YOU SPEND YOURS PLAYING THEM</h1>
            </div>
            <div className="historycontainer"></div>
            <div className="teamcontainer"></div>
            <Footer />
        </div>
    )
}

export default About