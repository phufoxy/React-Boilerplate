import React, { Component } from 'react';
import CardComponent from './card/CardComponent';
import FormComponent from './form/FormComponent';
class PersonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [
                {
                    id: '1',
                    name: 'Trần Văn Phú',
                    age: '12',
                    address: '44 Đà Sơn, Hòa Khánh Nam, liên Chiểu , Đà Nẵng'
                },
                {
                    id: '2',
                    name: 'Trần Văn Phú',
                    age: '12',
                    address: '44 Đà Sơn, Hòa Khánh Nam, liên Chiểu , Đà Nẵng'
                },
                {
                    id: '3',
                    name: 'Trần Văn Phú',
                    age: '12',
                    address: '44 Đà Sơn, Hòa Khánh Nam, liên Chiểu , Đà Nẵng'
                },
                {
                    id: '4',
                    name: 'Trần Văn Phú',
                    age: '12',
                    address: '44 Đà Sơn, Hòa Khánh Nam, liên Chiểu , Đà Nẵng'
                }

            ]
        }
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete(id) {
        // Filter not state person diffent id = ?
        const data = this.state.person.filter(data => {
            return data.id !== id
        });
        this.setState({
            person: data
        })
    }
    onAdd(data) {

    }
    render() {
        return (
            <div className="b-person mt-5">
                <div className="container">
                    <div className="row">
                        {
                            this.state.person.map(data => (
                                <CardComponent key={data.id} person={data} onDelete={this.onDelete}></CardComponent>
                            ))
                        }
                    </div>
                    <div className="row mt-5">
                        <FormComponent></FormComponent>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonComponent;