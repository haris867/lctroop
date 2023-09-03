import Carousel from "react-bootstrap/Carousel";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SubHeading } from "../commonStyles/headings";
import useGetData from "../../hooks/api/getData";
import { fetchUrlNews } from "../../utils/constants";
import { ChaoticOrbit } from "@uiball/loaders";

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
    <Col xs={12} xl={6} className="p-0 mt-3">
      <Col className="mx-auto mb-3" xs={8} md={6} lg={6} xl={9} xxl={7}>
        <SubHeading>LATEST</SubHeading>
      </Col>
      <Carousel>
        {sortedData.map((article) => (
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Col xs={8} md={6} lg={6} xl={9} xxl={7}>
                <Link to="/news">
                  <img src={article.mainImageUrl} text="Image of " />
                  <Carousel.Caption>
                    <h3>{article.title}</h3>
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
