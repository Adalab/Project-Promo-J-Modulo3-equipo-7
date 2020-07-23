import React from "react";

import "../../stylesheets/layout/_formShare.scss";
class FormShare extends React.Component {
  render() {
    return (
      <section className="share wrapper">
        <div className="share__tab js-coll">
          <div className="share__tab--description">
            <i className="fas fa-share-alt tab__image"></i>
            <h2 className="tab__text">Comparte</h2>
          </div>
          <i className="fas fa-chevron-down tab__icon"></i>
        </div>
        <div className="js-collapsable">
          <div className="createcard__button--container">
            <button
              type="submit"
              className="createcard__button js-createcard__button"
            >
              <div className="createcard__button--icon">
                <i className="far fa-address-card"></i>
              </div>
              <span className="createcard__button--icon">Crear tarjeta</span>
            </button>
            <section className="notification wrapper content js-share__section">
              <p>La tarjeta ha sido creada:</p>
              <p className="response__url js-apiLink">
                https://awesome-profile-card.com?id=A456DF0001
              </p>
              <a className="share__button js-share__button">
                <div className="share__button">
                  <div className="share__button--icon">
                    <i className="fab fa-twitter share__icon"></i>
                  </div>
                  <span className="share__button--text">
                    Compartir en twitter
                  </span>
                </div>
              </a>
            </section>
          </div>
        </div>
      </section>
    );
  }
}
export default FormShare;
