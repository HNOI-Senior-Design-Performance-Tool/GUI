import logo from '../assets/HNO+GF+FINAL.png';
import PropTypes from "prop-types";
import {useState} from "react";
import axios from 'axios';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}



export default function Login({ setToken })  {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const submit = async e => {
        e.preventDefault();
        const res = await loginUser({
            username,
            password
        });

        if (res instanceof Error) {
            let loginFeedback = document.getElementById("loginResponse")
            loginFeedback.innerHTML = "Issue with login, please try again.";
            loginFeedback.className = "text-danger text-center my-2";
            let usernameInput = document.getElementById("usernameInput");
            let passwordInput = document.getElementById("passwordInput");
            usernameInput.className = "form-control is-invalid";
            passwordInput.className = "form-control is-invalid";
        }else{
            setToken(res.token);
        }
    }

    return (
        <>
            <div className="container-fluid vh-100">
                <div className="">
                    <div className="rounded d-flex justify-content-center">
                        <div className="col-md-4 col-sm-12 shadow-lg p-5 m-5 bg-dark">
                            <div className="text-center">
                                <img className="mb-3" src={logo} alt="" width={"90%"}/>
                            </div>
                            <form onSubmit={submit}>
                                <input type="username" style={{borderBottomLeftRadius:0, borderBottomRightRadius:0}} className="form-control" id="usernameInput" onChange={e => setUserName(e.target.value)} placeholder="Username"/>
                                <input type="password" style={{borderTopLeftRadius:0, borderTopRightRadius:0}} className="form-control" id="passwordInput" onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                                <p id="loginResponse" className="text-muted text-center my-2">Contact admin for login details!</p>
                                <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}