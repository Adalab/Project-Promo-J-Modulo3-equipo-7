import React from 'react';

import '../../stylesheets/layout/_cardPreview.scss';
class CardPreview extends React.Component {
  render() {
    const isEmail = this.props.email ? '' : 'hidden-icon';
    const isPhone = this.props.phone ? '' : 'hidden-icon';
    const isLinkedin = this.props.linkedin ? '' : 'hidden-icon';
    const isGithub = this.props.github ? '' : 'hidden-icon';
    const numberPalette =
      parseInt(this.props.colorPalette) === 1
        ? '1'
        : parseInt(this.props.colorPalette) === 2
        ? '2'
        : parseInt(this.props.colorPalette) === 3
        ? '3'
        : parseInt(this.props.colorPalette) === 4
        ? '4'
        : '5';
    return (
      <section className="cardPreview">
        <div>
          <button className="cardPreview__clearButton js-clear-button">
            <i className="far fa-trash-alt"></i>
            RESET
          </button>
          <div className="cardPreview__card">
            <div
              className={`cardPreview__info js-border-box js_palette${numberPalette}_border_box`}
            >
              <h1
                className={`cardPreview__name js-name js_palette${numberPalette}_color`}
              >
                {this.props.name === '' ? 'Leela Turanga' : this.props.name}
              </h1>
              <h2 className="cardPreview__position js-job">
                {this.props.job === '' ? 'Front End Developer' : this.props.job}
              </h2>
            </div>
            <div className="cardPreview__profileImage js__profile-image">
              <img />
            </div>
            <div
              className={`cardPreview__socialMedia js-icon-container js_palette${numberPalette}_border_color`}
            >
              <div
                className={`cardPreview__socialMediaContainer js-icon-container jscontainer-email js_palette${numberPalette}_border_color ${isEmail}`}
              >
                <a className="js-email" href={`mailto:${this.props.email}`}>
                  <i
                    className={`fas fa-envelope js-icon js_palette${numberPalette}_color`}
                  ></i>
                </a>
              </div>
              <div
                className={`cardPreview__socialMediaContainer js-icon-container jscontainer-phone js_palette${numberPalette}_border_color ${isPhone}`}
              >
                <a className="js-phone" href={`tel:${this.props.phone}`}>
                  <i
                    className={`fas fa-mobile-alt js-icon js_palette${numberPalette}_color`}
                  ></i>
                </a>
              </div>
              <div
                className={`cardPreview__socialMediaContainer js-icon-container jscontainer-linkedin js_palette${numberPalette}_border_color ${isLinkedin}`}
              >
                <a
                  className="js-linkedin"
                  target="_blank"
                  href={`https://linkedin.com/in/${this.props.linkedin}`}
                >
                  <i
                    className={`fab fa-linkedin-in js-icon js_palette${numberPalette}_color`}
                  ></i>
                </a>
              </div>
              <div
                className={`cardPreview__socialMediaContainer js-icon-container jscontainer-github js_palette${numberPalette}_border_color ${isGithub}`}
              >
                <a
                  className="js-github"
                  target="_blank"
                  href={`https://github.com/${this.props.github}`}
                >
                  <i
                    className={`fab fa-github-alt js-icon js_palette${numberPalette}_color`}
                  ></i>
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
