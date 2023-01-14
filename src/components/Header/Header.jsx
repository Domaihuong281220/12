import "./styles.css";
import React from "react";
import { withTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Radio } from 'antd';
import { useState } from 'react';

function Header(props) {
  const { t } = props;
  const navigate = useNavigate();

  const handleNavigateDayCare = () => {
    navigate("/daycare")
  }
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "black",
      }}
    />
  );
  const [size, setSize] = useState('large');

  return (
    <div className="landingpage-header">
      <Row gutter={[16, 24]}>
        <Col className="gutter-row slogan1" span={24}>
          <div>Find your best flavor</div>
        </Col>
        <Col className="gutter-row slogan2" span={24}>
          <div>It's coffee time!</div>
        </Col>
        <Col className="gutter-row searchbar" span={24}>
          <div>
            <Search 
              placeholder="Find your product"
              onSearch={handleNavigateDayCare}
              style={{
                width: 300
              }}/>
          </div>
        </Col>
        <Col className="gutter-row brandname" span={24}>
          <div>
              Coffee Roastery
          </div>
        </Col>
        <Col className="gutter-row slogan3" span={24}>
          <div>
            Your home brew just got better.
          </div>
        </Col>
        <Col className="gutter-row headerbtn" span={24}>
          <div>
            <Button ghost>Learn more</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default withTranslation()(Header);
