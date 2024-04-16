import React from "react";
import Total from "./total";
// Stateless Functional Component

const NavBar = ({ totalUniqueItems, totalItems }) => {
  return (
    <nav className="navbar navbar-light">
      <div className="navbar-brand">
        <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
        <span
          className="badge badge-pill badge-info m-2"
        >
          Unique: {totalUniqueItems}
        </span>
        <Total totalItems={totalItems}/>
      </div>
    </nav>
  );
};

export default NavBar;
