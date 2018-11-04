import React from 'react';
import './social-card-form.css';


export default function SocialCardForm() {
    return (
        <div className="social-card-form">
            <form>
                <label for="first_name">First Name: </label>
                <input id="first_name" placeholder="First Name..."></input>
                <br></br>
                <label for="last_name">Last Name: </label>
                <input id="last_name" placeholder="Last Name..."></input>
                <br></br>
                <label for="job_title">Job Title: </label>
                <input id="job_title" placeholder="Job Title..."></input>
                <br></br>
                <label for="experience">Experiences: </label>
                <input id="experience" placeholder="Experiences..."></input>
                <br></br>
                <label for="interests">Interests: </label>
                <input id="interests" placeholder="Interests..."></input>
                <br></br>
                <label for="personality">Personality: </label>
                <input id="personality" placeholder="Personality..."></input>
                <br></br>
                <label for="thoughts">Thoughts on teamwork: </label>
                <input id="thoughts" placeholder="e.g I think that teamwork is the key to success..."></input>
                <button className="social-card-form-btn">Submit</button>

            </form>
        </div>
    )
}
