import React from 'react';
import './profileCss/profile.css'
import '../App.css'
import { Header}  from '../globalComponents/header/header.js'
import { Nav } from '../globalComponents/nav/nav.js';
import { Aside } from '../globalComponents/aside/aside.js';
import { Overview } from './components/overview.js';



export function Profile() {

    return(
        <div className='profile'>
            <Header/>
            <Nav/>
            <main className='main'>
                <div className='profile-container'>
                    <div className='profile-content'>
                        <Aside/>
                        <Overview/>
                    </div>
                </div>
            </main>
        </div>
    )
}