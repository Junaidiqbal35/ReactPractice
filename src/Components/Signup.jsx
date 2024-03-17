// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
    const [userData, setUserData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        password: '',
        algorand_public_address: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
             // Implement your logic to submit the data to your backend here.
            // For example, using axios:
            const response = await axios.post('http://localhost:8000/api/v1/account/create/', userData);
            console.log(response.data); // Handle the response accordingly
        } catch (error) {
            // Handle error here
            setError('An error occurred during signup.');
        }
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-12">

                            <h3 className="card-title text-center mb-4">Signup</h3>
                            {error && <div className="alert alert-danger" role="alert">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="first_name" className="form-label">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="first_name"
                                        name="first_name"
                                        value={userData.first_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="last_name" className="form-label">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="last_name"
                                        name="last_name"
                                        value={userData.last_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone_number"
                                        name="phone_number"
                                        value={userData.phone_number}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>



                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        value={userData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Include other fields similarly */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={userData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="algorand_public_address" className="form-label">Algorand Public Address</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="algorand_public_address"
                                        name="algorand_public_address"
                                        value={userData.algorand_public_address}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-success">Sign Up</button>
                                </div>
                            </form>

                </div>
            </div>
        </div>
    );
}
