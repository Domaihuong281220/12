import React, { useState } from "react";
import "./styles.css";
import { Outlet } from "react-router-dom";
import { NavBar, FooterCom, Header } from "../../components";

function PublicLayout() {
  
  return (
    <>
      {/* <NavBar /> */}
      <div className="publiclayout-container">
        <Header />
      </div>
      <Outlet />
      <FooterCom />
    </>
  );
}

export default PublicLayout;
