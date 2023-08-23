import logo from '../assets/Asset 16@4x.png';
import { Link } from "react-router-dom";
import { showMobileNav, hideMobileNav } from "../utilities/mobileNavFunctions";

const Nav = () => {
    return (
        <nav>
            <div id="overlay" onClick={hideMobileNav}></div>

            <ul>
                <div id="image">
                    <img src={logo} alt="Little Lemon" />
                </div>
                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>

            <div id="mobile-menu" onClick={showMobileNav}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="app__navbar-hamburger" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd">
                    </path>
                </svg>
            </div>
        </nav>
    );
}

export default Nav;