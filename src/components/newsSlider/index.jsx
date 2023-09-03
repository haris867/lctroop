import Carousel from "react-bootstrap/Carousel";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SubHeading } from "../commonStyles/headings";

export default function NewsSlider() {
  return (
    <Col xs={12} xl={6} className="p-0 mt-3">
      <Col className="mx-auto mb-3" xs={8} md={6} lg={6} xl={9} xxl={7}>
        <SubHeading>LATEST</SubHeading>
      </Col>
      <Carousel>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <Col xs={8} md={6} lg={6} xl={9} xxl={7}>
              <Link to="/news">
                <img
                  src="https://cdn.sanity.io/images/ft6jmh4l/production/d500097a55e2e9aea5c8b2fc93d574b8a18285d2-2440x1828.jpg"
                  text="First slide"
                />
                <Carousel.Caption>
                  <h3>LCMANIA</h3>
                </Carousel.Caption>
              </Link>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <Col xs={8} md={6} lg={6} xl={9} xxl={7}>
              <Link to="/news2">
                <img
                  src="https://cdn.sanity.io/images/ft6jmh4l/production/d500097a55e2e9aea5c8b2fc93d574b8a18285d2-2440x1828.jpg"
                  text="Second slide"
                />
                <Carousel.Caption>
                  <h3>Upcoming shows</h3>
                </Carousel.Caption>
              </Link>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <Col xs={8} md={6} lg={6} xl={9} xxl={7}>
              <Link to="/news3">
                <img
                  src="https://cdn.sanity.io/images/ft6jmh4l/production/d500097a55e2e9aea5c8b2fc93d574b8a18285d2-2440x1828.jpg"
                  text="Third slide"
                />
                <Carousel.Caption>
                  <h3>Studio</h3>
                </Carousel.Caption>
              </Link>
            </Col>
          </div>
        </Carousel.Item>
      </Carousel>
    </Col>
  );
}
