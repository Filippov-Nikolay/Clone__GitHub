import React, { useState } from "react";

import './css/main.css'

import { 
    OcticonCode, ArrowSymbolMktg, 
    OcticonLock, OcticonCodeConduct, OcticonBriefcase
} from '../svgComponents/svgComponents'
import logoNLO from '../img/header_element_nlo.png' 

import { ModalWindowInput } from "../components/ModalWindowInput/ModalWindowInput";
import { Nav } from "../components/Nav/Nav";
import { Form } from "../components/Form/Form";

import { EventPath } from "../components/EventPath/EventPath";

// Section
import { SectionHeader } from "../components/Section/SectionHeader/SectionHeader";
import { SectionMain } from "../components/Section/SectionMain/SectionMain";
import { SectionPromo } from "../components/Section/SectionPromo/SectionPromo";
import { SectionCard } from "../components/Section/SectionCard/SectionCard";

import { OurPartners } from "../components/OurPartners/OurPartners";
import { Globe } from "../components/Globe/Globe";
import { Footer } from "../components/Footer/Footer";

// SECTION
function Collaboration() {
    const CardsContentCollaboration = [
        {
            contentSpan: 'GitHub Sponsors',
            content: 'lets you support your favorite open source maintainers and projects.',
            contentLink: 'Invest with GitHub Sponsors',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png'
        },
        {
            contentSpan: 'GitHub Discussions',
            content: 'creates space to ask questions and have open-ended conversations.',
            contentLink: 'Jump into GitHub Discussions',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png',
        },
        {
            contentSpan: 'Pull requests',
            content: 'allow real-time communication and collaboration about code changes.',
            contentLink: 'Check out pull requests',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png',
        },
    ]

    return (
        <section className="collaboration">
            <div className="container">
                <SectionHeader
                    isStartEvent = {true}
                    event = {
                        <EventPath
                            isStartIcon = {false}
                            isStartInterval = {true}
                            startAfterColor = {'transparent'}
                            startBeforeColor = {'pink'}
                            isMiddleSvgComponent = {true}
                            middleSvgComponent = {<OcticonCodeConduct></OcticonCodeConduct>}
                            blurColor = {'pink'}
                            endAfterColor = {'pink'}
                            endBeforeColor = {'transparent'}
                        ></EventPath>
                    }
                    color = {'pink'}
                    title = {'Collaboration'}
                    subTitleAccent = {'Supercharge collaboration'}
                    subTitle={'GitHub helps your teams work more efficiently together.'}
                ></SectionHeader>
                <SectionMain
                    isCard = {false}
                    srcImg={'https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png'}
                    srcImgBlur={'https://github.githubassets.com/assets/bg-glow-purple-6e9a6a96cb04.png'}
                    srcImgSecond={'https://github.githubassets.com/assets/illu-projects-2-26077f1dd188.png'}
                ></SectionMain>
                <SectionPromo
                    event={
                        <EventPath
                            isStartIcon = {false}
                            isStartInterval = {true}
                            startAfterColor = {'transparent'}
                            startBeforeColor = {'pink'}
                            isMiddleSvgComponent = {false}
                            middleSvgComponent = {<OcticonCode></OcticonCode>}
                            blurColor = {'purple'}
                            endAfterColor = {'pink'}
                            endBeforeColor = {'transparent'}
                            isBranch = {true}
                            branchColor = {'pink'}
                        ></EventPath>
                    }
                    AccentText={'GitHub Issues and GitHub Projects'}
                    text={'supply project management tools that adapt to your team alongside your code.'}
                    buttonText={'Get started with GitHub Issues'}
                    href = {'#'}
                    question = {'Did you know?'} 
                    title={'80%'}
                    subTitle={`reduction in onboarding time with GitHub<sup>2</sup>`}
                    color={'pink'}
                    isSubButton={false}
                    linkSubButton = {'#'}
                    subButtonText = {'Read the report'}
                ></SectionPromo>
                <SectionCard cardData = {CardsContentCollaboration} colorCard = 'pink' reverse = 'true'></SectionCard>
            </div>
        </section>
    )
}
function ApplicationSecurity() {
    const CardsApplicationSecurity = [
        {
            contentSpan: 'GitHub Actions',
            content: 'automates your build, test, and deployment workflow with simple and secure CI/CD.',
            contentLink: 'Discover GitHub Actions',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png'
        }
    ]
    const CardsContentApplicationSecurity = [
        {
            contentSpan: 'Code scanning',
            content: 'is our code analysis tool that helps you remediate issues in your code.',
            contentLink: 'Explore Dependabot',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-code-scanning-fc9dfb212aa3.png'
        },
        {
            contentSpan: 'Dependabot makes',
            content: 'it easy to find and fix vulnerable dependencies in your supply chain.',
            contentLink: 'Download GitHub Mobile',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png',
        },
        {
            contentSpan: 'Secret scanning',
            content: 'automatically looks for partner patterns and prevents fraudulent use of accidentally committed secrets.',
            contentLink: 'Download GitHub Mobile',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png',
        },
    ]

    return (
        <section className="application-security">
            <div className="container">
                <SectionHeader
                    isStartEvent = {true}
                    event = {
                        <EventPath
                            isStartIcon = {false}
                            isStartInterval = {true}
                            startAfterColor = {'transparent'}
                            startBeforeColor = {'blue'}
                            isMiddleSvgComponent = {true}
                            middleSvgComponent = {<OcticonLock></OcticonLock>}
                            blurColor = {'blue'}
                            endAfterColor = {'blue'}
                            endBeforeColor = {'transparent'}
                        ></EventPath>
                    }
                    color = {'blue'}
                    title = {'Application security'}
                    subTitleAccent = {'Empower developers'}
                    subTitle={'With GitHub, you can secure code in minutes.'}
                ></SectionHeader>
                <SectionMain
                    isCard = {true}
                    componentCard={<SectionCard cardData = {CardsApplicationSecurity} colorCard = 'blue'></SectionCard>}
                    srcImgBlur={'https://github.githubassets.com/assets/bg-glow-blue-036b8dc2d1ce.png'}
                    srcImgSecond={'https://github.githubassets.com/assets/illu-ghas-list-84af1f1ce2b8.png'}
                ></SectionMain>
                <SectionPromo
                    event={
                        <EventPath
                            isStartIcon = {false}
                            isStartInterval = {true}
                            startAfterColor = {'transparent'}
                            startBeforeColor = {'blue'}
                            isMiddleSvgComponent = {false}
                            middleSvgComponent = {<OcticonCode></OcticonCode>}
                            blurColor = {'purple'}
                            endAfterColor = {'blue'}
                            endBeforeColor = {'transparent'}
                            isBranch = {true}
                            branchColor = {'blue'}
                        ></EventPath>
                    }
                    AccentText={'GitHub Advanced Security'}
                    text={'enables you to find and fix vulnerabilities with ease and ship secure code quickly.'}
                    buttonText={'Dive into GitHub Advanced Security'}
                    href = {'#'}
                    question = {'Did you know?'} 
                    title={'7x faster'}
                    subTitle={`vulnerability fixes with GitHub<sup>1</sup>`}
                    color={'blue'}
                    isSubButton={false}
                    linkSubButton = {'#'}
                    subButtonText = {'Read the report'}
                ></SectionPromo>
                <SectionCard cardData = {CardsContentApplicationSecurity} colorCard = 'blue'></SectionCard>
            </div>
        </section>
    )
}
function Productivity() {
    const CardsContentProductivity = [
        {
            contentSpan: 'GitHub Actions',
            content: 'automates your build, test, and deployment workflow with simple and secure CI/CD.',
            contentLink: 'Discover GitHub Actions',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png'
        },
        {
            contentSpan: 'GitHub Codespaces',
            content: 'offers a complete dev environment in seconds. Code, build, test, and open pull requests from any repo.',
            contentLink: 'Check out GitHub Codespaces',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png',
        },
        {
            contentSpan: 'GitHub Mobile and Copilot',
            content: 'now let you manage projects and converse with your AI pair programmer on the go.',
            contentLink: 'Download GitHub Mobile',
            contentHref: '',
            svgComponentName: <ArrowSymbolMktg></ArrowSymbolMktg>,
            srcImg: 'https://github.githubassets.com/assets/illu-mobile-chat-9e7549906574.webp',
        },
    ]

    return (
        <section className="productivity">
            <div className="container">
                <SectionHeader
                    isStartEvent = {false}
                    event = {
                        <EventPath
                            isStartIcon = {false}
                            isStartInterval = {false}
                            isMiddleSvgComponent = {true}
                            middleSvgComponent = {<OcticonBriefcase></OcticonBriefcase>}
                            blurColor = {'green'}
                            endAfterColor = {'green'}
                            endBeforeColor = {'transparent'}
                        ></EventPath>
                    }
                    color = {'green'}
                    title = {'Productivity'}
                    subTitleAccent = {'Accelerate innovation'}
                    subTitle={'Our AI-powered platform increases the pace of software development.'}
                ></SectionHeader>
                <SectionMain
                    isCard = {false}
                    srcImg={'https://github.githubassets.com/assets/illu-copilot-editor-6474457a5b19.png'}
                    srcImgBlur={'https://github.githubassets.com/assets/bg-glow-purple-6e9a6a96cb04.png'}
                    srcImgSecond={'https://github.githubassets.com/assets/illu-copilot-sidebar-3d2efb504577.png'}
                ></SectionMain>
                <SectionPromo
                    event={
                        <EventPath
                            isStartIcon = {false}
                            isStartInterval = {true}
                            startAfterColor = {'transparent'}
                            startBeforeColor = {'green'}
                            isMiddleSvgComponent = {false}
                            middleSvgComponent = {<OcticonCode></OcticonCode>}
                            blurColor = {'purple'}
                            endAfterColor = {'green'}
                            endBeforeColor = {'transparent'}
                            isBranch = {true}
                            branchColor = {'green'}
                        ></EventPath>
                    }
                    AccentText={'GitHub Copilot'}
                    text={'empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.'}
                    buttonText={'Explore GitHub Copilot'}
                    href = {'#'}
                    question = {'Did you know?'} 
                    title={'22% increase'}
                    subTitle={'in developer productivity after three years with GitHub'}
                    color={'green'}
                    isSubButton={true}
                    linkSubButton = {'#'}
                    subButtonText = {'Read the report'}
                ></SectionPromo>
                <SectionCard cardData = {CardsContentProductivity} colorCard = 'green'></SectionCard>
            </div>
        </section>
    )
}

