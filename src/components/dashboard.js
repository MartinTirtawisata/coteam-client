import React from 'react';
import './dashboard.css';
import 'antd/dist/antd.css';

import CardBanner from './card-banner';
import Section from './section';

export default class Dashboard extends React.Component {
    // componentDidMount(){
    //     this.props.dispatch()
    // }
    
    render (){
                
        return(
            <div className="homepage col-12">
                <CardBanner />
                <Section />
            </div>
        )
    }
}