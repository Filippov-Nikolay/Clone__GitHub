import React from 'react';
import '../globalCss/aside.css';
import { FollowersSVG, GeoSVG, LinksSVG } from '../picture/SvgComponents.js';
import Achiev from '../picture/Achiev.svg';
import LogoProfile from '../picture/LogoProfile.png';
import Emblem1 from '../picture/Emblem1.svg';
import Emblem2 from '../picture/Emblem2.svg';
import Emblem3 from '../picture/Emblem3.svg';
import Emblem4 from '../picture/Emblem4.svg';

function EmblemOrganizations() {
    return (
        <div className='aside__organizations'>
            <h3 className='aside__title-name'>Organizations</h3>
            <ul className='organizations-emblem__list'>
                <li className='organizations-emblem__item'>
                    <a href='#'>
                        <img className='organizations-emblem__img' src={Emblem1} alt='Emblem1'/>
                    </a>
                </li>
                <li className='organizations-emblem__item'>
                    <a href='#'>
                        <img className='organizations-emblem__img' src={Emblem2} alt='Emblem2'/>
                    </a>
                </li>
                <li className='organizations-emblem__item'>
                    <a href='#'>
                        <img className='organizations-emblem__img' src={Emblem3} alt='Emblem3'/>
                    </a>
                </li>
                <li className='organizations-emblem__item'>
                    <a href='#'>
                        <img className='organizations-emblem__img' src={Emblem4} alt='Emblem4'/>
                    </a>
                </li>
            </ul>    
        </div>
    );
}

export function Aside() {
    return (
        <aside className='aside'>
            <div className='aside__wrapper'>
                <div className='aside__logo'>   
                    <img src={LogoProfile} alt='Logo Profile'/>
                </div>
                <div className='aside__name'>
                    <h2 className='aside__name-main'>chirag singla</h2>
                    <h3 className='aside__name-sub'>chiragsingla17</h3>
                </div>
                <div className='aside__bio'>
                    <span className='aside__bio-text'>Currently working in KAN LABs, NYC USA as an ML Engineer(Remote)</span>
                </div>
                <div className='aside__func'>
                    <button className='aside__btn-edit'>Edit profile</button>
                    <div className='aside__content-wrapper'>
                        <a href='#' className='aside__links'>
                        <FollowersSVG /><span className='aside__links-follow'> 12</span> followers
                        </a>
                        <a href='#' className='aside__links'>
                             <span className='aside__links-follow'>3</span> following
                        </a>
                    </div>
                </div>
                <div className='aside__info'>
                    <div className='aside__content-wrapper'>
                        <GeoSVG /> <span className='country__name'> Delhi</span>
                    </div>
                    <div className='aside__content-wrapper'>
                        <LinksSVG />  <span className='link__social'>https://neuralai.co/</span>
                    </div>
                </div>
                <div className='aside__achievements'>
                    <h3 className='aside__title-name'>Achievements</h3>
                    <div className='aside__achiev-logo'>
                        <img src={Achiev} alt='Achievements'/>
                    </div>
                    <div className='aside__content-wrapper'>
                        <button className='aside__btn-beta'>Beta</button>
                        <a href='#' className='aside__link-feedback'>Send feedback</a>
                    </div>
                </div>
                <EmblemOrganizations />
            </div>
        </aside>
    );
}
