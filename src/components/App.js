import React from "react";

import "../stylesheets/_app.scss";

import "../stylesheets/layout/_page.scss";
import Footer from "./Footer";
// import Landing from "./Landing/Landing";
import Header from "./Header";
import CardPreview from "./Page2/CardPreview";
import FormDesign from "./Page2/FormDesign";
import FormFill from "./Page2/FormFill";
import FormShare from "./Page2/FormShare";
import { cardSearch } from "../services/CardSearch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        palette: "",
        name: "",
        job: "",
        photo: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
      },
      cardURL: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
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
    debugger;
    const userInfoData = this.state.userInfo;
    cardSearch(userInfoData)
      .then((result) => this.setURL(result))
      .catch((error) => console.log(error));
  }
  setURL(result) {
    if (result.success) {
      this.setState({ cardURL: result.cardURL });
    } else {
      this.setState({ cardURL: "error:" + result.error });
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
            />
            <FormShare clickHandler={this.getCardData} />
          </form>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
