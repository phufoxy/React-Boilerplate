import React, { Component } from 'react';
import { HeaderLayout, FooterLayout } from '../layouts';
import {
    BannerPartial,
    IntroducPartial,
    CusinessPartial,
    CounterPartial
} from '../shared';
class CusinessPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <BannerPartial></BannerPartial>
                <IntroducPartial></IntroducPartial>
                <CusinessPartial></CusinessPartial>
                <CounterPartial></CounterPartial>
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}

export default CusinessPage;