import React from "react";

import "../../stylesheets/layout/_formFill.scss";
class FormFill extends React.Component {
  render() {
    return (
      <section className="fill wrapper">
        <div className="fill__section js-coll">
          <div className="fill__section--box">
            <i
              className="fa fa-keyboard-o fill__section--img"
              aria-hidden="true"
            ></i>
            <h2 className="fill__section--title">rellena</h2>
          </div>
          <i className="fas fa-chevron-down fill__section--img2"></i>
        </div>
        <div className="form content js-contentFill js-collapsable">
          <fieldset>
            <div className="form__name">
              <label for="name">Nombre completo</label>
              <input
                className="input__name js-input-name"
                type="text"
                id="name"
                name="name"
                placeholder="Ej: Leela Turanga"
                required
              />
            </div>
            <div className="form__job">
              <label for="job">Puesto</label>
              <input
                className="input__job js-input-job"
                type="text"
                id="job"
                name="job"
                placeholder="Ej: Front End developer"
                required
              />
            </div>
            <div className="form__img">
              <label for="img">Imagen de perfil</label>
              <div className="form__img--box">
                <buttonxfbi
                  className="form__img--box--button js__profile-trigger"
                  type="button"
                >
                  Añadir imagen
                </buttonxfbi>
                <input
                  className="form__img--box--check action__hiddenField js__profile-upload-btn"
                  id="imgOption"
                  type="file"
                  name="imgOptions"
                />
                <div className="form__img--box--preview profile__preview js__profile-preview"></div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div className="form__email">
              <label for="email">Email</label>
              <input
                className="input__email js-input-email"
                type="email"
                id="email"
                name="email"
                placeholder="Ej: leela@planet-express.com"
                required
              />
            </div>
            <div className="form__phone">
              <label for="phone">Teléfono</label>
              <input
                className="input__phone js-input-phone"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ej: 555 2587695"
                pattern="[0-9]{9}"
              />
            </div>
            <div className="form__linkedin">
              <label for="Linkedin">Linkedin</label>
              <input
                className="input__linkedin js-input-linkedin"
                type="text"
                id="linkedin"
                name="linkedin"
                placeholder="Ej: Leela"
              />
            </div>
            <div className="form__github">
              <label for="github">Github</label>
              <input
                className="input__github js-input-github"
                type="text"
                id="github"
                name="github"
                placeholder="Ej: leelaturanga"
              />
            </div>
          </fieldset>
        </div>
      </section>
    );
  }
}
export default FormFill;
