import React from "react";
import Header from "../Header";
import { LayoutWrapper } from "./styled";

export default function Layout({ children }) {
    return (
        <LayoutWrapper>
            <Header />
            <div className="content-box">
                <div className="contents">{children}</div>
            </div>
        </LayoutWrapper>
    );
}
