import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="b-block">
                <div className="b-content">
                    <h3
                        className="b-text-title b-counter-value"
                        data-count={this.props.data.numberEnd}>{this.props.data.numberStart}</h3>
                    <p className="b-text-norm">
                        {this.props.data.title}
                    </p>
                </div>
            </div>
        );
    }
}

export default Item;