import { Col, Container, Row } from "react-bootstrap";
import * as S from "../../components/commonStyles/headings";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useGetData from "../../hooks/api/getData";
import { fetchUrlNews } from "../../utils/constants";
import { ChaoticOrbit } from "@uiball/loaders";

const NewsContainer = styled(Row)`
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

export default function News() {
  const { data, isFetchLoading, isFetchError } = useGetData(fetchUrlNews);

  if (isFetchLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <ChaoticOrbit color="#ffd700" size={100} />
      </div>
    );
  }
  if (isFetchError || !data) return <div>Error loading data.</div>;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = String(date.getFullYear()).substring(2);
    return `${day}/${month}/${year}`;
  };
  return (
    <Container className="fade-in">
      <div className="d-flex justify-content-center">
        <S.Heading className="d-flex justify-content-center align-items-center pt-3 fs-2">
          <span className="glow me-2">-</span>NEWS
          <span className="glow ms-2">-</span>
        </S.Heading>
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
            <CardLink to={`/article/${article.id}`}>
              <div>
                <CardImage src={article.mainImageUrl} alt="" />
                <CardDetails className="w-100 text-center pt-3 pb-1">
                  <h2 className="pt-4 fs-3">{article.title}</h2>
                  <h3 className="fs-6 mx-2">{formatDate(article.created)}</h3>
                </CardDetails>
              </div>
            </CardLink>
          </Card>
        ))}
      </NewsContainer>
    </Container>
  );
}
