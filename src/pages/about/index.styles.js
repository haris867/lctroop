import styled from "styled-components";

export const AboutImage = styled.img`
  border-radius: 5px !important;
  margin-bottom: 20px;
  filter: brightness(0.4);
  width: 90%;
  object-fit: cover;
  aspect-ratio: 3/1.85;
  box-shadow: rgba(255, 215, 0, 0.4) 0px 3px 8px !important;
`;

export const AboutCardText = styled.p`
  width: 90%;
  font-family: "N27", sans-serif;
  margin: 0 auto;
`;
export const AboutCardTitle = styled.h2`
  font-family: "Play", sans-serif;
  color: var(--color-secondary);
  position: absolute;
  z-index: 1;
  text-align: center;
  font-family: "N27", sans-serif;
`;
