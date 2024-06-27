import React from 'react';
import './profileCss/profile.css'
import '../App.css'
import { Header}  from '../globalComponents/header/header.js'
import { Nav } from '../globalComponents/nav/nav.js';
import { Aside } from '../globalComponents/aside/aside.js';
import { Overview } from './components/overview.js';
import { Footer } from '../globalComponents/footer/footer.js'
import RepoSearchInit from './repo_search_init/repo_search_init.js'


export function VbProfile() {

    return(
        <div className='profile'>
            <Header/>
            <Nav/>
            <main className='main'>
                <div className='profile-container'>
                    <div className='profile-content'>
                        <Aside/>
                        <RepoSearchInit/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default VbProfile;