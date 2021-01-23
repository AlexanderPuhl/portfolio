import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

const NavigationStyles = styled.nav`
  background-color: #363636;
  padding: 0 15px;
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
    .item {
      display: list-item;
      width: auto;
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
          <a href="#">Alexander Puhl</a>
        </li>
        <li className="item">
          <a href="#">HOME</a>
        </li>
        <li className="item">
          <a href="#">ABOUT</a>
        </li>
        <li className="item">
          <a href="#">PROJECTS</a>
        </li>
        <li className="item">
          <a href="#">CONTACT</a>
        </li>
        <li className="toggle" onClick={() => toggleHamburger(!hamburgerState)}>
          <a href="#">
            <FaBars />
          </a>
        </li>
      </ul>
    </NavigationStyles>
  );
}
