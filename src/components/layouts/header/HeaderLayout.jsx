import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HeaderLayout extends Component {
    render() {
        return (
            <header className="b-page-header" id="b-page-header">
                <div className="container">
                    <div className="b-header">
                        <div className="b-logo">
                            <Link to="/" className="b-link">
                                <img src="./images/logo.png" alt="Log" />
                            </Link>
                        </div>
                        <div className="b-register">
                            <ul className="b-list-item">
                                <li className="b-item">
                                    <Link to="/cusiness" className="b-link">CUSINESS</Link>
                                </li>
                                <li className="b-item">
                                    <Link to="/eat" className="b-link">EAT</Link>
                                </li>
                                <li className="b-item">
                                    <Link to="/home" className="b-link">HOME</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="b-toggle">
                            <a href="/">
                                <i className="fas fa-bars"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderLayout;