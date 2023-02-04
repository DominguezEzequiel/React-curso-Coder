import React from 'react';
import "./style.css"

const NavBar = () => {

  return (
    <nav>
      <ul className="menu">

        <li className='menuItem'>

          <a href="/">Categorias</a>

          <ul class="subMenu">
            <li className='subItem'>
              <a href="/" className='menuLink menuLink--inside'>TV, Audio y Video</a>
            </li>
            <li className='subItem'>
              <a href="/" className='menuLink menuLink--inside'>Celulares, Notebooks y Tecnología</a>
            </li>
            <li className='subItem'>
              <a href="/" className='menuLink menuLink--inside'>Electrodomésticos</a>
            </li>
            <li className='subItem'>
              <a href="/" className='menuLink menuLink--inside'>Muebles para el hogar</a>
            </li>
            <li className='subItem'>
              <a href="/" className='menuLink menuLink--inside'>Moda</a>
            </li>
          </ul>
        </li>

        <li className='menuItem'>
          <a href="/">Productos</a>
        </li>

        <li className='menuItem'>
          <a href="/">Blog</a>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;
