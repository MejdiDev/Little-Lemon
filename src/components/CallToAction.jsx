import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <section id="call-to-action">
            <div id="text">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to="/booking">
                    <button>Reserve A Table</button>
                </Link>
            </div>

            <div id="image"></div>
        </section>
    );
}

export default CallToAction;