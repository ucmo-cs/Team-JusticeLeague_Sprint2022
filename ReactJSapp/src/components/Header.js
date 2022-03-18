import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const HeaderList = styled.div`
  padding: 0rem 1rem 2rem 1rem;
  background-color: forestgreen;
  left: 0;
  width: 100%;
`;

const Header = () => {
    return (
        <HeaderList>
            <b>Content in the Header Nav Bar</b>
            <Menu></Menu>
        </HeaderList>
    );
};

export default Header;