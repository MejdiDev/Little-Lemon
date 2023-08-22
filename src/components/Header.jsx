import logo from '../assets/Asset 16@4x.png';
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <a href="/">
                <img src={logo} alt="Little Lemon" />
            </a>

            <Nav />
        </header>
    );
}

export default Header;