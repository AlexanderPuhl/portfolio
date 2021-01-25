import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const NavigationStyles = styled.nav`
  background-color: #363636;
  padding: 0 15px;
  position: fixed;
  width: 100%;
  z-index: 2;
  .logo {
    font-size: 20px;
    padding: 8px 10px 8px 0;
  }
  .item {
    padding: 10px;
  }
  .logo a:hover,
  .item a:hover {
    color: var(--teal-text);
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  li a {
    color: var(--light-text);
    cursor: pointer;
    display: block;
    padding: 15px 5px;
  }
  .toggle {
    order: 1;
    font-size: 20px;
  }
  .item {
    order: 2;
    width: 100%;
    text-align: center;
    display: none;
  }
  ul.open .item {
    display: block;
  }

  /* Tablet Menu */
  @media (min-width: 700px) {
    ul {
      align-items: flex-start;
      flex-wrap: nowrap;
      .logo {
        flex: 1;
        order: 0;
      }
      .item {
        order: 1;
        display: block;
        width: auto;
      }
    }

    .toggle {
      display: none;
    }
  }
`;

export default function Navigation() {
  const [hamburgerState, toggleHamburger] = useState(false);

  return (
    <NavigationStyles>
      <ul className={hamburgerState ? 'open' : 'close'}>
        <li className="logo">
          <a href="https://www.alexpuhl.com">Alexander Puhl</a>
        </li>
        <li className="item">
          <a href="#hero">HOME</a>
        </li>
        <li className="item">
          <a href="#about">ABOUT</a>
        </li>
        <li className="item">
          <a href="#projects">PROJECTS</a>
        </li>
        <li className="item">
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <a
            className="toggle"
            role="button"
            tabIndex={0}
            onClick={() => toggleHamburger(!hamburgerState)}
            onKeyPress={() => toggleHamburger(!hamburgerState)}
          >
            <FaBars />
          </a>
        </li>
      </ul>
    </NavigationStyles>
  );
}
