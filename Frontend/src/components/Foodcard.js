import React, {  useState } from 'react'
import { useCart, useDispatch } from "../ContextReducer/ContextReducerProvider"

const Foodcard = (props) => {
    let dispatch = useDispatch();
    let data = useCart();
    const types = props.options;
    const food = props.food;
    const pricetypes = Object.keys(types);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(pricetypes[0] || "");

    let finalPrice = quantity * parseInt(types[size]);

    const handleAddtoCart = async () => {
        const isPresent = data.find(item => item.id === food._id);
        if (!isPresent) {
            await dispatch({
                type: "ADD", id: food._id,
                name: food.name, price: finalPrice, quantity: quantity,
                size: size
            })
        }
        else {
            if (isPresent.size === size) {
                await dispatch({
                    type: "UPDATE", id: food._id,
                    price: finalPrice, quantity: quantity,
                })
            }
            else {
                await dispatch({
                    type: "ADD", id: food._id,
                    name: food.name, price: finalPrice, quantity: quantity,
                    size: size
                })
            }
        }
        setQuantity(1);
        setSize(pricetypes[0] || "");
    }

    return (
        <div className="card m-3 shadow-sm" style={{ width: "18rem", maxHeight: "360px", minHeight: "180px", borderRadius: "10px", overflow: "hidden" , backgroundColor: "#ff7043" , color: "white"}}>
            <img
                src={food.img}
                className="card-img-top"
                alt={food.name}
                style={{ objectFit: "cover", height: "150px" }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-center font-weight-bold" style={{ marginTop: "10px" }}>
                    {food.name}
                </h5>
                <div className="container mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <select className="form-select form-select-sm bg-light border-0" value = {quantity} onChange={(e) => { setQuantity(e.target.value) }} style={{ width: "45%" }}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                );
                            })}
                        </select>
                        <select className="form-select form-select-sm bg-light border-0" value={size} onChange={(e) => { setSize(e.target.value) }} style={{ width: "45%" }}>
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
