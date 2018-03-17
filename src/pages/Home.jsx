import React, { Component } from 'react';
import styled from 'styled-components';

const HomeTitle = styled.h1``;

const HomeContainer = styled.div`

`;

class Home extends Component {
  render() {
    return(
      <HomeContainer>
        <HomeTitle>
          Home page
        </HomeTitle>
      </HomeContainer>
    )
  }
}

export default Home;
