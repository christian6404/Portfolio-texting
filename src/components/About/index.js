import { useEffect, useState } from 'react'
import AnimatedCharacters from '../AnimatedCharacters';
import './index.scss'

const About = () => {

    return (
        <div className='conatainer about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedCharacters 
                        characterArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        index={15}
                    />
                </h1>
            </div>
        </div>
    )
}

export default About