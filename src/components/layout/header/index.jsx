import Menu from "../../nav";
import styled from "styled-components";
import { GrLanguage } from "react-icons/gr";

const LanguageIcon = styled(GrLanguage)`
  font-size: 2.5em;
  cursor: pointer;
`;

export const HeaderContainer = styled.header`
  min-height: 120px;
  max-height: 120px;
  background-color: var(--color-primary);
  color: var(--color-secondary);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
`;
export default function Header() {
  return (
    <HeaderContainer>
      <div className="logo-container">
        <img src="/images/logo.png" alt="LC Troop logo" />
      </div>
      <div className="d-flex gap-3 align-items-center">
        <LanguageIcon className="language-icon" />
        <Menu />
      </div>
    </HeaderContainer>
  );
}
