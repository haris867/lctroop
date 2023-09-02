import { Container } from "react-bootstrap";
import * as S from "../../components/commonStyles/headings";
import styled from "styled-components";
import Speaker from "../../components/speaker";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import useSendData from "../../hooks/api/sendData";
import { ChaoticOrbit } from "@uiball/loaders";

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

export default function Join() {
  const { register, handleSubmit, reset } = useForm();

  const { sendData, isLoading, isError } = useSendData();

  const [joinFormMessage, setJoinFormMessage] = useState(
    "GET ALL THE LATEST NEWS"
  );

  async function onJoinSubmit(contact) {
    const url =
      "https://ft6jmh4l.api.sanity.io/v2021-10-21/data/mutate/production";
    const method = "POST";
    const data = {
      mutations: [
        {
          create: {
            _type: "members",
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
          },
        },
      ],
    };

    const result = await sendData(data, url, method);

    if (result.error && result.error.length > 0) {
      setJoinFormMessage(`${result.error}: ${result.message}`);
    } else if (result) {
      reset();
      setJoinFormMessage("WE'LL KEEP YOU UP TO DATE");
    }
  }

  useEffect(() => {
    if (isLoading) {
      setJoinFormMessage("Submitting form...");
    } else if (isError) {
      setJoinFormMessage("Something went wrong. Please try again later.");
    }
  }, [isLoading, isError]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <ChaoticOrbit color="#ffd700" size={100} />
      </div>
    );
  }
  return (
    <div className="fade-in">
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
          {joinFormMessage}
        </S.SubHeading>
      </div>
      <Container className="mt-3">
        <form onSubmit={handleSubmit(onJoinSubmit)}>
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
              required={true}
              {...register("name")}
              minLength={5}
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
              required={true}
              {...register("email")}
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
              required={true}
              {...register("phone")}
              minLength="8"
            />
          </InputContainer>
          <div className="d-flex justify-content-center mt-4">
            <JoinButton type="submit">SUBSCRIBE</JoinButton>
          </div>
        </form>
      </Container>
    </div>
  );
}
