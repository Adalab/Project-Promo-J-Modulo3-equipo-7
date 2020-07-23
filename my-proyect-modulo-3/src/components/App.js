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
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <form className="form__section js-form">
            <CardPreview />
            <FormDesign />
            <FormFill />
            <FormShare />
          </form>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
