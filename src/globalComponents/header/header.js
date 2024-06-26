import React, { useState } from 'react';
import '../globalCss/header.css'
import { LogoSVG,NotificationSVG,PlusSVG,MinusSVG,ProfileLogoSVG,SearchSvg,SearchSVG,PathSvg,CloseSvg,ActionsSvg } from '../picture/SvgComponents.js'


export function Header() {

    const [isHideModalWindow, setIsHideModalWindow] = useState(false);
    const [search, setSearchValue] = useState("");
    const [isSearchShow, setIsSearch] = useState(false);

    function HideModalWindow() {
        setIsHideModalWindow(false);
    }
    function ShowModalWindow() {
        setIsHideModalWindow(true);
    }
    function HandleSearchChange(event) {
        setSearchValue(event.target.value);
        event.target.value.length != 0 ? setIsSearch(true) : setIsSearch(false);
    }

    return(
        <header className='header'>
            {/* <div className="modal-window-input">
                <div className={isHideModalWindow ? "modal-window-input__content" : "modal-window-input__content modal-window-input__content--hide"}>
                    <div className="modal-window-input__bg" onClick={HideModalWindow}></div>
                    <div className="modal-window-input__item">
                        <div className="modal-window-input__wrapper-input">
                            <span className="modal-window-input__search-span"><SearchSvg></SearchSvg></span>
                            <input className="modal-window-input__input" type="text" onChange={HandleSearchChange}/>
                            <span className="modal-window-input__search-span modal-window-input__search-span--close"><CloseSvg></CloseSvg></span>
                        </div>
                        <div className="modal-window-input__action-list-content">
                            <a className={isSearchShow ? "modal-window-input__action-list-link" : "modal-window-input__action-list-link modal-window-input__action-list-link--hide"} href="#">
                                <span className="modal-window-input__search-span"><SearchSvg></SearchSvg></span>
                                <span className="modal-window-input__action-list-output">{search}</span>
                                <span className="modal-window-input__action-list-hint">Search all of GitHub</span>
                            </a>
                        </div>

                    </div>
                    <div className="modal-window-input__item">
                        <ul className="sub-menu__modal-window modal-window-list">
                            <li className='modal-window-list__title-li'>Explore</li>
                            <li className="modal-window-list__item">
                                <a href="#" className="modal-window-list__link">
                                    <ActionsSvg></ActionsSvg>
                                    <div className="modal-window-list__wrapper">
                                        <h6 className="modal-window-list__title">Actions</h6>
                                    </div>
                                    <span className="modal-window-input__action-list-hint">Learn More</span>
                                </a>
                            </li>
                            <li className="modal-window-list__item">
                                <a href="#" className="modal-window-list__link">
                                    <ActionsSvg></ActionsSvg>
                                    <div className="modal-window-list__wrapper">
                                        <h6 className="modal-window-list__title">Actions</h6>
                                    </div>
                                    <span className="modal-window-input__action-list-hint">Learn More</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="modal-window-input__item">
                        <a className="modal-window-input__link" href="#">Search syntax tips</a>
                    </div>
                </div>
            </div> */}
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <a><LogoSVG></LogoSVG></a>
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
                        <a href='#'><PlusSVG></PlusSVG></a>
                        <a href='#'><MinusSVG></MinusSVG></a>
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