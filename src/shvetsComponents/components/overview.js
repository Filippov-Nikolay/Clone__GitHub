import React from 'react';
import './cssComponents/overview.css'
import { ExitSvg } from '../../globalComponents/picture/SvgComponents.js';

export function Overview() {
    return(
<article className='article'>
    <section className='section'>
        <div className='article__wrapper'>
            <div className='article__container'>
                <p className='article__container-text'>
                    You unlocked new Achievements with private contributions! Show them off by including private contributions in your profile in <span className='article__container--link'>settings</span>.
                </p>
                <div className='article__container-btn'>
                    <ExitSvg></ExitSvg>
                </div>
            </div>
        </div>
    </section>
    <section className='section'>
        <div className='article__wrapper'>
            
        </div>
    </section>
    <section className='section'>
        <div className='article__wrapper'>
           
        </div>
    </section>
</article>
    )

}