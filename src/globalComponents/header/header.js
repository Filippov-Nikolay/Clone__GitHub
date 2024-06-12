import React from 'react';
import '../globalCss/header.css'

function LogoSVG() {
    return(
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C24.84 0 32 7.16 32 16C31.9991 19.3524 30.947 22.6201 28.9917 25.3432C27.0364 28.0664 24.2763 30.1077 21.1 31.18C20.3 31.34 20 30.84 20 30.42C20 29.88 20.02 28.16 20.02 26.02C20.02 24.52 19.52 23.56 18.94 23.06C22.5 22.66 26.24 21.3 26.24 15.16C26.24 13.4 25.62 11.98 24.6 10.86C24.76 10.46 25.32 8.82 24.44 6.62C24.44 6.62 23.1 6.18 20.04 8.26C18.76 7.9 17.4 7.72 16.04 7.72C14.68 7.72 13.32 7.9 12.04 8.26C8.98 6.2 7.64 6.62 7.64 6.62C6.76 8.82 7.32 10.46 7.48 10.86C6.46 11.98 5.84 13.42 5.84 15.16C5.84 21.28 9.56 22.66 13.12 23.06C12.66 23.46 12.24 24.16 12.1 25.2C11.18 25.62 8.88 26.3 7.44 23.88C7.14 23.4 6.24 22.22 4.98 22.24C3.64 22.26 4.44 23 5 23.3C5.68 23.68 6.46 25.1 6.64 25.56C6.96 26.46 8 28.18 12.02 27.44C12.02 28.78 12.04 30.04 12.04 30.42C12.04 30.84 11.74 31.32 10.94 31.18C7.75328 30.1193 4.98147 28.082 3.01778 25.3573C1.05409 22.6325 -0.00176096 19.3586 2.20462e-06 16C2.20462e-06 7.16 7.16 0 16 0Z" fill="#F0F6FC"/>
        </svg>
    )
}

function NotificationSVG() {
    return(
        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.28097 16.5C7.76822 16.5002 8.23878 16.3225 8.60427 16.0002C8.96977 15.678 9.20506 15.2334 9.26597 14.75C9.28297 14.613 9.16897 14.5 9.03097 14.5H5.53097C5.39297 14.5 5.27897 14.613 5.29597 14.75C5.35687 15.2334 5.59217 15.678 5.95766 16.0002C6.32316 16.3225 6.79371 16.5002 7.28097 16.5ZM2.28097 5.5C2.28097 4.17392 2.80775 2.90215 3.74543 1.96447C4.68312 1.02678 5.95488 0.5 7.28097 0.5C8.60705 0.5 9.87882 1.02678 10.8165 1.96447C11.7542 2.90215 12.281 4.17392 12.281 5.5V8.447C12.281 8.497 12.296 8.545 12.323 8.586L14.026 11.141C14.1777 11.3697 14.2647 11.6352 14.2777 11.9093C14.2906 12.1835 14.229 12.456 14.0995 12.698C13.97 12.9399 13.7773 13.1423 13.542 13.2835C13.3066 13.4247 13.0374 13.4995 12.763 13.5H1.79897C1.52395 13.5007 1.25393 13.4265 1.01782 13.2855C0.781724 13.1444 0.588439 12.9418 0.458671 12.6993C0.328902 12.4568 0.26754 12.1836 0.281156 11.9089C0.294773 11.6343 0.382854 11.3685 0.535967 11.14L2.23897 8.586C2.26614 8.54472 2.28073 8.49642 2.28097 8.447V5.5ZM7.28097 2C6.35271 2 5.46247 2.36875 4.80609 3.02513C4.14972 3.6815 3.78097 4.57174 3.78097 5.5V8.447C3.78097 8.793 3.67897 9.13 3.48697 9.417L1.78397 11.973C1.78194 11.9759 1.78089 11.9794 1.78097 11.983L1.78197 11.989C1.78197 11.991 1.78397 11.993 1.78597 11.995L1.79197 11.999L1.79897 12H12.763L12.77 11.999L12.776 11.995L12.78 11.989L12.781 11.982C12.781 11.9784 12.78 11.9749 12.778 11.972L11.075 9.418C10.8832 9.13088 10.7808 8.7933 10.781 8.448V5.5C10.781 4.57174 10.4122 3.6815 9.75584 3.02513C9.09946 2.36875 8.20922 2 7.28097 2Z" fill="#F0F6FC"/>
        </svg>
    )
}

