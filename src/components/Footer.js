import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterStyle = styled.footer`
  background-color: #363636;
  color: #fff;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    display: flex;
    flex-direction: row;
    padding: 16px 0;
    a {
      padding: 16px;
      svg {
        color: var(--light-text);
        font-size: 40px;
        display: inline-block;
        transform: scale(1);
        transition: transform ease-in-out 250ms;
      }
      svg:hover {
        color: var(--teal-text);
        transform: scale(1.25);
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle id="contact">
      <ul>
        <li>
          <a
            href="https://github.com/AlexanderPuhl"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alexander-puhl/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/AlexPuhl"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="mailto:alexpuhldeveloper@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
        </li>
      </ul>
      <p>Developed by Alexander Puhl © 2021</p>
    </FooterStyle>
  );
}
