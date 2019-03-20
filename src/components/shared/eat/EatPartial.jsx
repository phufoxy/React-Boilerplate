import React, { Component } from 'react';
import Card from './card/Card';
class EatPartial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: '1',
                    src: './images/icon-eat.png',
                    title: 'GET INSPRIRED'
                }, {
                    id: '2',
                    src: './images/icon-money.png',
                    title: 'GET REWARDED'
                }, {
                    id: '3',
                    src: './images/icon-chef.png',
                    title: 'GET SOCIAL'
                }
            ]
        }
    }
    render() {
        return (
            <section className="b-page-eat">
                <div className="container">
                    <div className="b-eat">
                        {this
                            .state
                            .data
                            .map(data => (
                                < Card key={data.id} data={data}> </Card>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default EatPartial;