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
import { useDispatch } from 'react-redux';
import { SearchRequestaction } from './Store/action';

function Header(props) {
  const { t } = props;
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "black",
        //Khoilr
      }}
    />
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [size, setSize] = useState('large');
  // const onSearch = (value) => dispatch(SearchRequestaction(value)); 
  const onSearch = (value) => {
    if (value !== null || value !== undefined || value !== "") {
      navigate(`/products/${value}`);
}};
  //Api
  // const GetProduct = () => {
  //   const MainProduct = [];
  //   const SuggestProducts = [];
  //   var tempListStr = "";

  //   for (let i = 0; i < allActivities.length; i++) {
  //     MainProduct.push({
  //       key: i + 1,
  //       Activity_EN: allActivities[i].Activity_EN,
  //       Categorize_EN: allActivities[i].Categorize_EN,
  //       Priority: allActivities[i].Priority,
  //       Price: allActivities[i].Price,
  //       PriorityOrder: allActivities[i].PriorityOrder,
  //       Code: allActivities[i].Code
  //     });
  //     if (allActivities[i][selectedPackage.label] == "Yes") {
  //       SuggestProducts.push(i + 1);
  //       tempListStr = tempListStr + allActivities[i].Code + ",";
  //     }
  //   }
  //   setActivitiesData(MainProduct);
  //   setSelectedRows(SuggestProducts);
  //   setListStr(tempListStr)
  // };

  return (
    <div className="landingpage-header">
      <Row gutter={[16, 24]}>


        <Col className="gutter-row searchbar" span={24}>
          <div>
            <Search
              placeholder="Input product's serial number"
              enterButton="Search"
              size="large"
              suffix={suffix}
              onSearch={onSearch}
            />
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
