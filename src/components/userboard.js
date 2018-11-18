import React from 'react';
import './userboard.css';
import 'antd/dist/antd.css';

import CardBanner from './card-banner';
import Section from './section';
import {connect} from 'react-redux';
import {fetchProtectedCard} from '../actions/actionIndex';

export class UserBoard extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchProtectedCard())
    }
    
    render (){      
        const userInfo = Object.keys(this.props.card).map((key, index) => {
            let i = parseInt(key, 10);
            if (this.props.card[i]._id === this.props.match.params.userId){
                return (
                  <div>
                      <CardBanner card={this.props.card[i]} />
                      <Section card={this.props.card[i]} />
                  </div>
                )
            }
        });
        
        return(
            <div className="userboard">
                {userInfo}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    card: state.index.card
})
export default connect(mapStateToProps)(UserBoard)