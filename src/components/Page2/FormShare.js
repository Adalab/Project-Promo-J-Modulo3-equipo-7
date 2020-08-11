import React from "react";

import "../../stylesheets/layout/_formShare.scss";
class FormShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.getClick = this.getClick.bind(this);
    this.getPanelClicked = this.getPanelClicked.bind(this);
  }

  getClick(event) {
    event.preventDefault();
    this.props.clickHandler(event.target);
    this.setState({ active: true });
  }

  getPanelClicked(evt) {
    this.props.handleCollapsable(evt.currentTarget.id);
  }

  render() {
    const openShare = this.state.active !== true ? "content" : "";
    return (
      <section className="share wrapper">
        <div className="share__tab js-coll">
          <div
            onClick={this.getPanelClicked}
            id="panel-3"
            className="share__tab--description"
          >
            <i className="fas fa-share-alt tab__image"></i>
            <h2 className="tab__text">Comparte</h2>
          </div>
          <i className="fas fa-chevron-down tab__icon"></i>
        </div>
        <div
          className={`js-collapsable ${
            this.props.activePanel !== "panel-3" ? "content" : ""
          }`}
        >
          <div className="createcard__button--container">
            <button
              type="submit"
              className="createcard__button js-createcard__button"
              onClick={this.getClick}
            >
              <div className="createcard__button--icon">
                <i className="far fa-address-card"></i>
              </div>
              <span className="createcard__button--icon">Crear tarjeta</span>
            </button>
            <section
              className={`notification wrapper js-share__section ${openShare}`}
            >
              <p>La tarjeta ha sido creada:</p>
              {/*he creado un link en lugar de un p para que pueda pinchar en el link recibe por props la url que le llega desde la API */}
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="response__url js-apiLink"
                href={this.props.cardLink}
              >
                {this.props.cardLink}
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=Hello%20world ${this.props.cardLink}`}
                className="share__button js-share__button"
              >
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
