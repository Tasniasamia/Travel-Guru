import React from 'react';
import './Home_layout.css'
import Header from '../../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
const Home_layout = () => {
    return (
        <div id='backgroundimages'>
           <Header></Header>
           <div>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Home_layout;