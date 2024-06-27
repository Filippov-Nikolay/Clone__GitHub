import React from 'react';
import '../globalCss/footer.css';
import { LogoFooterSvg } from '../picture/SvgComponents.js';

export function Footer() {
    return(
        <footer className='profile-footer'>
            <div className='profile-footer__container'>
                <div className='profile-footer__wrapper'>
                    <div className='profile-footer__logo'>
                        <LogoFooterSvg/>
                    </div>
                    <div className='profile-footer__container--name'>
                        © 2023 GitHub, Inc.
                    </div>
                </div>
                <ul className='profile-footer__list'>
                    <li className='profile-footer__item'>
                        <a href='#' className='profile-footer__link'>
                            Terms
                        </a>
                    </li>
                    <li className='profile-footer__item'>
                        <a href='#' className='profile-footer__link'>
                             Privacy
                        </a>
                    </li>
                    <li className='profile-footer__item'>
                        <a href='#' className='profile-footer__link'>
                            Security
                        </a>
                    </li>
                    <li className='profile-footer__item'>
                        <a href='#' className='profile-footer__link'>
                            Status
                        </a>
                    </li>
                    <li className='profile-footer__item'>
                        <a href='#' className='profile-footer__link'>
                            Docs
                        </a>
                    </li>
                    <li className='profile-footer__item'>
                        <a href='#' className='profile-footer__link'>
                            Contact GitHub
                        </a>
                    </li>
                    <li className='profile-footer__item'>
                        <a href='#' className='profile-footer__link'>
                            Pricing
                        </a>
                    </li>
                    <li className='profile-footer__item'>
                        <a href='#' className='profile-footer__link'>
                            Api
                        </a>
                    </li>
                    <li className='profile-footer__item'>
                        <a href='#' className='profile-footer__link'>
                            Training
                        </a>
                    </li>
                    <li className='profile-footer__item'>
                        <a href='#' className='profile-footer__link'>
                            Blog
                        </a>
                    </li>
                    <li className='profile-footer__item'>
                        <a href='#' className='profile-footer__link'>
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}