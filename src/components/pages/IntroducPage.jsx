import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layouts';
import {
    BannerPartial,
    IntroducPartial,
    CounterPartial
} from '../shared';
class IndexPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <BannerPartial></BannerPartial>
                <IntroducPartial></IntroducPartial>
                <CounterPartial></CounterPartial>
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}

export default IndexPage;