import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Foodcard from '../components/Foodcard'
import Footer from '../components/Footer'
import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
  const [search,setsearch]=useState('');
  const [foodCategory,setFoodCategory]=useState([]);
  const [foodItems,setfoodItems]=useState([]);

  const FoodData=async()=>{
        let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setFoodCategory(response[1]);
      setfoodItems(response[0]);
  }
  useEffect(()=>{
     FoodData();
  },[])

  const onChange=()=>{

  }

  return (
    <div>
      <Navbar/>
      <div>
      <Carousel >
            <Carousel.Item interval={1000} style={{"maxHeight":"500px"}}>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/random/1×1/?burger"
                    alt="First slide"
                    style={{"objectFit":"contain !important"}}
                />
                <Carousel.Caption>
                    <div className="d-flex justify-contain-center" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
                        {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500} style={{"maxHeight":"500px"}}>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/random/1×1/?pizza"
                    alt="Second slide"
                    style={{"objectFit":"contain !important"}}
                />
                <Carousel.Caption>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
                        {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                    </form>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{"maxHeight":"500px"}}>
                <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/random/1×1/?pastry"
                    alt="Third slide"
                    style={{"objectFit":"contain !important",}}
                />
                <Carousel.Caption>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
                        {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                    </form>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      </div>
      <div className='container m-2'>
        {
           (foodCategory!==[])? 
           foodCategory.map((data)=>{
            return(
              <div className='row mb-3'>
              <div key={data._id} className='fs-3 m-3'> {data.CategoryName}</div>
              <hr/>
              {
                (foodItems!==[])? 
                foodItems.filter((value)=> (value.CategoryName===data.CategoryName) && (value.name.toLowerCase().includes(search.toLowerCase())))
                 .map((items)=>{
                  return(
                    <div key={items._id} className='col-12 col-md-6 col-lg-3'>
                        <Foodcard
                        food={items}
                        options={items.options[0]}
                        />
                    </div>
                  )
                 })
                : <div> No food Item Avilable</div>
              }
              </div>
            )
           })
           : ""
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Home
