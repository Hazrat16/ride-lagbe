import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src='https://cdn.dribbble.com/users/4024564/screenshots/14507615/media/4ec9f9f9f044ed93355bfc6d9b34e600.png?compress=1&resize=400x300' alt="logo"/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link className="btn-login" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="#">{loggedInUser.name}</Link>
                    </li>
                    {/* <li>
                        <Link className="btn-login" onClick={() => setLoggedInUser({})} >LogOut</Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
};

export default Header;