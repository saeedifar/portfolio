import React from 'react';
import CV from '../../assets/Profile.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download>Download CV</a>
            <a href='#conatct'>Let's Talk</a>
        </div>
    )
}

export default CTA