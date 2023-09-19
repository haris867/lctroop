import { Container, Row } from "react-bootstrap";
import * as S from "../../components/commonStyles/headings";
import styled from "styled-components";
import useGetData from "../../hooks/api/getData";
import { fetchUrlNews } from "../../utils/constants";
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

export default function Latest() {
  const { data, isFetchLoading, isFetchError } = useGetData(fetchUrlNews);
  if (isFetchLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <ChaoticOrbit color="#ffd700" size={100} />
      </div>
    );
  }
  if (isFetchError || !data) return <div>Error loading data.</div>;

  const sortedData = [...data].sort(
    (a, b) => new Date(b.updated) - new Date(a.updated)
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = String(date.getFullYear()).substring(2);
    return `${day}/${month}/${year}`;
  };
  return (
    <>
      <Helmet>
        <title>LC Troop | Latest</title>
      </Helmet>
      <Container className="fade-in">
        <div className="d-flex justify-content-center">
          <S.Heading className="d-flex justify-content-center align-items-center pt-3 fs-2">
            <span className="glow me-2">-</span>LATEST
            <span className="glow ms-2">-</span>
          </S.Heading>
        </div>
        <NewsContainer className="py-3">
          {sortedData.map((article) => (
            <Card
              xs={9}
              sm={8}
              md={6}
              lg={4}
              xl={3}
              className="d-flex justify-content-center flex-column mb-3 mx-auto"
              key={article.id}
            >
              {article.title === "Our studio" ? (
                <a
                  href="http://www.lcmusicstudios.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <div>
                    <CardImage src={article.mainImageUrl} alt="" />
                    <CardDetails className="w-100 text-center pt-3 pb-1">
                      <h2 className="pt-4 fs-3 pb-2">{article.title}</h2>
                    </CardDetails>
                  </div>
                </a>
              ) : (
                <CardLink to={`/article/${article.id}`}>
                  <div>
                    <CardImage src={article.mainImageUrl} alt="" />
                    <CardDetails className="w-100 text-center pt-3 pb-1">
                      <h2 className="pt-4 fs-3">{article.title}</h2>
                      <h3 className="fs-6 mx-2">
                        {formatDate(article.created)}
                      </h3>
                    </CardDetails>
                  </div>
                </CardLink>
              )}
            </Card>
          ))}
        </NewsContainer>
      </Container>
    </>
  );
}
