import "./styles.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPaw, FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { menuData, languageData } from "../../assets/Data/NavbarItems";
import { withTranslation, useTranslation } from "react-i18next";

function NavBar(props) {
  //Declare
  const [toggle, setToggle] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState("submenu-wrap");
  const { t } = props;
  const { i18n } = useTranslation();

  //Show-Hide Menu
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleOpenSubMenu = () => {
    (openSubMenu == "submenu-wrap") ? setOpenSubMenu("submenu-wrap open-menu") : setOpenSubMenu("submenu-wrap")
  };

  //Transltate
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="NavBarItems">
      <h1 className="logo">
        Pets Park <FaPaw className="logo-icon" />
      </h1>
      <div className="menu-icons" onClick={() => handleToggle()}>
        {toggle ? <FaTimes className="icons-times" /> : <FaBars className="icons-bars" />}
      </div>
      <ul className={toggle ? "nav-menu active" : "nav-menu"}>
        {menuData.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className={item.className} to={item.url}>
                {item.icon} {t(item.title)}
              </NavLink>
            </li>
          );
        })}
        <li>
          <NavLink className="nav-links" onClick={() => handleOpenSubMenu()}>
            <FaGlobe />
          </NavLink>
        </li>
      </ul>
      <div class={openSubMenu}>
        {languageData.map((item, index) => {
          return (
            <div className="submenu">
              <div className="submenu-language" onClick={() => changeLanguage(item.value)}>
                <img src={item.icon} />
                <p>{item.name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </nav>
  );
}

export default withTranslation()(NavBar);

