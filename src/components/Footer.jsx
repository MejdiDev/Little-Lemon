import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div id="image"></div>

            <div className="list">
                <h3>Navigation</h3>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Menu</Link></li>
                    <li><Link to="">Reservations</Link></li>
                    <li><Link to="">Order Online</Link></li>
                    <li><Link to="">Login</Link></li>
                </ul>
            </div>

            <div className="list">
                <h3>Contact</h3>

                <ul>
                    <li><Link to="">Address</Link></li>
                    <li><Link to="">Phone Number</Link></li>
                    <li><Link to="">Email</Link></li>
                </ul>
            </div>

            <div className="list">
                <h3>Social Media Links</h3>

                <ul>
                    <li><Link to="">Facebook</Link></li>
                    <li><Link to="">Instagram</Link></li>
                    <li><Link to="">Youtube</Link></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;