import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './homepage';
import SurveySection from './survey-section';
import RegisterForm from './register';
import Login from './login';
import SocialCardForm from './social-card-form';
import LandingPage from './landingpage';

import './app.css';

export default function App(props) {
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
                <div style={{maxWidth: '800px', marginLeft:'auto', marginRight:'auto'}}>
                    <main>
                        <Route exact path="/home" component={HomePage} />
                        <Route exact path="/survey" component={SurveySection} />
                        <Route exact path="/register" component={RegisterForm} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path='/social-card' component={SocialCardForm} />
                    </main>
                </div>
            </div>
        </Router>
    );
}
