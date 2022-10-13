import React from 'react';
import logo from "../image/logo.svg";

function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <div className="nav">
                    <img className="logo" src={logo} alt="logo"/>
                    <ul className="menu">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contacts</a>
                        </li>
                    </ul>
                    <a className="tel" href="tel: +1 893 839-23-64"></a>
                </div>
                <div className="offer">
                    <p className="sign">Not tne event. The life</p>
                    <h1>Burning MAN</h1>
                    <a href="#">Book the tickets</a>
                </div>
            </div>
        </header>
    );
}

export default Header;