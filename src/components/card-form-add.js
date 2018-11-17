import React from 'react';
import Input from './input';
import './card-form.css';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import {addCard} from '../actions/actionIndex'
import {nonEmpty, required} from '../validators';

export class CardFormAdd extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            submitStatus: false
        }
    }
    onSubmit(values){
        this.setState({submitStatus: true})
        console.log(values);
        const {first_name, last_name, job_title, experience, interest, personality, skill, thought} = values;
        const card = {first_name, last_name, job_title, experience, interest, personality, skill, thought};
        return this.props.dispatch(addCard(card))
    }

    render(){
        
        if (this.state.submitStatus === true){
            return <Redirect to="/dashboard" />
        }
    
        return (
            
            <form className="card-edit-form col-12" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <div className="form-left-column col-6">
                    <label htmlFor="first_name">First name</label>
                    <Field component={Input} type="text" name="first_name" required={[nonEmpty, required]} />
                    <label htmlFor="last_name">Last name</label>
                    <Field component={Input} type="text" name="last_name" />
                    <br></br>
                    <br></br>
                    <br></br>
                    <label htmlFor="experience">Experiences</label>
                    <Field component={Input} type="text" name="experience" />
                    <label htmlFor="thought">Thoughts</label>
                    <Field component={Input} type="text" name="thought" />
                </div>
                <div className="form-right-column col-6">
                    <label htmlFor="job_title">Job Title</label>
                    <Field component={Input} type="text" name="job_title" />    
                    <label htmlFor="personality">Personalities</label>
                    <Field component={Input} type="text" name="personality" />
                    <br></br>
                    <br></br>
                    <br></br>
                    <label htmlFor="interest">Interests</label>
                    <Field component={Input} type="text" name="interest" />
               
                    <label htmlFor="skill">Skills</label>
                    <Field component={Input} type="text" name="skill" />
                </div>
                <div className="col-12">
                    <button className="card-edit-submit-btn" type="submit" disabled={this.props.pristine || this.props.submitting}>
                        Save
                    </button>
                </div>
            </form>
    
        )
    }
    
}

export default reduxForm({form: 'addCard', onSubmitFail: (errors, dispatch) => dispatch(focus('addCard', Object.keys(errors)[0]))})(CardFormAdd);
