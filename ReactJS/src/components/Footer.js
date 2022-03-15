import React from 'react';
import styled from 'styled-components';
import Menu from "./Menu";


const FooterList = styled.div`
  font-size: 1.0em;
  border : 1px solid black;
  height : 100px;
`;

const Footer = () => {
    return (
        <FooterList>
            Footer
        </FooterList>
    );
};

export default Footer;