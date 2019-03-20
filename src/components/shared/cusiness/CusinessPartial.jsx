import React, { Component } from 'react';
import Item from './Item/Item';
class CusinessPartial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: '1',
                    name: ' 327 Reacjsct',
                    title: 'ITALIAN',
                    style: {
                        backgroundImage: "url('./images/eat-item-1.png')"
                    }
                },
                {
                    id: '2',
                    name: ' 856 Reacjsct',
                    title: 'INDIAN',
                    style: {
                        backgroundImage: "url('./images/eat-item-2.png')"
                    }
                },
                {
                    id: '3',
                    name: ' 27 Reacjsct',
                    title: 'FRENCH',
                    style: {
                        backgroundImage: "url('./images/eat-item-3.png')"
                    }
                },
                {
                    id: '4',
                    name: ' 147 Reacjsct',
                    title: 'STEAKHOUSE',
                    style: {
                        backgroundImage: "url('./images/eat-item-4.png')"
                    }
                },
                {
                    id: '5',
                    name: ' 327 Reacjsct',
                    title: 'SEAFOOD',
                    style: {
                        backgroundImage: "url('./images/eat-item-5.png')"
                    }
                },
                {
                    id: '6',
                    name: ' 327 Reacjsct',
                    title: 'SUSHI',
                    style: {
                        backgroundImage: "url('./images/eat-item-6.png')"
                    }
                },
                {
                    id: '7',
                    name: ' 529 Reacjsct',
                    title: 'MEXICAN',
                    style: {
                        backgroundImage: "url('./images/eat-item-7.png')"
                    }
                },
                {
                    id: '8',
                    name: ' 327 Reacjsct',
                    title: 'CHINESE',
                    style: {
                        backgroundImage: "url('./images/eat-item-8.png')"
                    }
                },
                {
                    id: '9',
                    name: ' 327 Reacjsct',
                    title: 'PIZZA',
                    style: {
                        backgroundImage: "url('./images/eat-item-9.png')"
                    }
                },
                {
                    id: '10',
                    name: ' 327 Reacjsct',
                    title: 'PIZZA',
                    style: {
                        backgroundImage: "url('./images/eat-item-10.png')"
                    }
                },
            ]
        }
    }
    render() {
        return (
            <section className="b-page-cusiness">
                <div className="b-heading wow fadeInDown">
                    <h3 className="b-text-title b-dot">
                        BROWSE BY CUSINESS
                    </h3>
                </div>
                <div className="b-block-main">
                    {this
                        .state
                        .data
                        .map((data, i) => (
                            <Item key={i} data={data}></Item>
                        ))}
                </div>
            </section>
        );
    }
}

export default CusinessPartial;