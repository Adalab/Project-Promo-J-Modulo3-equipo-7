import React from 'react';
import Logo from '../images/logo_futuramas.png';
import LogoCard from '../images/logo-awesome-profile-cards.svg';
import '../stylesheets/layout/_header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <Link to="/">
            <img
              src={Logo}
              alt="awesome profile cards logo"
              className="header__logo"
            />
          </Link>
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
