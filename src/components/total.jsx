import React from "react";
import "../css/total.css";

// Total is a component to display the total items
export default function Total ({ totalItems }) {
    return (<p className="total">Total Items: {totalItems}</p>)
}