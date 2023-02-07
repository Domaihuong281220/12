import React from "react";
import "./styles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Button, Radio, Space, Divider } from 'antd';
import { withTranslation } from "react-i18next";
import { Col, Row } from "antd";

function Footer(props) {
  const { t } = props;

  return (
    <div className="footer">
      <Row gutter={[16, 24]} className="footer-content">
        <Col className="gutter-row footer-row1" span={24} >
          <div></div>
        </Col>
        <Col className="gutter-row footer-row2" span={24} >
          <div></div>
        </Col>
        <Col className="gutter-row footer-row3" span={24} >
          {/* <Button>Contact us</Button> */}
        </Col>
        <Col className="gutter-row footer-row4" span={24} >
          <div>(04) 298 3985 2092</div>
          <div>+76 209 1092 4095</div>
          <div>info@mollysrestaurant.com</div>
          {/* <Button>Contact us</Button> */}
        </Col>
      </Row>
    </div>
  );
}

export default withTranslation()(Footer);
