import * as St from "../../components/commonStyles/headings";
import { CardDetails, CardDetailsTextContainer } from "../creator";
import * as S from "./index.styles";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const AboutCardDetails = styled(CardDetails)`
  width: 90%;
`;

export default function About() {
  return (
    <Container className="fade-in">
      {/* <Helmet>
          <title>Bits & Bots | About</title>
        </Helmet> */}
      <div className="d-flex justify-content-center">
        <St.Heading className="d-flex justify-content-center align-items-center pt-3">
          <span className="glow me-2">-</span>ABOUT US
          <span className="glow ms-2">-</span>
        </St.Heading>
      </div>
      <Row className="justify-content-center">
        <Col className="my-3" xs={12} sm={10} md={8} lg={6} xl={5}>
          <div className="d-flex justify-content-center align-items-center">
            <S.AboutCardTitle>OUR STORY</S.AboutCardTitle>
            <S.AboutImage src="/images/about1.jpg" />
          </div>
          <AboutCardDetails className="mx-auto">
            <CardDetailsTextContainer className="fs-5 p-3">
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
        <Col className="my-3" xs={12} sm={10} md={8} lg={6} xl={5}>
          <div className="d-flex justify-content-center align-items-center">
            <S.AboutCardTitle>OUR MISSION</S.AboutCardTitle>
            <S.AboutImage src="/images/about2.jpg" />
          </div>
          <AboutCardDetails className="mx-auto">
            <CardDetailsTextContainer className="fs-5 p-3">
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
