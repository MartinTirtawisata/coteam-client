import React from 'react';
import './login.css'

export default function Login(){
    return(
        <div>
            <form action="#">
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