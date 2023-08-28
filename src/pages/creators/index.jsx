import { Col, Container, Row } from "react-bootstrap";
import * as S from "../../components/commonStyles/headings";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CreatorsSection = styled(Row)`
  gap: 10px;
`;

const Card = styled(Col)`
  transform: scale(1);
  transition: transform 0.4s ease-in;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

const CardImage = styled.img`
  border: none;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
`;

const CardDetails = styled.div`
  color: #000;
  font-family: "N27", sans-serif;
  border: none;
  background: linear-gradient(rgba(255, 255, 255, 0), white 15%);
`;
const SectionHeading = styled.h2`
  color: #fff;
  font-family: "Lao MN", sans-serif;
  border-bottom: 3px solid #ffd700;
  display: inline-block !important;
`;

export default function Creators() {
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <S.Heading className="d-flex justify-content-center align-items-center pt-3">
          <span className="glow me-2">-</span>CREATORS
          <span className="glow ms-2">-</span>
        </S.Heading>
      </div>
      <CreatorsSection className="justify-content-between py-3">
        <div className="d-flex justify-content-center">
          <SectionHeading className="d-flex justify-content-center align-items-center mb-4">
            MUSICIANS
          </SectionHeading>
        </div>
        <Card
          xs={9}
          sm={8}
          md={6}
          lg={4}
          xl={3}
          className="d-flex justify-content-center flex-column mb-3 mx-auto"
        >
          <CardLink to="/creators">
            <CardImage src="/images/artist.png" alt="" />
            <CardDetails className="w-100 text-center mb-3 pt-3 pb-1">
              <h2>Young Cisto</h2>
              <h3>Rapper</h3>
            </CardDetails>
          </CardLink>
        </Card>
        <Card
          xs={9}
          sm={8}
          md={6}
          lg={4}
          xl={3}
          className="d-flex justify-content-center flex-column mb-3 mx-auto"
        >
          <CardLink to="/creators">
            <CardImage src="/images/about1.jpg" alt="" />
            <CardDetails className="w-100 text-center mb-3 pt-3 pb-1">
              <h2>Young Cisto</h2>
              <h3>Rapper</h3>
            </CardDetails>
          </CardLink>
        </Card>
        <Card
          xs={9}
          sm={8}
          md={6}
          lg={4}
          xl={3}
          className="d-flex justify-content-center flex-column mb-3 mx-auto"
        >
          <CardLink to="/creators">
            <CardImage src="/images/artist.png" alt="" />
            <CardDetails className="w-100 text-center mb-3 pt-3 pb-1">
              <h2>Young Cisto</h2>
              <h3>Rapper</h3>
            </CardDetails>
          </CardLink>
        </Card>
      </CreatorsSection>
      <CreatorsSection className="justify-content-center py-3">
        <div className="d-flex justify-content-center">
          <SectionHeading className="d-flex justify-content-center align-items-center mb-4">
            PHOTOGRAPHERS
          </SectionHeading>
        </div>
        <Card
          xs={9}
          sm={8}
          md={6}
          lg={4}
          xl={3}
          className="d-flex justify-content-center flex-column mb-3 mx-auto"
        >
          <CardLink to="/creators">
            <CardImage src="/images/artist.png" alt="" />
            <CardDetails className="w-100 text-center mb-3 pt-3 pb-1">
              <h2>Young Cisto</h2>
              <h3>Rapper</h3>
            </CardDetails>
          </CardLink>
        </Card>
        <Card
          xs={9}
          sm={8}
          md={6}
          lg={4}
          xl={3}
          className="d-flex justify-content-center flex-column mb-3 mx-auto"
        >
          <CardLink to="/creators">
            <CardImage src="/images/about1.jpg" alt="" />
            <CardDetails className="w-100 text-center mb-3 pt-3 pb-1">
              <h2>Young Cisto</h2>
              <h3>Rapper</h3>
            </CardDetails>
          </CardLink>
        </Card>
        <Card
          xs={9}
          sm={8}
          md={6}
          lg={4}
          xl={3}
          className="d-flex justify-content-center flex-column mb-3 mx-auto"
        >
          <CardLink to="/creators">
            <CardImage src="/images/artist.png" alt="" />
            <CardDetails className="w-100 text-center mb-3 pt-3 pb-1">
              <h2>Young Cisto</h2>
              <h3>Rapper</h3>
            </CardDetails>
          </CardLink>
        </Card>
      </CreatorsSection>
      <CreatorsSection className="justify-content-center py-3">
        <div className="d-flex justify-content-center">
          <SectionHeading className="d-flex justify-content-center align-items-center mb-4">
            MODELS
          </SectionHeading>
        </div>
        <Card
          xs={9}
          sm={8}
          md={6}
          lg={4}
          xl={3}
          className="d-flex justify-content-center flex-column mb-3 mx-auto"
        >
          <CardLink to="/creators">
            <CardImage src="/images/artist.png" alt="" />
            <CardDetails className="w-100 text-center mb-3 pt-3 pb-1">
              <h2>Young Cisto</h2>
              <h3>Rapper</h3>
            </CardDetails>
          </CardLink>
        </Card>
        <Card
          xs={9}
          sm={8}
          md={6}
          lg={4}
          xl={3}
          className="d-flex justify-content-center flex-column mb-3 mx-auto"
        >
          <CardLink to="/creators">
            <CardImage src="/images/about1.jpg" alt="" />
            <CardDetails className="w-100 text-center mb-3 pt-3 pb-1">
              <h2>Young Cisto</h2>
              <h3>Rapper</h3>
            </CardDetails>
          </CardLink>
        </Card>
        <Card
          xs={9}
          sm={8}
          md={6}
          lg={4}
          xl={3}
          className="d-flex justify-content-center flex-column mb-3 mx-auto"
        >
          <CardLink to="/creators">
            <CardImage src="/images/artist.png" alt="" />
            <CardDetails className="w-100 text-center mb-3 pt-3 pb-1">
              <h2>Young Cisto</h2>
              <h3>Rapper</h3>
            </CardDetails>
          </CardLink>
        </Card>
      </CreatorsSection>
    </Container>
  );
}
