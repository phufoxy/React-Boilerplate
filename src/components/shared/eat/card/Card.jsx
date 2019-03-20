import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="b-block-content wow fadeInDown">
                <div className="b-content">
                    <div className="b-icon">
                        <img src={this.props.data.src} alt="Eat" />
                    </div>
                    <div className="b-info">
                        <h2 className="b-text-title b-dot">
                            {this.props.data.title}
                        </h2>
                        <p className="b-text-norm">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit
                            viverra elementuma. Aliquam erat volutpat.
                    </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;