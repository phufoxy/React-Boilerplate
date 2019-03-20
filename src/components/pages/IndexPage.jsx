import React, { Component } from 'react';
import HeaderLayout from '../layouts/header';
import FooterLayot from '../layouts/footer';
import BannerPartial from '../shared/banner';
import EatPartial from '../shared/eat';
import IntroducPartial from '../shared/introduc';
import SliderPartial from '../shared/slider'
import CusinessPartial from '../shared/cusiness';
import CounterPartial from '../shared/counter';
class IndexPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <BannerPartial></BannerPartial>
                <EatPartial></EatPartial>
                <IntroducPartial></IntroducPartial>
                <SliderPartial></SliderPartial>
                <CusinessPartial></CusinessPartial>
                <CounterPartial></CounterPartial>
                <FooterLayot></FooterLayot>
            </div>
        );
    }
}

export default IndexPage;