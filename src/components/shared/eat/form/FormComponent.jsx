import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            edit: false
        }
        this.onChanger = this.onChanger.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.dataEdit !== prevProps.dataEdit && this.props.dataEdit !== {}) {
            this.setState({
                title: this.props.dataEdit.title,
                description: this.props.dataEdit.description,
                id: this.props.dataEdit.id,
                edit: true
            })
        }
    }

    onChanger(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    resetForm() {
        this.setState({
            title: '',
            description: ''
        })
    }
    onSubmit(event) {
        event.preventDefault();
        if (this.state.edit === true) {
            this.props.onUpdate(this.state);
            this.setState({
                edit: false
            })
        } else {
            this.props.onAdd(this.state);
        }
        this.resetForm();
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Enter Title" onChange={this.onChanger} value={this.state.title} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descrtiption</Form.Label>
                    <Form.Control type="text" name="description" placeholder="Enter Description.." onChange={this.onChanger} value={this.state.description} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default FormComponent;