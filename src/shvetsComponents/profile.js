import React from 'react';
import './profileCss/profile.css'
import '../App.css'
import { Header}  from '../globalComponents/header/header.js'
import { Nav } from '../globalComponents/nav/nav.js';
import { Aside } from '../globalComponents/aside/aside.js';


export function Profile() {

    return(
        <div>
            <Header/>
            <Nav/>
            <div>
                <Aside/>
            </div>
        </div>
        
    )
}