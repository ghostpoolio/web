import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Staking from 'pages/Staking';
import Header from 'components/Header';

const SiteFrame = styled.div``;
const SiteBody = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  padding: 0 1.5rem;
`;

const MainWithHeader = ({ children }) => (
  <SiteFrame className="SiteFrame">
    <Header />
    <SiteBody>{children}</SiteBody>
  </SiteFrame>
);

class App extends Component {
  render() {
    return (
      <MainWithHeader>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/staking" component={Staking} />
        </Switch>
      </MainWithHeader>
    );
  }
}

export default App;
