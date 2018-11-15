import React from 'react';
import Input from './input';
import './card-edit-form.css';
import {Field, reduxForm, focus} from 'redux-form';
import {editCard} from '../actions/actionIndex'
import {required, nonEmpty} from '../validators';

export class CardEditForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {}
    }
    onSubmit(values){
        console.log(values);
        console.log(this.props.socialcardid)
        const socialCardId = this.props.socialcardid
        const {first_name, last_name, job_title, experience, interest, personality, skill, thought} = values;
        const card = {first_name, last_name, job_title, experience, interest, personality, skill, thought};
        return this.props.dispatch(editCard(card, socialCardId))
    }

    render(){
        return (
            
            <form className="card-edit-form col-12" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                <div className="form-left-column col-6">
                    <label htmlFor="first_name">First name</label>
                    <Field component={Input} type="text" name="first_name" validate={[required, nonEmpty]} />
                    <label htmlFor="last_name">Last name</label>
                    <Field component={Input} type="text" name="last_name" validate={[required, nonEmpty]} />
                    <br></br>
                    <br></br>
                    <br></br>
                    <label htmlFor="experience">Experiences</label>
                    <Field component={Input} type="text" name="experience" validate={[required, nonEmpty]} />
                    <label htmlFor="thought">Thoughts</label>
                    <Field component={Input} type="text" name="thought" validate={[required, nonEmpty]} />
                </div>
                <div className="form-right-column col-6">
                    <label htmlFor="job_title">Job Title</label>
                    <Field component={Input} type="text" name="job_title" validate={[required, nonEmpty]} />    
                    <label htmlFor="personality">Personalities</label>
                    <Field component={Input} type="text" name="personality" validate={[required, nonEmpty]} />
                    <br></br>
                    <br></br>
                    <br></br>
                    <label htmlFor="interest">Interests</label>
                    <Field component={Input} type="text" name="interest" validate={[required, nonEmpty]} />
               
                    <label htmlFor="skill">Skills</label>
                    <Field component={Input} type="text" name="skill" validate={[required, nonEmpty]} />
                </div>
                <div className="col-12">
                    <button className="card-edit-submit-btn"
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Save
                    </button>
                </div>
                
            </form>
    
        )
    }
    
}

export default reduxForm({form: 'editCard', onSubmitFail: (errors, dispatch) => dispatch(focus('editCard', Object.keys(errors)[0]))})(CardEditForm);
