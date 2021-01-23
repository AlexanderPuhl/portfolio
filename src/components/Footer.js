import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  background-color: #363636;
  color: #fff;
  padding: 10px;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <p>Developed by Alexander Puhl © 2021</p>
    </FooterStyle>
  );
}
