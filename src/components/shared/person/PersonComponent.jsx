import React, { Component } from 'react';
import CardComponent from './card/CardComponent';
import FormComponent from './form/FormComponent';
import { connect } from 'react-redux';
class PersonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEdit: {}
        }
        this.onAdd = this.onAdd.bind(this);
    }
    onAdd(data) {
        let id = Math.random();
        let person = {
            id: id,
            ...data
        }
        this.props.dispatch({ type: 'ADD_PERSON', person })
    }
    onDelete(id) {
        this.props.dispatch({
            type: 'DELETE_PERSON',
            id
        })
    }
    onEdit(id) {
        let Item = [...this.props.data].filter(item => item.id === id);
        if (Item.length > 0) {
            this.setState({
                dataEdit: Item[0]
            })
        }
    }
    
    onUpdate(data) {
        this.props.dispatch({
            type: 'UPDATE_PERSON',
            data
        })
    }
    render() {
        console.log(this.props.data)
        return (
            <div className="b-person mt-5">
                <div className="container">
                    <div className="row">
                        {
                            this.props.data.map(data => (
                                <CardComponent key={data.id} person={data} onDelete={this.onDelete.bind(this)} onEdit={this.onEdit.bind(this)}></CardComponent>
                            ))
                        }
                    </div>
                    <div className="row mt-5">
                        <FormComponent onAdd={this.onAdd} dataEdit={this.state.dataEdit} onUpdate={this.onUpdate.bind(this)}></FormComponent>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        data: state.person
    }
}

export default connect(mapStateToProps)(PersonComponent);