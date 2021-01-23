import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const NavigationStyles = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: #363636;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  a {
    color: var(--light-text);
    font-size: 16px;
  }
  a:hover {
    color: var(--teal-text);
  }
  nav {
    width: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    svg {
      font-size: 25px;
      position: relative;
      top: 0px;
      right: 0px;
      transform: scale(1);
      transition: transform ease-in-out 250ms;
    }
    svg:hover {
      cursor: pointer;
      transform: scale(1.25);
    }
    ul {
      background-color: var(--primary-background);
      width: 100%;
      padding: 16px;
      width: 100%;
      position: relative;
      top: 60px;
      transform-origin: center-top;
      transition: transform 0.2s ease-out 0s;
      transform: scaleY(0);
      li {
        padding: 16px;
      }
    }
  }

  ul.close {
    display: none;
  }
  ul.open {
    display: flex;
    flex-direction: column;
    transform: scaleY(1);
  }
  /* @media (min-width: 800px) {
    svg {
      display: none;
    }
    ul {
      display: flex;
    }
  } */
`;

export default function Navigation() {
  const [hamburgerState, toggleHamburger] = useState(false);

  return (
    <NavigationStyles>
      <a href="/">Alexander Puhl</a>
      <nav>
        <FaBars onClick={() => toggleHamburger(!hamburgerState)} />
        <ul className={hamburgerState ? 'open' : 'close'}>
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <a>PROJECTS</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </nav>
    </NavigationStyles>
  );
}
