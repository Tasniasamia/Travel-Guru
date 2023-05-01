import React from 'react';
import Header2 from '../../Pages/Shared/Header2/Header2';
import { Outlet } from 'react-router-dom';

const Other_layout = () => {
    return (
        <div>
            <Header2></Header2>
            <div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Other_layout;