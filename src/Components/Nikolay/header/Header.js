import './css/header.css'
import React, { useState } from "react";

function LogoSvg() {
    return (
        <svg className='logo__svg' height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
    )
}
function ActionsSvg() {
    return (
        <svg className="sub-menu__svg" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true">
            <path d="M1 3a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H7v4.063C7 16.355 7.644 17 8.438 17H12.5v-2.5a2 2 0 0 1 2-2H21a2 2 0 0 1 2 2V21a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-2.5H8.437A2.939 2.939 0 0 1 5.5 15.562V11.5H3a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM14.5 14a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5Z"></path>
        </svg>
    )
}
function PackagesSvg() {
    return (
        <svg className="sub-menu__svg" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true">
            <path d="M12.876.64V.639l8.25 4.763c.541.313.875.89.875 1.515v9.525a1.75 1.75 0 0 1-.875 1.516l-8.25 4.762a1.748 1.748 0 0 1-1.75 0l-8.25-4.763a1.75 1.75 0 0 1-.875-1.515V6.917c0-.625.334-1.202.875-1.515L11.126.64a1.748 1.748 0 0 1 1.75 0Zm-1 1.298L4.251 6.34l7.75 4.474 7.75-4.474-7.625-4.402a.248.248 0 0 0-.25 0Zm.875 19.123 7.625-4.402a.25.25 0 0 0 .125-.216V7.639l-7.75 4.474ZM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"></path>
        </svg>
    )
}
function SecuritySvg() {
    return (
        <svg className="sub-menu__svg" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true">
            <path d="M16.53 9.78a.75.75 0 0 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5Z"></path>
            <path d="m12.54.637 8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.748 1.748 0 0 1 1.08 0Zm-.617 1.426-8.25 2.676a.249.249 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.253.253 0 0 0-.154 0Z"></path>
        </svg>
    )
}
function CodespacesSvg() {
    return (
        <svg className="sub-menu__svg" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true">
            <path d="M3.5 3.75C3.5 2.784 4.284 2 5.25 2h13.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 18.75 13H5.25a1.75 1.75 0 0 1-1.75-1.75Zm-2 12c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75ZM5.25 3.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h13.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Zm-2 12a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25Z"></path>
            <path d="M10 17.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
        </svg>
    )
}
function GitHubCopilotSvg() {
    return (
        <svg className="sub-menu__svg" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true">
            <path d="M23.922 16.992c-.861 1.495-5.859 5.023-11.922 5.023-6.063 0-11.061-3.528-11.922-5.023A.641.641 0 0 1 0 16.736v-2.869a.841.841 0 0 1 .053-.22c.372-.935 1.347-2.292 2.605-2.656.167-.429.414-1.055.644-1.517a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.499 1.132-3.368.397-.406.89-.717 1.474-.952 1.399-1.136 3.392-2.093 6.122-2.093 2.731 0 4.767.957 6.166 2.093.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086.23.462.477 1.088.644 1.517 1.258.364 2.233 1.721 2.605 2.656a.832.832 0 0 1 .053.22v2.869a.641.641 0 0 1-.078.256ZM12.172 11h-.344a4.323 4.323 0 0 1-.355.508C10.703 12.455 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a2.005 2.005 0 0 1-.085-.104L4 11.741v6.585c1.435.779 4.514 2.179 8 2.179 3.486 0 6.565-1.4 8-2.179v-6.585l-.098-.104s-.033.045-.085.104c-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.545-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.016.016Zm.641-2.935c.136 1.057.403 1.913.878 2.497.442.544 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.15.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.319-.862-2.824-1.025-1.487-.161-2.192.138-2.533.529-.269.307-.437.808-.438 1.578v.021c0 .265.021.562.063.893Zm-1.626 0c.042-.331.063-.628.063-.894v-.02c-.001-.77-.169-1.271-.438-1.578-.341-.391-1.046-.69-2.533-.529-1.505.163-2.347.537-2.824 1.025-.462.472-.705 1.179-.705 2.319 0 1.211.175 1.926.558 2.361.365.414 1.084.751 2.657.751 1.21 0 1.902-.394 2.344-.938.475-.584.742-1.44.878-2.497Z"></path>
            <path d="M14.5 14.25a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm-5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"></path>
        </svg>
    )
}
function CodeReviewSvg() {
    return (
        <svg className="sub-menu__svg" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true">
            <path d="M10.3 6.74a.75.75 0 0 1-.04 1.06l-2.908 2.7 2.908 2.7a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 0 1 1.06.04Zm3.44 1.06a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.908-2.7-2.908-2.7Z"></path>
            <path d="M1.5 4.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 0 1-1.75 1.75h-9.69l-3.573 3.573A1.458 1.458 0 0 1 5 21.043V18.5H3.25a1.75 1.75 0 0 1-1.75-1.75ZM3.25 4a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 0 1 .75.75v3.19l3.72-3.72a.749.749 0 0 1 .53-.22h10a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25Z"></path>
        </svg>
    )
}
function IssuesSvg() {
    return (
        <svg className="sub-menu__svg" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true">
            <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14Z"></path>
        </svg>
    )
}
function DiscussionsSvg() {
    return (
        <svg className="sub-menu__svg" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true">
            <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
            <path d="M22.5 8.75a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 0 1 .53.22l2.72 2.72v-2.19a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5Z"></path>
        </svg>
    )
}
function ArrowDownSvg() {
    return (
        <svg className="nav__svg" opacity="0.5" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
            <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
        </svg>
    )
}
function LinkSvg() {
    return (
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
            <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
        </svg>
    )
}
function EnterprisePlatformSvg() {
    return (
        <svg className="sub-menu__svg" aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true">
            <path d="M11.063 1.456a1.749 1.749 0 0 1 1.874 0l8.383 5.316a1.751 1.751 0 0 1 0 2.956l-8.383 5.316a1.749 1.749 0 0 1-1.874 0L2.68 9.728a1.751 1.751 0 0 1 0-2.956Zm1.071 1.267a.25.25 0 0 0-.268 0L3.483 8.039a.25.25 0 0 0 0 .422l8.383 5.316a.25.25 0 0 0 .268 0l8.383-5.316a.25.25 0 0 0 0-.422Z"></path><path d="M1.867 12.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z"></path><path d="M1.867 16.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z"></path>
        </svg>
    )
}
function PathSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" class="mr-1"><path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z">
            </path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
        </svg>
    )
}
function SearchSvg() {
    return (
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
            <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
        </svg>
    )
}
function CloseSvg() {
    return (
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
            <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
        </svg>
    )
}

