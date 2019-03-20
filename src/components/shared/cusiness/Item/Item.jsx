import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="b-block wow fadeInDown" style={this.props.data.style}>
                <div className="b-overlay">
                    <div className="b-content">
                        <h5 className="b-text-name">
                            {this.props.data.name}
                        </h5>
                        <h2 className="b-text-title">
                            {this.props.data.title}
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
