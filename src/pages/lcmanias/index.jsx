import { Container, Row } from "react-bootstrap";
import * as S from "../../components/commonStyles/headings";
import styled from "styled-components";
import useGetData from "../../hooks/api/getData";
import { ChaoticOrbit } from "@uiball/loaders";
import { Helmet } from "react-helmet";
import {
  Card,
  CardDetails,
  CardImage,
  CardLink,
} from "../../components/commonStyles/card";

const NewsContainer = styled(Row)`
  gap: 10px;
`;

export default function LcMania() {
  const LcManiaFetchUrl =
    "https://ft6jmh4l.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22lcmania%22%5D%7B%0A++%22title%22%3A+title%2C%0A++%22mainImageUrl%22%3A+mainImage.asset-%3Eurl%2C%0A++++%22id%22%3A+_id%2C%0A%7D%0A++%0A%0A";
  const { data, isFetchLoading, isFetchError } = useGetData(LcManiaFetchUrl);
  if (isFetchLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <ChaoticOrbit color="#ffd700" size={100} />
      </div>
    );
  }
  if (isFetchError || !data) return <div>Error loading data.</div>;
  return (
    <>
      <Helmet>
        <title>LC Troop | LCMANIA</title>
      </Helmet>
      <Container className="fade-in">
        <div className="d-flex justify-content-center">
          <S.Heading className="d-flex justify-content-center align-items-center pt-3 fs-2">
            <span className="glow me-2">-</span>LCMANIA
            <span className="glow ms-2">-</span>
          </S.Heading>
        </div>
        <div className="d-flex justify-content-center py-3">
          <S.SectionHeading className="d-flex justify-content-center align-items-center mb-4 fs-3">
            Our annual festival
          </S.SectionHeading>
        </div>
        <NewsContainer className="py-3">
          {data.map((article) => (
            <Card
              xs={9}
              sm={8}
              md={6}
              lg={4}
              xl={3}
              className="d-flex justify-content-center flex-column mb-3 mx-auto"
              key={article.id}
            >
              <CardLink to={`/lcmania/${article.id}`}>
                <div>
                  <CardImage src={article.mainImageUrl} alt="" />
                  <CardDetails className="w-100 text-center pt-3 pb-1">
                    <h2 className="pt-4 fs-3">{article.title}</h2>
                  </CardDetails>
                </div>
              </CardLink>
            </Card>
          ))}
        </NewsContainer>
      </Container>
    </>
  );
}
