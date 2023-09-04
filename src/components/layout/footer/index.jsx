import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  min-height: 140px;
  max-height: 140px;
  background-color: var(--color-primary);
  color: var(--color-secondary);
  padding: 0 20px;
`;
export default function Footer() {
  return (
    <FooterContainer className="d-flex justify-content-between align-items-center">
      <div className="logo-container">
        <Link to="/">
          <img src="/images/logo.png" alt="LC Troop logo" />
        </Link>
      </div>
      <ul className="m-0">
        <li>
          <NavLink to="/latest">Latest</NavLink>
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
