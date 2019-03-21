import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layouts';
import {
    BannerPartial,
    PersonComponent,
    CounterPartial
} from '../shared';
class HomePage extends Component {
    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <BannerPartial></BannerPartial>
                <PersonComponent></PersonComponent>
                <CounterPartial></CounterPartial>
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}

export default HomePage;