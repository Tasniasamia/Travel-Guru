import React from 'react';
import pik from '../../../../assets/Group 1330.png'
import './Header.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Container>
        <div className='d-flex align-items-center p-3'id="navback">
        <div className='d-flex me-auto'>
           <div>
            <img src={pik} alt="header_pik" />
            </div> 
            
            <div id='indiv'style={{height:"50px"}}className='my-2 d-flex justify-content-center align-items-center ms-3'>
                <div>
            <i className="fa-solid fa-magnifying-glass text-white me-2"></i>
                <input type="text" placeholder='Search your Destination'/></div>
            </div></div>
           
            <div className=' text-white navigationbaar'>
     <Link to="/">News</Link>
     <Link to="/Destination">Destination</Link>
     <a href="#">Blog</a>
     <a href="#">Contact</a>
     <a href="#">Login</a>
            </div> 
        </div></Container>
    );
};

export default Header;