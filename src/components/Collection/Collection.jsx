import "./styles.css";
import { withTranslation } from "react-i18next";
import { Button } from "../index";
import { Col, Row } from "antd";
// import background from "../../assets/Pictures/coffee4.jpg";

function Collection(props) {
  const { heading, data, t } = props;

  return (
    <div className="collectionandsell">
      <Row gutter={[16, 24]} className="2row">
        <Col className="gutter-row collection-content" span={24} >
          <Row gutter={[16, 24]} className="collection-2row">
            <Col className="gutter-row" span={24} >
              <div className="collection-heading">Fans of Coffee Roastery</div>
            </Col>
            <Col className="gutter-row" span={24} >
              <Row gutter={[16, 24]} className="productarea">
                <Col className="gutter-row collection1" span={8} >
                  <div className="collection1-content">
                    <div className="customername">James</div>
                    <div className="customerproduct">Coffee Aficionado</div>
                    <div className="customerreview">Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.</div>
                  </div>
                </Col>
                <Col className="gutter-row collection2" span={8} >
                  <div className="collection2-content">
                    <div className="customername">Keera</div>
                    <div className="customerproduct">Coffee</div>
                    <div className="customerreview">Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.</div>
                  </div>
                </Col>
                <Col className="gutter-row collection3" span={8} >
                  <div className="collection3-content">
                    <div className="customername">Peter</div>
                    <div className="customerproduct">Entrepreneur</div>
                    <div className="customerreview">Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row" span={24} >
          <Row gutter={[16, 24]} className="productarea">
            <Col className="gutter-row collection1" span={12} >
            </Col>
            <Col className="gutter-row collection1" span={12} >
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default withTranslation()(Collection);
