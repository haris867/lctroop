import { Container, Row } from "react-bootstrap";
import * as S from "../../components/commonStyles/headings";
import styled from "styled-components";
import useGetData from "../../hooks/api/getData";
import { fetchUrl } from "../../utils/constants";
import { ChaoticOrbit } from "@uiball/loaders";
import { Helmet } from "react-helmet";
import {
  Card,
  CardDetails,
  CardImage,
  CardLink,
} from "../../components/commonStyles/card";

const CreatorsSection = styled(Row)`
  gap: 10px;
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
  return (
    <Container className="fade-in">
      <div className="d-flex justify-content-center">
        <S.Heading className="d-flex justify-content-center align-items-center pt-3 fs-2">
          <span className="glow me-2">-</span>OUR CREATORS
          <span className="glow ms-2">-</span>
        </S.Heading>
      </div>
      {categories.map((category) => {
        const filteredCreators = creators.filter(
          (creator) => creator.category && creator.category._id === category._id
        );
        if (filteredCreators.length === 0) return null;

        return (
          <CreatorsSection className="py-3" key={category._id}>
            <Helmet>
              <title>LC Troop | Creators</title>
            </Helmet>
            <div className="d-flex justify-content-center">
              <S.SectionHeading className="d-flex justify-content-center align-items-center mb-4 fs-3">
                {category.category.toUpperCase()}
              </S.SectionHeading>
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
  );
}
