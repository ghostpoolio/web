import React, { Component } from 'react';
import styled from 'styled-components';

import { hoveredBoxShadow, boxShadow, border, white } from 'styles/colors';

const StyledCard = styled.div`
  background-color: ${white};
  border-radius: 5px;
  border: 1px solid ${border};
  box-shadow: 0 2px 4px ${boxShadow};
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  margin: 0.5rem;
  max-width: 33.33333%;
  flex-basis: 33.33333%;
  padding: 32px;
  position: relative;
  text-align: center;
  transition: box-shadow .25s linear;
  &:hover {
    box-shadow: 0 10px 20px ${hoveredBoxShadow};
  }

  @media (max-width: 759px) {
    padding-left: 16px;
    padding-top: 16px;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

class ContentCard extends Component {
  render() {
    return (
      <StyledCard>
        {this.props.children}
      </StyledCard>
    )
  }
}

export default ContentCard;
