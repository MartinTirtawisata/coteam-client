import React from 'react';
import './register.css'

export default class Register extends React.Component{
    render(){
        return(
            <div>
                <form action="#">
                    <label for="first_name">First Name</label>
                    <input id="first_name" placeholder="First Name..."></input>
                    <br></br>
                    <label for="last_name">Last Name</label>
                    <input id="last_name" placeholder="Last Name..."></input>
                    <br></br>
                    <label for="email">Email</label>
                    <input id="email" placeholder="Email..."></input>
                    <br></br>
                    <label for="password">Password</label>
                    <input id="password" placeholder="Password..."></input>
                    <br></br>
                </form>
            </div>
        )
    }
}