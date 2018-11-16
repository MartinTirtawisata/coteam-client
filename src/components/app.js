import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Dashboard from './dashboard';
import UserBoard from './userboard';
import RegistrationSection from './registration-section';
import LoginForm from './login-form';
import SocialCardForm from './social-card-form';
import CardFormEdit from './card-form-edit';
import CardFormAdd from './card-form-add';
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
                        <Route exact path="/dashboard" render={() => <Dashboard />} />
                        <Route exact path="/userboard/:userId" component={UserBoard} />
                        <Route exact path="/register" component={RegistrationSection} />
                        <Route exact path="/login" component={LoginForm} />
                        <Route exact path='/social-card' component={SocialCardForm} />
                        <Route exact path='/card-form-edit/:userId' component={CardFormEdit}/>
                        <Route exact path="/card-form-add" component={CardFormAdd} />
                    </main>
            
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    card: state.index.card
})

export default connect(mapStateToProps)(App);
