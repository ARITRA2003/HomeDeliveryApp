import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [credentials, setcredentials] = useState({name:"", email: "", password: "" ,location:""});
    let navigate = useNavigate();
    const handleSubmit=async(e)=>{
       e.preventDefault();
       const response = await fetch("http://localhost:5000/api/user/createuser", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.location})
      });
      const json = await response.json();
      if(!json.success){
        alert("Enter Valid Credentials");
      }
      else{
        localStorage.setItem("authtoken",json.authid);
        localStorage.setItem("usermail",credentials.email);
        navigate("/");
      }
    }
    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    }
    return (
        <>
            <div className="container mt-3">
            <h2 className='md-3'>Sign Up</h2>
            </div>
            <div className="container mt-4">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" value={credentials.name} onChange={onChange} name='name' minLength={5}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input type="text" className="form-control" value={credentials.location} onChange={onChange} name='location'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} name='email' />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={credentials.password} onChange={onChange}name='password' minLength={8}/>
                    </div>
                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link type="submit" className="m-3 btn btn-primary" to="/login">Already Registered</Link>
                </form>
            </div>
        </>
    )
}

export default Signup
