import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import AnimatedCharacters from '../AnimatedCharacters';
import './index.scss'


const Home = () => {
    const [characterClass, setCharacterClass] = useState('text-animate')
    const nameArray = [ ' ','Z', 'a', 'c', 'k', ' ', 'M', 'i', 'l', 'l', 'e', 'r']
    const titleArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ','E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    // Keeps breaking when I try to use this so it does not do the animation every time the user goes back to the home page.
    // useEffect(() => {
    //     return setTimeout(() => {
    //         setCharacterClass('text-animate-hover')
    //     }, 4000)
    // }, [])
    
    return (

        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={characterClass}>H</span>
                    <span className={`${characterClass} _12`}>i,</span>
                {/* <img src={} alt="developer" /> */}
                <br />
                <span className={`${characterClass} _13`}>I</span>
                <span className={`${characterClass} _14`}>'m </span>
                <AnimatedCharacters characterClass={characterClass}
                characterArray={nameArray}
                index={15}/>
                <br />
                <AnimatedCharacters characterClass={characterClass}
                characterArray={titleArray}
                index={22}/>
                </h1>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div> 
        </div>
        
    )
}

export default Home