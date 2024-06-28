import './css/header.css'
import { 
    LogoSvg, ActionsSvg, PackagesSvg, SecuritySvg, 
    CodespacesSvg, GitHubCopilotSvg, CodeReviewSvg,
    IssuesSvg, DiscussionsSvg, ArrowDownSvg, LinkSvg,
    EnterprisePlatformSvg, PathSvg, SearchSvg, CloseSvg, 
    OcticonCode, ArrowSymbolMktg, OcticonBriefcase, OcticonLock,
    OcticonCodeConduct, LogoGithub, LogoTwitter, LogoFacebook, 
    LogoLinkedIn, LogoYouTube, LogoTwitch, LogoTikTok, LogoGitHub
} from '../svgComponents/svgComponents'
import logoNLO from '../img/header_element_nlo.png'
import React, { useState, useRef, useEffect } from "react";
import debounce from 'lodash.debounce';
import useIntersectionObserver from './AnimationHook/UseIntersectionObserver';
import Tilt from 'react-vanilla-tilt'

const perspectiveValue = 5000;



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
function Card() {
    const cardRefs = {
        cardRef1: useRef(null),
        cardRef2: useRef(null),
        cardRef3: useRef(null),
        cardRef4: useRef(null)
    };
    
    const handleMouseMove = debounce((e, refName) => {
    const card = cardRefs[refName].current;
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
    }, 1);

    const elementsRef = useIntersectionObserver('element-show');

    return (
        <div className="card-content">
            <Tilt className='tilt-item' options={{ perspective: perspectiveValue, }} style={{ }}>
                <div className="card-content__item card-content__item--green" onMouseMove={(e) => handleMouseMove(e, 'cardRef1')} ref={cardRefs.cardRef1}>
                    <div className="card-content__main">
                        <h3 className="card-content__title">
                            <span className="card-content__span">GitHub Actions </span>
                            automates your build, test, and deployment workflow with simple and secure CI/CD.
                        </h3>
                        <a href="#" className="btn-link">Discover GitHub Actions<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                    </div>
                    <div className="card-content__wrapper-img">
                        <img src="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png" alt=""/>
                    </div>
                </div>
            </Tilt>
            <div className="card-content__wrapper-flex">
                <Tilt className='tilt-item' options={{ perspective: perspectiveValue, }} style={{ }}>
                    <div className="card-content__item card-content__item--green card-content__item--column" onMouseMove={(e) => handleMouseMove(e, 'cardRef2')} ref={cardRefs.cardRef2}> 
                        <div className="card-content__main">
                            <h3 className="card-content__title">
                                <span className="card-content__span">GitHub Codespaces </span>
                                offers a complete dev environment in seconds. Code, build, test, and open pull requests from any repo.
                            </h3>
                            <a href="#" className="btn-link">Check out GitHub Codespaces<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                        </div>
                        <div className="card-content__wrapper-img anim-block__card-img" ref={(el) => elementsRef.current[0] = el}>
                            <img src="https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png" alt=""/>
                        </div>
                    </div>
                </Tilt>
                <Tilt className='tilt-item' options={{ perspective: perspectiveValue, }} style={{ }}>
                    <div className="card-content__item card-content__item--green card-content__item--column" onMouseMove={(e) => handleMouseMove(e, 'cardRef3')} ref={cardRefs.cardRef3}>
                        <div className="card-content__main">
                            <h3 className="card-content__title">
                                <span className="card-content__span">GitHub Mobile and Copilot </span>
                                now let you manage projects and converse with your AI pair programmer on the go.
                            </h3>
                            <a href="#" className="btn-link">Download GitHub Mobile<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                        </div>
                        <div className="card-content__wrapper-img anim-block__card-img" ref={(el) => elementsRef.current[1] = el}>
                            <img src="https://github.githubassets.com/assets/illu-mobile-chat-9e7549906574.webp" alt=""/>
                        </div>
                    </div>
                </Tilt>
            </div>
            <div className='event event--card'>
                <div className="event__interval-middle event__interval-middle--transparent-to-blue anim-block__interval-middle" ref={(el) => elementsRef.current[2] = el}></div>
            </div>
        </div>
    )
}
function CardFaster() {
    const cardRefs = {
        cardRef1: useRef(null),
        cardRef2: useRef(null),
        cardRef3: useRef(null),
        cardRef4: useRef(null)
    };
    
    const handleMouseMove = debounce((e, refName) => {
    const card = cardRefs[refName].current;
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
    }, 1);

    const elementsRef = useIntersectionObserver('element-show');

    return (
        <div className="card-content">
            <Tilt className='tilt-item' options={{ perspective: perspectiveValue, }} style={{ }}>
                <div className="card-content__item card-content__item--blue" onMouseMove={(e) => handleMouseMove(e, 'cardRef1')} ref={cardRefs.cardRef1}>
                    <div className="card-content__main">
                        <h3 className="card-content__title">
                            <span className="card-content__span">Code scanning </span>
                            is our code analysis tool that helps you remediate issues in your code.
                        </h3>
                        <a href="#" className="btn-link">Download the latest SAST ebook<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                    </div>
                    <div className="card-content__wrapper-img anim-block__card-content-wrapper-img-first" ref={(el) => elementsRef.current[0] = el}>
                        <img src="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png" alt=""/>
                    </div>
                </div>
            </Tilt>
            <div className="card-content__wrapper-flex">
                <Tilt className='tilt-item' options={{ perspective: perspectiveValue, }} style={{ }}>
                    <div className="card-content__item card-content__item--blue card-content__item--column" onMouseMove={(e) => handleMouseMove(e, 'cardRef2')} ref={cardRefs.cardRef2}> 
                        <div className="card-content__main">
                            <h3 className="card-content__title">
                                <span className="card-content__span">Dependabot makes </span>
                                it easy to find and fix vulnerable dependencies in your supply chain.
                            </h3>
                            <a href="#" className="btn-link">Explore Dependabot<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                        </div>
                        <div className="card-content__wrapper-img anim-block__card-content-wrapper-img-second" ref={(el) => elementsRef.current[1] = el}>
                            <img src="https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png" alt=""/>
                        </div>
                    </div>
                </Tilt>
                <Tilt className='tilt-item' options={{ perspective: perspectiveValue, }} style={{ }}>
                    <div className="card-content__item card-content__item--blue card-content__item--column" onMouseMove={(e) => handleMouseMove(e, 'cardRef3')} ref={cardRefs.cardRef3}>
                        <div className="card-content__main">
                            <h3 className="card-content__title">
                                <span className="card-content__span">Secret scanning </span>
                                automatically looks for partner patterns and prevents fraudulent use of accidentally committed secrets.
                            </h3>
                            <a href="#" className="btn-link">Download GitHub Mobile<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                        </div>
                        <div className="card-content__wrapper-img anim-block__card-content-wrapper-img-tree" ref={(el) => elementsRef.current[2] = el}>
                            <img src="https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png" alt=""/>
                        </div>
                    </div>
                </Tilt>
            </div>
            <div className='event event--card'>
                <div className="event__interval-middle event__interval-middle--transparent-to-pink anim-block__event-middle-second" ref={(el) => elementsRef.current[3] = el}></div>
            </div>
        </div>
    )
}
function CardCollaboration() {
    const cardRefs = {
        cardRef1: useRef(null),
        cardRef2: useRef(null),
        cardRef3: useRef(null),
        cardRef4: useRef(null)
    };
    
    const handleMouseMove = debounce((e, refName) => {
    const card = cardRefs[refName].current;
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
    }, 1);

    return (
        <>
            <div className="card-content card-collaboration">
                <Tilt className='tilt-item' options={{ perspective: perspectiveValue, }} style={{ }}>
                    <div className="card-content__item card-content__item--pink" onMouseMove={(e) => handleMouseMove(e, 'cardRef1')} ref={cardRefs.cardRef1}>
                        <div className="card-content__main">
                            <h3 className="card-content__title">
                                <span className="card-content__span">GitHub Sponsors </span>
                                lets you support your favorite open source maintainers and projects.
                            </h3>
                            <a href="#" className="btn-link">Invest with GitHub Sponsors<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                        </div>
                        <div className="card-content__wrapper-img">
                            <img src="https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png" alt=""/>
                        </div>
                    </div>
                </Tilt>
                <div className="card-content__wrapper-flex">
                    <Tilt className='tilt-item' options={{ perspective: perspectiveValue, }} style={{ }}>
                        <div className="card-content__item card-content__item--pink card-content__item--column" onMouseMove={(e) => handleMouseMove(e, 'cardRef2')} ref={cardRefs.cardRef2}> 
                            <div className="card-content__main">
                                <h3 className="card-content__title">
                                    <span className="card-content__span">GitHub Discussions </span>
                                    creates space to ask questions and have open-ended conversations.
                                </h3>
                                <a href="#" className="btn-link">Jump into GitHub Discussions<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                            </div>
                            <div className="card-content__wrapper-img">
                            <img src="https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png" alt=""/>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt className='tilt-item' options={{ perspective: perspectiveValue, }} style={{ }}>
                        <div className="card-content__item card-content__item--pink card-content__item--column" onMouseMove={(e) => handleMouseMove(e, 'cardRef3')} ref={cardRefs.cardRef3}>
                            <div className="card-content__main">
                                <h3 className="card-content__title">
                                    <span className="card-content__span">Pull requests </span>
                                    allow real-time communication and collaboration about code changes.
                                </h3>
                                <a href="#" className="btn-link">Check out pull requests<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                            </div>
                            <div className="card-content__wrapper-img">
                                <img src="https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png" alt=""/>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
            <div className="application-security">
            <div className='event'>
                <div className="event__interval-middle event__interval-middle--transparent-to-purple"></div>
                <div className="event__middle event__middle--purple">
                    <OcticonCode></OcticonCode>
                </div>
            </div>
            <div className="application-security__content application-security__content-card-collaboration">
                <h3 className="content-sub-title content-sub-title--big">
                    Over 100 million developers call GitHub home<sup>3</sup>
                </h3>
                <p className="content-sub-text content-sub-title--gray">
                    Whether you`re scaling your startup or just learning how to code, GitHub is your home. Join the world`s largest developer platform to build the innovations that empower humanity. Let`s build from here.
                </p>
                <div className="header-form">
                    <form className='header-form__form' action="POST">
                        <input className='header-form__input' type="text" placeholder='Email address'/>
                        <button className='header-form__btn'>Sign up for GitHub</button>
                    </form>
                    <div className="header-form__decor"></div>
                    <button className='header-form__btn-start'>Start a free enterprise trial <span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></button>
                </div>
            </div>
        </div>
        </>
    )
}
function ApplicationSecurity() {
    const cardRefs = {
        cardRef1: useRef(null)
    };
    
    const handleMouseMove = debounce((e, refName) => {
    const card = cardRefs[refName].current;
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
    }, 1);

    const elementsRef = useIntersectionObserver('element-show');

    return (
        <>
        <div className="application-security">
            <div className='event'>
                <div className="event__middle event__middle--blue anim-block__event-middle" ref={(el) => elementsRef.current[0] = el}>
                    <OcticonLock></OcticonLock>
                </div>
                <div className="event__interval-middle event__interval-middle--blue-to-transparent anim-block__interval-middle" ref={(el) => elementsRef.current[1] = el}></div>
            </div>
            <div className="application-security__content">
                <h2 className="content-title anim-block__content-title" ref={(el) => elementsRef.current[2] = el}>Application security</h2>
                <h3 className="content-sub-title anim-block__content-sub-title" ref={(el) => elementsRef.current[3] = el}>
                    <span class="content-sub-title__accent content-sub-title__accent--blue">Empower developers</span>
                    With GitHub, you can secure code in minutes.
                </h3>
            </div>
        </div>
        <div className="card-content">
            <div className="productivity__main">
                <div className="productivity-block-anime">
                    <Tilt className='tilt-item' options={{ perspective: perspectiveValue, }} style={{ }}>
                        <div className="card-content__item card-content__item--blue" onMouseMove={(e) => handleMouseMove(e, 'cardRef1')} ref={cardRefs.cardRef1}>
                            <div className="card-content__main">
                                <h3 className="card-content__title">
                                    <span className="card-content__span">GitHub Actions </span>
                                    automates your build, test, and deployment workflow with simple and secure CI/CD.
                                </h3>
                                <a href="#" className="btn-link">Discover GitHub Actions<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                            </div>
                            <div className="card-content__wrapper-img">
                                <img src="https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png" alt=""/>
                            </div>
                        </div>
                    </Tilt>
                    <img className='application-security__productivity-block-anime__blur productivity-block-anime__blur' src="https://github.githubassets.com/assets/bg-glow-blue-036b8dc2d1ce.png" alt=""/>
                    <div class="productivity-block-anime__second application-security__productivity-block-anime__second anim-block__productivity-block-anime-second-application" ref={(el) => elementsRef.current[4] = el}>
                        <img src="https://github.githubassets.com/assets/illu-ghas-list-84af1f1ce2b8.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="river">
            <div className='event'>
                <div className="event__interval-middle event__interval-middle--transparent-to-blue"></div>
                <div className="event__interval-middle event__interval-middle--blue-to-transparent"></div>
                <div className='event__interval-more-info'>
                    <img src="https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg" alt=""></img>
                </div>
            </div>
            <div className="river__wrapper">
                <div className="river__content anim-block__river-content-seconds" ref={(el) => elementsRef.current[5] = el}>
                    <h2 className="river__title">
                        <span className='river__span-title'>GitHub Advanced Security</span> enables you to find and fix vulnerabilities with ease and ship secure code quickly.
                    </h2>
                    <a href="#" className="btn-link">Dive into GitHub Advanced Security <span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                </div>
                <div className="fact fact--application-security anim-block__fact-second" ref={(el) => elementsRef.current[6] = el}>
                    <div className="fact__content">
                        <div className="fact__title-top fact__title-top--blue">Did you know?</div>
                        <h3 className="fact__title fact__title--blue">7x faster</h3>
                        <p className="fact__sub-text">vulnerability fixes with GitHub<sup>1</sup></p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
function Collaboration() {
    const cardRefs = {
        cardRef1: useRef(null)
    };
    
    const handleMouseMove = debounce((e, refName) => {
    const card = cardRefs[refName].current;
    if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
    }, 1);

    const elementsRef = useIntersectionObserver('element-show');

    return (
        <>
        <div className="application-security">
            <div className='event'>
                <div className="event__middle event__middle--pink">
                    <OcticonCodeConduct></OcticonCodeConduct>
                </div>
                <div className="event__interval-middle event__interval-middle--pink-to-transparent anim-block__interval-middle-second" ref={(el) => elementsRef.current[2] = el}></div>
            </div>
            <div className="application-security__content">
                <h2 className="content-title anim-block__content-title-second" ref={(el) => elementsRef.current[0] = el}>Collaboration</h2>
                <h3 className="content-sub-title anim-block__content-sub-title-second" ref={(el) => elementsRef.current[1] = el}>
                    <span class="content-sub-title__accent content-sub-title__accent--pink">Supercharge collaboration</span>
                    GitHub helps your teams work more efficiently together.
                </h3>
            </div>
        </div>
        <div className="card-content">
            <div className="productivity__main">
                <div className="productivity-block-anime">
                    <div className="productivity-block-anime__first">
                        <img src="https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png" alt=""/>
                    </div>
                    <img className='application-security__productivity-block-anime__blur productivity-block-anime__blur' src="https://github.githubassets.com/assets/bg-glow-purple-6e9a6a96cb04.png" alt=""/>
                    <div class="productivity-block-anime__second application-security__productivity-block-anime__second">
                        <img src="https://github.githubassets.com/assets/illu-projects-2-26077f1dd188.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className="river">
            <div className='event'>
                <div className="event__interval-middle event__interval-middle--transparent-to-pink"></div>
                <div className="event__interval-middle event__interval-middle--pink-to-transparent"></div>
                <div className='event__interval-more-info'>
                    <img src="https://github.githubassets.com/assets/git-branch-collaboration-2-e46b1fb1d363.svg" alt=""></img>
                </div>
            </div>
            <div className="river__wrapper">
                <div className="river__content">
                    <h2 className="river__title">
                        <span className='river__span-title'>GitHub Issues and GitHub Projects</span> supply project management tools that adapt to your team alongside your code.
                    </h2>
                    <a href="#" className="btn-link">Get started with GitHub Issues<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                </div>
                <div className="fact fact--application-security">
                    <div className="fact__content">
                        <div className="fact__title-top fact__title-top--pink">Did you know?</div>
                        <h3 className="fact__title fact__title--pink">80%</h3>
                        <p className="fact__sub-text">reduction in onboarding time with GitHub<sup>2</sup></p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
function River() {
    const elementsRef = useIntersectionObserver('element-show');

    return (
        <div className="river">
            <div className='event'>
                <div className="event__interval-middle event__interval-middle--transparent-to-green"></div>
                <div className="event__interval-middle event__interval-middle--green-to-transparent"></div>
                <div className='event__interval-more-info'>
                    <img src="https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg" alt=""></img>
                </div>
            </div>
            <div className="river__wrapper">
                <div className="river__content anim-block__river-content" ref={(el) => elementsRef.current[1] = el}>
                    <h2 className="river__title">
                        <span className='river__span-title'>GitHub Copilot</span> empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.
                    </h2>
                    <a href="#" className="btn-link">Explore GitHub Copilot <span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                </div>
                <div className="fact anim-block__fact" ref={(el) => elementsRef.current[2] = el}>
                    <div className="fact__content">
                        <div className="fact__title-top fact__title-top--green">Did you know?</div>
                        <h3 className="fact__title fact__title--green">22% increase</h3>
                        <p className="fact__sub-text">in developer productivity after three years with GitHub</p>
                        <a href="#" className="btn-link">Read the report<span className='header-form__btn-decor-arrow'><ArrowSymbolMktg></ArrowSymbolMktg></span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__content">
                    <div className="footer__item">
                        <div className="footer__wrapper">
                            <a className="footer__logo" href="#"><LogoGithub></LogoGithub></a>
                            <h3 className='footer__title'>Subscribe to our developer newsletter</h3>
                            <p className='footer__sub-text'>Get tips, technical guides, and best practices. Twice a month. Right in your inbox.</p>
                            <a className='footer__btn' href="#">Subscribe</a>
                        </div>
                    </div>
                    <div className="footer__item-wrapper">
                        <div className="footer__item">
                            <ul className="footer-menu__list">
                                <li className="footer-menu__item footer-menu__item--title">
                                    Product
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Features</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Enterprise</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Copilot</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Security</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Pricing</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Team</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Resources</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Roadmap</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Compare GitHub</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__item">
                            <ul className="footer-menu__list">
                                <li className="footer-menu__item footer-menu__item--title">
                                    Platform
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Developer API</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Partners</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Education</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Electron</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">GitHub CLI</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">GitHub Desktop</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">GitHub Mobile</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__item">
                            <ul className="footer-menu__list">
                                <li className="footer-menu__item footer-menu__item--title">
                                    Support
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Docs</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Community Forum</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Professional Services</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Premium Support</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Skills</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Status</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Contact GitHub</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__item">
                            <ul className="footer-menu__list">
                                <li className="footer-menu__item footer-menu__item--title">
                                    Company
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">About</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Customer stories</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Blog</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">The ReadME Project</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Careers</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Press</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Inclusion</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Social Impact</a>
                                </li>
                                <li className="footer-menu__item">
                                    <a href="#" className="footer-menu__link">Shop</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-sub-content">
                <div className="container">
                    <div className="footer-sub-content__wrapper">
                        <div className="footer-sub-content__item">
                            <ul className="footer-sub-content-menu__list">
                                <li className="footer-sub-content-menu__item">© 2024 GitHub, Inc.</li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#">Terms</a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#">Privacy</a>
                                    (<a className="footer-sub-content-menu__link" href="#">Updated 08/2022</a>)
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#">Sitemap</a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#">What is Git?</a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#">Manage cookies</a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#">Do not share my personal information</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-sub-content__item">
                            <ul className="footer-sub-content-menu__list">
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#"><LogoTwitter></LogoTwitter></a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#"><LogoFacebook></LogoFacebook></a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#"><LogoLinkedIn></LogoLinkedIn></a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#"><LogoYouTube></LogoYouTube></a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#"><LogoTwitch></LogoTwitch></a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#"><LogoTikTok></LogoTikTok></a>
                                </li>
                                <li className="footer-sub-content-menu__item">
                                    <a className="footer-sub-content-menu__link" href="#"><LogoGitHub></LogoGitHub></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
function SectionContent() {
    const elementsRef = useIntersectionObserver('element-show');

    return (
        <div className="productivity">
            <div className="container">
                <div className="productivity__content">
                    <div className='event'>
                        <div className="event__middle event__middle--green">
                            <OcticonBriefcase></OcticonBriefcase>
                        </div>
                        <div className="event__interval-middle event__interval-middle--green-to-transparent anim-block__event-interval" ref={(el) => elementsRef.current[0] = el}></div>
                    </div>
                    <div className="productivity__event-info">
                        <h2 className="content-title">Productivity</h2>
                        <h3 className="content-sub-title"> 
                            <span class="content-sub-title__accent content-sub-title__accent--green">Accelerate innovation</span>
                            Our AI-powered platform increases the pace of software development.
                        </h3>
                    </div>
                </div>
                <div className="productivity__main">
                    <div className="productivity-block-anime">
                        <div className="productivity-block-anime__first anim-block__productivity-block-anime-first" ref={(el) => elementsRef.current[1] = el}>
                            <img src="https://github.githubassets.com/assets/illu-copilot-editor-6474457a5b19.png" alt=""/>
                        </div>
                        <img className='productivity-block-anime__blur anim-block__productivity-block-anime' src="https://github.githubassets.com/assets/bg-glow-purple-6e9a6a96cb04.png" alt="" ref={(el) => elementsRef.current[2] = el}/>
                        <div class="productivity-block-anime__second anim-block__productivity-block-anime-second" ref={(el) => elementsRef.current[3] = el}>
                            <img src="https://github.githubassets.com/assets/illu-copilot-sidebar-3d2efb504577.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <River></River>
                <Card></Card>
                <ApplicationSecurity></ApplicationSecurity>
                <CardFaster></CardFaster>
            </div>
            <div className="wrapper-gradient">
                <div className="container">
                    <Collaboration></Collaboration>
                    <CardCollaboration></CardCollaboration>
                </div>
                <div className="global">
                    <div className="global__wrapper">
                        <video className='global__video' autoPlay loop muted>
                            <source type="video/mp4; codecs=hevc,mp4a.40.2" src="https://github.githubassets.com/assets/globe-900.hevc-58019d77b21c.mp4"/>
                            <source type="video/mp4; codecs=avc1.4D401E,mp4a.40.2" src="https://github.githubassets.com/assets/globe-900.h264-975e7b5ac572.mp4"/>
                        </video>
                        {/* <button className='global__btn'>Pause</button> */}
                    </div>
                    <div className="global__gradient"></div>
                    <div className="container">
                        <ul className="global__list">
                            <li className="global__item">
                                <sup>1</sup>This 7X times factor is based on data from the industry`s longest running analysis of fix rates Veracode State of Software Security 2023, which cites the average time to fix 50% of flaws as 198 days vs. GitHub`s fix rates of 72% of flaws with in 28 days which is at a minimum of 7X faster when compared.
                            </li>
                            <li className="global__item">
                                <sup>2</sup>The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced Security, a commissioned study conducted by Forrester Consulting, 2022. Results are for a composite organization based on interviewed customers.
                            </li>
                            <li className="global__item">
                                <sup>3</sup>There are now 100 million developers around the world using GitHub. <a className='global__link' href="#">Read the blog post.</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function HeaderContent() {
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelector('.global__video').play();
    });

    return (
        <>
            <div className="container">
                <div className='header-content'>
                    <div className='header-content__decor'><img src={logoNLO} alt=''/></div>
                    <div className='header-content__main'>
                        <div className='event'>
                            <div className="event__start"></div>
                            <div className="event__interval event__interval--purple"></div>
                            <div className="event__middle event__middle--purple">
                                <OcticonCode></OcticonCode>
                            </div>
                            <div className="event__interval-middle event__interval-middle--purple-to-green"></div>
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
            </div>
        </>
    )
}
function SignUp() {
    return (
        <a className="nav__btn nav__btn--border" href="#">Sign up</a>
    )
}
function BurgerMenu() {
    return (
        <div className="burger">
            <span className="burger__span"></span>
            <span className="burger__span"></span>
            <span className="burger__span"></span>
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
        <>
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
                        <div className="nav__sign-up-wrapper">
                            <SignUp></SignUp>
                        </div>
                        <a href="#" className="logo"><LogoSvg></LogoSvg></a>
                        <div className="nav__inner">
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
                            <div className="nav__wrapper-item">
                                <button className="nav__btn-search" onClick={ShowModalWindow}>
                                    <div className="nav__btn-wrapper">
                                        <span className="nav__btn-span nav__btn-span--search"><SearchSvg></SearchSvg></span>
                                        <span className="nav__btn-text">Search GitHub</span>
                                    </div>
                                    <span className="nav__btn-span"><PathSvg></PathSvg></span>
                                </button>
                                <a className="nav__btn" href="/Clone__GitHub/vb-app">Sign in</a>
                                <div className="nav__sign-up">
                                    <SignUp></SignUp>
                                </div>
                            </div>
                        </div>
                        <div className="burger-wrapper">
                            <BurgerMenu></BurgerMenu>
                        </div>
                    </div>
                </nav>
                <HeaderContent></HeaderContent>
            </header>
            <SectionContent></SectionContent>
            <Footer></Footer>
        </>
    )
}