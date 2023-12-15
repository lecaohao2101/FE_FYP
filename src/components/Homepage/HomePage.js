// HomePage.js
import React, {useState} from 'react';
import './HomePage.css'
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";


const HomePage = () => {
    return (
        <div class='bg-amber-100'>
            <div class='px-4 bg-blue-100 sm:bg-gray-100 md:bg-green-300'><Navbar/></div>
            <div class='bg-amber-100 text-white p-8 mt-8'><Body/></div>
            <div class='bg-gray-800'><Footer/></div>
        </div>
    );
};

export default HomePage;
