import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatch } from "../ContextReducer/ContextReducerProvider"

const Foodcard = (props) => {
    let dispatch = useDispatch();
    let data = useCart();
    const types = props.options;
    const pricetypes = Object.keys(types);
    const [quantity, setquantity] = useState(1);
    const [size, setsize] = useState("");

    let finalPrice = quantity * parseInt(types[size]);

    const Refprice = useRef();

    const handleAddtoCart = async () => {
        let ispresent = []
        for (const i of data) {
            if (i.id === props.food._id) {
                ispresent = i;
                break;  
            }
        }
        if (ispresent == []) {
            await dispatch({
                type: "ADD", id: props.food._id,
                name: props.food.name, price: finalPrice, quantity: quantity,
                size: size
            })
        }
        else {
            if (ispresent.size === size) {
                await dispatch({
                    type: "UPDATE", id: props.food._id,
                    price: finalPrice, quantity: quantity,
                })
            }
            else {
                await dispatch({
                    type: "ADD", id: props.food._id,
                    name: props.food.name, price: finalPrice, quantity: quantity,
                    size: size
                })
            }
        }
    }

    useEffect(() => {
        setsize(Refprice.current.value);
    }, []);

    return (
        <div className="card m-3 shadow-sm" style={{ width: "18rem", maxHeight: "360px", minHeight: "180px", borderRadius: "10px", overflow: "hidden" , backgroundColor: "#ff7043" , color: "white"}}>
            <img
                src={props.food.img}
                className="card-img-top"
                alt={props.food.name}
                style={{ objectFit: "cover", height: "150px" }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-center font-weight-bold" style={{ marginTop: "10px" }}>
                    {props.food.name}
                </h5>
                {/* <p className="card-text">{props.desc}</p> */}
                <div className="container mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <select className="form-select form-select-sm bg-light border-0" onChange={(e) => { setquantity(e.target.value) }} style={{ width: "45%" }}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                );
                            })}
                        </select>
                        <select className="form-select form-select-sm bg-light border-0" ref={Refprice} onChange={(e) => { setsize(e.target.value) }} style={{ width: "45%" }}>
                            {pricetypes.map((value) => {
                                return <option key={value} value={value}>{value}</option>
                            })}
                        </select>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-success font-weight-bold" style={{ fontSize: "1.2rem" }}>
                            ₹{finalPrice}
                        </div>
                        <button className="btn btn-success btn-sm" onClick={handleAddtoCart} style={{ fontSize: "0.9rem" }}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foodcard
