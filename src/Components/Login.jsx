// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState(''); // State to hold error messages
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        // # {'email': 'asdasdasdasdsadsa'}
        setCredentials({ ...credentials, [name]: value });

        // Clear error message when user starts typing
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/account/login/', credentials);
            // localStorage.setItem('token', response.data.access);
            console.log(response.data)

            // if (response.data && !response.data.status) {
            //     // Custom error handling when 'status' is False in response data
            //     setError(response.data.message || "An unexpected error occurred during login.");
            // } else {
                // Assuming 'token' would be the appropriate key for the token in a successful response
                localStorage.setItem('token', response.data.token);
                // Redirect or perform further actions
                navigate('/home'); //
                console.log("Login successful", response)
            // }


            // ... additional actions such as redirecting the user
        } catch (error) {
            if (error.response) {
                console.error("Server responded with an error:", error.response);
                setError(error.response.data.detail || "An error occurred during login.");
            } else if (error.request) {
                console.error("No response received from server:", error.request);
                setError("No response received from server.");
            } else {
                console.error("Error setting up login request:", error.message);
                setError("Error setting up login request.");
            }
        }
    };


    return (
        <div>
            <div className="row">
                <div className="col-lg-12">


                            <h3 className="card-title text-center mb-4">Login</h3>
                            {error && <div className="alert alert-danger" role="alert">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={credentials.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={credentials.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                </div>
                            </form>

                    </div>
                </div>


            {error && <p className="error text-white">{error}</p>} {/* Display error message */}
        </div>
    );
}
