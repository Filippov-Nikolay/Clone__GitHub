import './css/header.css'
import { 
    LogoSvg, ActionsSvg, PackagesSvg, SecuritySvg, 
    CodespacesSvg, GitHubCopilotSvg, CodeReviewSvg,
    IssuesSvg, DiscussionsSvg, ArrowDownSvg, LinkSvg,
    EnterprisePlatformSvg, PathSvg, SearchSvg, CloseSvg, 
    OcticonCode, ArrowSymbolMktg
} from '../svgComponents/svgComponents'
import logoNLO from '../img/header_element_nlo.png'
import React, { useState } from "react";

function OurPartners() {
    return (
        <div className="our-partners">
            <p className="our-partners__text">Trusted by the world`s leading organizations ↘️</p>
            <ul className="our-partners__list">
                <li className="our-partners__item">
                    <img className='out-partners__img' src="https://github.githubassets.com/assets/3m-0151c2fda0ce.svg" alt="3M logo"/>
                </li>
                <li className="our-partners__item">
                    <img className='out-partners__img' src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg" alt="KPMG logo"/>
                </li>
                <li className="our-partners__item">
                    <img className='out-partners__img' src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg" alt="Mercedes-Benz logo"/>
                </li>
                <li className="our-partners__item">
                    <img className='out-partners__img' src="https://github.githubassets.com/assets/sap-96248a56d312.svg" alt="SAP logo"/>
                </li>
                <li className="our-partners__item">
                    <img className='out-partners__img' src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg" alt="P&amp;G logo"/>
                </li>
                <li className="our-partners__item">
                    <img className='out-partners__img' src="https://github.githubassets.com/assets/telus-df0c2109df99.svg" alt="Telus logo"/>
                </li>
            </ul>
        </div>
    )
}

function HeaderContent() {
    return (
        <div className='header-content'>
            <div className='header-content__decor'><img src={logoNLO} alt=''/></div>
            <div className='header-content__main'>
                <div className='event'>
                    <div className="event__start"></div>
                    <div className="event__interval"></div>
                    <div className="event__middle">
                        <OcticonCode></OcticonCode>
                    </div>
                    <div className="event__interval-middle event__interval-middle--low"></div>
                </div>
                <div className='header-content__wrapper'>
                    <h1 className='header-content__title'>Let`s build from here</h1>
                    <p className='header-content__sub-title'>Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.</p>
                    <div className="header-form">
                        <form className='header-form__form' action="POST">
                            <input className='header-form__input' type="text" placeholder='Email address'/>
                            <button className='header-form__btn'>Sign up for GitHub</button>
                        </form>
                        <div className="header-form__decor"></div>
                        <button className='header-form__btn-start'>Start a free enterprise trial <span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></button>
                    </div>
                    <OurPartners></OurPartners>
                </div>
            </div>
        </div>
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
                <HeaderContent></HeaderContent>
            </div>
        </header>
    )
}