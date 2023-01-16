import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../index";
import "./styles.css";
import { Col, Row } from "antd";
import Pic1 from "../../assets/Pictures/coffee1.jpg";
import Pic2 from "../../assets/Pictures/coffee2.jpg";
import product1 from "../../assets/Pictures/product1.jpg";
import product2 from "../../assets/Pictures/product2.jpg";
import product3 from "../../assets/Pictures/product3.jpg";
import product4 from "../../assets/Pictures/product4.jpg";
import Search from "antd/es/input/Search";

function PricingTable(props) {
  const { data, t } = props;
  const navigate = useNavigate();
  const handleNavigateDayCare = () => {
    navigate("/daycare")
  }

  return (
    <div className="pricing">
      {/* <div className="pricing-card_container">
        {data.map((item, index) => {
          return (
            <div className="pricing-card">
              <h3>{t(item.title)}</h3>
              <span className="bar"></span>
              <p className="btc">{item.price}</p>
              {item.service.map((elements, _index) => {
                return <p>{t(elements)}</p>;
              })}
              <NavLink to="/test">
                <Button btnName={t("bookingNow")} />
              </NavLink>
            </div>
          );
        })}
      </div>  */}
      <Row gutter={[16, 24]} className="content">
        <Col className="gutter-row row1" span={24} >
          <Row gutter={[8, 8]} className="container">
            <Col xs={24} sm={12} md={12} className="left" >
              <img src={Pic1} alt="pic1" />
            </Col>
            <Col xs={24} sm={12} md={12} className="right">
              <Row gutter={[16, 24]} className="right1">
                <Col className="gutter-row pic2" span={24} >
                  <img src={Pic2} alt="pic2" />
                </Col>
                <Col className="gutter-row" span={24}>
                  <div className="p">Life is better when you start your day with the right cup.</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="gutter-row row2" span={24} >
          <Row gutter={[16, 24]} className="product">
            <Col className="gutter-row slogan1" span={24} >
              <div>Made for You</div>
            </Col>
            <Col className="gutter-row slogan2" span={24} >
              <div>Our variants are made to fit your lifestyle</div>
            </Col>
            <Col className="gutter-row searchbar" span={24} >
              <div>
                <Search
                  placeholder="Find your product"
                  onSearch={handleNavigateDayCare}
                  style={{
                    width: 300
                  }} />
              </div>
            </Col>
            <Col className="gutter-row productlist" span={24} >
              <Row gutter={[16, 24]} className="productarea">
                <Col className="gutter-row product1" span={6} >
                  <div>
                    <Row gutter={[16, 24]} className="product1info">
                      <Col className="gutter-row product1-1" span={24} >
                        <div className="productname">Drainer</div>
                      </Col>
                      <Col className="gutter-row product1-2" span={24} >
                        <div className="productsize">Various sizes</div>
                      </Col>
                      <Col className="gutter-row product1-3" span={24} >
                        <div className="productprice">Various prices</div>
                      </Col>
                      <Col className="gutter-row product1-4" span={24} >
                        <div className="productpic">
                          <img src={product1} alt="product1" />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="gutter-row product2" span={6} >
                  <div>
                    <Row gutter={[16, 24]} className="product2info">
                      <Col className="gutter-row product2-1" span={24} >
                        <div className="productname">Coffee mill</div>
                      </Col>
                      <Col className="gutter-row product2-2" span={24} >
                        <div className="productsize">Various sizes</div>
                      </Col>
                      <Col className="gutter-row product2-3" span={24} >
                        <div className="productprice">Various prices</div>
                      </Col>
                      <Col className="gutter-row product2-4" span={24} >
                        <div className="productpic">
                          <img src={product2} alt="product2" />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="gutter-row product3" span={6} >
                  <div>
                    <Row gutter={[16, 24]} className="product3info">
                      <Col className="gutter-row product3-1" span={24} >
                        <div className="productname">Coffee filter</div>
                      </Col>
                      <Col className="gutter-row product3-2" span={24} >
                        <div className="productsize">Various sizes</div>
                      </Col>
                      <Col className="gutter-row product3-3" span={24} >
                        <div className="productprice">Various prices</div>
                      </Col>
                      <Col className="gutter-row product3-4" span={24} >
                        <div className="productpic">
                          <img src={product3} alt="product3" />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col className="gutter-row product4" span={6} >
                  <div>
                    <Row gutter={[16, 24]} className="product4info">
                      <Col className="gutter-row product4-1" span={24} >
                        <div className="productname">Coffee</div>
                      </Col>
                      <Col className="gutter-row product4-2" span={24} >
                        <div className="productsize">Various sizes</div>
                      </Col>
                      <Col className="gutter-row product4-3" span={24} >
                        <div className="productprice">Various prices</div>
                      </Col>
                      <Col className="gutter-row product4-4" span={24} >
                        <div className="product4-4">
                          <img src={product4} alt="product4" />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

    </div>
  );
}

export default withTranslation()(PricingTable);
