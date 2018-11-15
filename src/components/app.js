import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from './dashboard';
import RegistrationSection from './registration-section';
import LoginForm from './login-form';
import SocialCardForm from './social-card-form';
import CardEditForm from './card-edit-form';
import LandingPage from './landingpage';
import {connect} from 'react-redux';

import './app.css';
import './float-grid.css';

export class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <nav className="top-navbar">
                        <ul className="logo-nav">
                            <li><Link to="/dashboard">Logo</Link></li>
                        </ul>
                        <ul className="login-register-nav">
                            <li><Link to="/register">Sign Up</Link></li>
                            <li><Link to="/login">Log In</Link></li>
                        </ul>
                    </nav>
                    <Route exact path="/" component={LandingPage} />      
                    <main>
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/register" component={RegistrationSection} />
                        <Route exact path="/login" component={LoginForm} />
                        <Route exact path='/social-card' component={SocialCardForm} />
                        <Route exact path='/card-edit-form' render={(props) => <CardEditForm socialcardid={this.props.socialCard.id}/>} />
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
