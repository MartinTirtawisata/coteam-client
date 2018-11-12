import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationSection(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    console.log(props.loggedIn)
    if (props.loggedIn) {
        return <Redirect to="/home" />;
    }

    return (
        <div className="home">
            <RegistrationForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationSection);