import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
class FormComponent extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            name: '',
            age: '',
            address: '',
            edit: false
        };
        this.onChanger = this.onChanger.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidUpdate(preProps) {
        if (this.props.dataEdit !== preProps.dataEdit && this.props.dataEdit !== {}) {
            this.setState({
                show: true,
                name: this.props.dataEdit.name,
                age: this.props.dataEdit.age,
                address: this.props.dataEdit.address,
                id: this.props.dataEdit.id,
                edit: true
            })
        }
    }
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }
    onChanger(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault();
        if (this.state.edit) {
            this.props.onUpdate(this.state)
            this.resetData();
        } else {
            this.props.onAdd(this.state);
            this.resetData();
        }
    }
    resetData() {
        this.setState({
            name: '',
            age: '',
            address: '',
            show: false,
            edit: false
        })
    }
    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Add Data
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter Name" onChange={this.onChanger} value={this.state.name} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text" name="age" placeholder="Age" onChange={this.onChanger} value={this.state.age} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address" placeholder="Address" onChange={this.onChanger} value={this.state.address} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default FormComponent;