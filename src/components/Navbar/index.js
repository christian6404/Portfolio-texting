import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
// import LogoZgm from '../../assets/images/logo-color.svg'
// import LogoZ from '../../assets/images/logo-no-background.svg'

const Navbar = () => (
<div className= "nav-bar">
    {/* <Link className="logo" to='/'>
        <img src={ LogoZgm } alt='logo' />
        <img src={ LogoZ } alt='logo' />
    </Link> */}
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" classname="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" class="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
        </NavLink>
    </nav>
</div>
)


export default Navbar;