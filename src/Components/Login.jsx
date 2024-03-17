// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState(''); // State to hold error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });

        // Clear error message when user starts typing
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update the URL with the actual endpoint of your authentication API
            const response = await axios.post('http://localhost:8000/api/v1/account/login/', credentials);
            console.log(response)
            localStorage.setItem('token', response.data.access);
            // Handle response data (e.g., saving the token and redirecting the user)
        } catch (error) {
            if (error.response) {
                // If the request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setError(error.response.data.message || "An error occurred during login.");
            } else if (error.request) {
                // The request was made but no response was received
                setError("No response received from server.");
            } else {
                // Something happened in setting up the request that triggered an error
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
