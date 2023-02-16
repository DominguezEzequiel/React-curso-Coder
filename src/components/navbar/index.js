import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav">
      <li>
        <Link className="navLink" to={`/category/Televisores`}>Televisores</Link>
      </li>
      <li>
        <Link className="navLink" to={`/category/Celulares`}>Celulares</Link>   
      </li>
      <li>
        <Link className="navLink" to={`/category/Climatización`}>Climatización</Link>
      </li>
      <li>
        <Link className="navLink" to={`/category/Hogar`}>Hogar</Link>
      </li>
    </ul>
  );
};

export default NavBar;