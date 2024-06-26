import React, { useState } from 'react';
import '../globalCss/nav.css';
import { OverviewSVG, RepositoriesSVG, ProjectsSVG, PackagesSVG, StarsSVG } from '../picture/SvgComponents.js';

const navItems = [
    { name: 'Overview', icon: <OverviewSVG /> },
    { name: 'Repositories', icon: <RepositoriesSVG /> },
    { name: 'Projects', icon: <ProjectsSVG /> },
    { name: 'Packages', icon: <PackagesSVG /> },
    { name: 'Stars', icon: <StarsSVG /> }
];

export function Nav() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleItemClick = (index) => {
        setActiveIndex(index);
        setShowDropdown(false); // Close dropdown after item click (if open)
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className='nav'>
            <ul className='nav__list-wrapper'>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`nav__list-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleItemClick(index)}
                    >
                        <a href='#' className='list__item-link'>
                            {item.icon}
                            <span className='item-text'>{item.name}</span>
                        </a>
                    </li>
                ))}
                {/* Dropdown button */}
                <li className='nav__list-item dropdown-toggle' onClick={toggleDropdown}>
                    <a href='#' className='list__item-link'>
                        <span className='item-text'>More</span>
                    </a>
                    {/* Dropdown content */}
                    {showDropdown && (
                        <ul className='dropdown-content'>
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`dropdown-item ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    <a href='#' className='dropdown-item-link'>
                                        {item.icon}
                                        <span className='item-text'>{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}