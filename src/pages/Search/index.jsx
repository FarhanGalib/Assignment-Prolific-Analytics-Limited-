import {  TextField } from "@mui/material";
import React, {  useState } from "react";
import { SearchPageWrapper } from "./styled";

export default function Search() {
    const [inputText, setInputText] = useState("Hello World");
 
    return (
        <SearchPageWrapper>
            <h1>{inputText}</h1>
            <div className="input-container">
                
                <TextField
                    
                    defaultValue="Hello World"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    size="small"
                    autoFocus
                />
            </div>
            
        </SearchPageWrapper>
    );
}
