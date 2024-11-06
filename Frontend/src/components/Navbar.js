import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap';
import MyCart from "../screens/Mycart"
import { useCart } from '../ContextReducer/ContextReducerProvider';
import Modal from '../Modal';

const Navbar = () => {
    
    const [cartView, setCartView] = useState(false)
    // localStorage.setItem('temp', "first")

    const navigate=useNavigate();
    const handleClick=()=>{
        localStorage.removeItem("authtoken");
        navigate("/login");
    }

    const loadCart = () => {
        setCartView(true);
    }
    const data = useCart();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid ">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">FoodDelivery</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link  fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            {(localStorage.getItem("authtoken"))?   
                            <li className="nav-item">
                                <Link className="nav-link" to="/myorders">My Orders</Link>
                            </li> : ""}
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                        </ul>
                        {
                            (!localStorage.getItem("authtoken"))?

                            <div className="d-flex">
                                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>  
                                <Link className="btn bg-white text-success mx-1" to="/signup">Sign Up</Link>
                            </div>
                             :
                            <>
                            <div className="d-flex">
                                <Link className="btn bg-white text-success mx-1" to="/" onClick={loadCart} >
                                    My Cart  {'  '}
                                {(data.length!==0) && <Badge pill bg="danger">{data.length}</Badge>}
                                </Link>  
                            </div>

                            {cartView ? <Modal onClose={() => setCartView(false)}><MyCart/></Modal> : ""}

                            <div className="d-flex">
                                <div className="btn bg-white text-success mx-1" onClick={handleClick} >Log Out</div>  
                            </div>
                            </>
                        }
                    </div>
                </div>
            </nav>
            <br></br>
        </div>
    )
}

export default Navbar
