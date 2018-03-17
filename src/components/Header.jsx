import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { body } from 'styles/fonts';

const TabUl = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0 1rem;
  font-family: ${body};
`;

const TabItems = ({ url, children }) => {
  const TabLink = ({ className }) => (
    <Link to={url} className={className}>
      {children}
    </Link>
  );

  const StyledTabLink = styled(TabLink)`
    padding: 1rem;
    text-decoration: none;
    &:visited {

    }
  `;

  return <StyledTabLink />;
};

const tabContent = [
  { text: 'Home', url: '/' },
  { text: 'Staking', url: 'staking' },
  { text: 'About Us', url: 'about' },
  { text: 'Contact Us', url: 'contact' },
];

class Header extends Component {
  render() {
    return (
      <TabUl>
        {tabContent.map(({ url, text }) => {
          return (
            <TabItems url={url} key={text}>
              {text}
            </TabItems>
          );
        })}
      </TabUl>
    );
  }
}

export default Header;
