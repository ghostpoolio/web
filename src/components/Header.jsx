import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { body } from 'styles/fonts';
import { gray, transparent } from 'styles/colors';

const TabUl = styled.ul`
  font-family: ${body};
  list-style-type: none;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
  display: flex;

  & > :first-child {
    padding-right: 0.5rem;
  }
  & > :last-child {
    padding-left: 0.5rem;
  }
`;

const TabHeader = styled.header`
  height: 65px;
  top: 0;
  width: 100%;
  background-color: ${transparent};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 2px 4px rgba(3, 27, 78, 0.1)' : 'none'}
  font-size: 16px;
  line-height: 3.9;
`;

TabHeader.propTypes = {
  isScrolled: PropTypes.bool,
};

const TabItems = ({ url, children }) => {
  const TabLink = ({ className }) => (
    <NavLink
      activeStyle={{ textDecoration: 'underline' }}
      to={url}
      className={className}
    >
      {children}
    </NavLink>
  );

  const StyledTabLink = styled(TabLink)`
    text-decoration: none;
    color: ${gray};
    padding: 0 0.5rem;
    &:visited {
      color: initial;
    }
  `;

  return <StyledTabLink />;
};

TabItems.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
};

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

const tabContent = [
  { text: 'Home', url: '/home' },
  { text: 'Staking', url: '/staking' },
  { text: 'About Us', url: '/about' },
  { text: 'Contact Us', url: '/contact' },
];

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isScrolled: false,
    };

    this.onScrollChange = this.onScrollChange.bind(this);
  }

  componentDidMount() {
    this.debounceScroll = debounce(this.onScrollChange, 300);
    window.addEventListener('scroll', this.debounceScroll);
  }

  componentWillUnmount() {
    window.removeListener('scroll', this.debounceScroll);
  }

  onScrollChange() {
    const isTop = window.scrollY;
    if (isTop) {
      this.setState({ isScrolled: false });
      return;
    }
    this.setState({ isScrolled: true });
  }

  render() {
    return (
      <TabHeader isScrolled={this.state.isScrolled}>
        <TabUl>
          {tabContent.map(({ url, text }) => {
            return (
              <TabItems url={url} key={text}>
                {text}
              </TabItems>
            );
          })}
        </TabUl>
      </TabHeader>
    );
  }
}

export default Header;
