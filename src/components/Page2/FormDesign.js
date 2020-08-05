import React from 'react';
import Palette from './Palette';

import '../../stylesheets/layout/_formDesign.scss';

const NUMBER_OF_PALLETES = 5;

class FormDesign extends React.Component {
  constructor(props) {
    super(props);
    this.getPanelClicked = this.getPanelClicked.bind(this);
  }

  getPalettes(numberOfPalletes) {
    let palettes = [];
    for (let index = 1; index <= numberOfPalletes; index++) {
      palettes.push(
        <Palette
          number={index}
          key={index}
          handleInputValue={this.props.handleInputValue}
          checked={parseInt(this.props.checked) === index ? true : false} //se recibia el palette index como string, solo necesitaba el parseInt
        />
      );
    }

    return palettes;
  }

  //la función que recogerá el id del panel sobre el que he hecho click
  //y se lo manda al padre para que setee el estado de activePanel
  getPanelClicked(evt) {
    this.props.handleCollapsable(evt.currentTarget.id);
  }

  render() {
    return (
      <section className="design wrapper">
        <div className="design__section js-coll">
          <div
            onClick={this.getPanelClicked}
            id="panel-1"
            className="desgin__section--box"
          >
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
        <div
          className={`designform js-collapsable ${
            this.props.activePanel === 'panel-1' ? 'content' : ''
          }`}
        >
          <fieldset>
            <div className="designform__palette">
              <div className="designform__colors">
                <label htmlFor="name">Colores</label>
              </div>

              {this.getPalettes(NUMBER_OF_PALLETES)}

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
