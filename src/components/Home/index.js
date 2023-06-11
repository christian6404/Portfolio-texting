import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import './index.scss'

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                {/* <img src={} alt="developer" /> */}
                <br />
                Zack Miller
                <br />
                Software Engineer
                </h1>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div> 
        </div>
    )
}

export default Home