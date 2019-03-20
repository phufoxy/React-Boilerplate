import React, { Component } from 'react';

class FooterLayout extends Component {
    render() {
        return (
            <footer className="b-page-footer">
                <div className="container">
                    <div className="b-block-footer">
                        <div className="b-info">
                            <p className="b-text-norm">
                                ©2014 Fudi. All Rights Reserved.
                            </p>
                        </div>
                        <div className="b-desin">
                            <h2 className="b-text-title">
                                DESIGN BY:
                                <span className="is-current">WWW.BEKADES.COM</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterLayout;