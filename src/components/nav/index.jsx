import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

import styled from "styled-components";

export const MenuIcon = styled(CgMenuRightAlt)`
  font-size: 2.5em;
  cursor: pointer;
  :hover {
    background: none !important;
  }
  :focus {
    background: none;
  }
`;

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleHamburger() {
    console.log("hamburger");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    if (hamburgerMenu) {
      hamburgerMenu.classList.toggle("zero-vh");
    }
    setIsOpen(!isOpen);
  }
  return (
    <>
      {/* <MenuIcon className="hamburger-icon" onClick={handleHamburger} /> */}

      {isOpen ? (
        <MenuIcon
          as={CgClose}
          className="hamburger-icon"
          onClick={handleHamburger}
        />
      ) : (
        <MenuIcon className="hamburger-icon" onClick={handleHamburger} />
      )}

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
