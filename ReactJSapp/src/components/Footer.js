import React from 'react';
import styled from 'styled-components';


const FooterList = styled.div`
  padding: 1rem;
  background-color: forestgreen;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Footer = () => {
    return (
        <FooterList>
            <b>CommerceBank</b>
            <p>Copyright © 2022 Commerce Bancshares, Inc. All rights reserved. Commerce Bank, Member FDIC.</p>
        </FooterList>
    );
};

export default Footer;