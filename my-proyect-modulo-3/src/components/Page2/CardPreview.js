import React from "react";

import "../../stylesheets/layout/_cardPreview.scss";
class CardPreview extends React.Component {
  render() {
    return (
      <section className="cardPreview">
        <div>
          <button className="cardPreview__clearButton js-clear-button">
            <i className="far fa-trash-alt"></i>
            RESET
          </button>
          <div className="cardPreview__card">
            <div className="cardPreview__info js-border-box js_palette1_border_box">
              <h1 className="cardPreview__name js-name js_palette1_color">
                Nombre Apellido
              </h1>
              <h2 className="cardPreview__position js-job">
                Front-End developer
              </h2>
            </div>
            <div className="cardPreview__profileImage js__profile-image">
              <img />
            </div>
            <div className="cardPreview__socialMedia js-icon-container js_palette1_border_color">
              <div className="cardPreview__socialMediaContainer js-icon-container jscontainer-email js_palette1_border_color hidden-icon">
                <a className="js-email" href="#">
                  <i className="fas fa-envelope js-icon js_palette1_color"></i>
                </a>
              </div>
              <div className="cardPreview__socialMediaContainer js-icon-container jscontainer-phone js_palette1_border_color hidden-icon">
                <a className="js-phone" href="#">
                  <i className="fas fa-mobile-alt js-icon js_palette1_color"></i>
                </a>
              </div>
              <div className="cardPreview__socialMediaContainer js-icon-container jscontainer-linkedin js_palette1_border_color hidden-icon">
                <a className="js-linkedin" target="_blank" href="#">
                  <i className="fab fa-linkedin-in js-icon js_palette1_color"></i>
                </a>
              </div>
              <div className="cardPreview__socialMediaContainer js-icon-container jscontainer-github js_palette1_border_color hidden-icon">
                <a className="js-github" target="_blank" href="#">
                  <i className="fab fa-github-alt js-icon js_palette1_color"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default CardPreview;
