import React, {useState} from 'react';
import logo from "../../image/logo.svg";
import Message from "./Message";

function Header(props) {
    const [isClicked, clicked] = useState(false)
    window.clicked = isClicked
    return (
        <header className="header">
            <div className="container">
                <div className="nav">
                    <img className="logo" src={logo} alt="logo"/>
                    <ul className="menu">
                        <li>
                            <a href="src/components/Header/Header#">Home</a>
                        </li>
                        <li>
                            <a href="src/components/Header/Header#">About</a>
                        </li>
                        <li>
                            <a href="src/components/Header/Header#">Contacts</a>
                        </li>
                    </ul>
                    <a className="tel" href="tel: +1 893 839-23-64"></a>
                </div>
                <div className="offer">
                    <p className="sign">Not tne event. The life</p>
                    <h1>Burning MAN</h1>
                    <a onClick={() => {
                        if (isClicked === true)
                        clicked(false)
                        else {
                            clicked(true)
                        }
                        event.preventDefault()
                    }} href="src/components/Header/Header#">Book the tickets</a>
                </div>
                    {isClicked && <Message clicked = {clicked}/>}
            </div>
        </header>
    );
}

export default Header;