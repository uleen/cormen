import React from 'react';
import { Cart, Search, Logo } from 'components';
import { Link } from 'gatsby';

import { HeaderWrapper } from './styles';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <Search />
      <Cart />
    </HeaderWrapper>
  );
};
