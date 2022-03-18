import React from 'react';
import styled from 'styled-components';


const FooterList = styled.div`
  margin-bottom: 1rem;
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
            <b>Footer</b>
            <p>This is some content in the footer</p>
        </FooterList>
    );
};

export default Footer;