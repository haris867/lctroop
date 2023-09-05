import styled from "styled-components";
import { CardDetails } from "../creator";

export const Heading = styled.h1`
  font-family: "N27", sans-serif;
  font-size: clamp(1.3rem, 2vw, 2.3rem);
`;

export const SubHeading = styled.h2`
  font-family: "N27", sans-serif;
  font-size: clamp(1.2rem, 1.7vw, 2rem);
`;

export const JoinButton = styled.button`
  font-size: calc(1rem + 0.3vw) !important;
  border-radius: 5px;
  color: #131313;
  margin: 0 auto;
  max-width: 200px;
  padding: 3px 3rem;
  background-color: #fff;
  border: 3px solid #ffd700;
  font-family: "N27", sans-serif;
  transform: scale(1);
  transition: transform 0.4s ease-in;
  &:hover {
    transform: scale(1.05);
    color: #131313;
    background-color: #fff !important;
    border: 3px solid #ffd700 !important;
  }
  &:focus {
    color: #131313;
    background-color: #fff !important;
    border: 3px solid #ffd700 !important;
  }
`;

export const AboutImage = styled.img`
  border-radius: 5px !important;
  margin-bottom: 20px;
  filter: brightness(0.4);
  width: 90%;
  object-fit: cover;
  aspect-ratio: 3/1.85;
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

export const AboutCardDetails = styled(CardDetails)`
  width: 90%;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 8px !important;
`;
