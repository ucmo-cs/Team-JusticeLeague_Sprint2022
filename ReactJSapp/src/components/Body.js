import React from 'react';
import styled from 'styled-components';


const BodyList = styled.div`
  font-size: 1.0em;
  border : 1px solid black;
  height : 100px;
`;

const Body = () => {
    return (
        <BodyList>
            Body
        </BodyList>
    );
};

export default Body;