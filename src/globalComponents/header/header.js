import React from 'react';
import Logo from '../picture/Logo.svg'
import notification from '../picture/notification.svg'
import plus from '../picture/plus.svg'
import minus from '../picture/minus.svg'
import profileLogo from '../picture/profileLogo.svg'
import '../globalCss/header.css'

export function Header() {

    return(
        <header className='header'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <img src={Logo}/>
                </div>
                <div className='header__search'>
                    <input type='text' placeholder='Search or jump to...' className='input-placeholder'/>
                        
                    
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
            <div className='header__content'>
                <ul className='content__wrapper'>
                    <li className='content__item'>
                        <a href='#'><img src={notification}/></a>
                    </li>
                    <li className='content__item'>
                        <a href='#'><img src={plus}/></a>
                        <a href='#'><img src={minus}/></a>
                    </li>
                    <li className='content__item'>
                        <a href='#'><img src={profileLogo}/></a>
                        <a href='#'><img src={minus}/></a>
                    </li>
                </ul>
            </div>
        </header>
    )
}