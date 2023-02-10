import { Col, Row } from "antd";
import React, { useRef, useEffect, useState } from "react";
import "./style.css";

import { AudioOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from "react-router-dom";
import { Button, Dropdown } from 'antd';
import { Input } from 'antd';
import { Space } from 'antd';
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

    const items = [
        {
            label: (
                <a target="_blank" rel="noopener noreferrer" href="">
                    Grain &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
            ),
            key: '0',
        },
        {
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    &nbsp;&nbsp;&nbsp;&nbsp;Jasmine &nbsp;&nbsp;&nbsp;&nbsp;
                </a>
            ),
            key: '1',
        },];

    // api

    let { id } = useParams();
    // console.log(id,"24356465646565454");
    const dispatch = useDispatch();
    const onSearch = (value) => {
        navigate(`/products/${value}`);
    }


    useEffect(() => {
        dispatch(SearchRequestaction(id));
        window.scrollTo(0, 0);
    }, [id]);
    const SuggestOnClick = (Codevalue) => {
        navigate(`/products/${Codevalue}`);
    }

    useEffect(() => {
        console.log(id)
        dispatch(SearchRequestaction(id));
    }, []);

    const FoundProduct = useSelector(
        (state) => state.search.ProductInfo
    );
    console.log(FoundProduct, "isLoadingActivities");
    const [Flavor,setFlavor] = useState([]);


    return (

        <>
            <div className="productspage">
                <Row gutter={[8, 8]} className="product-content">
                    <Col xs={12} sm={12} md={12} className="product-img" >
                        {FoundProduct.map((product) => {

                            return (
                                <div className="product-img1">
                                    <img src={product.PictureURL} alt="product1" />
                                </div>
                            )
                        })}
                    </Col>
                    <Col xs={12} sm={12} md={12} className="product-info">
                        {FoundProduct.map((product) => {

                            return (
                                <div className="product_description" >
                                    <h1 classname="productname">{product.Description}</h1>
                                    <div className="infotables">
                                        <h2 className="productsource">source</h2>
                                        <table className="productinfo-table source-table">
                                            <tr className="productinfo-table row row1">
                                                <td className="productinfo1 column1 productinfo-table">CODE</td>
                                                <td className="productinfo1-data column2 productinfo-table">{id}</td>
                                            </tr>
                                            <tr className="productinfo-table row row1">
                                                <td className="productinfo1 column1 productinfo-table">VARIETAL</td>
                                                <td className="productinfo1-data column2 productinfo-table">{product.Varietal}</td>
                                            </tr>
                                            <tr className="productinfo-table row">
                                                <td className="productinfo2 column1 productinfo-table">ORIGIN</td>
                                                <td className="productinfo2-data column2 productinfo-table">{product.Origin}</td>
                                            </tr>
                                            <tr className="productinfo-table row">
                                                <td className="productinfo3 column1 productinfo-table">ALTITUDE</td>
                                                <td className="productinfo3-data column2 productinfo-table">{product.AltitudeFrom} - {product.AltitudeTo}</td>
                                            </tr>
                                            <tr className="productinfo-table row">
                                                <td className="productinfo1 column1 productinfo-table">BEAN</td>
                                                <td className="productinfo1-data column2 productinfo-table">{product.Bean}</td>
                                            </tr>
                                            <tr className="productinfo-table row">
                                                <td className="productinfo2 column1 productinfo-table">ROAST DATE</td>
                                                <td className="productinfo2-data column2 productinfo-table">{product.RoastDate}</td>
                                            </tr>
                                            <tr className="productinfo-table row">
                                                <td className="productinfo3 column1 productinfo-table">GRADE</td>
                                                <td className="productinfo3-data column2 productinfo-table">{product.Grade}</td>
                                            </tr>
                                        </table>
                                        <h2 className="productprocess">processing method</h2>
                                        <table className="productinfo-table process-table">
                                            <tr className="productinfo-table row row1">
                                                <td className="productinfo1-data column3 productinfo-table">{product.Process}</td>
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
                            onSearch={onSearch}
                        />
                    </div>

                    <Row gutter={[8, 8]} className="suggestion-content">

                        {FoundProduct.map((product) => {
                            return (
                                product.RelevantProduct.map((suggest) => {
                                    console.log(suggest, "OOOopopopopopo")
                                    return (
                                        <Col xs={8} sm={8} md={8} className="suggestions" >
                                            <div className="suggest-area" onClick={() => SuggestOnClick(suggest.Code)} >
                                                <img alt="ljhljhljughljug" src={suggest.PictureURL} ></img>
                                                <h2>{suggest.Description}</h2>
                                                <p>{suggest.Code}</p>
                                            </div>
                                        </Col>
                                    )
                                }));
                        })}

                    </Row>
                </div>

            </div>
        </>
    )
}

export default ProductsPage