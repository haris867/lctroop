import { Col, Container, Row } from "react-bootstrap";
import * as S from "../../components/commonStyles/headings";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useGetData from "../../hooks/api/getData";
import { fetchUrl } from "../../utils/constants";
import { ChaoticOrbit } from "@uiball/loaders";
import StarryBackground from "../../components/stars";
import { Helmet } from "react-helmet";

const CreatorsSection = styled(Row)`
  gap: 10px;
`;

const Card = styled(Col)`
  transform: scale(1);
  transition: transform 0.4s ease-in;
  &:hover {
    transform: scale(1.05);
    border: none;
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  border: none;
`;

const CardImage = styled.img`
  border: none;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  border-radius: 5px 5px 0 0;
`;

const CardDetails = styled.div`
  color: #000;
  font-family: "N27", sans-serif;
  border: none;
  border-radius: 0 0 5px 5px;
  background: linear-gradient(transparent, white 25%);
  position: relative;
  bottom: 34px;
`;
const SectionHeading = styled.h2`
  color: #fff;
  font-family: "Lao MN", sans-serif;
  border-bottom: 3px solid #ffd700;
  display: inline-block !important;
`;

export default function Creators() {
  const { data, isFetchLoading, isFetchError } = useGetData(fetchUrl);

  if (isFetchLoading || !data.categories || !data.creators) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <ChaoticOrbit color="#ffd700" size={100} />
      </div>
    );
  }
  if (isFetchError || !data) return <div>Error loading data.</div>;
  const { categories, creators } = data;
  console.log(data);
  console.log(creators);
  console.log(categories);
  return (
    <>
      <StarryBackground />
      <Container className="fade-in">
        <div className="d-flex justify-content-center">
          <S.Heading className="d-flex justify-content-center align-items-center pt-3 fs-2">
            <span className="glow me-2">-</span>OUR CREATORS
            <span className="glow ms-2">-</span>
          </S.Heading>
        </div>
        {categories.map((category) => {
          const filteredCreators = creators.filter(
            (creator) =>
              creator.category && creator.category._id === category._id
          );
          if (filteredCreators.length === 0) return null;

          return (
            <CreatorsSection className="py-3" key={category._id}>
              <Helmet>
                <title>LC Troop | Creators</title>
              </Helmet>
              <div className="d-flex justify-content-center">
                <SectionHeading className="d-flex justify-content-center align-items-center mb-4 fs-3">
                  {category.category.toUpperCase()}
                </SectionHeading>
              </div>
              {filteredCreators.map((creator) => (
                <Card
                  xs={9}
                  sm={8}
                  md={6}
                  lg={4}
                  xl={3}
                  className="d-flex justify-content-center flex-column mb-3 mx-auto"
                  key={creator._id}
                >
                  <CardLink to={`/creator/${creator._id}`}>
                    <div>
                      <CardImage src={creator.imageUrl} alt="" />
                      <CardDetails className="w-100 text-center pt-3 pb-1">
                        <h2 className="pt-4 fs-3">{creator.name}</h2>
                        <h3 className="fs-4">{creator.occupation}</h3>
                      </CardDetails>
                    </div>
                  </CardLink>
                </Card>
              ))}
            </CreatorsSection>
          );
        })}
      </Container>
    </>
  );
}
