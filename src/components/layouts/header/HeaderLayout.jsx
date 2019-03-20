import React, { Component } from 'react';

class HeaderLayout extends Component {
    render() {
        return (
            <header className="b-page-header" id="b-page-header">
                <div className="container">
                    <div className="b-header">
                        <div className="b-logo">
                            <a href="/" className="b-link">
                                <img src="./images/logo.png" alt="Log" />
                            </a>
                        </div>
                        <div className="b-register">
                            <ul className="b-list-item">
                                <li className="b-item">
                                    <a href="/" className="b-link">LOGIN</a>
                                </li>
                                <li className="b-item">
                                    <a href="/" className="b-link">SIGN UP</a>
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