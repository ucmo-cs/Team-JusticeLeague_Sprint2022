import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const HeaderList = styled.div`
  padding: 1% 1% 1% 1%;
  background-color: forestgreen;
  left: 0;
  width: 100%;
`;

const Header = () => {
    return (
        <HeaderList>
            <Menu></Menu>
        </HeaderList>
    );
};

export default Header;