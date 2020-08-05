import React from 'react';

// import "../stylesheets/_app.scss";

// import "../stylesheets/layout/_page.scss";
import Footer from '../Footer';
// import Landing from "./Landing/Landing";
import Header from '../Header';
import CardPreview from './CardPreview';
import FormDesign from './FormDesign';
import FormFill from './FormFill';
import FormShare from './FormShare';
import { cardSearch } from '../../services/CardSearch';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        palette: '',
        name: '',
        job: '',
        photo: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
      },
      //creo la propiedad del estado que almacenará la URL generada
      cardURL:
        'En este momento el link no está disponible. Por favor, revisa los campos del formulario arriba indicados 🤖',
      //creo una propiedad para ver en todo momento que panel está activo
      activePanel: 'no-active',
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    //bindeo el método que maneja los colapsables
    this.handleCollapsable = this.handleCollapsable.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.getCardData = this.getCardData.bind(this);
    this.setURL = this.setURL.bind(this);
  }

  handleInputValue(inputName, inputValue) {
    this.setState(
      (prevState) => {
        return {
          userInfo: {
            ...prevState.userInfo,
            [inputName]: inputValue,
          },
        };
      },
      () => {
        console.log(this.state.userInfo);
      }
    ); // estabamos haciendo el console log nel lugar incorrecto, funcionaba.
  }

  updateAvatar(image) {
    this.setState(
      (prevState) => {
        const newUserInfo = { ...this.state.userInfo, photo: image };
        return { userInfo: newUserInfo };
      },
      () => {
        console.log(this.state.userInfo);
      }
    );
  }
  getCardData() {
    const userInfoData = this.state.userInfo;
    cardSearch(userInfoData)
      .then((result) => this.setURL(result))
      .catch((error) => console.log(error));
  }

  setURL(res) {
    console.log(res);
    if (res.success) {
      this.setState({ cardURL: res.cardURL });
    } else {
      this.setState({ cardURL: 'error:' + res.error });
    }
  }

  //creo el método que controla los colapsables
  handleCollapsable(targetedCollapsableId) {
    console.log(targetedCollapsableId);
    if (targetedCollapsableId !== this.state.activePanel) {
      this.setState({ activePanel: targetedCollapsableId });
    } else {
      this.setState({ activePanel: '' });
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <CardPreview
            name={this.state.userInfo.name}
            job={this.state.userInfo.job}
            phone={this.state.userInfo.phone}
            email={this.state.userInfo.email}
            linkedin={this.state.userInfo.linkedin}
            github={this.state.userInfo.github}
            colorPalette={this.state.userInfo.palette}
            photoPreview={this.state.userInfo.photo}
          />
          <form className="form__section js-form">
            <FormDesign
              checked={this.state.userInfo.palette}
              handleInputValue={this.handleInputValue}
              //estas props les pasa la función que controla el colapsable
              //y el estado del colapsable
              handleCollapsable={this.handleCollapsable}
              activePanel={this.state.activePanel}
            />
            <FormFill
              name={this.state.userInfo.name}
              job={this.state.userInfo.job}
              phone={this.state.userInfo.phone}
              email={this.state.userInfo.email}
              linkedin={this.state.userInfo.linkedin}
              github={this.state.userInfo.github}
              photoPreview={this.state.userInfo.photo}
              inputValue={this.handleInputValue}
              updateAvatar={this.updateAvatar}
              handleCollapsable={this.handleCollapsable}
              activePanel={this.state.activePanel}
            />
            <FormShare
              clickHandler={this.getCardData}
              //le paso por props a FormShare la URL que me genera la API
              cardLink={this.state.cardURL}
              handleCollapsable={this.handleCollapsable}
              activePanel={this.state.activePanel}
            />
          </form>
        </main>

        <Footer />
      </div>
    );
  }
}

export default MainPage;
