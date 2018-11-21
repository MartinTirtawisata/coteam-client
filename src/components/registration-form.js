import React from 'react';
import Input from './input';
import { Button } from 'antd';
import './registration-form.css';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/user';
import {login} from '../actions/auth';

import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');



export class RegistrationForm extends React.Component{
    onSubmit(values){
        console.log(values);
        const {username, password} = values;
        const user = {username, password};
        return this.props.dispatch(registerUser(user)).then(() => this.props.dispatch(login(username, password)));
    };

    render(){
        return (
            <form
                className="registration-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="username">Email or Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                    placeholder="Email or Username"
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                    placeholder="Password"
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                    placeholder="Confirm Password"
                />

                <Button htmlType="submit" disabled={this.props.pristine || this.props.submitting} style={{display: 'block', margin: '20px auto 0 auto', width: '25%'}} block>Sign Up</Button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'register',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('register', Object.keys(errors)[0]))})(RegistrationForm);
