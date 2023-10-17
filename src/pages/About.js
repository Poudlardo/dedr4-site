import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="aboutpage">
      <Navbar />
      <div className="slogancontainer animate__animated animate__slideInUp">
        <h1>WE SPEND OUR TIME MAKING GAMES YOU'LL SPEND YOURS TO PLAY</h1>
        <img src="images/ovo-avatars.png" />
        <div className="arrow-box">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="historycontainer">
        <div className="quisommesnous">
          <h1>Who are we ?</h1>
          <br />
          <p>
            Nous voulons que nos jeux aient du sens. Nous nous efforçons de
            créer des expériences universelles auxquelles tout le monde peut
            s'identifier, tout en racontant des histoires authentiques qui
            suscitent la réflexion. Chaque jeu que nous développons est une
            création originale qui a quelque chose de nouveau à offrir à notre
            communauté de joueuses et de joueurs.Nous sommes désormais en mesure
            d'autoéditer nos jeux et de les mettre directement entre les mains
            de nos joueuses et joueurs. Nous partageons également notre
            expertise en matière d'édition et collaborons avec d'autres
            développeurs pour donner vie à leurs histoires. Nous travaillons
            avec des studios qui partagent nos valeurs et dont la vision
            créative s'aligne sur la nôtre.
          </p>
        </div>
        <div>
          <img src="images/ossamadam.jpg" className="ossamadam" />
        </div>
        <div></div>
      </div>
      <div className="teamcontainer">
        <h1>WE MAKE GAMES</h1>
        <div className="teammembers">
          <div className="ossam">
            <img src="images/skuuuurrrrr.png" height="350px" />
            <h2>Ossama Jouini</h2>
            <p><b>Co-founder, game designer and programmer</b>
            <br />
            The one supervising the team, dispatching some of the tasks, and coordinating what each member of the team does. He also handles coding Als of the games and the many interfaces the user will encounter. Finally, he helps with all the coding part and the scenario.</p>
          </div>
          <div className="adam">
            <img src="images/skuuuurrrrr.png" height="350px" />
            <h2>Adam Merhairi</h2>
            <p><b>Co-founder, scenarist and level designer</b>
<br />He is in charge of making our games feel complete and real by doing the world building and level design, as well as creating most of the scenario seen in the game. He is also in charge of helping with some of the art of the games.</p>
          </div>
          <div className="maryland">
            <img src="images/skuuuurrrrr.png" height="350px" />
            <h2>Maryland member</h2>
            <p>J'aime les jeux vidéos lourds</p>
          </div>
          <div className="brasil">
            <img src="images/skuuuurrrrr.png" height="350px" />
            <h2>Brazil member</h2>
            <p>J'aime les jeux vidéos lourds</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
