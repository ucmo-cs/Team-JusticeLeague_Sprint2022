import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const HeaderList = styled.div`
  font-size: 1.0em;
  border : 1px solid black;
  height : 100px;
`;


const Header = () => {
    return (
        <HeaderList>
            Header Nav Bar
            <Menu></Menu>
        </HeaderList>
    );
};

export default Header;