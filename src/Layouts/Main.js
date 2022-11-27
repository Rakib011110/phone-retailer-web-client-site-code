import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Share/Footer';
import Navber from '../Pages/Home/Share/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;