// MAIN
function MainContent() {
    return (
        <main className="main">
            <Productivity></Productivity>
            <ApplicationSecurity></ApplicationSecurity>
            <div className="wrapper-gradient">
                <Collaboration></Collaboration>
                <Globe></Globe>
            </div>
        </main>
    )
}

// HEADER
function HeaderContent() {
    return (
        <div className="container">
            <div className='header-content'>
                <div className='header-content__decor'><img src={logoNLO} alt=''/></div>
                <div className='header-content__main'>
                    <EventPath
                        isStartIcon = {true}
                        isStartInterval = {true}
                        startAfterColor = {'transparent'}
                        startBeforeColor = {'purple'}
                        isMiddleSvgComponent = {true}
                        middleSvgComponent = {<OcticonCode></OcticonCode>}
                        blurColor = {'purple'}
                        endAfterColor = {'purple'}
                        endBeforeColor = {'green'}
                        isBranch = {false}
                        branchColor = {'green'}
                    ></EventPath>
                    <div className='header-content__wrapper'>
                        <h1 className='header-content__title'>Let`s build from here</h1>
                        <p className='header-content__sub-title'>Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.</p>
                        <Form></Form>
                        <OurPartners></OurPartners>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Header() {
    const [isModalVisible, setModalVisible] = useState(false);
    const handleButtonClick = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <header className="header">
            <ModalWindowInput isActive={isModalVisible} onClose={() => setModalVisible(false)} theme={'light'}/>
            <Nav btnClick={() => handleButtonClick()}/>
            <HeaderContent/>
        </header>
    )
}

// RESULT
export function LandingPage() {
    return (
        <>
            <Header/>
            <MainContent/>
            <Footer/>
        </>
    )
}