import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import { Button } from 'antd';
import {Redirect} from 'react-router-dom';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import './login-form.css'

export class LoginForm extends React.Component{
    onSubmit(values){
        console.log(values)
        return this.props.dispatch(login(values.username, values.password));
    }

    handleClick(){
        return <Redirect to="/dashboard" />
    }

    render(){
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                    placeholder="Username or Email"
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                    placeholder="Password"
                />
                <Button onClick={this.handleClick()} htmlType="submit" style={{display: 'block', margin: '20px auto 0 auto', width: '25%'}} block>Log In</Button>

            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);