import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarWrapper } from "./styled";

export default function Header() {
    return (
        <NavbarWrapper>
            <div>
                <NavLink to="/" className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/search" className="nav-link">
                    Search
                </NavLink>
                <NavLink to="/form" className="nav-link">
                    My Form
                </NavLink>
                <NavLink to="/info" className="nav-link">
                    Info
                </NavLink>
                <NavLink to="/bonus" className="nav-link">
                    Bonus
                </NavLink>
            </div>
        </NavbarWrapper>
    );
}
