import React from "react";

import "../../stylesheets/layout/_formDesign.scss";
class FormDesign extends React.Component {
  render() {
    return (
      <section className="design wrapper">
        <div className="design__section js-coll">
          <div className="desgin__section--box">
            <i className="far fa-clone"></i>
            <h2 className="design__section--title">Diseña</h2>
          </div>
          <a
            className="design__section--button"
            href="/"
            data-toggle="collapse"
          >
            <i className="fas fa-chevron-down design__section--img"></i>
          </a>
        </div>
        <div className="designform js-collapsable">
          <fieldset>
            <div className="designform__palette">
              <div className="designform__colors">
                <label for="name">Colores</label>
              </div>
              <div className="designform__palette1">
                <input
                  className="js_palette1"
                  id="1"
                  type="radio"
                  value="palette1"
                  name="paletteoptions"
                  checked="checked"
                />
              </div>
              <div className="designform__palette2">
                <input
                  className="js_palette2"
                  id="2"
                  type="radio"
                  value="palette2"
                  name="paletteoptions"
                />
              </div>

              <div className="designform__palette3">
                <input
                  className="js_palette3"
                  id="3"
                  type="radio"
                  value="palette3"
                  name="paletteoptions"
                />
              </div>
              <div className="designform__palette4">
                <input
                  className="js_palette4"
                  id="4"
                  type="radio"
                  value="palette4"
                  name="paletteoptions"
                />
              </div>
              <div className="designform__palette5">
                <input
                  className="js_palette5"
                  id="5"
                  type="radio"
                  value="palette5"
                  name="paletteoptions"
                />
              </div>
              <div className="designform__color1"></div>
              <div className="designform__color2"></div>
              <div className="designform__color3"></div>
              <div className="designform__color4"></div>
              <div className="designform__color5"></div>
              <div className="designform__color6"></div>
              <div className="designform__color7"></div>
              <div className="designform__color8"></div>
              <div className="designform__color9"></div>
              <div className="designform__color10"></div>
              <div className="designform__color11"></div>
              <div className="designform__color12"></div>
              <div className="designform__color13"></div>
              <div className="designform__color14"></div>
              <div className="designform__color15"></div>
            </div>
          </fieldset>
        </div>
      </section>
    );
  }
}
export default FormDesign;
