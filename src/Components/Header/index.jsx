import React from 'react';
import Nav from '../Nav';
import Title from '../Title';
import "../../styles/header.scss"



function Header() {
    return (
      <header className='header'>
        <Title />   
        <Nav /> 
      </header>
    );
  }
  
  export default Header;