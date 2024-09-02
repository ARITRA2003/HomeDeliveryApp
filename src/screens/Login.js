import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setcredentials] = useState({email: "", password: "" });
    let navigate = useNavigate();
    const handleSubmit=async(e)=>{
       e.preventDefault();
       let  URL =process.env.REACT_APP_API_URL +  "/api/user/loginuser"
       const response = await fetch(URL, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email:credentials.email,password:credentials.password})
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
    <h2 className='md-3'>Login </h2>
    </div>
    <div className="container mt-4">
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} name='email' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={credentials.password} onChange={onChange}name='password' />
                    </div>
                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link type="submit" className="m-3 btn btn-primary" to="/signup">New User</Link>
                </form>
            </div>
    </>
  )
}

export default Login
