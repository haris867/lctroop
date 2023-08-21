import Menu from "../../nav";
import styled from "styled-components";

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
      <Menu />
    </HeaderContainer>
  );
}
