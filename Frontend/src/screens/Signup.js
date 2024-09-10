import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", location: "" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault();
        let URL = process.env.REACT_APP_API_URL + "api/user/createuser"

        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })
        });
        const json = await response.json();
        if (!json.success) {
            alert("Enter Valid Credentials");
        }
        else {
            localStorage.setItem("authtoken", json.authid);
            localStorage.setItem("usermail", credentials.email);
            navigate("/");
        }
    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    }
    return (
        <>
            <div className="container mt-5 d-flex justify-content-center align-items-center vh-100">
                <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px' }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control rounded-pill"
                                id="email"
                                aria-describedby="emailHelp"
                                value={credentials.email}
                                onChange={onChange}
                                name="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control rounded-pill"
                                id="password"
                                value={credentials.password}
                                onChange={onChange}
                                name="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary rounded-pill">
                                Submit
                            </button>
                            <Link className="btn btn-outline-primary rounded-pill" to="/signup">
                                New User
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
