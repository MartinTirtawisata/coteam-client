import React from 'react';



import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Helmet} from 'react-helmet'
import HomePage from './homepage';
import SurveySection from './survey-section';
import RegistrationSection from './registration-section';
import LoginForm from './login-form';
import SocialCardForm from './social-card-form';
import SocialCardFormEdit from './social-card-form-edit';
import LandingPage from './landingpage';
import {connect} from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel)

import './app.css';
import './float-grid.css';

export class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <nav className="top-navbar">
                        <ul className="logo-nav">
                            <li><Link to="/home">Logo</Link></li>
                        </ul>
                        <ul className="login-register-nav">
                            <li><Link to="/register">Sign Up</Link></li>
                            <li><Link to="/login">Log In</Link></li>
                        </ul>
                    </nav>
                    <Route exact path="/" component={LandingPage} />      
                    <main>
                        <Route exact path="/home" component={HomePage} />
                        <Route exact path="/survey" component={SurveySection} />
                        <Route exact path="/register" component={RegistrationSection} />
                        <Route exact path="/login" component={LoginForm} />
                        <Route exact path='/social-card' component={SocialCardForm} />
                        <Route exact path='/social-card-edit' render={(props) => <SocialCardFormEdit socialcardid={this.props.socialCard.id}/>} />
                    </main>
            
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    socialCard: state.index.card
})

export default connect(mapStateToProps)(App);
