import React, { useState } from 'react';
import '../globalCss/nav.css';
import { OverviewSVG, RepositoriesSVG, ProjectsSVG, PackagesSVG, StarsSVG, DotsSvg } from '../picture/SvgComponents.js';

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
        <nav className='profile-nav'>
            <ul className='profile-nav__list-wrapper'>
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={`profile-nav__list-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleItemClick(index)}
                    >
                        <a href='#' className='profile-list__item-link'>
                            {item.icon}
                            <span className='profile-item-text'>{item.name}</span>
                        </a>
                    </li>
                ))}
                {/* Dropdown button */}
                <li className='profile-nav__list-item profile-dropdown-toggle' onClick={toggleDropdown}>
                    <a href='#' className='profile-list__item-link'>
                        <DotsSvg />
                    </a>
                    {/* Dropdown content */}
                    {showDropdown && (
                        <ul className='profile-dropdown-content'>
                            {navItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`profile-dropdown-item ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    <a href='#' className='profile-dropdown-item-link'>
                                        {item.icon}
                                        <span className='profile-item-text'>{item.name}</span>
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
