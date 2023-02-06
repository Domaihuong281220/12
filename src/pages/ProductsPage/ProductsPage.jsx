import { Col, Row } from "antd";
import React, { useRef, useEffect, useState } from "react";
import "./style.css";
import product1 from "../../assets/Pictures/product1.jpg";
import product1_2 from "../../assets/Pictures/product1-2.jpg";
import suggest1 from "../../assets/Pictures/suggest1.png";
import suggest2 from "../../assets/Pictures/suggest2.png";
import suggest3 from "../../assets/Pictures/suggest3.png";
import { DownOutlined } from '@ant-design/icons';
import ReactImageMagnify from 'react-image-magnify';
import { AudioOutlined } from '@ant-design/icons';
import { useNavigate, useParams  } from "react-router-dom";
import type { MenuProps } from 'antd';
import { Input } from 'antd';
import { Dropdown, Space } from 'antd';
import Search from "antd/es/input/Search";
import { useDispatch, useSelector } from "react-redux";
import { SearchRequestaction } from './store/action';



function ProductsPage() {
    const { Search } = Input;
    
    const navigate = useNavigate();
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: "black",
                //Khoilr
            }}
        />
    );
    const data = [
        {
            CODE: "000000005",
            VARIETAL: "Trịnh Vân Thương",
            ALTITUDETO: "0",
            ROASTPURPOSE: "joinUs",
            ORIGIN: "Vietnam",
            GRADE: "G3",
            ALTITUDEFROM: "0",
            PROCESS: "Natural",
            BEAN: "Arabica",
            ROASTDATE: "1/10/2018 12:00:00 AM",
            DESCRIPTION: "Cafe Amaratto",
            NoteList: [
                {
                    "Description": "Nutmeg",
                    "Code": "000000032"
                },
                {
                    "Description": "Clove",
                    "Code": "000000034"
                },
                {
                    "Description": "Almond",
                    "Code": "000000026"
                },
                {
                    "Description": "Jasmine",
                    "Code": "000000019"
                },
                {
                    "Description": "Hazelnut",
                    "Code": "000000027"
                }
            ],
        },

    ];
    const suggest = [
        {
            img: suggest1,
            CODE: "000000002",
            DESCRIPTION: "suggest1",
        },
        {
            img: suggest2,
            CODE: "000000003",
            DESCRIPTION: "suggest2",
        },
        {
            img: suggest3,
            CODE: "000000004",
            DESCRIPTION: "suggest3",
        },
    ]
    const items: MenuProps['items'] = [
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="">
                    note grandpa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
            ),
            key: '0',
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="">
                    &nbsp;&nbsp;&nbsp;&nbsp;note dad &nbsp;&nbsp;&nbsp;&nbsp;
                </a>
            ),
            key: '1',
        },];

    // api

    let { id } = useParams();
    // console.log(id,"24356465646565454");
    const dispatch = useDispatch();
    
    useEffect(() => {
    console.log(id)
        dispatch(SearchRequestaction(id));
    }, []);
    const isLoadingActivities = useSelector(
        (state) => state.search.ProductInfo
    );
     console.log(isLoadingActivities, "isLoadingActivities");
    


    return (
        
        <>
            <div className="productspage">
                <Row gutter={[8, 8]} className="product-content">
                    <Col xs={24} sm={12} md={12} className="product-img" >
                        <div className="product-img1">
                            <img src={product1} alt="product1" />
                        </div>
                        <div className="product-img2">
                            <img src={product1_2} alt="product1_2" />
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={12} className="product-info">
                        {data.map((product, index) => {
                            return (
                                <div className="product_description" key={index}>
                                    <h1 classname="productname">{product.DESCRIPTION}</h1>
                                    <div className="infotables">
                                        <h2 className="productsource">source</h2>
                                        <table className="productinfo-table source-table">
                                            <tr className="productinfo-table row row1">
                                                <td className="productinfo1 column1 productinfo-table">CODE</td>
                                                <td className="productinfo1-data column2 productinfo-table">{product.CODE}</td>
                                            </tr>
                                            <tr className="productinfo-table row row1">
                                                <td className="productinfo1 column1 productinfo-table">VARIETAL</td>
                                                <td className="productinfo1-data column2 productinfo-table">{product.VARIETAL}</td>
                                            </tr>
                                            <tr className="productinfo-table row">
                                                <td className="productinfo2 column1 productinfo-table">ORIGIN</td>
                                                <td className="productinfo2-data column2 productinfo-table">{product.ORIGIN}</td>
                                            </tr>
                                            <tr className="productinfo-table row">
                                                <td className="productinfo3 column1 productinfo-table">ALTITUDE</td>
                                                <td className="productinfo3-data column2 productinfo-table">{product.ALTITUDEFROM} - {product.ALTITUDETO}</td>
                                            </tr>
                                            <tr className="productinfo-table row">
                                                <td className="productinfo1 column1 productinfo-table">BEAN</td>
                                                <td className="productinfo1-data column2 productinfo-table">{product.BEAN}</td>
                                            </tr>
                                            <tr className="productinfo-table row">
                                                <td className="productinfo2 column1 productinfo-table">ROAST DATE</td>
                                                <td className="productinfo2-data column2 productinfo-table">{product.ROASTDATE}</td>
                                            </tr>
                                            <tr className="productinfo-table row">
                                                <td className="productinfo3 column1 productinfo-table">GRADE</td>
                                                <td className="productinfo3-data column2 productinfo-table">{product.GRADE}</td>
                                            </tr>
                                        </table>
                                        <h2 className="productprocess">processing method</h2>
                                        <table className="productinfo-table process-table">
                                            <tr className="productinfo-table row row1">
                                                <td className="productinfo1-data column3 productinfo-table">{product.PROCESS}</td>
                                            </tr>
                                        </table>
                                        <h2 className="productbrewing">tasting notes</h2>
                                        <p className="tastingnote">{
                                            product.NoteList.map((note, index) => {
                                                return (
                                                    <Dropdown menu={{ items }} placement="topRight" >
                                                        <Space>
                                                            {note.Description + ", "}
                                                        </Space>
                                                    </Dropdown>
                                                )
                                            })}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </Col>
                </Row>

                <div className="suggestion">
                    <h1 className="suggestion-title">You may also like</h1>
                    <div className="searchbar-productspage">
                        <Search
                            placeholder="Search for more"
                            enterButton="Search"
                            size="large"
                            suffix={suffix}
                            onSearch={() =>navigate("/products")}
                        />
                    </div>
                    
                    <Row gutter={[8, 8]} className="suggestion-content">

                        {suggest.map((suggest, index) => {
                            return (
                                <Col xs={24} sm={8} md={8} className="suggestions" >
                                    <div className="suggest-area" id={index}>
                                        <img alt="ljhljhljughljug" src={suggest.img} ></img>
                                        <h2>{suggest.DESCRIPTION}</h2>
                                        <p>{suggest.CODE}</p>
                                    </div>
                                </Col>
                            );
                        })}

                    </Row>
                </div>

            </div>
        </>
    )
}

export default ProductsPage