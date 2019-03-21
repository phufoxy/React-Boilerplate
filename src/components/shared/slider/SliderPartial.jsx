import React, { Component } from 'react';
import Item from './Item/Item';
import Slider from "react-slick";

class SliderPartial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    style: {
                        backgroundImage: "url('./images/person.png')"
                    },
                    name: 'Michael Dawson, San Francisco, CA'
                },
                {
                    style: {
                        backgroundImage: "url(http://i.imgur.com/Dm684QQ.jpg)"
                    },
                    name: 'Tran Van Phu , 44 Da Son , Hoa Khanh Nam , Lien Chieu , Da Nang'
                },
                {
                    style: {
                        backgroundImage: "url(https://media.ngoisao.vn/resize_580/news/2013/11/10/47/anh_the9112_jpg1.jpg)"
                    },
                    name: 'Michael Dawson, San Francisco, CA'
                }
            ]
        }
    }
    render() {
        var settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <section className="b-page-slider">
                <div className="container">
                    <Slider {...settings} className="b-slider wow fadeInDown">
                        {this.state.data.map((data, i) => (
                            <Item key={i} data={data}></Item>
                        ))
                        }
                    </Slider >
                </div>
            </section>
        );
    }
}

export default SliderPartial;