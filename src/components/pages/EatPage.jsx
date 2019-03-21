import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layouts';
import { BannerPartial, EatPartial, CounterPartial } from '../shared';

class IndexPage extends Component {
    render() {
        return (

            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <BannerPartial></BannerPartial>
                <EatPartial></EatPartial>
                <CounterPartial></CounterPartial>
                <FooterLayout></FooterLayout>
            </div>

        );
    }
}

export default IndexPage;