import React from 'react';

import '../stylesheets/_app.scss';

import '../stylesheets/layout/_page.scss';
import Footer from './Footer';
// import Landing from "./Landing/Landing";
import Header from './Header';
import CardPreview from './Page2/CardPreview';
import FormDesign from './Page2/FormDesign';
import FormFill from './Page2/FormFill';
import FormShare from './Page2/FormShare';

class App extends React.Component {
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
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
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
        return newUserInfo;
      },
      () => {
        console.log(this.state.userInfo);
      }
    );
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
          />
          <form className="form__section js-form">
            <FormDesign
              handleInputValue={this.handleInputValue}
              checked={this.state.userInfo.palette}
            />
            <FormFill
              name={this.state.userInfo.name}
              job={this.state.userInfo.job}
              phone={this.state.userInfo.phone}
              email={this.state.userInfo.email}
              linkedin={this.state.userInfo.linkedin}
              github={this.state.userInfo.github}
              inputValue={this.handleInputValue}
              updateAvatar={this.updateAvatar}
            />
            <FormShare />
            {/* va dentro de FormShare // clickHandler={this.getClick} */}
          </form>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