function PlusSVG() {
    return(
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.03125 0.5C6.23016 0.5 6.42093 0.579018 6.56158 0.71967C6.70223 0.860322 6.78125 1.05109 6.78125 1.25V5.5H11.0312C11.2302 5.5 11.4209 5.57902 11.5616 5.71967C11.7022 5.86032 11.7812 6.05109 11.7812 6.25C11.7812 6.44891 11.7022 6.63968 11.5616 6.78033C11.4209 6.92098 11.2302 7 11.0312 7H6.78125V11.25C6.78125 11.4489 6.70223 11.6397 6.56158 11.7803C6.42093 11.921 6.23016 12 6.03125 12C5.83234 12 5.64157 11.921 5.50092 11.7803C5.36027 11.6397 5.28125 11.4489 5.28125 11.25V7H1.03125C0.832338 7 0.641572 6.92098 0.50092 6.78033C0.360268 6.63968 0.28125 6.44891 0.28125 6.25C0.28125 6.05109 0.360268 5.86032 0.50092 5.71967C0.641572 5.57902 0.832338 5.5 1.03125 5.5H5.28125V1.25C5.28125 1.05109 5.36027 0.860322 5.50092 0.71967C5.64157 0.579018 5.83234 0.5 6.03125 0.5Z" fill="#F0F6FC"/>
        </svg>
    )
}

function MinusSVG() {
    return(
        <svg width="9" height="4" viewBox="0 0 9 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_1_12621" fill="white">
                <path d="M0.140625 0H8.14062V4H0.140625V0Z"/>
            </mask>
            <path d="M0.140625 0V-4H-3.85938V0H0.140625ZM8.14062 0H12.1406V-4H8.14062V0ZM0.140625 4H8.14062V-4H0.140625V4ZM4.14062 0V4H12.1406V0H4.14062ZM4.14062 4V0H-3.85938V4H4.14062Z" fill="#F0F6FC" mask="url(#path-1-inside-1_1_12621)"/>
        </svg>
    )
}

function ProfileLogoSVG() {
    return(
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g filter="url(#filter0_d_1_12624)">
                <rect x="1.14062" y="1.25" width="20" height="20" rx="10" fill="white" fillOpacity="0.1" shapeRendering="crispEdges"/>
                <rect x="1.14062" y="1.25" width="20" height="20" rx="10" fill="url(#pattern0_1_12624)" shapeRendering="crispEdges"/>
            </g>
            <defs>
                <filter id="filter0_d_1_12624" x="0.140625" y="0.25" width="22" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1_12624"/>
                    <feOffset/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.964706 0 0 0 0 0.988235 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_12624"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_12624" result="shape"/>
                </filter>
                <pattern id="pattern0_1_12624" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1_12624" transform="scale(0.00238095)"/>
                </pattern>
                <image id="image0_1_12624" width="420" height="420" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaQAAAGkCAIAAADxLsZiAAAF2UlEQVR4nOzXsa3bQBAAUctgD6qTEWtQpDqZXQkOVIABw38Jcd5rYBe40+i4rbV+Adzd76sXAJggdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QMI2NunYz7FZ/LPX+3n1Cv+TW/cVZm6dlx2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkDCNjbp9X6OzZpx7OfVK1B0v5/SDC87IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMStqsX+G7Hfl69An/hjPjwsgMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkgQOyBB7IAEsQMSxA5IEDsgQeyABLEDEsQOSBA7IEHsgASxAxLEDkh4rLWu3gHgx3nZAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCB2QIHZAgtgBCX8CAAD///H1IpKkKT1kAAAAAElFTkSuQmCC"/>
            </defs>
        </svg>
    )
}

function SearchSVG() {
    return(
        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#8d96a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export function Header() {

    return(
        <header className='header'>
            <div className='header__wrapper'>
                <div className='header__logo'>
                    <a><LogoSVG></LogoSVG></a>
                </div>
                <div className='header__search-wrapper'>
                    <input type='text' placeholder='Search or jump to...' className='input-placeholder'/>
                    <button className='btn__slash'>/</button>
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