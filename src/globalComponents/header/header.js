import React, { useState, useEffect, useRef } from 'react';
import '../globalCss/header.css';
import { LogoSVG, NotificationSVG, MinusSVG, ProfileLogoSVG, SearchSvg, SearchSVG, PathSvg, CloseSvg } from '../picture/SvgComponents.js';
import LogoProfile from '../picture/LogoProfile.png';

export function Header() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([
        'Notification 1',
        'Notification 2',
        'Notification 3',
        'Notification 4',
        'Notification 5',
        'Notification 6',
        'Notification 7',
        'Notification 8',
        'Notification 9',
        'Notification 10'
    ]);
    const [unreadCount, setUnreadCount] = useState(notifications.length);

    const dropdownRef = useRef(null);

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    const markAllAsRead = () => {
        setUnreadCount(0);
        setShowNotifications(false);
    };

    const closeNotifications = () => {
        setShowNotifications(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
        };

        if (showNotifications) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showNotifications]);

    return (
        <header className='profile-header'>
            <div className='profile-header__wrapper'>
                <div className='profile-header__logo'>
                    <a href='/vb-app'><LogoSVG /></a>
                </div>
                <div className='profile-header__search-wrapper'>
                    <button className="profile-btn-input">
                        <div className="profile-btn-wrapper">
                            <span className="profile-btn-span profile-btn-span--search"><SearchSvg /></span>
                            <span className="profile-btn-text">Search or jump to...</span>
                        </div>
                        <span className="profile-btn-span"><PathSvg /></span>
                    </button>
                    <button className='profile-btn__search'><SearchSVG /></button>
                </div>
                <div className='profile-header__content'>
                    <ul className='profile-content__wrapper'>
                        <li className='profile-content__item'><a className='profile-content__item-link' href='#'>Pull requests</a></li>
                        <li className='profile-content__item'><a className='profile-content__item-link' href='#'>Issues</a></li>
                        <li className='profile-content__item'><a className='profile-content__item-link' href='#'>Codespaces</a></li>
                        <li className='profile-content__item'><a className='profile-content__item-link' href='#'>Marketplace</a></li>
                        <li className='profile-content__item'><a className='profile-content__item-link' href='#'>Explore</a></li>
                    </ul>
                </div>
            </div>
            <div className='profile-header__items'>
                <ul className='profile-content__wrapper'>
                    <li className='profile-content__item'>
                        <button onClick={toggleNotifications} className='notification-btn'>
                            <NotificationSVG style={{ fill: unreadCount > 0 ? 'red' : 'inherit' }} />
                            {unreadCount > 0 && <span className='notification-count'>{unreadCount}</span>}
                        </button>
                        {showNotifications && (
                            <div className='notifications-dropdown' ref={dropdownRef}>

                                <ul className='notifications-list'>
                                    {notifications.slice(0, 3).map((notification, index) => (
                                        <li key={index} className='notification-item'>{notification}</li>
                                    ))}
                                </ul>
                                <button className='all-notifications-btn' onClick={markAllAsRead}>All</button>
                            </div>
                        )}
                    </li>
                    <li className='profile-content__item'>
                        <a href='/profile'><img className='profile-content__logo' src={LogoProfile} alt="Profile" /></a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
