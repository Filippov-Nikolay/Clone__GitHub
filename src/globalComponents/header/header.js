import React from 'react';
import '../globalCss/header.css'
import { LogoSVG,NotificationSVG,MinusSVG,ProfileLogoSVG,SearchSvg,SearchSVG,PathSvg } from '../picture/SvgComponents.js'
import LogoProfile from '../picture/LogoProfile.png';


export function Header() {

    return(
        <header className='profile-header'>
            <div className='profile-header__wrapper'>
                <div className='profile-header__logo'>
                    <a href='/vb-app'><LogoSVG></LogoSVG></a>
                </div>
                <div className='profile-header__search-wrapper'>
                    <button className="profile-btn-input" >
                        <div className="profile-btn-wrapper">
                            <span className="profile-btn-span profile-btn-span--search"><SearchSvg></SearchSvg></span>
                            <span className="profile-btn-text">Search or jump to...</span>
                        </div>
                        <span className="profile-btn-span"><PathSvg></PathSvg></span>
                    </button>
                    <button className='profile-btn__search'><SearchSVG></SearchSVG></button>
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
                        <a href='#'><NotificationSVG></NotificationSVG></a>
                    </li>
                    <li className='profile-content__item'>
                        <a href='/profile'><img className='profile-content__logo' src={LogoProfile}/></a>
                    </li>
                </ul>
            </div>
        </header>
    )
}