import React from 'react';
import {Link} from 'react-router-dom';

import {deleteSocialCard} from '../actions/actionIndex';
import {fetchProtectedCard} from '../actions/actionIndex';
import {connect} from 'react-redux';

import './social-card.css';
import 'antd/dist/antd.css';

import {Card} from 'antd';
const {Meta} = Card;


export class SocialCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.props.dispatch(fetchProtectedCard());
    }

    handleDeleteButton(socialCardId){
        return this.props.dispatch(deleteSocialCard(socialCardId))
    }
    // need to change state
    render() {
        console.log(this.props.card.id)
        return (
            <div className="social-card">
                <Card style={{ width: 500 }}>
                    <div className="social-card-header">
                        <div className="name-section">
                            {/* <span>{props.card.first_name} {props.card.last_name}</span> */}
                        </div>
                        <div className="job-title-section">
                            {/* <span>{props.card.job_title}</span> */}
                        </div>
                        <Link to="/social-card-edit"><button>Edit</button></Link>
                        <button onClick={() => this.handleDeleteButton(this.props.card.id)}>Delete</button>
                    </div>
                    <div className="social-card-content">
                        <Meta title="Experiences" description={this.props.card.experience} />
                        <Meta title="Interests" description={this.props.card.interest} />
                        <Meta title="Personality Type" description={this.props.card.personality} />
                        <Meta title="Skills" description={this.props.card.skill} />
                        <Meta title="Thoughts on teamwork" description={this.props.card.thought} />
                    </div>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    card: state.index.card
})

export default connect(mapStateToProps)(SocialCard);

// Parent: SocialCardSection
// Child: SocialCardContent

