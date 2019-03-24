import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }
    onDelete() {
        this.props.onDelete(this.props.person.id);
    }
    onEdit() {
        this.props.onEdit(this.props.person.id);
    }

    render() {
        console.log(this.props.person)
        return (
            <div className="col-lg-4 mt-2">
                <Card>
                    <Card.Body>
                        <Card.Title>Name: {this.props.person.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Age: {this.props.person.age} </Card.Subtitle>
                        <Card.Text>
                            {this.props.person.address}.
                        </Card.Text>
                        <Button variant="danger" onClick={this.onDelete}>Delete</Button>
                        <Button variant="info" onClick={this.onEdit}>Edit</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CardComponent;