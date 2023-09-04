import * as St from "../../components/commonStyles/headings";
import Speaker from "../../components/speaker";
import { CardDetails, CardDetailsTextContainer } from "../creator";
import * as S from "./index.styles";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { SubHeading } from "../home/index.styles";
import { Link } from "react-router-dom";

const AboutCardDetails = styled(CardDetails)`
  width: 90%;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 8px !important;
`;

export default function About() {
  return (
    <Container className="fade-in">
      {/* <Helmet>
          <title>Bits & Bots | About</title>
        </Helmet> */}
      <div className="d-flex justify-content-center">
        <St.Heading className="d-flex justify-content-center align-items-center pt-3 fs-2">
          <span className="glow me-2">-</span>ABOUT US
          <span className="glow ms-2">-</span>
        </St.Heading>
      </div>
      <Row className="justify-content-center">
        <Col className="my-4" xs={12} sm={10} md={8} lg={6} xl={5}>
          <div className="d-flex justify-content-center align-items-center">
            <S.AboutCardTitle>OUR STORY</S.AboutCardTitle>
            <S.AboutImage src="/images/about1.jpg" />
          </div>
          <AboutCardDetails className="mx-auto mt-2">
            <CardDetailsTextContainer className="pt-2 pb-2">
              <S.AboutCardText>
                LC TROOP ENTERTAINMENT AS is a record label / collective based
                in Oslo, Norway, founded by artist Young Cisto.
              </S.AboutCardText>
              <S.AboutCardText>
                While striving to become one of the greatest entertainment
                companies worldwide, the company offers a wide range of services
                from studio access for song recording / podcast recording,
                videography, photography and much more.
              </S.AboutCardText>
            </CardDetailsTextContainer>
          </AboutCardDetails>
        </Col>
        <Col className="my-4" xs={12} sm={10} md={8} lg={6} xl={5}>
          <div className="d-flex justify-content-center align-items-center">
            <S.AboutCardTitle>OUR MISSION</S.AboutCardTitle>
            <S.AboutImage src="/images/about2.jpg" />
          </div>
          <AboutCardDetails className="mx-auto mt-2">
            <CardDetailsTextContainer className="pt-2 pb-3">
              <S.AboutCardText>
                We empower our acts with values such as excellence, integrity
                and abundance. These principals are central in our company and
                each member is pushed to their limits to obtain their own
                version of success.
              </S.AboutCardText>
              <S.AboutCardText>
                Our goal is to entertain the masses & individuals with talents
                from our roster while creating job opportunities in the society.
              </S.AboutCardText>
            </CardDetailsTextContainer>
          </AboutCardDetails>
        </Col>
        <Col
          xs={12}
          lg={6}
          xl={5}
          className="d-flex justify-content-center align-items-center p-0 mt-3"
        >
          <div className="d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-center">
              <S.Heading className="d-flex justify-content-center align-items-center position-relative">
                <span className="glow me-2">-</span>JOIN THE TROOP
                <span className="glow ms-2">-</span>
              </S.Heading>
            </div>

            <Speaker />
            <div className="d-flex justify-content-center">
              <SubHeading className="pt-3 fs-6">
                WANT US TO KEEP YOU IN THE LOOP?
              </SubHeading>
            </div>
            <Link
              to="/join"
              className="d-flex justify-content-center flex-column text-decoration-none"
            >
              <S.JoinButton className="mt-3">JOIN US</S.JoinButton>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

// <Container>
//   {/* <Helmet>
//       <title>Bits & Bots | About</title>
//     </Helmet> */}
//   <div className="d-flex justify-content-center">
//     <St.Heading className="d-flex justify-content-center align-items-center pt-3">
//       <span className="glow me-2">-</span>ABOUT US
//       <span className="glow ms-2">-</span>
//     </St.Heading>
//   </div>
//   <Col xs={12}>
//     <Col xs={12} sm={10} md={8} lg={6} xl={5}>
//       <div className="d-flex justify-content-center align-items-center">
//         <S.AboutCardTitle>OUR STORY</S.AboutCardTitle>
//         <S.AboutImage src="/images/about1.jpg" />
//       </div>
//       <S.AboutCardText>
//         Founded by artist Young Cisto. LC TROOP ENTERTAINMENT AS is a record
//         label / collective. While striving to become one of the greatest
//         entertainment companies worldwide, the company offers a wide range
//         of services from studio access for song recording / podcast
//         recording, videography, photography and much more.
//       </S.AboutCardText>
//     </Col>
//     <Col xs={12} sm={10} md={8} lg={6} xl={5}>
//       <div className="d-flex justify-content-center align-items-center">
//         <S.AboutCardTitle>OUR MISSION</S.AboutCardTitle>
//         <S.AboutImage src="/images/about2.jpg" />
//       </div>
//       <S.AboutCardText>
//         We empower our acts with values such as excellence, integrity and
//         abundance. These principals are central in our company and each
//         member is pushed to their limits to obtain their own version of
//         success. Our goal is to entertain the masses & individuals with
//         talents from our roster while creating job opportunities in the
//         society.
//       </S.AboutCardText>
//     </Col>
//   </Col>
// </Container>;
