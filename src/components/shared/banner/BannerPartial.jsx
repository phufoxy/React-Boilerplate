import React, { Component } from 'react';

class BannerPartial extends Component {
    render() {
        return (
            <section className="b-banner-top">
                <div className="b-fullscreen">
                    <div className="b-content">
                        <h3 className="b-text-favorite">
                            Find your Favorite
                        </h3>
                        <h2 className="b-text-title">
                            RECIPES
                        </h2>
                        <div className="b-btn">
                            <a href="/" className="b-link waves-effect  waves-light">GET STARTED</a>
                        </div>
                        <p className="b-text-norm">
                            OR SEND US YOUR OWN RECIPES AND GET REWARDED!
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default BannerPartial;