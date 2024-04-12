import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './MenuApi';
import './style.css';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category
        })
    ),
    "All",
];

console.log(uniqueList);

const Restraunt = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

    return (
        <>
            <Link to="/" className="home-link"> 
                <button className="home-button">Home</button>
            </Link>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
}

export default Restraunt;
