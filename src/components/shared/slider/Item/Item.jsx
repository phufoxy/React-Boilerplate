import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="b-item">
                <div className="b-block">
                    <div className="b-content">
                        <div className="b-images" style={this.props.data.style}></div>
                        <p className="b-text-norm">
                            “I am so happy because I found this recipe, and it just made my life easier.
                            Thanks so much for sharing!”
                        </p>
                        <h5 className="b-text-action">
                            {this.props.data.name}
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;