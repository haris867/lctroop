import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BurgerSexy } from "react-burger-icons";

import styled from "styled-components";

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;
`;

export const MenuIcon = styled(BurgerSexy)`
  font-size: 3.5em;
  cursor: pointer;
  :hover {
    background: none !important;
  }
  :focus {
    background: none;
  }
`;

export default function Nav() {
  const [isClosed, setIsClosed] = useState(false);

  function handleHamburger() {
    console.log("hamburger");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    if (hamburgerMenu) {
      hamburgerMenu.classList.toggle("zero-vh");
    }
  }
  return (
    <>
      {/* <MenuIcon className="hamburger-icon" onClick={handleHamburger} /> */}
      <MenuButton
        onClick={() => {
          setIsClosed(!isClosed);
          handleHamburger();
        }}
        style={{
          width: "50px",
          height: "50px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <MenuIcon isClosed={isClosed} />
      </MenuButton>
      <div className="hamburger-menu">
        <nav className="d-flex justify-content-center align-items-center">
          <ul>
            <li>
              <NavLink onClick={handleHamburger} to="/">
                <span className="glow me-2">-</span>
                HOME
                <span className="glow ms-2">-</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleHamburger} to="/creators">
                <span className="glow me-2">-</span>
                CREATORS
                <span className="glow ms-2">-</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleHamburger} to="/about">
                <span className="glow me-2">-</span>
                ABOUT
                <span className="glow ms-2">-</span>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleHamburger} to="/contact">
                <span className="glow me-2">-</span>
                CONTACT
                <span className="glow ms-2">-</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
