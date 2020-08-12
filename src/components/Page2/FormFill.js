import React from 'react';
import FormItem from './FormItem';

import '../../stylesheets/layout/_formFill.scss';
class FormFill extends React.Component {
  constructor(props) {
    super(props);
    this.fr = new FileReader();
    this.fileInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.loadProfileImage = this.loadProfileImage.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.getPanelClicked = this.getPanelClicked.bind(this);
  }

  handleFile() {
    this.fileInput.current.click();
  }

  handleChange(event) {
    const newFileReader = event.currentTarget.files[0];
    this.fr.addEventListener('load', this.loadProfileImage);
    this.fr.readAsDataURL(newFileReader);
  }

  loadProfileImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  getPanelClicked(evt) {
    this.props.handleCollapsable(evt.currentTarget.id);
  }

  render() {
    return (
      <section className="fill wrapper">
        <div className="fill__section js-coll">
          <div
            onClick={this.getPanelClicked}
            id="panel-2"
            className="fill__section--box"
          >
            <i
              className="fa fa-keyboard-o fill__section--img"
              aria-hidden="true"
            ></i>
            <h2 className="fill__section--title">rellena</h2>
          </div>
          <i className="fas fa-chevron-down fill__section--img2"></i>
        </div>
        <div
          className={`form js-contentFill js-collapsable ${
            this.props.activePanel !== 'panel-2' ? 'content' : ''
          }`}
        >
          <fieldset>
            <FormItem
              name={'name'}
              value={this.props.name}
              title={'Nombre completo'}
              placeholder={'Ej: Leela Turanga'}
              inputValue={this.props.inputValue}
            />
            <FormItem
              name={'job'}
              value={this.props.job}
              title={'Puesto'}
              placeholder={'Ej: Front End developer'}
              inputValue={this.props.inputValue}
            />
            <div className="form__img">
              <label htmlFor="img">Imagen de perfil</label>
              <div className="form__img--box">
                <button
                  className="form__img--box--button js__profile-trigger"
                  type="button"
                  onClick={this.handleFile}
                >
                  Añadir imagen
                </button>
                <input
                  onChange={this.handleChange}
                  ref={this.fileInput}
                  className="form__img--box--check action__hiddenField js__profile-upload-btn"
                  id="photo"
                  type="file"
                  name="photo"
                />
                <div className="form__img--box--preview profile__preview js__profile-preview">
                  {this.props.photoPreview !== '' ? (
                    <img src={this.props.photoPreview} alt="Profile Avatar" />
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <FormItem
              name={'email'}
              value={this.props.email}
              title={'Email'}
              placeholder={'Ej: leela@planet-express.com'}
              inputValue={this.props.inputValue}
            />
            <FormItem
              name={'phone'}
              value={this.props.phone}
              title={'Teléfono'}
              placeholder={'Ej: 555 2587695'}
              inputValue={this.props.inputValue}
            />
            <FormItem
              name={'linkedin'}
              value={this.props.linkedin}
              title={'Linkedin'}
              placeholder={'Ej: Leela-Turanga'}
              inputValue={this.props.inputValue}
            />
            <FormItem
              name={'github'}
              value={this.props.github}
              title={'Github'}
              placeholder={'Ej: leelaturanga'}
              inputValue={this.props.inputValue}
            />
          </fieldset>
        </div>
      </section>
    );
  }
}
export default FormFill;
