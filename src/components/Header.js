import React from 'react';
import Logo from '../images/logo_futuramas.png';
import LogoCard from '../images/logo-awesome-profile-cards.svg';
import '../stylesheets/layout/_header.scss';
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <a href="/">
            <img
              src={Logo}
              alt="awesome profile cards logo"
              className="header__logo"
            />
          </a>
          <img
            src={LogoCard}
            alt="awesome
          profile cards logo"
            className="header__logoAW"
          />
        </div>
      </header>
    );
  }
}
export default Header;
