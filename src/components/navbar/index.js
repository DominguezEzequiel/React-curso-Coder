import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav">
      <li>
        <Link className="navLink" to={`/category/televisores`}>Televisores</Link>
      </li>
      <li>
        <Link className="navLink" to={`/category/celulares`}>Celulares</Link>   
      </li>
      <li>
        <Link className="navLink" to={`/category/climatización`}>Climatización</Link>
      </li>
      <li>
        <Link className="navLink" to={`/category/hogar`}>Hogar</Link>
      </li>
    </ul>
  );
};

export default NavBar;