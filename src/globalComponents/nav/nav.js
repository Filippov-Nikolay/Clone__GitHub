import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../globalCss/nav.css';
import { OverviewSVG, RepositoriesSVG, ProjectsSVG, PackagesSVG, StarsSVG, DotsSvg } from '../picture/SvgComponents.js';

const navItems = [
    { name: 'Overview', icon: <OverviewSVG />, href: '/profile' },
    { name: 'Repositories', icon: <RepositoriesSVG />, href: '/vb-profile' },
    { name: 'Projects', icon: <ProjectsSVG />, href: '#' },
    { name: 'Packages', icon: <PackagesSVG />, href: '#' },
    { name: 'Stars', icon: <StarsSVG />, href: '#' }
];

export function Nav() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        const currentIndex = navItems.findIndex(item => item.href === currentPath);
        setActiveIndex(currentIndex);
    }, [location.pathname]);

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
                        <a href={item.href} className='profile-list__item-link'>
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
                                    <a href={item.href} className='profile-dropdown-item-link'>
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
