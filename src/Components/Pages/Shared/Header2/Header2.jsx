import React from 'react';
import pik2 from '../../../../assets/Group 1330(3).png'
import '../../Shared/Header/Header.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header2.css'
const Header2 = () => {
    return (
        <Container>
        <div className='d-flex align-items-center justify-content-between p-3'id="">
    
           <div>
            <img src={pik2} alt="header_pik" />
            </div> 
            
            {/* <div id='indiv2'style={{height:"50px"}}className='my-2 d-flex justify-content-center align-items-center ms-3'>
                <div>
            <i className="fa-solid fa-magnifying-glass text-dark me-2"></i>
                <input type="text" placeholder='Search your Destination'/></div>
            </div> */}
           
            <div className='header2nav'>
     <Link to="/">News</Link>
     <Link to="/Destination">Destination</Link>
     <a href="#">Blog</a>
     <a href="#">Contact</a>
     <a href="#">Login</a>
            </div> 
        </div></Container>
    );
};


export default Header2;