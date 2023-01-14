import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FooterCom, SideBar } from "../../components";
import { SidebarData } from "../../assets/Data/SidebarItems";
import { Layout } from 'antd';

function PrivateLayout() {
    const { Footer, Sider, Content } = Layout;

    // Login
    const navigate = useNavigate();
    useEffect(() => {
        const loggedInUser = sessionStorage.getItem("token");
        if (!loggedInUser) {
            navigate("/login");
        }
    }, []);

    return (
        <Layout>
            <Sider>
                <SideBar menuData={SidebarData} />
            </Sider>
            <Layout>
                <Content>
                    <Outlet />
                </Content>
                <Footer style={{ padding: "0px" }}>
                    <FooterCom />
                </Footer>
            </Layout>
        </Layout>
    )
}

export default PrivateLayout