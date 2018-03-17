import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'components/Header';

const WithHeader = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

class App extends Component {
  render() {
    return (
      <Switch>
        <WithHeader>
          <Route exact path="/" component={Home} />
        </WithHeader>
      </Switch>
    );
  }
}

export default App;
