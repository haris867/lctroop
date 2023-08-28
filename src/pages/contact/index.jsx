import { Container } from "react-bootstrap";
import * as S from "../../components/commonStyles/headings";
import styled from "styled-components";

const InputContainer = styled.div`
  font-family: "Lao MN", sans-serif;
  width: 80%;
  margin: 20px auto;
  max-width: 550px;
`;
const ContactLabel = styled.label`
  font-size: calc(1rem + 0.5vw) !important;
`;
const SubjectInput = styled.input`
  min-height: calc(2.5rem + 0.7vw) !important;
  max-height: calc(2.5rem + 0.7vw) !important;
  border: none;
  &::placeholder {
    font-size: calc(1rem + 0.5vw) !important;
  }
  &:focus {
    outline: 2px solid #ffd700;
  }
`;
const MessageInput = styled.textarea`
  height: calc(6.5rem + 1.7vw) !important;
  border: none;
  &::placeholder {
    font-size: calc(1rem + 0.5vw) !important;
  }
  &:focus {
    outline: 2px solid #ffd700;
  }
`;
const ContactButton = styled.button`
  height: 38px;
  max-width: 180px;
  padding: 0 60px;
  font-size: calc(0.9rem + 0.1vw);
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

export default function Contact() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <S.Heading className="d-flex justify-content-center align-items-center position-absolute pt-3">
          <span className="glow me-2">-</span>CONTACT US
          <span className="glow ms-2">-</span>
        </S.Heading>
      </div>
      <Container className="mt-3">
        <InputContainer className="d-flex flex-column">
          <ContactLabel htmlFor="subject">SUBJECT</ContactLabel>
          <SubjectInput
            type="text"
            id="subject"
            name="subject"
            placeholder="Your subject"
          />
        </InputContainer>
        <InputContainer className="d-flex flex-column">
          <ContactLabel htmlFor="message">MESSAGE</ContactLabel>
          <MessageInput
            id="message"
            name="message"
            placeholder="Your message"
          />
        </InputContainer>
        <div className="d-flex justify-content-center">
          <ContactButton>SUBMIT</ContactButton>
        </div>
      </Container>
    </div>
  );
}
