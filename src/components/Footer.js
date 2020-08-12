import React from "react";
import Logo from "../images/logo-adalab.png";
import "../stylesheets/layout/_footer.scss";
import LogoMuertePorReact from "../images/amazona2_muerte-por-react.svg";
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer-text">Awesome profile-cards @2020</p>
        <img className="footer-logo" src={Logo} />

        <img
          className="img-main-hero-LogoMuertePorReact"
          src={LogoMuertePorReact}
          alt="Logo Muerte por React"
        ></img>
      </footer>
    );
  }
}
export default Footer;
