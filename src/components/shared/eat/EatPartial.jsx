import React, { Component } from 'react';
import Card from './card/Card';
import FormComponent from './form/FormComponent';

class EatPartial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: '1',
                    src: './images/icon-eat.png',
                    title: 'GET INSPRIRED',
                    description: 'The <FormCou need to access the value of an uncontrolled <FormControl>, attach a ref to it as you would with an uncontrolled input, then call ReactDOM.findDOMNode(ref) to get the DOM node. You can then interact with that node as you would with any other uncontrolled input.'
                }, {
                    id: '2',
                    src: './images/icon-money.png',
                    title: 'GET REWARDED',
                    description: 'The <t as you would with an uncontrolled input, then call ReactDOM.findDOMNode(ref) to get the DOM node. You can then interact with that node as you would with any other uncontrolled input.'

                }, {
                    id: '3',
                    src: './images/icon-chef.png',
                    title: 'GET SOCIAL',
                    description: 'The <FormControl> f to it as you would with an uncontrolled input, then call ReactDOM.findDOMNode(ref) to get the DOM node. You can then interact with that node as you would with any other uncontrolled input.'

                }
            ],
            content: [],
            dataEdit: {}

        }
        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    onAdd(data) {
        let id = Math.random();
        let listData = [...this.state.data, { id: id, title: data.title, description: data.description, src: './images/icon-chef.png' }]
        this.setState({
            data: listData
        })
    }
    onDelete(id) {
        const data = this.state.data.filter(data => {
            return data.id !== id
        });
        this.setState({
            data: data
        })
    }
    onEdit(id) {
        let item = [...this.state.data].filter(item => item.id === id)
        if (item.length > 0) {
            this.setState({
                dataEdit: item[0]
            })
        }
    }
    onUpdate(data) {
        const itemIndex = this.state.data.findIndex(i => i.id === data.id);
        this.state.data[itemIndex].title = data.title;
        this.state.data[itemIndex].description = data.description;
        this.setState({
            data: this.state.data
        })
    }
    render() {
        return (
            <section className="b-page-eat">
                <div className="container">
                    <div className="b-eat">
                        {this.state.data.map(data => (
                            <Card key={data.id} data={data} onDelete={this.onDelete} onEdit={this.onEdit}></Card>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 mt-5">
                            <FormComponent onAdd={this.onAdd} onUpdate={this.onUpdate} dataEdit={this.state.dataEdit}></FormComponent>
                        </div>
                    </div>
                </div>

            </section>
        )
    }

}

export default EatPartial;