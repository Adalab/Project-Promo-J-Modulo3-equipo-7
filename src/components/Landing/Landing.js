import React from "react";
import LogoCard from "../../images/logo-awesome-profile-cards.svg";
import LogoMuertePorReact from "../../images/amazona2_muerte-por-react.png";
import LogoTeam from "../../images/amazonaok.png";

import "../../stylesheets/layout/_landing.scss";
import { Link } from "react-router-dom";
import Footer from "../Footer";
class Landing extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <main className="hero">
          <img className="img-main-hero" src={LogoCard} alt="Futurama Logo" />
          <img
            className="img-main-hero-futuramas"
            src={LogoTeam}
            alt="Logo Team"
          />
          <article className="main-text">
            <h1 className="main-text-title">Crea tu tarjeta de visita</h1>
            <p className="main-text-paragraph">
              Crea mejores contactos profesionales de forma fácil y cómoda
            </p>
          </article>
          <section className="icons-box">
            <div className="icon-square">
              <i className="far fa-clone foo"></i>
              <span className="span-text">Diseña</span>
            </div>
            <div className="icon-square">
              <i className="fa fa-keyboard-o testing" aria-hidden="true"></i>
              <span className="span-text">Rellena</span>
            </div>
            <div className="icon-square">
              <i className="fa fa-share-alt testing2" aria-hidden="true"></i>
              <span className="span-text">Comparte</span>
            </div>
          </section>
          <a href="./cards-menu.html">
            <div className="start-button">
              <Link to="/awesome-profile-card">comenzar </Link>
            </div>
          </a>
          <img
            className="img-main-hero-LogoMuertePorReact"
            src={LogoMuertePorReact}
            alt="Logo Muerte por React"
          ></img>
        </main>
        <Footer />
      </div>
    );
  }
}
export default Landing;
