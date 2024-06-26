import React, { useState } from 'react';
import '../globalCss/header.css'
import { LogoSVG,NotificationSVG,MinusSVG,ProfileLogoSVG,SearchSvg,SearchSVG,PathSvg } from '../picture/SvgComponents.js'
import LogoProfile from '../picture/LogoProfile.png';


export function Header() {


    return(
        <header className='header'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <a><img src={LogoProfile}/></a>
                </div>
                <div className='header__search-wrapper'>
                    <button className="btn-input" >
                        <div className="btn-wrapper">
                            <span className="btn-span btn-span--search"><SearchSvg></SearchSvg></span>
                            <span className="btn-text">Search or jump to...</span>
                        </div>
                        <span className="btn-span"><PathSvg></PathSvg></span>
                    </button>
                    <button className='btn__search'><SearchSVG></SearchSVG></button>
                </div>
                <div className='header__content'>
                    <ul className='content__wrapper'>
                        <li className='content__item'><a className='content__item-link' href='#'>Pull requests</a></li>
                        <li className='content__item'><a className='content__item-link' href='#'>Issues</a></li>
                        <li className='content__item'><a className='content__item-link' href='#'>Codespaces</a></li>
                        <li className='content__item'><a className='content__item-link' href='#'>Marketplace</a></li>
                        <li className='content__item'><a className='content__item-link' href='#'>Explore</a></li>
                    </ul>
                </div>
            </div>
            <div className='header__items'>
                <ul className='content__wrapper'>
                    <li className='content__item'>
                        <a href='#'><NotificationSVG></NotificationSVG></a>
                    </li>
                    <li className='content__item'>
                        <a href='#'><ProfileLogoSVG></ProfileLogoSVG></a>
                        <a href='#'><MinusSVG></MinusSVG></a>
                    </li>
                </ul>
            </div>
        </header>
    )
}