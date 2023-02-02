import { Col, Row } from "antd";
import React from "react";
import "./style.css";
import product1 from "../../assets/Pictures/product1.jpg";
import product1_2 from "../../assets/Pictures/product1-2.jpg";

function ProductsPage() {
    const data = [
        {
            CODE: "Sayings",
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
        },

    ]
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
                                    {/* <h1 className="CODE">{product.CODE}</h1>
                                    <p className="VARIETAL">{product.VARIETAL}</p>
                                    <p className="ORIGIN">{product.ORIGIN}</p> */}
                                    <h1 classname="productname">{product.DESCRIPTION}</h1>
                                    <h2 className="productsource">SOURCE</h2>
                                    <table className="productinfo-table source-table">
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
                                    </table>
                                    <h2 className="productsource">PROCESSING METHOD</h2>
                                    <table className="productinfo-table process-table">
                                        <tr className="productinfo-table row row1">
                                            <td className="productinfo1 column1 productinfo-table">PROCESS</td>
                                            <td className="productinfo1-data column2 productinfo-table">{product.PROCESS}</td>
                                        </tr>
                                    </table>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ProductsPage