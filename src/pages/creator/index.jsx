import { Col, Container, Row } from "react-bootstrap";
import * as S from "../../components/commonStyles/headings";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaFacebook,
  FaTiktok,
  FaSoundcloud,
} from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import useGetData from "../../hooks/api/getData";

const CardImage = styled.img`
  border: none;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  border-radius: 5px;
`;

const CardDetails = styled.div`
  color: #131313;
  background-color: #fff;
  border-radius: 5px;
`;
const CardDetailsTextContainer = styled.div`
  background-color: rgba(255, 215, 0, 0.5);
  font-family: "N27", sans-serif;
`;

const SectionHeading = styled.h2`
  color: #fff;
  font-family: "Lao MN", sans-serif;
  display: inline-block !important;
`;
const IconsContainer = styled(Row)``;
const IconLink = styled.a`
  color: #fff;
`;

const CreatorObject = {
  name: "Young Cisto",
  occupation: "Rapper",
  image: "/images/artist.png",
  id: "01",
  bio1: "Young Cisto, the Oslo-based rapper, has been redefining the Scandinavian hip-hop scene by seamlessly weaving together Afro beats and jazz undertones, creating a unique blend that both energizes and mesmerizes his audience.",
  bio2: "Cisto's music is a direct reflection of his diverse upbringing. Each track feels like an exploration, a sonic journey guided by intricate saxophone solos or drum rhythms inspired by African percussion instruments.",
  bio3: "His live performances are a spectacle. With several critically acclaimed mixtapes, and a debut album in the works, Young Cisto is set to make his mark not just in Norway but globally.",
  social: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    youtube: "https://youtube.com",
    spotify: "https://open.spotify.com/artist/71JrEJeFYDu3IM47yD7XDy",
    facebook: "https://facebook.com",
    soundcloud: "https://soundcloud.com",
    appleMusic: "",
  },
};

console.log(CreatorObject.social.instagram);

export default function Creator() {
  let { id } = useParams();
  const singleCreatorUrl = `https://ft6jmh4l.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22creators%22+%26%26+_id+%3D%3D+%22${id}%22%5D%7B%0A++name%2C%0A++occupation%2C%0A++image%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++bio1%2C%0A++bio2%2C%0A++bio3%2C%0A++social%0A%7D%5B0%5D`;
  const { data, isFetchLoading, isFetchError } = useGetData(singleCreatorUrl);

  console.log(data.name);
  if (isFetchLoading) return <div>Loading...</div>;
  if (isFetchError || !data) return <div>Error loading data.</div>;
  if (data && data.name) {
    return (
      <Container className="mt-4">
        <Col
          xs={9}
          sm={9}
          md={7}
          lg={6}
          xl={7}
          className="d-flex justify-content-center flex-column mb-3 mx-auto"
        >
          <Row className="justify-content-center">
            <Col xs={12} xl={8} xxl={6}>
              <CardImage src={data.imageUrl} alt={`Image of ${data.name}`} />
              <div className="d-flex justify-content-center">
                <S.Heading className="d-flex justify-content-center align-items-center pt-3 fs-2">
                  <span className="glow me-2">-</span>
                  {data.name.toUpperCase()}
                  <span className="glow ms-2">-</span>
                </S.Heading>
              </div>
              <div className="d-flex justify-content-center">
                <SectionHeading className="d-flex justify-content-center align-items-center mb-4 fs-4">
                  {data.occupation.toUpperCase()}
                </SectionHeading>
              </div>
            </Col>
            <Col xs={12} xl={8} xxl={6}>
              <CardDetails>
                <CardDetailsTextContainer className="fs-5 p-3">
                  <p>{data.bio1}</p>
                  <p>{data.bio2}</p>
                  <p>{data.bio3}</p>
                </CardDetailsTextContainer>
              </CardDetails>
            </Col>
          </Row>
          <IconsContainer className="mt-5">
            {data.social.instagram && (
              <Col xs={4} sm={3} md={3} lg={3} xl={2}>
                <IconLink href={`${data.social.instagram}`} target="_blank">
                  <FaInstagram className="w-100 h-100 px-3 py-3 scale-up" />
                </IconLink>
              </Col>
            )}
            {data.social.facebook && (
              <Col xs={4} sm={3} md={3} lg={3} xl={2}>
                <IconLink href={`${data.social.facebook}`} target="_blank">
                  <FaFacebook className="w-100 h-100 px-3 py-3 scale-up" />
                </IconLink>
              </Col>
            )}
            {data.social.tiktok && (
              <Col xs={4} sm={3} md={3} lg={3} xl={2}>
                <IconLink href={`${data.social.tiktok}`} target="_blank">
                  <FaTiktok className="w-100 h-100 px-3 py-3 scale-up" />
                </IconLink>
              </Col>
            )}
            {data.social.youtube && (
              <Col xs={4} sm={3} md={3} lg={3} xl={2}>
                <IconLink href={`${data.social.youtube}`} target="_blank">
                  <FaYoutube className="w-100 h-100 px-3 py-3 scale-up" />
                </IconLink>
              </Col>
            )}
            {data.social.spotify && (
              <Col xs={4} sm={3} md={3} lg={3} xl={2}>
                <IconLink href={`${data.social.spotify}`} target="_blank">
                  <FaSpotify className="w-100 h-100 px-3 py-3 scale-up" />
                </IconLink>
              </Col>
            )}
            {data.social.appleMusic && (
              <Col xs={4} sm={3} md={3} lg={3} xl={2}>
                <IconLink href={`${data.social.appleMusic}`} target="_blank">
                  <SiApplemusic className="w-100 h-100 px-3 py-3 scale-up" />
                </IconLink>
              </Col>
            )}
            {data.social.soundcloud && (
              <Col xs={4} sm={3} md={3} lg={3} xl={2}>
                <IconLink href={`${data.social.soundcloud}`} target="_blank">
                  <FaSoundcloud className="w-100 h-100 px-3 py-3 scale-up" />
                </IconLink>
              </Col>
            )}
            {/* {data.social.twitter && (
              <Col xs={4} sm={3} md={3} lg={3}>
                <IconLink href={`${data.social.twitter}`} target="_blank">
                  <img
                    src="/images/twitter.png"
                    alt="Twitter"
                    className="w-100 h-100 px-3 py-3 scale-up"
                  />
                </IconLink>
              </Col>
            )} */}
          </IconsContainer>
        </Col>
      </Container>
    );
  }
}
