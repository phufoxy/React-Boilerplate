import React, { Component } from 'react';

class IntroducPartial extends Component {
    render() {
        return (
            <section className="b-page-introduc ">
                <div className="container">
                    <div className="b-block">
                        <div className="b-block-left wow fadeInLeft">
                            <div className="b-images">
                                <img src="./images/iphone.png" alt="Green" />
                            </div>
                        </div>
                        <div className="b-block-right wow fadeInRight">
                            <div className="b-content">
                                <h2 className="b-text-title b-dot left">
                                    INTRODUCING THE FUDI APP
                                </h2>
                                <p className="b-text-norm">
                                    Morbi eget posuere dolor. Pellentesque cursus aliquet aliquet. Aeneanet felis
                                    sit amet diam mollis ullamcorper. Nullam consequat sem a ante vest ibulum
                                    tristique. Suspendisse tristique lacus ac mattis porta. Vivamus ligula quam,
                                    vehicula non lacinia sed, faucibus sit amet libero. In libero dui, eleifend eu
                                    nisi id, egestas fringilla odio. In varius quam a mas sa hendrerit ullamcorper a
                                    eu justo. Suspendisse porta mattis convallis. Aenean tempus ligula ac odio
                                    rhoncus, quis aliquam dolor accumsan. Suspendisse aliquet felis consectetur
                                    libero congue, sed pulvinar diam malesuada. Duis vehicula a nibh id hendrerit.
                                    Donec sit amet ultrices ante, a mattis massa.
                                </p>
                                <div className="b-list-social">
                                    <div className="b-item">
                                        <a href="/" className="b-link">
                                            <img src="./images/app-store.png" alt="App" />
                                        </a>
                                    </div>
                                    <div className="b-item">
                                        <a href="/" className="b-link">
                                            <img src="./images/ch-play.png" alt="App" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default IntroducPartial;