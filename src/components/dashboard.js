import React from 'react';
import './dashboard.css';
import 'antd/dist/antd.css';

import CardBanner from './card-banner';
import Section from './section';
import {connect} from 'react-redux';
import {fetchProtectedCard} from '../actions/actionIndex';

export class Dashboard extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchProtectedCard())
    }
    
    render (){      
        console.log(this.props.card)  
        return(
            <div className="homepage col-12">
                <CardBanner card={this.props.card} />
                <Section card={this.props.card} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    card: state.index.card
})
export default connect(mapStateToProps)(Dashboard)