import "./styles.css";
import React, { useState } from "react";
import * as AiIcons from 'react-icons/ai';
import { NavLink } from "react-router-dom";

function SideBar(props) {
    const { menuData } = props

    return (
            <nav className='side-menu active'>
                <ul className='side-menu-items'>
                    <li className='sidebar-toggle'>
                        <NavLink to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </NavLink>
                    </li>
                    {menuData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <NavLink to={item.path}>
                                    {item.icon}
                                    <span className="menu-span">{item.title}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
    );
}

export default SideBar;
