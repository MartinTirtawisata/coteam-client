import React from 'react';
import Input from './input';
import DropDownSelect from './dropdown-select';
import TagSelect from './tag-select';
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
        const {first_name, last_name, job_title, experience, interest, personality, skill, thought} = values;
        const card = {first_name, last_name, job_title, experience, interest, personality, skill, thought};
        return this.props.dispatch(addCard(card))
    }

    render(){
        if (this.state.submitStatus === true){
            return <Redirect to="/dashboard" />
        }
    
        return (
            <form className="card-edit-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <fieldset><h1>Create Your Profile</h1></fieldset>
                <label htmlFor="first_name">First name</label>
                <Field component={Input} type="text" name="first_name" required={[nonEmpty, required]} />
                <label htmlFor="last_name">Last name</label>
                <Field component={Input} type="text" name="last_name" />
                <label htmlFor="job_title">Job Title</label>
                <Field component={Input} type="text" name="job_title" /> 
                <label htmlFor="personality">Personality</label>
                <Field component={DropDownSelect} name="personality"/>
                <label htmlFor="experience">Experiences</label>
                <Field component={TagSelect} name="experience"/>
                <label htmlFor="interest">Interests</label>
                <Field component={TagSelect} name="interest"/>
                <label htmlFor="skill">Skills</label>
                <Field component={TagSelect} name="skill"/>            
                <label htmlFor="thought">What are your thoughts on teamwork?</label>
                <Field component={Input} type="text" name="thought" />
                <button className="card-edit-submit-btn" type="submit" disabled={this.props.pristine || this.props.submitting}>
                    Save
                </button>
           
            </form>
    
        )
    }
    
}

export default reduxForm({form: 'addCard', onSubmitFail: (errors, dispatch) => dispatch(focus('addCard', Object.keys(errors)[0]))})(CardFormAdd);
