import Carousel from "react-bootstrap/Carousel";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SubHeading } from "../commonStyles/headings";
import useGetData from "../../hooks/api/getData";
import { fetchUrlNews } from "../../utils/constants";
import { ChaoticOrbit } from "@uiball/loaders";
import styled from "styled-components";

const NewsLink = styled(Link)`
  color: #fff;
  font-family: "N27", sans-serif;
  text-decoration: unset;
  &:hover {
    text-decoration: underline solid 1px #ffd700 !important;
  }
`;

export default function NewsSlider() {
  const { data, isFetchLoading, isFetchError } = useGetData(fetchUrlNews);
  if (isFetchLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <ChaoticOrbit color="#ffd700" size={100} />
      </div>
    );
  }
  if (isFetchError || !data) return <div>Error loading data.</div>;

  console.log(data);
  const sortedData = data
    .sort((a, b) => new Date(b.created) - new Date(a.created))
    .slice(0, 3);

  return (
    <Col xs={12} lg={6} xl={5} className="p-0 my-4">
      <Col
        className="mx-auto mb-3 d-flex justify-content-between"
        xs={8}
        md={6}
        lg={6}
        xl={9}
        xxl={7}
      >
        <SubHeading className="my-auto">LATEST</SubHeading>
        <NewsLink className="my-auto fs-5" to="/latest">
          See all
        </NewsLink>
      </Col>
      <Carousel>
        {sortedData.map((article) => (
          <Carousel.Item key={article.id}>
            <div className="d-flex justify-content-center">
              <Col xs={8} md={6} lg={6} xl={9} xxl={7}>
                <Link to={`/article/${article.id}`}>
                  <img
                    src={article.mainImageUrl}
                    alt={`Slide ${article.title} #${article.id}`}
                  />
                  <Carousel.Caption>
                    <h3 className="m-0">{article.title}</h3>
                  </Carousel.Caption>
                </Link>
              </Col>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Col>
  );
}
