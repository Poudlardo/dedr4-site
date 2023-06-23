import React from "react";
import '../App.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
    return(
        <div className="aboutpage">
            <Navbar />
            <div className="slogancontainer">
                <h1>ON PASSE NOTRE TEMPS A FAIRE DES JEUX POUR QUE TU PASSES LE TIEN A Y JOUER</h1>
            </div>
            <div className="historycontainer"></div>
            <div className="teamcontainer"></div>
            <Footer />
        </div>
    )
}

export default About