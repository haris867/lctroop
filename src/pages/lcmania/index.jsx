import { Col, Container, Row } from "react-bootstrap";
import * as S from "../../components/commonStyles/headings";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ChaoticOrbit } from "@uiball/loaders";
import useGetData from "../../hooks/api/getData";
import { useState } from "react";
import {
  PiSpeakerSimpleHighBold,
  PiSpeakerSimpleSlashBold,
} from "react-icons/pi";
import Carousel from "react-bootstrap/Carousel";
import StarryBackground from "../../components/stars";
import { Helmet } from "react-helmet";

const CardImage = styled.img`
  border: none;
  width: 100%;
  object-fit: cover;
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

export default function SingleLcMania() {
  let { id } = useParams();
  const singleArticleUrl = `https://ft6jmh4l.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22lcmania%22+%26%26+_id+%3D%3D+%22${id}%22%5D%7B%0A++%22title%22%3A+title%2C%0A++%22id%22%3A+_id%2C%0A++%22created%22%3A+_createdAt%2C%0A++%22mainImageUrl%22%3A+mainImage.asset-%3Eurl%2C%0A++%22paragraph1%22%3A+paragraph1%2C%0A++%22paragraph2%22%3A+paragraph2%2C%0A++%22paragraph3%22%3A+paragraph3%2C%0A++%22video1Url%22%3A+video1.asset-%3Eurl%2C%0A++%22image1Url%22%3A+image1.asset-%3Eurl%2C%0A++%22slideshow1%22%3A+slideshow1%5B%5D%7B+%22url%22%3A+asset-%3Eurl%2C+%22key%22%3A+_key+%7D%2C%0A++%22paragraph4%22%3A+paragraph4%2C%0A++%22paragraph5%22%3A+paragraph5%2C%0A++%22paragraph6%22%3A+paragraph6%2C%0A++%22video2Url%22%3A+video2.asset-%3Eurl%2C%0A++%22image2Url%22%3A+image2.asset-%3Eurl%2C%0A++%22slideshow2%22%3A+slideshow2%5B%5D%7B+%22url%22%3A+asset-%3Eurl+%7D%2C%0A++%22paragraph7%22%3A+paragraph7%2C%0A++%22paragraph8%22%3A+paragraph8%2C%0A++%22paragraph9%22%3A+paragraph9%0A%7D`;
  const { data, isFetchLoading, isFetchError } = useGetData(singleArticleUrl);
  const article = data[0];

  const [isMuted1, setIsMuted1] = useState(true);
  const toggleMute1 = () => {
    setIsMuted1(!isMuted1);
  };
  const [isMuted2, setIsMuted2] = useState(true);
  const toggleMute2 = () => {
    setIsMuted2(!isMuted2);
  };

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
          <title>LC Troop | LCMANIA {article.title}</title>
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
                  LCMANIA {article.title}
                  <span className="glow ms-2">-</span>
                </S.Heading>
              </div>
              {article.mainImageUrl && (
                <CardImage
                  className="my-4"
                  src={article.mainImageUrl}
                  alt={`Image of ${article.title}`}
                />
              )}

              {article.paragraph1 && (
                <CardDetails className="px-0 my-4">
                  <CardDetailsTextContainer className="px-3 pt-2 pb-1">
                    <p>{article.paragraph1}</p>
                    <p>{article.paragraph2}</p>
                    <p>{article.paragraph3}</p>
                  </CardDetailsTextContainer>
                </CardDetails>
              )}
              {article.video1Url && (
                <div
                  className="video-container cursor-pointer p-0 mt-4"
                  onClick={toggleMute1}
                >
                  <video
                    autoPlay
                    playsInline
                    loop
                    muted={isMuted1}
                    className="w-100"
                    src={article.video1Url}
                    alt={`Video from ${article.title}`}
                  />
                  <div className="d-flex justify-content-end position-relative video-speaker-icon">
                    {isMuted1 ? (
                      <PiSpeakerSimpleSlashBold />
                    ) : (
                      <PiSpeakerSimpleHighBold />
                    )}
                  </div>
                </div>
              )}
              {article.slideshow1 && (
                <Carousel className="p-0 mt-4 mb-5 article-carousel">
                  {article.slideshow1.map((slide, index) => (
                    <Carousel.Item key={slide.key}>
                      <div className="d-flex justify-content-center">
                        <Col xs={12}>
                          <img
                            src={slide.url}
                            alt={`Slide for LCMANIA ${article.title} #${slide.key}`}
                          />
                        </Col>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}
              {article.image1Url && (
                <CardImage
                  className="my4"
                  src={article.image1Url}
                  alt={`LCMANIA ${article.title}`}
                />
              )}
              {article.paragraph4 && (
                <CardDetails className="px-0 my-4">
                  <CardDetailsTextContainer className="px-3 pt-2 pb-1">
                    <p>{article.paragraph4}</p>
                    <p>{article.paragraph5}</p>
                    <p>{article.paragraph6}</p>
                  </CardDetailsTextContainer>
                </CardDetails>
              )}
              {article.video2Url && (
                <div
                  className="video-container cursor-pointer p-0 mt-4"
                  onClick={toggleMute2}
                >
                  <video
                    autoPlay
                    playsInline
                    loop
                    muted={isMuted2}
                    className="w-100"
                    src={article.video1Url}
                    alt={`Video from ${article.title}`}
                  />
                  <div className="d-flex justify-content-end position-relative video-speaker-icon">
                    {isMuted2 ? (
                      <PiSpeakerSimpleSlashBold />
                    ) : (
                      <PiSpeakerSimpleHighBold />
                    )}
                  </div>
                </div>
              )}
              {article.slideshow2 && (
                <Carousel className="p-0 mt-4 mb-5 article-carousel">
                  {article.slideshow1.map((slide) => (
                    <Carousel.Item key={slide.key}>
                      <div className="d-flex justify-content-center">
                        <Col xs={12}>
                          <img
                            src={slide.url}
                            alt={`Slide for LCMANIA ${article.title} #${slide.key}`}
                          />
                        </Col>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              )}
              {article.image2Url && (
                <CardImage
                  className="my-4"
                  src={article.image2Url}
                  alt={`Image from ${article.title}`}
                />
              )}
              {article.paragraph7 && (
                <CardDetails className="px-0 my-4">
                  <CardDetailsTextContainer className="px-3 pt-2 pb-1">
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
