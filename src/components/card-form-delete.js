import React from 'react';
import './card-form.css';
import {Redirect} from 'react-router-dom';

import {deleteCard} from '../actions/actionIndex';
import { connect } from 'react-redux';

export class CardFormDelete extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            submitStatus: false
        }
    }

    componentDidMount(){
        this.setState({submitStatus: true})
        this.props.dispatch(deleteCard(this.props.match.params.userId));
    }


    render(){
        if (this.state.submitStatus === true){
            // window.location.href = window.location.href 
            return <Redirect to="/dashboard" />
        }
    
        return (
            <div>
                
            </div>
        )
    }
}

export default connect()(CardFormDelete)