import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatch} from "../ContextReducer/ContextReducerProvider"

const Foodcard = (props) => {
    let dispatch=useDispatch();
    let data=useCart();
    const types=props.options;
    const pricetypes=Object.keys(types);
    const [quantity,setquantity]=useState(1);
    const [size,setsize]=useState("");

    let finalPrice= quantity * parseInt(types[size]);

    const Refprice=useRef();
    
    const handleAddtoCart=async()=>{
        let ispresent=[]
       for(const  i of data){
          if(i.id==props.food._id){
             ispresent=i;
             break;
          }
       }
       if(ispresent==[]){
        await dispatch({type:"ADD",id:props.food._id,
        name:props.food.name,price:finalPrice,quantity:quantity,
        size:size
        })
       }
       else{
        if(ispresent.size === size){
            await dispatch({type:"UPDATE",id:props.food._id,
            price:finalPrice,quantity:quantity,
            })
        }
        else{
            await dispatch({type:"ADD",id:props.food._id,
            name:props.food.name,price:finalPrice,quantity:quantity,
            size:size
            })
        }
       }
       
    //    console.log(data);
    }

    useEffect(() => {
        setsize(Refprice.current.value);
      },[]);

    return (
        <div>
            <div className="card m-3" style={{ "width": "18rem","maxHeight":"360px" ,"minHeight":"180px"}}>
                <img src={props.food.img} className="card-img-top" alt="..." style={{"objectFit":"fill","height":"150px"}}/>
                <h5 className="card-title">
                    {props.food.name}
                </h5>
                {/* <div className="card-body">
                    <p className="card-text">{props.desc}</p>
                </div> */}
                <div className="container w-102">
                    <select className='m-2 h-30 bg-success  rounded' onChange={(e)=>{setquantity(e.target.value)}}>
                        {
                            Array.from(Array(6),(e,i)=>{
                                return (
                                   <option key={i+1} value={i+1}>{i+1}</option>
                                );
                            })
                        }
                    </select>
                    <select className='m-2 h-32 bg-success  rounded' ref={Refprice}  onChange={(e)=>{setsize(e.target.value)}}>
                        {
                        pricetypes.map((value)=>{
                            return <option key={value} value={value}>{value}</option>          
                        })
                        }
                    </select>
                    <div className='d-inline '>
                      ${finalPrice}
                    </div>
                    <hr></hr>
                <button className="btn btn-success justify-center ms-2" onClick={handleAddtoCart} >Add to Cart</button>  
                </div>          
            </div>
        </div>
    )
}

export default Foodcard
