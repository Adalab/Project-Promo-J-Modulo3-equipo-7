import React from "react";
import Palette from "./Palette";

import "../../stylesheets/layout/_formDesign.scss";
class FormDesign extends React.Component {
  render() {
    // function getNumber(props) {
    //   let colorPalette = [];

    //   for (let index = 0; index < 5; index++) {
    //     const element = array[index];
    //   }
    // PREGUNTAR A MARIA}
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
              <Palette number="1" />
              <Palette number="2" />
              <Palette number="3" />
              <Palette number="4" />
              <Palette number="5" />

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
