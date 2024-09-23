import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyOrders = () => {
    const [orderData, setorderData] = useState({});
    let URL = process.env.REACT_APP_API_URL + "api/auth/getAllOrderData";
    
    const fetchMyOrder = async () => {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('usermail')
            })
        });

        const json = await response.json();
        setorderData(json.data);
    };

    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    useEffect(() => {
        fetchMyOrder();
    }, []);
    /* eslint-enable-next-line react-hooks/exhaustive-deps */

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='container'>
                <h2 className="mt-4">My Orders</h2>
                <div className='row'>
                    {Object.keys(orderData).length > 0 ? 
                        Array(orderData).map(data => {
                            return (
                                data.myOrder ?
                                    data.myOrder.slice(0).reverse().map((item, idx) => {
                                        return (
                                            <div key={idx} className='table-responsive mt-4'>
                                                <h4>Order Date: {item[0].Order_date}</h4>
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Item Name</th>
                                                            <th scope="col">Quantity</th>
                                                            <th scope="col">Size</th>
                                                            <th scope="col">Price</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {item.slice(1).map((arrayData, index) => (
                                                            <tr key={arrayData.id}>
                                                                <th scope="row">{index+1}</th>
                                                                <td>{arrayData.name}</td>
                                                                <td>{arrayData.quantity}</td>
                                                                <td>{arrayData.size}</td>
                                                                <td>₹{arrayData.price}/-</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                <hr />
                                            </div>
                                        );
                                    }) 
                                    : ""
                            );
                        })
                    : 
                    <div>No Data Available</div>
                    }
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default MyOrders;
