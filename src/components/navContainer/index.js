import React from "react";
import logo from '../assets/logoheader.png'
import CartWidget from "../cartWidget";
import './styles.css';

const NavContainer = () => {
    return (
        <div className="navContainer">
            <img src={logo} alt="Logo" />
            <div className="inputContainer">
                <input type="text" className="navInput" id="navInput" placeholder="Buscar productos"></input>
                <button className="inputBtn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <CartWidget />

        </div>


    );
};

export default NavContainer;