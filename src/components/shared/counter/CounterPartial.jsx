import React, { Component } from 'react';
import Item from './item/Item';

class CounterPartial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: '1',
                    numberStart: 0,
                    numberEnd: 23567,
                    title: 'Recipes Available'
                }, {
                    id: '2',
                    numberStart: 23567,
                    numberEnd: 431729,
                    title: 'Actives Users'
                }, {
                    id: '3',
                    numberStart: 431729,
                    numberEnd: 892173,
                    title: 'Positive Reviews'
                }, {
                    id: '4',
                    numberStart: 1523,
                    numberEnd: 56581,
                    title: 'Phtos & Videos'
                }, {
                    id: '5',
                    numberStart: 0,
                    numberEnd: 3182,
                    title: 'Spieces and Herbs'
                }
            ]
        }
    }
    render() {
        return (
            <section className="b-page-counter" id="counter">
                <div className="container">
                    <div className="b-block-main">
                        {this.state.data.map((data, i) => (
                            <Item key={i} data={data}></Item>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default CounterPartial;