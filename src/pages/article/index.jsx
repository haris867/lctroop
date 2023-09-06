import { Col, Container, Row } from "react-bootstrap";
import * as S from "../../components/commonStyles/headings";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ChaoticOrbit } from "@uiball/loaders";
import useGetData from "../../hooks/api/getData";
import StarryBackground from "../../components/stars";
import { Helmet } from "react-helmet";

const ExternalLink = styled.a`
  color: #fff;
  font-family: "N27", sans-serif;
  text-decoration: underline solid 1px #ffd700 !important;
  &:hover {
    font-weight: bold;
  }
`;

const CardImage = styled.img`
  border: none;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 3/2;
  border-radius: 5px;
  padding: 0;
`;

export const CardDetails = styled.div`
  color: #131313;
  background-color: #fff;
  border-radius: 5px;
`;
export const CardDetailsTextContainer = styled.div`
  background-color: rgba(255, 215, 0, 0.5);
  border-radius: 5px;
  font-family: "N27", sans-serif;
  font-size: calc(1rem + 0.2vw) !important;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 8px !important;
`;

export default function Article() {
  let { id } = useParams();
  const singleArticleUrl = `https://ft6jmh4l.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22latest%22+%26%26+_id+%3D%3D+%22${id}%22%5D%7B%0A++%22title%22%3A+title%2C%0A++%22id%22%3A+_id%2C%0A++%22subheading%22%3A+subheading%2C%0A++%22linkTitle%22%3A+linkTitle%2C%0A++%22linkUrl%22%3A+linkUrl%2C%0A++%22created%22%3A+_createdAt%2C%0A++%22mainImageUrl%22%3A+mainImage.asset-%3Eurl%2C%0A++%22paragraph1%22%3A+paragraph1%2C%0A++%22paragraph2%22%3A+paragraph2%2C%0A++%22paragraph3%22%3A+paragraph3%2C%0A++%22image1Url%22%3A+image1.asset-%3Eurl%2C%0A++%22paragraph4%22%3A+paragraph4%2C%0A++%22paragraph5%22%3A+paragraph5%2C%0A++%22paragraph6%22%3A+paragraph6%2C%0A++%22image2Url%22%3A+image2.asset-%3Eurl%2C%0A++%22paragraph7%22%3A+paragraph7%2C%0A++%22paragraph8%22%3A+paragraph8%2C%0A++%22paragraph9%22%3A+paragraph9%0A%7D`;
  const { data, isFetchLoading, isFetchError } = useGetData(singleArticleUrl);
  const article = data[0];
  if (isFetchLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <ChaoticOrbit color="#ffd700" size={100} />
      </div>
    );
  }
  if (isFetchError || !data)
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <S.SubHeading>
          Something went wrong. Please try again later.
        </S.SubHeading>
      </div>
    );
  if (article) {
    return (
      <>
        <StarryBackground />
        <Helmet>
          <title>LC Troop | {article.title}</title>
        </Helmet>
        <Container className="mt-4 fade-in">
          <Col
            xs={9}
            sm={9}
            md={7}
            lg={6}
            xl={5}
            className="d-flex justify-content-center flex-column mb-3 mx-auto"
          >
            <Row className="justify-content-center">
              <div className="d-flex justify-content-center">
                <S.Heading className="d-flex justify-content-center align-items-center mb-3 fs-2">
                  <span className="glow me-2">-</span>
                  {article.title}
                  <span className="glow ms-2">-</span>
                </S.Heading>
              </div>
              {article.subheading && (
                <div className="d-flex justify-content-center">
                  <S.SubHeading className="d-flex justify-content-center align-items-center mb-4 fs-5 text-center mt-2 border-0">
                    {article.subheading}
                  </S.SubHeading>
                </div>
              )}
              {article.linkUrl && (
                <ExternalLink
                  className="text-decoration-none pb-3 text-center"
                  href={article.linkUrl}
                >
                  {article.linkTitle}
                </ExternalLink>
              )}
              {article.mainImageUrl && (
                <CardImage
                  className="mb-3"
                  src={article.mainImageUrl}
                  alt={`Image of ${article.title}`}
                />
              )}

              {article.paragraph1 && (
                <CardDetails className="px-0 mt-3 mb-5">
                  <CardDetailsTextContainer className="p-3">
                    <p>{article.paragraph1}</p>
                    <p>{article.paragraph2}</p>
                    <p>{article.paragraph3}</p>
                  </CardDetailsTextContainer>
                </CardDetails>
              )}
              {article.image1Url && (
                <CardImage
                  className="mb-3"
                  src={article.image1Url}
                  alt={`Image from ${article.title}`}
                />
              )}
              {article.paragraph4 && (
                <CardDetails className="px-0 mt-3 mb-5">
                  <CardDetailsTextContainer className="p-3">
                    <p>{article.paragraph4}</p>
                    <p>{article.paragraph5}</p>
                    <p>{article.paragraph6}</p>
                  </CardDetailsTextContainer>
                </CardDetails>
              )}
              {article.image2Url && (
                <CardImage
                  className="mb-3"
                  src={article.image2Url}
                  alt={`Image from ${article.title}`}
                />
              )}
              {article.paragraph7 && (
                <CardDetails className="px-0 mt-3 mb-5">
                  <CardDetailsTextContainer className="p-3">
                    <p>{article.paragraph7}</p>
                    <p>{article.paragraph8}</p>
                    <p>{article.paragraph9}</p>
                  </CardDetailsTextContainer>
                </CardDetails>
              )}
            </Row>
          </Col>
        </Container>
      </>
    );
  }
}
