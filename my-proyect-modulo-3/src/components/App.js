import React from "react";

import "../stylesheets/_app.scss";
import Footer from "./Footer";
// import Landing from "./Landing/Landing";
import Header from "./Header";
import CardPreview from "./Page2/CardPreview";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CardPreview />

        <Footer />
      </div>
    );
  }
}

export default App;
