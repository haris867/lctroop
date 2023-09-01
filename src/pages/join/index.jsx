import { Container } from "react-bootstrap";
import * as S from "../../components/commonStyles/headings";
import styled from "styled-components";
import Speaker from "../../components/speaker";

const InputContainer = styled.div`
  font-family: "N27", sans-serif;
  width: 80%;
  max-width: 550px;
`;
const ContactLabel = styled.label`
  font-size: calc(1rem + 0.5vw) !important;
`;
const ContactInput = styled.input`
  min-height: calc(2.5rem + 0.5vw) !important;
  max-height: calc(2.5rem + 0.5vw) !important;
  border: none;
  &::placeholder {
    font-size: calc(0.9rem + 0.5vw) !important;
    font-family: "N27", sans-serif;
  }
  &:focus {
    outline: 2px solid #ffd700;
  }
`;

const JoinButton = styled.button`
  height: 38px;
  width: calc(160px + 0.5vw);
  max-width: 180px;
  font-size: calc(1rem + 0.3vw) !important;
  border-radius: 5px;
  background-color: #fff;
  border: 3px solid #ffd700;
  font-family: "N27", sans-serif;
  transform: scale(1);
  transition: transform 0.4s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;

export default function Join() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <S.Heading className="d-flex justify-content-center align-items-center pt-3">
          <span className="glow me-2">-</span>JOIN US
          <span className="glow ms-2">-</span>
        </S.Heading>
      </div>

      <div>
        <Speaker />
      </div>
      <div className="d-flex justify-content-center">
        <S.SubHeading className="d-flex justify-content-center align-items-center pt-3">
          GET ALL THE LATEST NEWS
        </S.SubHeading>
      </div>
      <Container className="mt-3">
        <InputContainer className="d-flex flex-column mx-auto my-2">
          <ContactLabel className="my-1" htmlFor="name">
            NAME
          </ContactLabel>
          <ContactInput
            className="ps-2"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
          />
        </InputContainer>
        <InputContainer className="d-flex flex-column mx-auto my-2">
          <ContactLabel className="my-1" htmlFor="email">
            EMAIL
          </ContactLabel>
          <ContactInput
            className="ps-2"
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
          />
        </InputContainer>
        <InputContainer className="d-flex flex-column mx-auto my-2">
          <ContactLabel className="my-1" htmlFor="phone">
            PHONE
          </ContactLabel>
          <ContactInput
            className="ps-2"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your phone number"
          />
        </InputContainer>
        <div className="d-flex justify-content-center mt-4">
          <JoinButton>SUBSCRIBE</JoinButton>
        </div>
      </Container>
    </div>
  );
}
