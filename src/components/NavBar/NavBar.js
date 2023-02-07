import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="navbar-container">
            <ul>
                <li><Link to='/'>HOME</Link ></li>
                <li><Link to='/products'>PRODUCTS</Link ></li>
                <li><Link to='/contact'>CONTACT</Link ></li>
            </ul>
        </nav>
    );
}

export default NavBar;