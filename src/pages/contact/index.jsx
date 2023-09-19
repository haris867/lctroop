import { useState } from "react";
import { Container } from "react-bootstrap";
import * as S from "../../components/commonStyles/headings";
import styled from "styled-components";
import Envelope from "../../components/envelope";
import { Helmet } from "react-helmet";

const InputContainer = styled.div`
  font-family: "N27", sans-serif;
  width: 80%;
  max-width: 500px;
`;
const ContactLabel = styled.label`
  font-size: calc(1rem + 0.4vw) !important;
`;
const ContactInput = styled.input`
  height: calc(2.5rem + 0.3vw) !important;
  border: none;
  &::placeholder {
    font-size: calc(1rem + 0.2vw) !important;
    font-family: "N27", sans-serif;
  }
  &:focus {
    outline: 2px solid #ffd700;
  }
`;
const MessageInput = styled.textarea`
  min-height: calc(6.5rem + 1.7vw) !important;
  max-height: calc(6.5rem + 20vw) !important;
  border: none;
  resize: vertical;
  &::placeholder {
    font-size: calc(1rem + 0.2vw) !important;
    font-family: "N27", sans-serif;
  }
  &:focus {
    outline: 2px solid #ffd700;
  }
`;

const ContactButton = styled.button`
  font-size: calc(1rem + 0.3vw) !important;
  border-radius: 5px;
  color: #131313;
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

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the mailto link
    const mailtoLink = `mailto:lctroopent@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    // Open the user's email client
    window.location.href = mailtoLink;
  };
  return (
    <div className="fade-in">
      <Helmet>
        <title>LC Troop | Contact</title>
      </Helmet>
      <div className="d-flex justify-content-center mb-3">
        <S.Heading className="d-flex justify-content-center align-items-center pt-3 fs-2">
          <span className="glow me-2">-</span>CONTACT US
          <span className="glow ms-2">-</span>
        </S.Heading>
      </div>
      <div>
        <Envelope />
      </div>
      <Container className="mt-3">
        <form onSubmit={handleSubmit}>
          <InputContainer className="d-flex flex-column mx-auto mb-3">
            <ContactLabel className="my-2" htmlFor="subject">
              SUBJECT
            </ContactLabel>
            <ContactInput
              className="ps-2"
              type="text"
              id="subject"
              name="subject"
              placeholder="Your subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </InputContainer>
          {/* <InputContainer className="d-flex flex-column mx-auto">
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
        </InputContainer> */}
          <InputContainer className="d-flex flex-column mx-auto mb-3">
            <ContactLabel className="my-2" htmlFor="message">
              MESSAGE
            </ContactLabel>
            <MessageInput
              className="ps-2 mb-3"
              id="message"
              name="message"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </InputContainer>
          <div className="d-flex justify-content-center">
            <ContactButton type="submit">SUBMIT</ContactButton>
          </div>
        </form>
      </Container>
    </div>
  );
}
