import React from 'react';
import './question-form-section.css';

import QuestionForm from './question-form';


export default function QuestionFormSection(){
    return (
        <div className="question-form-section">
            <form>
                <QuestionForm />
                <QuestionForm />
                <QuestionForm />
                <QuestionForm />
                <QuestionForm />
            </form>
            <button>Submit</button>
        </div>
    )
}