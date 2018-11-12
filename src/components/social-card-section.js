import React from 'react';
import SocialCard from './social-card';

import './social-card-section.css'

import {connect} from 'react-redux';

export class SocialCardSection extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchCard());
    }

    render(){
        return (
            <div className="social-card-section">
                <h1>Feed</h1>
                <SocialCard card={this.props} />
            </div>
        )
    }
}

// SocialCardSection.defaultProps = {
//     userInfo: {
//         first_name: "First Name",
//         last_name: "Last Name",
//         job_title: "Job Title",
//         experience: "Experience",
//         interests: "Interests",
//         personality: "Personality",
//         thoughts: "Thoughts",
//     }
// }

const mapStateToProps = state => ({
    card: state
})



export default connect(mapStateToProps)(SocialCardSection);

// Parent: HomePage
// Child: SocialCard


