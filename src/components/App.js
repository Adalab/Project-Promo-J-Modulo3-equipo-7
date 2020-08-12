import React from 'react';
import '../stylesheets/_app.scss';
import '../stylesheets/layout/_page.scss';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing/Landing';
import MainPage from './Page2/MainPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/awesome-profile-card" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
