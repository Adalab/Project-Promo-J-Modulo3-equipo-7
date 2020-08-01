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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        palette: 1,
        name: "",
        job: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
      },
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue(inputName, inputValue) {
    this.setState((prevState) => {
      return {
        userInfo: {
          ...prevState.userInfo,
          [inputName]: inputValue,
        },
      };
    });

    console.log(this.state.userInfo);
  }

  getClick() {
    console.log("he hecho click");
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
          />
          <form className="form__section js-form">
            <FormDesign />
            <FormFill
              name={this.state.userInfo.name}
              job={this.state.userInfo.job}
              phone={this.state.userInfo.phone}
              email={this.state.userInfo.email}
              linkedin={this.state.userInfo.linkedin}
              github={this.state.userInfo.github}
              inputValue={this.handleInputValue}
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