export function Header() {
    const [isHideModalWindow, setIsHideModalWindow] = useState(false);
    const [search, setSearchValue] = useState("");
    const [isSearchShow, setIsSearch] = useState(false);
    // const isHideModalWindow = false;

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

    return (
        <header className="header">
            <div className="modal-window-input">
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
            </div>
            <nav className="nav">
                <div className="nav__wrapper">
                    <a href="#" className="logo"><LogoSvg></LogoSvg></a>
                    <ul className="nav__menu">
                        <li className="nav__item"><a href="#" className="nav__link">product
                        <span className="nav__span">
                            <ArrowDownSvg></ArrowDownSvg>
                        </span></a>
                            <div className="nav__wrapper-sub-menu nav__wrapper-sub-menu--row">
                                <ul className="sub-menu sub-menu__product">
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <ActionsSvg></ActionsSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Actions</h6>
                                                <p className="sum-menu__text">Automate any workflow</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <PackagesSvg></PackagesSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Packages</h6>
                                                <p className="sum-menu__text">Host and manage packages</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <SecuritySvg></SecuritySvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Security</h6>
                                                <p className="sum-menu__text">Find and fix vulnerabilities</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <CodespacesSvg></CodespacesSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Codespaces</h6>
                                                <p className="sum-menu__text">Instant dev environments</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <GitHubCopilotSvg></GitHubCopilotSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">GitHub Copilot</h6>
                                                <p className="sum-menu__text">Write better code with AI</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <CodeReviewSvg></CodeReviewSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Code review</h6>
                                                <p className="sum-menu__text">Manage code changes</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <IssuesSvg></IssuesSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Issues</h6>
                                                <p className="sum-menu__text">Plan and track work</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <DiscussionsSvg></DiscussionsSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">discussions</h6>
                                                <p className="sum-menu__text">Collaborate outside of code</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-menu sub-menu__product">
                                    <li className='sub-menu__title-li'>Explore</li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            All features
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Documentation <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            GitHub Skills <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Blog <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link">Solutions
                        <span className="nav__span">
                            <ArrowDownSvg></ArrowDownSvg>
                        </span></a>
                            <div className="nav__wrapper-sub-menu nav__wrapper-sub-menu--column nav__wrapper-sub-menu--solutions">
                                <ul className="sub-menu sub-menu__solutions">
                                    <li className='sub-menu__title-li'>For</li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Enterprise
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Teams
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Startups
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Education  <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-menu sub-menu__solutions">
                                    <li className='sub-menu__title-li'>By Solution</li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            CI/CD & Automation
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            DevOps
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            DevSecOps <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-menu sub-menu__solutions">
                                    <li className='sub-menu__title-li'>Resources</li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Learning Pathways <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            White papers, Ebooks, Webinars <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Customer Stories
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Partners  <span className='sub-menu__span'><LinkSvg></LinkSvg></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link">Open source
                        <span className="nav__span">
                            <ArrowDownSvg></ArrowDownSvg>
                        </span></a>
                            <div className="nav__wrapper-sub-menu nav__wrapper-sub-menu--column nav__wrapper-sub-menu--open-source">
                                <ul className="sub-menu sub-menu__open-source">
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">GitHub Sponsors</h6>
                                                <p className="sum-menu__text">Fund open source developers</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-menu sub-menu__open-source">
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">The ReadME Project</h6>
                                                <p className="sum-menu__text">GitHub community article</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-menu sub-menu__open-source">
                                    <li className='sub-menu__title-li'>Repositories</li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Topics
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Trending
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            Collections
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link">Enterprise
                        <span className="nav__span">
                            <ArrowDownSvg></ArrowDownSvg>
                        </span></a>
                            <div className="nav__wrapper-sub-menu nav__wrapper-sub-menu--column nav__wrapper-sub-menu--enterprise">
                                <ul className="sub-menu sub-menu__enterprise">
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <EnterprisePlatformSvg></EnterprisePlatformSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Enterprise platform</h6>
                                                <p className="sum-menu__text">AI-powered developer platform</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="sub-menu sub-menu__enterprise">
                                    <li className='sub-menu__title-li'>Available add-ons</li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <SecuritySvg></SecuritySvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Actions</h6>
                                                <p className="sum-menu__text">Automate any workflow</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <GitHubCopilotSvg></GitHubCopilotSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Actions</h6>
                                                <p className="sum-menu__text">Automate any workflow</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="sub-menu__item">
                                        <a href="#" className="sub-menu__link">
                                            <ActionsSvg></ActionsSvg>
                                            <div className="sub-menu__wrapper">
                                                <h6 className="sub-menu__title">Actions</h6>
                                                <p className="sum-menu__text">Automate any workflow</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link">Pricing</a></li>
                    </ul>
                </div>
                <div className="nav__wrapper">
                    <button className="nav__btn-search" onClick={ShowModalWindow}>
                        <div className="nav__btn-wrapper">
                            <span className="nav__btn-span nav__btn-span--search"><SearchSvg></SearchSvg></span>
                            <span className="nav__btn-text">Search GitHub</span>
                        </div>
                        <span className="nav__btn-span"><PathSvg></PathSvg></span>
                    </button>
                    <a className="nav__btn" href="#">Sign in</a>
                    <a className="nav__btn nav__btn--border" href="#">Sign up</a>
                </div>
            </nav>
            <div className="container">
                <h1>hello world</h1>
            </div>
        </header>
    )
}