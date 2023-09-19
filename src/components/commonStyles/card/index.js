import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Col)`
  transform: scale(1);
  transition: transform 0.4s ease-in;
  &:hover {
    transform: scale(1.05);
    border: none;
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  border: none;
`;

export const CardImage = styled.img`
  border: none;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  border-radius: 5px 5px 0 0;
`;

export const CardDetails = styled.div`
  color: #000;
  font-family: "N27", sans-serif;
  border: none;
  border-radius: 0 0 5px 5px;
  background: linear-gradient(transparent, white 25%);
  position: relative;
  bottom: 34px;
`;
