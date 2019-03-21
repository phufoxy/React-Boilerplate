import React, { Component } from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
class Card extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }
    onDelete() {
        this.props.onDelete(this.props.data.id)
    }
    onEdit() {
        this.props.onEdit(this.props.data.id)
    }
    render() {
        const popover = (
            <Popover id="popover-basic" title="Popover right">
                <Button variant="danger" onClick={this.onDelete}>Delete</Button>
                <Button variant="info" onClick={this.onEdit}>Edit</Button>
            </Popover>
        );
        return (
            <div className="b-block-content wow fadeInDown">
                <div className="b-content" >
                    <div className="b-icon">
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <img src={this.props.data.src} alt="Eat" />
                        </OverlayTrigger>
                    </div>

                    <div className="b-info">
                        <h2 className="b-text-title b-dot">
                            {this.props.data.title}
                        </h2>
                        <p className="b-text-norm">
                            {this.props.data.description}
                        </p>
                    </div>
                </div>
                {/* <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button variant="success">Edit OR Delete</Button>
                </OverlayTrigger> */}
            </div>
        );
    }
}

export default Card;