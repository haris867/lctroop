import styled from "styled-components";

export const AboutImage = styled.img`
  border-radius: 0 !important;
  margin-bottom: 20px;
  filter: brightness(0.4);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;
  width: 90%;
  object-fit: cover;
  aspect-ratio: 3/2;
`;

export const AboutCardText = styled.p`
  font-size: calc(0.9rem + 0.3vw) !important;
  width: 85%;
  margin: 0 auto;
  font-family: "Lao MN", sans-serif;
`;
export const AboutCardTitle = styled.h2`
  font-family: "Play", sans-serif;
  color: var(--color-secondary);
  position: absolute;
  z-index: 1;
  font-size: calc(1.7rem + 1.2vw) !important;
  text-align: center;
`;
