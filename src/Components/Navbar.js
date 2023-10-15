import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import openMenu from "./SVG/bars-solid.svg";
import closeMenu from "./SVG/bars-staggered-solid.svg";
import dashboardIcon from "./SVG/dash-board.svg";
import right from "./SVG/angle-right-solid.svg";
import dashboardOpened from "./SVG/dashboard-opened.svg";
import productIcon from "./SVG/product-icon.svg";
import customersIcon from "./SVG/customers-icon.svg";
import incomeIcon from "./SVG/income-icon.svg";
import promoteIcon from "./SVG/promote-icon.svg";
import helpIcon from "./SVG/help-icon.svg";
import downArrow from "./SVG/angle-down-solid.svg";
import upArrow from "./SVG/angle-up-solid.svg";
import evano from "./photos/evano.webp";
import sara from "./photos/sara.jpg";
import sam from "./photos/sam.jpg";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(0);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuItemClick = (menuItem) => {
        setActiveMenuItem(menuItem);
    };

    const menuItemData = [
        { icon: dashboardOpened, text: "Dashboard" },
        { icon: productIcon, text: "Product" },
        { icon: customersIcon, text: "Customers" },
        { icon: incomeIcon, text: "Income" },
        { icon: promoteIcon, text: "Promote" },
        { icon: helpIcon, text: "Help" }
    ];

    const users = [
        {
            name: 'Evano',
            role: 'Project Manager',
            image: evano,
        },
        {
            name: 'Sara',
            role: 'Web developers',
            image: sara,
        },
        {
            name: 'Sam',
            role: 'Data Scientist',
            image: sam,
        }
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleUserClick = (index) => {
        setSelectedUser(index);
        setIsOpen(false);
    };

    return (
        <nav className="bg-[#101039] lg:w-[30%] xl:w-[18%] lg:h-[100vh] overflow-scroll">
            <div className="container flex lg:flex-col justify-between lg:justify-normal md:px-8 lg:px-0 ">
                <div className="flex items-center lg:px-2">
                    <img src={dashboardIcon} alt="dashboardIcon" className="lg:w-16"></img>
                    <span className="text-white text-2xl md:text-3xl lg:text-2xl font-semibold -mx-2">Dashboard</span>
                </div>

                <div className="hidden mt-1 lg:flex lg:flex-col justify-between h-[85vh]">
                    <div>
                        {menuItemData.map((menuItem, index) => (
                            <Router key={index}>
                                <Link
                                    to="/"
                                    className={`flex justify-between mx-8 p-1.5 rounded-md ${activeMenuItem === index ? "bg-[#272761] scale-110" : ""
                                        }`}
                                    onClick={() => handleMenuItemClick(index)}
                                >
                                    <p className="flex gap-4 text-slate-200 text-lg font-medium">
                                        <img src={menuItem.icon} alt={`${menuItem.text} Icon`} className='w-8' />
                                        {menuItem.text}
                                    </p>

                                    {activeMenuItem !== index && <img src={right} alt="right-arrow" />}
                                </Link>
                            </Router>
                        ))}
                    </div>

                    
                    <Router>
                        <div className="dropdown mx-3 p-1.5 px-2 rounded-md bg-[#272761]">
                            <div className="selected-user flex justify-between items-center" onClick={toggleDropdown}>
                                <div className="flex gap-2 items-center">
                                    <img
                                        src={users[selectedUser].image}
                                        alt={users[selectedUser].name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <p className="flex flex-col">
                                        <span className="text-white font-medium">
                                            {users[selectedUser].name}
                                        </span>
                                        <span className="text-gray-400 -mt-1">
                                            {users[selectedUser].role}
                                        </span>
                                    </p>

                                </div>
                                <div className="dropdown-arrow">{isOpen ? <img src={upArrow} alt='up-arrow'></img> : <img src={downArrow} alt='down-arrow'></img>}</div>
                            </div>
                            {isOpen && (
                                <div className="dropdown-content flex flex-col gap-2 mt-2">
                                    {users.map((user, index) => (
                                        <div
                                            key={index}
                                            className="user-card"
                                            onClick={() => handleUserClick(index)}
                                        >
                                            <div className="flex gap-2 items-center">
                                                <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
                                                <p className="flex flex-col">
                                                    <span className="text-white font-medium">{user.name}</span>
                                                    <span className="text-gray-400 -mt-1">{user.role}</span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Router>

                </div>

                <button className="lg:hidden px-5" onClick={toggleMobileMenu}>
                    <img src={isMobileMenuOpen ? closeMenu : openMenu} alt="menuIcon" />
                </button>
            </div>

            <div
                className={`flex flex-col gap-4 mt-3 ${isMobileMenuOpen ? 'block' : 'hidden'} bg-[#101039] shadow-lg lg:hidden md:px-52`}
            >
                {menuItemData.map((menuItem, index) => (
                    <Router key={index}>
                        <Link
                            to="/"
                            className={`flex justify-between mx-8 p-1  rounded-md ${activeMenuItem === index ? "bg-[#272761] scale-105" : ""
                                }`}
                            onClick={() => handleMenuItemClick(index)}
                        >
                            <p className="flex gap-4 text-white text-xl font-medium">
                                <img src={menuItem.icon} alt={`${menuItem.text} Icon`} className='w-8' />
                                {menuItem.text}
                            </p>
                            {activeMenuItem !== index && <img src={right} alt="right-arrow" />}
                        </Link>
                    </Router>
                ))}

                <Router>
                    <div className="dropdown m-7 mx-4 p-1.5 px-2 rounded-md bg-[#272761]">
                        <div className="selected-user flex justify-between items-center" onClick={toggleDropdown}>
                            <div className="flex gap-2 items-center">
                                <img
                                    src={users[selectedUser].image}
                                    alt={users[selectedUser].name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <p className="flex flex-col">
                                    <span className="text-white font-medium">
                                        {users[selectedUser].name}
                                    </span>
                                    <span className="text-gray-400 -mt-1">
                                        {users[selectedUser].role}
                                    </span>
                                </p>

                            </div>
                            <div className="dropdown-arrow">{isOpen ? <img src={upArrow} alt='up-arrow'></img> : <img src={downArrow} alt='down-arrow'></img>}</div>
                        </div>
                        {isOpen && (
                            <div className="dropdown-content flex flex-col gap-2 mt-2">
                                {users.map((user, index) => (
                                    <div
                                        key={index}
                                        className="user-card"
                                        onClick={() => handleUserClick(index)}
                                    >
                                        <div className="flex gap-2 items-center">
                                            <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
                                            <p className="flex flex-col">
                                                <span className="text-white font-medium">{user.name}</span>
                                                <span className="text-gray-400 -mt-1">{user.role}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </Router>
            </div>
        </nav>
    );
};

export default Navbar;
