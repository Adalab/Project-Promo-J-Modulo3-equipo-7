import React from "react";
import Logo from "../images/logo-adalab.png";
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer-text">Awesome profile-cards @2020</p>
        <img className="footer-logo" src={Logo} />
      </footer>
    );
  }
}
export default Footer;
