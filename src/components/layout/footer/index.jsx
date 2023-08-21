import Menu from "../../nav";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  min-height: 120px;
  max-height: 120px;
  background-color: var(--color-primary);
  color: var(--color-secondary);
  padding: 0 20px;
`;
export default function Footer() {
  return (
    <FooterContainer className="d-flex justify-content-between align-items-center">
      <div className="logo-container">
        <img src="/images/logo.png" alt="LC Troop logo" />
      </div>
      <ul className="m-0">
        <li>
          <NavLink to="/creators">Creators</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </FooterContainer>
  );
}
